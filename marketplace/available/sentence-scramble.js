// @marketplace sentence-scramble v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_sentence_scramble.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"SentenceScramble",category:"games",desc:"Unscramble the mixed sentence",command:["sentencescramble","wordorder","unscramblesentence"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const SENTENCES=["Nigeria is the giant of Africa","The quick brown fox jumps over the lazy dog","Success comes to those who work hard","Lagos traffic is the eighth wonder of the world","Reading expands the mind and opens new doors"];const sent=SENTENCES[Math.floor(Math.random()*SENTENCES.length)];const words=sent.split(' ').sort(()=>Math.random()-0.5).join(' ');const G=global.__ss=global.__ss||{};G[chat+'_ss_'+uid]={answer:sent.toLowerCase()};return reply("Sentence Scramble!\n\nRearrange these words:\n\n*"+words+"*\n\nType the correct sentence!");
  }
};
