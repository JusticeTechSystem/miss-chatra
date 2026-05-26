// plugins/devpush.js — Miss Chatra Update Push System
// Extracted from JusticeTech WA Autosave Bot devpush.js
// ─────────────────────────────────────────────────────────────────────────────
// DEV ONLY. Two responsibilities:
//
//  1. PUSH UPDATE TO ALL USER BOTS:
//       /devpush v1.0.2 https://github.com/.../archive/v1.0.2.zip
//       → Sends changelog card + update signal to every registered bot
//       → Users run /update to install with live progress bar
//
//  2. MANAGE CHANGELOG:
//       /changelog list              — view entries
//       /changelog add <text>        — add entry
//       /changelog remove 2          — remove #2
//       /changelog edit 2 <text>     — edit #2
//       /changelog version v1.0.2    — set version
//       /changelog clear             — wipe all
//       /changelog preview           — preview card
// ─────────────────────────────────────────────────────────────────────────────
"use strict";

const fs   = require("fs");
const path = require("path");
const jts  = require("../library/justicetechsystem");

const BOT_ROOT       = path.join(__dirname, "..");
const THUMB          = path.join(BOT_ROOT, "thumbnail", "image.jpg");
const CHANGELOG_FILE = path.join(BOT_ROOT, "database", "update_changelog.json");

function getThumb() { try { return fs.existsSync(THUMB) ? fs.readFileSync(THUMB) : null; } catch { return null; } }
function sleep(ms)  { return new Promise(r => setTimeout(r, ms)); }
function ensureDb() { if (!fs.existsSync(path.join(BOT_ROOT, "database"))) fs.mkdirSync(path.join(BOT_ROOT, "database"), { recursive: true }); }

// ── Update notification signal ────────────────────────────────────────────────
const NOTIFY_MARKER = "\u200BJTUPDATE:";  // U+200B zero-width space + JTUPDATE
const NOTIFY_SECRET = "CH_UPDATE_2025";

function signNotify(version, ts) {
  const raw = [version, String(ts), NOTIFY_SECRET].join("|");
  let h = 5381;
  for (let i = 0; i < raw.length; i++) h = (((h << 5) + h) ^ raw.charCodeAt(i)) >>> 0;
  return h.toString(36).toUpperCase();
}

function buildNotifySignal(version, entries, downloadUrl) {
  const ts = Date.now();
  return NOTIFY_MARKER + JSON.stringify({ version, entries, ts, sig: signNotify(version, ts), downloadUrl: downloadUrl || null });
}

function parseNotifySignal(text) {
  try {
    if (!text || !text.startsWith(NOTIFY_MARKER)) return null;
    const d = JSON.parse(text.slice(NOTIFY_MARKER.length));
    if (!d.version || !d.ts || !d.sig) return null;
    if (Date.now() - d.ts > 12 * 60 * 60 * 1000) return null; // 12h expiry
    if (signNotify(d.version, d.ts) !== d.sig) return null;
    return d;
  } catch { return null; }
}

// Export for message.js passive handler
module.exports.parseNotifySignal = parseNotifySignal;
module.exports.NOTIFY_MARKER     = NOTIFY_MARKER;

// ── Changelog DB ──────────────────────────────────────────────────────────────
function readChangelog() {
  try { return JSON.parse(fs.readFileSync(CHANGELOG_FILE, "utf8")); }
  catch { return { version: "v1.0.1", entries: [], active: false }; }
}
function writeChangelog(data) { ensureDb(); fs.writeFileSync(CHANGELOG_FILE, JSON.stringify(data, null, 2)); }

