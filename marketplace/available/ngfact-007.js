// @marketplace ngfact-007 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"NigeriaTip007",category:"nigerian",desc:"Nigeria tip #7",
  command:["ngfact7"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🇳🇬 Nigerian Fact: Music\\n\\nAfrobeats originated in Nigeria and is now one of the world's fastest-growing music genres");
  }
};
