// @marketplace report-generator v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ReportGenerator", category: "admin", desc: "Generate formatted group activity reports",
  command: ["generatereport","weeklyrept","groupreport2"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    if(!isAdmin&&!isOwner&&!isDev) return reply("Admin only.");
    try{
      const meta=await sock.groupMetadata(chatId);
      const state=require('../../../library/state').getState();
      const counts=state.user_message_counts?.[chatId]||{};
      const total=meta.participants.length;
      const admins=meta.participants.filter(p=>p.admin).length;
      const msgs=Object.values(counts).reduce((s,d)=>s+(d.count||0),0);
      const active=Object.values(counts).filter(d=>Date.now()-(d.last_msg||0)<7*86400000).length;
      const top=Object.entries(counts).sort((a,b)=>b[1].count-a[1].count).slice(0,3);
      const lines=["GROUP ACTIVITY REPORT","Generated: "+new Date().toLocaleDateString(),"","Group: "+meta.subject,"Members: "+total+" ("+admins+" admins)","","ACTIVITY SUMMARY","Total messages: "+msgs,"Active members (7d): "+active+"/"+total,"Engagement rate: "+(total>0?(active/total*100).toFixed(0):0)+"%","","TOP CONTRIBUTORS"];
      top.forEach(([jid,d],i)=>lines.push((i+1)+". +"+jid.split('@')[0].split(':')[0]+": "+d.count+" messages"));
      return reply(lines.join("\n"));
    }catch(e){return reply("Error generating report: "+e.message);}  
  }
};
