// @marketplace love-language v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "LoveLangTest", category: "social",
  desc: "Discover your love language",
  command: ["lovelanguage", "lovetest", "lovequiz", "mylovelang"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const tests={};const key=chatId+"_ll_"+userId;
    const QUESTIONS=[["When I feel most loved, it\'s when someone:","A) Tells me I\'m appreciated","B) Helps me with tasks","C) Buys me thoughtful gifts","D) Spends quality time with me","E) Gives me a hug or physical affection"],["My partner upsets me most when they:","A) Go days without saying anything kind","B) Leaves all the chores to me","C) Forgets special occasions","D) Is always on their phone with me","E) Avoids physical contact"]];
    if(!tests[key]){
      tests[key]={q:0,answers:[]};
      return reply("💕 *Love Language Quiz*\n\n"+QUESTIONS[0][0]+"\n\n"+QUESTIONS[0].slice(1).join("\n")+"\n\nReply A, B, C, D, or E");
    }
    const ans=(args[0]||"").toUpperCase();
    if(!["A","B","C","D","E"].includes(ans)) return reply("Please reply A, B, C, D, or E");
    tests[key].answers.push(ans);
    if(tests[key].q<QUESTIONS.length-1){
      tests[key].q++;
      const q=QUESTIONS[tests[key].q];
      return reply("💕 Question "+(tests[key].q+1)+"/"+QUESTIONS.length+"\n\n"+q[0]+"\n\n"+q.slice(1).join("\n")+"\n\nReply A, B, C, D, or E");
    }
    const LANGS={"A":"Words of Affirmation 🗣️","B":"Acts of Service 🤝","C":"Receiving Gifts 🎁","D":"Quality Time ⏰","E":"Physical Touch 🤗"};
    const freq={};
    tests[key].answers.forEach(a=>{freq[a]=(freq[a]||0)+1;});
    const top=Object.entries(freq).sort((a,b)=>b[1]-a[1])[0][0];
    delete tests[key];
    return reply("💕 *Your Love Language*\n\n"+LANGS[top]+"\n\nPeople with this love language feel most loved through "+(top==="A"?"words of appreciation and verbal encouragement":top==="B"?"helpful actions and practical support":top==="C"?"thoughtful gifts and tokens of affection":top==="D"?"undivided attention and shared experiences":"physical closeness and touch")+".");
  }
};
