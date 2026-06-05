// @marketplace movie-trivia v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MovieTrivia", category: "entertainment", desc: "Movie and pop culture trivia",
  command: ["movietrivia","filmquiz","popculturequiz"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const Q=[{q:"Who played Iron Man in the Marvel Cinematic Universe?",a:"robert downey jr"},{q:"What year was the first iPhone released?",a:"2007"},{q:"Which country produces the most films per year?",a:"india"},{q:"What movie won Best Picture at the 2020 Oscars?",a:"parasite"},{q:"Who directed Titanic?",a:"james cameron"},{q:"What is the highest-grossing Nollywood film ever?",a:"king of boys"},{q:"What year did Avengers Endgame release?",a:"2019"},{q:"Who voices Shrek?",a:"mike myers"}];
    const G=global.__mt=global.__mt||{};const key=chatId+'_'+userId;
    const q=Q[Math.floor(Math.random()*Q.length)];G[key]={answer:q.a};
    return reply("Movie Trivia!\n\n"+q.q+"\n\nType your answer - 30 seconds!");
  }
};