// ── Auto-emoji ────────────────────────────────────────────────────────────────
function autoEmoji(text) {
  const t = (text || "").toLowerCase();
  if (/fix|bug|patch|crash|error/.test(t))          return "🐛";
  if (/security|protect|safe/.test(t))              return "🔐";
  if (/speed|fast|performance|optim/.test(t))       return "⚡";
  if (/new|add|introduc|launch|feature/.test(t))    return "✨";
  if (/update|upgrad|improv|enhanc/.test(t))        return "🔄";
  if (/plugin|marketplace/.test(t))                 return "🛒";
  if (/broadcast|message|send|notify/.test(t))      return "📣";
  if (/group|admin|moderat/.test(t))                return "🛡️";
  if (/restart|reload|reset/.test(t))               return "♻️";
  if (/remove|delete|clean/.test(t))                return "🗑️";
  if (/freeze|block|ban/.test(t))                   return "🚨";
  return "🔹";
}

function buildChangelogCard(version, entries) {
  const lines = entries.length
    ? entries.map(e => "  " + autoEmoji(e) + " " + e).join("\n")
    : "  No entries yet.";
  return [
    "╔══════════════════════════════════════════════╗",
    "🚀 *Miss Chatra Update — " + version + "*",
    "╠══════════════════════════════════════════════╣",
    "",
    "  📋 *What's New:*",
    "",
    lines,
    "",
    "╠══════════════════════════════════════════════╣",
    "  ✅ Run */update* to install this update.",
    "  Live progress bar shows the status.",
    "  Takes about 30–60 seconds.",
    "╚══════════════════════════════════════════════╝",
  ].join("\n");
}

