// @marketplace naija-slang-test v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_naija_slang_test.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"NaijaSlangTest",category:"nigerian",desc:"Test your Nigerian slang knowledge",command:["slangttest","naijaslantest","pidgintest"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const Q=[{q:"What does 'Omo' mean?",a:"wow or exclamation"},{q:"What does 'Sapa' mean?",a:"being broke or poor"},{q:"What does 'Japa' mean?",a:"to run or emigrate"},{q:"What does 'Pepper them' mean?",a:"to show off or make others jealous"},{q:"What does 'Gbas gbos' mean?",a:"argument or fight"},{q:"What does 'Shakara' mean?",a:"showing off or being dramatic"}];const G=global.__nsl=global.__nsl||{};const key=chat+'_nsl_'+uid;const q=Q[Math.floor(Math.random()*Q.length)];G[key]={answer:q.a.toLowerCase()};return reply("Naija Slang Test!\n\n"+q.q+"\n\nType your answer!");
  }
};
