// plugins/economy.js — Miss Chatra Economy System (WA port)
// Ported from Telegram p45_economy.py
"use strict";

const { db } = require("../library/db");

// ── DB setup ──────────────────────────────────────────────────────────────────
function ensureTables() {
  try {
    const d = db();
    d.prepare(`CREATE TABLE IF NOT EXISTS economy (
      chat_id TEXT, user_id TEXT, balance INTEGER DEFAULT 0,
      bank INTEGER DEFAULT 0, last_daily INTEGER DEFAULT 0,
      last_work INTEGER DEFAULT 0,
      PRIMARY KEY (chat_id, user_id)
    )`).run();
    d.prepare(`CREATE TABLE IF NOT EXISTS eco_transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      chat_id TEXT, from_id TEXT, to_id TEXT,
      amount INTEGER, note TEXT, ts INTEGER
    )`).run();
  } catch {}
}
ensureTables();

function getBalance(chatId, userId) {
  try {
    const d = db();
    d.prepare("INSERT OR IGNORE INTO economy(chat_id,user_id) VALUES(?,?)").run(chatId, userId);
    return d.prepare("SELECT balance, bank, last_daily, last_work FROM economy WHERE chat_id=? AND user_id=?").get(chatId, userId) || { balance: 0, bank: 0, last_daily: 0, last_work: 0 };
  } catch { return { balance: 0, bank: 0, last_daily: 0, last_work: 0 }; }
}
function addBalance(chatId, userId, amount) {
  try { db().prepare("UPDATE economy SET balance=balance+? WHERE chat_id=? AND user_id=?").run(amount, chatId, userId); } catch {}
}
function setBalance(chatId, userId, field, val) {
  try { db().prepare(`UPDATE economy SET ${field}=? WHERE chat_id=? AND user_id=?`).run(val, chatId, userId); } catch {}
}
function getTop(chatId, limit = 10) {
  try {
    return db().prepare("SELECT user_id, balance+bank AS total FROM economy WHERE chat_id=? ORDER BY total DESC LIMIT ?").all(chatId, limit);
  } catch { return []; }
}

const DAILY_AMOUNT = 500;
const WORK_MIN = 50, WORK_MAX = 250;
const DAILY_CD = 86400; // 24h in seconds
const WORK_CD  = 3600;  // 1h in seconds

const WORK_MSGS = [
  "delivered packages 📦",
  "fixed a computer 💻",
  "sold merch 🛍️",
  "drove Uber 🚗",
  "wrote an article ✍️",
  "did some coding 👨‍💻",
  "helped at the market 🛒",
  "gave tutoring lessons 📚",
  "freelanced a logo design 🎨",
  "repaired phones 📱",
];

const CURRENCY = "💰";

