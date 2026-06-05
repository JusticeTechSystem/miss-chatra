// @marketplace study-quiz v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "StudyQuiz", category: "education",
  desc: "Create and take custom study quizzes",
  command: ["studyquiz", "createquiz", "takequiz", "addquestion", "quizbank"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","quizbanks.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={banks:{}};
    const active={};const key=chatId+"_sq_"+userId;
    if(command==="addquestion"){
      const[bank,...rest]=args;const sep=rest.indexOf("|");
      if(!bank||sep<0) return reply("Usage: "+pfx+"addquestion <bank> <question> | <answer>\nExample: "+pfx+"addquestion Biology What is photosynthesis? | Process plants use to make food from sunlight");
      const q=rest.slice(0,sep).join(" ").trim(),a=rest.slice(sep+1).join(" ").trim();
      if(!all[chatId].banks[bank])all[chatId].banks[bank]=[];
      all[chatId].banks[bank].push({q,a,addedBy:m?.pushName||"Member"});save(all);
      return reply("✅ Question added to *"+bank+"* bank!\n\n❓ "+q+"\n✅ "+a+"\n\nBank size: "+all[chatId].banks[bank].length+" questions\nStart quiz: "+pfx+"takequiz "+bank);
    }
    if(command==="takequiz"){
      const bank=args[0];
      if(!bank||!all[chatId].banks[bank]?.length) return reply("Bank not found or empty.\n"+pfx+"quizbank to see banks.");
      const questions=all[chatId].banks[bank];
      const q=questions[Math.floor(Math.random()*questions.length)];
      active[key]={answer:q.a.toLowerCase(),bank,start:Date.now()};
      return reply("📝 *Quiz: "+bank+"*\n\n❓ "+q.q+"\n\n_Type your answer — 60 seconds!_");
    }
    if(command==="quizbank"){
      const banks=Object.entries(all[chatId].banks);
      if(!banks.length) return reply("No quiz banks.\n"+pfx+"addquestion Biology What is DNA? | Genetic material in cells");
      const lines=["📚 *Quiz Banks*\n"];
      banks.forEach(([name,qs])=>lines.push("  📖 *"+name+"* — "+qs.length+" questions"));
      return reply(lines.join("\n"));
    }
    if(active[key]&&args.length){
      const answer=args.join(" ").toLowerCase().trim();
      const{answer:correct,bank}=active[key];delete active[key];
      const correct2=answer.includes(correct)||correct.includes(answer);
      return reply(correct2?"✅ *Correct!* Well done!\n\n"+pfx+"takequiz "+bank+" — next question":"❌ *Wrong.*\n\nCorrect answer: *"+correct+"*\n\n"+pfx+"takequiz "+bank+" — try again");
    }
    return reply("📚 *Study Quiz*\n\n"+pfx+"addquestion <bank> <Q> | <A>\n"+pfx+"takequiz <bank>\n"+pfx+"quizbank — see banks");
  }
};
