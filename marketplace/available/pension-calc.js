// @marketplace pension-calc v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "PensionCalc", category: "finance", desc: "Calculate pension savings at retirement",
  command: ["pension","retirementnest"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const monthly=parseFloat(args[0]),years=parseFloat(args[1])||30,rate=parseFloat(args[2])||8;
    if(isNaN(monthly)) return reply("Usage: "+pfx+"pension <monthly contribution> <years> <annual return%>\nExample: "+pfx+"pension 20000 30 8");
    const r=rate/12/100,n=years*12;
    const fv=monthly*((Math.pow(1+r,n)-1)/r);
    return reply("Pension Projection\n\nMonthly: N"+monthly.toLocaleString()+"\nYears: "+years+"\nExpected Return: "+rate+"% p.a.\n\nEstimated Fund: N"+fv.toLocaleString(undefined,{maximumFractionDigits:0})+"\n\nStart early - time is your greatest asset!");
  }
};
