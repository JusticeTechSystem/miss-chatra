// @marketplace admin-clear-178 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminClear178",category:"admin",desc:"Admin clear tool #178",
  command:["adminclear178"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_clear_178.json"),JSON.stringify({[chat]:{["clear_178"]:value}},null,2));}catch{}
    return reply("Admin clear #178\\n\\nValue set: "+value);
  }
};
