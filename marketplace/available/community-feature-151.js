// @marketplace community-feature-151 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"CommunityFeature151",category:"community",desc:"Community feature #151",
  command:["community151"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🏘️ Community Feature #152\\n\\nEvery member matters here\\n\\nType /community151 help for usage.");
  }
};
