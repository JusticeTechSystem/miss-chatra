// @marketplace dentist-reminder v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_dentist_reminder.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"DentistReminder",category:"health",desc:"Schedule dental checkup reminders",
  command:["dental","dentist","toothreminder"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[uid])all2[uid]={lastVisit:null,nextDue:null};
    if(args[0]==='visited'){
      const date=args[1]||new Date().toLocaleDateString();
      const next=new Date(Date.now()+180*86400000).toLocaleDateString();
      all2[uid]={lastVisit:date,nextDue:next};_sv(all2);
      return reply("Dental visit logged: "+date+"\nNext checkup due: "+next+"\n\nTip: Floss daily, brush twice with fluoride toothpaste.");
    }
    if(all2[uid].nextDue){
      const next=new Date(all2[uid].nextDue);const days=Math.ceil((next-Date.now())/86400000);
      return reply("Dental Record\n\nLast visit: "+all2[uid].lastVisit+"\nNext due: "+all2[uid].nextDue+"\n\n"+(days<0?"OVERDUE by "+Math.abs(days)+" days!":days===0?"Due TODAY!":"Due in "+days+" days"));
    }
    return reply("No dental records.\n"+pfx+"dental visited 2026-03-01\nAim for checkups every 6 months.");
  }
};
