// @marketplace motivational-speech v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_motivational_speech.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"MotivationalSpeech",category:"social",desc:"Group motivational speeches and pep talks",command:["motvate","peptak","motivate2"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const SPEECHES=["Every single person in this group has the potential to do something extraordinary. The only thing standing between you and your dream is the story you keep telling yourself about why you can not achieve it. Today, change the story. Today, take one step. Just one. Because a journey of a thousand miles begins with a single step, and that step is yours to take — right now.","You were not born to be average. You were not placed on this earth to simply exist. You have a specific gift, a specific purpose that only YOU can fulfill. When you don't show up as your best self, the world loses something it can never replace. Show up. Speak up. Stand up. Your moment is now.","The difference between where you are and where you want to be is the work you are willing to do in the spaces between. The early mornings. The late nights. The moments when no one is watching. That's where legends are built. That's where your legacy begins."];return reply(SPEECHES[Math.floor(Math.random()*SPEECHES.length)]+"\n\n💪 Share this with someone who needs it today!");
  }
};
