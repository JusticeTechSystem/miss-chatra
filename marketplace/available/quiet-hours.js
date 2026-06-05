// @marketplace quiet-hours v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_quiet_hours.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"QuietHours",category:"moderation",desc:"Schedule quiet hours automatically",command:["quiethours2","scheduledquiet","autoclose2"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    if(!canUse)return reply("Admin only.");const start=args[0],end=args[1];if(!start||!end)return reply("Usage: "+pfx+"quiethours2 22:00 06:00\nAutomatically closes group at 22:00 and opens at 06:00");gs.quiet_start=start;gs.quiet_end=end;gs.quiet_enabled=true;save(gs);return reply("Quiet Hours Set!\n\nClose: "+start+"\nOpen: "+end+"\n\nGroup will auto-lock/unlock at these times.");
  }
};
