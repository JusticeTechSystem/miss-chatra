// @marketplace study-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "StudyTracker", category: "productivity",
  desc: "Track study sessions and subjects",
  command: ["study", "studylog", "studystreak", "studystats", "studysession"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","study.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const active={};const all=load();if(!all[userId])all[userId]={sessions:[],totalHours:0};
    const key="study_"+userId;
    if(command==="studysession"||command==="study"&&args.length){
      const subject=args.join(" ")||"General Study";
      if(active[key]) return reply("⏱️ Already studying: "+active[key].subject+"\n"+pfx+"studylog to end session");
      active[key]={subject,start:Date.now()};
      return reply("📚 *Study Session Started*\n\n📖 Subject: "+subject+"\n⏰ Timer running...\n\n"+pfx+"studylog — end and log session");
    }
    if(command==="studylog"){
      if(!active[key]) return reply("No active session.\n"+pfx+"study Math — start a session");
      const{subject,start}=active[key];delete active[key];
      const mins=Math.floor((Date.now()-start)/60000);
      const hours=(mins/60).toFixed(2);
      all[userId].sessions.push({subject,mins,date:new Date().toLocaleDateString()});
      all[userId].totalHours=(parseFloat(all[userId].totalHours)||0)+parseFloat(hours);
      save(all);
      return reply("✅ *Study Session Complete!*\n\n📖 "+subject+"\n⏱️ Duration: "+mins+" minutes ("+hours+" hrs)\n\n📊 Total study time: "+all[userId].totalHours.toFixed(1)+" hours");
    }
    if(command==="studystats"){
      if(!all[userId].sessions.length) return reply("No study sessions yet.\n"+pfx+"study Math to start");
      const subjects={};
      all[userId].sessions.forEach(s=>{subjects[s.subject]=(subjects[s.subject]||0)+s.mins;});
      const lines=["📚 *Study Stats*\n"];
      Object.entries(subjects).sort((a,b)=>b[1]-a[1]).forEach(([s,m])=>lines.push("  📖 "+s+": "+Math.floor(m/60)+"h "+m%60+"m"));
      lines.push("\n⏱️ Total: "+all[userId].totalHours.toFixed(1)+" hours");
      return reply(lines.join("\n"));
    }
    return reply("📚 *Study Tracker*\n\n"+pfx+"study Math — start session\n"+pfx+"studylog — end session\n"+pfx+"studystats — view stats");
  }
};
