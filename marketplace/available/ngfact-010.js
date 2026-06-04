// @marketplace ngfact-010 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"NigeriaTip010",category:"nigerian",desc:"Nigeria tip #10",
  command:["ngfact10"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🇳🇬 Nigerian Fact: States\\n\\nNigeria has 36 states and the Federal Capital Territory Abuja, created in 1991");
  }
};
