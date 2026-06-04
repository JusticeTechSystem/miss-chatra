// @marketplace sports-news v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "SportsNews", category: "entertainment",
  desc: "Latest sports news and scores",
  command: ["sportsnews", "latestsports", "football2", "sportsupdate"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const axios=require("axios");
    const sport=(args[0]||"football").toLowerCase();
    try{
      const r=await axios.get("https://www.scorebat.com/video-api/v3/feed/?token=free",{timeout:10000});
      if(r.data?.response?.length){
        const items=r.data.response.slice(0,5);
        const lines=["⚽ *Latest Football Videos*\n"];
        items.forEach((x,i)=>lines.push((i+1)+". *"+x.title+"*\n   "+x.competition?.name+"\n   "+x.url));
        return reply(lines.join("\n"));
      }
    }catch{}
    return reply("⚽ *Sports Update*\n\nFor latest scores use:\n/livescore — live football scores\n/table — league standings\n/topscorer — goal scorers\n\n_Full sports commands in the main bot_");
  }
};
