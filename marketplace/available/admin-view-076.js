// @marketplace admin-view-076 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminView076",category:"admin",desc:"Admin view tool #76",
  command:["adminview76"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_view_076.json"),JSON.stringify({[chat]:{["view_76"]:value}},null,2));}catch{}
    return reply("Admin view #76\\n\\nValue set: "+value);
  }
};
