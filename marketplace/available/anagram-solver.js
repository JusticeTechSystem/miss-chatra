// @marketplace anagram-solver v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "AnagramSolver", category: "tools", desc: "Check if two words are anagrams",
  command: ["anagram","isanagram"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const[w1,w2]=[args[0]||'',args[1]||''].map(w=>w.toLowerCase().replace(/[^a-z]/g,''));
    if(!w1||!w2) return reply("Usage: "+pfx+"anagram listen silent");
    const sort=w=>w.split('').sort().join('');
    return reply("Anagram Check\n\nWord 1: "+w1+"\nWord 2: "+w2+"\n\n"+(sort(w1)===sort(w2)?"Yes! They are anagrams!":"Not anagrams."));
  }
};
