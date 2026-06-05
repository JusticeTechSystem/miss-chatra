// @marketplace ngfact-002 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"NigeriaTip002",category:"nigerian",desc:"Nigeria tip #2",
  command:["ngfact2"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🇳🇬 Nigerian Fact: Population\\n\\nNigeria is the most populous country in Africa with 220+ million people");
  }
};
