// @marketplace admin-setting-191 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminSetting191",category:"admin",desc:"Admin setting tool #191",
  command:["adminsetting191"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_setting_191.json"),JSON.stringify({[chat]:{["setting_191"]:value}},null,2));}catch{}
    return reply("Admin setting #191\\n\\nValue set: "+value);
  }
};
