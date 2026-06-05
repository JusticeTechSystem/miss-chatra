// @marketplace trivia-marathon v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_trivia_marathon.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"TriviaMarathon",category:"games",desc:"Extended trivia marathon with scoring",
  command:["triviamarathon","longtrivia","marathonquiz"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const G=global.__tm=global.__tm||{};const key=chat+'_tm';
    const QS=[{q:"What is the capital of Germany?",a:"berlin"},{q:"Who invented the telephone?",a:"alexander graham bell"},{q:"What is the largest organ in the human body?",a:"skin"},{q:"How many sides does a hexagon have?",a:"6"},{q:"What is H2O?",a:"water"},{q:"In what country was football (soccer) invented?",a:"england"},{q:"What is the square root of 144?",a:"12"},{q:"Which planet has rings?",a:"saturn"}];
    if(!G[key]){G[key]={q:0,scores:{},active:true};const q=QS[0];G[key].current=q;return reply("Trivia Marathon Started!\n\nQuestion 1/"+QS.length+":\n\n"+q.q);}
    const ans=args.join(' ').toLowerCase();const curr=G[key].current;
    if(ans===curr.a){G[key].scores[norm(uid)]=(G[key].scores[norm(uid)]||0)+1;G[key].q++;
      if(G[key].q>=QS.length){const winner=Object.entries(G[key].scores).sort((a,b)=>b[1]-a[1])[0];delete G[key];return reply("Marathon Complete!\n\nWinner: +"+winner[0]+" with "+winner[1]+" points!");}
      G[key].current=QS[G[key].q];
      return reply("✅ Correct! +"+norm(uid)+" gets a point!\n\nQuestion "+(G[key].q+1)+"/"+QS.length+":\n\n"+G[key].current.q);
    }
    return reply("❌ Wrong! Try again.\n\nHint: First letter is '"+curr.a[0]+"'");
  }
};
