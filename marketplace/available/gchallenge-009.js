// @marketplace gchallenge-009 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"GameTip009",category:"games",desc:"Game tip #9",
  command:["gchallenge9"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🎮 Sports\\n\\nName 5 Nigerian football players!\\n\\nReady? GO!");
  }
};
