// plugins/poststory.js — Miss Chatra /story Wizard + /tostory auto-forward
"use strict";

const fs   = require("fs");
const path = require("path");

const DB_DIR     = path.join(__dirname, "..", "database");
const SCHED_FILE = path.join(DB_DIR, "scheduled_stories.json");

// ── Scheduler storage ─────────────────────────────────────────────────────────
function loadScheduled() {
  try { return JSON.parse(fs.readFileSync(SCHED_FILE, "utf8")); } catch { return []; }
}
function saveScheduled(arr) {
  try { fs.writeFileSync(SCHED_FILE, JSON.stringify(arr, null, 2)); } catch {}
}
function addScheduled(entry) { const a = loadScheduled(); a.push(entry); saveScheduled(a); }
function removeScheduled(id) { saveScheduled(loadScheduled().filter(e => e.id !== id)); }

// ── In-memory wizard sessions  {userId: sessionObj} ──────────────────────────
if (!global._storyWizard) global._storyWizard = {};

// ── Colour palette for text status backgrounds ────────────────────────────────
const BG_COLORS = ["#000000","#1A1A2E","#16213E","#0F3460","#533483",
                   "#2C3E50","#1B4332","#6D4C41","#B71C1C","#4A148C","#006064","#E65100"];
function randBg() { return BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)]; }

// ── Media type label ──────────────────────────────────────────────────────────
function typeLabel(type) {
  return { image:"📸 Image", video:"🎥 Video", sticker:"🎞 Sticker",
           ptt:"🎙 Voice Note", audio:"🎵 Audio", document:"📄 Document",
           text:"💬 Text" }[type] || type;
}
function destLabel(d) {
  return { status:"My Status 📢", channel:"Channel 📡", group:"Group 👥" }[d] || d;
}

// ── Classify incoming message ─────────────────────────────────────────────────
function classifyMessage(m) {
  const mtype = m.mtype || "";
  const msg   = m.message || {};
  if (mtype === "imageMessage"    || msg.imageMessage)                          return "image";
  if (mtype === "videoMessage"    || msg.videoMessage)                          return "video";
  if (mtype === "stickerMessage"  || msg.stickerMessage)                        return "sticker";
  if (mtype === "pttMessage"      || (mtype === "audioMessage" && m.msg?.ptt))  return "ptt";
  if (mtype === "audioMessage"    || msg.audioMessage)                          return "audio";
  if (mtype === "documentMessage" || msg.documentMessage)                       return "document";
  if (m.body)                                                                   return "text";
  return null;
}

// ── Download media from a serialized message (uses serialize.js m.download()) ─
// serialize.js sets:  m.download = () => sock.downloadMediaMessage(m.msg)
// This is the CORRECT way — m.msg is the inner media proto object Baileys needs.
async function downloadMedia(sock, m) {
  const mtype  = m.mtype || "";
  const msg    = m.message || {};
  const inner  = m.msg || msg[mtype] || {};
  const ptt    = !!(inner.ptt || mtype === "pttMessage");
  const mime   = inner.mimetype || "";

  // ① Use serialize.js m.download() — most reliable path
  if (typeof m.download === "function") {
    try {
      const buf = await m.download();
      if (buf && buf.length > 0) {
        console.log(`[STORY] download() ok — ${buf.length} bytes`);
        return { buffer: buf, mtype, mimetype: mime, ptt };
      }
    } catch (e) { console.error("[STORY] m.download() failed:", e.message); }
  }

  // ② sock.downloadMediaMessage(m.msg) — direct inner-object path
  try {
    const buf = await sock.downloadMediaMessage(inner);
    if (buf && buf.length > 0) {
      console.log(`[STORY] downloadMediaMessage(inner) ok — ${buf.length} bytes`);
      return { buffer: buf, mtype, mimetype: mime, ptt };
    }
  } catch (e) { console.error("[STORY] downloadMediaMessage(inner) failed:", e.message); }

  // ③ sock.downloadMediaMessage(m) — full serialized message fallback
  try {
    const buf = await sock.downloadMediaMessage(m);
    if (buf && buf.length > 0) {
      console.log(`[STORY] downloadMediaMessage(m) ok — ${buf.length} bytes`);
      return { buffer: buf, mtype, mimetype: mime, ptt };
    }
  } catch (e) { console.error("[STORY] downloadMediaMessage(m) failed:", e.message); }

  console.error("[STORY] All download methods failed for", mtype);
  return null;
}

