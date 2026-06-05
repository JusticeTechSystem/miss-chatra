// @marketplace savings-goal v1.0.0 by JusticeTech
"use strict";
const fs=require("fs"),path=require("path");
const DB=path.join(__dirname,"../../..","database","savings.json");
const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"SavingsGoal",category:"finance",desc:"Set savings goals and track your progress",
  command:["savings","savingsgoal","savetoward","savingsprogress"],
  run:async({args,command,chatId,userId,reply,prefix,m})=>{
    const pfx=prefix||"/",all=load();
    if(!all[userId])all[userId]={goals:{}};
    const name=m?.pushName||"Member";
    if(command==="savingsgoal"){
      const [goalName,...rest]=args;
      const target=parseFloat(rest[0]);
      if(!goalName||isNaN(target)) return reply("Usage: "+pfx+"savingsgoal <name> <target amount>\nExample: "+pfx+"savingsgoal iPhone 450000");
      all[userId].goals[goalName]={target,saved:0,created:new Date().toLocaleDateString()};
      save(all);
      return reply("🎯 *Goal Created!*\n\n📌 Goal: "+goalName+"\n💰 Target: ₦"+target.toLocaleString()+"\n\nStart saving: "+pfx+"savetoward "+goalName+" <amount>");
    }
    if(command==="savetoward"){
      const [goalName,...rest]=args;
      const amount=parseFloat(rest[0]);
      if(!goalName||isNaN(amount)) return reply("Usage: "+pfx+"savetoward <goal name> <amount>");
      if(!all[userId].goals[goalName]) return reply("Goal not found. Create it first: "+pfx+"savingsgoal "+goalName+" <target>");
      all[userId].goals[goalName].saved+=amount;
      save(all);
      const g=all[userId].goals[goalName];
      const pct=Math.min(100,(g.saved/g.target*100)).toFixed(1);
      const bar="█".repeat(Math.floor(pct/10))+"░".repeat(10-Math.floor(pct/10));
      const remaining=Math.max(0,g.target-g.saved);
      return reply("💰 *Savings Updated*\n\n📌 "+goalName+"\n✅ Added: ₦"+amount.toLocaleString()+"\n\n["+bar+"] "+pct+"%\n💰 Saved: ₦"+g.saved.toLocaleString()+"\n🎯 Target: ₦"+g.target.toLocaleString()+"\n📊 Remaining: ₦"+remaining.toLocaleString()+(g.saved>=g.target?"\n\n🎉 *Goal reached! Congratulations!*":""));
    }
    if(command==="savingsprogress"||command==="savings"){
      const goals=Object.entries(all[userId].goals||{});
      if(!goals.length) return reply("No savings goals yet.\nCreate one: "+pfx+"savingsgoal iPhone 450000");
      const lines=["💰 *Your Savings Goals*\n"];
      goals.forEach(([n,g])=>{
        const pct=Math.min(100,(g.saved/g.target*100)).toFixed(0);
        const bar="█".repeat(Math.floor(pct/10))+"░".repeat(10-Math.floor(pct/10));
        lines.push("📌 *"+n+"*\n["+bar+"] "+pct+"%\n₦"+g.saved.toLocaleString()+" / ₦"+g.target.toLocaleString()+"\n");
      });
      return reply(lines.join("\n"));
    }
  }
};
