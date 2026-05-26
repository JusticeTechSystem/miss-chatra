// @marketplace quiz-maker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "QuizMaker", category: "education", desc: "Create custom quiz questions for study groups",
  command: ["createquiz2","quizmake","studytest"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','custom_quiz.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={questions:[],counter:0};
    if(command==='quizmake'&&args.length>=3){
      const q=args[0],a=args[1],hint=args.slice(2).join(' ');
      all[chatId].questions.push({q,a:a.toLowerCase(),hint,by:m?.pushName||'Member'});save(all);
      return reply("Question added!\n\nQ: "+q+"\nA: "+a+(hint?"\nHint: "+hint:"")+"\n\nBank: "+all[chatId].questions.length+" questions");
    }
    if(command==='studytest'){
      const qs=all[chatId].questions;
      if(!qs.length) return reply("No questions yet.\n"+pfx+"quizmake 'What is DNA?' 'Genetic material' 'Found in cell nucleus'");
      const q=qs[Math.floor(Math.random()*qs.length)];
      return reply("Study Quiz\n\nQuestion: "+q.q+(q.hint?"\nHint: "+q.hint:"")+"\n\nType your answer!");
    }
    return reply("Quiz Maker\n\n"+pfx+"quizmake 'Question' 'Answer' 'Hint'\n"+pfx+"studytest - take a quiz\n\nBank: "+(all[chatId]?.questions?.length||0)+" questions");
  }
};
