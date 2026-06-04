// @marketplace admin-clear-028 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminClear028",category:"admin",desc:"Admin clear tool #28",
  command:["adminclear28"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_clear_028.json"),JSON.stringify({[chat]:{["clear_28"]:value}},null,2));}catch{}
    return reply("Admin clear #28\\n\\nValue set: "+value);
  }
};
