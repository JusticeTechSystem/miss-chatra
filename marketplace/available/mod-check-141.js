// @marketplace mod-check-141 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModCheck141",category:"moderation",desc:"Group moderation check feature #141",
  command:["modcheck141"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modcheck141 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_check_141";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_check_141.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-check-141: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-check-141\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modcheck141 on/off");
  }
};
