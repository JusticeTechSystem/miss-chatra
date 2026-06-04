// @marketplace admin-set-127 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminSet127",category:"admin",desc:"Admin set tool #127",
  command:["adminset127"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_set_127.json"),JSON.stringify({[chat]:{["set_127"]:value}},null,2));}catch{}
    return reply("Admin set #127\\n\\nValue set: "+value);
  }
};
