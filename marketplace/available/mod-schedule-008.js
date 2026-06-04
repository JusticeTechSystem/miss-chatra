// @marketplace mod-schedule-008 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModSchedule008",category:"moderation",desc:"Group moderation schedule feature #8",
  command:["modschedule8"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modschedule8 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_schedule_8";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_schedule_008.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-schedule-008: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-schedule-008\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modschedule8 on/off");
  }
};
