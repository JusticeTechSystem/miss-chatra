// @marketplace naira-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "NairaRateTracker", category: "nigerian", desc: "Live Naira exchange rates",
  command: ["naira","nairarate"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "naira is active! This plugin is installed and working.");
  }
};
