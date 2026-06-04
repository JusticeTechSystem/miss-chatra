// @marketplace morning-routine v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MorningRoutine", category: "productivity", desc: "Build and track a morning routine",
  command: ["morning","morningroutine","amroutine"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','morning.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]={routine:[],streak:0,lastDone:null};
    const d=all[userId];
    if(command==='morningroutine'&&args.length){
      d.routine.push(args.join(' '));save(all);
      return reply("Added to morning routine: "+args.join(' ')+"\nTotal items: "+d.routine.length);
    }
    if(command==='amroutine'){
      const today=new Date().toDateString();
      if(d.lastDone===today) return reply("Morning routine already done today!\nStreak: "+d.streak+" days");
      const yd=new Date(Date.now()-86400000).toDateString();
      d.streak=d.lastDone===yd?d.streak+1:1;d.lastDone=today;save(all);
      return reply("Morning Routine Completed!\nStreak: "+d.streak+" days\n\n"+(d.streak%7===0?"7-day milestone!":d.streak>=30?"30-day legend!":"Keep going!"));
    }
    if(!d.routine.length) return reply("No routine set.\n"+pfx+"morningroutine Wake up at 6am\n"+pfx+"morningroutine Exercise 30 mins\n"+pfx+"amroutine to mark done");
    return reply("My Morning Routine\n\n"+d.routine.map((r,i)=>(i+1)+". "+r).join("\n")+"\n\nStreak: "+d.streak+" days\n"+pfx+"amroutine to mark today done");
  }
};
