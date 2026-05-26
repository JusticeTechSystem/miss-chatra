// @marketplace loan-calculator v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"LoanCalculator",category:"finance",desc:"Calculate loan repayments, interest, and EMI",
  command:["loan","emi","loancalculator","interest"],
  run:async({args,command,reply,prefix})=>{
    const pfx=prefix||"/";
    if(command==="interest"){
      const [p,r,t]=args.map(parseFloat);
      if([p,r,t].some(isNaN)) return reply("Usage: "+pfx+"interest <principal> <rate%> <years>\nExample: "+pfx+"interest 100000 5 2");
      const simple=p*r*t/100;
      const compound=p*Math.pow(1+r/100,t)-p;
      return reply("📊 *Interest Calculator*\n\n💰 Principal: ₦"+p.toLocaleString()+"\n📈 Rate: "+r+"%\n📅 Time: "+t+" year(s)\n\n*Simple Interest: ₦"+simple.toLocaleString(undefined,{maximumFractionDigits:2})+"*\n*Compound Interest: ₦"+compound.toLocaleString(undefined,{maximumFractionDigits:2})+"*\n\nTotal (simple): ₦"+(p+simple).toLocaleString(undefined,{maximumFractionDigits:2})+"\nTotal (compound): ₦"+(p+compound).toLocaleString(undefined,{maximumFractionDigits:2}));
    }
    const [principal,rate,months]=args.map(parseFloat);
    if([principal,rate,months].some(isNaN)) return reply("Usage: "+pfx+"loan <amount> <annual rate%> <months>\nExample: "+pfx+"loan 500000 15 24");
    const monthlyRate=rate/12/100;
    const emi=monthlyRate===0?principal/months:principal*monthlyRate*Math.pow(1+monthlyRate,months)/(Math.pow(1+monthlyRate,months)-1);
    const totalPayment=emi*months;
    const totalInterest=totalPayment-principal;
    return reply(["🏦 *Loan Calculator*","","💰 Loan Amount: ₦"+principal.toLocaleString(),"📈 Annual Rate: "+rate+"%","📅 Duration: "+months+" months","","*💳 Monthly Payment: ₦"+emi.toLocaleString(undefined,{maximumFractionDigits:2})+"*","💵 Total Payment: ₦"+totalPayment.toLocaleString(undefined,{maximumFractionDigits:2}),"📊 Total Interest: ₦"+totalInterest.toLocaleString(undefined,{maximumFractionDigits:2})].join("\n"));
  }
};
