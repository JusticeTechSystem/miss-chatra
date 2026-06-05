// @marketplace food-quiz v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "FoodQuiz", category: "games", desc: "Nigerian and international food quiz",
  command: ["foodquiz","guessthefood","culinaryquiz"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const Q=[{q:'What soup uses egusi (ground melon seeds) as a base?',a:'egusi soup'},{q:'What is jollof rice cooked in?',a:'tomato'},{q:'What country is suya originally from?',a:'nigeria'},{q:'What are akara made from?',a:'beans'},{q:'What is the main ingredient in banga soup?',a:'palm fruit'},{q:'What do you get when you pound yam?',a:'pounded yam'},{q:'What African country invented fufu?',a:'ghana'},{q:'What is the spice blend used in suya called?',a:'yaji'}];
    const G=global.__fq=global.__fq||{};const key=chatId+'_fq_'+userId;
    const q=Q[Math.floor(Math.random()*Q.length)];G[key]={answer:q.a};
    return reply("Food Quiz!\n\n"+q.q+"\n\nType your answer!");
  }
};
