// @marketplace admin-update-025 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminUpdate025",category:"admin",desc:"Admin update tool #25",
  command:["adminupdate25"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_update_025.json"),JSON.stringify({[chat]:{["update_25"]:value}},null,2));}catch{}
    return reply("Admin update #25\\n\\nValue set: "+value);
  }
};
