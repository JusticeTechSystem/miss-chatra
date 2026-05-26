// @marketplace hydration-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "HydrationTracker", category: "health", desc: "Track daily water intake",
  command: ["drinkwater2","waterintake","hydrate"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','hydration.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();const today=new Date().toDateString();
    if(!all[userId])all[userId]={};if(!all[userId][today])all[userId][today]=0;
    const glasses=parseInt(args[0])||1;
    all[userId][today]+=glasses;save(all);
    const total=all[userId][today];
    const pct=Math.min(100,(total/8)*100).toFixed(0);
    const bar='█'.repeat(Math.floor(pct/12.5))+'░'.repeat(8-Math.floor(pct/12.5));
    return reply("Hydration Tracker\n\nGlasses today: "+total+"/8\n["+bar+"] "+pct+"%\n\n"+(total>=8?"Great! Daily goal reached!":( 8-total)+" more glasses to go!"));
  }
};
