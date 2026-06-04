// @marketplace this-or-that v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ThisOrThat", category: "entertainment", desc: "This or that questions",
  command: ["thisorthat","eitheror"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "thisorthat is active! This plugin is installed and working.");
  }
};
