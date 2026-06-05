// @marketplace class-register v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_class_register.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"ClassRegister",category:"education",desc:"Digital class attendance register",
  command:["classregister","classattend","rollcall"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    if(!canUse)return reply("Admin only.");
    const date=new Date().toLocaleDateString();
    if(args[0]==='here'||command==='rollcall'){
      if(!gs.register)gs.register={};if(!gs.register[date])gs.register[date]=[];
      if(!gs.register[date].includes(norm(uid))){gs.register[date].push(norm(uid));save(gs);}
      return reply("Marked present: +"+norm(uid)+"\n\nPresent today: "+gs.register[date].length);
    }
    if(!gs.register?.[date])return reply("No attendance today.\nStart: "+pfx+"rollcall");
    return reply("Class Register — "+date+"\n\nPresent ("+gs.register[date].length+"):\n"+gs.register[date].map(n=>"+"+n).join("\n"));
  }
};
