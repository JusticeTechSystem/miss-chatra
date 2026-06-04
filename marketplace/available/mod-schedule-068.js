// @marketplace mod-schedule-068 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModSchedule068",category:"moderation",desc:"Group moderation schedule feature #68",
  command:["modschedule68"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modschedule68 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_schedule_68";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_schedule_068.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-schedule-068: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-schedule-068\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modschedule68 on/off");
  }
};
