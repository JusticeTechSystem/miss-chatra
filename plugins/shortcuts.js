// plugins/shortcuts.js — Miss Chatra Command Shortcuts
// Create short aliases for any bot command
// e.g. /shortcut sc biblesearch → /sc = /biblesearch
"use strict";

const fs   = require("fs");
const path = require("path");

const DB_FILE = path.join(__dirname, "..", "database", "shortcuts.json");

function load() {
  try { return JSON.parse(fs.readFileSync(DB_FILE, "utf8")); } catch { return {}; }
}
function save(data) {
  try {
    if (!fs.existsSync(path.dirname(DB_FILE))) fs.mkdirSync(path.dirname(DB_FILE),{recursive:true});
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  } catch {}
}

// ── Handle shortcut execution (called from message.js) ────────────────────────
// Returns { matched: true, fullCommand } if a shortcut was found
function resolveShortcut(cmd) {
  const shortcuts = load();
  const all = {};
  // Merge global and per-user? For simplicity — global shortcuts only
  for (const [key, val] of Object.entries(shortcuts.global || {})) {
    all[key.toLowerCase()] = val;
  }
  return all[cmd.toLowerCase()] || null;
}

module.exports = {
  name: "Shortcuts",
  category: "tools",
  desc: "Create short command aliases — e.g. /shortcut sc biblesearch",
  command: [
    "shortcut","sc","shortcuts","myshortcuts",
    "addshortcut","delshortcut","clearshortcuts","listshortcuts",
  ],
  resolveShortcut,

  run: async ({ sock, m, args, command, chatId, userId, reply, prefix, isOwner, isDev }) => {
    const pfx  = prefix || "/";
    const shortcuts = load();
    if (!shortcuts.global) shortcuts.global = {};

    // ── LIST shortcuts ────────────────────────────────────────────────────────
    if (["myshortcuts","listshortcuts","shortcuts"].includes(command) ||
        (command === "shortcut" && !args.length)) {
      const global = shortcuts.global || {};
      const entries = Object.entries(global);
      if (!entries.length) {
        return reply([
          `📌 *Command Shortcuts*`,``,
          `No shortcuts set yet.`,``,
          `*Usage:* ${pfx}shortcut <alias> <command>`,``,
          `*Examples:*`,
          `  ${pfx}shortcut bs biblesearch`,
          `  ${pfx}shortcut ts topscorer`,
          `  ${pfx}shortcut vi viewonce`,
          `  ${pfx}shortcut ls livescore`,``,
          `Then use: *${pfx}bs faith and hope* instead of *${pfx}biblesearch faith and hope*`,
        ].join("\n"));
      }
      const lines = [`📌 *Active Shortcuts (${entries.length})*\n`];
      for (const [alias, target] of entries.sort()) {
        lines.push(`  *${pfx}${alias}* → *${pfx}${target}*`);
      }
      lines.push(`\n_${pfx}delshortcut <alias> to remove_`);
      lines.push(`_${pfx}clearshortcuts to remove all_`);
      return reply(lines.join("\n"));
    }

    // ── ADD shortcut ──────────────────────────────────────────────────────────
    if (["shortcut","addshortcut","sc"].includes(command) && args.length >= 2) {
      const alias  = args[0].toLowerCase().replace(/[^a-z0-9]/g, "");
      const target = args[1].toLowerCase().replace(/[^a-z0-9]/g, "");

      if (!alias || alias.length < 1) return reply("❌ Alias must be at least 1 character.");
      if (!target)                    return reply("❌ You must specify a target command.");
      if (alias.length > 10)          return reply("❌ Alias too long — max 10 characters.");

      // Don't allow overwriting core commands
      const coreProtected = ["menu","help","start","ping","restart","shutdown","ban","kick","broadcast"];
      if (coreProtected.includes(alias)) return reply(`❌ Cannot override core command *${alias}*.`);

      shortcuts.global[alias] = target;
      save(shortcuts);
      return reply([
        `✅ *Shortcut Created*`,``,
        `*${pfx}${alias}* → *${pfx}${target}*`,``,
        `Now type *${pfx}${alias}* to run *${pfx}${target}*`,
        `You can also pass arguments: *${pfx}${alias} epl*`,``,
        `_${pfx}shortcuts — view all shortcuts_`,
        `_${pfx}delshortcut ${alias} — remove this shortcut_`,
      ].join("\n"));
    }

    // ── DELETE shortcut ───────────────────────────────────────────────────────
    if (command === "delshortcut") {
      const alias = (args[0]||"").toLowerCase().replace(/[^a-z0-9]/g,"");
      if (!alias) return reply(`Usage: ${pfx}delshortcut <alias>`);
      if (!shortcuts.global[alias]) return reply(`❌ Shortcut *${pfx}${alias}* not found.`);
      const target = shortcuts.global[alias];
      delete shortcuts.global[alias];
      save(shortcuts);
      return reply(`✅ Shortcut *${pfx}${alias}* (→ ${pfx}${target}) removed.`);
    }

    // ── CLEAR all shortcuts ───────────────────────────────────────────────────
    if (command === "clearshortcuts") {
      if (!isOwner && !isDev) return reply("🔒 Only the bot owner can clear all shortcuts.");
      const count = Object.keys(shortcuts.global||{}).length;
      shortcuts.global = {};
      save(shortcuts);
      return reply(`✅ All ${count} shortcuts cleared.`);
    }

    // ── Help ──────────────────────────────────────────────────────────────────
    return reply([
      `📌 *Command Shortcuts*`,``,
      `Create short aliases for any bot command.`,``,
      `*Commands:*`,
      `  ${pfx}shortcut <alias> <cmd> — Create shortcut`,
      `  ${pfx}shortcuts              — List all shortcuts`,
      `  ${pfx}delshortcut <alias>    — Delete a shortcut`,
      `  ${pfx}clearshortcuts         — Clear all (owner only)`,``,
      `*Examples:*`,
      `  ${pfx}shortcut bs biblesearch`,
      `  ${pfx}shortcut ts topscorer`,
      `  ${pfx}shortcut vi viewonce`,
      `  ${pfx}shortcut ls livescore`,
      `  ${pfx}shortcut dp getdp`,``,
      `*After creating:*`,
      `  ${pfx}bs love and forgiveness`,
      `  ${pfx}ts epl`,
      `  ${pfx}ls champions league`,
    ].join("\n"));
  }
};
