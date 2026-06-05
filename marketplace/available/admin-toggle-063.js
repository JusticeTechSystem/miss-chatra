// @marketplace admin-toggle-063 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminToggle063",category:"admin",desc:"Admin toggle tool #63",
  command:["admintoggle63"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_toggle_063.json"),JSON.stringify({[chat]:{["toggle_63"]:value}},null,2));}catch{}
    return reply("Admin toggle #63\\n\\nValue set: "+value);
  }
};
