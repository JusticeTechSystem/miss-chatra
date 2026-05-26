// @marketplace admin-set-177 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminSet177",category:"admin",desc:"Admin set tool #177",
  command:["adminset177"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_set_177.json"),JSON.stringify({[chat]:{["set_177"]:value}},null,2));}catch{}
    return reply("Admin set #177\\n\\nValue set: "+value);
  }
};
