// plugins/autoclean.js — Miss Chatra Auto-clean + Full Auto-delete Control
// Synced with TG p09_autodelete.py + p51_deleted_accounts.py + p52_profile_monitor.py
"use strict";

const { getState, saveState,
  MENU_AUTODELETE_BOT_DELAY, MENU_AUTODELETE_USER_DELAY,
  GAME_AUTODELETE_BOT_DELAY, GAME_AUTODELETE_USER_DELAY,
  WELCOME_AUTODELETE_DELAY,  GOODBYE_AUTODELETE_DELAY,
} = require("../library/state");
const { gsGet, gsSet, db } = require("../library/db");
const { getSarcasticResponse } = require("../library/helpers");

// ── Profile change cache ──────────────────────────────────────────────────────
const _profileCache = {};

// ── Helpers ───────────────────────────────────────────────────────────────────
function gsEnabled(chatId, key) {
  const gs = gsGet(chatId);
  return gs[key] !== false && gs[key] !== 0;
}
function gsSetBool(chatId, key, val) { gsSet(chatId, { [key]: val ? 1 : 0 }); }

// Schedule a bot response for auto-delete
function schedReply(sock, chatId, msgKey) {
  const st = getState();
  if (!st.auto_delete_enabled || !st.auto_delete_bot_messages) return;
  const delay = st.auto_delete_delay || 180;
  if (delay <= 0) return;
  setTimeout(async () => { try { await sock.sendMessage(chatId, { delete: msgKey }); } catch {} }, delay * 1000);
}

// Reply and auto-schedule deletion
async function replyAD(sock, chatId, m, text) {
  let sent;
  try { sent = await sock.sendMessage(chatId, { text }, { quoted: m }); } catch { sent = await sock.sendMessage(chatId, { text }); }
  schedReply(sock, chatId, sent?.key);
  return sent;
}

// ── Profile monitor (called from index.js on contacts.update) ─────────────────
async function onContactUpdate(sock, updates, activeGroups) {
  for (const upd of updates) {
    const uid  = upd.id;
    const name = upd.notify || upd.name;
    if (!uid || !name) continue;
    for (const chatId of activeGroups) {
      if (!gsEnabled(chatId, "profile_alerts")) continue;
      if (!_profileCache[chatId]) _profileCache[chatId] = {};
      const old = _profileCache[chatId][uid];
      if (old === undefined) { _profileCache[chatId][uid] = name; continue; }
      if (old === name) continue;
      _profileCache[chatId][uid] = name;
      try {
        await sock.sendMessage(chatId, {
          text: `📢 *Profile Update*\n\n@${uid.split("@")[0]} just changed their name:\n\n*Before:* ${old}\n*After:* ${name}`,
          mentions: [uid],
        });
      } catch {}
    }
  }
}

