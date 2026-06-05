// @marketplace icebreaker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "IcebreakerQuestions", category: "social",
  desc: "Fun icebreaker questions for groups",
  command: ["icebreaker", "groupquestion", "meetingopener", "breaktheice"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const QS=["If you could have dinner with any person alive or dead, who would it be and why?","What\'s something most people don\'t know about you?","If you won ₦1 billion tomorrow, what\'s the first thing you\'d buy?","What\'s your most unpopular opinion?","If you could live in any city in the world, where would you choose?","What skill do you wish you had mastered 10 years ago?","What\'s the best piece of advice you\'ve ever received?","If you could change one thing about the world, what would it be?","What\'s something you believed 5 years ago that you no longer believe?","If your life was a TV show, what genre would it be?","What\'s your proudest achievement that you rarely talk about?","If you could go back and give your 16-year-old self one piece of advice?","What\'s the most interesting thing you\'ve learned this year?","Which fictional character are you most like and why?","What\'s your version of a perfect Sunday?","What\'s something you do that you think most people don\'t?","If you had to eat one meal for the rest of your life, what would it be?","What\'s the strangest job you\'ve ever heard of?","If you could swap lives with anyone in this group for a day, who and why?","What\'s the bravest thing you\'ve ever done?"];
    return reply("🧊 *Icebreaker Question*\n\n❓ "+QS[Math.floor(Math.random()*QS.length)]+"\n\n_Everyone share your answer!_\n_/icebreaker for another question_");
  }
};
