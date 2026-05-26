// @marketplace group-cleaner v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "GroupCleaner", category: "admin", desc: "Clean group by removing spam accounts",
  command: ["groupclean","removebots","cleangroup"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    if(!isAdmin&&!isOwner&&!isDev) return reply("Admin only.");
    try{
      const meta=await sock.groupMetadata(chatId);
      const suspects=meta.participants.filter(p=>{
        const num=p.id.split('@')[0].split(':')[0];
        return num.startsWith('1')&&num.length<10;
      });
      if(!suspects.length) return reply("No suspicious accounts detected in this group.");
      return reply("Suspicious Accounts Detected: "+suspects.length+"\n\nThese may be spam/bot accounts:\n"+suspects.slice(0,5).map(p=>'+'+p.id.split('@')[0]).join("\n")+"\n\nManually review and remove if confirmed spam.\nUse /kick @user to remove.");
    }catch(e){return reply("Error: "+e.message);}  
  }
};
