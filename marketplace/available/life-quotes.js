// @marketplace life-quotes v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "LifeQuotes", category: "entertainment", desc: "Deep life quotes and wisdom",
  command: ["lifequote","deepquote","wisdomquote"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const Q=["The purpose of our lives is to be happy. - Dalai Lama","Life is what happens when you are busy making other plans. - John Lennon","Get busy living or get busy dying. - Stephen King","You only live once, but if you do it right, once is enough. - Mae West","In the end, it is not the years in your life that count. It is the life in your years. - Lincoln","Many of life greatest fears are thoughts we would never dare to say out loud. - Frank Warren","The truth is you do not know what is going to happen tomorrow. Life is a crazy ride and nothing is guaranteed. - Eminem","Life is not measured by the number of breaths we take, but by the moments that take our breath away. - Maya Angelou","Your time is limited, do not waste it living someone else's life. - Steve Jobs","The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"];
    return reply("Life Quote!\n\n"+Q[Math.floor(Math.random()*Q.length)]+"\n\n/lifequote for another quote");
  }
};
