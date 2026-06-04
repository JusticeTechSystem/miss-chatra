// @marketplace healthtip-008 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"HealthTip008",category:"health",desc:"Health tip #8",
  command:["healthtip8"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const tips=["Drink a glass of water before every meal", "Sleep at the same time every night", "Exercise releases endorphins that fight depression", "Your gut health affects your mood directly", "Vegetables are medicine \u2014 eat the rainbow"];
    return reply("HEALTH Tip #8\\n\\n" + tips[7%tips.length]);
  }
};
