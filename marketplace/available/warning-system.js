// @marketplace warning-system v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "WarningSystem", category: "admin", desc: "Advanced warning and strike system",
  command: ["warn2","strikes","addstrike","clearstrikes"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','strikes.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={};
    if(!isAdmin&&!isOwner&&!isDev) return reply("Admin only.");
    if(command==='addstrike'){
      const target=mentionedJid?.[0];const reason=args.filter(a=>!a.startsWith('@')).join(' ')||'Rule violation';
      if(!target) return reply("Mention a user: "+pfx+"addstrike @user reason");
      const key=target.split('@')[0].split(':')[0];
      if(!all[chatId][key])all[chatId][key]={strikes:0,history:[]};
      all[chatId][key].strikes++;
      all[chatId][key].history.push({reason,date:new Date().toLocaleDateString()});save(all);
      const strikes=all[chatId][key].strikes;
      return reply("Strike added: @"+key+" ("+strikes+" strikes)\nReason: "+reason+(strikes>=3?"\n\nWARNING: 3+ strikes! Consider removing this member.":""),{mentions:[target]});
    }
    if(command==='strikes'){
      const entries=Object.entries(all[chatId]);
      if(!entries.length) return reply("No strikes recorded.");
      return reply("Strike Records\n\n"+entries.sort((a,b)=>b[1].strikes-a[1].strikes).map(([k,v])=>"+"+k+": "+v.strikes+" strike(s)").join("\n"));
    }
    if(command==='clearstrikes'&&mentionedJid?.[0]){
      const key=mentionedJid[0].split('@')[0].split(':')[0];
      delete all[chatId][key];save(all);
      return reply("Strikes cleared for @"+key);
    }
    return reply(pfx+"addstrike @user reason\n"+pfx+"strikes - see all\n"+pfx+"clearstrikes @user");
  }
};
