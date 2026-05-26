// @marketplace daily-planner v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "DailyPlanner", category: "productivity",
  desc: "Plan your day with time blocks",
  command: ["plan", "planday", "timeblock", "todayschedule", "addplan"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","planner.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();const today=new Date().toDateString();
    if(!all[userId])all[userId]={};if(!all[userId][today])all[userId][today]=[];
    if(command==="addplan"||command==="timeblock"){
      const time=args[0];const task=args.slice(1).join(" ");
      if(!time||!task) return reply("Usage: "+pfx+"addplan 9:00 Morning meeting\n"+pfx+"addplan 14:00 Client call\n"+pfx+"addplan 18:00 Gym");
      all[userId][today].push({time,task,done:false});
      all[userId][today].sort((a,b)=>a.time.localeCompare(b.time));
      save(all);
      return reply("✅ Added to today\'s plan:\n🕐 "+time+" — "+task);
    }
    if(command==="todayschedule"||command==="plan"||command==="planday"){
      const schedule=all[userId][today];
      if(!schedule||!schedule.length) return reply("Today\'s schedule is empty.\n\n"+pfx+"addplan 9:00 Team meeting\n"+pfx+"addplan 14:00 Client call");
      const lines=["📅 *Today\'s Schedule*\n"+new Date().toLocaleDateString()+"\n"];
      const now=new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"});
      schedule.forEach(s=>lines.push((s.done?"✅":"🕐")+" *"+s.time+"* — "+s.task+(s.time<now&&!s.done?" ⚠️":"")));
      return reply(lines.join("\n"));
    }
    return reply("📅 *Daily Planner*\n\n"+pfx+"addplan 9:00 Morning meeting\n"+pfx+"todayschedule — view today");
  }
};
