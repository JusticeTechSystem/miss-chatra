// plugins/badwords.js — Miss Chatra Badword Manager
"use strict";

const { badwordAdd, badwordDel, badwordList } = require("../library/db");
const config = require("../settings/config");

module.exports = {
  name: "Badwords",
  category: "badwords",
  desc: "Add/remove/list bad words for the anti-badword filter",
  command: ["addword","rmword","delword","badwords","clearwords"],
  ownerOnly: false,

  run: async ({ args, command, chatId, reply, isAdmin, isOwner, isDev, prefix }) => {
    if (!chatId.endsWith("@g.us")) return reply(config.message.group);
    if (!isAdmin && !isOwner && !isDev) return reply(config.message.admin);

    if (command === "addword") {
      const word = (args[0] || "").toLowerCase().trim();
      if (!word) return reply(`Usage: /addword <word>`);
      badwordAdd(chatId, word);
      return reply(`✅ Added *${word}* to the bad words list.\n\nEnable filter: .antibadword delete`);
    }

    if (command === "delword" || command === "delword") {
      const word = (args[0] || "").toLowerCase().trim();
      if (!word) return reply(`Usage: /rmword <word>`);
      badwordDel(chatId, word);
      return reply(`✅ Removed *${word}* from bad words list.`);
    }

    if (command === "badwords") {
      const list = badwordList(chatId);
      if (!list.length) return reply(`🚫 No bad words set.\n\nAdd one: .addword <word>`);
      return reply(`🚫 *Bad Words List (${list.length})*\n\n${list.map(w => `• ${w}`).join("\n")}\n\nRemove: .rmword <word>`);
    }

    if (command === "clearwords") {
      const { db } = require("../library/db");
      db().prepare("DELETE FROM badwords WHERE chat_id=?").run(chatId);
      return reply("✅ All bad words cleared.");
    }
  }
};
