// @marketplace admin-toggle-143 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminToggle143",category:"admin",desc:"Admin toggle tool #143",
  command:["admintoggle143"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_toggle_143.json"),JSON.stringify({[chat]:{["toggle_143"]:value}},null,2));}catch{}
    return reply("Admin toggle #143\\n\\nValue set: "+value);
  }
};
