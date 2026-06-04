// @marketplace pe-ratio v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "PERatio", category: "finance", desc: "Calculate Price-to-Earnings ratio",
  command: ["peratio","stockvaluation"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const price=parseFloat(args[0]),eps=parseFloat(args[1]);
    if([price,eps].some(isNaN)) return reply("Usage: "+pfx+"peratio <stock price> <earnings per share>\nExample: "+pfx+"peratio 500 25");
    const pe=(price/eps).toFixed(2);
    return reply("P/E Ratio Analysis\n\nStock Price: N"+price+"\nEPS: N"+eps+"\n\nP/E Ratio: "+pe+"x\n\n"+( pe<15?"Potentially undervalued":pe<25?"Fairly valued":"Potentially overvalued")+"\n(Industry average varies)");
  }
};
