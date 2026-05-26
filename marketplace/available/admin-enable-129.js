// @marketplace admin-enable-129 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminEnable129",category:"admin",desc:"Admin enable tool #129",
  command:["adminenable129"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_enable_129.json"),JSON.stringify({[chat]:{["enable_129"]:value}},null,2));}catch{}
    return reply("Admin enable #129\\n\\nValue set: "+value);
  }
};
