// @marketplace mod-schedule-078 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModSchedule078",category:"moderation",desc:"Group moderation schedule feature #78",
  command:["modschedule78"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modschedule78 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_schedule_78";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_schedule_078.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-schedule-078: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-schedule-078\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modschedule78 on/off");
  }
};
