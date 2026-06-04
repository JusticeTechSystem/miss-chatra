// @marketplace admin-view-086 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminView086",category:"admin",desc:"Admin view tool #86",
  command:["adminview86"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_view_086.json"),JSON.stringify({[chat]:{["view_86"]:value}},null,2));}catch{}
    return reply("Admin view #86\\n\\nValue set: "+value);
  }
};
