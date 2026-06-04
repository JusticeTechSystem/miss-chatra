// @marketplace wellness-score v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_wellness_score.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"WellnessScore",category:"health",desc:"Calculate your daily wellness score",
  command:["wellness","wellnessscore","dailywellness"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const Q=["Did you sleep 7+ hours? (y/n)","Did you exercise today? (y/n)","Did you drink 8+ glasses of water? (y/n)","Did you eat vegetables? (y/n)","Did you manage stress? (y/n)","Did you take your vitamins? (y/n)"];
    const G=global.__ws=global.__ws||{};const key=chat+'_ws_'+uid;
    if(!G[key]){G[key]={answers:[],q:0};return reply("Daily Wellness Check\n\n"+Q[0]+"\n\n_Reply y or n_");}
    const ans=(args[0]||'').toLowerCase();if(!['y','n'].includes(ans))return reply("Reply y or n");
    G[key].answers.push(ans==='y'?1:0);G[key].q++;
    if(G[key].q<Q.length) return reply("Question "+(G[key].q+1)+"/"+Q.length+"\n\n"+Q[G[key].q]+"\n\n_Reply y or n_");
    const score=G[key].answers.reduce((s,x)=>s+x,0);delete G[key];
    const grade=score===6?"🌟 Perfect!":score>=4?"✅ Good":score>=2?"😐 Fair":"😔 Needs work";
    return reply("Wellness Score: "+score+"/6\n\n"+grade+"\n\nAreas needing attention:\n"+(score<6?Q.filter((_,i)=>G[key]?.answers?.[i]===0||false).join("\n"):"All good!"));
  }
};
