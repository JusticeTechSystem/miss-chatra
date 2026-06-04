// @marketplace admin-reset-144 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminReset144",category:"admin",desc:"Admin reset tool #144",
  command:["adminreset144"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_reset_144.json"),JSON.stringify({[chat]:{["reset_144"]:value}},null,2));}catch{}
    return reply("Admin reset #144\\n\\nValue set: "+value);
  }
};
