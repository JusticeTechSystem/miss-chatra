// @marketplace mod-block-183 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModBlock183",category:"moderation",desc:"Group moderation block feature #183",
  command:["modblock183"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modblock183 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_block_183";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_block_183.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-block-183: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-block-183\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modblock183 on/off");
  }
};
