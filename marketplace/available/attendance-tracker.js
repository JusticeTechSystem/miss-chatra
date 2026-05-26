// @marketplace attendance-tracker v1.0.0 by JusticeTech
"use strict";
const fs=require("fs"),path=require("path");
const DB=path.join(__dirname,"../../..","database","attendance.json");
const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"AttendanceTracker",category:"business",desc:"Track member attendance for meetings and events",
  command:["attend","absent","attendance","attreport","attreset","checkin","checkout"],
  run:async({args,command,chatId,userId,reply,prefix,m,isAdmin,isOwner,isDev})=>{
    const pfx=prefix||"/",all=load(),chat=chatId;
    if(!all[chat])all[chat]={sessions:{},current:null};
    const d=all[chat];
    const name=m?.pushName||userId?.split("@")[0]||"Member";
    const today=new Date().toLocaleDateString();
    if(command==="checkin"||command==="attend"){
      if(!d.sessions[today])d.sessions[today]={present:[],absent:[],date:today};
      const already=d.sessions[today].present.find(p=>p.id===userId);
      if(already) return reply("✅ You already checked in today at "+already.time);
      d.sessions[today].present.push({id:userId,name,time:new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})});
      save(all);
      return reply("✅ *Checked In!*\n\n👤 "+name+"\n🕐 Time: "+new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})+"\n📅 Date: "+today+"\n\n👥 Present today: "+d.sessions[today].present.length);
    }
    if(command==="attendance"){
      const sess=d.sessions[today];
      if(!sess||!sess.present.length) return reply("No attendance recorded today.\nType "+pfx+"checkin to check in.");
      const lines=["📋 *Attendance — "+today+"*\n","✅ Present ("+sess.present.length+"):"];
      sess.present.forEach((p,i)=>lines.push("  "+(i+1)+". "+p.name+" — "+p.time));
      return reply(lines.join("\n"));
    }
    if(command==="attreport"){
      const sessions=Object.values(d.sessions);
      if(!sessions.length) return reply("No attendance records yet.");
      const lines=["📊 *Attendance Report*\n"];
      sessions.slice(-7).forEach(s=>lines.push("📅 "+s.date+": ✅ "+s.present.length+" present"));
      return reply(lines.join("\n"));
    }
    if(command==="attreset"){
      if(!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
      delete d.sessions[today];save(all);
      return reply("✅ Today's attendance reset.");
    }
  }
};
