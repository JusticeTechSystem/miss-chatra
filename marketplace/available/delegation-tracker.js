// @marketplace delegation-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "DelegationTracker", category: "productivity", desc: "Track tasks you have delegated",
  command: ["delegate2","delegated","delegatelog"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','delegated.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    if(command==='delegatelog'&&args.length>=2){
      const person=args[0],task=args.slice(1).join(' ');
      all[userId].push({person,task,date:new Date().toLocaleDateString(),done:false});save(all);
      return reply("Delegated to "+person+": "+task);
    }
    if(!all[userId].length) return reply("Nothing delegated yet.\n"+pfx+"delegatelog John 'Send the quarterly report'");
    const pending=all[userId].filter(x=>!x.done);
    return reply("Delegated Tasks\n\n"+all[userId].map((x,i)=>(i+1)+". To "+x.person+": "+x.task+" - "+(x.done?"Done":"Pending")+" ("+x.date+")").join("\n")+"\n\nPending: "+pending.length);
  }
};
