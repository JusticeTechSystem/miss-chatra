// @marketplace random-fact-challenge v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_random_fact_challenge.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"FactChallenge",category:"entertainment",desc:"Group fact challenge game",
  command:["factchallenge","factcompete","knowledgechallenge"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const FACTS=[{claim:"Nigeria has the largest economy in Africa",answer:"true"},{claim:"Lagos is the capital of Nigeria",answer:"false"},{claim:"There are 36 states in Nigeria",answer:"true"},{claim:"Davido is from Osun State",answer:"true"},{claim:"The Niger River is longer than the Congo River",answer:"false"},{claim:"WhatsApp was founded by Nigerian entrepreneurs",answer:"false"},{claim:"Nigeria gained independence in 1960",answer:"true"},{claim:"Fela Kuti was born in Lagos",answer:"false"}];
    const G=global.__fc=global.__fc||{};const key=chat+'_fc';const f=FACTS[Math.floor(Math.random()*FACTS.length)];G[key]={answer:f.answer};
    return reply("Fact Challenge!\n\nTrue or False?\n\n_"+f.claim+"_\n\nReply TRUE or FALSE — fastest wins!");
  }
};
