// @marketplace mod-schedule-228 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModSchedule228",category:"moderation",desc:"Group moderation schedule feature #228",
  command:["modschedule228"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modschedule228 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_schedule_228";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_schedule_228.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-schedule-228: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-schedule-228\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modschedule228 on/off");
  }
};
