// @marketplace loan-repayment-schedule v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_loan_repayment_schedule.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"LoanRepaySchedule",category:"finance",desc:"Generate full loan repayment schedule",command:["loanschedule","repaymentschedule"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const principal=parseFloat(args[0]),rate=parseFloat(args[1]),months=parseInt(args[2]);if([principal,rate,months].some(isNaN))return reply("Usage: "+pfx+"loanschedule <amount> <rate%> <months>\nExample: "+pfx+"loanschedule 500000 18 12");const monthlyRate=rate/12/100;const payment=principal*monthlyRate*Math.pow(1+monthlyRate,months)/(Math.pow(1+monthlyRate,months)-1);const lines=["Repayment Schedule","Loan: N"+principal.toLocaleString()+" | "+rate+"% | "+months+" months","Monthly: N"+payment.toLocaleString(undefined,{maximumFractionDigits:0}),""];let balance=principal;for(let i=1;i<=Math.min(months,6);i++){const interest=balance*monthlyRate;const prinPaid=payment-interest;balance-=prinPaid;lines.push("Month "+i+": N"+payment.toLocaleString(undefined,{maximumFractionDigits:0})+" (balance: N"+balance.toLocaleString(undefined,{maximumFractionDigits:0})+")");};if(months>6)lines.push("...("+( months-6)+" more months)");return reply(lines.join("\n"));
  }
};
