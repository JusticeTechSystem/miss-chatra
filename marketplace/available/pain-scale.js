// @marketplace pain-scale v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "PainScale", category: "health", desc: "Pain scale reference and when to seek help",
  command: ["pain","painscale","painscore"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const level=parseInt(args[0]);
    if(isNaN(level)||level<0||level>10) return reply("Usage: "+pfx+"pain <0-10>\n0=No pain, 10=Worst possible pain\nExample: "+pfx+"pain 7");
    const desc=['No pain - feeling great!','Minimal pain - barely noticeable','Mild pain - can ignore it','Moderate - distracts sometimes','Distracting - hard to ignore','Moderate-severe - impacts daily activities','Severe - difficulty concentrating','Very severe - interferes with basic functions','Intense - physical activity impossible','Excruciating - need to stop everything','Worst pain imaginable - emergency'];
    const action=level<=3?'Monitor. Rest if needed.':level<=6?'Take OTC pain relief. See doctor if persists.':level<=8?'See a doctor today.':'Seek emergency medical care immediately.';
    return reply("Pain Level "+level+"/10\n\n"+desc[level]+"\n\nAction: "+action);
  }
};
