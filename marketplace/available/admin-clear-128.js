// @marketplace admin-clear-128 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminClear128",category:"admin",desc:"Admin clear tool #128",
  command:["adminclear128"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_clear_128.json"),JSON.stringify({[chat]:{["clear_128"]:value}},null,2));}catch{}
    return reply("Admin clear #128\\n\\nValue set: "+value);
  }
};
