// @marketplace gchallenge-007 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"GameTip007",category:"games",desc:"Game tip #7",
  command:["gchallenge7"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🎮 Animals\\n\\nName 5 animals found in Nigeria!\\n\\nReady? GO!");
  }
};
