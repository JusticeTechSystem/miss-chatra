// @marketplace bverse-001 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"BibleTip001",category:"spiritual",desc:"Bible tip #1",
  command:["bverse1"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("📖 Joshua 1:9\\n\\nBe strong and courageous. Do not be afraid for the Lord your God is with you\\n\\nHave a blessed day!");
  }
};
