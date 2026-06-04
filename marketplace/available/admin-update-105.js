// @marketplace admin-update-105 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminUpdate105",category:"admin",desc:"Admin update tool #105",
  command:["adminupdate105"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_update_105.json"),JSON.stringify({[chat]:{["update_105"]:value}},null,2));}catch{}
    return reply("Admin update #105\\n\\nValue set: "+value);
  }
};
