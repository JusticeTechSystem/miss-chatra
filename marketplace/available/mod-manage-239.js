// @marketplace mod-manage-239 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModManage239",category:"moderation",desc:"Group moderation manage feature #239",
  command:["modmanage239"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modmanage239 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_manage_239";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_manage_239.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-manage-239: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-manage-239\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modmanage239 on/off");
  }
};
