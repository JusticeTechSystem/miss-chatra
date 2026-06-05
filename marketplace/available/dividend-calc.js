// @marketplace dividend-calc v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "DividendCalc", category: "finance", desc: "Calculate dividend income",
  command: ["dividend","dividendincome"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const shares=parseFloat(args[0]),div=parseFloat(args[1]);
    if([shares,div].some(isNaN)) return reply("Usage: "+pfx+"dividend <shares> <dividend per share>\nExample: "+pfx+"dividend 1000 25");
    return reply("Dividend Income\n\nShares: "+shares.toLocaleString()+"\nDividend/share: N"+div+"\n\nAnnual Income: N"+(shares*div).toLocaleString());
  }
};
