// @marketplace admin-view-106 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminView106",category:"admin",desc:"Admin view tool #106",
  command:["adminview106"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_view_106.json"),JSON.stringify({[chat]:{["view_106"]:value}},null,2));}catch{}
    return reply("Admin view #106\\n\\nValue set: "+value);
  }
};
