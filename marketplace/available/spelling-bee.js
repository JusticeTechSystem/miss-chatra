// @marketplace spelling-bee v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "SpellingBee", category: "education", desc: "Spelling bee practice with difficulty levels",
  command: ["spelling","spellword","spellingbee"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const WORDS={easy:['beautiful','necessary','restaurant','beginning','conscience','separate','definitely','government','immediately','privilege'],medium:['accommodate','exaggerate','millennium','acquaintance','embarrass','miscellaneous','occurrence','questionnaire','surveillance','bureaucracy'],hard:['pneumonia','rhinoceros','psychiatrist','conscientious','chrysanthemum','mediterranean','reconnaissance','pharmaceutical','paraphernalia','onomatopoeia']};
    const G=global.__spelling=global.__spelling||{};const key=chatId+'_'+userId;
    const level=(args[0]||'easy').toLowerCase();
    const wordList=WORDS[level]||WORDS.easy;
    const word=wordList[Math.floor(Math.random()*wordList.length)];
    const scrambled=word.split('').sort(()=>Math.random()-0.5).join('');
    G[key]={answer:word,level};
    return reply("Spelling Bee ("+level+")\n\nUnscramble this word:\n"+scrambled.toUpperCase()+"\n\nType the correct spelling!");
  }
};
