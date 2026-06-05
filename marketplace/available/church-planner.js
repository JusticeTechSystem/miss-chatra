// @marketplace church-planner v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ChurchPlanner", category: "spiritual",
  desc: "Church event and ministry planning tools",
  command: ["church", "ministry", "churchevent", "churchplan", "sundayprep"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","church.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={events:[],roster:{},counter:0};
    const d=all[chatId];
    if(command==="churchevent"){
      const title=args.join(" ").trim();
      if(!title) return reply("Usage: "+pfx+"churchevent Sunday Service\nExample: "+pfx+"churchevent Youth Convention 2026");
      d.counter=(d.counter||0)+1;
      const id="CE-"+String(d.counter).padStart(3,"0");
      d.events.push({id,title,date:new Date().toLocaleDateString(),coordinator:m?.pushName||"Admin",tasks:[],status:"upcoming"});
      save(all);
      return reply("✝️ *Church Event Created: "+id+"*\n\n📌 "+title+"\n\nAdd tasks: "+pfx+"sundayprep "+id+" Prepare worship songs");
    }
    if(command==="sundayprep"){
      const id=(args[0]||"").toUpperCase();
      const task=args.slice(1).join(" ");
      const event=d.events.find(e=>e.id===id)||d.events[d.events.length-1];
      if(!event) return reply("No events. Create one: "+pfx+"churchevent Sunday Service");
      if(task){event.tasks.push({task,assignedTo:m?.pushName,done:false});save(all);}
      const lines=["✝️ *"+event.title+"*\n"];
      event.tasks.forEach((t,i)=>lines.push((t.done?"✅":"⬜")+" "+(i+1)+". "+t.task+(t.assignedTo?" ("+t.assignedTo+")":"")));
      if(!event.tasks.length) lines.push("No tasks yet.");
      lines.push("\n"+pfx+"sundayprep "+event.id+" <task> — add task");
      return reply(lines.join("\n"));
    }
    return reply("✝️ *Church Planner*\n\n"+pfx+"churchevent <title> — Create event\n"+pfx+"sundayprep <id> <task> — Add preparation task\n"+pfx+"church — View events");
  }
};
