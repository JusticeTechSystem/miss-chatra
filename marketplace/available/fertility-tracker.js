// @marketplace fertility-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "FertilityTracker", category: "health", desc: "Track menstrual cycle and fertility window",
  command: ["cycle","period","fertility","ovulation"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const lastPeriod=args[0],cycleLen=parseInt(args[1])||28;
    if(!lastPeriod) return reply("Usage: "+pfx+"cycle <last period date> [cycle length]\nExample: "+pfx+"cycle 2026-03-01 28\nDefault cycle: 28 days");
    const start=new Date(lastPeriod);
    if(isNaN(start)) return reply("Invalid date. Format: YYYY-MM-DD");
    const nextPeriod=new Date(start.getTime()+cycleLen*86400000);
    const ovulation=new Date(start.getTime()+(cycleLen-14)*86400000);
    const fertileStart=new Date(ovulation.getTime()-5*86400000);
    const fertileEnd=new Date(ovulation.getTime()+1*86400000);
    return reply("Cycle Tracker\n\nLast Period: "+start.toLocaleDateString()+"\nCycle Length: "+cycleLen+" days\n\nNext Period: "+nextPeriod.toLocaleDateString()+"\nOvulation Day: "+ovulation.toLocaleDateString()+"\nFertile Window: "+fertileStart.toLocaleDateString()+" - "+fertileEnd.toLocaleDateString()+"\n\nNote: This is an estimate. Cycles vary.");
  }
};
