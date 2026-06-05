// @marketplace rent-vs-buy v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "RentVsBuy", category: "finance", desc: "Compare renting vs buying property",
  command: ["rentvsbuy","rentorbuy","propertydecision"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const rent=parseFloat(args[0]),price=parseFloat(args[1]),rate=parseFloat(args[2])||15;
    if([rent,price].some(isNaN)) return reply("Usage: "+pfx+"rentvsbuy <monthly rent> <property price> [mortgage rate%]\nExample: "+pfx+"rentvsbuy 80000 15000000 15");
    const annual=rent*12;
    const yrs=(price/annual).toFixed(1);
    const mortgageMonthly=(price*(rate/12/100)*Math.pow(1+rate/12/100,240))/(Math.pow(1+rate/12/100,240)-1);
    const lines=["Rent vs Buy Analysis\n","Monthly Rent: N"+rent.toLocaleString(),"Annual Rent: N"+annual.toLocaleString(),"Property Price: N"+price.toLocaleString(),"","Rent payback period: "+yrs+" years","Monthly Mortgage (20yr @"+rate+"%): N"+mortgageMonthly.toLocaleString(undefined,{maximumFractionDigits:0}),"","Renting is cheaper monthly by: N"+(mortgageMonthly-rent).toLocaleString(undefined,{maximumFractionDigits:0}),"But buying builds equity over time."];
    return reply(lines.join("\n"));
  }
};
