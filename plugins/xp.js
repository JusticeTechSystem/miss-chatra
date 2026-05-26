// plugins/xp.js — Miss Chatra XP & Leveling System
"use strict";

const { xpGet, xpTop10 } = require("../library/db");
const { jidToNum, buildProgressBar } = require("../library/helpers");
const config = require("../settings/config");

module.exports = {
  name: "XP",
  category: "xp",
  desc: "XP tracking, levels and leaderboard",
  command: ["rank","xp","level","leaderboard","top","top10"],
  ownerOnly: false,

  run: async ({ sock, args, command, chatId, userId, reply, prefix, mentionedJid, quotedMsg, m }) => {
    if (!chatId.endsWith("@g.us")) return reply(config.message.group);

    const targetId = mentionedJid?.[0] || quotedMsg?.sender || userId;

    if (command === "rank" || command === "xp" || command === "level") {
      const { level, xp, msg_count } = xpGet(chatId, targetId);
      const progress = buildProgressBar(((xp % 5) / 5) * 100);
      const lines = [
        `⭐ *Rank Card*`,``,
        `👤 User: @${jidToNum(targetId)}`,
        `🏆 Level: ${level}`,
        `✨ XP: ${xp}`,
        `💬 Messages: ${msg_count}`,
        ``,
        `Progress to next level:`,
        `${progress} ${(xp % 5)}/5 XP`
      ];
      return reply(lines.join("\n"));
    }

    if (command === "leaderboard" || command === "top" || command === "top10") {
      const rows = xpTop10(chatId);
      if (!rows.length) return reply("📊 No XP data yet. Start chatting to earn XP!");
      
      // Build name map from group metadata (pushName for each participant)
      const nameMap = {};
      try {
        const meta = await sock.groupMetadata(chatId);
        for (const p of (meta.participants || [])) {
          const num = jidToNum(p.id);
          nameMap[p.id] = p.name || p.notify || p.verifiedName || null;
          nameMap[num]  = nameMap[p.id];
        }
      } catch {}

      const medals = ["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟"];
      const mentions = [];
      const lines = [`🏆 *XP Leaderboard — Top 10*\n`];
      rows.forEach((row, i) => {
        const jid  = row.user_id;
        const name = nameMap[jid] || nameMap[jidToNum(jid)];
        const display = name ? name.split(" ")[0] : `@${jidToNum(jid)}`;
        mentions.push(jid);
        lines.push(`${medals[i] || `${i+1}.`} ${display} — ${row.xp} XP (${row.msg_count} msgs)`);
      });
      return sock.sendMessage(chatId, { text: lines.join("\n"), mentions }, { quoted: m });
    }
  }
};
