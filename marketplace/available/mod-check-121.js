// @marketplace mod-check-121 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModCheck121",category:"moderation",desc:"Group moderation check feature #121",
  command:["modcheck121"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modcheck121 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_check_121";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_check_121.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-check-121: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-check-121\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modcheck121 on/off");
  }
};
