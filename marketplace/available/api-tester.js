// @marketplace api-tester v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "APITester", category: "tools", desc: "Test a public API endpoint",
  command: ["apicall","apitest","getrequest"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const url=args[0];
    if(!url||!url.startsWith('http')) return reply("Usage: "+pfx+"apicall <url>\nExample: "+pfx+"apicall https://api.github.com/users/octocat\n\nOnly GET requests to public APIs.");
    const axios=require('axios');
    try{
      const start=Date.now();
      const r=await axios.get(url,{timeout:10000,headers:{'User-Agent':'MissChatra-Bot/1.0'}});
      const time=Date.now()-start;
      const data=JSON.stringify(r.data).slice(0,300);
      return reply("API Test\n\nURL: "+url+"\nStatus: "+r.status+" "+r.statusText+"\nResponse time: "+time+"ms\nContent-Type: "+(r.headers['content-type']||'unknown')+"\n\nResponse preview:\n"+data+(data.length>=300?'...':''));
    }catch(e){return reply("API Error\n\nURL: "+url+"\nError: "+e.message);}  
  }
};
