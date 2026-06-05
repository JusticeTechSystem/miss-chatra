// @marketplace multiplication-race v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_multiplication_race.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"MultiplicationRace",category:"education",desc:"Speed multiplication challenge",command:["mulrace","mulchallenge","timestablerace"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const a=Math.floor(Math.random()*12)+1,b=Math.floor(Math.random()*12)+1;const G=global.__mr=global.__mr||{};const key=chat+'_mr';G[key]={answer:String(a*b),a,b};return reply("⚡ Multiplication Race!\n\n*"+a+" × "+b+" = ?*\n\nFirst correct answer wins!\n10 seconds... GO!");
  }
};
