// @marketplace gchallenge-002 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"GameTip002",category:"games",desc:"Game tip #2",
  command:["gchallenge2"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🎮 Geography\\n\\nName 5 African countries starting with any letter!\\n\\nReady? GO!");
  }
};
