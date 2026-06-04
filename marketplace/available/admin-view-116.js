// @marketplace admin-view-116 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminView116",category:"admin",desc:"Admin view tool #116",
  command:["adminview116"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_view_116.json"),JSON.stringify({[chat]:{["view_116"]:value}},null,2));}catch{}
    return reply("Admin view #116\\n\\nValue set: "+value);
  }
};
