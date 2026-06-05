// plugins/easyposterx.js — EasyPosterX: Broadcast Builder for Miss Chatra WA
// Supports long content with Next/Prev pagination, image attachment, multi-group broadcast
"use strict";

const fs   = require("fs");
const path = require("path");

const TMP_DIR  = path.join(__dirname, "..", "database", "epx_tmp");
const PAGE_LEN = 1000; // chars per page for long content preview
if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });

// ── Session store ─────────────────────────────────────────────────────────────
if (!global._epxSessions) global._epxSessions = {};

const SESSION_TTL = 600000;

function getSession(userId) {
  const s = global._epxSessions[userId];
  if (s && Date.now() - s.created < SESSION_TTL) return s;
  delete global._epxSessions[userId];
  return null;
}
function newSession(userId, chatId) {
  const s = {
    step: "text", text: "", image: null, chatId,
    created: Date.now(), page: 0, previewMsgKey: null,
  };
  global._epxSessions[userId] = s;
  return s;
}
function clearSession(userId) { delete global._epxSessions[userId]; }

// ── Paginate long text ────────────────────────────────────────────────────────
function getPages(text, pageLen = PAGE_LEN) {
  if (!text || text.length <= pageLen) return [text];
  const pages = [];
  let i = 0;
  while (i < text.length) {
    // Try to break at a newline near the boundary
    let end = i + pageLen;
    if (end < text.length) {
      const nl = text.lastIndexOf("\n", end);
      if (nl > i + pageLen * 0.5) end = nl + 1;
    }
    pages.push(text.slice(i, Math.min(end, text.length)));
    i = Math.min(end, text.length);
  }
  return pages;
}

// ── Send the preview with page navigation ────────────────────────────────────
async function sendPreview(sock, chatId, m, sess, userId) {
  const pages   = getPages(sess.text);
  const page    = Math.min(sess.page, pages.length - 1);
  const content = pages[page];
  const totalPg = pages.length;
  const isLong  = totalPg > 1;

  const header = [
    `👁 *EasyPosterX — Preview*`,
    sess.image ? `📸 Image: Attached` : `📄 Text only`,
    isLong ? `📄 Page ${page + 1}/${totalPg}` : ``,
    ``,
    `📝 *Content:*`,
  ].filter(Boolean).join("\n");

  const footer = [
    ``,
    isLong ? `_Reply *next* / *prev* to navigate pages_` : ``,
    `Reply *send* to post · *edit* to redo · *cancel* to abort`,
  ].filter(Boolean).join("\n");

  const msgText = `${header}\n${content}${footer}`;

  try {
    if (sess.image && fs.existsSync(sess.image)) {
      await sock.sendMessage(chatId, { image: { url: sess.image }, caption: msgText }, { quoted: m });
    } else {
      await sock.sendMessage(chatId, { text: msgText }, { quoted: m });
    }
  } catch {
    await sock.sendMessage(chatId, { text: msgText }, { quoted: m });
  }
}

// ── Post the content (split if too long for WA single message) ───────────────
async function sendPoster(sock, chatId, sess) {
  const text  = sess.text || "";
  const image = sess.image && fs.existsSync(sess.image) ? sess.image : null;

  if (!text && !image) return false;

  try {
    if (image) {
      // WA caption limit is 1024 chars — if text > 1024, send image first then text chunks
      if (text.length <= 1024) {
        await sock.sendMessage(chatId, { image: { url: image }, caption: text });
      } else {
        await sock.sendMessage(chatId, { image: { url: image }, caption: text.slice(0, 1020) + "…" });
        await new Promise(r => setTimeout(r, 500));
        const remainder = text.slice(1020);
        const chunks = getPages(remainder, 4000);
        for (const chunk of chunks) {
          await sock.sendMessage(chatId, { text: chunk });
          await new Promise(r => setTimeout(r, 400));
        }
      }
      setTimeout(() => { try { fs.unlinkSync(image); } catch {} }, 30000);
    } else {
      // Pure text — split into chunks if > 4000 chars (WA limit)
      const chunks = getPages(text, 4000);
      for (let i = 0; i < chunks.length; i++) {
        await sock.sendMessage(chatId, { text: chunks[i] });
        if (chunks.length > 1) await new Promise(r => setTimeout(r, 500));
      }
    }
    return true;
  } catch (e) {
    console.error("[EPX] sendPoster error:", e.message);
    return false;
  }
}

