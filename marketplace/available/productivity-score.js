// @marketplace productivity-score v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_productivity_score.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"ProductivityScore",category:"lifestyle",desc:"Score your daily productivity",
  command:["prodscoreday","dailyprodscore","howproductivewas"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const Q=["Did you complete your 3 most important tasks? (y/n)","Did you avoid procrastination on critical work? (y/n)","Did you take planned breaks? (y/n)","Did you avoid distractions (phone/social media)? (y/n)","Did you end the day knowing exactly what to do tomorrow? (y/n)"];
    const G=global.__ps=global.__ps||{};const key=chat+'_ps_'+uid;
    if(!G[key]){G[key]={answers:[],q:0};return reply("Productivity Score\n\n"+Q[0]+"\n_Reply y or n_");}
    const a=(args[0]||'').toLowerCase();if(!['y','n'].includes(a))return reply("Reply y or n");
    G[key].answers.push(a==='y'?1:0);G[key].q++;
    if(G[key].q<Q.length)return reply("Question "+(G[key].q+1)+"/"+Q.length+":\n\n"+Q[G[key].q]+"\n_Reply y or n_");
    const score=G[key].answers.reduce((s,x)=>s+x,0);delete G[key];
    return reply("Productivity Score: "+score+"/5\n\n"+(score===5?"🏆 Perfect day!":score>=3?"✅ Good work!":score>=2?"😐 Average":"💪 Tomorrow is a new chance!")+"\n\nKeep improving!");
  }
};
