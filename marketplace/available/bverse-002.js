// @marketplace bverse-002 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"BibleTip002",category:"spiritual",desc:"Bible tip #2",
  command:["bverse2"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("📖 Psalm 46:10\\n\\nBe still and know that I am God\\n\\nHave a blessed day!");
  }
};
