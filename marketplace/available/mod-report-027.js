// @marketplace mod-report-027 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModReport027",category:"moderation",desc:"Group moderation report feature #27",
  command:["modreport27"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modreport27 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_report_27";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_report_027.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-report-027: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-report-027\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modreport27 on/off");
  }
};
