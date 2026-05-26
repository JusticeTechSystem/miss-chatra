// @marketplace insurance-calc v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "InsuranceCalc", category: "finance", desc: "Calculate insurance premium estimates",
  command: ["insurance","insure","premiumcalc"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const type=(args[0]||'life').toLowerCase(),value=parseFloat(args[1]);
    if(isNaN(value)) return reply("Usage: "+pfx+"insurance <type> <value>\nTypes: life, car, health, property\nExample: "+pfx+"insurance car 5000000");
    const rates={life:0.005,car:0.03,health:0.04,property:0.01};
    const rate=rates[type]||0.02;
    const annual=value*rate;
    return reply("Insurance Estimate\n\nType: "+type.toUpperCase()+"\nValue: N"+value.toLocaleString()+"\nEstimated Annual Premium: N"+annual.toLocaleString()+"\nEstimated Monthly: N"+(annual/12).toLocaleString(undefined,{maximumFractionDigits:0})+"\n\nGet actual quotes from:\nAXA Mansard, Leadway, AIG Nigeria");
  }
};
