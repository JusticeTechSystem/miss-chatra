// @marketplace meeting-notes v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MeetingNotes", category: "business",
  desc: "Record and share meeting notes",
  command: ["meeting", "meetingnotes", "minutes", "meetingsummary"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","meetings.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={meetings:[],counter:0};
    const d=all[chatId];
    if(command==="meeting"&&args.length){
      d.counter=(d.counter||0)+1;
      const id="MTG-"+String(d.counter).padStart(3,"0");
      const title=args.join(" ");
      d.meetings.push({id,title,notes:[],attendees:[],date:new Date().toLocaleDateString(),status:"open",createdBy:m?.pushName||"Admin"});
      save(all);
      return reply("📋 *Meeting Started: "+id+"*\n\n📌 "+title+"\n📅 "+new Date().toLocaleDateString()+"\n\nAdd notes: "+pfx+"meetingnotes "+id+" <note>\nEnd meeting: "+pfx+"meetingsummary "+id);
    }
    if(command==="meetingnotes"){
      const id=(args[0]||"").toUpperCase();
      const note=args.slice(1).join(" ");
      const mtg=d.meetings.find(m=>m.id===id);
      if(!mtg) return reply("Meeting not found: "+id);
      if(!note) return reply("Usage: "+pfx+"meetingnotes "+id+" <your note>");
      mtg.notes.push({text:note,by:m?.pushName||"Member",time:new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})});
      save(all);
      return reply("✅ Note added to "+id+"\n\n📝 "+note);
    }
    if(command==="meetingsummary"){
      const id=(args[0]||"").toUpperCase();
      const mtg=d.meetings.find(m=>m.id===id)||d.meetings[d.meetings.length-1];
      if(!mtg) return reply("No meetings recorded.");
      const lines=["📋 *Meeting Summary: "+mtg.id+"*","📌 "+mtg.title,"📅 "+mtg.date,""];
      if(mtg.notes.length){lines.push("📝 *Notes:*");mtg.notes.forEach((n,i)=>lines.push("  "+(i+1)+". "+n.text+" ("+n.by+")"));}
      else lines.push("No notes recorded.");
      return reply(lines.join("\n"));
    }
    const recent=d.meetings.slice(-3);
    if(!recent.length) return reply("No meetings.\n"+pfx+"meeting Team Standup — start a meeting");
    const lines=["📋 *Recent Meetings*\n"];
    recent.forEach(m=>lines.push("📌 *"+m.id+"* — "+m.title+"\n   📅 "+m.date+" | "+m.notes.length+" notes"));
    return reply(lines.join("\n"));
  }
};
