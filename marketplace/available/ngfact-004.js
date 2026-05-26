// @marketplace ngfact-004 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"NigeriaTip004",category:"nigerian",desc:"Nigeria tip #4",
  command:["ngfact4"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🇳🇬 Nigerian Fact: Nollywood\\n\\nNollywood is the second largest film industry by output, producing thousands of films annually");
  }
};
