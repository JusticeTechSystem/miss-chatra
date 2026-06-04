// @marketplace gchallenge-006 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"GameTip006",category:"games",desc:"Game tip #6",
  command:["gchallenge6"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🎮 Music\\n\\nName 5 Wizkid songs!\\n\\nReady? GO!");
  }
};
