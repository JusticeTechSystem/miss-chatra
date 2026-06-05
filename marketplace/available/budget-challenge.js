// @marketplace budget-challenge v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_budget_challenge.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"BudgetChallenge",category:"lifestyle",desc:"Weekly money-saving challenges",
  command:["budgetchallenge","savechallenge","moneychallenge"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const CHALLENGES=["No-spend Monday: Buy absolutely nothing today","Cook at home all week — no food delivery","Cancel one subscription you barely use","Walk instead of taking a cab for one trip today","Pack lunch instead of buying food this week","For 3 days, only use cash — no card payments","Find 3 free alternatives to something you pay for","Delete all shopping apps for 1 week","Buy generic brands instead of premium for 1 week","Calculate what you spend on coffee/drinks monthly — reduce by half"];
    return reply("💰 Budget Challenge!\n\nThis week's challenge:\n\n*"+CHALLENGES[Math.floor(Math.random()*CHALLENGES.length)]+"*\n\nReport back in the group when you complete it!\n/savechallenge for another challenge");
  }
};
