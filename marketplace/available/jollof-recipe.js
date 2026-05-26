// @marketplace jollof-recipe v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "NigerianRecipes", category: "nigerian", desc: "Nigerian food recipes",
  command: ["recipe","jollof","nigerianfood"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "recipe is active! This plugin is installed and working.");
  }
};
