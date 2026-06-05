// @marketplace message-templates v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_message_templates.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"MessageTemplates",category:"moderation",desc:"Save and send message templates",command:["msgtemplate","savetemplate","sendtemplate"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    if(!canUse)return reply("Admin only.");if(command==='savetemplate'){const name=args[0],text=args.slice(1).join(' ');if(!name||!text)return reply("Usage: "+pfx+"savetemplate <n> <message text>");if(!gs.templates)gs.templates={};gs.templates[name]=text;save(gs);return reply("Template saved: "+name);}if(command==='sendtemplate'){const name=args[0];const tmpl=(gs.templates||{})[name];if(!tmpl)return reply("Template not found: "+name+"\nSaved: "+Object.keys(gs.templates||{}).join(', '));await sock.sendMessage(chat,{text:tmpl});return;}const temps=Object.keys(gs.templates||{});return reply("Saved Templates ("+temps.length+"):\n"+(temps.join(', ')||"None")+"\n\n"+pfx+"savetemplate <n> <text>\n"+pfx+"sendtemplate <n>");
  }
};
