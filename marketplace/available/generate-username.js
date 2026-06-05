// @marketplace generate-username v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_generate_username.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"UsernameGenerator",category:"tools",desc:"Generate creative usernames",command:["username2","genusername","createusername"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const adj=["swift","bright","dark","bold","cool","quick","smart","iron","gold","fire","blue","nova","tech","pro","ace","ultra","mega","super","alpha","prime"];const noun=["wolf","hawk","byte","code","star","king","force","mind","wave","ridge","core","tech","node","net","hub","lab","zone","base","deck","port"];const a=adj[Math.floor(Math.random()*adj.length)];const n=noun[Math.floor(Math.random()*noun.length)];const num=Math.floor(Math.random()*999)+1;const suggestions=[a+n,n+a,a+"_"+n,n+num,a+n+num,n.toUpperCase()+a];return reply("Username Suggestions\n\n"+suggestions.map((s,i)=>(i+1)+". "+s).join("\n")+"\n\n/genusername for more ideas");
  }
};
