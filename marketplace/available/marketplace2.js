// @marketplace marketplace2 v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_marketplace2.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"GroupMarketplace",category:"community",desc:"Buy and sell within the group",command:["sell2","buy2","groupmarket","listings"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[chat])all2[chat]={listings:[],counter:0};const d=all2[chat];if(command==='sell2'){const price=parseFloat(args[0]),desc=args.slice(1).join(' ');if(isNaN(price)||!desc)return reply("Usage: "+pfx+"sell2 <price> <description>\nExample: "+pfx+"sell2 15000 iPhone charger original brand new");d.counter=(d.counter||0)+1;const id='LST-'+String(d.counter).padStart(3,'0');d.listings.push({id,price,desc,seller:m?.pushName||'Member',sellerId:norm(uid),date:new Date().toLocaleDateString(),sold:false});_sv(all2);return reply("Listed! ID: "+id+"\n\n💰 N"+price.toLocaleString()+"\n📝 "+desc+"\n\nDM seller for details.");}const active=d.listings.filter(l=>!l.sold);if(!active.length)return reply("No active listings.\n"+pfx+"sell2 5000 Brand new headphones");return reply("Group Marketplace ("+active.length+" items)\n\n"+active.slice(0,8).map(l=>l.id+". N"+l.price.toLocaleString()+" — "+l.desc+"\n   Seller: "+l.seller).join("\n\n"));
  }
};
