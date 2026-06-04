// @marketplace gchallenge-005 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"GameTip005",category:"games",desc:"Game tip #5",
  command:["gchallenge5"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🎮 History\\n\\nWhat year did Nigeria gain independence? First correct wins!\\n\\nReady? GO!");
  }
};
