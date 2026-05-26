// @marketplace ngfact-003 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"NigeriaTip003",category:"nigerian",desc:"Nigeria tip #3",
  command:["ngfact3"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🇳🇬 Nigerian Fact: Languages\\n\\nNigeria has over 500 languages — more linguistic diversity than any country except Papua New Guinea");
  }
};
