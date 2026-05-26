// @marketplace soctip-004 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"SocialTip004",category:"social",desc:"Social tip #4",
  command:["soctip4"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const tips=["Use people's names \u2014 it's the sweetest sound to anyone", "Listen with the intent to understand, not to respond", "Ask follow-up questions \u2014 they show you were actually listening", "Give genuine compliments \u2014 not 'you look nice' but 'that suit shows you prepared'", "Remember important dates \u2014 birthdays, anniversaries, milestones"];
    return reply("SOCIAL Tip #4\\n\\n" + tips[3%tips.length]);
  }
};
