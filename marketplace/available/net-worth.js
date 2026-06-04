// @marketplace net-worth v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "NetWorthCalc", category: "finance",
  desc: "Calculate your personal net worth",
  command: ["networth", "assets", "liabilities", "networthcalc"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","networth.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]={assets:{},liabilities:{}};
    const d=all[userId];
    if(command==="assets"){
      const name=args[0],amount=parseFloat(args[1]);
      if(!name||isNaN(amount)) return reply("Usage: "+pfx+"assets <name> <value>\nExample: "+pfx+"assets Car 3000000\n"+pfx+"assets Savings 500000");
      d.assets[name]=amount;save(all);
      const total=Object.values(d.assets).reduce((s,n)=>s+n,0);
      return reply("✅ Asset added: *"+name+"* = ₦"+amount.toLocaleString()+"\nTotal assets: ₦"+total.toLocaleString());
    }
    if(command==="liabilities"){
      const name=args[0],amount=parseFloat(args[1]);
      if(!name||isNaN(amount)) return reply("Usage: "+pfx+"liabilities <name> <value>\nExample: "+pfx+"liabilities CarLoan 1500000");
      d.liabilities[name]=amount;save(all);
      return reply("✅ Liability added: *"+name+"* = ₦"+amount.toLocaleString());
    }
    const totalAssets=Object.values(d.assets).reduce((s,n)=>s+n,0);
    const totalLiabilities=Object.values(d.liabilities).reduce((s,n)=>s+n,0);
    const netWorth=totalAssets-totalLiabilities;
    const lines=["💰 *Net Worth Summary*\n","📈 *Assets:*"];
    Object.entries(d.assets).forEach(([n,v])=>lines.push("  "+n+": ₦"+v.toLocaleString()));
    lines.push("  Total: ₦"+totalAssets.toLocaleString(),"\n📉 *Liabilities:*");
    Object.entries(d.liabilities).forEach(([n,v])=>lines.push("  "+n+": ₦"+v.toLocaleString()));
    lines.push("  Total: ₦"+totalLiabilities.toLocaleString(),"\n*💎 Net Worth: ₦"+netWorth.toLocaleString()+"*");
    return reply(lines.join("\n"));
  }
};
