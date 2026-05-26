// @marketplace color-of-day v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ColorOfDay", category: "lifestyle", desc: "Get a random color inspiration for the day",
  command: ["colorofday","dailycolor","colorinspo"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const COLORS=[{name:'Royal Blue',hex:'#4169E1',meaning:'Trust, loyalty, and confidence. Wear it when you need to inspire trust.',vibe:'Professional and powerful'},{ name:'Emerald Green',hex:'#50C878',meaning:'Growth, health, and prosperity. Attracts abundance.',vibe:'Refreshing and hopeful'},{ name:'Warm Gold',hex:'#FFD700',meaning:'Success, wealth, and optimism. Great for important days.',vibe:'Confident and radiant'},{ name:'Deep Purple',hex:'#800080',meaning:'Creativity, wisdom, and mystery. For artists and thinkers.',vibe:'Mysterious and wise'},{ name:'Coral Orange',hex:'#FF6B6B',meaning:'Energy, enthusiasm, and joy. Perfect for social situations.',vibe:'Warm and inviting'},{ name:'Navy',hex:'#000080',meaning:'Authority, intelligence, and responsibility.',vibe:'Classic and authoritative'}];
    const c=COLORS[Math.floor(Math.random()*COLORS.length)];
    return reply("Color of the Day!\n\n"+c.name+" ("+c.hex+")\n\n"+c.meaning+"\n\nVibe: "+c.vibe+"\n/colorofday for another color");
  }
};
