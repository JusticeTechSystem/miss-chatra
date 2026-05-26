// @marketplace mod-schedule-088 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModSchedule088",category:"moderation",desc:"Group moderation schedule feature #88",
  command:["modschedule88"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modschedule88 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_schedule_88";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_schedule_088.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-schedule-088: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-schedule-088\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modschedule88 on/off");
  }
};
