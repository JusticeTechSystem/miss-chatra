// @marketplace sales-tracker v1.0.0 by JusticeTech
"use strict";
const fs=require("fs"),path=require("path");
const DB=path.join(__dirname,"../../..","database","sales.json");
const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"SalesTracker",category:"business",desc:"Track sales, revenue, and team leaderboard",
  command:["sale","sales","salesleader","salestotal","salesreset"],
  run:async({args,command,chatId,userId,reply,prefix,m,isAdmin,isOwner,isDev})=>{
    const pfx=prefix||"/",all=load(),chat=chatId;
    if(!all[chat])all[chat]={sales:[],target:0};
    const d=all[chat];
    const name=m?.pushName||userId?.split("@")[0]||"Member";
    if(command==="sale"){
      const amount=parseFloat(args[0]);
      const client=args.slice(1).join(" ")||"Client";
      if(isNaN(amount)||amount<=0) return reply("Usage: "+pfx+"sale <amount> [client name]\nExample: "+pfx+"sale 50000 Mr Johnson");
      d.sales.push({amount,client,name,userId,date:new Date().toLocaleDateString(),time:new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})});
      save(all);
      const myTotal=d.sales.filter(s=>s.userId===userId).reduce((s,e)=>s+e.amount,0);
      const groupTotal=d.sales.reduce((s,e)=>s+e.amount,0);
      return reply("🎯 *Sale Recorded!*\n\n💰 Amount: ₦"+amount.toLocaleString()+"\n👤 Client: "+client+"\n📊 Your total: ₦"+myTotal.toLocaleString()+"\n💵 Group total: ₦"+groupTotal.toLocaleString()+(d.target>0?"\n🎯 Target: "+Math.min(100,(groupTotal/d.target*100)).toFixed(1)+"%":""));
    }
    if(command==="salesleader"){
      const byRep={};
      d.sales.forEach(s=>{if(!byRep[s.userId])byRep[s.userId]={name:s.name,total:0,count:0};byRep[s.userId].total+=s.amount;byRep[s.userId].count++;});
      const sorted=Object.values(byRep).sort((a,b)=>b.total-a.total);
      if(!sorted.length) return reply("No sales recorded yet.\n"+pfx+"sale 50000 to record a sale.");
      const medals=["🥇","🥈","🥉"];
      const lines=["🏆 *Sales Leaderboard*\n"];
      sorted.forEach((r,i)=>lines.push((medals[i]||"  "+(i+1)+".") +" *"+r.name+"*\n   ₦"+r.total.toLocaleString()+" • "+r.count+" sale(s)"));
      return reply(lines.join("\n"));
    }
    if(command==="salestotal"){
      const total=d.sales.reduce((s,e)=>s+e.amount,0);
      const today=new Date().toLocaleDateString();
      const todayTotal=d.sales.filter(s=>s.date===today).reduce((s,e)=>s+e.amount,0);
      return reply("💰 *Sales Summary*\n\n📅 Today: ₦"+todayTotal.toLocaleString()+"\n📊 All time: ₦"+total.toLocaleString()+"\n🏪 Total sales: "+d.sales.length+(d.target>0?"\n🎯 Target progress: "+Math.min(100,(total/d.target*100)).toFixed(1)+"%":""));
    }
    if(command==="salesreset"){
      if(!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
      d.sales=[];save(all);return reply("✅ Sales records reset.");
    }
  }
};
