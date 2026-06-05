// @marketplace net-margin v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "NetMargin", category: "finance", desc: "Calculate business net profit margin",
  command: ["netmargin","profitmargin","businessmargin"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const rev=parseFloat(args[0]),profit=parseFloat(args[1]);
    if([rev,profit].some(isNaN)) return reply("Usage: "+pfx+"netmargin <revenue> <net profit>\nExample: "+pfx+"netmargin 1000000 150000");
    const margin=((profit/rev)*100).toFixed(2);
    return reply("Net Profit Margin\n\nRevenue: N"+rev.toLocaleString()+"\nNet Profit: N"+profit.toLocaleString()+"\n\nNet Margin: "+margin+"%\n\n"+( margin>20?"Excellent margin!":margin>10?"Good margin":margin>5?"Average margin":"Below average - review costs"));
  }
};
