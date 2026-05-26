// @marketplace morning-affirmation v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_morning_affirmation.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"MorningAffirmation",category:"lifestyle",desc:"Daily morning affirmations",
  command:["affirm","affirmation","morningaffirm"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const A=["I am capable of achieving everything I set my mind to","Today I choose growth over comfort","I am worthy of success, love, and abundance","My potential is limitless and my future is bright","I attract positive energy and opportunities","I am becoming the best version of myself every day","Challenges make me stronger. I rise above them","I am grateful for everything I have today","My voice matters and my ideas have value","Today I will be productive, focused, and kind"];
    return reply("🌅 Morning Affirmation!\n\n"+A[Math.floor(Math.random()*A.length)]+"\n\n_Say it out loud three times.\nBelieve it. It's already yours._\n\n/affirm for another");
  }
};
