// @marketplace admin-control-070 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminControl070",category:"admin",desc:"Admin control tool #70",
  command:["admincontrol70"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_control_070.json"),JSON.stringify({[chat]:{["control_70"]:value}},null,2));}catch{}
    return reply("Admin control #70\\n\\nValue set: "+value);
  }
};
