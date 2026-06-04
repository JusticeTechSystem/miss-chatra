// @marketplace admin-clear-108 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminClear108",category:"admin",desc:"Admin clear tool #108",
  command:["adminclear108"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_clear_108.json"),JSON.stringify({[chat]:{["clear_108"]:value}},null,2));}catch{}
    return reply("Admin clear #108\\n\\nValue set: "+value);
  }
};
