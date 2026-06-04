// @marketplace budget-planner v1.0.0 by JusticeTech
"use strict";
const fs=require("fs"),path=require("path");
const DB=path.join(__dirname,"../../..","database","budget.json");
const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"BudgetPlanner",category:"finance",desc:"Monthly budget planner with income and expense tracking",
  command:["budget","setbudget","addexpense2","budgetsummary","budgetreset"],
  run:async({args,command,chatId,userId,reply,prefix,m})=>{
    const pfx=prefix||"/",all=load();
    if(!all[userId])all[userId]={income:0,categories:{},month:new Date().getMonth()};
    const d=all[userId];
    if(command==="setbudget"){
      const income=parseFloat(args[0]);
      if(isNaN(income)) return reply("Usage: "+pfx+"setbudget <monthly income>\nExample: "+pfx+"setbudget 150000");
      d.income=income;d.categories={};save(all);
      return reply("✅ Monthly budget set to ₦"+income.toLocaleString()+"\n\nNow allocate: "+pfx+"budget food 30000\n"+pfx+"budget transport 15000\n"+pfx+"budget rent 50000");
    }
    if(command==="budget"&&args.length>=2){
      const cat=args[0];const amt=parseFloat(args[1]);
      if(isNaN(amt)) return reply("Usage: "+pfx+"budget <category> <allocated amount>");
      if(!d.categories[cat])d.categories[cat]={allocated:0,spent:0};
      d.categories[cat].allocated=amt;save(all);
      return reply("✅ Budgeted ₦"+amt.toLocaleString()+" for *"+cat+"*");
    }
    if(command==="budgetsummary"||command==="budget"){
      const cats=Object.entries(d.categories);
      if(!cats.length) return reply("No budget set.\n"+pfx+"setbudget 150000 — set income\n"+pfx+"budget food 30000 — allocate");
      const lines=["📊 *Monthly Budget*\n💰 Income: ₦"+(d.income||0).toLocaleString()+"\n"];
      let totalAlloc=0,totalSpent=0;
      cats.forEach(([cat,v])=>{
        totalAlloc+=v.allocated;totalSpent+=v.spent;
        const pct=v.allocated>0?Math.min(100,(v.spent/v.allocated*100)).toFixed(0):0;
        const bar="█".repeat(Math.floor(pct/10))+"░".repeat(10-Math.floor(pct/10));
        lines.push("📂 *"+cat+"* ["+bar+"] "+pct+"%\n   ₦"+(v.spent||0).toLocaleString()+" / ₦"+v.allocated.toLocaleString());
      });
      lines.push("\n💵 Total Allocated: ₦"+totalAlloc.toLocaleString());
      lines.push("💸 Total Spent: ₦"+totalSpent.toLocaleString());
      lines.push("💰 Remaining: ₦"+(d.income-totalSpent).toLocaleString());
      return reply(lines.join("\n"));
    }
    if(command==="budgetreset"){d.categories={};d.income=0;save(all);return reply("✅ Budget reset.");}
    return reply(pfx+"setbudget <income> — Set monthly income\n"+pfx+"budget <category> <amount> — Allocate budget\n"+pfx+"budgetsummary — View budget");
  }
};
