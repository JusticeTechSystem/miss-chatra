// @marketplace homework-tracker v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_homework_tracker.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"HomeworkTracker",category:"education",desc:"Track homework assignments and deadlines",
  command:["homework","addhomework","homeworklist","donehomework"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[uid])all2[uid]=[];
    if(command==='addhomework'&&args.length){
      const subject=args[0],task=args.slice(1,-1).join(' ')||args.slice(1).join(' '),due=args[args.length-1];
      all2[uid].push({subject,task,due,done:false,added:new Date().toLocaleDateString()});_sv(all2);
      return reply("Homework added!\n\n📚 "+subject+"\n📝 "+task+"\n📅 Due: "+due);
    }
    if(command==='donehomework'&&args[0]){
      const idx=parseInt(args[0])-1;if(all2[uid][idx]){all2[uid][idx].done=true;_sv(all2);return reply("✅ Homework done: "+all2[uid][idx].subject+" - "+all2[uid][idx].task);}
      return reply("Not found. "+pfx+"homeworklist to see numbers.");
    }
    const pending=all2[uid].filter(h=>!h.done);
    if(!pending.length)return reply("No homework! 🎉\n"+pfx+"addhomework Math 'Chapter 5 exercises' 2026-03-20");
    return reply("Homework List\n\n"+pending.map((h,i)=>(i+1)+". ["+h.subject+"] "+h.task+"\n   Due: "+h.due).join("\n"));
  }
};
