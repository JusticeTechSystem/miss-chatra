// library/db.js — Miss Chatra WA Database Layer
// Uses Node 22+ built-in node:sqlite (zero npm dependencies, works on any Node 22/24)
"use strict";

const { DatabaseSync } = require("node:sqlite");
const path = require("path");
const fs   = require("fs");

const DB_DIR  = path.join(__dirname, "..", "database");
const DB_PATH = path.join(DB_DIR, "chatra.db");

if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });

let _db;
function db() {
  if (!_db) {
    _db = new DatabaseSync(DB_PATH);
    _db.exec("PRAGMA journal_mode = WAL");
    _db.exec("PRAGMA foreign_keys = ON");
    initTables();
  }
  return _db;
}

function initTables() {
  const d = db();
  d.exec(`
    CREATE TABLE IF NOT EXISTS group_settings (
      chat_id TEXT PRIMARY KEY,
      rules_text TEXT DEFAULT '',
      welcome_on INTEGER DEFAULT 0,
      welcome_text TEXT DEFAULT '',
      clean_welcome INTEGER DEFAULT 0,
      goodbye_on INTEGER DEFAULT 0,
      goodbye_text TEXT DEFAULT '',
      clean_goodbye INTEGER DEFAULT 0,
      gatelock INTEGER DEFAULT 0,
      gatetype TEXT DEFAULT 'button',
      gateholdtime INTEGER DEFAULT 300,
      gatekick INTEGER DEFAULT 0,
      gatekicktime INTEGER DEFAULT 600,
      gatetext TEXT DEFAULT '',
      privatenotes INTEGER DEFAULT 0,
      guard_on INTEGER DEFAULT 0,
      autoguard INTEGER DEFAULT 0,
      guard_window INTEGER DEFAULT 10,
      guard_bantime INTEGER DEFAULT 600,
      antilink_mode TEXT DEFAULT 'off',
      antiforward_mode TEXT DEFAULT 'off',
      antibadword_mode TEXT DEFAULT 'off',
      antinsfw INTEGER DEFAULT 0,
      chatbot_on INTEGER DEFAULT 0,
      dl_enabled INTEGER DEFAULT 0,
      autotype INTEGER DEFAULT 0,
      autorecord INTEGER DEFAULT 0,
      autorecordtyping INTEGER DEFAULT 0,
      autoreact_on INTEGER DEFAULT 0,
      autoreact_emoji TEXT DEFAULT '[]',
      profile_alerts INTEGER DEFAULT 0,
      autoclean_enabled INTEGER DEFAULT 0,
      muted_users TEXT DEFAULT '[]'
    );

    CREATE TABLE IF NOT EXISTS warns (
      chat_id TEXT,
      user_id TEXT,
      count INTEGER DEFAULT 0,
      PRIMARY KEY(chat_id, user_id)
    );

    CREATE TABLE IF NOT EXISTS notes (
      chat_id TEXT,
      name TEXT,
      reply TEXT,
      PRIMARY KEY(chat_id, name)
    );

    CREATE TABLE IF NOT EXISTS filters (
      chat_id TEXT,
      trigger TEXT,
      reply TEXT,
      PRIMARY KEY(chat_id, trigger)
    );

    CREATE TABLE IF NOT EXISTS badwords (
      chat_id TEXT,
      word TEXT,
      PRIMARY KEY(chat_id, word)
    );

    CREATE TABLE IF NOT EXISTS xp (
      chat_id TEXT,
      user_id TEXT,
      msg_count INTEGER DEFAULT 0,
      xp INTEGER DEFAULT 0,
      PRIMARY KEY(chat_id, user_id)
    );

    CREATE TABLE IF NOT EXISTS gate_pending (
      chat_id TEXT,
      user_id TEXT,
      token TEXT,
      answer TEXT,
      created_at INTEGER,
      PRIMARY KEY(chat_id, user_id)
    );

    CREATE TABLE IF NOT EXISTS restrictions (
      chat_id TEXT,
      user_id TEXT,
      action TEXT,
      reason TEXT,
      by_id TEXT,
      ts INTEGER,
      PRIMARY KEY(chat_id, user_id)
    );

    CREATE TABLE IF NOT EXISTS report_counts (
      chat_id TEXT,
      target_id TEXT,
      reporter_id TEXT,
      count INTEGER DEFAULT 1,
      ts INTEGER,
      PRIMARY KEY(chat_id, target_id, reporter_id)
    );

    CREATE TABLE IF NOT EXISTS economy (
      chat_id TEXT,
      user_id TEXT,
      balance INTEGER DEFAULT 1000,
      PRIMARY KEY(chat_id, user_id)
    );
  `);
}

// ── Safe column migration (adds column if missing) ────────────────────────────
function tryAddCol(table, col, type = "TEXT DEFAULT ''") {
  try { db().exec(`ALTER TABLE ${table} ADD COLUMN ${col} ${type}`); } catch {}
}

