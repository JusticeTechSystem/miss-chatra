// @marketplace weekly-planner v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_weekly_planner.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"WeeklyPlanner",category:"productivity",desc:"Plan the entire week ahead",command:["weekplan","planweek","weeklyplan"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[uid])all2[uid]={};const week=new Date().toISOString().split('T')[0].slice(0,7);if(!all2[uid][week])all2[uid][week]={};if(args.length>=2){const day=args[0].toLowerCase(),task=args.slice(1).join(' ');if(!all2[uid][week][day])all2[uid][week][day]=[];all2[uid][week][day].push(task);_sv(all2);return reply("Added to "+day+": "+task);}const days=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];const plan=days.map(d=>"📅 *"+d.toUpperCase()+"*\n"+(all2[uid][week]?.[d]?.map((t,i)=>"  "+(i+1)+". "+t).join("\n")||"  (empty)")).join("\n\n");return reply("Weekly Plan — "+week+"\n\n"+plan+"\n\n"+pfx+"weekplan monday 'Team meeting 10am'");
  }
};
