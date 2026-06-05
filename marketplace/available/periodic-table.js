// @marketplace periodic-table v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "PeriodicTable", category: "education", desc: "Chemical elements lookup",
  command: ["element","periodic"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "element is active! This plugin is installed and working.");
  }
};
