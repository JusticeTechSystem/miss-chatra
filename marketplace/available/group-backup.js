// @marketplace group-backup v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "GroupBackup", category: "admin", desc: "Backup and export group information",
  command: ["groupbackup","exportgroup","savegroup"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    if(!isAdmin&&!isOwner&&!isDev) return reply("Admin only.");
    try{
      const meta=await sock.groupMetadata(chatId);
      const backup={exportDate:new Date().toISOString(),groupName:meta.subject,description:meta.desc||'',participants:meta.participants.length,admins:meta.participants.filter(p=>p.admin).map(p=>'+'+p.id.split('@')[0].split(':')[0]),created:new Date(meta.creation*1000).toLocaleDateString()};
      const lines=["GROUP BACKUP","Exported: "+new Date().toLocaleDateString(),"","Group Name: "+backup.groupName,"Description: "+(backup.description||'None'),"Total Members: "+backup.participants,"Created: "+backup.created,"","ADMINS:"];
      backup.admins.forEach(a=>lines.push("  "+a));
      lines.push("","Use /groupstats for full analytics.");
      return reply(lines.join("\n"));
    }catch(e){return reply("Backup failed: "+e.message);}  
  }
};
