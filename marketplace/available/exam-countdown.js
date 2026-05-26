// @marketplace exam-countdown v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ExamCountdown", category: "education", desc: "Count down to exam dates",
  command: ["exam","examdate","examcountdown"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','exams.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    if(args.length>=2){
      const subject=args[0],date=args[1];
      const d=new Date(date);if(isNaN(d)) return reply("Invalid date. Format: YYYY-MM-DD");
      all[userId].push({subject,date,added:new Date().toLocaleDateString()});save(all);
      const days=Math.ceil((d-Date.now())/86400000);
      return reply("Exam added: "+subject+"\nDate: "+d.toLocaleDateString()+"\nDays remaining: "+days);
    }
    if(!all[userId].length) return reply("No exams added.\n"+pfx+"exam 'Mathematics' 2026-05-15");
    const now=Date.now();
    const upcoming=all[userId].map(e=>({...e,days:Math.ceil((new Date(e.date)-now)/86400000)})).filter(e=>e.days>=0).sort((a,b)=>a.days-b.days);
    if(!upcoming.length) return reply("No upcoming exams.");
    return reply("Upcoming Exams\n\n"+upcoming.map(e=>""+e.subject+": "+e.days+" days ("+new Date(e.date).toLocaleDateString()+")").join("\n"));
  }
};
