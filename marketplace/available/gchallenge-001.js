// @marketplace gchallenge-001 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"GameTip001",category:"games",desc:"Game tip #1",
  command:["gchallenge1"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🎮 Name Game\\n\\nName 5 Nigerian foods in 30 seconds!\\n\\nReady? GO!");
  }
};
