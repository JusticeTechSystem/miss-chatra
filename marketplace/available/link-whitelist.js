// @marketplace link-whitelist v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_link_whitelist.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"LinkWhitelist",category:"moderation",desc:"Allow only whitelisted domains in the group",
  command:["linkwhitelist","approvedlinks","whitelistdomain","addapprovedlink"],
  run:async({args,command,chatId:chat,userId,reply,prefix,isAdmin,isOwner,isDev})=>{
    const pfx=prefix||"/";const canUse=isAdmin||isOwner||isDev;
    if(!canUse) return reply("Admin only.");
    const gs=_ld()[chat]||{};const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    if(command==="addapprovedlink"){
      const raw=(args[0]||"").toLowerCase();
      const domain=raw.replace(/^https?:\/\//,"").replace(/^www\./,"").split("/")[0];
      if(!domain) return reply("Usage: "+pfx+"addapprovedlink google.com");
      if(!gs.whitelist) gs.whitelist=[];
      if(!gs.whitelist.includes(domain)) gs.whitelist.push(domain);
      save(gs);
      return reply("Approved domain: "+domain);
    }
    if((args[0]||"").toLowerCase()==="on"||(args[0]||"").toLowerCase()==="off"){
      gs.link_whitelist_on=(args[0]||"").toLowerCase()==="on";save(gs);
      return reply("Link Whitelist: *"+(gs.link_whitelist_on?"ON":"OFF")+"*");
    }
    const list=gs.whitelist||[];
    return reply("Approved Domains ("+list.length+"):\n"+(list.join("\n")||"None")+"\n\n"+pfx+"addapprovedlink google.com\n"+pfx+"linkwhitelist on/off");
  }
};