// ─────────────────────────────────────────────────────────────────────────────
module.exports = {
  ...module.exports,
  name: "DevPush", category: "dev",
  desc: "DEV ONLY: Push update to all user bots + manage changelog",
  command: ["devpush", "changelog"],
  devOnly: true, hidden: true,

  run: async ({ reply, sock, m, args, prefix, isDev, userId, command, chatId }) => {
    if (!jts.isDev(userId)) return;

    const pfx  = prefix || "/";
    const thumb = getThumb();
    const cmd  = String(command || "").toLowerCase().trim();

    async function sendCard(text) {
      if (thumb) { try { return await sock.sendMessage(chatId, { image: thumb, caption: text }, { quoted: m }); } catch {} }
      return reply(text);
    }

    // ── /changelog ────────────────────────────────────────────────────────────
    if (cmd === "changelog") {
      const sub  = String(args?.[0] || "").toLowerCase().trim();
      const data = readChangelog();

      if (!sub || sub === "list") {
        return sendCard([
          "╔══════════════════════════════════════════════╗",
          "📋 *Changelog — " + data.version + "*",
          "╠══════════════════════════════════════════════╣",
          "",
          "  Status: " + (data.active ? "🟢 Active" : "⚫ Inactive"),
          "",
          data.entries?.length
            ? data.entries.map((e, i) => "  " + (i+1) + ". " + autoEmoji(e) + " " + e).join("\n")
            : "  No entries. Use " + pfx + "changelog add <text>",
          "",
          "╠══════════════════════════════════════════════╣",
          "  " + pfx + "changelog add <text>",
          "  " + pfx + "changelog remove <#>",
          "  " + pfx + "changelog version v1.0.2",
          "  " + pfx + "changelog preview",
          "╚══════════════════════════════════════════════╝",
        ].join("\n"));
      }

      if (sub === "version") {
        const ver = args?.[1]?.trim();
        if (!ver) return reply("Usage: " + pfx + "changelog version v1.0.2");
        data.version = ver; writeChangelog(data);
        return reply("✅ Version set to *" + ver + "*");
      }

      if (sub === "add") {
        const rawBody = (m?.body || "").trim();
        const idx2    = rawBody.toLowerCase().indexOf("changelog add");
        const text    = idx2 !== -1 ? rawBody.slice(idx2 + "changelog add".length).trim() : args.slice(1).join(" ").trim();
        if (!text) return reply("Usage: " + pfx + "changelog add <text>\n\nOr multiple lines — separate with newlines.");
        if (!data.entries) data.entries = [];
        const newEntries = text.split("\n").map(s => s.replace(/^[\-\*•]?\s*\d*\.?\s*/, "").trim()).filter(Boolean);
        for (const e of newEntries) data.entries.push(e);
        writeChangelog(data);
        return reply("✅ Added " + newEntries.length + " entr" + (newEntries.length===1?"y":"ies") + ".\n\n" + newEntries.map(e => "  • " + e).join("\n"));
      }

      if (sub === "remove" || sub === "del") {
        const idx = parseInt(args?.[1]) - 1;
        if (isNaN(idx) || idx < 0 || idx >= (data.entries||[]).length) return reply("❌ Invalid number. Use " + pfx + "changelog list");
        const removed = data.entries.splice(idx, 1)[0];
        writeChangelog(data);
        return reply("🗑️ Removed: \"" + removed + "\"");
      }

      if (sub === "edit") {
        const idx  = parseInt(args?.[1]) - 1;
        const text = args?.slice(2).join(" ").trim();
        if (isNaN(idx) || idx < 0 || idx >= (data.entries||[]).length) return reply("❌ Invalid number.");
        if (!text) return reply("Usage: " + pfx + "changelog edit 2 New text here");
        data.entries[idx] = text; writeChangelog(data);
        return reply("✅ Entry #" + (idx+1) + " updated.");
      }

      if (sub === "clear") {
        data.entries = []; data.active = false; writeChangelog(data);
        return reply("🗑️ Changelog cleared.");
      }

      if (sub === "preview") {
        return sendCard(buildChangelogCard(data.version, data.entries || []));
      }

      return reply(pfx + "changelog list | add | remove | edit | version | preview | clear");
    }

    // ── /devpush [version] [url] — notify all registered bots ────────────────
    const data       = readChangelog();
    const version    = args?.[0]?.trim() || data.version || "latest";
    const downloadUrl = args?.[1]?.trim()?.startsWith("http") ? args[1].trim() : null;

    if (args?.[0]?.trim()) data.version = version;
    if (downloadUrl) data.downloadUrl = downloadUrl;
    data.active = true;
    data.activatedAt = new Date().toISOString();
    writeChangelog(data);

    const allNums = jts.getAllRegisteredJids()
      .map(j => j.replace("@s.whatsapp.net", ""))
      .filter(n => !jts.isDev(n));

    if (!allNums.length) {
      await sendCard(buildChangelogCard(version, data.entries || []));
      return reply("ℹ️ No registered user bots yet. Card preview shown above.\n\nBots auto-register on first deploy.");
    }

    await sendCard(buildChangelogCard(version, data.entries || []));
    await reply("📡 Notifying *" + allNums.length + "* user bot(s)..." + (downloadUrl ? "\n🔗 Direct URL embedded" : "\n⚠️ No URL — bots use GitHub fallback"));

    const signal = buildNotifySignal(version, data.entries || [], downloadUrl || data.downloadUrl || null);
    let sent = 0, failed = 0;

    for (const num of allNums) {
      try {
        // Send as image+caption so it looks professional, not raw JSON
        if (thumb) {
          await sock.sendMessage(num + "@s.whatsapp.net", { image: thumb, caption: signal }, { ephemeralExpiration: 60 });
        } else {
          await sock.sendMessage(num + "@s.whatsapp.net", { text: signal }, { ephemeralExpiration: 60 });
        }
        sent++;
        await sleep(600);
      } catch (e) {
        failed++;
        console.warn("[devpush] Failed for " + num + ":", e.message);
      }
    }

    return sendCard([
      "╔══════════════════════════════════════════════╗",
      "✅ *Update " + version + " — Pushed*",
      "╠══════════════════════════════════════════════╣",
      "",
      "  📤 Notified : " + sent + " bots",
      "  ❌ Failed   : " + failed + " bots",
      "  🔗 URL      : " + (downloadUrl ? "✅ Embedded" : "⚠️ GitHub fallback"),
      "",
      "  Each user sees the changelog card.",
      "  They run /update to install.",
      "╚══════════════════════════════════════════════╝",
    ].join("\n"));
  },
};
