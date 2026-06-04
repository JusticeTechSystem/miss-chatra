// @marketplace admin-clear-098 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminClear098",category:"admin",desc:"Admin clear tool #98",
  command:["adminclear98"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_clear_098.json"),JSON.stringify({[chat]:{["clear_98"]:value}},null,2));}catch{}
    return reply("Admin clear #98\\n\\nValue set: "+value);
  }
};
