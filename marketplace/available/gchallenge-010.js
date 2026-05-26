// @marketplace gchallenge-010 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"GameTip010",category:"games",desc:"Game tip #10",
  command:["gchallenge10"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🎮 Food\\n\\nName 5 soups eaten in Nigeria!\\n\\nReady? GO!");
  }
};
