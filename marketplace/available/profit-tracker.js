// @marketplace profit-tracker v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_profit_tracker.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"ProfitTracker",category:"business",desc:"Daily profit and loss tracker",
  command:["profittrack","dailyprofit","revenuelog"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const today=new Date().toDateString();const all2=_ld();if(!all2[chat])all2[chat]={};if(!all2[chat][today])all2[chat][today]={income:0,expenses:0,log:[]};const d=all2[chat][today];
    if(args[0]==='income'){const amt=parseFloat(args[1]),note=args.slice(2).join(' ')||'Sale';if(isNaN(amt))return reply("Usage: "+pfx+"profittrack income 5000 'Product sale'");d.income+=amt;d.log.push({type:'income',amt,note});_sv(all2);return reply("Income: +N"+amt.toLocaleString()+"\nToday income: N"+d.income.toLocaleString());}
    if(args[0]==='expense'){const amt=parseFloat(args[1]),note=args.slice(2).join(' ')||'Expense';if(isNaN(amt))return reply("Usage: "+pfx+"profittrack expense 1000 'Transport'");d.expenses+=amt;d.log.push({type:'expense',amt,note});_sv(all2);return reply("Expense: -N"+amt.toLocaleString()+"\nToday expenses: N"+d.expenses.toLocaleString());}
    const profit=d.income-d.expenses;
    return reply("Today's P&L\n\n💰 Income: N"+d.income.toLocaleString()+"\n💸 Expenses: N"+d.expenses.toLocaleString()+"\n\n"+(profit>=0?"✅ Profit":"❌ Loss")+": N"+Math.abs(profit).toLocaleString()+"\n\nLog:\n"+d.log.slice(-5).map(l=>(l.type==='income'?'+':'-')+'N'+l.amt+' '+l.note).join("\n"));
  }
};
