// @marketplace number-trivia v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_number_trivia.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"NumberTrivia",category:"games",desc:"Trivia with numbers as answers",
  command:["numbertrivia2","numquiz","quantityquiz"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const Q=[{q:"How many states are in Nigeria?",a:36},{q:"How many bones in the adult human body?",a:206},{q:"In what year did Nigeria gain independence?",a:1960},{q:"How many players in a football team?",a:11},{q:"How many seconds in an hour?",a:3600},{q:"How many letters in the English alphabet?",a:26},{q:"How many kilometers from Lagos to Abuja (approximately)?",a:533},{q:"What is 17 × 18?",a:306}];
    const G=global.__nt=global.__nt||{};const key=chat+'_nt_'+uid;const q=Q[Math.floor(Math.random()*Q.length)];G[key]={answer:String(q.a)};
    return reply("Number Trivia!\n\n"+q.q+"\n\nType the NUMBER as your answer — 30 seconds!");
  }
};
