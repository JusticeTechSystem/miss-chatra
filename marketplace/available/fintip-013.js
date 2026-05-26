// @marketplace fintip-013 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"FinanceTip013",category:"finance",desc:"Finance tip #13",
  command:["fintip13"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const tips=["Spend less than you earn \u2014 this alone creates wealth", "Save before you spend \u2014 pay yourself first every month", "Compound interest is the most powerful force in personal finance", "Invest in index funds when you don't know what to invest in", "Your biggest financial asset is your income \u2014 protect it"];
    return reply("FINANCE Tip #13\\n\\n" + tips[12%tips.length]);
  }
};
