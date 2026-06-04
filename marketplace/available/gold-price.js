// @marketplace gold-price v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "GoldPrice", category: "finance", desc: "Gold and precious metal prices",
  command: ["gold","goldprice"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "gold is active! This plugin is installed and working.");
  }
};
