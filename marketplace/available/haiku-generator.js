// @marketplace haiku-generator v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_haiku_generator.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"HaikuGenerator",category:"tools",desc:"Generate a haiku poem",command:["haiku2","makehaiku","haikupoem"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const LINE1=["Morning sun rises","Gentle rain falls down","Lagos traffic stands","The phone rings once more","Night sky full of stars"];const LINE2=["birds sing in the mango tree","children run and play in mud","no movement no motion","a voice from the past calling","satellites blink and fade"];const LINE3=["silence holds the world","tomorrow brings new chances","patience is the key","some stories never end well","we are all just passing through"];const l1=LINE1[Math.floor(Math.random()*LINE1.length)];const l2=LINE2[Math.floor(Math.random()*LINE2.length)];const l3=LINE3[Math.floor(Math.random()*LINE3.length)];return reply("🌸 Haiku\n\n"+l1+"\n"+l2+"\n"+l3+"\n\n_5-7-5 syllables_\n/haiku2 for another");
  }
};
