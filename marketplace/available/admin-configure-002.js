// @marketplace admin-configure-002 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminConfigure002",category:"admin",desc:"Admin configure tool #2",
  command:["adminconfigure2"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_configure_002.json"),JSON.stringify({[chat]:{["configure_2"]:value}},null,2));}catch{}
    return reply("Admin configure #2\\n\\nValue set: "+value);
  }
};
