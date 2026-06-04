// plugins/ghostmode.js — Miss Chatra Ghost Mode
// Full stealth: offline presence, no last seen, no blue ticks, 25s heartbeat
"use strict";

const fs   = require("fs");
const path = require("path");

global.__CHATRA_GHOST     = global.__CHATRA_GHOST     || {};
global.__CHATRA_GHOST_TMR = global.__CHATRA_GHOST_TMR || {};

async function enableGhost(sock, ownerNum) {
  global.__CHATRA_GHOST[ownerNum] = true;

  // Layer 1: Patch sendPresenceUpdate — block all "visible" presence
  if (!sock.__ghostOrigPresence) sock.__ghostOrigPresence = sock.sendPresenceUpdate.bind(sock);
  sock.sendPresenceUpdate = async (type, jid) => {
    if (global.__CHATRA_GHOST[ownerNum] && ["available","composing","recording","paused"].includes(type)) return;
    return sock.__ghostOrigPresence(type, jid);
  };

  // Layer 2: Patch readMessages — no blue ticks
  if (!sock.__ghostOrigRead) sock.__ghostOrigRead = sock.readMessages.bind(sock);
  sock.readMessages = async (...a) => { if (global.__CHATRA_GHOST[ownerNum]) return; return sock.__ghostOrigRead(...a); };

  // Layer 3: Patch sendReadReceipt
  if (sock.sendReadReceipt && !sock.__ghostOrigRR) {
    sock.__ghostOrigRR = sock.sendReadReceipt.bind(sock);
    sock.sendReadReceipt = async (...a) => { if (global.__CHATRA_GHOST[ownerNum]) return; return sock.__ghostOrigRR(...a); };
  }

  // Layer 4: Patch sendReceipt
  if (sock.sendReceipt && !sock.__ghostOrigRC) {
    sock.__ghostOrigRC = sock.sendReceipt.bind(sock);
    sock.sendReceipt = async (...a) => {
      const type = a?.[2];
      if (global.__CHATRA_GHOST[ownerNum] && (!type || type === "read")) return;
      return sock.__ghostOrigRC(...a);
    };
  }

  // Go offline
  try { await sock.__ghostOrigPresence("unavailable"); } catch {}

  // Heartbeat — re-send unavailable every 25s so WA doesn't reset
  if (global.__CHATRA_GHOST_TMR[ownerNum]) clearInterval(global.__CHATRA_GHOST_TMR[ownerNum]);
  global.__CHATRA_GHOST_TMR[ownerNum] = setInterval(async () => {
    if (!global.__CHATRA_GHOST[ownerNum]) { clearInterval(global.__CHATRA_GHOST_TMR[ownerNum]); return; }
    try { await sock.__ghostOrigPresence("unavailable"); } catch {}
  }, 25000);

  // Persist ghost state
  try {
    const fs2   = require("fs"), path2 = require("path");
    const sf    = path2.join(__dirname, "..", "database", "bot_settings.json");
    let sets    = {}; try { sets = JSON.parse(fs2.readFileSync(sf,"utf8")); } catch {}
    sets.ghost_on = true;
    fs2.writeFileSync(sf, JSON.stringify(sets, null, 2));
  } catch {}
  console.log("[ghostmode] 👻 Ghost ON for", ownerNum);
}

