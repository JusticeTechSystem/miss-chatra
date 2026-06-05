// @marketplace admin-configure-072 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminConfigure072",category:"admin",desc:"Admin configure tool #72",
  command:["adminconfigure72"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_configure_072.json"),JSON.stringify({[chat]:{["configure_72"]:value}},null,2));}catch{}
    return reply("Admin configure #72\\n\\nValue set: "+value);
  }
};
