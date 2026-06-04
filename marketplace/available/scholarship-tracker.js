// @marketplace scholarship-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ScholarshipTracker", category: "finance", desc: "Track scholarship applications",
  command: ["scholarship","scholarshiptrack","grants"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','scholarships.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    if(args.length>=2){
      const name=args[0],deadline=args[1],status=args[2]||'pending';
      all[userId].push({name,deadline,status,added:new Date().toLocaleDateString()});save(all);
      return reply("Scholarship added: "+name+"\nDeadline: "+deadline+"\nStatus: "+status);
    }
    if(!all[userId].length) return reply("No scholarships tracked.\n"+pfx+"scholarship <name> <deadline>\nExample: "+pfx+"scholarship 'MTN Foundation' 2026-05-31");
    return reply("My Scholarships\n\n"+all[userId].map((s,i)=>(i+1)+". "+s.name+"\n   Deadline: "+s.deadline+" | "+s.status).join("\n"));
  }
};
