// @marketplace anniversary-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "AnniversaryTracker", category: "social",
  desc: "Track important dates and anniversaries",
  command: ["anniversary", "importantdate", "datereminder", "remember2"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","anniversaries.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    if(command==="anniversary"&&args.length>=2){
      const label=args.slice(0,-1).join(" "),date=args[args.length-1];
      all[userId].push({label,date,addedAt:new Date().toLocaleDateString()});save(all);
      const d=new Date(date);
      const now=new Date();
      const next=new Date(now.getFullYear(),d.getMonth(),d.getDate());
      if(next<now)next.setFullYear(now.getFullYear()+1);
      const days=Math.ceil((next-now)/86400000);
      return reply("❤️ Saved: *"+label+"* on "+d.toLocaleDateString()+"\n\n📅 "+days+" days away!");
    }
    if(!all[userId].length) return reply("No important dates saved.\n"+pfx+"anniversary Wedding Anniversary 2015-06-20");
    const lines=["❤️ *Important Dates*\n"];
    const now=new Date();
    all[userId].forEach(a=>{
      const d=new Date(a.date);
      const next=new Date(now.getFullYear(),d.getMonth(),d.getDate());
      if(next<now)next.setFullYear(now.getFullYear()+1);
      const days=Math.ceil((next-now)/86400000);
      lines.push("📅 *"+a.label+"* — in "+days+" days ("+d.toLocaleDateString()+")");
    });
    return reply(lines.join("\n"));
  }
};
