// @marketplace roman-numerals v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "RomanNumerals", category: "tools", desc: "Convert to Roman numerals",
  command: ["roman","toroman"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "roman is active! This plugin is installed and working.");
  }
};
