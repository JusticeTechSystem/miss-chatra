// @marketplace debt-payoff v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "DebtPayoff", category: "finance", desc: "Plan debt payoff timeline",
  command: ["debtpayoff","debtfree","loanpayoff"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const balance=parseFloat(args[0]),rate=parseFloat(args[1]),payment=parseFloat(args[2]);
    if([balance,rate,payment].some(isNaN)) return reply("Usage: "+pfx+"debtpayoff <balance> <annual rate%> <monthly payment>\nExample: "+pfx+"debtpayoff 500000 24 25000");
    const monthly=rate/12/100;
    const months=Math.ceil(-Math.log(1-balance*monthly/payment)/Math.log(1+monthly));
    const total=payment*months;
    const interest=total-balance;
    return reply("Debt Payoff Plan\n\nBalance: N"+balance.toLocaleString()+"\nRate: "+rate+"%\nPayment: N"+payment.toLocaleString()+"/month\n\nPayoff Time: "+Math.floor(months/12)+"y "+( months%12)+"m\nTotal Paid: N"+total.toLocaleString(undefined,{maximumFractionDigits:0})+"\nTotal Interest: N"+interest.toLocaleString(undefined,{maximumFractionDigits:0}));
  }
};
