// @marketplace ngfact-009 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"NigeriaTip009",category:"nigerian",desc:"Nigeria tip #9",
  command:["ngfact9"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🇳🇬 Nigerian Fact: Independence\\n\\nNigeria gained independence on October 1, 1960, and became a republic in 1963");
  }
};
