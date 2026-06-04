// @marketplace mod-filter-272 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModFilter272",category:"moderation",desc:"Group moderation filter feature #272",
  command:["modfilter272"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modfilter272 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_filter_272";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_filter_272.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-filter-272: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-filter-272\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modfilter272 on/off");
  }
};
