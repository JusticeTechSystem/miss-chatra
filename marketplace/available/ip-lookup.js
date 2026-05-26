// @marketplace ip-lookup v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "IPInfo", category: "tools", desc: "Get information about an IP address",
  command: ["ipinfo","myip","iplookup"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const axios=require('axios');
    const ip=args[0]||'';
    try{
      const url=ip?'https://ipapi.co/'+ip+'/json/':'https://ipapi.co/json/';
      const r=await axios.get(url,{timeout:8000});
      const d=r.data;
      return reply("IP Information\n\nIP: "+d.ip+"\nCity: "+(d.city||'Unknown')+"\nRegion: "+(d.region||'Unknown')+"\nCountry: "+(d.country_name||'Unknown')+"\nISP: "+(d.org||'Unknown')+"\nTimezone: "+(d.timezone||'Unknown'));
    }catch{return reply("Could not fetch IP info.\nTry without an argument for your current IP: "+pfx+"myip");}
  }
};
