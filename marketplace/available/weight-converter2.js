// @marketplace weight-converter2 v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_weight_converter2.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"WeightConverter2",category:"tools",desc:"Convert between weight units",command:["weightconvert","kgtolbs2","lbstokg"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const val=parseFloat(args[0]),from=(args[1]||'kg').toLowerCase();if(isNaN(val))return reply("Usage: "+pfx+"weightconvert 70 kg\nUnits: kg, lbs, g, oz");const kg=from==='kg'?val:from==='lbs'?val*0.453592:from==='g'?val/1000:val*0.0283495;return reply("⚖️ Weight Conversion\n\n"+val+from+" =\n\n  kg: "+kg.toFixed(3)+"\n  lbs: "+(kg*2.20462).toFixed(2)+"\n  g: "+(kg*1000).toFixed(0)+"\n  oz: "+(kg*35.274).toFixed(2));
  }
};
