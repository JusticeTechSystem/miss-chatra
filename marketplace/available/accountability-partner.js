// @marketplace accountability-partner v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "AccountabilityPartner", category: "social", desc: "Pair up for accountability",
  command: ["accountability","accountpartner","holdmeto","keepmeon"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','accountability.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={pairs:[],requests:[]};
    if(command==='accountpartner'&&args.length){
      const goal=args.join(' ');
      all[chatId].requests.push({userId,name:m?.pushName||'Member',goal,date:new Date().toLocaleDateString()});save(all);
      return reply("Accountability request posted!\n\nGoal: "+goal+"\n\nOther members can reply to partner with you.\n/accountability to see all requests");
    }
    const reqs=all[chatId].requests;
    if(!reqs.length) return reply("No accountability requests.\n"+pfx+"accountpartner <your goal>\nExample: "+pfx+"accountpartner Exercise 3x per week");
    return reply("Accountability Partners Wanted!\n\n"+reqs.slice(-5).map((r,i)=>(i+1)+". "+r.name+": "+r.goal).join("\n")+"\n\nDM anyone whose goal aligns with yours!");
  }
};
