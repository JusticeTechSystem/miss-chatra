// @marketplace break-even v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "BreakEven", category: "finance", desc: "Calculate break-even point for a product",
  command: ["breakeven","breakevenpoint"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fixed=parseFloat(args[0]),price=parseFloat(args[1]),cost=parseFloat(args[2]);
    if([fixed,price,cost].some(isNaN)) return reply("Usage: "+pfx+"breakeven <fixed costs> <selling price> <variable cost>\nExample: "+pfx+"breakeven 500000 15000 8000");
    const margin=price-cost;
    if(margin<=0) return reply("Selling price must be higher than variable cost.");
    const units=Math.ceil(fixed/margin);
    const revenue=units*price;
    return reply("Break-Even Analysis\n\nFixed Costs: N"+fixed.toLocaleString()+"\nSelling Price: N"+price.toLocaleString()+"\nVariable Cost: N"+cost.toLocaleString()+"\nContribution Margin: N"+margin.toLocaleString()+"\n\nBreak-Even Units: "+units.toLocaleString()+"\nBreak-Even Revenue: N"+revenue.toLocaleString());
  }
};