// ── Broadcast to all active groups ───────────────────────────────────────────
async function broadcastToGroups(sock, sess, reply) {
  const groups = [...(global.__activeGroups || new Set())].filter(j => j.endsWith("@g.us"));
  if (!groups.length) return reply("⚠️ No active groups found to broadcast to.");

  reply(`📡 Broadcasting to ${groups.length} group(s)...`);
  let ok = 0, fail = 0;
  for (const gid of groups) {
    const sent = await sendPoster(sock, gid, sess);
    if (sent) ok++; else fail++;
    await new Promise(r => setTimeout(r, 700));
  }
  return `✅ Broadcast complete: ${ok} sent, ${fail} failed out of ${groups.length} group(s).`;
}

// ── Wizard reply handler ──────────────────────────────────────────────────────
async function handleEpxWizard(sock, m, userId, chatId, body) {
  const sess = getSession(userId);
  if (!sess) return false;

  const txt = (body || "").trim().toLowerCase();
  const raw = (body || "").trim();
  const pfx = "/";

  if (txt === "cancel") {
    clearSession(userId);
    await sock.sendMessage(chatId, { text: "❌ EasyPosterX cancelled." }, { quoted: m });
    return true;
  }

  // ── STEP: text ─────────────────────────────────────────────────────────────
  if (sess.step === "text") {
    if (!raw || raw.startsWith(pfx)) {
      await sock.sendMessage(chatId, { text: "⚠️ Please send your poster text (or *cancel*)." }, { quoted: m });
      return true;
    }
    sess.text = raw;
    sess.step = "image";
    await sock.sendMessage(chatId, {
      text: `✅ Text saved! (${raw.length} chars)\n\n📸 Now send an *image* to attach, or type *skip* to post text only.`
    }, { quoted: m });
    return true;
  }

  // ── STEP: image ─────────────────────────────────────────────────────────────
  if (sess.step === "image") {
    if (txt === "skip") {
      sess.step = "preview";
      sess.page = 0;
      await sendPreview(sock, chatId, m, sess, userId);
      return true;
    }
    const mtype = m.mtype || "";
    if (mtype === "imageMessage" || (m.message || {}).imageMessage) {
      let buf = null;
      try {
        if (typeof m.download === "function") buf = await m.download();
        if (!buf?.length) buf = await sock.downloadMediaMessage(m.msg || (m.message||{}).imageMessage);
      } catch {}
      if (buf?.length) {
        const tmpFile = path.join(TMP_DIR, `epx_${userId}_${Date.now()}.jpg`);
        fs.writeFileSync(tmpFile, buf);
        sess.image = tmpFile;
        sess.step  = "preview";
        sess.page  = 0;
        await sendPreview(sock, chatId, m, sess, userId);
        return true;
      }
    }
    await sock.sendMessage(chatId, { text: "⚠️ Please send an *image* or type *skip*." }, { quoted: m });
    return true;
  }

  // ── STEP: preview (paginated) ──────────────────────────────────────────────
  if (sess.step === "preview") {
    const pages = getPages(sess.text);

    if (txt === "next") {
      if (sess.page < pages.length - 1) { sess.page++; await sendPreview(sock, chatId, m, sess, userId); }
      else await sock.sendMessage(chatId, { text: `ℹ️ Already on last page (${pages.length}/${pages.length}).` }, { quoted: m });
      return true;
    }
    if (txt === "prev" || txt === "previous") {
      if (sess.page > 0) { sess.page--; await sendPreview(sock, chatId, m, sess, userId); }
      else await sock.sendMessage(chatId, { text: `ℹ️ Already on first page.` }, { quoted: m });
      return true;
    }
    if (txt === "edit") {
      sess.step = "text"; sess.text = ""; sess.image = null; sess.page = 0;
      await sock.sendMessage(chatId, { text: "✏️ Restarting... Send your new poster text:" }, { quoted: m });
      return true;
    }

    // send — ask destination
    if (txt === "send" || txt === "post") {
      sess.step = "destination";
      await sock.sendMessage(chatId, {
        text: `📍 *Where to send?*\n\n1️⃣ This chat only\n2️⃣ Broadcast to all active groups\n\nReply *1* or *2*. Type *cancel* to abort.`
      }, { quoted: m });
      return true;
    }

    await sock.sendMessage(chatId, {
      text: `ℹ️ Reply:\n• *send* — choose destination\n• *next* / *prev* — navigate pages\n• *edit* — redo content\n• *cancel* — discard`
    }, { quoted: m });
    return true;
  }

  // ── STEP: destination ──────────────────────────────────────────────────────
  if (sess.step === "destination") {
    if (txt === "1" || txt === "here" || txt === "this") {
      await sock.sendMessage(chatId, { text: "⏳ Posting..." }, { quoted: m });
      const ok = await sendPoster(sock, chatId, sess);
      clearSession(userId);
      await sock.sendMessage(chatId, { text: ok ? "✅ *Poster sent!*" : "❌ Failed to send. Check content and try again." });
      return true;
    }
    if (txt === "2" || txt === "all" || txt === "broadcast" || txt === "groups") {
      const result = await broadcastToGroups(sock, sess, (t) => sock.sendMessage(chatId, { text: t }, { quoted: m }));
      clearSession(userId);
      await sock.sendMessage(chatId, { text: result });
      return true;
    }
    await sock.sendMessage(chatId, { text: "Reply *1* (this chat) or *2* (all groups). Type *cancel* to abort." }, { quoted: m });
    return true;
  }

  return false;
}

