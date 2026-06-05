// @marketplace admin-toggle-003 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminToggle003",category:"admin",desc:"Admin toggle tool #3",
  command:["admintoggle3"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_toggle_003.json"),JSON.stringify({[chat]:{["toggle_3"]:value}},null,2));}catch{}
    return reply("Admin toggle #3\\n\\nValue set: "+value);
  }
};
