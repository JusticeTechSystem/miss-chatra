// @marketplace event-planner v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "EventPlanner", category: "social",
  desc: "Plan and manage events with RSVPs",
  command: ["event2", "rsvp", "eventplan", "eventguests", "createevent"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","events2.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={events:[],counter:0};
    const d=all[chatId];
    if(command==="createevent"){
      if(!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
      const date=args[0];const title=args.slice(1).join(" ")||"Group Event";
      d.counter=(d.counter||0)+1;
      const id="EV-"+String(d.counter).padStart(3,"0");
      d.events.push({id,title,date,rsvps:{yes:[],no:[],maybe:[]},createdBy:m?.pushName});save(all);
      return reply("🎉 *Event Created: "+id+"*\n\n📌 "+title+"\n📅 Date: "+date+"\n\nRSVP:\n✅ "+pfx+"rsvp "+id+" yes\n❌ "+pfx+"rsvp "+id+" no\n🤔 "+pfx+"rsvp "+id+" maybe");
    }
    if(command==="rsvp"){
      const id=(args[0]||"").toUpperCase(),response=(args[1]||"yes").toLowerCase();
      const event=d.events.find(e=>e.id===id)||d.events[d.events.length-1];
      if(!event) return reply("Event not found: "+id+"\n"+pfx+"eventguests to see events");
      const name=m?.pushName||"Member";
      ["yes","no","maybe"].forEach(r=>{event.rsvps[r]=event.rsvps[r].filter(p=>p.id!==userId);});
      if(["yes","no","maybe"].includes(response)) event.rsvps[response].push({id:userId,name});
      save(all);
      const total=event.rsvps.yes.length+event.rsvps.no.length+event.rsvps.maybe.length;
      return reply("✅ RSVP recorded!\n\n📌 "+event.title+"\n\nYou responded: *"+response.toUpperCase()+"*\n\n👥 Total RSVPs: "+total);
    }
    if(command==="eventguests"){
      const events=d.events;
      if(!events.length) return reply("No events. "+pfx+"createevent 2026-04-15 Birthday Party (Admin)");
      const event=d.events[d.events.length-1];
      return reply("📋 *"+event.title+"*\n📅 "+event.date+"\n\n✅ Going: "+event.rsvps.yes.length+"\n❌ Not Going: "+event.rsvps.no.length+"\n🤔 Maybe: "+event.rsvps.maybe.length+"\n\nNames:\n✅ "+event.rsvps.yes.map(p=>p.name).join(", ")||"None");
    }
  }
};
