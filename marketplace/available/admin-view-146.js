// @marketplace admin-view-146 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"AdminView146",category:"admin",desc:"Admin view tool #146",
  command:["adminview146"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    if(!canUse)return reply("Admin only.");
    const value=args.join(" ")||"default";
    const fs=require("fs"),p=require("path");
    try{fs.writeFileSync(p.join(__dirname,"../../..","database","mp_admin_view_146.json"),JSON.stringify({[chat]:{["view_146"]:value}},null,2));}catch{}
    return reply("Admin view #146\\n\\nValue set: "+value);
  }
};
