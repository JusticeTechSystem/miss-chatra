// @marketplace brain-dump v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "BrainDump", category: "productivity", desc: "Capture random thoughts and ideas",
  command: ["braindump","dumpit","mindcapture","ideadump"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','braindump.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    if(command==='dumpit'||command==='braindump'&&args.length){
      const thought=args.join(' ');
      if(!thought) return reply("Usage: "+pfx+"dumpit <your thought/idea>\nCapture anything on your mind!");
      all[userId].push({text:thought,date:new Date().toLocaleDateString(),time:new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})});save(all);
      return reply("Captured! ("+all[userId].length+" thoughts total)\n\n"+thought);
    }
    if(!all[userId].length) return reply("No thoughts captured yet.\n"+pfx+"dumpit Your brilliant idea here");
    const recent=all[userId].slice(-5).reverse();
    return reply("Brain Dump ("+all[userId].length+" total)\n\n"+recent.map((t,i)=>(i+1)+". "+t.text+"\n   "+t.date+" "+t.time).join("\n"));
  }
};
