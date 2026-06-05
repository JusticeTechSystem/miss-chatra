// @marketplace 20-questions v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_20_questions.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"TwentyQuestions",category:"games",desc:"Classic 20 questions guessing game",
  command:["20questions","guessingame","thinkofanimal"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const G=global.__tq=global.__tq||{};const key=chat+'_tq';
    if(!G[key]){G[key]={questions:0,started:true};return reply("20 Questions!\n\nI'm thinking of something...\nAsk YES/NO questions to guess what it is!\nYou have 20 questions left.\n\nStart: 'Is it a living thing?'");}
    const q=(args.join(' ')||'').toLowerCase();G[key].questions++;
    const remaining=20-G[key].questions;
    if(G[key].questions>=20){delete G[key];return reply("GAME OVER! You used all 20 questions.\nThe answer was: *Secret*\n/20questions to play again");}
    const rnd=Math.random();const ans=rnd>0.5?"YES":"NO";
    return reply((ans==="YES"?"✅ YES!":"❌ NO!")+("\n\nQuestions remaining: "+remaining+"\nKeep asking yes/no questions!"));
  }
};
