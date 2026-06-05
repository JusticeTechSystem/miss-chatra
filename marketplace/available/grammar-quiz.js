// @marketplace grammar-quiz v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_grammar_quiz.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"GrammarQuiz",category:"education",desc:"English grammar quiz",command:["grammarquiz","gramtest","englishquiz"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const Q=[{q:"Choose the correct sentence: A) He don't know. B) He doesn't know.",a:"b"},{q:"Which is correct? A) Their going home. B) They're going home.",a:"b"},{q:"Fill in the blank: She ___ been here. (has/have)",a:"has"},{q:"Which is spelled correctly? A) Recieve B) Receive",a:"b"},{q:"Choose: A) Fewer apples B) Less apples (for countable items)",a:"a"}];const G=global.__gq=global.__gq||{};const key=chat+'_gq_'+uid;const q=Q[Math.floor(Math.random()*Q.length)];G[key]={answer:q.a};return reply("Grammar Quiz!\n\n"+q.q+"\n\nType A or B (or the correct word) — 30 seconds!");
  }
};
