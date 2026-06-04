// @marketplace mod-check-161 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModCheck161",category:"moderation",desc:"Group moderation check feature #161",
  command:["modcheck161"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modcheck161 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_check_161";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_check_161.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-check-161: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-check-161\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modcheck161 on/off");
  }
};
