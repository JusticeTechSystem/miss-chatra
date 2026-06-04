// @marketplace personality-test v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "PersonalityTest", category: "entertainment", desc: "Fun personality assessment",
  command: ["personality","mytype","personalitytest"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const Q=[{q:"In social situations you tend to:",opts:["A) Be outgoing and enjoy meeting new people","B) Prefer small gatherings or one-on-one"]},{q:"When making decisions you:",opts:["A) Go with your gut feeling","B) Analyze all the facts carefully"]},{q:"You prefer environments that are:",opts:["A) Dynamic and always changing","B) Stable and predictable"]},{q:"After a long day you recharge by:",opts:["A) Going out and being social","B) Staying home alone or with close ones"]}];
    const G=global.__pers=global.__pers||{};const key=chatId+'_'+userId;
    if(!G[key]){G[key]={answers:[],q:0};return reply("Personality Quiz!\n\nQuestion 1/4:\n\n"+Q[0].q+"\n\n"+Q[0].opts.join("\n")+"\n\nReply A or B");}
    const ans=(args[0]||'').toUpperCase();
    if(!['A','B'].includes(ans)) return reply("Reply A or B");
    G[key].answers.push(ans);G[key].q++;
    if(G[key].q<Q.length){const q=Q[G[key].q];return reply("Question "+(G[key].q+1)+"/"+Q.length+":\n\n"+q.q+"\n\n"+q.opts.join("\n")+"\n\nReply A or B");}
    const As=G[key].answers.filter(a=>a==='A').length;delete G[key];
    const type=As>=3?'Extrovert-Intuitive: Energetic, creative, decisive':As>=2?'Balanced: Adaptable and versatile':'Introvert-Analytical: Deep thinker, careful planner';
    return reply("Your Personality Type!\n\n"+type+"\n\nEveryone is unique - this is just for fun!");
  }
};
