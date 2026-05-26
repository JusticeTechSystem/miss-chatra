// @marketplace kindness-challenge v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "KindnessChallenge", category: "social", desc: "Daily acts of kindness prompts",
  command: ["kindness","bekind","kindact","dogoodnow"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const ACTS=["Send an encouraging message to someone who might be struggling.","Pay a genuine compliment to 3 different people today.","Help someone without being asked and without expecting anything back.","Share useful information that could help someone in your contacts.","Check in on an elderly neighbor or relative.","Leave a positive review for a local business you love.","Share a meal or snack with someone who needs it.","Offer to help carry something heavy for someone.","Smile and greet people you normally walk past.","Send a message to an old friend you have not talked to in a while.","Donate something you no longer use.","Teach someone a skill you know.","Listen to someone without offering advice - just listen.","Celebrate someone else's win publicly in this group.","Write a thank-you note to someone who helped you recently."];
    return reply("Today's Kindness Challenge!\n\n"+ACTS[Math.floor(Math.random()*ACTS.length)]+"\n\nDo it today. Report back!\n/dogoodnow for another act of kindness");
  }
};
