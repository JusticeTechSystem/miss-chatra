// @marketplace admin-toggle-043 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminToggle043",category:"admin",desc:"Admin toggle tool #43",
  command:["admintoggle43"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_toggle_043.json"),JSON.stringify({[chat]:{["toggle_43"]:value}},null,2));}catch{}
    return reply("Admin toggle #43\\n\\nValue set: "+value);
  }
};
