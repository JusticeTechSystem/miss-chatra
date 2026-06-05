// @marketplace admin-reset-154 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminReset154",category:"admin",desc:"Admin reset tool #154",
  command:["adminreset154"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_reset_154.json"),JSON.stringify({[chat]:{["reset_154"]:value}},null,2));}catch{}
    return reply("Admin reset #154\\n\\nValue set: "+value);
  }
};
