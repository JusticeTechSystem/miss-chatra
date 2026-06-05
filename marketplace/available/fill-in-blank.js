// @marketplace fill-in-blank v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_fill_in_blank.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"FillInBlank",category:"entertainment",desc:"Fill in the blank Nigerian sentences",
  command:["fillinblank","fillblank","completethis"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const SENTENCES=["In Nigeria, when the light goes off, everyone says _____","The number one rule in a Nigerian home is: do not touch _____","Every Nigerian child has heard: 'I brought you into this world, I can take you _____'","When NEPA brings light, Nigerians immediately _____","The first thing Nigerians check when they wake up is _____","When food is almost ready in a Nigerian house, suddenly everyone _____","A Nigerian parent's answer to almost every request is _____","The best thing about Jollof rice is _____ and the worst is _____"];
    return reply("Fill in the Blank!\n\n"+SENTENCES[Math.floor(Math.random()*SENTENCES.length)]+"\n\nComplete it in the group!\n/fillblank for another");
  }
};
