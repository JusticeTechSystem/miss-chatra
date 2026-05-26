// @marketplace prayer-request v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "PrayerRequest", category: "spiritual",
  desc: "Submit and manage group prayer requests",
  command: ["prayer", "prayfor", "prayerrequest", "prayrequests", "answered"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","prayers.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={prayers:[],counter:0};
    const d=all[chatId];
    if(command==="prayfor"||command==="prayerrequest"){
      const request=args.join(" ").trim();
      if(!request) return reply("Usage: "+pfx+"prayfor <your prayer request>\nExample: "+pfx+"prayfor Healing for my father who is sick");
      d.counter=(d.counter||0)+1;
      const id="PR-"+String(d.counter).padStart(3,"0");
      d.prayers.push({id,request,by:m?.pushName||"Anonymous",userId,status:"active",date:new Date().toLocaleDateString(),prayedFor:0});
      save(all);
      return reply("🙏 *Prayer Request Submitted*\n\n"+id+": "+request+"\n\nMay God hear and answer your prayer. 🕊️");
    }
    if(command==="prayrequests"||command==="prayer"){
      const active=d.prayers.filter(p=>p.status==="active");
      if(!active.length) return reply("No active prayer requests.\n"+pfx+"prayfor <request> to submit one.");
      const lines=["🙏 *Prayer Requests ("+active.length+")*\n"];
      active.slice(0,8).forEach(p=>lines.push("🕯️ *"+p.id+"* — "+p.by+"\n   "+p.request.slice(0,80)+(p.request.length>80?"...":"")));
      return reply(lines.join("\n"));
    }
    if(command==="answered"){
      const id=(args[0]||"").toUpperCase();
      const prayer=d.prayers.find(p=>p.id===id&&p.userId===userId);
      if(!prayer) return reply("Prayer not found or not yours: "+id);
      prayer.status="answered";prayer.answeredAt=new Date().toLocaleDateString();save(all);
      return reply("🎉 *Prayer Answered!*\n\nThank God for answering:\n"+prayer.request+"\n\n✨ What a testimony!");
    }
  }
};
