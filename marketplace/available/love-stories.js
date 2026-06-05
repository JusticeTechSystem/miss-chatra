// @marketplace love-stories v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_love_stories.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"LoveStories",category:"social",desc:"Romantic creative writing prompts",command:["lovestory","romanticprompt","loveprompt"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const PROMPTS=["Write about the moment you knew they were the one","Describe a first date gone wonderfully wrong","Tell the story of a long-distance love that survived","Write about the love you never confessed until it was too late","Describe how two strangers met through an unlikely circumstance","Write about the couple who argued about everything but loved deeply","Tell the story of love that grew slowly from friendship"];return reply("💕 Love Story Prompt!\n\n"+PROMPTS[Math.floor(Math.random()*PROMPTS.length)]+"\n\nShare your story with the group!\n/romanticprompt for another prompt");
  }
};
