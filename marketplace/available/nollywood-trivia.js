// @marketplace nollywood-trivia v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_nollywood_trivia.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"NollywoodTrivia",category:"entertainment",desc:"Nollywood and African cinema trivia",
  command:["nollywoodtrivia","nollyquiz"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const Q=[{q:"Who directed King of Boys?",a:"kemi adetiba"},{q:"What year was 'Living in Bondage' originally made?",a:"1992"},{q:"Who played Soji in King of Boys?",a:"reminisce"},{q:"What Nollywood actress is known as Mama G?",a:"patience ozokwo"},{q:"What movie made Genevieve Nnaji internationally famous?",a:"lionheart"},{q:"Who plays Eniola Salami in King of Boys?",a:"sola sobowale"},{q:"What streaming platform acquired Lionheart?",a:"netflix"}];
    const G=global.__nol=global.__nol||{};const key=chat+'_nol_'+uid;const q=Q[Math.floor(Math.random()*Q.length)];G[key]={answer:q.a};
    return reply("Nollywood Trivia!\n\n"+q.q+"\n\nType your answer - 30 seconds!");
  }
};
