// @marketplace admin-control-030 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminControl030",category:"admin",desc:"Admin control tool #30",
  command:["admincontrol30"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_control_030.json"),JSON.stringify({[chat]:{["control_30"]:value}},null,2));}catch{}
    return reply("Admin control #30\\n\\nValue set: "+value);
  }
};
