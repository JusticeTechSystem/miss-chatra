// @marketplace posture-reminder v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_posture_reminder.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"PostureReminder",category:"health",desc:"Hourly posture reminders for desk workers",
  command:["posture","posturecheck","sittingreminder"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const T=global.__posture=global.__posture||{};const key=chat+'_pos_'+uid;
    if(args[0]==='on'){
      if(T[key])return reply("Already active.");
      const name=m?.pushName||'there';
      T[key]=setInterval(async()=>{
        const tips=['Sit up straight! Shoulders back.','Check your posture — is your spine neutral?','Stand up and stretch for 2 minutes.','Are your eyes level with the screen?','Chin up! Tuck your chin slightly.'];
        try{await sock.sendMessage(chat,{text:"🪑 Posture Check, "+name+"!\n\n"+tips[Math.floor(Math.random()*tips.length)]});}catch{clearInterval(T[key]);delete T[key];}
      },3600000);
      return reply("Posture reminders ON!\nYou will be reminded every hour.\n"+pfx+"posture off to stop");
    }
    if(T[key]){clearInterval(T[key]);delete T[key];return reply("Posture reminders stopped.");}
    return reply(pfx+"posture on — hourly reminders\n"+pfx+"posture off — stop reminders");
  }
};
