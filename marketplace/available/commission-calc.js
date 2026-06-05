// @marketplace commission-calc v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CommissionCalc", category: "finance", desc: "Sales commission calculator",
  command: ["commission","commissioncalc"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "commission is active! This plugin is installed and working.");
  }
};
