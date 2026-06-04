// @marketplace mod-manage-189 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModManage189",category:"moderation",desc:"Group moderation manage feature #189",
  command:["modmanage189"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modmanage189 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_manage_189";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_manage_189.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-manage-189: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-manage-189\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modmanage189 on/off");
  }
};
