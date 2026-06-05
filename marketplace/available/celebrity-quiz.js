// @marketplace celebrity-quiz v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CelebQuiz", category: "entertainment", desc: "Celebrity and entertainment quiz",
  command: ["celebquiz","famouspeople","whoisthis"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const CELEBS=[{q:"Who is known as the King of Afrobeats?",a:"wizkid"},{q:"What is Burna Boy's real name?",a:"damini"},{q:"Who sang One Dance with Drake?",a:"wizkid"},{q:"Which Nigerian artist is known as Mr Endoement?",a:"dbanj"},{q:"What is Davido's real name?",a:"david adeleke"},{q:"Who is Tiwa Savage's most famous song?",a:"all over"},{q:"What year did Olamide debut?",a:"2011"},{q:"Which artist is known as Starboy?",a:"wizkid"}];
    const G=global.__cq=global.__cq||{};const key=chatId+'_'+userId;
    const q=CELEBS[Math.floor(Math.random()*CELEBS.length)];G[key]={answer:q.a};
    return reply("Celebrity Quiz!\n\n"+q.q+"\n\nType your answer!");
  }
};