module.exports = {
  name: "Economy",
  category: "fun",
  command: ["balance","bal","daily","work","pay","transfer","give","ecorich","ecotop","bank","deposit","withdraw","robstats"],

  run: async ({ sock, m, command, args, reply, prefix, chatId, userId, isOwner, isDev, isAdmin, pushName, mentionedJid }) => {
    const chat   = chatId || m?.chat;
    const pfx    = prefix || "/";
    const name   = pushName || userId?.split("@")[0] || "User";
    const now    = Math.floor(Date.now() / 1000);

    ensureTables();

    // ── /balance ──────────────────────────────────────────────────────────────
    if (command === "balance" || command === "bal") {
      const target = mentionedJid?.[0] || userId;
      const tName  = target === userId ? name : target.split("@")[0];
      const row    = getBalance(chat, target);
      return reply(`${CURRENCY} *${tName}'s Balance*\n\n💵 Wallet: ${row.balance.toLocaleString()} coins\n🏦 Bank: ${row.bank.toLocaleString()} coins\n━━━━━━━━\n💰 Total: ${(row.balance + row.bank).toLocaleString()} coins`);
    }

    // ── /daily ────────────────────────────────────────────────────────────────
    if (command === "daily") {
      const row = getBalance(chat, userId);
      const diff = now - (row.last_daily || 0);
      if (diff < DAILY_CD) {
        const remaining = DAILY_CD - diff;
        const h = Math.floor(remaining / 3600), mn = Math.floor((remaining % 3600) / 60);
        return reply(`⏳ Daily already claimed!\n\nCome back in *${h}h ${mn}m*.`);
      }
      addBalance(chat, userId, DAILY_AMOUNT);
      setBalance(chat, userId, "last_daily", now);
      return reply(`✅ *Daily Reward Claimed!*\n\n+${DAILY_AMOUNT} coins ${CURRENCY}\n\nYour wallet: ${(row.balance + DAILY_AMOUNT).toLocaleString()} coins`);
    }

    // ── /work ─────────────────────────────────────────────────────────────────
    if (command === "work") {
      const row = getBalance(chat, userId);
      const diff = now - (row.last_work || 0);
      if (diff < WORK_CD) {
        const remaining = WORK_CD - diff;
        const mn = Math.floor(remaining / 60);
        return reply(`⏳ You're still tired from your last job!\n\nRest for *${mn} minutes* first.`);
      }
      const earned = Math.floor(Math.random() * (WORK_MAX - WORK_MIN + 1)) + WORK_MIN;
      const task   = WORK_MSGS[Math.floor(Math.random() * WORK_MSGS.length)];
      addBalance(chat, userId, earned);
      setBalance(chat, userId, "last_work", now);
      return reply(`💼 *${name}* ${task} and earned *${earned} coins!* ${CURRENCY}\n\nTotal wallet: ${(row.balance + earned).toLocaleString()} coins`);
    }

    // ── /pay | /transfer | /give ──────────────────────────────────────────────
    if (["pay","transfer","give"].includes(command)) {
      const target = mentionedJid?.[0] || null;
      const amount = parseInt(args.find(a => /^\d+$/.test(a)));
      if (!target || !amount || amount <= 0) return reply(`❌ Usage: ${pfx}pay @user <amount>`);
      if (target === userId) return reply("❌ You can't pay yourself.");
      const row = getBalance(chat, userId);
      if (row.balance < amount) return reply(`❌ Insufficient funds! You have ${row.balance.toLocaleString()} coins.`);
      addBalance(chat, userId, -amount);
      addBalance(chat, target, amount);
      try {
        db().prepare("INSERT INTO eco_transactions(chat_id,from_id,to_id,amount,note,ts) VALUES(?,?,?,?,?,?)")
          .run(chat, userId, target, amount, "transfer", now);
      } catch {}
      return reply(`✅ *Transfer Complete!*\n\nSent *${amount.toLocaleString()} coins* to @${target.split("@")[0]} ${CURRENCY}`);
    }

    // ── /deposit ──────────────────────────────────────────────────────────────
    if (command === "deposit" || (command === "bank" && args[0] === "deposit")) {
      const amount = parseInt(args.find(a => /^\d+$/.test(a)) || args[0]);
      if (!amount || amount <= 0) return reply(`❌ Usage: ${pfx}deposit <amount>`);
      const row = getBalance(chat, userId);
      if (row.balance < amount) return reply(`❌ Not enough in wallet. Balance: ${row.balance.toLocaleString()} coins.`);
      addBalance(chat, userId, -amount);
      setBalance(chat, userId, "bank", row.bank + amount);
      return reply(`🏦 Deposited *${amount.toLocaleString()} coins* to bank.\n\nBank: ${(row.bank + amount).toLocaleString()} | Wallet: ${(row.balance - amount).toLocaleString()}`);
    }

    // ── /withdraw ─────────────────────────────────────────────────────────────
    if (command === "withdraw" || (command === "bank" && args[0] === "withdraw")) {
      const amount = parseInt(args.find(a => /^\d+$/.test(a)) || args[0]);
      if (!amount || amount <= 0) return reply(`❌ Usage: ${pfx}withdraw <amount>`);
      const row = getBalance(chat, userId);
      if (row.bank < amount) return reply(`❌ Not enough in bank. Bank: ${row.bank.toLocaleString()} coins.`);
      addBalance(chat, userId, amount);
      setBalance(chat, userId, "bank", row.bank - amount);
      return reply(`🏦 Withdrew *${amount.toLocaleString()} coins* from bank.\n\nWallet: ${(row.balance + amount).toLocaleString()} | Bank: ${(row.bank - amount).toLocaleString()}`);
    }

    // ── /bank (show bank) ─────────────────────────────────────────────────────
    if (command === "bank") {
      const row = getBalance(chat, userId);
      return reply(`🏦 *${name}'s Bank Account*\n\n💳 Bank Balance: ${row.bank.toLocaleString()} coins\n💵 Wallet: ${row.balance.toLocaleString()} coins\n\n${pfx}deposit <amount> — move to bank\n${pfx}withdraw <amount> — move to wallet`);
    }

    // ── /ecotop | /ecorich ────────────────────────────────────────────────────
    if (command === "ecotop" || command === "ecorich") {
      const top  = getTop(chat, 10);
      if (!top.length) return reply("📊 No economy data yet. Use /daily to get started!");
      const medals = ["🥇","🥈","🥉"];
      const lines  = ["💰 *Economy Leaderboard*\n"];
      for (let i = 0; i < top.length; i++) {
        lines.push(`${medals[i] || `${i+1}.`} @${top[i].user_id.split("@")[0]} — ${top[i].total.toLocaleString()} coins`);
      }
      return reply(lines.join("\n"));
    }

    // Default: balance
    const row = getBalance(chat, userId);
    return reply(`${CURRENCY} *${name}'s Wallet*\n\n💵 ${row.balance.toLocaleString()} coins\n🏦 Bank: ${row.bank.toLocaleString()} coins\n\nCommands: ${pfx}daily • ${pfx}work • ${pfx}pay • ${pfx}deposit • ${pfx}withdraw • ${pfx}ecotop`);
  }
};
