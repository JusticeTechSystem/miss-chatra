// @marketplace community-feature-073 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"CommunityFeature073",category:"community",desc:"Community feature #73",
  command:["community73"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🏘️ Community Feature #74\\n\\nWe grow together or not at all\\n\\nType /community73 help for usage.");
  }
};
