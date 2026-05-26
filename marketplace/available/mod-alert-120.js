// @marketplace mod-alert-120 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModAlert120",category:"moderation",desc:"Group moderation alert feature #120",
  command:["modalert120"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modalert120 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_alert_120";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_alert_120.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-alert-120: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-alert-120\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modalert120 on/off");
  }
};
