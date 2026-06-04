// @marketplace trivia-quiz v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "TriviaQuiz", category: "games",
  desc: "Multi-category trivia quiz game",
  command: ["trivia2", "quiz2", "quizme", "triviastart2"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const QUESTIONS={
      general:[{q:"What is the capital of Nigeria?",a:"abuja",options:["Lagos","Abuja","Kano","Ibadan"]},{q:"How many states are in Nigeria?",a:"36",options:["30","36","38","42"]},{q:"What year did Nigeria gain independence?",a:"1960",options:["1957","1960","1963","1967"]},{q:"What is the largest continent by area?",a:"asia",options:["Africa","Asia","Europe","North America"]}],
      science:[{q:"What planet is closest to the Sun?",a:"mercury",options:["Venus","Mars","Mercury","Earth"]},{q:"What is H2O?",a:"water",options:["Salt","Water","Oxygen","Hydrogen"]},{q:"How many bones are in the adult human body?",a:"206",options:["206","196","212","180"]}],
      sports:[{q:"How many players are on a football team?",a:"11",options:["10","11","12","9"]},{q:"Which country invented football (soccer)?",a:"england",options:["Brazil","England","France","Germany"]},{q:"How long is a standard football match?",a:"90 minutes",options:["80 minutes","90 minutes","100 minutes","120 minutes"]}]
    };
    const active={};const key=chatId+"_triv_"+userId;
    if(command==="trivia2"||command==="quizme"||command==="triviastart2"){
      const cat=(args[0]||"general").toLowerCase();
      const bank=QUESTIONS[cat]||QUESTIONS.general;
      const q=bank[Math.floor(Math.random()*bank.length)];
      active[key]={answer:q.a,question:q.q,start:Date.now()};
      const opts=q.options.map((o,i)=>String.fromCharCode(65+i)+") "+o).join("\n");
      return reply("🧠 *Trivia Quiz*\n\n❓ "+q.q+"\n\n"+opts+"\n\n_Reply with the letter (A, B, C, D) — 30 seconds!_");
    }
    const guess=(args[0]||"").toUpperCase().replace(/[^A-D]/g,"");
    if(active[key]&&guess){
      const{answer,question}=active[key];
      const OPTIONS=["A","B","C","D"];
      delete active[key];
      return reply("🎯 Answer: Correct answer = *"+answer.toUpperCase()+"*\n\n"+(guess==="A"&&answer?"Checking...":"")+"\n"+pfx+"trivia2 for next question!");
    }
    return reply("🧠 "+pfx+"trivia2 — Start general trivia\n"+pfx+"trivia2 science\n"+pfx+"trivia2 sports");
  }
};
