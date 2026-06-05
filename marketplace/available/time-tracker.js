// @marketplace time-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "TimeTracker", category: "productivity", desc: "Track time spent on projects",
  command: ["timetrack","tracktime","workhours","projecttime"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','timetrack.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]={sessions:[],active:null};
    const d=all[userId];
    if(command==='tracktime'&&args.length){
      if(d.active) return reply("Stop current session first: "+pfx+"workhours stop");
      d.active={project:args.join(' '),start:Date.now()};save(all);
      return reply("Timer started: "+d.active.project+"\n\n"+pfx+"workhours stop to end");
    }
    if(command==='workhours'&&args[0]==='stop'){
      if(!d.active) return reply("No active session.");
      const mins=Math.floor((Date.now()-d.active.start)/60000);
      d.sessions.push({project:d.active.project,mins,date:new Date().toLocaleDateString()});d.active=null;save(all);
      return reply("Session ended!\n\nProject: "+d.sessions[d.sessions.length-1].project+"\nTime: "+mins+" minutes");
    }
    const total=d.sessions.reduce((s,x)=>s+x.mins,0);
    return reply("Time Tracker\n\nActive: "+(d.active?d.active.project+' (running)':'None')+"\nTotal sessions: "+d.sessions.length+"\nTotal time: "+(total>59?Math.floor(total/60)+"h "+total%60+"m":total+"m")+"\n\n"+pfx+"tracktime <project>\n"+pfx+"workhours stop");
  }
};
