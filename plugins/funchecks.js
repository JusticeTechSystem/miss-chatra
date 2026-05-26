// plugins/funchecks.js — Miss Chatra Fun Check Commands
"use strict";

const crypto = require("crypto");
const { jidToNum } = require("../library/helpers");

const CHECK_COMMANDS = {
  stupidcheck:   { section: "Stupid Level 🧠",   verdict: "{user} is {pct}% stupid. Yikes." },
  hotcheck:      { section: "Hotness Level 🔥",   verdict: "{user} is {pct}% hot. Confirmed." },
  smartcheck:    { section: "Smartness Level 📘", verdict: "{user} is {pct}% smart. Nice." },
  evilcheck:     { section: "Evilness Level 😈",  verdict: "{user} is {pct}% evil. Careful now." },
  waifucheck:    { section: "Waifu Level 💕",     verdict: "{user} is {pct}% waifu material." },
  coolcheck:     { section: "Coolness Level 😎",  verdict: "{user} is {pct}% cool. Respect." },
  dogcheck:      { section: "Dog Energy 🐶",      verdict: "{user} has {pct}% dog energy. Woof." },
  greatcheck:    { section: "Greatness Level ⭐", verdict: "{user} is {pct}% great. Believe it." },
  uncleancheck:  { section: "Cleanliness 🧹",    verdict: "{user} is {pct}% clean.", invert: true },
  simpcheck:     { section: "Simp Level 🤡",      verdict: "{user} is {pct}% simp. We see you." },
  gigachadcheck: { section: "GigaChad Level 💪",  verdict: "{user} is {pct}% gigachad. Legendary." }
};

function buildBar(pct, width = 10) {
  const filled = Math.round((pct / 100) * width);
  return "█".repeat(filled) + "░".repeat(width - filled);
}

module.exports = {
  name: "FunChecks",
  category: "fun",
  desc: "Fun percentage checks on users",
  command: [...Object.keys(CHECK_COMMANDS), "check"],
  ownerOnly: false,

  run: async ({ args, command, chatId, userId, reply, mentionedJid, quotedMsg }) => {
    if (command === "check") {
      const lines = [`📊 *Check Commands Hub*\n`];
      for (const [cmd, meta] of Object.entries(CHECK_COMMANDS)) {
        lines.push(`• .${cmd}`);
      }
      lines.push(`\n_Usage: /hotcheck @user or reply to message_`);
      return reply(lines.join("\n"));
    }

    const meta = CHECK_COMMANDS[command];
    if (!meta) return;

    const targetId = mentionedJid?.[0] || quotedMsg?.sender || userId;
    const num      = jidToNum(targetId);

    // Deterministic score per (user, command)
    const seed   = `${command}:${targetId}`;
    const digest = crypto.createHash("sha256").update(seed).digest();
    let pct = digest.readUInt16BE(0) % 101;
    const display = meta.invert ? (100 - pct) : pct;

    const verdict = meta.verdict.replace(/\{user\}/g, `@${num}`).replace(/\{pct\}/g, display);

    const msg = [
      `🌟 *Chatra's Official Verdict* 🌟`,
      `╭───〔 ${meta.section} 〕───⬣`,
      `│ 👤 Target: @${num}`,
      `│ 📊 Result: ${display}% 🔥`,
      `│ ${buildBar(display)} ${display}%`,
      `│`,
      `│ 💬 ${verdict}`,
      `╰━━━━━━━━━━━━━━━━⬣`
    ].join("\n");

    return reply(msg);
  }
};
