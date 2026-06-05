// @marketplace money-mindset v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_money_mindset.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"MoneyMindset",category:"finance",desc:"Daily money mindset tips and wealth quotes",
  command:["moneymindset","wealthquote","moneyquote"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const TIPS=["Pay yourself first — save before you spend","Your network is your net worth in Nigeria","The best investment is in yourself","Multiple income streams protect against uncertainty","Track every naira — wealth is built in the details","Avoid lifestyle inflation when income increases","Invest in assets, not liabilities","Emergency fund first: 3-6 months of expenses","Compound interest is the 8th wonder of the world","Understand the difference between price and value","Time in the market beats timing the market","Cash flow is king in business","Good debt builds assets. Bad debt funds lifestyle","Negotiate everything — your salary, prices, rates","Financial literacy is the most important subject never taught"];
    return reply("💰 Money Mindset\n\n"+TIPS[Math.floor(Math.random()*TIPS.length)]);
  }
};
