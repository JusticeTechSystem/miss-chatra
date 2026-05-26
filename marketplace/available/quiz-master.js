// @marketplace quiz-master v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_quiz_master.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"QuizMaster",category:"admin",desc:"Admin-controlled quiz session",command:["quizmaster","runquiz","hostquiz"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    if(!canUse)return reply("Admin only.");const G=global.__qm=global.__qm||{};const key=chat+'_qm';if(args[0]==='start'){G[key]={active:true,scores:{},round:0};return reply("Quiz Master Mode: ACTIVE!\n\nType: "+pfx+"quizmaster <question> | <answer>\nTo add a question and start the round!");}if(args[0]==='end'){const r=G[key];delete G[key];if(!r?.scores)return reply("No quiz active.");const top=Object.entries(r.scores).sort((a,b)=>b[1]-a[1]);return reply("Quiz Ended!\n\nFinal Scores:\n"+top.map(([n,s],i)=>(i+1)+". +"+n+": "+s+" points").join("\n"));}if(G[key]?.active&&args.includes('|')){const sep=args.indexOf('|');const q=args.slice(0,sep).join(' '),a=args.slice(sep+1).join(' ');G[key].current={q,a:a.toLowerCase(),started:Date.now()};return reply("❓ QUIZ QUESTION!\n\n"+q+"\n\nFirst correct answer wins a point!");}if(G[key]?.current){const ans=args.join(' ').toLowerCase();if(ans===G[key].current.a){G[key].scores[norm(uid)]=(G[key].scores[norm(uid)]||0)+1;const prev=G[key].current;G[key].current=null;return reply("✅ CORRECT! +"+norm(uid)+" gets a point!\n\nAnswer: "+prev.a+"\n\nScores: "+Object.entries(G[key].scores).map(([n,s])=>"+"+n+": "+s).join(", "));}return reply("❌ Wrong! Keep trying!");}return reply(G[key]?.active?"Quiz active!\nAdmin: "+pfx+"quizmaster <Q> | <A>":"No quiz active.\n"+pfx+"quizmaster start");
  }
};
