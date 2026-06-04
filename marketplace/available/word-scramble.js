// @marketplace word-scramble v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "WordScrambleGame", category: "games", desc: "Competitive word scramble",
  command: ["scramble2","unscramble2","scrambleword"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const WORDS=['javascript','algorithm','database','programming','developer','keyboard','monitor','software','hardware','internet','bitcoin','network','security','application','framework'];
    const G=global.__scr2=global.__scr2||{};const key=chatId+'_scr2_'+userId;
    const word=WORDS[Math.floor(Math.random()*WORDS.length)];
    const sc=word.split('').sort(()=>Math.random()-0.5).join('');
    G[key]={answer:word};
    return reply("Word Scramble!\n\nUnscramble: "+sc.toUpperCase()+"\n\nLength: "+word.length+" letters\nHint: Technology-related word\n\nType your answer - 45 seconds!");
  }
};
