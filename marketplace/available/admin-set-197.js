// @marketplace admin-set-197 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminSet197",category:"admin",desc:"Admin set tool #197",
  command:["adminset197"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_set_197.json"),JSON.stringify({[chat]:{["set_197"]:value}},null,2));}catch{}
    return reply("Admin set #197\\n\\nValue set: "+value);
  }
};
