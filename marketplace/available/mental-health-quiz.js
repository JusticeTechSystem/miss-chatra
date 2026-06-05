// @marketplace mental-health-quiz v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MentalHealthQuiz", category: "health", desc: "Quick mental wellness check",
  command: ["moodcheck","wellnesscheck","mentalcheck"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const TIPS=['Rate your mood 1-10. Below 5 consistently? Talk to someone.','How did you sleep? 7-8 hours is optimal for mental health.','Have you eaten today? Hunger affects mood significantly.','Name 3 things you are grateful for right now.','Have you moved your body today? Even a 10-min walk helps.','Are you drinking enough water? Dehydration affects mood.','Have you connected with someone you care about today?'];
    return reply("Mental Wellness Check\n\nQuestion for today:\n\n"+TIPS[Math.floor(Math.random()*TIPS.length)]+"\n\nThink about it honestly.\n/moodcheck for another question");
  }
};
