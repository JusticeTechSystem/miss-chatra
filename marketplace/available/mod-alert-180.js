// @marketplace mod-alert-180 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModAlert180",category:"moderation",desc:"Group moderation alert feature #180",
  command:["modalert180"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modalert180 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_alert_180";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_alert_180.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-alert-180: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-alert-180\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modalert180 on/off");
  }
};
