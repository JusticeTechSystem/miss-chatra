// @marketplace math-challenge v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_math_challenge.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"MathChallenge",category:"education",desc:"Daily math challenge problems",
  command:["mathchallenge","mathproblem","brainmath"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const PROBLEMS=[{q:"If a trader buys 50 bags of rice at N18,000 each and sells at N22,000, what is the total profit?",a:"200000",hint:"(Sell-Buy) × Quantity"},{q:"A classroom has 42 students. 18 are girls. What percentage are boys?",a:"57.14",hint:"(Boys/Total) × 100"},{q:"If 3x + 7 = 22, what is x?",a:"5",hint:"Subtract 7 from both sides, then divide by 3"},{q:"What is 15% of N120,000?",a:"18000",hint:"Multiply by 0.15 or by 15/100"},{q:"A rectangle is 12m long and 8m wide. What is the area?",a:"96",hint:"Area = Length × Width"}];
    const G=global.__mc=global.__mc||{};const key=chat+'_mc_'+uid;
    const p=PROBLEMS[Math.floor(Math.random()*PROBLEMS.length)];G[key]={answer:p.a,hint:p.hint};
    return reply("Math Challenge!\n\n"+p.q+"\n\nType your answer!\n_/mathchallenge hint for a clue_");
  }
};
