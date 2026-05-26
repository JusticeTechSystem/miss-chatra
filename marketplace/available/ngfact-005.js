// @marketplace ngfact-005 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"NigeriaTip005",category:"nigerian",desc:"Nigeria tip #5",
  command:["ngfact5"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🇳🇬 Nigerian Fact: Lagos\\n\\nLagos is the fastest-growing megacity in the world and largest in Africa");
  }
};
