// @marketplace medication-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MedicationTracker", category: "health", desc: "Track medication schedule and refills",
  command: ["meds2","medstrack","pilltrack","medschedule"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','meds_track.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    if(command==='medstrack'&&args.length>=2){
      const[name,freq,...rest]=args;const note=rest.join(' ');
      all[userId].push({name,freq,note,added:new Date().toLocaleDateString(),taken:[]});save(all);
      return reply("Medication added: "+name+"\nFrequency: "+freq+"\n\nMark taken: "+pfx+"pilltrack "+name);
    }
    if(command==='pilltrack'&&args[0]){
      const med=all[userId].find(m=>m.name.toLowerCase()===args[0].toLowerCase());
      if(!med) return reply("Medication not found. "+pfx+"meds2 to see list.");
      med.taken.push(new Date().toLocaleString());save(all);
      return reply("Marked as taken: "+med.name+"\nTime: "+new Date().toLocaleTimeString());
    }
    if(!all[userId].length) return reply("No medications tracked.\n"+pfx+"medstrack Metformin '2x daily' 'with food'");
    return reply("My Medications\n\n"+all[userId].map((m,i)=>(i+1)+". "+m.name+" - "+m.freq+(m.note?" ("+m.note+")":"")+("\n   Last taken: "+(m.taken[m.taken.length-1]||'Never'))).join("\n"));
  }
};
