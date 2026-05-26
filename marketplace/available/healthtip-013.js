// @marketplace healthtip-013 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"HealthTip013",category:"health",desc:"Health tip #13",
  command:["healthtip13"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const tips=["Drink a glass of water before every meal", "Sleep at the same time every night", "Exercise releases endorphins that fight depression", "Your gut health affects your mood directly", "Vegetables are medicine \u2014 eat the rainbow"];
    return reply("HEALTH Tip #13\\n\\n" + tips[12%tips.length]);
  }
};
