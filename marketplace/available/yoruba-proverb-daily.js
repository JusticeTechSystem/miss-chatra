// @marketplace yoruba-proverb-daily v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_yoruba_proverb_daily.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"YorubaProverbDaily",category:"nigerian",desc:"Daily Yoruba proverbs with meanings",command:["yorubaproverb","owe","yorubawise"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const P=[["Bi a ba n wa eni a o gb'ojo re","If we are looking for someone to bury with us, we may dig our own grave"],["Eni to ba ni, a o ma a ba a soro","Whoever has what it takes, we will always talk to them"],["Ile la ti nko eso ita","Character is learnt at home before going out"],["Ogbon ko lailai","Wisdom never goes old"],["Bi ojo ba paro, imole a tan","When rain stops, the light will shine"]];const[prov,meaning]=P[Math.floor(Math.random()*P.length)];return reply("Yoruba Proverb (Owe)\n\n\""+prov+"\"\n\nMeaning: "+meaning);
  }
};
