// library/justicetechsystem.js — JusticeTech Developer Control System v3
// FIXED: Signal prefix uses actual U+200B (not escaped \\u200B)
// FIXED: Bot registry uses approved_owners.json (same as autosave bot)
"use strict";

const fs   = require("fs");
const path = require("path");

const DB_DIR          = path.join(__dirname, "..", "database");
const CONFIG_FILE     = path.join(DB_DIR, "justicetechconfig.json");
const STATUS_FILE     = path.join(DB_DIR, "bot_status.json");
const APPROVALS_FILE  = path.join(DB_DIR, "plugin_approvals.json");
const MAINT_FILE      = path.join(DB_DIR, "maintenance.json");
const CHANNEL_FILE    = path.join(DB_DIR, "channel_members.json");
const REGISTRY_FILE   = path.join(DB_DIR, "approved_owners.json");

const DEV_NUMBERS = ["2349032578690", "2348166337692"];

function norm(jid) {
  return String(jid || "").split("@")[0].split(":")[0].replace(/\D/g, "");
}
function isDev(jidOrNum) { return DEV_NUMBERS.includes(norm(jidOrNum)); }

function ensureDir() {
  if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });
}
function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch { return fallback; }
}
function writeJson(file, data) {
  ensureDir();
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// ── Config ────────────────────────────────────────────────────────────────────
function getConfig() {
  return readJson(CONFIG_FILE, {
    dev_numbers: DEV_NUMBERS,
    communities: {
      tools_group:    "https://chat.whatsapp.com/GL6GUJL5QNJEuBy9fWIssu?mode=gi_t",
      support_group:  "https://chat.whatsapp.com/Gyt75qFHoul3wp53IKi25v?mode=gi_t",
      channel_invite: "https://whatsapp.com/channel/0029VaoLagu3hRFKWlqk9W2T",
    },
    auto_channel_add:              true,
    marketplace_approval_required: true,
  });
}
function saveConfig(d) { writeJson(CONFIG_FILE, d); }

// ── Bot Registry (approved_owners.json) ───────────────────────────────────────
// This is the MASTER list of all bots that have deployed Miss Chatra.
// The dev's bot writes this. All broadcast/maintenance reads from here.
function readRegistry() {
  return readJson(REGISTRY_FILE, { owners: {} });
}
function writeRegistry(d) { writeJson(REGISTRY_FILE, d); }

function registerBot(botNum, extra) {
  const n = norm(botNum);
  if (!n || DEV_NUMBERS.includes(n)) return;
  if (n.length < 7 || n.length > 15) return;
  const reg = readRegistry();
  // Update entry — preserve existing fields, add new ones
  reg.owners[n] = {
    ...(reg.owners[n] || {}),
    number:        n,
    registeredAt:  reg.owners[n]?.registeredAt || new Date().toISOString(),
    lastSeen:      new Date().toISOString(),
    ...(extra || {}),
  };
  writeRegistry(reg);
  console.log("[JTS] Bot registered/updated:", n);
}

function addBotToRegistry(botNum) {
  return registerBot(botNum); // alias for devaddbot command
}

function getAllRegisteredJids() {
  const reg  = readRegistry();
  const seen = new Set();
  const jids = [];
  for (const n of Object.keys(reg.owners || {})) {
    const digits = norm(n);
    // Exclude dev numbers and invalid lengths from broadcast targets
    if (digits && !DEV_NUMBERS.includes(digits) && digits.length >= 7 && digits.length <= 15 && !seen.has(digits)) {
      seen.add(digits);
      jids.push(digits + "@s.whatsapp.net");
    }
  }
  return jids;
}

// Get registered jids EXCLUDING the sender's own number (for broadcast)
function getAllRegisteredJidsExcluding(excludeNum) {
  const excl = norm(excludeNum);
  return getAllRegisteredJids().filter(j => norm(j) !== excl);
}

// ── THIS BOT'S LOCAL STATUS (written by signal receiver in message.js) ────────
function readStatus() {
  return readJson(STATUS_FILE, { status: "active", reason: "", setAt: null });
}
function writeStatus(data) {
  writeJson(STATUS_FILE, data);
  global.__JTS_STATUS = data;
  console.log("[JTS] Local status:", data.status.toUpperCase());
}
global.__JTS_STATUS = global.__JTS_STATUS || readStatus();

function getLocalStatus() {
  const s = readStatus();
  global.__JTS_STATUS = s;
  return s.status || "active";
}

// Maintenance removed

// ── SIGNAL SYSTEM ─────────────────────────────────────────────────────────────
// IMPORTANT: SIG_PREFIX uses ACTUAL U+200B zero-width space character (0x200B)
// NOT the escaped string "\\u200B" — they are completely different in JS
const SIG_PREFIX  = "\u200BJTSIG:";    // actual zero-width space (charcode 8203)
const SIG_SECRET  = "JT_SIG_CHATRA_2025";

function signPayload(type, ts) {
  const raw = [type, String(ts), SIG_SECRET].join("|");
  let h = 5381;
  for (let i = 0; i < raw.length; i++) h = (((h << 5) + h) ^ raw.charCodeAt(i)) >>> 0;
  return h.toString(36).toUpperCase();
}
function buildSignal(type, payload) {
  const ts = Date.now();
  return SIG_PREFIX + JSON.stringify({ type, ...payload, ts, sig: signPayload(type, ts) });
}
function parseSignal(text) {
  try {
    if (!text) return null;
    let body = text;
    if (body.startsWith(SIG_PREFIX)) body = body.slice(SIG_PREFIX.length);
    else if (body.startsWith(MAINT_PREFIX)) body = body.slice(MAINT_PREFIX.length);
    else return null;
    const d = JSON.parse(body);
    if (!d.type || !d.ts || !d.sig) return null;
    if (d.sig !== signPayload(d.type, d.ts)) { console.log("[JTS] Bad sig"); return null; }
    return d;
  } catch { return null; }
}

// Build signals
function buildStatusSignal(status, reason, showAlert) {
  return buildSignal("STATUS", { status, reason: reason || "", showAlert: showAlert !== false });
}
function buildMaintSignal(maintData) {
  return buildSignal("MAINT", { ...maintData, showAlert: true });
}
function buildRegisterSignal(botNum) {
  return buildSignal("REGISTER", { botNum: norm(botNum) });
}

// ── Plugin approvals ──────────────────────────────────────────────────────────
function getApprovals() { return readJson(APPROVALS_FILE, {}); }
function saveApprovals(d) { writeJson(APPROVALS_FILE, d); }
function hasApproval(ownerNum, pluginId) {
  const a = getApprovals(), n = norm(ownerNum);
  return !!(a[n]?.includes("*ALL*") || a[n]?.includes(pluginId) || a["*"]?.includes(pluginId));
}
function hasAllApprovals(ownerNum) { return !!(getApprovals()[norm(ownerNum)]?.includes("*ALL*")); }
function grantApproval(ownerNum, pluginId) {
  const a = getApprovals(), n = norm(ownerNum);
  if (!a[n]) a[n] = [];
  if (!a[n].includes(pluginId)) a[n].push(pluginId);
  saveApprovals(a);
}
function grantAllApprovals(ownerNum) { const a = getApprovals(); a[norm(ownerNum)] = ["*ALL*"]; saveApprovals(a); }
function revokeApproval(ownerNum, pluginId) {
  const a = getApprovals(), n = norm(ownerNum);
  if (a[n]) a[n] = a[n].filter(p => p !== pluginId);
  saveApprovals(a);
}
function revokeAllApprovals(ownerNum) { const a = getApprovals(); delete a[norm(ownerNum)]; saveApprovals(a); }

// ── Approval gate message ─────────────────────────────────────────────────────
function buildApprovalMessage(pluginId, pfx) {
  const cfg = getConfig(), comm = cfg.communities || {};
  return [
    "🔐 *Plugin Installation Requires Approval*", "",
    "Plugin: *" + pluginId + "*", "",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "",
    "All Miss Chatra marketplace plugins require", "developer approval before installation.", "",
    "*Step 1 — Join BOTH JusticeTech communities:*", "",
    "📌 JusticeTech Tools & Updates:",
    comm.tools_group || "https://chat.whatsapp.com/GL6GUJL5QNJEuBy9fWIssu?mode=gi_t", "",
    "📌 JusticeTech Support:",
    comm.support_group || "https://chat.whatsapp.com/Gyt75qFHoul3wp53IKi25v?mode=gi_t", "",
    "*Step 2 — Post in JusticeTech Support:*", "",
    "```", "Plugin Request",
    "Plugin ID: " + pluginId,
    "Bot Number: [Your bot WhatsApp number]",
    "Reason: [Why you need this plugin]",
    "```", "",
    "*Step 3 — Await developer approval (24-48h)*", "",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "",
    "*Already approved?* Ask admin: " + pfx + "devapprove <your_number> " + pluginId, "",
    "_By JusticeTech System, Nigeria_ 🇳🇬",
  ].join("\n");
}

// ── Status messages ───────────────────────────────────────────────────────────
function getBotSuspensionMessage(status) {
  const supp = getConfig().communities?.support_group || "https://chat.whatsapp.com/Gyt75qFHoul3wp53IKi25v?mode=gi_t";
  const msgs = {
    suspended: "╔══════════════════════════════════════════════╗\n⚠️ *Bot Temporarily Suspended*\n╠══════════════════════════════════════════════╣\n\n  This bot has been temporarily suspended by\n  JusticeTech due to a policy or billing issue.\n\n  All commands are disabled until resolved.\n\n╠══════════════════════════════════════════════╣\n  For support:\n  " + supp + "\n\n╚══════════════════════════════════════════════╝\n\n— JusticeTech System 🇳🇬",
    restricted: "╔══════════════════════════════════════════════╗\n🔒 *Bot Restricted*\n╠══════════════════════════════════════════════╣\n\n  This bot is in restricted mode by JusticeTech.\n  Most commands are disabled.\n\n  Only basic commands are available.\n\n╠══════════════════════════════════════════════╣\n  Support: " + supp + "\n╚══════════════════════════════════════════════╝",
    frozen:    "╔══════════════════════════════════════════════╗\n🧊 *Bot is Currently Frozen*\n╠══════════════════════════════════════════════╣\n\n  ⛔ All commands are suspended.\n  This bot has been frozen by JusticeTech.\n\n  Only the developer can unfreeze this bot.\n\n╠══════════════════════════════════════════════╣\n  Support: " + supp + "\n╚══════════════════════════════════════════════╝",
    banned:    "╔══════════════════════════════════════════════╗\n🚫 *Bot Permanently Banned*\n╠══════════════════════════════════════════════╣\n\n  This bot has been permanently banned by\n  JusticeTech for violating terms of service.\n\n  This decision is final.\n╚══════════════════════════════════════════════╝",
  };
  return msgs[status] || msgs.suspended;
}

// ── Channel tracking ──────────────────────────────────────────────────────────
function getChannelData() { return readJson(CHANNEL_FILE, { sent_invites: [] }); }
function saveChannelData(d) { writeJson(CHANNEL_FILE, d); }
function hasReceivedChannelInvite(botNum) {
  return (getChannelData().sent_invites || []).includes(norm(botNum));
}
function markChannelInviteSent(botNum) {
  const d = getChannelData(), n = norm(botNum);
  if (!d.sent_invites) d.sent_invites = [];
  if (!d.sent_invites.includes(n)) d.sent_invites.push(n);
  saveChannelData(d);
}

// ── Globally disabled plugins ─────────────────────────────────────────────────
function isPluginGloballyDisabled(pluginId) {
  return (getConfig().global_plugins_disabled || []).includes(pluginId);
}

module.exports = {
  isDev, norm, DEV_NUMBERS,
  getConfig, saveConfig,
  readRegistry, writeRegistry, registerBot, addBotToRegistry, getAllRegisteredJids, getAllRegisteredJidsExcluding,
  readStatus, writeStatus, getLocalStatus,
  SIG_PREFIX, buildSignal, parseSignal,
  buildStatusSignal, buildRegisterSignal,
  getApprovals, saveApprovals, hasApproval, hasAllApprovals,
  grantApproval, grantAllApprovals, revokeApproval, revokeAllApprovals,
  buildApprovalMessage, getBotSuspensionMessage,
  getChannelData, saveChannelData, hasReceivedChannelInvite, markChannelInviteSent,
  isPluginGloballyDisabled,
};
