// @marketplace admin-toggle-173 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminToggle173",category:"admin",desc:"Admin toggle tool #173",
  command:["admintoggle173"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_toggle_173.json"),JSON.stringify({[chat]:{["toggle_173"]:value}},null,2));}catch{}
    return reply("Admin toggle #173\\n\\nValue set: "+value);
  }
};
