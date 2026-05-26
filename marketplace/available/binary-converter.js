// @marketplace binary-converter v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "BinaryConverter", category: "tools", desc: "Number base converter",
  command: ["binary","decimal2","hex2"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "binary is active! This plugin is installed and working.");
  }
};
