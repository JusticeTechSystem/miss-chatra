// @marketplace neighborhood-news v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_neighborhood_news.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"NeighborhoodNews",category:"community",desc:"Post and browse neighborhood news",command:["neighbornews","localnews","estatenews"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[chat])all2[chat]=[];if(args.length>=1&&(canUse||true)){const text=args.join(' ');all2[chat].unshift({text,by:m?.pushName||'Resident',date:new Date().toLocaleDateString()});if(all2[chat].length>20)all2[chat]=all2[chat].slice(0,20);_sv(all2);return reply("📰 Neighborhood news posted!");}if(!all2[chat].length)return reply("No news posted yet.\n"+pfx+"neighbornews <your news update>");return reply("Neighborhood News\n\n"+all2[chat].slice(0,5).map((n,i)=>(i+1)+". "+n.text+"\n   "+n.by+" — "+n.date).join("\n\n"));
  }
};
