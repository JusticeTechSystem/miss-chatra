// @marketplace admin-configure-152 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminConfigure152",category:"admin",desc:"Admin configure tool #152",
  command:["adminconfigure152"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_configure_152.json"),JSON.stringify({[chat]:{["configure_152"]:value}},null,2));}catch{}
    return reply("Admin configure #152\\n\\nValue set: "+value);
  }
};
