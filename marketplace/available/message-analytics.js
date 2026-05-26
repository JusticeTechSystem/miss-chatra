// @marketplace message-analytics v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_message_analytics.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"MessageAnalytics",category:"admin",desc:"Detailed message analytics dashboard",command:["msganalytics","messageanalytics","chatanalytics"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    if(!canUse)return reply("Admin only.");const state=require("../../../library/state").getState();const counts=state.user_message_counts?.[chat]||{};const msgs=Object.values(counts);const total=msgs.reduce((s,d)=>s+(d.count||0),0);const today=msgs.filter(d=>new Date(d.last_msg||0).toDateString()===new Date().toDateString()).length;const week=msgs.filter(d=>Date.now()-(d.last_msg||0)<7*86400000).length;const month=msgs.filter(d=>Date.now()-(d.last_msg||0)<30*86400000).length;return reply("📊 Message Analytics\n\nTotal messages: "+total+"\nActive today: "+today+"\nActive this week: "+week+"\nActive this month: "+month+"\n\nEngagement rates:\nDaily: "+(msgs.length>0?(today/msgs.length*100).toFixed(1):0)+"%\nWeekly: "+(msgs.length>0?(week/msgs.length*100).toFixed(1):0)+"%");
  }
};
