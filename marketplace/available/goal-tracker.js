// @marketplace goal-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "GoalTracker", category: "productivity",
  desc: "Set and track personal and group goals",
  command: ["goal", "setgoal", "goalcheck", "myprogress", "goalupdate"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","goals.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    if(command==="setgoal"){
      const deadline=args[args.length-1];
      const title=args.slice(0,-1).join(" ")||args.join(" ");
      const isDate=/^\d{4}-\d{2}-\d{2}$/.test(deadline);
      all[userId].push({title,deadline:isDate?deadline:"",progress:0,steps:[],created:new Date().toLocaleDateString(),status:"active"});
      save(all);
      const idx=all[userId].length;
      return reply("🎯 *Goal Set!*\n\n📌 "+title+(isDate?"\n📅 Deadline: "+deadline:"")+"\n\nUpdate progress: "+pfx+"goalupdate "+idx+" 25\nAdd steps: "+pfx+"goalcheck");
    }
    if(command==="goalupdate"){
      const idx=parseInt(args[0])-1;
      const progress=parseInt(args[1]);
      if(!all[userId][idx]) return reply("Goal not found. "+pfx+"myprogress to see your goals.");
      all[userId][idx].progress=Math.min(100,progress);
      if(progress>=100) all[userId][idx].status="completed";
      save(all);
      const g=all[userId][idx];
      const bar="█".repeat(Math.floor(g.progress/10))+"░".repeat(10-Math.floor(g.progress/10));
      return reply("📊 *Goal Updated*\n\n📌 "+g.title+"\n["+bar+"] "+g.progress+"%"+(g.progress>=100?"\n\n🏆 *GOAL ACHIEVED!*":""));
    }
    if(command==="myprogress"||command==="goalcheck"){
      if(!all[userId].length) return reply("No goals set.\n"+pfx+"setgoal Learn Spanish 2026-12-31");
      const lines=["🎯 *My Goals*\n"];
      all[userId].forEach((g,i)=>{
        const bar="█".repeat(Math.floor(g.progress/10))+"░".repeat(10-Math.floor(g.progress/10));
        lines.push((i+1)+". *"+g.title+"*\n["+bar+"] "+g.progress+"% "+(g.status==="completed"?"✅":"🔄")+(g.deadline?"  📅 "+g.deadline:""));
      });
      return reply(lines.join("\n"));
    }
    return reply("🎯 *Goal Tracker*\n\n"+pfx+"setgoal Learn Spanish 2026-12-31\n"+pfx+"goalupdate 1 50 — update to 50%\n"+pfx+"myprogress — view all goals");
  }
};
