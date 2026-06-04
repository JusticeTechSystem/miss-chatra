// @marketplace inflation-calc v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "InflationCalc", category: "finance",
  desc: "Calculate inflation-adjusted value over time",
  command: ["inflation", "realvalue", "inflationcalc", "purchasingpower"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const amount=parseFloat(args[0]),years=parseFloat(args[1])||10,rate=parseFloat(args[2])||12;
    if(isNaN(amount)) return reply("Usage: "+pfx+"inflation <amount> [years] [inflation rate%]\nExample: "+pfx+"inflation 100000 10 12\n(Nigerian average inflation ~12% p.a.)");
    const future=amount*Math.pow(1+rate/100,years);
    const purchasing=amount/Math.pow(1+rate/100,years);
    return reply("📉 *Inflation Calculator*\n\n💰 Amount: ₦"+amount.toLocaleString()+"\n📊 Inflation Rate: "+rate+"% p.a.\n📅 Years: "+years+"\n\n*Future cost of same goods: ₦"+future.toLocaleString(undefined,{maximumFractionDigits:0})+"*\n*Today\'s ₦"+amount.toLocaleString()+" = ₦"+purchasing.toLocaleString(undefined,{maximumFractionDigits:0})+" purchasing power in "+years+" yrs*\n\n💡 This is why savings account interest must beat inflation!");
  }
};
