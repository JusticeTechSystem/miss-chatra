// @marketplace news-fetcher v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "NewsFetcher", category: "tools",
  desc: "Get latest news headlines",
  command: ["news", "topnews", "breakingnews", "headlines", "latestnews"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const axios=require("axios");
    const category=(args[0]||"general").toLowerCase();
    const country=(args[1]||"ng").toLowerCase();
    try{
      const r=await axios.get("https://newsapi.org/v2/top-headlines",{
        params:{country,category,apiKey:"demo",pageSize:5},timeout:10000
      });
      if(r.data?.articles?.length){
        const lines=["📰 *Top Headlines*\n"];
        r.data.articles.slice(0,5).forEach((a,i)=>lines.push((i+1)+". *"+a.title+"*\n   "+a.source?.name+" — "+new Date(a.publishedAt).toLocaleDateString()+"\n"));
        return reply(lines.join("\n"));
      }
    }catch{}
    try{
      const r=await axios.get("https://gnews.io/api/v4/top-headlines",{params:{lang:"en",country:"ng",topic:category,token:"demo"},timeout:10000});
      if(r.data?.articles?.length){
        const lines=["📰 *News Headlines*\n"];
        r.data.articles.slice(0,5).forEach((a,i)=>lines.push((i+1)+". *"+a.title+"*\n   "+a.source?.name+"\n"));
        return reply(lines.join("\n"));
      }
    }catch{}
    return reply("📰 *News*\n\nCould not fetch live news.\nCheck: guardian.ng, punch.ng, vanguardngr.com\n\nFor sports news: /sportsnews");
  }
};
