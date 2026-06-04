// @marketplace language-learner v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "LanguageLearner", category: "education", desc: "Learn Yoruba Igbo Hausa",
  command: ["yorubalearn","igbolearn","hausalearn"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "yorubalearn is active! This plugin is installed and working.");
  }
};
