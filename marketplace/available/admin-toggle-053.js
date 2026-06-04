// @marketplace admin-toggle-053 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminToggle053",category:"admin",desc:"Admin toggle tool #53",
  command:["admintoggle53"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_toggle_053.json"),JSON.stringify({[chat]:{["toggle_53"]:value}},null,2));}catch{}
    return reply("Admin toggle #53\\n\\nValue set: "+value);
  }
};
