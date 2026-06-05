// @marketplace weekly-review v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "WeeklyReview", category: "productivity", desc: "Weekly reflection and planning template",
  command: ["weeklyreview","weekreview","weeklyreset"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const QUESTIONS=["What were your top 3 wins this week?","What did not go as planned?","What did you learn?","What will you do differently next week?","What are your top 3 priorities for next week?","Who do you need to follow up with?","What habit did you maintain? Which did you skip?","Rate this week 1-10 and explain why."];
    const idx=Math.floor(Math.random()*QUESTIONS.length);
    return reply("Weekly Review\n\nReflection question "+(idx+1)+"/"+QUESTIONS.length+":\n\n"+QUESTIONS[idx]+"\n\nTake a moment to write your honest answer.\n\n/weeklyreview for another question\n\nDo this every Sunday evening for compound growth.");
  }
};
