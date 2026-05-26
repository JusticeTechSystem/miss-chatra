// @marketplace admin-enable-119 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminEnable119",category:"admin",desc:"Admin enable tool #119",
  command:["adminenable119"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_enable_119.json"),JSON.stringify({[chat]:{["enable_119"]:value}},null,2));}catch{}
    return reply("Admin enable #119\\n\\nValue set: "+value);
  }
};
