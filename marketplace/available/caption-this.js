// @marketplace caption-this v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_caption_this.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"CaptionThis",category:"entertainment",desc:"Caption competition for images",
  command:["captionthis","bestcaption","imagecaption"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const SCENARIOS=["A goat escaping from a Lagos traffic jam","Two politicians sharing a plate of jollof rice","A man sleeping in the office during a Zoom meeting","A Nigerian mother's face when she sees the exam results","A danfo driver arguing with a LASTMA officer","A student realizing the exam starts in 5 minutes","A Lagos landlord explaining the rent increase","Eba refusing to be smooth despite all efforts"];
    return reply("🖼️ Caption This!\n\nScenario:\n*"+SCENARIOS[Math.floor(Math.random()*SCENARIOS.length)]+"*\n\nPost your best caption!\nFunniest caption gets crowned by votes.\n\n/captionthis for new scenario");
  }
};
