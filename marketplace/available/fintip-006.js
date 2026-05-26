// @marketplace fintip-006 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"FinanceTip006",category:"finance",desc:"Finance tip #6",
  command:["fintip6"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const tips=["Spend less than you earn \u2014 this alone creates wealth", "Save before you spend \u2014 pay yourself first every month", "Compound interest is the most powerful force in personal finance", "Invest in index funds when you don't know what to invest in", "Your biggest financial asset is your income \u2014 protect it"];
    return reply("FINANCE Tip #6\\n\\n" + tips[5%tips.length]);
  }
};
