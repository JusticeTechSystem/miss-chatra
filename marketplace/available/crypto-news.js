// @marketplace crypto-news v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CryptoNews", category: "finance", desc: "Latest cryptocurrency news headlines",
  command: ["cryptonews","blockchainnews","coinnews"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const axios=require('axios');
    try{
      const r=await axios.get('https://cryptopanic.com/api/v1/posts/?auth_token=demo&public=true&kind=news',{timeout:8000});
      if(r.data?.results?.length){
        const news=r.data.results.slice(0,5);
        return reply("Crypto News\n\n"+news.map((n,i)=>(i+1)+". "+n.title).join("\n\n")+"\n\nFor full articles: cryptopanic.com");
      }
    }catch{}
    return reply("Crypto News\n\nCould not fetch live crypto news.\nCheck: CoinDesk, CoinTelegraph, CryptoSlate\nor follow @cointelegraph on Twitter");
  }
};