module.exports = {
  name:     "EasyPosterX",
  category: "media",
  desc:     "Build and broadcast styled posters with full long-text support",
  command:  ["poster","epx","easyposter","epxbroadcast"],

  handleEpxWizard,

  run: async ({ sock, m, args, command, chatId, userId, reply, isOwner, isDev, isAdmin, prefix }) => {
    if (!isOwner && !isDev && !isAdmin) return reply("🔒 Admin only.");

    if (command === "epxbroadcast") {
      const text = args.join(" ").trim();
      if (!text) return reply(`Usage: ${prefix}epxbroadcast <message>\n\nBroadcasts directly to all active groups.`);
      const groups = [...(global.__activeGroups || new Set())].filter(j => j.endsWith("@g.us"));
      if (!groups.length) return reply("⚠️ No active groups found.");
      reply(`📡 Broadcasting to ${groups.length} groups...`);
      let ok = 0, fail = 0;
      for (const gid of groups) {
        try { await sock.sendMessage(gid, { text }); ok++; } catch { fail++; }
        await new Promise(r => setTimeout(r, 700));
      }
      return reply(`✅ Done: ${ok} sent, ${fail} failed.`);
    }

    // /poster or /epx — start wizard
    if (global._epxSessions[userId]) delete global._epxSessions[userId];
    newSession(userId, chatId);
    setTimeout(() => { if (getSession(userId)) clearSession(userId); }, 600000);

    return reply([
      `🎨 *EasyPosterX — Poster Builder*`,
      ``,
      `Create a styled broadcast poster.`,
      `Supports long content — navigate with *next* / *prev*.`,
      ``,
      `*Step 1:* Send your poster text`,
      `_(Supports *bold*, _italic_, ~strikethrough~, any length)_`,
      ``,
      `Type *cancel* to abort at any time.`,
    ].join("\n"));
  },
};
