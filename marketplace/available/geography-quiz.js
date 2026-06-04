// @marketplace geography-quiz v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "GeographyQuiz", category: "education", desc: "Quiz on world geography",
  command: ["geography","capitalquiz","worldquiz"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const Q=[{q:'What is the capital of Nigeria?',a:'abuja'},{q:'What is the capital of South Africa?',a:'pretoria'},{q:'What is the largest country in Africa by area?',a:'algeria'},{q:'What is the longest river in Africa?',a:'nile'},{q:'What is the capital of Ghana?',a:'accra'},{q:'What is the capital of Kenya?',a:'nairobi'},{q:'What mountain is the highest in Africa?',a:'kilimanjaro'},{q:'What is the most populous country in Africa?',a:'nigeria'},{q:'What is the capital of Egypt?',a:'cairo'},{q:'What ocean is on the west coast of Africa?',a:'atlantic'}];
    const G=global.__geo=global.__geo||{};const key=chatId+'_'+userId;
    const q=Q[Math.floor(Math.random()*Q.length)];G[key]={answer:q.a};
    return reply("Geography Quiz!\n\n"+q.q+"\n\nType your answer - 30 seconds!");
  }
};
