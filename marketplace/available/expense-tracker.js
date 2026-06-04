// @marketplace expense-tracker v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname,"../../..","database","expenses.json");
const load = () => { try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};} };
const save = d => { try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{} };
module.exports = {
  name:"ExpenseTracker", category:"finance", desc:"Track personal and group expenses with categories and summaries",
  command:["expense","addexpense","expenses","expensesummary","clearexpenses"],
  run: async({args,command,chatId,userId,reply,prefix,m})=>{
    const pfx=prefix||"/", chat=chatId, all=load();
    if(!all[chat])all[chat]={expenses:[],budget:0};
    const name=m?.pushName||userId?.split("@")[0]||"Member";
    if(command==="addexpense"||command==="expense"){
      const amount=parseFloat(args[0]);
      const cat=args[1]||"general";
      const note=args.slice(2).join(" ")||"";
      if(isNaN(amount)||amount<=0) return reply("Usage: "+pfx+"expense <amount> <category> [note]\nCategories: food, transport, utilities, entertainment, shopping, health, other\nExample: "+pfx+"expense 2500 food lunch");
      all[chat].expenses.push({amount,cat,note,name,date:new Date().toLocaleDateString(),userId});
      save(all);
      const total=all[chat].expenses.filter(e=>e.userId===userId).reduce((s,e)=>s+e.amount,0);
      return reply("💸 *Expense Recorded*\n\n💰 Amount: ₦"+amount.toLocaleString()+"\n📂 Category: "+cat+"\n📝 Note: "+(note||"-")+"\n\n📊 Your total today: ₦"+total.toLocaleString());
    }
    if(command==="expenses"){
      const list=all[chat].expenses.slice(-10);
      if(!list.length) return reply("No expenses recorded.\nUse "+pfx+"expense 2500 food lunch");
      const lines=["💸 *Recent Expenses*\n"];
      list.forEach((e,i)=>lines.push((i+1)+". ₦"+e.amount.toLocaleString()+" — "+e.cat+" ("+e.name+") "+e.date));
      const total=all[chat].expenses.reduce((s,e)=>s+e.amount,0);
      lines.push("\n💰 Group Total: ₦"+total.toLocaleString());
      return reply(lines.join("\n"));
    }
    if(command==="expensesummary"){
      const cats={};
      all[chat].expenses.forEach(e=>{cats[e.cat]=(cats[e.cat]||0)+e.amount;});
      if(!Object.keys(cats).length) return reply("No expenses yet.");
      const lines=["📊 *Expense Summary*\n"];
      Object.entries(cats).sort((a,b)=>b[1]-a[1]).forEach(([cat,amt])=>lines.push("  "+cat+": ₦"+amt.toLocaleString()));
      lines.push("\n💰 Total: ₦"+all[chat].expenses.reduce((s,e)=>s+e.amount,0).toLocaleString());
      return reply(lines.join("\n"));
    }
    if(command==="clearexpenses"){
      all[chat].expenses=[];save(all);
      return reply("✅ All expenses cleared.");
    }
  }
};
