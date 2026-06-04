// plugins/system.js — Miss Chatra Core System Commands
"use strict";

const fs   = require("fs");
const path = require("path");

const DB_DIR      = path.join(__dirname, "..", "database");
const PREFIX_FILE = path.join(DB_DIR, "prefix.json");

function rj(p, fb = {}) { try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return fb; } }
function wj(p, d) {
  try {
    if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });
    fs.writeFileSync(p, JSON.stringify(d, null, 2));
  } catch {}
}

module.exports = {
  name: "System",
  category: "system",
  command: ["setprefix", "broadcast", "bcast", "vfc", "voiceforward", "getstarted", "wizard", "setbotpic"],

  run: async ({ sock, m, command, args, reply, isOwner, isDev, prefix, chatId, userId, pushName }) => {
    const pfx  = prefix || "/";
    const chat = chatId || m?.chat;
    const name = pushName || m?.pushName || userId?.split("@")[0] || "User";

    // ── /setprefix ────────────────────────────────────────────────────────────
    if (command === "setprefix") {
      if (!isOwner && !isDev) return reply("🚫 Owner only.");
      const cur = rj(PREFIX_FILE, { prefix: "/" }).prefix || "/";
      if (!args[0]) return reply(
        `⚙️ *Bot Prefix*\n\nCurrent: *${cur}*\n\nChange:\n${pfx}setprefix !\n${pfx}setprefix /\n${pfx}setprefix #\n\nMust be 1 character.`
      );
      const np = args[0].trim()[0];
      if (!np) return reply("❌ Invalid prefix.");
      wj(PREFIX_FILE, { prefix: np, updatedAt: new Date().toISOString() });
      try { require("../settings/config").prefix = np; } catch {}
      return reply(`✅ Prefix changed to: *${np}*`);
    }

    // ── /broadcast ────────────────────────────────────────────────────────────
    if (command === "broadcast" || command === "bcast") {
      if (!isOwner && !isDev) return reply("🚫 Owner only.");
      const text = args.join(" ").trim();
      if (!text) return reply(`📢 Usage: ${pfx}broadcast <message>`);
      let groups = [];
      try { groups = Object.keys(await sock.groupFetchAllParticipating() || {}); } catch {}
      if (!groups.length) return reply("❌ No groups found.");
      await reply(`📢 Broadcasting to *${groups.length}* groups...`);
      let sent = 0, failed = 0;
      for (const gid of groups) {
        try { await sock.sendMessage(gid, { text }); sent++; } catch { failed++; }
        await new Promise(r => setTimeout(r, 400));
      }
      return reply(`✅ *Broadcast Complete*\n\nSent  : ${sent}\nFailed: ${failed}`);
    }

    // ── /vfc & /voiceforward ─────────────────────────────────────────────────
    if (command === "vfc" || command === "voiceforward") {
      const qObj  = m?.quoted;
      const mtype = qObj?.mtype || "";
      const isAudio = mtype === "audioMessage" || mtype === "pttMessage"
        || !!qObj?.audioMessage || !!qObj?.pttMessage;

      if (!qObj || !isAudio) {
        return reply(
          `🎙️ *Voice Forward (VFC)*\n\n` +
          `Reply to a *voice note* with *${pfx}vfc* to forward it to your DM.\n\n` +
          `Usage: Reply to a voice note → send *${pfx}vfc*`
        );
      }

      let statusMsg;
      try { statusMsg = await sock.sendMessage(chat, { text: "⏳ Forwarding voice note to your DM..." }, { quoted: m }); } catch {}

      try {
        let audioBuffer;
        if (typeof qObj.download === "function") {
          audioBuffer = await qObj.download();
        } else if (qObj.fakeObj?.message) {
          audioBuffer = await sock.downloadMediaMessage(qObj.fakeObj);
        } else {
          audioBuffer = await sock.downloadMediaMessage(qObj);
        }

        if (!audioBuffer || !audioBuffer.length) throw new Error("Empty buffer — could not download");

        const selfJid = sock.user?.id || sock.user?.jid || "";
        const selfNum = selfJid.split(":")[0].split("@")[0];
        if (!selfNum) throw new Error("Could not determine bot number");
        const dmJid = `${selfNum}@s.whatsapp.net`;

        const isPtt = mtype === "pttMessage" || !!qObj?.pttMessage || qObj?.ptt === true;
        const mime  = qObj?.mimetype || (isPtt ? "audio/ogg; codecs=opus" : "audio/mpeg");

        await sock.sendMessage(dmJid, { audio: audioBuffer, ptt: isPtt, mimetype: mime });

        // Auto-delete the /vfc command message and status message
        try { if (m?.key) await sock.sendMessage(chat, { delete: m.key }); } catch {}
        if (statusMsg?.key) {
          setTimeout(() => { sock.sendMessage(chat, { delete: statusMsg.key }).catch(() => {}); }, 2000);
        }
        try { await sock.sendMessage(chat, { text: "✅ Voice note forwarded to your DM! 🎙️" }); } catch {}
      } catch (e) {
        if (statusMsg?.key) try { await sock.sendMessage(chat, { delete: statusMsg.key }); } catch {}
        return reply(`❌ Forward failed: ${e.message}`);
      }
      return;
    }

    // ── /setbotpic — update bot's WA profile picture ─────────────────────────
    if (command === "setbotpic") {
      if (!isOwner && !isDev) return reply("🚫 Owner only.");
      const BOT_ROOT   = path.join(__dirname, "..");
      const THUMB_PATH = path.join(BOT_ROOT, "thumbnail", "image.jpg");
      // Check for quoted / attached image
      const quotedMsg   = m.quoted;
      const hasAttached = m.message?.imageMessage || m.message?.viewOnceMessage;
      const hasQuoted   = quotedMsg?.mtype === "imageMessage" || quotedMsg?.imageMessage;

      if (!hasAttached && !hasQuoted) {
        // Use the current thumbnail/image.jpg if it exists
        if (!fs.existsSync(THUMB_PATH)) return reply("❌ No image found. Reply to an image or send one with /setbotpic.");
        try {
          const buf = fs.readFileSync(THUMB_PATH);
          const selfJid = sock.user?.id ? sock.decodeJid(sock.user.id) : "";
          if (!selfJid) return reply("❌ Cannot determine bot JID.");
          await sock.updateProfilePicture(selfJid, buf);
          return reply("✅ Bot profile picture updated to current thumbnail!");
        } catch (e) {
          return reply("❌ Failed to update: " + e.message);
        }
      }

      // Download the image
      try {
        let buf;
        const target = hasAttached ? m : quotedMsg;
        if (typeof target.download === "function") {
          buf = await target.download();
        } else {
          buf = await sock.downloadMediaMessage(target.fakeObj || target);
        }
        if (!buf || !buf.length) return reply("❌ Could not download the image.");

        // Save to thumbnail
        fs.writeFileSync(THUMB_PATH, buf);
        const thumbPng = path.join(BOT_ROOT, "thumbnail", "image.png");
        fs.writeFileSync(thumbPng, buf);

        // Set as WA profile pic
        const selfJid = sock.user?.id ? sock.decodeJid(sock.user.id) : "";
        if (!selfJid) return reply("❌ Cannot determine bot JID.");
        await sock.updateProfilePicture(selfJid, buf);
        return reply("✅ Bot profile picture updated everywhere!");
      } catch (e) {
        return reply("❌ Failed: " + e.message);
      }
    }

    // ── /wizard ───────────────────────────────────────────────────────────────
    if (command === "getstarted" || command === "wizard") {
      if (!isOwner && !isDev) return reply("🚫 Owner only.");
      const up  = process.uptime();
      const mem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1);
      return reply([
        `╔═══════════════════════════════════════╗`,
        `  🧙 *Miss Chatra Setup Wizard*`,
        `╠═══════════════════════════════════════╣`,
        ``,
        `  *Step 1 — Set Prefix*`,
        `  ${pfx}setprefix /   ← current prefix`,
        ``,
        `  *Step 2 — Commands*`,
        `  ${pfx}menu          ← full command menu`,
        `  ${pfx}menustyle     ← change menu theme`,
        ``,
        `  *Step 3 — AI*`,
        `  ${pfx}chatbot on    ← enable AI in group`,
        `  ${pfx}gemini <q>    ← ask Gemini`,
        `  ${pfx}gpt5 <q>      ← ask GPT-5`,
        ``,
        `  *Step 4 — Moderation*`,
        `  ${pfx}antilink on   ← block links`,
        `  ${pfx}welcome on    ← welcome members`,
        `  ${pfx}warn @user    ← warn a member`,
        ``,
        `  *Step 5 — Games*`,
        `  ${pfx}wordchain     ← Word Chain`,
        `  ${pfx}trivia        ← Trivia`,
        `  ${pfx}truth         ← Truth or Dare`,
        ``,
        `╠═══════════════════════════════════════╣`,
        `  ⏱ Uptime : ${Math.floor(up/3600)}h ${Math.floor((up%3600)/60)}m`,
        `  💾 RAM    : ${mem} MB`,
        `  🤖 Miss Chatra WA v1.0`,
        `╚═══════════════════════════════════════╝`,
      ].join("\n"));
    }
  },
};
