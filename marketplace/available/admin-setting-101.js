// @marketplace admin-setting-101 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminSetting101",category:"admin",desc:"Admin setting tool #101",
  command:["adminsetting101"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_setting_101.json"),JSON.stringify({[chat]:{["setting_101"]:value}},null,2));}catch{}
    return reply("Admin setting #101\\n\\nValue set: "+value);
  }
};
