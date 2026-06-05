// @marketplace ngfact-008 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"NigeriaTip008",category:"nigerian",desc:"Nigeria tip #8",
  command:["ngfact8"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🇳🇬 Nigerian Fact: Tech\\n\\nLagos produced Africa's first three tech unicorns: Flutterwave, Interswitch, and OPay");
  }
};
