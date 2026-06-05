// @marketplace project-tracker v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_project_tracker.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"ProjectTracker",category:"productivity",desc:"Track multiple projects with status",command:["project","addproject","projects","projectdone"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[uid])all2[uid]={projects:[],counter:0};if(command==='addproject'){const name=args.join(' ');if(!name)return reply("Usage: "+pfx+"addproject <project name>");all2[uid].counter=(all2[uid].counter||0)+1;all2[uid].projects.push({id:"P"+all2[uid].counter,name,status:'active',progress:0,started:new Date().toLocaleDateString()});_sv(all2);return reply("Project created: P"+all2[uid].counter+" — "+name);}if(command==='projectdone'){const id=args[0]?.toUpperCase();const p=all2[uid].projects.find(x=>x.id===id);if(p){p.status='done';p.progress=100;_sv(all2);return reply("Project done: "+p.name+" 🎉");}return reply("Not found.");}const active=all2[uid].projects.filter(p=>p.status==='active');return reply("Projects ("+active.length+" active)\n\n"+active.map(p=>"  "+p.id+". "+p.name+" ("+p.progress+"%)").join("\n")||"No active projects.\n"+pfx+"addproject My Startup Website");
  }
};
