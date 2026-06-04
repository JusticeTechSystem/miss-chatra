// @marketplace mod-block-253 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModBlock253",category:"moderation",desc:"Group moderation block feature #253",
  command:["modblock253"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modblock253 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_block_253";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_block_253.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-block-253: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-block-253\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modblock253 on/off");
  }
};
