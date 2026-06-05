// @marketplace gchallenge-004 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"GameTip004",category:"games",desc:"Game tip #4",
  command:["gchallenge4"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🎮 Culture\\n\\nName 3 Nigerian languages!\\n\\nReady? GO!");
  }
};
