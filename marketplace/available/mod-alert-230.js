// @marketplace mod-alert-230 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModAlert230",category:"moderation",desc:"Group moderation alert feature #230",
  command:["modalert230"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modalert230 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_alert_230";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_alert_230.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-alert-230: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-alert-230\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modalert230 on/off");
  }
};
