// @marketplace fintip-007 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"FinanceTip007",category:"finance",desc:"Finance tip #7",
  command:["fintip7"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const tips=["Spend less than you earn \u2014 this alone creates wealth", "Save before you spend \u2014 pay yourself first every month", "Compound interest is the most powerful force in personal finance", "Invest in index funds when you don't know what to invest in", "Your biggest financial asset is your income \u2014 protect it"];
    return reply("FINANCE Tip #7\\n\\n" + tips[6%tips.length]);
  }
};
