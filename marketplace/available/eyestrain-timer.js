// @marketplace eyestrain-timer v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_eyestrain_timer.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"EyestrainTimer",category:"health",desc:"20-20-20 eye strain prevention timer",
  command:["eyetimer","eyestrain","screenbreak"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const T=global.__eye=global.__eye||{};const key=chat+'_eye_'+uid;
    if(args[0]==='on'){
      if(T[key])return reply("Already running.");
      let count=0;
      T[key]=setInterval(async()=>{count++;
        try{await sock.sendMessage(chat,{text:"👀 Eye Break #"+count+"!\n\n20-20-20 Rule:\nLook at something 20 feet away for 20 seconds.\n\nBlink 10 times slowly.\nClose eyes for 5 seconds."});}catch{clearInterval(T[key]);delete T[key];}
      },1200000);
      return reply("Eye strain timer ON!\nReminder every 20 minutes.\n"+pfx+"eyetimer off to stop");
    }
    if(T[key]){clearInterval(T[key]);delete T[key];return reply("Eye timer stopped.");}
    return reply(pfx+"eyetimer on — every 20 min\n"+pfx+"eyetimer off");
  }
};
