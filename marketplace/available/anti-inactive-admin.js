// @marketplace anti-inactive-admin v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_anti_inactive_admin.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"AntiInactiveAdmin",category:"moderation",desc:"Demote admins who are inactive",command:["antiinactiveadmin","autodeadmin","inactiveadmin"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    if(!canUse)return reply("Admin only.");const days=parseInt(args[0])||30;try{const meta=await sock.groupMetadata(chat);const state=require("../../../library/state").getState();const counts=state.user_message_counts?.[chat]||{};const admins=meta.participants.filter(p=>p.admin==='admin');const inactive=admins.filter(a=>{const data=counts[a.id];return !data||Date.now()-(data.last_msg||0)>days*86400000;});if(!inactive.length)return reply("All admins are active in the last "+days+" days.");return reply("Inactive Admins ("+days+"+ days silent):\n\n"+inactive.map(a=>"+"+norm(a.id)).join("\n")+"\n\n/demote @user to remove admin status");}catch(e){return reply("Error: "+e.message);}  
  }
};
