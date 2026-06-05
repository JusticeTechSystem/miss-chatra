// @marketplace step-counter v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "StepCounter", category: "health",
  desc: "Track daily steps and walking goals",
  command: ["steps", "stepcount", "walktracker", "dailysteps", "stepgoal"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","steps.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();const today=new Date().toDateString();
    if(!all[userId])all[userId]={};if(!all[userId][today])all[userId][today]={steps:0,goal:10000};
    const d=all[userId][today];
    if(command==="stepcount"||command==="steps"&&args.length){
      const count=parseInt(args[0]);
      if(isNaN(count)||count<0) return reply("Usage: "+pfx+"stepcount <steps>\nExample: "+pfx+"stepcount 3500");
      d.steps+=count;save(all);
      const pct=Math.min(100,(d.steps/d.goal*100)).toFixed(0);
      const bar="█".repeat(Math.floor(pct/10))+"░".repeat(10-Math.floor(pct/10));
      const cal=Math.round(d.steps*0.04);const km=(d.steps*0.0007).toFixed(1);
      return reply("👟 *Steps Updated!*\n\n["+bar+"] "+pct+"%\n\n👣 Steps: "+d.steps.toLocaleString()+" / "+d.goal.toLocaleString()+"\n🔥 Calories: ~"+cal+"\n📏 Distance: ~"+km+"km\n"+(d.steps>=d.goal?"\n🏆 *GOAL REACHED! Well done!*":"\n💪 "+(d.goal-d.steps).toLocaleString()+" steps to go!"));
    }
    if(command==="stepgoal"){
      const goal=parseInt(args[0]);
      if(isNaN(goal)||goal<100) return reply("Usage: "+pfx+"stepgoal 10000\nRecommended: 8000-10000 steps/day");
      d.goal=goal;save(all);
      return reply("✅ Daily step goal set to *"+goal.toLocaleString()+"* steps");
    }
    const pct=Math.min(100,(d.steps/d.goal*100)).toFixed(0);
    return reply("👟 *Today\'s Steps*\n\n"+d.steps.toLocaleString()+" / "+d.goal.toLocaleString()+" steps\n"+pct+"% of goal\n\nAdd steps: "+pfx+"stepcount 2000");
  }
};
