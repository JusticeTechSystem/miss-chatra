// @marketplace mod-alert-210 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModAlert210",category:"moderation",desc:"Group moderation alert feature #210",
  command:["modalert210"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modalert210 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_alert_210";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_alert_210.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-alert-210: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-alert-210\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modalert210 on/off");
  }
};