// ── Group Settings ─────────────────────────────────────────────────────────────
function gsGet(chatId) {
  if (chatId && !chatId.endsWith("@g.us")) {
    return {
      antilink_mode: "off", antiforward_mode: "off", antibadword_mode: "off",
      antinsfw: 0, guard_on: 0, chatbot_on: 0, dl_enabled: 0,
      privatenotes: 0, gatelock: 0, autotype: 0, autorecord: 0,
      autorecordtyping: 0, autoreact_on: 0, autoreact_emoji: [],
      profile_alerts: 0, autoclean_enabled: 0, muted_users: [],
    };
  }
  const d = db();
  // Run migrations silently
  ["autotype INTEGER DEFAULT 0","autorecord INTEGER DEFAULT 0",
   "autorecordtyping INTEGER DEFAULT 0","autoreact_on INTEGER DEFAULT 0",
   "autoreact_emoji TEXT DEFAULT '[]'","profile_alerts INTEGER DEFAULT 0",
   "autoclean_enabled INTEGER DEFAULT 0","dl_enabled INTEGER DEFAULT 0",
  ].forEach(c => { try { d.exec(`ALTER TABLE group_settings ADD COLUMN ${c}`); } catch {} });

  let row = d.prepare("SELECT * FROM group_settings WHERE chat_id=?").get(chatId);
  if (!row) {
    d.prepare("INSERT OR IGNORE INTO group_settings(chat_id) VALUES(?)").run(chatId);
    row = d.prepare("SELECT * FROM group_settings WHERE chat_id=?").get(chatId);
  }
  // Parse JSON columns
  try { row.muted_users   = JSON.parse(row.muted_users   || "[]"); } catch { row.muted_users   = []; }
  try { row.autoreact_emoji = JSON.parse(row.autoreact_emoji || "[]"); } catch { row.autoreact_emoji = []; }
  return row;
}

function gsSet(chatId, fields) {
  const d = db();
  d.prepare("INSERT OR IGNORE INTO group_settings(chat_id) VALUES(?)").run(chatId);
  const keys = Object.keys(fields);
  if (!keys.length) return;
  const vals = keys.map(k => {
    const v = fields[k];
    return Array.isArray(v) ? JSON.stringify(v) : v;
  });
  const sets = keys.map(k => `${k}=?`).join(", ");
  d.prepare(`UPDATE group_settings SET ${sets} WHERE chat_id=?`).run(...vals, chatId);
}

// ── Mute helpers ───────────────────────────────────────────────────────────────
function muteUser(chatId, userId) {
  const gs = gsGet(chatId);
  const list = gs.muted_users || [];
  if (!list.includes(userId)) { list.push(userId); gsSet(chatId, { muted_users: list }); }
}
function unmuteUser(chatId, userId) {
  const gs = gsGet(chatId);
  gsSet(chatId, { muted_users: (gs.muted_users || []).filter(u => u !== userId) });
}
function isMuted(chatId, userId) {
  return (gsGet(chatId).muted_users || []).includes(userId);
}

// ── Warns ──────────────────────────────────────────────────────────────────────
function warnsAdd(chatId, userId, delta = 1) {
  const d = db();
  d.prepare("INSERT OR IGNORE INTO warns(chat_id,user_id,count) VALUES(?,?,0)").run(chatId, userId);
  d.prepare("UPDATE warns SET count=count+? WHERE chat_id=? AND user_id=?").run(delta, chatId, userId);
  return d.prepare("SELECT count FROM warns WHERE chat_id=? AND user_id=?").get(chatId, userId)?.count || 0;
}
function warnsGet(chatId, userId) {
  return db().prepare("SELECT count FROM warns WHERE chat_id=? AND user_id=?").get(chatId, userId)?.count || 0;
}
function warnsReset(chatId, userId) {
  db().prepare("DELETE FROM warns WHERE chat_id=? AND user_id=?").run(chatId, userId);
}

// ── Notes ──────────────────────────────────────────────────────────────────────
function noteSave(chatId, name, reply) {
  db().prepare("INSERT OR REPLACE INTO notes(chat_id,name,reply) VALUES(?,?,?)").run(chatId, name.toLowerCase(), reply);
}
function noteGet(chatId, name) {
  return db().prepare("SELECT reply FROM notes WHERE chat_id=? AND name=?").get(chatId, name.toLowerCase())?.reply || null;
}
function noteDelete(chatId, name) {
  db().prepare("DELETE FROM notes WHERE chat_id=? AND name=?").run(chatId, name.toLowerCase());
}
function noteList(chatId) {
  return db().prepare("SELECT name FROM notes WHERE chat_id=? ORDER BY name").all(chatId).map(r => r.name);
}
function notesClearAll(chatId) {
  db().prepare("DELETE FROM notes WHERE chat_id=?").run(chatId);
}

