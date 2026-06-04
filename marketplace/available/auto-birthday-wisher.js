// @marketplace auto-birthday-wisher v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_auto_birthday_wisher.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"AutoBirthdayWisher",category:"admin",desc:"Auto-wish members on their birthdays",command:["autobdaywish","birthdaywish","bwisher"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    if(!canUse)return reply("Admin only.");const sub=(args[0]||"").toLowerCase();if(sub==="on"||sub==="off"){gs.autobday=sub==="on";save(gs);return reply("Auto Birthday Wisher: *"+sub.toUpperCase()+"*\n"+(sub==="on"?"Bot will wish members on their birthdays at 8am.":""));}return reply(pfx+"autobdaywish on/off\nRequires members to set birthdays with /addbirthday\nCurrent: "+(gs.autobday?"ON":"OFF"));
  }
};
