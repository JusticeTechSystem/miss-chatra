// @marketplace url-shortener v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "URLInfo", category: "tools", desc: "Get info about a URL",
  command: ["urlinfo","checkurl","analyzeurl"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const url=args[0];
    if(!url) return reply("Usage: "+pfx+"urlinfo <url>\nExample: "+pfx+"urlinfo https://google.com");
    try{
      const u=new URL(url);
      return reply("URL Analysis\n\nFull URL: "+url+"\nProtocol: "+u.protocol+"\nDomain: "+u.hostname+"\nPath: "+(u.pathname||'/')+"\nQuery: "+(u.search||'none')+"\n\nHTTPS: "+(u.protocol==='https:'?"Secure":"Not secure - be careful!")+"\n\nTip: Always check URLs before clicking!");
    }catch{return reply("Invalid URL format.\nMake sure to include https:// or http://");}
  }
};
