// @marketplace prediction-game v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_prediction_game.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"PredictionGame",category:"games",desc:"Make predictions and track accuracy",
  command:["prediction","predict","mypredictions"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[uid])all2[uid]=[];
    if(command==='predict'&&args.length){
      const text=args.join(' ');all2[uid].push({text,date:new Date().toLocaleDateString(),outcome:null});_sv(all2);
      return reply("Prediction locked in!\n\n*"+text+"*\n\nWe'll see how accurate this is!\nCheck: "+pfx+"mypredictions");
    }
    if(!all2[uid].length)return reply("No predictions yet.\n"+pfx+"predict Nigeria will win AFCON 2025");
    return reply("My Predictions\n\n"+all2[uid].slice(-8).map((p,i)=>(i+1)+". "+p.text+"\n   "+p.date+" | "+(p.outcome||"Pending")).join("\n"));
  }
};
