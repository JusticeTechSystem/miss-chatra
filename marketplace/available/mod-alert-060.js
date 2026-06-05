// @marketplace mod-alert-060 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModAlert060",category:"moderation",desc:"Group moderation alert feature #60",
  command:["modalert60"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modalert60 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_alert_60";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_alert_060.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-alert-060: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-alert-060\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modalert60 on/off");
  }
};
