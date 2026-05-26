// @marketplace habit-tracker v1.0.0 by JusticeTech
"use strict";
const fs=require("fs"),path=require("path");
const DB=path.join(__dirname,"../../..","database","habits.json");
const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"HabitTracker",category:"productivity",desc:"Build and track daily habits with streaks",
  command:["habit","addhabit","done","habits","habitstreak","delhabit"],
  run:async({args,command,userId,reply,prefix})=>{
    const pfx=prefix||"/",all=load();
    if(!all[userId])all[userId]={habits:{}};
    const d=all[userId];
    const today=new Date().toDateString();
    if(command==="addhabit"){
      const name=args.join(" ").trim();
      if(!name) return reply("Usage: "+pfx+"addhabit <habit name>\nExample: "+pfx+"addhabit Drink 8 glasses of water");
      const key=name.toLowerCase().replace(/\s+/g,"-");
      d.habits[key]={name,streak:0,lastDone:null,totalDone:0,created:new Date().toLocaleDateString()};
      save(all);
      return reply("✅ *Habit Added!*\n\n🎯 "+name+"\n\nMark as done daily: "+pfx+"done "+name);
    }
    if(command==="done"){
      const name=args.join(" ").trim();
      const key=name.toLowerCase().replace(/\s+/g,"-");
      const habit=d.habits[key]||Object.values(d.habits).find(h=>h.name.toLowerCase().includes(name.toLowerCase()));
      if(!habit) return reply("Habit not found.\n"+pfx+"habits to see your habits.");
      if(habit.lastDone===today) return reply("✅ Already done today! Keep it up!\n🔥 Streak: "+habit.streak+" days");
      const yesterday=new Date(Date.now()-86400000).toDateString();
      if(habit.lastDone===yesterday) habit.streak++;
      else if(habit.lastDone&&habit.lastDone!==today) habit.streak=1;
      else habit.streak=(habit.streak||0)+1;
      habit.lastDone=today;habit.totalDone=(habit.totalDone||0)+1;
      save(all);
      const milestones=[7,14,21,30,60,90,100,365];
      const milestone=milestones.find(m=>habit.streak===m);
      return reply("✅ *Habit Done!*\n\n🎯 "+habit.name+"\n🔥 Streak: "+habit.streak+" day(s)\n✨ Total: "+habit.totalDone+" times"+(milestone?"\n\n🏆 *"+milestone+" day milestone reached!*":""));
    }
    if(command==="habits"){
      const habits=Object.values(d.habits);
      if(!habits.length) return reply("No habits yet.\n"+pfx+"addhabit <name> to start tracking.");
      const lines=["🎯 *Your Habits*\n"];
      habits.forEach(h=>{
        const doneToday=h.lastDone===today?"✅":"⬜";
        lines.push(doneToday+" *"+h.name+"* — 🔥 "+h.streak+"d streak");
      });
      lines.push("\n_"+pfx+"done <habit> to mark complete_");
      return reply(lines.join("\n"));
    }
    if(command==="habitstreak"){
      const habits=Object.values(d.habits).sort((a,b)=>b.streak-a.streak);
      if(!habits.length) return reply("No habits tracked yet.");
      const lines=["🏆 *Habit Streaks*\n"];
      habits.forEach((h,i)=>lines.push((i+1)+". *"+h.name+"* — 🔥 "+h.streak+" days"));
      return reply(lines.join("\n"));
    }
    if(command==="delhabit"){
      const name=args.join(" ").trim();
      const key=name.toLowerCase().replace(/\s+/g,"-");
      if(d.habits[key]){delete d.habits[key];save(all);return reply("🗑️ Habit *"+name+"* deleted.");}
      return reply("Habit not found.");
    }
  }
};
