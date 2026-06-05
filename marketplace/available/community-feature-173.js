// @marketplace community-feature-173 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"CommunityFeature173",category:"community",desc:"Community feature #173",
  command:["community173"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🏘️ Community Feature #174\\n\\nWe grow together or not at all\\n\\nType /community173 help for usage.");
  }
};
