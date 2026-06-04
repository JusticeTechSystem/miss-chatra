// @marketplace admin-enable-089 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminEnable089",category:"admin",desc:"Admin enable tool #89",
  command:["adminenable89"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_enable_089.json"),JSON.stringify({[chat]:{["enable_89"]:value}},null,2));}catch{}
    return reply("Admin enable #89\\n\\nValue set: "+value);
  }
};
