// @marketplace country-capital-quiz v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_country_capital_quiz.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"CountryCapitalQuiz",category:"education",desc:"Guess the capital of countries",command:["capitalquiz2","countrycapital","whatcapital"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const Q=[{c:"France",a:"Paris"},{c:"Japan",a:"Tokyo"},{c:"Brazil",a:"Brasilia"},{c:"Ghana",a:"Accra"},{c:"Egypt",a:"Cairo"},{c:"China",a:"Beijing"},{c:"Nigeria",a:"Abuja"},{c:"Germany",a:"Berlin"},{c:"Kenya",a:"Nairobi"},{c:"South Africa",a:"Pretoria"}];const G=global.__ccq=global.__ccq||{};const key=chat+'_ccq_'+uid;const q=Q[Math.floor(Math.random()*Q.length)];G[key]={answer:q.a.toLowerCase()};return reply("Country Capital Quiz!\n\nWhat is the capital of *"+q.c+"*?\n\nType your answer - 30 seconds!");
  }
};
