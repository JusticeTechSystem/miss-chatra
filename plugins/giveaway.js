// plugins/giveaway.js — Miss Chatra Giveaway System (WA port)
// Ported from Telegram p31_giveawayx.py
"use strict";

const { getState, saveState } = require("../library/state");
const { gsGet } = require("../library/db");

// ── Active giveaways: chatId → giveaway ──────────────────────────────────────
// State key: state.giveaways = { chatId: giveawayObj }
function getGiveaways() {
  const s = getState();
  if (!s.giveaways) s.giveaways = {};
  return s.giveaways;
}

function fmtDuration(ms) {
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s`;
  if (s < 3600) return `${Math.floor(s/60)}m ${s%60}s`;
  return `${Math.floor(s/3600)}h ${Math.floor((s%3600)/60)}m`;
}

// Active timers: chatId → setTimeout handle
const _timers = {};

async function endGiveaway(sock, chatId, gw, reason = "time") {
  clearTimeout(_timers[chatId]);
  delete _timers[chatId];
  const giveaways = getGiveaways();
  delete giveaways[chatId];
  saveState();

  const entries = gw.entries || [];
  if (!entries.length) {
    await sock.sendMessage(chatId, { text: `📭 *Giveaway Ended*\n\nNo one entered the giveaway for *${gw.prize}*.\n\nBetter luck next time!` });
    return;
  }

  const winnerCount = Math.min(gw.winner_count || 1, entries.length);
  // Pick winners (shuffle + take first N)
  const shuffled = [...entries].sort(() => Math.random() - 0.5);
  const winners  = shuffled.slice(0, winnerCount);

  const winnerMentions = winners.map(uid => `@${uid.split("@")[0]}`).join(", ");
  const lines = [
    `🎉 *Giveaway Over!*`,
    ``,
    `🏆 *Prize:* ${gw.prize}`,
    `👥 *Entries:* ${entries.length}`,
    `🎊 *Winner${winnerCount > 1 ? "s" : ""}:* ${winnerMentions}`,
    ``,
    `Congratulations to the winner${winnerCount > 1 ? "s" : ""}! 🥳`,
    ``,
    `_Hosted by: ${gw.host_name}_`,
  ];
  await sock.sendMessage(chatId, { text: lines.join("\n"), mentions: winners });
}

module.exports = {
  name: "Giveaway",
  category: "moderation",
  command: ["giveaway","gstart","gend","gstatus","genter","greroll","glist"],

  run: async ({ sock, m, command, args, reply, prefix, chatId, userId, isOwner, isDev, isAdmin, pushName }) => {
    const chat   = chatId || m?.chat;
    const pfx    = prefix || "/";
    const name   = pushName || userId?.split("@")[0] || "User";
    const isGrp  = (chat || "").endsWith("@g.us");

    const HELP = [
      `🎉 *Miss Chatra Giveaway System*`, ``,
      `*Admin Commands:*`,
      `${pfx}gstart <prize> <duration> [winners]`,
      `  • duration: 30s, 5m, 1h, etc.`,
      `  • winners: how many to pick (default 1)`,
      `  • Example: ${pfx}gstart iPhone 5m 2`,
      `${pfx}gend       — End giveaway now & pick winners`,
      `${pfx}greroll    — Pick new winners from same pool`,
      `${pfx}gstatus    — Show current giveaway stats`,
      ``, `*User Commands:*`,
      `${pfx}genter     — Enter the active giveaway`,
      `${pfx}glist      — Show who entered`,
    ].join("\n");

    // ── /gstart ────────────────────────────────────────────────────────────────
    if (command === "gstart") {
      if (!isOwner && !isDev && !isAdmin) return reply("🔒 Only admins can start giveaways.");
      if (!isGrp) return reply("🎉 Giveaways can only be run in groups.");
      const giveaways = getGiveaways();
      if (giveaways[chat]) return reply("⚠️ A giveaway is already running. Use /gend to end it first.");

      // Parse args: prize duration [winners]
      // e.g. /gstart iPhone 5m 2
      if (args.length < 2) return reply(`❌ Usage: ${pfx}gstart <prize> <duration> [winners]\n\nExample: ${pfx}gstart AirPods 5m 1`);

      // Duration is the LAST numeric-with-unit token. Prize is everything before it.
      let durationStr = null, winnerCount = 1;
      const lastArg = args[args.length - 1];
      const lastLast = args[args.length - 2];
      // Check if last arg is a winner count (pure number)
      if (/^\d+$/.test(lastArg) && args.length >= 3) {
        winnerCount = Math.max(1, Math.min(20, parseInt(lastArg)));
        durationStr = lastLast;
        args.splice(-2); // remove last two, prize is rest
      } else if (/^\d+[smhd]$/i.test(lastArg)) {
        durationStr = lastArg;
        args.splice(-1);
      } else {
        return reply(`❌ Invalid duration. Use format like: 30s, 5m, 1h, 2d`);
      }

      const prize = args.join(" ").trim() || "Mystery Prize";

      // Parse duration to ms
      const match = durationStr.match(/^(\d+)([smhd])$/i);
      if (!match) return reply("❌ Invalid duration format. Use: 30s, 5m, 2h, 1d");
      const [, num, unit] = match;
      const multMap = { s: 1000, m: 60000, h: 3600000, d: 86400000 };
      const durationMs = parseInt(num) * multMap[unit.toLowerCase()];
      if (durationMs < 5000) return reply("❌ Minimum duration is 5 seconds.");
      if (durationMs > 7 * 86400000) return reply("❌ Maximum duration is 7 days.");

      const endTime = Date.now() + durationMs;
      const gw = {
        prize, winner_count: winnerCount, entries: [],
        host_id: userId, host_name: name,
        start_time: Date.now(), end_time: endTime,
        duration_ms: durationMs,
      };
      getGiveaways()[chat] = gw;
      saveState();

      const lines = [
        `🎉 *GIVEAWAY STARTED!*`,
        ``,
        `🏆 *Prize:* ${prize}`,
        `🎊 *Winners:* ${winnerCount}`,
        `⏱ *Duration:* ${fmtDuration(durationMs)}`,
        `🗓 *Ends:* ${new Date(endTime).toLocaleTimeString()}`,
        ``,
        `Type *${pfx}genter* to participate!`,
        ``,
        `_Hosted by: ${name}_`,
      ];
      await sock.sendMessage(chat, { text: lines.join("\n") }, { quoted: m });

      // Schedule end
      _timers[chat] = setTimeout(async () => {
        const current = getGiveaways()[chat];
        if (current) await endGiveaway(sock, chat, current, "time");
      }, durationMs);
      return;
    }

    // ── /genter ────────────────────────────────────────────────────────────────
    if (command === "genter") {
      const gw = getGiveaways()[chat];
      if (!gw) return reply("❌ No active giveaway right now.");
      if (gw.entries.includes(userId)) return reply("✋ You're already entered in this giveaway!");
      gw.entries.push(userId);
      saveState();
      return reply(`✅ *${name}*, you're in! 🎉\n\n${gw.entries.length} entr${gw.entries.length === 1 ? "y" : "ies"} so far.\n\nPrize: *${gw.prize}*`);
    }

    // ── /gstatus ───────────────────────────────────────────────────────────────
    if (command === "gstatus") {
      const gw = getGiveaways()[chat];
      if (!gw) return reply("❌ No active giveaway in this group.");
      const remaining = Math.max(0, gw.end_time - Date.now());
      return reply([
        `📊 *Giveaway Status*`,
        ``,
        `🏆 *Prize:* ${gw.prize}`,
        `👥 *Entries:* ${gw.entries.length}`,
        `🎊 *Winners:* ${gw.winner_count}`,
        `⏱ *Time Left:* ${fmtDuration(remaining)}`,
        ``,
        `_Type /genter to participate!_`,
      ].join("\n"));
    }

    // ── /gend ──────────────────────────────────────────────────────────────────
    if (command === "gend") {
      if (!isOwner && !isDev && !isAdmin) return reply("🔒 Only admins can end the giveaway.");
      const gw = getGiveaways()[chat];
      if (!gw) return reply("❌ No active giveaway to end.");
      await endGiveaway(sock, chat, gw, "admin_end");
      return;
    }

    // ── /greroll ───────────────────────────────────────────────────────────────
    if (command === "greroll") {
      if (!isOwner && !isDev && !isAdmin) return reply("🔒 Only admins can reroll.");
      // Use entries from last giveaway stored in state.last_giveaway
      const state = getState();
      const last  = state.last_giveaway?.[chat];
      if (!last?.entries?.length) return reply("❌ No previous giveaway entries found for this group.");
      const shuffled = [...last.entries].sort(() => Math.random() - 0.5);
      const winners  = shuffled.slice(0, last.winner_count || 1);
      const mentions = winners.map(uid => `@${uid.split("@")[0]}`).join(", ");
      await sock.sendMessage(chat, {
        text: `🔄 *Giveaway Reroll!*\n\nNew winner${winners.length > 1 ? "s" : ""}: ${mentions} 🎉\n\nPrize: *${last.prize}*`,
        mentions: winners,
      }, { quoted: m });
      return;
    }

    // ── /glist ─────────────────────────────────────────────────────────────────
    if (command === "glist") {
      const gw = getGiveaways()[chat];
      if (!gw) return reply("❌ No active giveaway.");
      if (!gw.entries.length) return reply("📭 No entries yet. Be the first! /genter");
      const list = gw.entries.map((uid, i) => `${i+1}. @${uid.split("@")[0]}`).join("\n");
      return reply(`📋 *Giveaway Entries (${gw.entries.length})*\n\n${list}\n\nPrize: *${gw.prize}*`);
    }

    return reply(HELP);
  }
};
