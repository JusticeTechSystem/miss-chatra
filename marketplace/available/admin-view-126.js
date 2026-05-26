// @marketplace admin-view-126 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminView126",category:"admin",desc:"Admin view tool #126",
  command:["adminview126"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_view_126.json"),JSON.stringify({[chat]:{["view_126"]:value}},null,2));}catch{}
    return reply("Admin view #126\\n\\nValue set: "+value);
  }
};
