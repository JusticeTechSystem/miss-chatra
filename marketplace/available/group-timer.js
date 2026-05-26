// @marketplace group-timer v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_group_timer.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"GroupTimer",category:"admin",desc:"Set timed group activities",command:["grouptimer","activitytimer","eventtimer"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    if(!canUse)return reply("Admin only.");const mins=parseInt(args[0]);const activity=args.slice(1).join(' ')||'Activity';if(isNaN(mins)||mins<1)return reply("Usage: "+pfx+"grouptimer <minutes> <activity>\nExample: "+pfx+"grouptimer 15 'Question and Answer session'");setTimeout(async()=>{try{await sock.sendMessage(chat,{text:"⏰ TIME UP!\n\n*"+activity+"* has ended.\nDuration: "+mins+" minutes"});}catch{}},mins*60000);return reply("⏱️ Group Timer Set!\n\nActivity: "+activity+"\nDuration: "+mins+" minutes\nGroup will be notified when time is up.");
  }
};
