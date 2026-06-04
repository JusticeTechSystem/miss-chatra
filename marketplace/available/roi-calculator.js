// @marketplace roi-calculator v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ROICalc", category: "finance", desc: "Calculate return on investment",
  command: ["roi","returnoninvestment","roicalc"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const invest=parseFloat(args[0]),returns=parseFloat(args[1]);
    if([invest,returns].some(isNaN)) return reply("Usage: "+pfx+"roi <investment> <total returns>\nExample: "+pfx+"roi 100000 145000");
    const profit=returns-invest;
    const roi=((profit/invest)*100).toFixed(2);
    return reply("ROI Calculator\n\nInvestment: N"+invest.toLocaleString()+"\nTotal Returns: N"+returns.toLocaleString()+"\nProfit: N"+profit.toLocaleString()+"\n\nROI: "+roi+"%\n"+(roi>0?"This was a profitable investment!":"This investment made a loss."));
  }
};
