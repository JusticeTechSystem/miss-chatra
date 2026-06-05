// @marketplace two-truths-lie v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "TwoTruthsLie", category: "entertainment", desc: "Two truths and a lie generator",
  command: ["twotruths","twolies","truthslie"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const examples=[["I have visited 5 countries","I can speak 3 languages","I once met a president"],["I have run a marathon","I learned to cook at age 8","I have never broken a bone"],["I worked in another country","I have twin siblings","I learned to swim at 25"],["I have been on TV","I own a business","I have never had a cavity"],["I met a famous actor","I play chess competitively","I am afraid of butterflies"]];
    const set=examples[Math.floor(Math.random()*examples.length)];
    return reply("Two Truths and a Lie!\n\nGuess which one is the LIE:\n\n1. "+set[0]+"\n2. "+set[1]+"\n3. "+set[2]+"\n\nEveryone guess! Then reveal.\n\n/twotruths to play with your own facts!");
  }
};
