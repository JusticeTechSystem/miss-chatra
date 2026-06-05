// @marketplace pixel-color v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_pixel_color.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"PixelColor",category:"tools",desc:"Get random color hex codes",command:["randomcolor","colorhex2","pickcolor"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const r=()=>Math.floor(Math.random()*256);const R=r(),G=r(),B=r();const hex="#"+[R,G,B].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();const lab=R>200&&G>200&&B>200?"Light color":R<50&&G<50&&B<50?"Dark color":R>G&&R>B?"Red-ish":G>R&&G>B?"Green-ish":"Blue-ish";return reply("🎨 Random Color\n\nHex: "+hex+"\nRGB: rgb("+R+", "+G+", "+B+")\nType: "+lab+"\n\n/randomcolor for another");
  }
};
