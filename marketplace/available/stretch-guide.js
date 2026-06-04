// @marketplace stretch-guide v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_stretch_guide.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"StretchGuide",category:"health",desc:"Office and home stretch routines",
  command:["stretch","stretching","quickstretch"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const STRETCHES={desk:["Neck rolls — 5 circles each direction","Shoulder shrugs — 10 reps","Chest opener — clasp hands behind, push chest forward 30s","Wrist circles — 10 each direction","Seated spinal twist — hold 30s each side","Ankle circles — 10 each foot"],morning:["Cat-cow stretch — 10 breaths","Child's pose — hold 60 seconds","Standing quad stretch — 30s each leg","Standing forward fold — 45 seconds","Standing side bends — 5 each side","Arm circles — 10 forward, 10 backward"],desk_worker:["Stand and walk every 45 minutes","Hip flexor stretch — lunge position 30s","Doorway chest stretch — 30 seconds","Neck stretch — ear to shoulder 20s each","Eye focus change every 20 minutes"]};
    const type=(args[0]||'desk').toLowerCase();const list=STRETCHES[type]||STRETCHES.desk;
    return reply("Stretch Guide ("+type+")\n\n"+list.map((s,i)=>(i+1)+". "+s).join("\n")+"\n\nTypes: desk, morning, desk_worker");
  }
};
