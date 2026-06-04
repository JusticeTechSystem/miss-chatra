// @marketplace science-quiz v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ScienceQuiz", category: "education", desc: "Science trivia questions",
  command: ["sciencequiz","sciencetrivia"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const Q=[{q:'What is the chemical symbol for gold?',a:'au'},{q:'How many planets are in our solar system?',a:'8'},{q:'What is the speed of light in km/s?',a:'300000'},{q:'What gas do plants absorb during photosynthesis?',a:'carbon dioxide'},{q:'What is the atomic number of carbon?',a:'6'},{q:'What is the hardest natural substance on Earth?',a:'diamond'},{q:'What force keeps planets in orbit?',a:'gravity'},{q:'What is the center of an atom called?',a:'nucleus'}];
    const G=global.__sci=global.__sci||{};const key=chatId+'_'+userId;
    const q=Q[Math.floor(Math.random()*Q.length)];G[key]={answer:q.a};
    return reply("Science Quiz!\n\n"+q.q+"\n\nType your answer!");
  }
};
