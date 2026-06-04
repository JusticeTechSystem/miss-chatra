// @marketplace admin-reset-004 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminReset004",category:"admin",desc:"Admin reset tool #4",
  command:["adminreset4"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_reset_004.json"),JSON.stringify({[chat]:{["reset_4"]:value}},null,2));}catch{}
    return reply("Admin reset #4\\n\\nValue set: "+value);
  }
};
