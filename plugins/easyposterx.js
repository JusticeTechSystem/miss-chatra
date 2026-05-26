// plugins/easyposterx.js — EasyPosterX: Broadcast Message Builder for Miss Chatra WA
// Ported from TG p50_easyposterx.py — multi-step poster/broadcast wizard
"use strict";

const fs   = require("fs");
const path = require("path");

const TMP_DIR = path.join(__dirname, "..", "database", "epx_tmp");
if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });

// ── Session store ─────────────────────────────────────────────────────────────
if (!global._epxSessions) global._epxSessions = {};

const SESSION_TTL = 600000; // 10 minutes

function getSession(userId) {
  const s = global._epxSessions[userId];
  if (s && Date.now() - s.created < SESSION_TTL) return s;
  delete global._epxSessions[userId];
  return null;
}
function newSession(userId, chatId) {
  const s = { step: "text", text: "", image: null, buttons: [], chatId, created: Date.now() };
  global._epxSessions[userId] = s;
  return s;
}
function clearSession(userId) { delete global._epxSessions[userId]; }

// ── Handler: intercept wizard replies ────────────────────────────────────────
async function handleEpxWizard(sock, m, userId, chatId, body) {
  const sess = getSession(userId);
  if (!sess) return false;

  const txt = (body || "").trim();
  const pfx = "/";

  if (txt.toLowerCase() === "cancel") {
    clearSession(userId);
    await sock.sendMessage(chatId, { text: "❌ EasyPosterX cancelled." }, { quoted: m });
    return true;
  }
  if (txt.toLowerCase() === "skip" && sess.step === "image") {
    sess.step = "preview";
    await sendPreview(sock, m, chatId, sess);
    return true;
  }

  // ── Step: text ───────────────────────────────────────────────────────────
  if (sess.step === "text") {
    if (!txt || txt.startsWith(pfx)) {
      await sock.sendMessage(chatId, { text: "⚠️ Please send the text for your poster (or *cancel*)." }, { quoted: m });
      return true;
    }
    sess.text = txt;
    sess.step = "image";
    await sock.sendMessage(chatId, {
      text: `✅ Text saved!\n\n📸 Now send an *image* to attach to your poster, or type *skip* to post text only.`
    }, { quoted: m });
    return true;
  }

  // ── Step: image ──────────────────────────────────────────────────────────
  if (sess.step === "image") {
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
        await sendPreview(sock, m, chatId, sess);
        return true;
      }
    }
    // Not an image — prompt again
    await sock.sendMessage(chatId, { text: "⚠️ Please send an *image* or type *skip*." }, { quoted: m });
    return true;
  }

  // ── Step: preview confirm ────────────────────────────────────────────────
  if (sess.step === "preview") {
    if (txt.toLowerCase() === "send" || txt.toLowerCase() === "post") {
      await sendPoster(sock, chatId, sess);
      clearSession(userId);
      await sock.sendMessage(chatId, { text: "✅ *Poster sent!*" });
      return true;
    }
    if (txt.toLowerCase() === "edit") {
      sess.step = "text";
      sess.text = "";
      sess.image = null;
      await sock.sendMessage(chatId, { text: "✏️ Restarting... Send your poster text:" }, { quoted: m });
      return true;
    }
    await sock.sendMessage(chatId, { text: "Reply *send* to post, *edit* to redo, *cancel* to abort." }, { quoted: m });
    return true;
  }

  return false;
}

async function sendPreview(sock, m, chatId, sess) {
  const lines = [
    `👁 *EasyPosterX — Preview*\n`,
    sess.image ? `📸 Image: Attached` : `📄 No image`,
    ``,
    `📝 *Content:*`,
    sess.text,
    ``,
    `Reply *send* to post · *edit* to redo · *cancel* to abort`,
  ];
  const msgText = lines.join("\n");
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

async function sendPoster(sock, chatId, sess) {
  try {
    if (sess.image && fs.existsSync(sess.image)) {
      await sock.sendMessage(chatId, { image: { url: sess.image }, caption: sess.text });
      setTimeout(() => { try { fs.unlinkSync(sess.image); } catch {} }, 30000);
    } else {
      await sock.sendMessage(chatId, { text: sess.text });
    }
  } catch {}
}

module.exports = {
  name:     "EasyPosterX",
  category: "media",
  desc:     "Build and broadcast styled posters and announcements",
  command:  ["poster","epx","easyposter","broadcast2","bcast2"],

  handleEpxWizard,

  run: async ({ sock, m, args, command, chatId, userId, reply, isOwner, isDev, isAdmin, prefix }) => {
    if (!isOwner && !isDev && !isAdmin) return reply("🔒 Admin only.");

    // /bcast2 — quick broadcast with existing text (skip wizard)
    if (command === "broadcast2" || command === "bcast2") {
      const text = args.join(" ").trim();
      if (!text) return reply(`Usage: ${prefix}bcast2 <your message>`);
      await sock.sendMessage(chatId, { text });
      return reply("✅ Broadcast sent.");
    }

    // /poster or /epx — start wizard
    if (global._epxSessions[userId]) delete global._epxSessions[userId];
    newSession(userId, chatId);

    // Auto-expire
    setTimeout(() => { if (getSession(userId)?.created === global._epxSessions[userId]?.created) clearSession(userId); }, 600000);

    return reply([
      `🎨 *EasyPosterX — Poster Builder*`,
      ``,
      `Create a styled announcement or broadcast poster.`,
      ``,
      `*Step 1:* Send your poster text (supports WhatsApp formatting: *bold*, _italic_, ~strikethrough~)`,
      ``,
      `Type *cancel* to abort at any time.`,
    ].join("\n"));
  },
};
