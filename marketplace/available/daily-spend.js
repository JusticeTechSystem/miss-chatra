// @marketplace daily-spend v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_daily_spend.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"DailySpend",category:"finance",desc:"Track daily spending with categories",
  command:["spend","spent","dailyspend"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const today=new Date().toDateString();const all2=_ld();
    if(!all2[uid])all2[uid]={};if(!all2[uid][today])all2[uid][today]=[];
    if(command==='spent'&&args.length){
      const amt=parseFloat(args[0]),cat=args[1]||'misc',note=args.slice(2).join(' ')||'';
      if(isNaN(amt))return reply("Usage: "+pfx+"spent 2000 food lunch");
      all2[uid][today].push({amt,cat,note});_sv(all2);
      const total=all2[uid][today].reduce((s,x)=>s+x.amt,0);
      return reply("Spent: N"+amt.toLocaleString()+" on "+cat+"\nToday total: N"+total.toLocaleString());
    }
    const list=all2[uid]?.[today]||[];
    const total=list.reduce((s,x)=>s+x.amt,0);
    return reply("Today's Spending\n\n"+list.map(x=>"  "+x.cat+": N"+x.amt+(x.note?" ("+x.note+")":"")).join("\n")||"Nothing spent.\n"+pfx+"spent 2000 food lunch"+("\n\nTotal: N"+total.toLocaleString()));
  }
};
