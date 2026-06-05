// @marketplace admin-setting-031 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminSetting031",category:"admin",desc:"Admin setting tool #31",
  command:["adminsetting31"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_setting_031.json"),JSON.stringify({[chat]:{["setting_31"]:value}},null,2));}catch{}
    return reply("Admin setting #31\\n\\nValue set: "+value);
  }
};
