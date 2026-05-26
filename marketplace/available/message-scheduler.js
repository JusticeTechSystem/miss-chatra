// @marketplace message-scheduler v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MessageScheduler", category: "admin", desc: "Schedule messages to be sent later",
  command: ["schedule2","schedulemsg","sendlater"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    if(!isAdmin&&!isOwner&&!isDev) return reply("Admin only.");
    const time=args[0];const msg=args.slice(1).join(' ');
    if(!time||!msg) return reply("Usage: "+pfx+"schedule2 <minutes> <message>\nExample: "+pfx+"schedule2 60 Meeting starts in 1 hour!\nMax: 480 minutes (8 hours)");
    const mins=parseInt(time);
    if(isNaN(mins)||mins<1||mins>480) return reply("Time must be 1-480 minutes.");
    setTimeout(async()=>{
      try{await sock.sendMessage(chatId,{text:"Scheduled Message:\n\n"+msg});}catch{}
    },mins*60000);
    return reply("Message scheduled!\n\nWill send in "+mins+" minute(s):\n\n"+msg);
  }
};
