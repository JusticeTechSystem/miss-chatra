// @marketplace mod-alert-290 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModAlert290",category:"moderation",desc:"Group moderation alert feature #290",
  command:["modalert290"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modalert290 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_alert_290";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_alert_290.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-alert-290: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-alert-290\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modalert290 on/off");
  }
};
