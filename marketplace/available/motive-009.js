// @marketplace motive-009 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"MotivationTip009",category:"lifestyle",desc:"Motivation tip #9",
  command:["motive9"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const tips=["The only impossible journey is the one you never begin", "Discipline is doing what needs to be done even when you don't feel like it", "Your dreams don't care about your excuses", "The man on top of the mountain didn't fall there", "Small consistent steps beat massive inconsistent efforts"];
    return reply("MOTIVATION Tip #9\\n\\n" + tips[8%tips.length]);
  }
};
