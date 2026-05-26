// @marketplace group-stats v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "GroupStats", category: "admin",
  desc: "Comprehensive group statistics and insights",
  command: ["groupstats", "groupinfo2", "statsdashboard", "groupinsights"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    if(!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
    try{
      const meta=await sock.groupMetadata(chatId);
      const state=require("../../../library/state").getState();
      const counts=state.user_message_counts?.[chatId]||{};
      const total=meta.participants.length;
      const admins=meta.participants.filter(p=>p.admin).length;
      const members=total-admins;
      const msgTotal=Object.values(counts).reduce((s,d)=>s+(d.count||0),0);
      const active=Object.values(counts).filter(d=>Date.now()-(d.last_msg||0)<7*24*60*60*1000).length;
      const lines=["📊 *Group Statistics*\n","👥 *Members:*","  Total: "+total,"  Admins: "+admins,"  Regular: "+members,"  Active (7d): "+active,"","💬 *Messages:*","  Total logged: "+msgTotal,"  Avg per member: "+(msgTotal/Math.max(1,total)).toFixed(1),"","📋 *Group Info:*","  Name: "+meta.subject,"  Created: "+new Date(meta.creation*1000).toLocaleDateString(),"  Description: "+(meta.desc||"").slice(0,60)||(meta.desc?.length>60?"...":"No description")];
      return reply(lines.join("\n"));
    }catch(e){return reply("❌ Could not fetch stats: "+e.message);}
  }
};
