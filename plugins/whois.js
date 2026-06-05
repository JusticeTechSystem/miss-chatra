// plugins/whois.js — Miss Chatra User Info
"use strict";

const { xpGet } = require("../library/db");

module.exports = {
  name: "Whois",
  category: "info",
  desc: "Get user info with profile picture",
  command: ["whois","id","userinfo","info","userid","myid"],

  run: async ({ sock, m, args, command, chatId, userId, reply, mentionedJid, quotedMsg }) => {
    const targetJid = mentionedJid?.[0] || quotedMsg?.sender || userId;
    const isGroup   = (chatId||"").endsWith("@g.us");

    // Get push name — most reliable source
    let pushName = targetJid === userId ? (m?.pushName || "") : "";

    // Group info
    let isAdmin = false, groupName = "";
    if (isGroup) {
      try {
        const meta  = await sock.groupMetadata(chatId);
        groupName   = meta.subject || "";
        const normF = jid => (jid||"").split("@")[0].split(":")[0].replace(/\D/g,"");
        const tNum  = normF(targetJid);
        const p     = meta.participants.find(p => normF(p.id) === tNum);
        if (p) {
          isAdmin  = !!(p.admin);
          if (!pushName) pushName = p.notify || p.name || "";
        }
      } catch {}
    }

    // Try contacts store for name
    if (!pushName) {
      try {
        const c = global.__botStore?.contacts?.get?.(targetJid);
        if (c) pushName = c.name || c.notify || c.verifiedName || "";
      } catch {}
    }

    const xpData = isGroup ? xpGet(chatId, targetJid) : { level:0, xp:0, msg_count:0 };

    // Fetch profile picture
    let ppBuf = null;
    try {
      const axios = require("axios");
      const url = await sock.profilePictureUrl(targetJid, "image");
      if (url) {
        const r = await axios.get(url, { responseType: "arraybuffer", timeout: 10000 });
        ppBuf = Buffer.from(r.data);
      }
    } catch {}

    // Fetch status/about
    let status = "";
    try { const s = await sock.fetchStatus(targetJid); status = s?.status || ""; } catch {}

    // Build info — NO JID, NO Chat link (can't reliably resolve @lid)
    const lines = [
      "👤 *User Info*",
      "━━━━━━━━━━━━━━━━━━━━━━━━",
      pushName    ? "📛 *Name:* " + pushName : "",
      isGroup     ? "👑 *Admin:* " + (isAdmin ? "✅ Yes" : "❌ No") : "",
      groupName   ? "👥 *Group:* " + groupName : "",
      isGroup     ? "⭐ *XP:* " + xpData.xp + " | Level: " + xpData.level + " | Msgs: " + xpData.msg_count : "",
      status      ? "💬 *Status:* " + status.slice(0,120) : "",
    ].filter(Boolean).join("\n");

    if (ppBuf) {
      try {
        return await sock.sendMessage(chatId, { image: ppBuf, caption: lines }, { quoted: m });
      } catch {}
    }
    return reply(lines);
  }
};
