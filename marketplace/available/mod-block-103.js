// @marketplace mod-block-103 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModBlock103",category:"moderation",desc:"Group moderation block feature #103",
  command:["modblock103"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modblock103 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_block_103";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_block_103.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-block-103: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-block-103\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modblock103 on/off");
  }
};
