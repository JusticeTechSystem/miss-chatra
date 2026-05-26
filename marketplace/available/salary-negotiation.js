// @marketplace salary-negotiation v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "SalaryNeg", category: "finance", desc: "Salary negotiation calculator",
  command: ["salaryneg","negotiatesalary"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const current=parseFloat(args[0]),desired=parseFloat(args[1]);
    if([current,desired].some(isNaN)) return reply("Usage: "+pfx+"salaryneg <current> <desired>\nExample: "+pfx+"salaryneg 150000 250000");
    const diff=desired-current,pct=((diff/current)*100).toFixed(0);
    return reply("Salary Negotiation Guide\n\nCurrent: N"+current.toLocaleString()+"\nDesired: N"+desired.toLocaleString()+"\nIncrease: "+pct+"%\n\nTips:\n1. Research market rates first\n2. Start by asking "+( parseInt(pct)+10)+"% above\n3. Highlight achievements\n4. Be ready to justify your ask\n5. Consider full package not just salary");
  }
};