// ── Filters ────────────────────────────────────────────────────────────────────
function filtSave(chatId, trigger, reply) {
  db().prepare("INSERT OR REPLACE INTO filters(chat_id,trigger,reply) VALUES(?,?,?)").run(chatId, trigger.toLowerCase(), reply);
}
function filtDelete(chatId, trigger) {
  db().prepare("DELETE FROM filters WHERE chat_id=? AND trigger=?").run(chatId, trigger.toLowerCase());
}
function filtList(chatId) {
  return db().prepare("SELECT trigger FROM filters WHERE chat_id=? ORDER BY trigger").all(chatId).map(r => r.trigger);
}
function filtMatch(chatId, textLower) {
  const rows = db().prepare("SELECT trigger, reply FROM filters WHERE chat_id=?").all(chatId);
  for (const { trigger, reply } of rows) {
    if (trigger && textLower.includes(trigger)) return { trigger, reply };
  }
  return null;
}

// ── Badwords ───────────────────────────────────────────────────────────────────
function badwordAdd(chatId, word) {
  db().prepare("INSERT OR IGNORE INTO badwords(chat_id,word) VALUES(?,?)").run(chatId, word.toLowerCase());
}
function badwordDel(chatId, word) {
  db().prepare("DELETE FROM badwords WHERE chat_id=? AND word=?").run(chatId, word.toLowerCase());
}
function badwordList(chatId) {
  return db().prepare("SELECT word FROM badwords WHERE chat_id=? ORDER BY word").all(chatId).map(r => r.word);
}
function badwordHit(chatId, textLower) {
  const words = badwordList(chatId);
  for (const w of words) { if (w && textLower.includes(w)) return w; }
  return null;
}

// ── XP ─────────────────────────────────────────────────────────────────────────
function xpInc(chatId, userId) {
  const d = db();
  d.prepare("INSERT OR IGNORE INTO xp(chat_id,user_id,msg_count,xp) VALUES(?,?,0,0)").run(chatId, userId);
  d.prepare("UPDATE xp SET msg_count=msg_count+1 WHERE chat_id=? AND user_id=?").run(chatId, userId);
  const { msg_count } = d.prepare("SELECT msg_count FROM xp WHERE chat_id=? AND user_id=?").get(chatId, userId);
  d.prepare("UPDATE xp SET xp=? WHERE chat_id=? AND user_id=?").run(Math.floor(msg_count / 5), chatId, userId);
}
function xpGet(chatId, userId) {
  const row = db().prepare("SELECT msg_count, xp FROM xp WHERE chat_id=? AND user_id=?").get(chatId, userId);
  if (!row) return { level: 1, xp: 0, msg_count: 0 };
  return { level: Math.floor(row.xp / 5) + 1, xp: row.xp, msg_count: row.msg_count };
}
function xpTop10(chatId) {
  return db().prepare("SELECT user_id, xp, msg_count FROM xp WHERE chat_id=? ORDER BY xp DESC, msg_count DESC LIMIT 10").all(chatId);
}

// ── Gate Pending ───────────────────────────────────────────────────────────────
function gateSet(chatId, userId, token, answer) {
  db().prepare("INSERT OR REPLACE INTO gate_pending(chat_id,user_id,token,answer,created_at) VALUES(?,?,?,?,?)").run(chatId, userId, token, answer, Math.floor(Date.now() / 1000));
}
function gateGet(chatId, userId) {
  return db().prepare("SELECT * FROM gate_pending WHERE chat_id=? AND user_id=?").get(chatId, userId);
}
function gateDelete(chatId, userId) {
  db().prepare("DELETE FROM gate_pending WHERE chat_id=? AND user_id=?").run(chatId, userId);
}

// ── Restrictions ───────────────────────────────────────────────────────────────
function logRestriction(chatId, userId, action, reason, byId) {
  db().prepare("INSERT OR REPLACE INTO restrictions(chat_id,user_id,action,reason,by_id,ts) VALUES(?,?,?,?,?,?)").run(chatId, userId, action, reason || "", byId || "", Math.floor(Date.now() / 1000));
}
function getRestriction(chatId, userId) {
  return db().prepare("SELECT * FROM restrictions WHERE chat_id=? AND user_id=?").get(chatId, userId);
}

module.exports = {
  db, gsGet, gsSet,
  muteUser, unmuteUser, isMuted,
  warnsAdd, warnsGet, warnsReset,
  noteSave, noteGet, noteDelete, noteList, notesClearAll,
  filtSave, filtDelete, filtList, filtMatch,
  badwordAdd, badwordDel, badwordList, badwordHit,
  xpInc, xpGet, xpTop10,
  gateSet, gateGet, gateDelete,
  logRestriction, getRestriction,
};
