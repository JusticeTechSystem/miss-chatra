// @marketplace mod-monitor-015 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModMonitor015",category:"moderation",desc:"Group moderation monitor feature #15",
  command:["modmonitor15"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modmonitor15 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_monitor_15";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_monitor_015.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-monitor-015: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-monitor-015\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modmonitor15 on/off");
  }
};
