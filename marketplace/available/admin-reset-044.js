// @marketplace admin-reset-044 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminReset044",category:"admin",desc:"Admin reset tool #44",
  command:["adminreset44"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_reset_044.json"),JSON.stringify({[chat]:{["reset_44"]:value}},null,2));}catch{}
    return reply("Admin reset #44\\n\\nValue set: "+value);
  }
};
