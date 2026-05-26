// @marketplace admin-enable-109 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminEnable109",category:"admin",desc:"Admin enable tool #109",
  command:["adminenable109"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_enable_109.json"),JSON.stringify({[chat]:{["enable_109"]:value}},null,2));}catch{}
    return reply("Admin enable #109\\n\\nValue set: "+value);
  }
};
