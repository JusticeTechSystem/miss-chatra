// @marketplace admin-configure-182 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminConfigure182",category:"admin",desc:"Admin configure tool #182",
  command:["adminconfigure182"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_configure_182.json"),JSON.stringify({[chat]:{["configure_182"]:value}},null,2));}catch{}
    return reply("Admin configure #182\\n\\nValue set: "+value);
  }
};
