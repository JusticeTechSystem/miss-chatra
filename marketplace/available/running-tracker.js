// @marketplace running-tracker v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_running_tracker.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"RunningTracker",category:"health",desc:"Track running distance and pace",command:["runtrack","logrun","myrunning"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[uid])all2[uid]=[];if(args.length>=2){const dist=parseFloat(args[0]),mins=parseFloat(args[1]);if([dist,mins].some(isNaN))return reply("Usage: "+pfx+"logrun <km> <minutes>\nExample: "+pfx+"logrun 5 30");const pace=(mins/dist).toFixed(1);const cals=Math.round(dist*60);all2[uid].push({dist,mins,pace,cals,date:new Date().toLocaleDateString()});_sv(all2);const totalKm=all2[uid].reduce((s,r)=>s+r.dist,0);return reply("Run Logged! 🏃\n\nDistance: "+dist+"km\nTime: "+mins+" mins\nPace: "+pace+" min/km\nCalories: ~"+cals+"\n\nTotal ever: "+totalKm.toFixed(1)+"km");}const runs=all2[uid];if(!runs.length)return reply("No runs logged.\n"+pfx+"logrun 5 30");const total=runs.reduce((s,r)=>s+r.dist,0);return reply("Running Log\n\nTotal: "+total.toFixed(1)+"km\nRuns: "+runs.length+"\n\nLast 5:\n"+runs.slice(-5).map(r=>r.date+": "+r.dist+"km in "+r.mins+"m").join("\n"));
  }
};
