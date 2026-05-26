// @marketplace focus-block v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_focus_block.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"FocusBlock",category:"productivity",desc:"Deep work focus session manager",command:["focusblock","deepwork","startfocus"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const T=global.__fb=global.__fb||{};const key=chat+'_fb_'+uid;const mins=parseInt(args[0])||25;if(args[0]==='stop'){if(T[key]){clearTimeout(T[key].t);delete T[key];return reply("Focus session ended.");}return reply("No active session.");}if(T[key])return reply("Focus session active! "+pfx+"focusblock stop to end early.");const task=args.slice(1).join(' ')||'Focus session';T[key]={task,start:Date.now()};T[key].t=setTimeout(async()=>{delete T[key];try{await sock.sendMessage(chat,{text:"⏰ Focus block complete!\n\nTask: "+task+"\nDuration: "+mins+" minutes\n\nTake a 5 minute break then go again!"});}catch{}},mins*60000);return reply("🎯 Focus Block Started!\n\nTask: "+task+"\nDuration: "+mins+" minutes\n\nAll notifications mentally muted.\nDo your best work!");
  }
};
