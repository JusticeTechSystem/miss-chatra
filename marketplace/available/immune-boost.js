// @marketplace immune-boost v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_immune_boost.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"ImmuneBoost",category:"health",desc:"Daily immune system boosting tips",
  command:["immuneboost","immunity","immunetip"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const TIPS=["Vitamin C from citrus: orange, lemon, guava daily","Sleep 7-9 hours — immune cells regenerate at night","30 min walk reduces stress hormones that suppress immunity","Zinc from meat, beans, seeds fights viruses","Stay hydrated — 8 glasses per day minimum","Avoid smoking and excessive alcohol","Manage stress — chronic stress kills immune cells","Garlic contains allicin — a natural antimicrobial","Fermented foods (yogurt, ogi) support gut immunity","Sunlight exposure for 15 min produces Vitamin D","Limit sugar — it suppresses immune function for hours","Moringa leaves: one of Africa's most powerful immune boosters"];
    return reply("🛡️ Immune Boost Tip\n\n"+TIPS[Math.floor(Math.random()*TIPS.length)]+"\n\n/immunetip for another tip");
  }
};