// ── Build statusJidList — required for Baileys 7.x status@broadcast ──────────
// Without this, Baileys sends silently to nobody.
function buildStatusJidList(sock) {
  const jids = new Set();

  // ① Always include self
  try {
    const selfRaw = sock.user?.id || sock.user?.jid || "";
    const selfNum = selfRaw.split(":")[0].split("@")[0];
    if (selfNum) jids.add(`${selfNum}@s.whatsapp.net`);
  } catch {}

  // ② __knownContacts — populated by message.js on every incoming msg
  try {
    if (global.__knownContacts instanceof Set) {
      for (const jid of global.__knownContacts) {
        if (jid.endsWith("@s.whatsapp.net")) jids.add(jid);
      }
    }
  } catch {}

  // ③ Baileys contacts store
  try {
    const sc = global.__botStore?.contacts;
    if (sc instanceof Map) {
      for (const [jid] of sc) {
        if (typeof jid === "string" && jid.endsWith("@s.whatsapp.net")) jids.add(jid);
      }
    } else if (sc && typeof sc === "object") {
      for (const jid of Object.keys(sc)) {
        if (jid.endsWith("@s.whatsapp.net")) jids.add(jid);
      }
    }
  } catch {}

  // ④ LID map
  try {
    for (const entry of Object.values(global.__lidMap || {})) {
      const real = entry?.id || entry?.realJid || "";
      if (real.endsWith("@s.whatsapp.net")) jids.add(real);
    }
  } catch {}

  const list = [...jids];
  console.log(`[STORY] statusJidList: ${list.length} contacts`);
  return list;
}

// ── Post one item to status@broadcast ────────────────────────────────────────
async function postToStatus(sock, item) {
  const { type, buffer, mimetype, caption } = item;
  const JID  = "status@broadcast";
  const opts = { statusJidList: buildStatusJidList(sock) };

  if (!buffer || buffer.length === 0) {
    console.error("[STORY] postToStatus: empty buffer for type", type);
    return false;
  }
  console.log(`[STORY] Sending ${type} (${buffer.length}B) → status, caption="${caption||""}"`);

  const TMP_DIR = path.join(DB_DIR, "story_tmp");
  if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });

  // Write buffer to a temp file and use { url } approach — more reliable than raw Buffer
  // Baileys handles local file URLs correctly for media upload to WA servers
  const tmpFile = path.join(TMP_DIR, `status_${Date.now()}.bin`);
  try {
    fs.writeFileSync(tmpFile, buffer);
  } catch (e) {
    console.error("[STORY] Failed to write temp file:", e.message);
    return false;
  }

  try {
    switch (type) {
      case "image":
        await sock.sendMessage(JID, { image: { url: tmpFile }, caption: caption || "" }, opts);
        break;
      case "video":
        await sock.sendMessage(JID, { video: { url: tmpFile }, caption: caption || "", gifPlayback: false }, opts);
        break;
      case "sticker": // stickers not supported as status — send as image
        await sock.sendMessage(JID, { image: { url: tmpFile }, caption: caption || "" }, opts);
        break;
      case "ptt":
        await sock.sendMessage(JID, { audio: { url: tmpFile }, ptt: true, mimetype: mimetype || "audio/ogg; codecs=opus" }, opts);
        break;
      case "audio":
        await sock.sendMessage(JID, { audio: { url: tmpFile }, ptt: false, mimetype: mimetype || "audio/mpeg" }, opts);
        break;
      case "document":
        await sock.sendMessage(JID, { image: { url: tmpFile }, caption: caption || "" }, opts);
        break;
      case "text":
        // Text status — no temp file needed, delete immediately
        try { fs.unlinkSync(tmpFile); } catch {}
        await sock.sendMessage(JID, {
          text:            caption || buffer.toString("utf8") || "",
          backgroundColor: randBg(),
          font:            Math.floor(Math.random() * 5),
        }, opts);
        console.log(`[STORY] ✅ Text status posted`);
        return true;
      default:
        console.error("[STORY] Unknown type:", type);
        try { fs.unlinkSync(tmpFile); } catch {}
        return false;
    }
    console.log(`[STORY] ✅ Status posted (${type})`);
    return true;
  } catch (e) {
    console.error(`[STORY] ❌ postToStatus(${type}):`, e.message);
    return false;
  } finally {
    // Clean up temp file
    setTimeout(() => { try { fs.unlinkSync(tmpFile); } catch {} }, 30000);
  }
}

