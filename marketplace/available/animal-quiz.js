// @marketplace animal-quiz v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "AnimalQuiz", category: "games", desc: "Animal facts quiz",
  command: ["animalquiz","guesanimal","zooquiz"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const Q=[{q:'I am the largest land animal. Who am I?',a:'elephant'},{q:'I am the fastest land animal. Who am I?',a:'cheetah'},{q:'I sleep 22 hours a day. Who am I?',a:'koala'},{q:'I am the only mammal that can truly fly. Who am I?',a:'bat'},{q:'I am the tallest animal in the world. Who am I?',a:'giraffe'},{q:'I have 8 arms and 3 hearts. Who am I?',a:'octopus'},{q:'I am black and white and live in Antarctica. Who am I?',a:'penguin'},{q:'I can change my color to camouflage. Who am I?',a:'chameleon'}];
    const G=global.__aq=global.__aq||{};const key=chatId+'_aq_'+userId;
    const q=Q[Math.floor(Math.random()*Q.length)];G[key]={answer:q.a};
    return reply("Animal Quiz!\n\n"+q.q+"\n\nType the animal name - 30 seconds!");
  }
};
