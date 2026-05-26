// @marketplace admin-toggle-023 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminToggle023",category:"admin",desc:"Admin toggle tool #23",
  command:["admintoggle23"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_toggle_023.json"),JSON.stringify({[chat]:{["toggle_23"]:value}},null,2));}catch{}
    return reply("Admin toggle #23\\n\\nValue set: "+value);
  }
};