// ── Post to channel ───────────────────────────────────────────────────────────
async function postToChannel(sock, channelJid, item) {
  const { type, buffer, mimetype, caption } = item;
  try {
    switch (type) {
      case "image":    await sock.sendMessage(channelJid, { image: buffer, caption: caption || "" }); break;
      case "video":    await sock.sendMessage(channelJid, { video: buffer, caption: caption || "" }); break;
      case "sticker":  await sock.sendMessage(channelJid, { sticker: buffer }); break;
      case "ptt":      await sock.sendMessage(channelJid, { audio: buffer, ptt: true,  mimetype: mimetype || "audio/ogg; codecs=opus" }); break;
      case "audio":    await sock.sendMessage(channelJid, { audio: buffer, ptt: false, mimetype: mimetype || "audio/mpeg" }); break;
      case "document": await sock.sendMessage(channelJid, { document: buffer, mimetype: mimetype || "application/octet-stream" }); break;
      case "text":     await sock.sendMessage(channelJid, { text: caption || buffer.toString("utf8") }); break;
      default: return false;
    }
    return true;
  } catch (e) { console.error("[STORY] postToChannel:", e.message); return false; }
}

// ── Post to group ─────────────────────────────────────────────────────────────
async function postToGroup(sock, groupJid, item) {
  const { type, buffer, mimetype, caption } = item;
  try {
    switch (type) {
      case "image":    await sock.sendMessage(groupJid, { image: buffer, caption: caption || "" }); break;
      case "video":    await sock.sendMessage(groupJid, { video: buffer, caption: caption || "" }); break;
      case "sticker":  await sock.sendMessage(groupJid, { sticker: buffer }); break;
      case "ptt":      await sock.sendMessage(groupJid, { audio: buffer, ptt: true,  mimetype: mimetype || "audio/ogg; codecs=opus" }); break;
      case "audio":    await sock.sendMessage(groupJid, { audio: buffer, ptt: false, mimetype: mimetype || "audio/mpeg" }); break;
      case "document": await sock.sendMessage(groupJid, { document: buffer, mimetype: mimetype || "application/octet-stream" }); break;
      case "text":     await sock.sendMessage(groupJid, { text: caption || buffer.toString("utf8") }); break;
      default: return false;
    }
    return true;
  } catch (e) { console.error("[STORY] postToGroup:", e.message); return false; }
}

// ── Config helpers ────────────────────────────────────────────────────────────
function getChannelJid() {
  try {
    const cfg = JSON.parse(fs.readFileSync(path.join(DB_DIR, "justicetechconfig.json"), "utf8"));
    return cfg?.communities?.channel_id || "";
  } catch { return ""; }
}
function getActiveGroups() {
  return [...(global.__activeGroups || new Set())].filter(j => j.endsWith("@g.us"));
}
function getTimezoneOffset(tz) {
  try { const n = new Date(); const l = new Date(n.toLocaleString("en-US", { timeZone: tz })); return l - n; }
  catch { return 0; }
}

// ── Execute post across all items and destinations ────────────────────────────
async function executePost(sock, items, destinations, channelJid, groupJids) {
  const results = [];
  for (const item of items) {
    for (const dest of destinations) {
      if (dest === "status") {
        const ok = await postToStatus(sock, item);
        results.push({ dest: "status", type: item.type, ok });
        await new Promise(r => setTimeout(r, 800));
      } else if (dest === "channel" && channelJid) {
        const ok = await postToChannel(sock, channelJid, item);
        results.push({ dest: "channel", type: item.type, ok });
      } else if (dest === "group") {
        for (const gJid of (groupJids || [])) {
          const ok = await postToGroup(sock, gJid, item);
          results.push({ dest: gJid, type: item.type, ok });
          await new Promise(r => setTimeout(r, 400));
        }
      }
    }
  }
  return results;
}

