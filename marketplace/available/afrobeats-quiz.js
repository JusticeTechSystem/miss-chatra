// @marketplace afrobeats-quiz v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_afrobeats_quiz.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"AfrobeatsQuiz",category:"entertainment",desc:"Afrobeats music quiz",
  command:["afrobeatsquiz","musicquiz2","afropop"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const Q=[{q:"Wizkid's real name is?",a:"Ayodeji Balogun"},{q:"Burna Boy's home state is?",a:"Rivers State"},{q:"What does 'japa' mean in Davido's song?",a:"run away"},{q:"Rema is from which state?",a:"Edo"},{q:"Tems' viral collaboration with Wizkid was called?",a:"Essence"},{q:"Asake's 2022 breakout album was?",a:"Mr Money with the Vibe"},{q:"What year did Olamide release 'Wo!!!'?",a:"2017"}];
    const G=global.__afr=global.__afr||{};const key=chat+'_afr_'+uid;const q=Q[Math.floor(Math.random()*Q.length)];G[key]={answer:q.a.toLowerCase()};
    return reply("Afrobeats Quiz!\n\n"+q.q+"\n\nType your answer!");
  }
};
