// @marketplace palindrome v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "PalindromeChecker", category: "tools", desc: "Check if text is a palindrome",
  command: ["palindrome","reversetext"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const text=args.join(' ').toLowerCase().replace(/[^a-z0-9]/g,'');
    if(!text) return reply("Usage: "+pfx+"palindrome racecar");
    const rev=text.split('').reverse().join('');
    return reply("Text: "+args.join(' ')+"\nReversed: "+rev+"\n\n"+(text===rev?"Yes! It is a palindrome!":"Not a palindrome."));
  }
};