function buildResultSummary(results) {
  const ok = results.filter(r => r.ok).length, bad = results.filter(r => !r.ok).length;
  if (!bad)    return `✅ All ${ok} post(s) sent successfully!`;
  if (!ok)     return `❌ All ${results.length} post(s) failed.`;
  return `⚠️ ${ok} sent, ${bad} failed out of ${results.length}.`;
}

// ── Build preview text ────────────────────────────────────────────────────────
function buildPreview(session) {
  const { items, destinations } = session;
  const lines = [`📋 *Story Preview*`, ``, `*Content (${items.length} item${items.length !== 1 ? "s" : ""}):*`];
  items.forEach((it, i) => {
    const cap = it.caption ? `\n    Caption: "${it.caption}"` : "";
    lines.push(`  ${i + 1}. ${typeLabel(it.type)}${cap}`);
  });
  lines.push(``, `*Destination(s):*`);
  destinations.forEach(d => lines.push(`  • ${destLabel(d)}`));
  lines.push(``, `*Ready to post?*`,
    `Reply *now* to post immediately`,
    `Reply *schedule HH:MM* to schedule (24h, e.g. schedule 08:30)`,
    `Reply *cancel* to discard`);
  return lines.join("\n");
}

// ── Ask destination ───────────────────────────────────────────────────────────
async function askDestination(sock, chatId, m, session) {
  const channelJid = getChannelJid();
  const groups     = getActiveGroups();
  const lines = [
    `📍 *Where should this be posted?*`, ``,
    `1️⃣  My Status _(visible to all contacts)_`,
    `2️⃣  Group Post _(send to ${groups.length} active group${groups.length !== 1 ? "s" : ""})_`,
    channelJid
      ? `3️⃣  Channel Post _(post to your channel)_`
      : `3️⃣  Channel Post _(no channel configured)_`,
    channelJid
      ? `4️⃣  My Status + Channel`
      : `4️⃣  My Status + Channel _(no channel configured)_`,
    ``, `Reply *1*, *2*, *3*, or *4*. Type *cancel* to abort.`,
  ];
  await sock.sendMessage(chatId, { text: lines.join("\n") }, { quoted: m });
}

