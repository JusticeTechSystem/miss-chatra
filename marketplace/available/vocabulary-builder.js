// @marketplace vocabulary-builder v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "VocabBuilder", category: "education", desc: "Build vocabulary with word exercises",
  command: ["vocab","learnword2","wordpower"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const WORDS=[{word:'Acumen',meaning:'The ability to make good judgments',sentence:'Her business acumen helped the company grow rapidly.'},
    {word:'Resilient',meaning:'Able to recover quickly from difficulties',sentence:'The resilient team bounced back after the setback.'},
    {word:'Pragmatic',meaning:'Dealing with things sensibly and realistically',sentence:'We need a pragmatic approach to solve this.'},
    {word:'Eloquent',meaning:'Fluent or persuasive in speaking or writing',sentence:'Her eloquent speech moved the entire audience.'},
    {word:'Diligent',meaning:'Having or showing care and effort in your work',sentence:'The diligent student studied every day.'},
    {word:'Tenacious',meaning:'Holding firmly to something, not giving up',sentence:'His tenacious spirit helped him overcome every obstacle.'},
    {word:'Integrity',meaning:'The quality of being honest and having moral principles',sentence:'Leaders must demonstrate integrity at all times.'},
    {word:'Innovative',meaning:'Introducing new ideas, methods, or products',sentence:'The company became successful through innovative thinking.'}];
    const w=WORDS[Math.floor(Math.random()*WORDS.length)];
    return reply("Word Power\n\nWord: "+w.word+"\nMeaning: "+w.meaning+"\nExample: "+w.sentence+"\n\nUse this word in a sentence today!");
  }
};
