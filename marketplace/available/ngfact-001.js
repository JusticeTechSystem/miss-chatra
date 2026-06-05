// @marketplace ngfact-001 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"NigeriaTip001",category:"nigerian",desc:"Nigeria tip #1",
  command:["ngfact1"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🇳🇬 Nigerian Fact: Biggest economy\\n\\nNigeria has the largest economy in Africa, overtaking South Africa in 2014");
  }
};
