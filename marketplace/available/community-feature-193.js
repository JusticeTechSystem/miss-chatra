// @marketplace community-feature-193 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"CommunityFeature193",category:"community",desc:"Community feature #193",
  command:["community193"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🏘️ Community Feature #194\\n\\nWe grow together or not at all\\n\\nType /community193 help for usage.");
  }
};
