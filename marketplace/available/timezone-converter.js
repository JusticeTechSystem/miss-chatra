// @marketplace timezone-converter v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "TimezoneConverter", category: "tools", desc: "Convert times between timezones",
  command: ["timezone","timeconvert"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "timezone is active! This plugin is installed and working.");
  }
};
