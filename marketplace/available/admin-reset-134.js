// @marketplace admin-reset-134 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminReset134",category:"admin",desc:"Admin reset tool #134",
  command:["adminreset134"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_reset_134.json"),JSON.stringify({[chat]:{["reset_134"]:value}},null,2));}catch{}
    return reply("Admin reset #134\\n\\nValue set: "+value);
  }
};
