"use strict";
const fs=require("fs"),path=require("path");
const DB=path.join(__dirname,"../../..","database","todos.json");
const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"TodoList",category:"productivity",desc:"Personal to-do list with priorities and completion tracking",
  command:["todo","addtodo","donetodo","todos","cleartodos","deletetodo"],
  run:async({args,command,userId,reply,prefix})=>{
    const pfx=prefix||"/",all=load();
    if(!all[userId])all[userId]={todos:[],counter:0};
    const d=all[userId];
    if(command==="addtodo"||command==="todo"&&args.length>0){
      const text=args.join(" ").trim();
      const priority=text.startsWith("!")?"high":text.startsWith("~")?"low":"normal";
      const cleanText=text.replace(/^[!~]/,"").trim();
      if(!cleanText) return reply("Usage: "+pfx+"addtodo <task>\n! = high priority, ~ = low priority\nExample: "+pfx+"addtodo !Submit report by Friday");
      d.counter=(d.counter||0)+1;
      const id=d.counter;
      d.todos.push({id,text:cleanText,priority,done:false,createdAt:new Date().toLocaleDateString()});
      save(all);
      const icon={high:"🔴",normal:"🟡",low:"🟢"}[priority];
      return reply("✅ Added: "+icon+" *"+cleanText+"*\n\n"+pfx+"todos — see your list");
    }
    if(command==="todos"||command==="todo"){
      const pending=d.todos.filter(t=>!t.done);
      const done=d.todos.filter(t=>t.done).length;
      if(!pending.length) return reply("✅ No pending tasks!"+( done>0?" ("+done+" completed)":"")+"\n\n"+pfx+"addtodo <task> to add one.");
      const icons={high:"🔴",normal:"🟡",low:"🟢"};
      const high=pending.filter(t=>t.priority==="high");
      const normal=pending.filter(t=>t.priority==="normal");
      const low=pending.filter(t=>t.priority==="low");
      const lines=["📋 *To-Do List* ("+pending.length+" pending)\n"];
      if(high.length){lines.push("🔴 *High Priority:*");high.forEach(t=>lines.push("  "+t.id+". "+t.text));}
      if(normal.length){lines.push("🟡 *Normal:*");normal.forEach(t=>lines.push("  "+t.id+". "+t.text));}
      if(low.length){lines.push("🟢 *Low Priority:*");low.forEach(t=>lines.push("  "+t.id+". "+t.text));}
      lines.push("\n_"+pfx+"donetodo <#> | "+pfx+"addtodo !task_");
      return reply(lines.join("\n"));
    }
    if(command==="donetodo"){
      const id=parseInt(args[0]);
      const task=d.todos.find(t=>t.id===id);
      if(!task) return reply("Task #"+id+" not found.\n"+pfx+"todos to see your list.");
      task.done=true;task.completedAt=new Date().toLocaleDateString();save(all);
      const remaining=d.todos.filter(t=>!t.done).length;
      return reply("✅ *Done:* "+task.text+"\n\n📊 "+remaining+" task(s) remaining.");
    }
    if(command==="deletetodo"){
      const id=parseInt(args[0]);
      d.todos=d.todos.filter(t=>t.id!==id);save(all);
      return reply("🗑️ Task #"+id+" deleted.");
    }
    if(command==="cleartodos"){
      d.todos=[];save(all);return reply("🗑️ All tasks cleared.");
    }
  }
};
