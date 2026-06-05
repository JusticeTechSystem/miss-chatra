// @marketplace community-feature-145 v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"CommunityFeature145",category:"community",desc:"Community feature #145",
  command:["community145"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    return reply("🏘️ Community Feature #146\\n\\nCommunity is built through daily small acts\\n\\nType /community145 help for usage.");
  }
};
