// @marketplace gchallenge-008 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"GameTip008",category:"games",desc:"Game tip #8",
  command:["gchallenge8"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🎮 Cities\\n\\nName 5 cities in Nigeria starting with 'L'!\\n\\nReady? GO!");
  }
};
