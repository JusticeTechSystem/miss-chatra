// @marketplace exam-prep v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_exam_prep.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"ExamPrep",category:"education",desc:"Exam preparation checklist and study plan",
  command:["examprep","studyplan","prepexam"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const PLANS={1:["Collect all past questions","Make topic list","Identify weak areas"],3:["Start revision from hardest topics","20 pages of notes daily","Solve 10 past questions daily"],7:["Light revision of all topics","Focus on formulae and definitions","Rest well — at least 8 hours sleep"],14:["Create a study timetable","Study 4 hours daily","Group study 1-2x per week","Practice under timed conditions"]};
    const days=parseInt(args[0])||7;const plan=PLANS[days]||PLANS[7];
    return reply("Exam Prep Plan ("+days+" days out)\n\n"+plan.map((p,i)=>(i+1)+". "+p).join("\n")+"\n\nDays available: 1, 3, 7, 14");
  }
};
