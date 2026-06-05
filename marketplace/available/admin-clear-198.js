// @marketplace admin-clear-198 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminClear198",category:"admin",desc:"Admin clear tool #198",
  command:["adminclear198"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_clear_198.json"),JSON.stringify({[chat]:{["clear_198"]:value}},null,2));}catch{}
    return reply("Admin clear #198\\n\\nValue set: "+value);
  }
};
