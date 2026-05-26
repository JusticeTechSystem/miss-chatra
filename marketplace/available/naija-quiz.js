// @marketplace naija-quiz v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "NaijaQuiz", category: "nigerian", desc: "Nigerian history quiz",
  command: ["naijatest","nigeriaknowledge"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "naijatest is active! This plugin is installed and working.");
  }
};
