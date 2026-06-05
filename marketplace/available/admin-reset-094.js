// @marketplace admin-reset-094 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminReset094",category:"admin",desc:"Admin reset tool #94",
  command:["adminreset94"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_reset_094.json"),JSON.stringify({[chat]:{["reset_94"]:value}},null,2));}catch{}
    return reply("Admin reset #94\\n\\nValue set: "+value);
  }
};
