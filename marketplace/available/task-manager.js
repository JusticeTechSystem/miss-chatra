// @marketplace task-manager v1.0.0 by JusticeTech
"use strict";
const fs=require("fs"),path=require("path");
const DB=path.join(__dirname,"../../..","database","tasks.json");
const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"TaskManager",category:"business",desc:"Assign and track tasks with deadlines and status updates",
  command:["task","tasks","donetask","deletetask","tasklist","mytasks"],
  run:async({args,command,chatId,userId,reply,prefix,m,mentionedJid,isAdmin,isOwner,isDev})=>{
    const pfx=prefix||"/",all=load(),chat=chatId;
    if(!all[chat])all[chat]={tasks:[],counter:0};
    const d=all[chat];
    const name=m?.pushName||userId?.split("@")[0]||"Member";
    if(command==="task"){
      const assignTo=mentionedJid?.[0]||userId;
      const taskText=args.filter(a=>!a.startsWith("@")).join(" ").trim();
      if(!taskText) return reply("Usage: "+pfx+"task @user <task description>\nExample: "+pfx+"task @user Submit the report by Friday");
      d.counter=(d.counter||0)+1;
      const id="T-"+String(d.counter).padStart(3,"0");
      d.tasks.push({id,text:taskText,assignedTo:assignTo,assignedBy:userId,assignedByName:name,status:"pending",createdAt:new Date().toLocaleDateString()});
      save(all);
      const assigneeName=assignTo.split("@")[0];
      try{await require("../../../").sendMessage&&null;}catch{}
      return reply("✅ *Task Assigned*\n\n🆔 "+id+"\n📝 "+taskText+"\n👤 Assigned to: @"+assigneeName+"\n📅 Created: "+new Date().toLocaleDateString()+"\n\nMark done: "+pfx+"donetask "+id);
    }
    if(command==="mytasks"){
      const mine=d.tasks.filter(t=>t.assignedTo===userId&&t.status!=="done");
      if(!mine.length) return reply("✅ You have no pending tasks!");
      const lines=["📋 *Your Tasks*\n"];
      mine.forEach(t=>lines.push("🆔 *"+t.id+"* — "+t.status.toUpperCase()+"\n   "+t.text+"\n   📅 "+t.createdAt));
      lines.push("\n_"+pfx+"donetask <id> to complete_");
      return reply(lines.join("\n"));
    }
    if(command==="tasklist"){
      const pending=d.tasks.filter(t=>t.status==="pending");
      if(!pending.length) return reply("✅ No pending tasks in this group!");
      const lines=["📋 *All Pending Tasks ("+pending.length+")*\n"];
      pending.forEach(t=>lines.push("🆔 *"+t.id+"* → @"+t.assignedTo.split("@")[0]+"\n   "+t.text));
      return reply(lines.join("\n"));
    }
    if(command==="donetask"){
      const id=args[0]?.toUpperCase();
      const task=d.tasks.find(t=>t.id===id);
      if(!task) return reply("Task not found: "+id+"\nUse "+pfx+"tasklist to see all tasks.");
      task.status="done";task.completedAt=new Date().toLocaleDateString();save(all);
      return reply("🎉 *Task Completed!*\n\n🆔 "+id+"\n📝 "+task.text+"\n✅ Completed on "+task.completedAt);
    }
    if(command==="deletetask"){
      if(!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
      const id=args[0]?.toUpperCase();
      d.tasks=d.tasks.filter(t=>t.id!==id);save(all);
      return reply("🗑️ Task "+id+" deleted.");
    }
  }
};