// ──────────────────────────────────────────────────────────────────────────────
// WIZARD STEP HANDLER — returns true if this message was consumed
// ──────────────────────────────────────────────────────────────────────────────
async function handleWizardMessage(sock, m, userId, chatId, body) {
  const session = global._storyWizard[userId];
  if (!session) return false;

  const txt    = (body || "").trim().toLowerCase();
  const rawTxt = (body || "").trim();

  // Universal cancel
  if (txt === "cancel") {
    delete global._storyWizard[userId];
    await sock.sendMessage(chatId, { text: "❌ Story wizard cancelled." }, { quoted: m });
    return true;
  }

  // ── STEP: collecting ──────────────────────────────────────────────────────
  if (session.step === "collecting") {
    if (txt === "done") {
      if (session.items.length === 0) {
        await sock.sendMessage(chatId, { text: "⚠️ No content added yet. Send at least one item, or type *cancel*." }, { quoted: m });
        return true;
      }
      const needsCaption = session.items.some(it => it.type !== "text" && !it.captioned);
      if (needsCaption) {
        session.step = "captioning";
        const idx  = session.items.findIndex(it => it.type !== "text" && !it.captioned);
        session.currentCaptionIdx = idx;
        const item = session.items[idx];
        await sock.sendMessage(chatId, {
          text: `📝 *Add Caption* (${idx + 1}/${session.items.length})\n\n${typeLabel(item.type)}\n\nReply with a caption, or type *skip* / *done* to skip all.`
        }, { quoted: m });
      } else {
        session.step = "destination";
        await askDestination(sock, chatId, m, session);
      }
      return true;
    }

    const mediaType = classifyMessage(m);

    if (mediaType && mediaType !== "text") {
      const mediaData = await downloadMedia(sock, m);
      if (!mediaData || !mediaData.buffer || mediaData.buffer.length === 0) {
        await sock.sendMessage(chatId, { text: "⚠️ Could not download that media. Please try again." }, { quoted: m });
        return true;
      }
      const inlineCap = m.msg?.caption || m.msg?.text || "";
      session.items.push({ type: mediaType, buffer: mediaData.buffer, mimetype: mediaData.mimetype, ptt: mediaData.ptt, caption: inlineCap, captioned: false });
      const count = session.items.length;
      await sock.sendMessage(chatId, {
        text: `✅ *Item ${count} added* — ${typeLabel(mediaType)}\n\nSend more items, or type *done* when finished.\n_(${count} item${count !== 1 ? "s" : ""} queued)_`
      }, { quoted: m });
      return true;
    }

    if (mediaType === "text" && rawTxt && rawTxt !== "done" && rawTxt !== "cancel") {
      session.items.push({ type: "text", buffer: Buffer.from(rawTxt, "utf8"), mimetype: "text/plain", ptt: false, caption: rawTxt, captioned: true });
      const count = session.items.length;
      await sock.sendMessage(chatId, {
        text: `✅ *Item ${count} added* — 💬 Text\n\nSend more items, or type *done* when finished.\n_(${count} item${count !== 1 ? "s" : ""} queued)_`
      }, { quoted: m });
      return true;
    }

    await sock.sendMessage(chatId, {
      text: `ℹ️ Send media (image, video, sticker, voice, audio) or type text.\nType *done* when finished, *cancel* to abort.`
    }, { quoted: m });
    return true;
  }

  // ── STEP: captioning ──────────────────────────────────────────────────────
  if (session.step === "captioning") {
    const idx  = session.currentCaptionIdx;
    const item = session.items[idx];

    if (txt === "done") {
      session.step = "destination";
      await askDestination(sock, chatId, m, session);
      return true;
    }
    if (txt === "skip") {
      item.captioned = true;
      const nextIdx = session.items.findIndex((it, i) => i > idx && it.type !== "text" && !it.captioned);
      if (nextIdx === -1) { session.step = "destination"; await askDestination(sock, chatId, m, session); }
      else {
        session.currentCaptionIdx = nextIdx;
        const nItem = session.items[nextIdx];
        await sock.sendMessage(chatId, {
          text: `📝 *Add Caption* (${nextIdx + 1}/${session.items.length})\n\n${typeLabel(nItem.type)}\n\nReply with a caption, or type *skip* / *done*.`
        }, { quoted: m });
      }
      return true;
    }

    item.caption   = rawTxt;
    item.captioned = true;
    const nextIdx = session.items.findIndex((it, i) => i > idx && it.type !== "text" && !it.captioned);
    if (nextIdx === -1) { session.step = "destination"; await askDestination(sock, chatId, m, session); }
    else {
      session.currentCaptionIdx = nextIdx;
      const nItem = session.items[nextIdx];
      await sock.sendMessage(chatId, {
        text: `✅ Caption saved!\n\n📝 *Add Caption* (${nextIdx + 1}/${session.items.length})\n\n${typeLabel(nItem.type)}\n\nReply with a caption, or type *skip* / *done*.`
      }, { quoted: m });
    }
    return true;
  }

  // ── STEP: destination ──────────────────────────────────────────────────────
  if (session.step === "destination") {
    const choice = txt.replace(/[^1-4]/g, "");
    const map    = { "1": "status", "2": "group", "3": "channel", "4": "both" };
    if (!map[choice]) {
      await sock.sendMessage(chatId, {
        text: `⚠️ Please reply with *1*, *2*, *3*, or *4*:\n\n1️⃣ My Status\n2️⃣ Group Post\n3️⃣ Channel Post\n4️⃣ My Status + Channel\n\nType *cancel* to abort.`
      }, { quoted: m });
      return true;
    }
    const picked = map[choice];
    if ((picked === "channel" || picked === "both") && !getChannelJid()) {
      await sock.sendMessage(chatId, { text: `⚠️ No channel configured. Pick 1 or 2.` }, { quoted: m });
      return true;
    }
    if (picked === "group" && getActiveGroups().length === 0) {
      await sock.sendMessage(chatId, { text: `⚠️ No active groups found.` }, { quoted: m });
      return true;
    }
    session.destinations = picked === "both" ? ["status", "channel"] : picked === "group" ? ["group"] : [picked];
    if (picked === "group") session.groupJids = getActiveGroups();
    session.step = "preview";
    await sock.sendMessage(chatId, { text: buildPreview(session) }, { quoted: m });
    return true;
  }

  // ── STEP: preview ──────────────────────────────────────────────────────────
  if (session.step === "preview") {
    if (txt === "now") {
      await sock.sendMessage(chatId, { text: "⏳ Posting now..." }, { quoted: m });
      const results = await executePost(sock, session.items, session.destinations, getChannelJid(), session.groupJids || []);
      delete global._storyWizard[userId];
      await sock.sendMessage(chatId, { text: `${buildResultSummary(results)}\n\n_Story wizard complete._` });
      return true;
    }

    if (txt.startsWith("schedule ")) {
      const match = rawTxt.replace(/^schedule\s+/i, "").trim().match(/^(\d{1,2}):(\d{2})$/);
      if (!match) {
        await sock.sendMessage(chatId, { text: `⚠️ Use *schedule HH:MM* (24h), e.g. *schedule 08:30*` }, { quoted: m });
        return true;
      }
      const hh = parseInt(match[1], 10), mm = parseInt(match[2], 10);
      if (hh > 23 || mm > 59) {
        await sock.sendMessage(chatId, { text: `⚠️ Invalid time. Hours 0-23, minutes 0-59.` }, { quoted: m });
        return true;
      }
      const tz      = (() => { try { return JSON.parse(fs.readFileSync(path.join(DB_DIR, "bot_settings.json"), "utf8")).timezone || "Africa/Lagos"; } catch { return "Africa/Lagos"; } })();
      const now     = new Date();
      const tzOff   = getTimezoneOffset(tz);
      const local   = new Date(now.getTime() + tzOff);
      const target  = new Date(local);
      target.setHours(hh, mm, 0, 0);
      if (target <= local) target.setDate(target.getDate() + 1);
      const runAtMs = now.getTime() + (target.getTime() - local.getTime());
      const entry = {
        id:           `story_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        userId, chatId,
        items:        session.items.map(it => ({ type: it.type, buffer64: it.buffer.toString("base64"), mimetype: it.mimetype, ptt: it.ptt, caption: it.caption || "" })),
        destinations: session.destinations,
        groupJids:    session.groupJids || [],
        runAt:        runAtMs,
        timeLabel:    `${String(hh).padStart(2,"0")}:${String(mm).padStart(2,"0")}`,
        created:      Date.now(),
      };
      addScheduled(entry);
      delete global._storyWizard[userId];
      await sock.sendMessage(chatId, {
        text: `✅ *Story Scheduled!*\n\n⏰ Will post at *${entry.timeLabel}* (${tz})\n📦 ${session.items.length} item(s) → ${session.destinations.map(destLabel).join(" + ")}\n\n_Use /storyschedules to view pending schedules._`
      });
      return true;
    }

    await sock.sendMessage(chatId, {
      text: `ℹ️ Reply *now* to post, *schedule HH:MM* to schedule, or *cancel* to discard.`
    }, { quoted: m });
    return true;
  }

  return false;
}

// ── Scheduler ─────────────────────────────────────────────────────────────────
let _schedulerSock = null;
function startStoryScheduler(sock) {
  _schedulerSock = sock;
  setInterval(async () => {
    if (!_schedulerSock) return;
    const now  = Date.now();
    const jobs = loadScheduled().filter(e => e.runAt <= now);
    for (const job of jobs) {
      removeScheduled(job.id);
      try {
        const items = (job.items || []).map(it => ({
          type: it.type, buffer: Buffer.from(it.buffer64 || "", "base64"),
          mimetype: it.mimetype || "", ptt: it.ptt || false, caption: it.caption || "",
        }));
        const results = await executePost(_schedulerSock, items, job.destinations, getChannelJid(), job.groupJids || []);
        if (job.chatId) {
          await _schedulerSock.sendMessage(job.chatId, {
            text: `⏰ *Scheduled Story Posted!*\n\n${buildResultSummary(results)}\n_Scheduled at: ${job.timeLabel}_`
          });
        }
      } catch (e) { console.error("[STORY SCHEDULER]", e.message); }
    }
  }, 30000);
}

// ──────────────────────────────────────────────────────────────────────────────
// /tostory — tag any message to instantly post it as status
// Usage: reply to any media/text with /tostory [optional caption]
//        OR send /tostory with attached media
// ──────────────────────────────────────────────────────────────────────────────
async function handleToStory(sock, m, args, chatId, userId, reply, isOwner, isDev) {
  if (!isOwner && !isDev) return reply("🚫 Owner only — /tostory is a superadmin command.");

  const hasOwnMedia    = classifyMessage(m) && classifyMessage(m) !== "text";
  const hasQuotedMedia = m.quoted && m.quoted.mtype &&
    ["imageMessage","videoMessage","audioMessage","pttMessage","stickerMessage","documentMessage"].includes(m.quoted.mtype);
  const hasQuotedText  = m.quoted && !hasQuotedMedia && (m.quoted.text || m.quoted.caption);

  if (!hasOwnMedia && !hasQuotedMedia && !hasQuotedText && !(args.length > 0)) {
    return reply(
      `📸 *How to use /tostory:*\n\n` +
      `• Reply to any image/video/audio/sticker with */tostory [optional caption]*\n` +
      `• Send media with */tostory* as caption\n` +
      `• Reply to any text with */tostory* to post it as a text status\n` +
      `• Send */tostory your text here* to post a text status\n\n` +
      `_Posts immediately to My Status._`
    );
  }

  const extraCaption = args.join(" ").trim();
  await reply("⏳ Posting to status...");

  const statusJidList = buildStatusJidList(sock);
  const sendOpts      = { statusJidList };

  // ── STRATEGY 1: Quoted media → use copyNForward (reuses existing media key, no re-upload)
  if (hasQuotedMedia && m.quoted.fakeObj) {
    try {
      // Apply caption via separate text status if provided, then forward the media
      // copyNForward to status@broadcast
      await sock.copyNForward("status@broadcast", m.quoted.fakeObj, false, sendOpts);
      console.log("[TOSTORY] copyNForward succeeded for quoted media");

      // If extra caption provided, also post a text status immediately after
      if (extraCaption) {
        await new Promise(r => setTimeout(r, 800));
        await sock.sendMessage("status@broadcast", {
          text: extraCaption, backgroundColor: randBg(), font: Math.floor(Math.random() * 5)
        }, sendOpts);
      }

      const type = m.quoted.mtype?.replace("Message","") || "media";
      await sock.sendMessage(chatId, {
        text: `✅ *Posted to status!*\n\n_Type: ${typeLabel(type)}_${extraCaption ? `\n_Caption posted separately_` : ""}`
      });
      return;
    } catch (e) {
      console.error("[TOSTORY] copyNForward failed, falling back to download:", e.message);
    }
  }

  // ── STRATEGY 2: Own media or copyNForward failed → download + postToStatus
  let item = null;

  if (hasOwnMedia) {
    const type = classifyMessage(m);
    const dl   = await downloadMedia(sock, m);
    if (!dl || !dl.buffer || dl.buffer.length === 0) {
      return sock.sendMessage(chatId, { text: "❌ Could not download the media. Please try again." });
    }
    item = { type, buffer: dl.buffer, mimetype: dl.mimetype, ptt: dl.ptt, caption: extraCaption };

  } else if (hasQuotedMedia) {
    const type = (() => {
      const qt = m.quoted.mtype || "";
      if (qt === "imageMessage")    return "image";
      if (qt === "videoMessage")    return "video";
      if (qt === "stickerMessage")  return "sticker";
      if (qt === "pttMessage")      return "ptt";
      if (qt === "audioMessage")    return m.quoted.ptt ? "ptt" : "audio";
      if (qt === "documentMessage") return "document";
      return "image";
    })();
    let buf = null;
    if (typeof m.quoted.download === "function") {
      try { buf = await m.quoted.download(); } catch (e) { console.error("[TOSTORY] quoted.download():", e.message); }
    }
    if (!buf?.length && m.quoted.fakeObj) {
      try { buf = await sock.downloadMediaMessage(m.quoted.fakeObj); } catch (e) { console.error("[TOSTORY] fakeObj:", e.message); }
    }
    if (!buf?.length) return sock.sendMessage(chatId, { text: "❌ Could not download the quoted media." });
    item = { type, buffer: buf, mimetype: m.quoted.mimetype || "", ptt: type === "ptt", caption: extraCaption };

  } else {
    // Text status
    const textContent = extraCaption || (hasQuotedText ? (m.quoted.text || m.quoted.caption) : "");
    if (!textContent) return sock.sendMessage(chatId, { text: "❌ No text content to post." });
    item = { type: "text", buffer: Buffer.from(textContent, "utf8"), mimetype: "text/plain", ptt: false, caption: textContent };
  }

  const ok = await postToStatus(sock, item);
  await sock.sendMessage(chatId, {
    text: ok
      ? `✅ *Posted to status!*\n\n_Type: ${typeLabel(item.type)}_${item.caption ? `\n_Caption: "${item.caption}"_` : ""}`
      : `❌ Failed to post to status. Check server logs for details.`
  });
}

// ──────────────────────────────────────────────────────────────────────────────
// PLUGIN EXPORT
// ──────────────────────────────────────────────────────────────────────────────
module.exports = {
  name:     "PostStory",
  category: "media",
  desc:     "Post WhatsApp status updates — wizard or instant /tostory tag",
  command:  ["story", "poststory", "storyschedules", "storyclear", "tostory"],

  startStoryScheduler,
  handleStoryWizard: handleWizardMessage,

  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isOwner, isDev }) => {

    // ── /storyschedules ───────────────────────────────────────────────────────
    if (command === "storyschedules") {
      const all = loadScheduled().filter(e => e.userId === userId);
      if (!all.length) return reply(`📅 No scheduled story posts.\n\nUse *${prefix || "/"}story* to create one.`);
      const lines = [`📅 *Scheduled Story Posts (${all.length})*`, ``];
      all.forEach((e, i) => {
        const dests = (e.destinations || []).map(destLabel).join(" + ");
        lines.push(`${i + 1}. *${e.timeLabel}* → ${dests} — ${e.items?.length || 0} item(s)\n   ID: \`${e.id}\``);
      });
      lines.push(``, `Use *${prefix || "/"}storyclear <id>* to remove one.`);
      return reply(lines.join("\n"));
    }

    // ── /storyclear ───────────────────────────────────────────────────────────
    if (command === "storyclear") {
      if (!args[0]) return reply(`Usage: ${prefix || "/"}storyclear <id>`);
      const id  = args[0].trim();
      const job = loadScheduled().find(e => e.id === id);
      if (!job) return reply(`❌ No scheduled story with ID: ${id}`);
      if (job.userId !== userId && !isOwner && !isDev) return reply(`🚫 You can only remove your own scheduled stories.`);
      removeScheduled(id);
      return reply(`✅ Scheduled story *${id}* removed.`);
    }

    // ── /tostory ──────────────────────────────────────────────────────────────
    if (command === "tostory") {
      return handleToStory(sock, m, args, chatId, userId, reply, isOwner, isDev);
    }

    // ── /story — start wizard ─────────────────────────────────────────────────
    delete global._storyWizard[userId]; // clear any existing session

    global._storyWizard[userId] = {
      step: "collecting", items: [], chatId,
      destinations: [], groupJids: [],
      currentCaptionIdx: 0, created: Date.now(),
    };

    // Auto-expire after 10 minutes
    const created = global._storyWizard[userId].created;
    setTimeout(() => {
      if (global._storyWizard[userId]?.created === created) delete global._storyWizard[userId];
    }, 600000);

    return reply([
      `📸 *Story Wizard*`, ``,
      `Send one or more items to post as a status:`, ``,
      `  📸 Image`, `  🎥 Video`, `  🎞 Sticker`,
      `  🎙 Voice note`, `  🎵 Audio`,
      `  💬 Text / Emoji`, `  📄 Document`, ``,
      `You can send *multiple items* — each will be posted as a separate status.`, ``,
      `Type *done* when finished adding items.`,
      `Type *cancel* at any time to abort.`,
    ].join("\n"));
  },
};
