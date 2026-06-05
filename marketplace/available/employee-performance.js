// @marketplace employee-performance v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "EmployeePerf", category: "business", desc: "Track employee performance metrics",
  command: ["performance","emprate","stafftrack","performancereview"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','performance.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={reviews:{}};
    if(command==='emprate'&&args.length>=3){
      const name=args[0],score=parseInt(args[1]),note=args.slice(2).join(' ');
      if(!all[chatId].reviews[name])all[chatId].reviews[name]=[];
      all[chatId].reviews[name].push({score,note,date:new Date().toLocaleDateString(),by:m?.pushName||'Manager'});save(all);
      return reply("Performance recorded for "+name+"\nScore: "+score+"/10\nNote: "+note);
    }
    const reviews=all[chatId].reviews;
    if(!Object.keys(reviews).length) return reply("No performance records.\n"+pfx+"emprate John 8 'Excellent communication'");
    return reply("Performance Summary\n\n"+Object.entries(reviews).map(([name,rs])=>{const avg=(rs.reduce((s,r)=>s+r.score,0)/rs.length).toFixed(1);return name+": "+avg+"/10 ("+rs.length+" reviews)"}).join("\n"));
  }
};
