// @marketplace website-checker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "WebsiteChecker", category: "tools", desc: "Check if a website is online",
  command: ["sitecheck","websitestatus","isitdown"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const axios=require('axios');
    const site=args[0];
    if(!site) return reply("Usage: "+pfx+"sitecheck <url>\nExample: "+pfx+"sitecheck https://google.com");
    const url=site.startsWith('http')?site:'https://'+site;
    try{
      const start=Date.now();
      const r=await axios.get(url,{timeout:10000,validateStatus:()=>true});
      const time=Date.now()-start;
      const status=r.status;
      const ok=status>=200&&status<400;
      return reply("Website Status\n\n"+url+"\n\nStatus: "+status+(ok?" - Online!":"- Issues detected")+"\nResponse time: "+time+"ms\n\n"+(ok?"The site is up and running.":"The site may be down or having issues."));
    }catch(e){return reply("Cannot reach: "+url+"\n\nThe site may be down or the URL may be wrong.\nError: "+e.code||e.message);}
  }
};
