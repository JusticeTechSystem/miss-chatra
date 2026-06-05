// @marketplace eko-guide v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_eko_guide.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"EkoGuide",category:"nigerian",desc:"Ultimate Lagos (Eko) guide for visitors",command:["ekoguide","lagosguide","visitlagos"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const INFO={eat:["Buka Tuntun — authentic local food","Nok by Alara — fine dining","Yellow Chilli — upscale Nigerian cuisine","Mama Cass — student and middle-class favorite"],see:["National Museum Lagos","Nike Art Gallery, Lekki","Lekki Conservation Centre","Bar Beach (Alpha Beach)","Victoria Island waterfront"],transport:["BRT bus — cheapest for long routes","Danfo — yellow mini bus (cash only)","Bolt/Uber — most comfortable","Third Mainland Bridge — scenic route","Ferry from CMS to Badagry"],areas:["Victoria Island — upscale, business","Lekki — residential, new money","Yaba — tech hub, students","Surulere — middle class, authentic","Mushin — local, affordable","Ajah — affordable expansion area"]};const cat=(args[0]||'eat').toLowerCase();const list=INFO[cat]||INFO.eat;return reply("Lagos Guide: "+cat.toUpperCase()+"\n\n"+list.map((x,i)=>(i+1)+". "+x).join("\n")+"\n\nCategories: eat, see, transport, areas");
  }
};
