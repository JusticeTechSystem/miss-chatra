// @marketplace admin-update-075 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminUpdate075",category:"admin",desc:"Admin update tool #75",
  command:["adminupdate75"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_update_075.json"),JSON.stringify({[chat]:{["update_75"]:value}},null,2));}catch{}
    return reply("Admin update #75\\n\\nValue set: "+value);
  }
};
