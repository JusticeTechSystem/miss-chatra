// @marketplace community-feature-138 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"CommunityFeature138",category:"community",desc:"Community feature #138",
  command:["community138"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🏘️ Community Feature #139\\n\\nWe grow together or not at all\\n\\nType /community138 help for usage.");
  }
};
