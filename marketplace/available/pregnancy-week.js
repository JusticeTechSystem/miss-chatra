// @marketplace pregnancy-week v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "PregnancyWeek", category: "health", desc: "Track pregnancy milestones by week",
  command: ["pregnant","pregnancy","babyweek"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const lmp=args[0];
    if(!lmp) return reply("Usage: "+pfx+"pregnant <last menstrual period>\nExample: "+pfx+"pregnant 2025-12-01");
    const start=new Date(lmp);
    if(isNaN(start)) return reply("Invalid date. Format: YYYY-MM-DD");
    const weeks=Math.floor((Date.now()-start.getTime())/(7*86400000));
    const due=new Date(start.getTime()+280*86400000);
    const milestones={4:'Embryo forms, heart begins beating',8:'Baby is the size of a kidney bean',12:'End of first trimester, risk of miscarriage drops',16:'Baby can make facial expressions',20:'Halfway! You may feel movement',24:'Baby can hear sounds',28:'Third trimester begins',32:'Baby gaining weight rapidly',36:'Baby is full-term soon',40:'Due date!'};
    const current=milestones[Math.round(weeks/4)*4]||'Keep growing, little one!';
    return reply("Pregnancy Tracker\n\nWeeks Pregnant: "+weeks+"\nTrimester: "+(weeks<13?'First':weeks<27?'Second':'Third')+"\nDue Date: "+due.toLocaleDateString()+"\n\nThis week: "+current+"\n\nAttend all antenatal appointments!");
  }
};
