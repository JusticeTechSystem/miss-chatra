// @marketplace dare-wheel v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_dare_wheel.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"DareWheel",category:"games",desc:"Spin wheel of dares",
  command:["darewheel","spindare","spinaround"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const DARES=["Send a voice note saying your own name 5 times fast","Change your WhatsApp status to something funny for 1 hour","Teach the group something new in 60 seconds (voice note)","Confess something you thought you would never tell anyone in this group","Describe the last movie you watched using only emojis","Demonstrate your best accent in a voice note","Send a photo of your current surroundings (no people)","Call out the funniest person in this group and explain why"];
    const name=m?.pushName||'Someone';
    return reply("🎡 Dare Wheel!\n\n"+name+"'s dare:\n\n*"+DARES[Math.floor(Math.random()*DARES.length)]+"*\n\nAccept the dare! 😄\n/darewheel to spin for yourself");
  }
};
