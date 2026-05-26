// @marketplace mod-log-186 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModLog186",category:"moderation",desc:"Group moderation log feature #186",
  command:["modlog186"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modlog186 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_log_186";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_log_186.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-log-186: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-log-186\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modlog186 on/off");
  }
};
