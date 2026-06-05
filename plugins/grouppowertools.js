// plugins/grouppowertools.js — Group Power Tools for Miss Chatra WA
// Ported from TG p42_group_power.py
"use strict";

const { gsGet, gsSet } = require("../library/db");
const { getState, saveState } = require("../library/state");

async function safeGroupAdmin(sock, chatId) {
  try {
    const meta = await sock.groupMetadata(chatId);
    return meta.participants.filter(p => p.admin).map(p => p.id);
  } catch { return []; }
}

module.exports = {
  name:     "GroupPowerTools",
  category: "moderation",
  desc:     "Advanced group management: lock, slowmode, antilink, antispam, mass actions",
  command:  ["lock","unlock","slowmode","antilink","antilinkon","antilinkoff",
             "antilinkstatus","kickall","tagall","tagadmins","groupinfo",
             "setwelcome","setgoodbye","welcomeon","welcomeoff","goodbyeon","goodbyeoff",
             "welcomepreview","goodbyepreview","setdesc","setgroupname2","powertools"],

  run: async ({ sock, m, args, command, chatId, userId, reply, isOwner, isDev, isAdmin, prefix, pushName }) => {
    const isGroup = chatId?.endsWith("@g.us");

    if (command === "powertools") {
      return reply([
        `⚡ *Group Power Tools*\n`,
        `*Anti-Spam / Locks:*`,
        `• ${prefix}lock — Lock group (restrict non-admins)`,
        `• ${prefix}unlock — Unlock group`,
        `• ${prefix}slowmode <seconds> — Set message cooldown`,
        `• ${prefix}antilinkon — Auto-delete links`,
        `• ${prefix}antilinkoff — Disable anti-link`,
        `• ${prefix}antilinkstatus — Check status`,
        ``,
        `*Group Management:*`,
        `• ${prefix}groupinfo — Full group stats`,
        `• ${prefix}setdesc <text> — Set group description`,
        `• ${prefix}setgroupname2 <name> — Rename group`,
        `• ${prefix}tagadmins — Mention all admins`,
        ``,
        `*Welcome / Goodbye:*`,
        `• ${prefix}setwelcome <msg> — Set welcome message`,
        `• ${prefix}setgoodbye <msg> — Set goodbye message`,
        `• ${prefix}welcomeon/off · ${prefix}goodbyeon/off`,
        `• ${prefix}welcomepreview · ${prefix}goodbyepreview`,
        ``,
        `_Variables: {name} {group} {count}_`,
      ].join("\n"));
    }

    if (!isGroup) return reply("⚠️ Group commands only work in groups.");
    if (!isAdmin && !isOwner && !isDev) return reply("🔒 Admin only.");

    const gs = gsGet(chatId);

    // ── Lock / Unlock ─────────────────────────────────────────────────────
    if (command === "lock") {
      try {
        await sock.groupSettingUpdate(chatId, "announcement");
        return reply("🔒 Group locked. Only admins can send messages.");
      } catch { return reply("❌ Failed to lock group. Make sure I have admin rights."); }
    }
    if (command === "unlock") {
      try {
        await sock.groupSettingUpdate(chatId, "not_announcement");
        return reply("🔓 Group unlocked. All members can send messages.");
      } catch { return reply("❌ Failed to unlock group."); }
    }

    // ── Slowmode ──────────────────────────────────────────────────────────
    if (command === "slowmode") {
      const secs = parseInt(args[0]);
      if (isNaN(secs) || secs < 0) return reply(`Usage: ${prefix}slowmode <seconds>\nExample: ${prefix}slowmode 30\nUse 0 to disable.`);
      gsSet(chatId, { slowmode_secs: secs });
      return reply(secs > 0
        ? `🐢 *Slowmode enabled*: ${secs}s cooldown between messages.`
        : `✅ Slowmode disabled.`
      );
    }

    // ── Anti-link ─────────────────────────────────────────────────────────
    if (command === "antilinkon" || command === "antilink") {
      const action = args[0]?.toLowerCase() || "delete";
      const valid  = ["delete","warn","kick"];
      const mode   = valid.includes(action) ? action : "delete";
      gsSet(chatId, { antilink_mode: mode });
      return reply(`🔗 *Anti-Link enabled* (mode: ${mode})\nLinks will be ${mode}d automatically.`);
    }
    if (command === "antilinkoff") {
      gsSet(chatId, { antilink_mode: "off" });
      return reply("✅ Anti-Link disabled.");
    }
    if (command === "antilinkstatus") {
      const mode = gsGet(chatId).antilink_mode || "off";
      return reply(`🔗 *Anti-Link Status*\nMode: *${mode}*\n\n${prefix}antilinkon [delete|warn|kick] — enable\n${prefix}antilinkoff — disable`);
    }

    // ── Group Info ────────────────────────────────────────────────────────
    if (command === "groupinfo") {
      try {
        const meta    = await sock.groupMetadata(chatId);
        const admins  = meta.participants.filter(p => p.admin).length;
        const members = meta.participants.length;
        const created = meta.creation ? new Date(meta.creation * 1000).toLocaleDateString() : "Unknown";
        return reply([
          `📊 *Group Info*\n`,
          `📛 Name: *${meta.subject}*`,
          `🆔 ID: ${chatId}`,
          `👥 Members: ${members}`,
          `👑 Admins: ${admins}`,
          `📅 Created: ${created}`,
          `📝 Description: ${meta.desc ? meta.desc.slice(0, 200) : "None"}`,
        ].join("\n"));
      } catch { return reply("❌ Could not fetch group info."); }
    }

    // ── Set Group Name / Description ──────────────────────────────────────
    if (command === "setgroupname2") {
      const name = args.join(" ").trim();
      if (!name) return reply(`Usage: ${prefix}setgroupname2 <new name>`);
      try {
        await sock.groupUpdateSubject(chatId, name);
        return reply(`✅ Group name updated to: *${name}*`);
      } catch { return reply("❌ Failed. Make sure I have the right permissions."); }
    }
    if (command === "setdesc") {
      const desc = args.join(" ").trim();
      if (!desc) return reply(`Usage: ${prefix}setdesc <description>`);
      try {
        await sock.groupUpdateDescription(chatId, desc);
        return reply("✅ Group description updated!");
      } catch { return reply("❌ Failed to update description."); }
    }

    // ── Tag Admins ────────────────────────────────────────────────────────
    if (command === "tagadmins") {
      const admins = await safeGroupAdmin(sock, chatId);
      if (!admins.length) return reply("❌ Could not fetch admin list.");
      const mentions = admins.map(a => `@${a.split("@")[0]}`).join(" ");
      await sock.sendMessage(chatId, { text: `👑 *Admins:*\n${mentions}`, mentions: admins }, { quoted: m });
      return;
    }

    // ── Welcome / Goodbye ─────────────────────────────────────────────────
    if (command === "setwelcome") {
      const text = args.join(" ").trim();
      if (!text) return reply(`Usage: ${prefix}setwelcome <message>\n\nVariables: {name} {group} {count}\nExample: ${prefix}setwelcome Welcome {name} to {group}! 🎉`);
      gsSet(chatId, { welcome_msg: text, welcome_on: 1 });
      return reply(`✅ Welcome message set:\n\n${text}`);
    }
    if (command === "setgoodbye") {
      const text = args.join(" ").trim();
      if (!text) return reply(`Usage: ${prefix}setgoodbye <message>\n\nVariables: {name} {group} {count}`);
      gsSet(chatId, { goodbye_msg: text, goodbye_on: 1 });
      return reply(`✅ Goodbye message set:\n\n${text}`);
    }
    if (command === "welcomeon")  { gsSet(chatId, { welcome_on: 1 }); return reply("✅ Welcome messages enabled."); }
    if (command === "welcomeoff") { gsSet(chatId, { welcome_on: 0 }); return reply("✅ Welcome messages disabled."); }
    if (command === "goodbyeon")  { gsSet(chatId, { goodbye_on: 1 }); return reply("✅ Goodbye messages enabled."); }
    if (command === "goodbyeoff") { gsSet(chatId, { goodbye_on: 0 }); return reply("✅ Goodbye messages disabled."); }

    if (command === "welcomepreview") {
      const msg = gsGet(chatId).welcome_msg || "Welcome {name} to {group}! 🎉";
      const preview = msg.replace("{name}", pushName||"User").replace("{group}", "This Group").replace("{count}", "42");
      return reply(`👋 *Welcome Preview:*\n\n${preview}`);
    }
    if (command === "goodbyepreview") {
      const msg = gsGet(chatId).goodbye_msg || "Goodbye {name}, we'll miss you!";
      const preview = msg.replace("{name}", pushName||"User").replace("{group}", "This Group").replace("{count}", "41");
      return reply(`👋 *Goodbye Preview:*\n\n${preview}`);
    }
  },
};
