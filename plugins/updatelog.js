// plugins/updatelog.js — Miss Chatra Update Log
"use strict";

const { getState, saveState } = require("../library/state");
const config = require("../settings/config");

const DEFAULT_CHANGELOG = [
  ["🤖", "Miss Chatra AI chatbot with deep think mode"],
  ["🎮", "Games Hub: Truth/Dare/Riddle + Dice games"],
  ["🔎", "Search Hub: Google, Pinterest, Wallpapers, APKs, GitHub"],
  ["🛡️", "Full moderation: ban, kick, mute, warn, promote, demote"],
  ["👋", "Welcome/Goodbye with gate verification"],
  ["⭐", "XP leveling system and leaderboard"],
  ["📝", "Notes and auto-reply filters"],
  ["🚫", "Badword list and anti-spam tools"],
  ["🎭", "25 reaction commands + 11 fun check commands"],
  ["🚨", "Report system with admin notifications"],
  ["⚖️", "Appeal system with captcha verification"],
  ["🗑️", "Auto-delete with fine-grained controls"],
  ["🗣️", "TTS voice notes for AI replies"],
  ["🧠", "Chatbot training: custom + per-user"]
];

module.exports = {
  name: "UpdateLog",
  category: "core",
  desc: "View and manage the bot's update log",
  command: ["updatelog","setupdatelog","editupdatelog","sendupdatelog"],
  ownerOnly: false,
  devCommandsOnly: ["setupdatelog","editupdatelog","sendupdatelog"], // these sub-commands are dev-only

  run: async ({ sock, m, args, command, chatId, reply, isOwner, isDev, prefix }) => {
    const state = getState();

    if (command === "updatelog") {
      const custom = state.update_log_text;
      if (custom) return reply(custom);
      const lines = [`📋 *Miss Chatra — What's New*\n`];
      for (const [icon, text] of DEFAULT_CHANGELOG) lines.push(`${icon} ${text}`);
      lines.push(`\n_Miss Chatra by ${config.developerName}_`);
      return reply(lines.join("\n"));
    }

    if (!isOwner && !isDev) return reply(config.message.owner);

    const DEV_NUMS_UL = ["2349032578690","2348166337692"];
    const callerNumUL = (userId||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const isDevUL = DEV_NUMS_UL.includes(callerNumUL);

    if (command === "setupdatelog") {
      if (!isDevUL) return reply("🔒 Developer only.");
      const text = args.join(" ").trim();
      if (!text) return reply(`Usage: /setupdatelog <your update log text>\n\nTip: Use \\n for new lines.`);
      state.update_log_text = text.replace(/\\n/g, "\n");
      saveState();
      return reply("✅ Update log set!");
    }

    if (command === "editupdatelog") {
      if (!isDevUL) return reply("🔒 Developer only.");
      const text = args.join(" ").trim();
      if (!text) return reply("Usage: /editupdatelog <new text>");
      state.update_log_text = text.replace(/\\n/g, "\n");
      saveState();
      return reply("✅ Update log updated!");
    }

    if (command === "sendupdatelog") {
      if (!isDevUL) return reply("🔒 Developer only.");
      const text = state.update_log_text || DEFAULT_CHANGELOG.map(([i,t]) => `${i} ${t}`).join("\n");
      try {
        const meta = await sock.groupMetadata(chatId);
        await sock.sendMessage(chatId, { text: `📢 *Update Broadcast*\n\n${text}` });
        return reply("✅ Update log sent to group.");
      } catch (e) {
        return reply(`❌ Could not send: ${e.message}`);
      }
    }
  }
};
