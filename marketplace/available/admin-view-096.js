// @marketplace admin-view-096 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminView096",category:"admin",desc:"Admin view tool #96",
  command:["adminview96"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_view_096.json"),JSON.stringify({[chat]:{["view_96"]:value}},null,2));}catch{}
    return reply("Admin view #96\\n\\nValue set: "+value);
  }
};
