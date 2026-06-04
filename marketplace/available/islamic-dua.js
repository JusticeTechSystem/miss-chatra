// @marketplace islamic-dua v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_islamic_dua.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"IslamicDua",category:"spiritual",desc:"Daily Islamic supplications and duas",command:["dua","dailydua","islamicdua"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const DUAS=[{arabic:"بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ",transliteration:"Bismillah ir-rahman ir-rahim",meaning:"In the name of Allah, the Most Gracious, the Most Merciful",use:"Before starting any action"},{arabic:"رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً",transliteration:"Rabbana atina fid-dunya hasanatan",meaning:"Our Lord, give us good in this world and good in the Hereafter",use:"General supplication"},{arabic:"اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ",transliteration:"Allahumma a'inni 'ala dhikrika",meaning:"O Allah, help me to remember You",use:"Morning remembrance"}];const d=DUAS[new Date().getDate()%DUAS.length];return reply("Daily Dua\n\n📿 For: "+d.use+"\n\n"+d.arabic+"\n\n"+d.transliteration+"\n\nMeaning: "+d.meaning+"\n\nMay Allah accept our prayers. Ameen. 🤲");
  }
};
