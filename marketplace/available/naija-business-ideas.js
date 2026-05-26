// @marketplace naija-business-ideas v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "NaijaBizIdeas", category: "nigerian", desc: "Business ideas for the Nigerian market",
  command: ["businessideas","nigerianbiz","startupidea","naijabiz"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const IDEAS=[{idea:'POS Business',capital:'N150,000-300,000',potential:'N80,000-200,000/month',tip:'Best in areas with poor bank access. Partner with GTBank or Opay.'},{ idea:'Foodstuff Retail',capital:'N200,000-500,000',potential:'N100,000-400,000/month',tip:'Fresh produce delivery is trending. Add WhatsApp ordering.'},{ idea:'Mini Importation',capital:'N100,000-500,000',potential:'N200,000-1,000,000/month',tip:'Source from China via Alibaba. Use Jumia or Instagram to sell.'},{ idea:'Car Wash Business',capital:'N300,000-1,000,000',potential:'N150,000-600,000/month',tip:'Location is everything. Near estate or office area is best.'},{ idea:'Content Creation',capital:'N100,000 (equipment)',potential:'N200,000-2,000,000+/month',tip:'Nigerian YouTube and TikTok markets are underserved. Start now.'},{ idea:'Event Decoration',capital:'N200,000',potential:'N150,000-500,000/event',tip:'Arch backdrops and balloon art are in high demand on weekends.'}];
    const idea=IDEAS[Math.floor(Math.random()*IDEAS.length)];
    return reply("Nigerian Business Idea!\n\n"+idea.idea+"\nStartup Capital: "+idea.capital+"\nMonthly Potential: "+idea.potential+"\n\nTip: "+idea.tip+"\n\n/naijabiz for another idea");
  }
};
