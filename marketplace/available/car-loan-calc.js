// @marketplace car-loan-calc v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_car_loan_calc.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"CarLoanCalc",category:"finance",desc:"Calculate car loan payment and total cost",
  command:["carloan","autocredit","vehicleloan"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const price=parseFloat(args[0]),down=parseFloat(args[1])||20,rate=parseFloat(args[2])||24,years=parseFloat(args[3])||3;
    if(isNaN(price))return reply("Usage: "+pfx+"carloan <price> [down%] [rate%] [years]\nExample: "+pfx+"carloan 5000000 20 24 3");
    const principal=price*(1-down/100);
    const monthly=rate/12/100;const n=years*12;
    const payment=principal*monthly*Math.pow(1+monthly,n)/(Math.pow(1+monthly,n)-1);
    const total=payment*n;const interest=total-principal;
    return reply("Car Loan Calculator\n\nCar Price: N"+price.toLocaleString()+"\nDown ("+down+"%): N"+(price*down/100).toLocaleString()+"\nLoan: N"+principal.toLocaleString()+"\nRate: "+rate+"%pa for "+years+" years\n\nMonthly: N"+payment.toLocaleString(undefined,{maximumFractionDigits:0})+"\nTotal: N"+total.toLocaleString(undefined,{maximumFractionDigits:0})+"\nInterest: N"+interest.toLocaleString(undefined,{maximumFractionDigits:0}));
  }
};
