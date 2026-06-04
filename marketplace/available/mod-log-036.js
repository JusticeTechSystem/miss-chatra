// @marketplace mod-log-036 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModLog036",category:"moderation",desc:"Group moderation log feature #36",
  command:["modlog36"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modlog36 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_log_36";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_log_036.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-log-036: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-log-036\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modlog36 on/off");
  }
};
