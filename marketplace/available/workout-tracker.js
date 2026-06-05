// @marketplace workout-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "WorkoutTracker", category: "health",
  desc: "Log workouts and track fitness progress",
  command: ["workout", "gym", "exercise", "fitnesslog"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","workouts.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    if(command==="workout"&&args.length){
      const type=args[0]||"workout",duration=parseInt(args[1])||30,note=args.slice(2).join(" ")||"";
      const CALORIES={running:8,cycling:6,swimming:7,gym:5,yoga:3,hiit:9,football:7,basketball:6,walking:3};
      const kcal=((CALORIES[type.toLowerCase()]||5)*duration);
      all[userId].push({type,duration,kcal,note,date:new Date().toLocaleDateString()});save(all);
      const total=all[userId].length;
      return reply("💪 *Workout Logged!*\n\n🏃 Activity: "+type+"\n⏱️ Duration: "+duration+" mins\n🔥 Calories burned: ~"+kcal+" kcal\n📊 Total sessions: "+total+(note?"\n📝 "+note:""));
    }
    const recent=all[userId].slice(-5);
    if(!recent.length) return reply("No workouts logged yet.\n"+pfx+"workout running 30 — log a 30min run");
    const lines=["💪 *Recent Workouts*\n"];
    recent.reverse().forEach(w=>lines.push("🏃 *"+w.type+"* — "+w.duration+"min | "+w.kcal+" kcal | "+w.date));
    const totalKcal=all[userId].reduce((s,w)=>s+w.kcal,0);
    lines.push("\n🔥 Total calories burned: "+totalKcal);
    return reply(lines.join("\n"));
  }
};
