// @marketplace healthtip-003 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"HealthTip003",category:"health",desc:"Health tip #3",
  command:["healthtip3"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const tips=["Drink a glass of water before every meal", "Sleep at the same time every night", "Exercise releases endorphins that fight depression", "Your gut health affects your mood directly", "Vegetables are medicine \u2014 eat the rainbow"];
    return reply("HEALTH Tip #3\\n\\n" + tips[2%tips.length]);
  }
};
