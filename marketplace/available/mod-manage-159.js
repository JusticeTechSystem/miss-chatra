// @marketplace mod-manage-159 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"ModManage159",category:"moderation",desc:"Group moderation manage feature #159",
  command:["modmanage159"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.\n"+pfx+"modmanage159 on/off");
    const sub=(args[0]||"status").toLowerCase();
    const key="mod_manage_159";
    if(!gs.features)gs.features={};
    if(sub==="on"||sub==="off"){gs.features[key]=sub==="on";const fs=require("fs"),p=require("path");try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_mod_manage_159.json"),JSON.stringify({[chat]:gs},null,2));}catch{}return reply("Feature mod-manage-159: *"+sub.toUpperCase()+"*");}
    return reply("Feature: mod-manage-159\\nStatus: "+(gs.features?.[key]?"ACTIVE":"INACTIVE")+"\\n\\n"+pfx+"modmanage159 on/off");
  }
};
