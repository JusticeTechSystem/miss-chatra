// @marketplace client-followup v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_client_followup.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"ClientFollowUp",category:"business",desc:"Track client follow-up schedule",
  command:["followup","clientfollowup","addfollow"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[uid])all2[uid]=[];
    if(command==='addfollow'&&args.length>=2){
      const name=args[0],date=args[1],note=args.slice(2).join(' ')||'';
      all2[uid].push({name,date,note,done:false,added:new Date().toLocaleDateString()});_sv(all2);
      return reply("Follow-up added!\n\nClient: "+name+"\nDate: "+date+(note?"\nNote: "+note:""));
    }
    const pending=all2[uid].filter(f=>!f.done);
    const today=new Date().toLocaleDateString();
    const todayDue=pending.filter(f=>f.date===today);
    if(todayDue.length)return reply("⚡ TODAY's Follow-ups!\n\n"+todayDue.map(f=>"  "+f.name+": "+f.note).join("\n")+("\n\nAll pending: "+pending.length));
    if(!pending.length)return reply("No pending follow-ups.\n"+pfx+"addfollow 'Mrs Kemi' 2026-03-25 'Send proposal'");
    return reply("Client Follow-ups\n\n"+pending.slice(0,10).map((f,i)=>(i+1)+". "+f.name+" — "+f.date+(f.note?" ("+f.note+")":"")).join("\n"));
  }
};
