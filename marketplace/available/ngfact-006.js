// @marketplace ngfact-006 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"NigeriaTip006",category:"nigerian",desc:"Nigeria tip #6",
  command:["ngfact6"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🇳🇬 Nigerian Fact: Oil\\n\\nNigeria has been Africa's largest oil producer for decades, though agriculture employs more people");
  }
};
