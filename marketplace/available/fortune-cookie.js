// @marketplace fortune-cookie v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "FortuneCookie", category: "entertainment", desc: "Get a fortune cookie message",
  command: ["fortune","fortunecookie","myfuture"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const FORTUNES=["A beautiful, smart, and loving person will be coming into your life.","Your hard work will soon pay off. Keep going.","The greatest risk is not taking one.","Today is the day you make changes that will transform your future.","Your kindness will be rewarded in unexpected ways.","An important decision is coming. Trust your instincts.","Something you have been working on is about to yield results.","Help someone today and your own path will become clearer.","The best investment you can make is in yourself.","A journey of a thousand miles begins with a single step. Yours begins today.","Opportunities multiply as they are seized.","The secret of getting ahead is getting started.","Your smile is your logo. Your personality is your business card.","Every master was once a disaster. Keep learning.","The future belongs to those who believe in the beauty of their dreams."];
    return reply("Fortune Cookie!\n\n"+FORTUNES[Math.floor(Math.random()*FORTUNES.length)]+"\n\n/fortune for another fortune");
  }
};
