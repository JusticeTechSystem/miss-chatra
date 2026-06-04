// @marketplace group-goals v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_group_goals.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"GroupGoals",category:"admin",desc:"Set group-wide goals and track progress",command:["groupgoal","setgroupgoal","groupgoaltrack"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    if(command==='setgroupgoal'&&canUse){const goal=args.join(' ');if(!goal)return reply("Usage: "+pfx+"setgroupgoal Reach 500 members by June");gs.group_goal=goal;gs.goal_date=new Date().toLocaleDateString();save(gs);return reply("Group goal set:\n\n"+goal);}if(gs.group_goal){try{const meta=await sock.groupMetadata(chat);return reply("Group Goal\n\n📌 "+gs.group_goal+"\nSet: "+gs.goal_date+"\n\nCurrent: "+meta.participants.length+" members");}catch{return reply("Group Goal: "+gs.group_goal);}}return reply("No group goal set.\nAdmins: "+pfx+"setgroupgoal <goal>");
  }
};
