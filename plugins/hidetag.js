// plugins/hidetag.js — Miss Chatra Hidetag / Silent Tag All
// Ported from Telegram p36_hidetag.py
"use strict";

const { gsGet } = require("../library/db");

module.exports = {
  name: "Hidetag",
  category: "moderation",
  command: ["hidetag","stag","tagall","htag"],

  run: async ({ sock, m, command, args, reply, prefix, chatId, userId, isOwner, isDev, isAdmin, pushName }) => {
    const chat  = chatId || m?.chat;
    const pfx   = prefix || "/";
    const isGrp = (chat || "").endsWith("@g.us");

    if (!isGrp) return reply("🏷️ Hidetag works in groups only.");
    if (!isOwner && !isDev && !isAdmin) return reply("🔒 Only admins can use hidetag.");

    // Fetch all group participants
    let participants = [];
    try {
      const meta = await sock.groupMetadata(chat);
      participants = meta.participants.map(p => p.id);
    } catch (e) {
      return reply(`❌ Failed to fetch group members: ${e.message}`);
    }

    if (!participants.length) return reply("❌ Could not fetch group members.");

    // The message text after the command (the "tag" text)
    const tagText = args.join(" ").trim() || "📢 Attention!";

    // WhatsApp silent-mention trick: send message with all mentions embedded
    // but show only the admin's message — all members get pinged silently.
    // Batch in groups of 50 to avoid WA limits
    const BATCH = 50;
    let sent = 0;
    for (let i = 0; i < participants.length; i += BATCH) {
      const batch = participants.slice(i, i + BATCH);
      try {
        await sock.sendMessage(chat, {
          text: tagText,
          mentions: batch,
        });
        sent += batch.length;
        if (i + BATCH < participants.length) {
          await new Promise(r => setTimeout(r, 1500)); // rate limit pause
        }
      } catch (e) {
        console.error("[HIDETAG] batch error:", e.message);
      }
    }

    // Delete the command message to keep it clean
    try { await sock.sendMessage(chat, { delete: m.key }); } catch {}

    // Brief confirmation that auto-deletes
    try {
      const conf = await sock.sendMessage(chat, { text: `✅ Tagged ${sent} members silently.` }, { quoted: m });
      setTimeout(() => { try { sock.sendMessage(chat, { delete: conf?.key }); } catch {} }, 5000);
    } catch {}
  }
};
