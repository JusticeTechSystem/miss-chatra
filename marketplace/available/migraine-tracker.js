// @marketplace migraine-tracker v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_migraine_tracker.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"MigraineTracker",category:"health",desc:"Log and track migraine patterns",command:["migraine","migrainetrack","headachelog"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[uid])all2[uid]=[];if(args.length){const severity=parseInt(args[0])||5,trigger=args.slice(1).join(' ')||'unknown';all2[uid].push({severity,trigger,date:new Date().toLocaleDateString(),time:new Date().toLocaleTimeString()});_sv(all2);return reply("Migraine logged\nSeverity: "+severity+"/10\nTrigger: "+trigger+"\n\nPattern in last 10 migraines:\n"+all2[uid].slice(-10).map(m=>m.date+": "+m.severity+"/10 ("+m.trigger+")").join("\n"));}if(!all2[uid].length)return reply("No migraines logged.\n"+pfx+"migraine 7 stress");const common=all2[uid].reduce((acc,m)=>{acc[m.trigger]=(acc[m.trigger]||0)+1;return acc;},{});return reply("Migraine Log\n\nTotal: "+all2[uid].length+"\nMost common triggers: "+Object.entries(common).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([t,c])=>t+" ("+c+"x)").join(", "));
  }
};
