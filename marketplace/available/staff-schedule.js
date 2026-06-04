// @marketplace staff-schedule v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_staff_schedule.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"StaffSchedule",category:"business",desc:"Manage staff work schedules",
  command:["staffschedule","workroster","addshift"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[chat])all2[chat]={shifts:[]};const d=all2[chat];
    if(command==='addshift'){const name=args[0],day=args[1],time=args[2]||'9am-5pm';if(!name||!day)return reply("Usage: "+pfx+"addshift <name> <day> [hours]\nExample: "+pfx+"addshift John Monday 8am-4pm");d.shifts.push({name,day,time,added:new Date().toLocaleDateString()});_sv(all2);return reply("Shift added: "+name+" — "+day+" "+time);}
    if(!d.shifts.length)return reply("No shifts.\n"+pfx+"addshift John Monday 8am-4pm");
    const today=new Date().toLocaleDateString('en-US',{weekday:'long'});
    const todayShifts=d.shifts.filter(s=>s.day.toLowerCase()===today.toLowerCase());
    return reply("Work Roster\n\nToday ("+today+"):\n"+(todayShifts.map(s=>"  "+s.name+": "+s.time).join("\n")||"No shifts today")+"\n\nThis week:\n"+d.shifts.map(s=>"  "+s.day+": "+s.name+" ("+s.time+")").join("\n"));
  }
};