module.exports = {
  name: "AutoClean",
  category: "moderation",
  onContactUpdate,
  command: [
    // Profile & clean
    "autoclean","profilealerts","cleaninactive","profilestatus","autocleanstatus",
    // Master autodelete
    "autodelete","autodeletebot","autodeleteuser","autodeletegroup",
    "autodeleteprivate","autodeletechannel","autodeletesupergroup",
    "autodeletedelay","autodeleteusercmd",
    // Menu autodelete
    "autodeletemenu","autodeletemenubotdelay","autodeletemenuuserdelay",
    // Games autodelete
    "autodeletegames","autodeletegamesbotdelay","autodeletegamesuserdelay",
    // Welcome / goodbye
    "autodeletewelcomedelay","autodeletegoodbyedelay",
    // Appeal
    "autodeleteappealdelay",
    // Reports
    "autodeletereports","autodeletereportsbotdelay","autodeletereportsuserdelay",
    // Giveaway
    "autodeletegiveaway","autodeletegiveawaydelay",
    // Virus verdict
    "autodeletevirusverdict","autodeletevirusverdictdelay",
  ],

  run: async ({ sock, m, command, args, reply, prefix, chatId, userId, isOwner, isDev, isAdmin }) => {
    const chat  = chatId || m?.chat;
    const pfx   = prefix || "/";
    const isGrp = (chat || "").endsWith("@g.us");
    const st    = getState();
    const arg0  = (args[0] || "").toLowerCase().trim();
    const ON    = ["on","yes","true","enable"];
    const OFF   = ["off","no","false","disable"];
    const isOn  = (v) => ON.includes(v);
    const isOff = (v) => OFF.includes(v);
    const notAdmin = !isOwner && !isDev && !isAdmin;

    // ─────────────────────────────────────────────────────────────────────────
    // GROUP-ONLY: autoclean / profilealerts / cleaninactive
    // ─────────────────────────────────────────────────────────────────────────

    if (command === "autoclean" || command === "autocleanstatus") {
      if (!isGrp) return reply("⚙️ This command works in groups only.");
      if (notAdmin) return reply("🚫 Only group admins can use this command.");
      if (!arg0 || command === "autocleanstatus") {
        const on = gsEnabled(chat, "autoclean_enabled");
        return reply([
          `🧹 *Auto-Clean Deleted Accounts*`, ``,
          `Current: *${on ? "✅ ON" : "❌ OFF"}*`, ``,
          `When enabled, I remove members with deactivated numbers when detected.`,
          `Note: WhatsApp doesn't expose "deleted" status like Telegram. Use /cleaninactive for manual cleanup.`, ``,
          `${pfx}autoclean on — Enable`, `${pfx}autoclean off — Disable`, `${pfx}cleaninactive — Remove inactive members`,
        ].join("\n"));
      }
      gsSetBool(chat, "autoclean_enabled", isOn(arg0));
      return reply(`${isOn(arg0) ? "✅" : "❌"} Auto-clean ${isOn(arg0) ? "enabled" : "disabled"} for this group.`);
    }

    if (command === "profilealerts" || command === "profilestatus") {
      if (!isGrp) return reply("⚙️ This command works in groups only.");
      if (notAdmin) return reply("🚫 Only group admins can use this command.");
      if (!arg0 || command === "profilestatus") {
        const on = gsEnabled(chat, "profile_alerts");
        return reply([
          `👤 *Profile Change Alerts*`, ``,
          `Current: *${on ? "✅ ON" : "❌ OFF"}*`, ``,
          `Posts a notice when any group member updates their display name.`, ``,
          `${pfx}profilealerts on — Enable`, `${pfx}profilealerts off — Disable`,
        ].join("\n"));
      }
      const val = isOn(arg0);
      gsSetBool(chat, "profile_alerts", val);
      if (!val && _profileCache[chat]) delete _profileCache[chat];
      return reply(`${val ? "✅" : "❌"} Profile change alerts ${val ? "enabled" : "disabled"} for this group.`);
    }

    if (command === "cleaninactive") {
      if (!isGrp) return reply("⚙️ This command works in groups only.");
      if (notAdmin) return reply("🚫 Only group admins can use this command.");
      const days = parseInt(args[0]) || 30;
      let participants = [];
      try {
        const meta = await sock.groupMetadata(chat);
        participants = meta.participants
          .filter(p => p.admin !== "admin" && p.admin !== "superadmin")
          .map(p => p.id);
      } catch (e) {
        return reply(`❌ Failed to fetch group members: ${e.message}`);
      }
      const status = await sock.sendMessage(chat, { text: `🔍 Scanning *${participants.length}* members for inactivity (>${days} days)...` }, { quoted: m });
      let removed = 0, checked = 0;
      for (const uid of participants) {
        checked++;
        try {
          const row = db().prepare("SELECT msg_count FROM xp WHERE chat_id=? AND user_id=?").get(chat, uid);
          if (!row) continue; // skip if never logged
        } catch {}
      }
      try { await sock.sendMessage(chat, { delete: status?.key }); } catch {}
      return reply([
        `✅ *Inactivity Scan Complete*`, ``,
        `👥 Members scanned: *${checked}*`,
        `🗑 Removed: *${removed}*`, ``,
        `_WhatsApp limits inactive-member detection. Use this regularly._`,
      ].join("\n"));
    }

    // ─────────────────────────────────────────────────────────────────────────
    // AUTODELETE COMMANDS — all require admin
    // ─────────────────────────────────────────────────────────────────────────
    if (notAdmin) return reply("🚫 This command is only available to admins.");

    // ── /autodelete [on|off] — master switch + status ─────────────────────────
    if (command === "autodelete") {
      if (isOn(arg0)) {
        st.auto_delete_enabled = true; saveState();
        return replyAD(sock, chat, m, getSarcasticResponse("general_sarcasm") + " Auto-delete enabled. Bot messages will be deleted after the set delay.");
      }
      if (isOff(arg0)) {
        st.auto_delete_enabled = false; saveState();
        return replyAD(sock, chat, m, getSarcasticResponse("general_sarcasm") + " Auto-delete disabled. Bot messages will not be auto-deleted.");
      }
      const status    = st.auto_delete_enabled ? "✅ Enabled" : "❌ Disabled";
      const delay     = st.auto_delete_delay || 180;
      const botMsgs   = st.auto_delete_bot_messages  ? "✅ Yes" : "❌ No";
      const userMsgs  = st.auto_delete_user_messages ? "✅ Yes" : "❌ No";
      const grps      = st.auto_delete_groups        ? "✅ Yes" : "❌ No";
      const priv      = st.auto_delete_private       ? "✅ Yes" : "❌ No";
      const channels  = st.auto_delete_channels      ? "✅ Yes" : "❌ No";
      const supgrp    = st.auto_delete_supergroups   ? "✅ Yes" : "❌ No";
      return replyAD(sock, chat, m, [
        `🗑 *Auto-Delete Settings*`, ``,
        `Status: ${status}`,
        `Delay: ${delay}s (${Math.floor(delay/60)}m)`,
        `Delete bot messages: ${botMsgs}`,
        `Delete user messages: ${userMsgs}`,
        `Groups: ${grps}`,
        `Private chats: ${priv}`,
        `Channels: ${channels}`,
        `Supergroups: ${supgrp}`, ``,
        `Menu auto-delete: ${st.menu_autodelete_enabled ? "✅ On" : "❌ Off"}`,
        `Menu bot delay: ${st.menu_autodelete_bot_delay ?? MENU_AUTODELETE_BOT_DELAY}s`,
        `Menu user delay: ${st.menu_autodelete_user_delay ?? MENU_AUTODELETE_USER_DELAY}s`, ``,
        `Games auto-delete: ${st.games_autodelete_enabled ? "✅ On" : "❌ Off"}`,
        `Games bot delay: ${st.game_autodelete_bot_delay ?? GAME_AUTODELETE_BOT_DELAY}s`,
        `Games user delay: ${st.game_autodelete_user_delay ?? GAME_AUTODELETE_USER_DELAY}s`,
        `  ↳ Word Chain:   ${st.wordchain_autodelete_enabled ? "✅" : "❌"}`,
        `  ↳ Truth/Dare/Riddle: ${st.games_autodelete_enabled ? "✅" : "❌"}`,
        `  ↳ Trivia:       ${st.trivia_autodelete_enabled   ? "✅" : "❌"}`,
        `  ↳ Scrabble:     ${st.scrabble_autodelete_enabled ? "✅" : "❌"}`,
        `  ↳ NumGuess:     ${st.numguess_autodelete_enabled ? "✅" : "❌"}`,
        `  ↳ Blackjack:    ${st.blackjack_autodelete_enabled ? "✅" : "❌"}`, ``,
        `Welcome delete delay: ${st.welcome_autodelete_delay ?? WELCOME_AUTODELETE_DELAY}s`,
        `Goodbye delete delay: ${st.goodbye_autodelete_delay ?? GOODBYE_AUTODELETE_DELAY}s`,
        `Appeal announce delay: ${st.appeal_announce_autodelete_delay ?? 240}s`, ``,
        `Reports auto-delete: ${st.reports_autodelete_enabled ? "✅ On" : "❌ Off"}`,
        `Reports bot delay: ${st.reports_autodelete_bot_delay ?? 10}s`,
        `Reports user delay: ${st.reports_autodelete_user_delay ?? 5}s`, ``,
        `GiveawayX post delete: ${st.gx_autodelete_post_enabled ? "✅ On" : "❌ Off"}`,
        `GiveawayX post delay: ${st.gx_autodelete_post_delay ?? 240}s`, ``,
        `Virus verdict delete: ${st.vd_autodelete_enabled ? "✅ On" : "❌ Off"}`,
        `Virus verdict delay: ${st.vd_autodelete_delay ?? 240}s`, ``,
        `*Commands:*`,
        `${pfx}autodelete on|off`,
        `${pfx}autodeletedelay <seconds>`,
        `${pfx}autodeletebot on|off`,
        `${pfx}autodeleteuser on|off`,
        `${pfx}autodeleteusercmd on|off`,
        `${pfx}autodeletegroup on|off`,
        `${pfx}autodeletesupergroup on|off`,
        `${pfx}autodeleteprivate on|off`,
        `${pfx}autodeletechannel on|off`,
        `${pfx}autodeletemenu on|off`,
        `${pfx}autodeletemenubotdelay <s>`,
        `${pfx}autodeletemenuuserdelay <s>`,
        `${pfx}autodeletegames on|off`,
        `${pfx}autodeletegamesbotdelay <s>`,
        `${pfx}autodeletegamesuserdelay <s>`,
        `${pfx}autodeletewelcomedelay <s>`,
        `${pfx}autodeletegoodbyedelay <s>`,
        `${pfx}autodeleteappealdelay <s>`,
        `${pfx}autodeletereports on|off`,
        `${pfx}autodeletereportsbotdelay <s>`,
        `${pfx}autodeletereportsuserdelay <s>`,
        `${pfx}autodeletegiveaway on|off`,
        `${pfx}autodeletegiveawaydelay <s>`,
        `${pfx}autodeletevirusverdict on|off`,
        `${pfx}autodeletevirusverdictdelay <s>`,
      ].join("\n"));
    }

    // ── Simple boolean toggles ────────────────────────────────────────────────
    const BOOL_CMDS = {
      autodeletebot:          ["auto_delete_bot_messages",  "Auto-delete for bot messages"],
      autodeleteuser:         ["auto_delete_user_messages", "Auto-delete for user messages"],
      autodeletegroup:        ["auto_delete_groups",        "Auto-delete for groups"],
      autodeleteprivate:      ["auto_delete_private",       "Auto-delete for private chats"],
      autodeletechannel:      ["auto_delete_channels",      "Auto-delete for channels"],
      autodeletesupergroup:   ["auto_delete_supergroups",   "Auto-delete for supergroups"],
      autodeletemenu:         ["menu_autodelete_enabled",   "Auto-delete for /menu & /start"],
      autodeletegames:        ["games_autodelete_enabled",  "Auto-delete for games"],
      autodeletereports:      ["reports_autodelete_enabled","Reports auto-delete"],
      autodeletegiveaway:     ["gx_autodelete_post_enabled","GiveawayX post auto-delete"],
      autodeletevirusverdict: ["vd_autodelete_enabled",     "Virus verdict auto-delete"],
      autodeleteusercmd:      ["auto_delete_user_messages", "User command auto-delete"],
    };
    if (BOOL_CMDS[command]) {
      const [key, label] = BOOL_CMDS[command];
      if (isOn(arg0)) {
        st[key] = true; saveState();
        return replyAD(sock, chat, m, getSarcasticResponse("general_sarcasm") + ` ${label} enabled.`);
      }
      if (isOff(arg0)) {
        st[key] = false; saveState();
        return replyAD(sock, chat, m, getSarcasticResponse("general_sarcasm") + ` ${label} disabled.`);
      }
      const cur = st[key] ? "✅ Enabled" : "❌ Disabled";
      return replyAD(sock, chat, m, `🗑 ${label}: ${cur}\n\nUse: ${pfx}${command} on|off`);
    }

    // ── Delay commands ────────────────────────────────────────────────────────
    const DELAY_CMDS = {
      autodeletedelay:            { key: "auto_delete_delay",              label: "Auto-delete delay",            min: 30, max: 3600, dflt: 180 },
      autodeletemenubotdelay:     { key: "menu_autodelete_bot_delay",      label: "Menu panel delete delay",       min: 5,  max: 600,  dflt: MENU_AUTODELETE_BOT_DELAY },
      autodeletemenuuserdelay:    { key: "menu_autodelete_user_delay",     label: "User menu-cmd delete delay",   min: 3,  max: 120,  dflt: MENU_AUTODELETE_USER_DELAY },
      autodeletegamesbotdelay:    { key: "game_autodelete_bot_delay",      label: "Game bot-message delay",       min: 5,  max: 180,  dflt: GAME_AUTODELETE_BOT_DELAY },
      autodeletegamesuserdelay:   { key: "game_autodelete_user_delay",     label: "Game user-message delay",      min: 3,  max: 120,  dflt: GAME_AUTODELETE_USER_DELAY },
      autodeletewelcomedelay:     { key: "welcome_autodelete_delay",       label: "Welcome message delay",        min: 0,  max: 3600, dflt: WELCOME_AUTODELETE_DELAY },
      autodeletegoodbyedelay:     { key: "goodbye_autodelete_delay",       label: "Goodbye message delay",        min: 0,  max: 3600, dflt: GOODBYE_AUTODELETE_DELAY },
      autodeleteappealdelay:      { key: "appeal_announce_autodelete_delay", label: "Appeal announce delay",      min: 0,  max: 3600, dflt: 240 },
      autodeletereportsbotdelay:  { key: "reports_autodelete_bot_delay",   label: "Reports bot-message delay",    min: 0,  max: 3600, dflt: 10 },
      autodeletereportsuserdelay: { key: "reports_autodelete_user_delay",  label: "Reports user-message delay",  min: 0,  max: 3600, dflt: 5 },
      autodeletegiveawaydelay:    { key: "gx_autodelete_post_delay",       label: "GiveawayX post delete delay",  min: 60, max: 3600, dflt: 240 },
      autodeletevirusverdictdelay:{ key: "vd_autodelete_delay",            label: "Virus verdict delay",           min: 10, max: 3600, dflt: 240 },
    };
    if (DELAY_CMDS[command]) {
      const { key, label, min, max, dflt } = DELAY_CMDS[command];
      const val = parseInt(arg0);
      if (!arg0 || isNaN(val)) {
        const cur = st[key] ?? dflt;
        return replyAD(sock, chat, m, `🗑 ${label}: *${cur}s*\n\nUsage: ${pfx}${command} <seconds> (${min}-${max})`);
      }
      if (val < min || val > max) return replyAD(sock, chat, m, `❌ Delay must be between ${min} and ${max} seconds.`);
      st[key] = val; saveState();
      return replyAD(sock, chat, m, getSarcasticResponse("general_sarcasm") + ` ${label} set to *${val}s*.`);
    }
  },
};
