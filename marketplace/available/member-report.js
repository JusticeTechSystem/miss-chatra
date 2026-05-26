// @marketplace member-report v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MemberReport", category: "admin",
  desc: "Generate detailed member activity reports",
  command: ["memberreport", "memberstat", "whoisactive", "activityreport"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    if(!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
    const state=require("../../../library/state").getState();
    const counts=state.user_message_counts?.[chatId]||{};
    if(!Object.keys(counts).length) return reply("No activity data yet. Data accumulates as members chat.");
    const sorted=Object.entries(counts).sort((a,b)=>b[1].count-a[1].count);
    const lines=["📊 *Member Activity Report*\n📅 "+new Date().toLocaleDateString()+"\n"];
    lines.push("🏆 *Most Active:*");
    sorted.slice(0,5).forEach(([jid,data],i)=>{
      const num=jid.split("@")[0].split(":")[0];
      lines.push("  "+(i+1)+". +"+num+" — "+data.count+" messages");
    });
    const inactive=sorted.filter(([,d])=>Date.now()-d.last_msg>7*24*60*60*1000);
    if(inactive.length){
      lines.push("\n😴 *Inactive (7+ days):*");
      inactive.slice(0,5).forEach(([jid])=>lines.push("  • +"+jid.split("@")[0].split(":")[0]));
    }
    lines.push("\n👥 Total tracked: "+sorted.length+" members");
    return reply(lines.join("\n"));
  }
};
