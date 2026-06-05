// @marketplace tithe-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "TitheTracker", category: "spiritual", desc: "Track tithes and church offerings",
  command: ["tithe","tithelog","churchgiving","offerings"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','tithe.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    if(command==='tithelog'&&args.length){
      const income=parseFloat(args[0]);
      if(isNaN(income)) return reply("Usage: "+pfx+"tithelog <monthly income>\nExample: "+pfx+"tithelog 150000");
      const tithe=income*0.1;const offering=income*0.02;
      all[userId].push({income,tithe,offering,date:new Date().toLocaleDateString()});save(all);
      return reply("Tithe Calculator\n\nIncome: N"+income.toLocaleString()+"\nTithe (10%): N"+tithe.toLocaleString()+"\nSuggested Offering (2%): N"+offering.toLocaleString()+"\nTotal Giving: N"+(tithe+offering).toLocaleString()+"\n\nLogged for "+new Date().toLocaleDateString());
    }
    if(!all[userId].length) return reply("No tithe records.\n"+pfx+"tithelog 150000 — log your income");
    const total=all[userId].reduce((s,x)=>s+x.tithe,0);
    return reply("Tithe Records\n\n"+all[userId].slice(-3).map(x=>"N"+x.income.toLocaleString()+" income → N"+x.tithe.toLocaleString()+" tithe ("+x.date+")").join("\n")+"\n\nTotal given: N"+total.toLocaleString());
  }
};
