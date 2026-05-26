// @marketplace stopwatch v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "Stopwatch", category: "tools", desc: "Stopwatch timer",
  command: ["stopwatch","starttimer","stoptimer"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "stopwatch is active! This plugin is installed and working.");
  }
};
