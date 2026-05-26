// @marketplace pictionary v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_pictionary.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"Pictionary",category:"entertainment",desc:"Virtual pictionary game with descriptions",
  command:["pictionary","drawindescribe","sketchgame"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const WORDS=[{word:"Elephant",hint:"Large African animal with trunk",desc:"Start with a big oval body..."},{ word:"Lagos",hint:"Largest city in Nigeria",desc:"Draw a very crowded street with yellow buses..."},{ word:"Football",hint:"Round object used in sports",desc:"Draw a circle with black and white patches..."},{word:"Suya",hint:"Nigerian street food",desc:"Draw a stick with pieces of meat and onions..."},{ word:"Danfo",hint:"Yellow commercial bus",desc:"Draw a rectangular yellow bus with people inside..."}];
    const G=global.__pic=global.__pic||{};const key=chat+'_pic';const w=WORDS[Math.floor(Math.random()*WORDS.length)];G[key]={answer:w.word.toLowerCase()};
    return reply("🎨 Pictionary!\n\nDescribe in your own words (no drawing needed):\n\nHint: "+w.hint+"\nHow to describe it: "+w.desc+"\n\nOther members: guess what's being described!\n/pictionary for new word");
  }
};
