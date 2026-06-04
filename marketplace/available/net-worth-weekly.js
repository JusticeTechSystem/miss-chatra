// @marketplace net-worth-weekly v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_net_worth_weekly.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"NetWorthWeekly",category:"finance",desc:"Weekly net worth snapshot tracker",
  command:["networthweekly","weeklynetworth","netmap"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[uid])all2[uid]=[];
    if(args[0]==='add'){
      const val=parseFloat(args[1]);
      if(isNaN(val))return reply("Usage: "+pfx+"networthweekly add 5000000");
      all2[uid].push({value:val,week:new Date().toLocaleDateString()});_sv(all2);
      const prev=all2[uid][all2[uid].length-2];
      const change=prev?((val-prev.value)/prev.value*100).toFixed(1):"—";
      return reply("Net worth snapshot saved\nValue: N"+val.toLocaleString()+"\nWeek-over-week: "+(prev?change+"%":"First entry"));
    }
    const entries=all2[uid];
    if(!entries?.length)return reply("No snapshots.\n"+pfx+"networthweekly add 5000000");
    return reply("Net Worth Trend\n\n"+entries.slice(-8).map((e,i)=>(i+1)+". N"+e.value.toLocaleString()+" ("+e.week+")").join("\n"));
  }
};
