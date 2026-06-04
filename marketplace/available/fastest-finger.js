// @marketplace fastest-finger v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "FastestFinger", category: "games", desc: "Who answers first wins",
  command: ["fastest","firstanswer","fastestfinger"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const QUESTIONS=["Name any African country","Name any type of soup","Name a Nigerian state","Count to 10 in Yoruba","Name any fruit that is yellow","Name a Nigerian musician","Name any planet in the solar system","Name a sport played with a ball","Name any type of car brand","Name a country in Europe"];
    const G=global.__ff=global.__ff||{};const key=chatId+'_ff';
    if(G[key]){return reply("Game already active! First correct answer wins!");}
    const q=QUESTIONS[Math.floor(Math.random()*QUESTIONS.length)];
    G[key]={q,answered:false};
    setTimeout(()=>{delete G[key];},30000);
    return reply("Fastest Finger!\n\n"+q+"\n\nFirst correct answer wins! 30 seconds!");
  }
};
