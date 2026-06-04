// @marketplace mod-report-057 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModReport057",category:"moderation",desc:"Group moderation report feature #57",
  command:["modreport57"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modreport57 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_report_57";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_report_057.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-report-057: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-report-057\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modreport57 on/off");
  }
};
