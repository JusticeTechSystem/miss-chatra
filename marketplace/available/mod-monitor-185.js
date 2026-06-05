// @marketplace mod-monitor-185 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModMonitor185",category:"moderation",desc:"Group moderation monitor feature #185",
  command:["modmonitor185"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modmonitor185 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_monitor_185";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_monitor_185.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-monitor-185: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-monitor-185\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modmonitor185 on/off");
  }
};
