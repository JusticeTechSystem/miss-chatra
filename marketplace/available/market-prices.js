// @marketplace market-prices v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MarketPrices", category: "nigerian", desc: "Check Nigerian market prices",
  command: ["marketprice","foodprice","pricecheck2"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const PRICES={'Rice (50kg bag)':['N22,000-28,000','Varies by brand and location'],'Tomatoes (basket)':['N3,000-6,000','Depends on season'],'Palm oil (tin)':['N3,500-5,000','Usually N80-100/cl'],'Garri (derica)':['N800-1,200','Cassava-based staple'],'Beef (1kg)':['N2,500-4,000','Cow meat'],'Chicken (1kg)':['N2,000-3,500','Broiler chicken'],'Onion (bag)':['N8,000-15,000','Seasonal variation'],'Yam (tuber)':['N1,500-4,000','Size dependent'],'Fish (croaker 1kg)':['N2,500-4,000','Fresh vs frozen varies'],'Eggs (crate)':['N2,500-3,500','30 eggs per crate']};
    const query=(args[0]||'').toLowerCase();
    if(query){
      const match=Object.entries(PRICES).find(([k])=>k.toLowerCase().includes(query));
      if(match) return reply(""+match[0]+"\nPrice: "+match[1][0]+"\nNote: "+match[1][1]+"\n\nPrices vary by location and season.");
      return reply("Item not found.\nKnown: "+Object.keys(PRICES).map(k=>k.split('(')[0].trim()).join(', '));
    }
    return reply("Nigerian Market Prices (Approximate)\n\n"+Object.entries(PRICES).slice(0,6).map(([k,v])=>k+": "+v[0]).join("\n")+"\n\nPrices updated periodically.\n"+pfx+"marketprice rice — specific item");
  }
};
