// @marketplace sunset-reflection v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_sunset_reflection.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"SunsetReflection",category:"lifestyle",desc:"Evening reflection prompts",
  command:["eveningreflect","reflection","nightreflect"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const R=["What is one thing that went better than expected today?","Who did you impact positively today, even in a small way?","What is one thing you wish you had done differently today?","What did you learn today that you did not know yesterday?","What are you most grateful for about today?","What will you do tomorrow to improve on today?","Name one person who made your day better today.","What challenge did you face today and how did you handle it?"];
    return reply("🌙 Evening Reflection\n\n"+R[Math.floor(Math.random()*R.length)]+"\n\nTake a moment to journal your answer.\nGrowth happens in reflection.\n\n/eveningreflect for another prompt");
  }
};
