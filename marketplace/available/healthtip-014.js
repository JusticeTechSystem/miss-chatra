// @marketplace healthtip-014 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"HealthTip014",category:"health",desc:"Health tip #14",
  command:["healthtip14"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const tips=["Drink a glass of water before every meal", "Sleep at the same time every night", "Exercise releases endorphins that fight depression", "Your gut health affects your mood directly", "Vegetables are medicine \u2014 eat the rainbow"];
    return reply("HEALTH Tip #14\\n\\n" + tips[13%tips.length]);
  }
};
