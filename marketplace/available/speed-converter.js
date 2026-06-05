// @marketplace speed-converter v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_speed_converter.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"SpeedConverter",category:"tools",desc:"Convert speed units",command:["speedconvert","kmtomph","mph"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const val=parseFloat(args[0]),from=(args[1]||'kmh').toLowerCase();if(isNaN(val))return reply("Usage: "+pfx+"speedconvert 100 kmh\nUnits: kmh, mph, ms, knots");const ms=from==='kmh'?val/3.6:from==='mph'?val*0.44704:from==='knots'?val*0.514444:val;return reply("🚗 Speed: "+val+from+"\n\nkm/h: "+(ms*3.6).toFixed(1)+"\nmph: "+(ms*2.23694).toFixed(1)+"\nm/s: "+ms.toFixed(2)+"\nknots: "+(ms/0.514444).toFixed(1));
  }
};
