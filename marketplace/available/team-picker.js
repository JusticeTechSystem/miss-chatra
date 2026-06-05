// @marketplace team-picker v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_team_picker.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"TeamPicker",category:"games",desc:"Randomly divide group into teams",
  command:["teampicker","pickteams","splitinteams"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    try{
      const meta=await sock.groupMetadata(chat);const members=meta.participants.filter(p=>!p.admin).map(p=>p.id);
      if(members.length<4)return reply("Need at least 4 non-admin members to split into teams.");
      const shuffled=[...members].sort(()=>Math.random()-0.5);
      const mid=Math.floor(shuffled.length/2);
      const team1=shuffled.slice(0,mid).map(j=>"+"+norm(j));
      const team2=shuffled.slice(mid).map(j=>"+"+norm(j));
      return reply("🎯 Teams Picked!\n\n🔴 Team A ("+team1.length+"):\n"+team1.join("\n")+"\n\n🔵 Team B ("+team2.length+"):\n"+team2.join("\n")+"\n\nGood luck to both teams!");
    }catch{return reply("Could not pick teams. Bot must be admin.");}  
  }
};
