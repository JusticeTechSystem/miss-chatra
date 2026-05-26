// @marketplace mod-schedule-258 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModSchedule258",category:"moderation",desc:"Group moderation schedule feature #258",
  command:["modschedule258"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modschedule258 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_schedule_258";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_schedule_258.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-schedule-258: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-schedule-258\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modschedule258 on/off");
  }
};