async function disableGhost(sock, ownerNum) {
  global.__CHATRA_GHOST[ownerNum] = false;
  if (global.__CHATRA_GHOST_TMR[ownerNum]) { clearInterval(global.__CHATRA_GHOST_TMR[ownerNum]); delete global.__CHATRA_GHOST_TMR[ownerNum]; }
  if (sock.__ghostOrigPresence)   { sock.sendPresenceUpdate = sock.__ghostOrigPresence;    delete sock.__ghostOrigPresence; }
  if (sock.__ghostOrigRead)       { sock.readMessages       = sock.__ghostOrigRead;         delete sock.__ghostOrigRead; }
  if (sock.__ghostOrigRR)         { sock.sendReadReceipt    = sock.__ghostOrigRR;           delete sock.__ghostOrigRR; }
  if (sock.__ghostOrigRC)         { sock.sendReceipt        = sock.__ghostOrigRC;           delete sock.__ghostOrigRC; }
  try { await sock.sendPresenceUpdate("available"); } catch {}
  // Persist ghost state
  try {
    const fs2   = require("fs"), path2 = require("path");
    const sf    = path2.join(__dirname, "..", "database", "bot_settings.json");
    let sets    = {}; try { sets = JSON.parse(fs2.readFileSync(sf,"utf8")); } catch {}
    sets.ghost_on = false;
    fs2.writeFileSync(sf, JSON.stringify(sets, null, 2));
  } catch {}
  console.log("[ghostmode] 👁️ Ghost OFF for", ownerNum);
}

module.exports = {
  name: "GhostMode",
  category: "core",
  desc: "Full stealth mode — appears offline, no last seen, no blue ticks, 25s heartbeat",
  command: ["ghostmode"],
  enableGhost,
  disableGhost,

  run: async ({ sock, m, args, command, reply, isOwner, isDev, prefix }) => {
    const pfx = prefix || "/";
    if (!isOwner && !isDev) return reply("🔒 Owner/Dev only.");

    const own = (sock?.user?.id || "").split(":")[0].split("@")[0].replace(/\D/g,"");
    const sub = (args[0] || "").toLowerCase();
    const on  = !!(global.__CHATRA_GHOST[own]);

    if (!sub || sub === "status") {
      return reply([
        `👻 *Ghost Mode — Status*`,
        ``,
        `State      : ${on ? "👻 ACTIVE (Invisible)" : "👁️ Inactive (Visible)"}`,
        `Presence   : ${on ? "📵 Locked OFFLINE" : "📶 Online normally"}`,
        `Last Seen  : ${on ? "🕐 Suppressed" : "🕐 Visible"}`,
        `Blue Ticks : ${on ? "💬 Suppressed (3 layers)" : "💬 Active"}`,
        `Grey Ticks : ⚠️ Always show (WhatsApp protocol, cannot block)`,
        `Heartbeat  : ${on ? "🔄 Every 25s" : "⚫ Off"}`,
        ``,
        `${pfx}ghost on  — Go invisible`,
        `${pfx}ghost off — Go visible`,
      ].join("\n"));
    }

    if (sub === "on") {
      await enableGhost(sock, own);
      return reply([
        `╔══════════════════════════════════╗`,
        `👻 *Ghost Mode ACTIVATED*`,
        `╠══════════════════════════════════╣`,
        ``,
        `✅ Bot is now INVISIBLE`,
        `📵 Presence  : Appears OFFLINE`,
        `🕐 Last Seen : Hidden/suppressed`,
        `💬 Blue Ticks: Suppressed (3 layers)`,
        `⚠️ Grey Ticks : Still show (can't block)`,
        `🔄 Heartbeat : Active every 25s`,
        ``,
        `Commands still work normally. 👻`,
        ``,
        `To disable: *${pfx}ghost off*`,
        `╚══════════════════════════════════╝`,
      ].join("\n"));
    }

    if (sub === "off") {
      await disableGhost(sock, own);
      return reply([
        `╔══════════════════════════════════╗`,
        `👁️  *Ghost Mode DEACTIVATED*`,
        `╠══════════════════════════════════╣`,
        ``,
        `✅ Bot is now VISIBLE`,
        `📶 Presence  : Shows online normally`,
        `🕐 Last Seen : Visible again`,
        `💬 Blue Ticks: Restored`,
        `🔄 Heartbeat : Stopped`,
        ``,
        `Normal mode fully restored.`,
        `╚══════════════════════════════════╝`,
      ].join("\n"));
    }

    return reply(`Usage: ${pfx}ghost on/off/status`);
  },
};
