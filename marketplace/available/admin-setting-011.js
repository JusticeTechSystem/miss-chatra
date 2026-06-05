// @marketplace admin-setting-011 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminSetting011",category:"admin",desc:"Admin setting tool #11",
  command:["adminsetting11"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_setting_011.json"),JSON.stringify({[chat]:{["setting_11"]:value}},null,2));}catch{}
    return reply("Admin setting #11\\n\\nValue set: "+value);
  }
};
