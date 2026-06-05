// @marketplace gratitude-journal v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "GratitudeJournal", category: "social", desc: "Daily gratitude practice",
  command: ["grateful","gratitude","thankful","blessed"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','gratitude.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    const entry=args.join(' ');
    if(!entry) return reply("Usage: "+pfx+"grateful <what you are grateful for>\nExample: "+pfx+"grateful My family is healthy\n\nResearch shows 3 gratitude entries per day improves mental health by 23%!");
    all[userId].push({text:entry,date:new Date().toLocaleDateString()});save(all);
    const count=all[userId].filter(e=>e.date===new Date().toLocaleDateString()).length;
    return reply("Gratitude recorded!\n\nToday: "+count+"/3 entries\n\n'"+entry+"'\n\n"+(count>=3?"Full gratitude practice done for today!":"Keep going - "+(3-count)+" more!"));
  }
};
