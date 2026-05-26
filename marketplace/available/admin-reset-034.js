// @marketplace admin-reset-034 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminReset034",category:"admin",desc:"Admin reset tool #34",
  command:["adminreset34"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_reset_034.json"),JSON.stringify({[chat]:{["reset_34"]:value}},null,2));}catch{}
    return reply("Admin reset #34\\n\\nValue set: "+value);
  }
};
