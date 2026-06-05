// @marketplace admin-view-066 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminView066",category:"admin",desc:"Admin view tool #66",
  command:["adminview66"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_view_066.json"),JSON.stringify({[chat]:{["view_66"]:value}},null,2));}catch{}
    return reply("Admin view #66\\n\\nValue set: "+value);
  }
};
