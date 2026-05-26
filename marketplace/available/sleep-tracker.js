// @marketplace sleep-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "SleepTracker", category: "health",
  desc: "Track sleep hours and quality",
  command: ["sleep", "sleeplog", "sleptfor", "sleeptrack"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","sleep.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    if(command==="sleeplog"||command==="sleptfor"){
      const hours=parseFloat(args[0]);
      const quality=(args[1]||"good").toLowerCase();
      if(isNaN(hours)||hours<0||hours>24) return reply("Usage: "+pfx+"sleeplog <hours> [quality: poor/okay/good/great]\nExample: "+pfx+"sleeplog 7.5 good");
      all[userId].push({hours,quality,date:new Date().toLocaleDateString()});save(all);
      const avg=(all[userId].slice(-7).reduce((s,x)=>s+x.hours,0)/Math.min(7,all[userId].length)).toFixed(1);
      const emoji=hours>=8?"😴✅":hours>=6?"😐":"😴⚠️";
      return reply(emoji+" *Sleep Logged*\n\n⏱️ Hours: "+hours+"\n🌙 Quality: "+quality+"\n📊 7-day average: "+avg+"h\n\n"+(hours<6?"⚠️ You need more sleep! Aim for 7-9 hours.":hours>=8?"✅ Great sleep! Keep it up!":"😐 Decent. Try for 8 hours."));
    }
    const recent=all[userId].slice(-7);
    if(!recent.length) return reply("No sleep logged.\n"+pfx+"sleeplog 8 great — log 8 hours great sleep");
    const lines=["😴 *Sleep Log*\n"];
    recent.reverse().forEach(s=>lines.push("  "+s.date+": "+s.hours+"h ("+s.quality+")"));
    const avg=(recent.reduce((s,x)=>s+x.hours,0)/recent.length).toFixed(1);
    lines.push("\n📊 Average: "+avg+" hours/night");
    return reply(lines.join("\n"));
  }
};
