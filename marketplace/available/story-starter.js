// @marketplace story-starter v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_story_starter.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"StoryStarter",category:"entertainment",desc:"Creative writing story starters",
  command:["storystarter","writestory","beginastory"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const STARTERS=["The last thing anyone expected was to find a briefcase full of naira notes outside the bank that morning...","She had worked at the market for 30 years, but today was different — today the market was completely silent...","The message said 'Meet me at the old church at midnight. Come alone.' He recognized the number — it was his own...","Three years after disappearing without a word, she walked back into the family compound as if nothing had happened...","The earthquake lasted 43 seconds. When the dust settled, the entire street had changed — except for one house...","Nobody believed the old woman when she said the river had spoken to her. Until it spoke again.","The election results were announced. The entire country fell silent. Then someone laughed.","He had one hour to deliver the package across Lagos traffic. He had no car, no phone, and no ID."];
    return reply("Story Starter!\n\n*Begin here:*\n\n"+STARTERS[Math.floor(Math.random()*STARTERS.length)]+"\n\n_Continue the story in the group!_\n/storystarter for a new prompt");
  }
};
