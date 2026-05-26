// @marketplace mod-alert-050 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModAlert050",category:"moderation",desc:"Group moderation alert feature #50",
  command:["modalert50"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modalert50 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_alert_50";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_alert_050.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-alert-050: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-alert-050\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modalert50 on/off");
  }
};
