// @marketplace admin-update-195 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminUpdate195",category:"admin",desc:"Admin update tool #195",
  command:["adminupdate195"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_update_195.json"),JSON.stringify({[chat]:{["update_195"]:value}},null,2));}catch{}
    return reply("Admin update #195\\n\\nValue set: "+value);
  }
};
