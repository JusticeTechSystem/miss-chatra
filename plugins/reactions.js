// plugins/reactions.js — Miss Chatra Reaction Commands
"use strict";

const { jidToNum } = require("../library/helpers");

const REACTIONS = {
  cry:      { emoji: "😢", text: "is crying" },
  kill:     { emoji: "🔪", text: "is coming for" },
  hug:      { emoji: "🤗", text: "hugs" },
  pat:      { emoji: "👋", text: "pats" },
  bite:     { emoji: "😬", text: "bites" },
  yeet:     { emoji: "🚀", text: "yeets" },
  bully:    { emoji: "😈", text: "bullies" },
  bonk:     { emoji: "🔨", text: "bonks" },
  wink:     { emoji: "😉", text: "winks at" },
  poke:     { emoji: "👉", text: "pokes" },
  nom:      { emoji: "😋", text: "noms" },
  slap:     { emoji: "👋", text: "slaps" },
  smile:    { emoji: "😊", text: "smiles at" },
  wave:     { emoji: "👋", text: "waves at" },
  awoo:     { emoji: "🐺", text: "awoo~ howls at" },
  blush:    { emoji: "😊", text: "blushes at" },
  smug:     { emoji: "😏", text: "smirks at" },
  glomp:    { emoji: "🥰", text: "glomps" },
  happy:    { emoji: "😄", text: "is happy with" },
  dance:    { emoji: "💃", text: "dances with" },
  cringe:   { emoji: "😬", text: "cringes at" },
  cuddle:   { emoji: "🥰", text: "cuddles" },
  highfive: { emoji: "✋", text: "high-fives" },
  shinobu:  { emoji: "👻", text: "summons Shinobu for" },
  handhold: { emoji: "🤝", text: "holds hands with" }
};

module.exports = {
  name: "Reactions",
  category: "fun",
  desc: "25 fun reaction commands",
  command: [...Object.keys(REACTIONS), "reaction"],
  ownerOnly: false,

  run: async ({ args, command, chatId, userId, reply, mentionedJid, quotedMsg, m }) => {
    if (command === "reaction") {
      const lines = [`🎭 *Reaction Commands (25)*\n`];
      for (const [cmd, meta] of Object.entries(REACTIONS)) {
        lines.push(`• .${cmd} — ${meta.emoji} ${meta.text}`);
      }
      lines.push(`\n_Usage: /hug @user or reply to message_`);
      return reply(lines.join("\n"));
    }

    const meta = REACTIONS[command];
    if (!meta) return;

    const actorNum  = jidToNum(userId);
    const targetJid = mentionedJid?.[0] || quotedMsg?.sender;
    const targetNum = targetJid ? jidToNum(targetJid) : null;

    let msg;
    if (!targetNum || targetJid === userId) {
      msg = `${meta.emoji} @${actorNum} ${meta.text}... themselves? 😅`;
    } else {
      msg = `${meta.emoji} @${actorNum} ${meta.text} @${targetNum}!`;
    }

    const mentions = targetJid ? [userId, targetJid] : [userId];
    await reply(msg);
  }
};
