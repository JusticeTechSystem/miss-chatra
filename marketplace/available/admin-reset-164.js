// @marketplace admin-reset-164 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminReset164",category:"admin",desc:"Admin reset tool #164",
  command:["adminreset164"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_reset_164.json"),JSON.stringify({[chat]:{["reset_164"]:value}},null,2));}catch{}
    return reply("Admin reset #164\\n\\nValue set: "+value);
  }
};
