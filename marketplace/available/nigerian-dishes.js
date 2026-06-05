// @marketplace nigerian-dishes v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_nigerian_dishes.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"NigerianDishes",category:"nigerian",desc:"Complete guide to Nigerian dishes",command:["nigeriandishes","naijafoods","dishguide"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const DISHES={soups:["Egusi soup","Banga soup","Edikang Ikong","Ofe Onugbu","Afang soup","Ogbono soup","Oha soup","Groundnut soup"],rice:["Jollof rice","Fried rice","Coconut rice","Native rice (ofada)","Rice and stew"],protein:["Suya","Asun","Isi ewu","Pepper soup","Nkwobi","Ogufe","Ofe akwu"],snacks:["Puff puff","Akara","Moi moi","Boli","Roasted corn","Chin chin","Kilishi"]};const cat=(args[0]||'soups').toLowerCase();const list=DISHES[cat]||DISHES.soups;return reply("Nigerian "+cat.toUpperCase()+"\n\n"+list.map((d,i)=>(i+1)+". "+d).join("\n")+"\n\nCategories: soups, rice, protein, snacks");
  }
};
