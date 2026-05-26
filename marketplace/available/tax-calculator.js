// @marketplace tax-calculator v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "TaxCalculator", category: "finance", desc: "Nigerian income tax calculator",
  command: ["tax2","incometax","paye"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "tax2 is active! This plugin is installed and working.");
  }
};
