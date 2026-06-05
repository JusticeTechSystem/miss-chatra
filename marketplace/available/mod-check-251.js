// @marketplace mod-check-251 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModCheck251",category:"moderation",desc:"Group moderation check feature #251",
  command:["modcheck251"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modcheck251 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_check_251";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_check_251.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-check-251: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-check-251\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modcheck251 on/off");
  }
};
