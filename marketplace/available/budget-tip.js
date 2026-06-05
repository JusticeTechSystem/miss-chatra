// @marketplace budget-tip v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_budget_tip.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"BudgetTip",category:"finance",desc:"Daily budget and money saving tips",command:["budgettip","moneytip2"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const T=["50/30/20 rule: 50% needs, 30% wants, 20% savings","Pay off high-interest debt first — it's losing you money","Automate your savings so it happens before you can spend","Shop with a list — impulse buying destroys budgets","Buy in bulk for non-perishable items you always use","Make coffee at home — N500/day = N15,000/month = N180,000/year","Review and cancel unused subscriptions monthly","Cook at home — eating out costs 3-5x more","Set spending limits by category before the month starts","Negotiate your bills — internet, insurance, everything is negotiable"];return reply("💰 Budget Tip\n\n"+T[Math.floor(Math.random()*T.length)]+"\n\n/moneytip2 for another tip");
  }
};
