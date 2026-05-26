// library/helpers.js — Miss Chatra Shared Utilities
"use strict";

const crypto = require("crypto");

// ── Sarcastic Responses ───────────────────────────────────────────────────────
const SARCASTIC_RESPONSES = {
  errors: ["🤡 Oops! I tripped over my own code there!","🎭 My circuits are feeling dramatic today!","🤪 My brain.exe stopped responding!","🦄 Unicorns ate my error handler!","🎪 Welcome to the error circus!"],
  warnings: ["⚠️ Warning: This user is approaching 'needs coffee' levels!","🚧 User is being warned!","📢 PSA: This user might need a timeout!","🎯 Target acquired for warning deployment!","⚡️ Warning issued!"],
  bans: ["🚫 Banned! User has left the building... permanently!","🔨 Ban hammer has spoken!","🎭 Exit stage left... banned!","🗑️ Taking out the trash! User banned!","⚰️ RIP user's chat privileges!"],
  kicks: ["👢 Boot to the head! User kicked!","⚽ Goal! User kicked successfully!","🎯 Perfect kick! User is out!","🚪 Shown the door with style!","🚀 User launched into orbit!"],
  mutes: ["🔇 Shhh... user is now on mute!","🤫 Silence is golden! User muted!","🎤 Microphone snatched!","👄 Lips are sealed!","🤐 Zip it, lock it, put it in your pocket!"],
  unmutes: ["🔊 Sound on! User unmuted!","🎤 Microphone returned!","🗣️ User can speak again!","🔓 Voice unlocked!","💬 Chat privileges restored!"],
  promotions: ["👑 Crown installed! User promoted!","🎖️ Medal of honor awarded!","🏆 Trophy for new admin!","⭐ New admin in the spotlight!","🔧 Admin tools unlocked!"],
  demotions: ["👑 Crown removed! User demoted!","📉 Demotion served cold!","🎭 Back to regular performer!","🔧 Admin tools revoked!","🎪 Demoted to clown!"],
  unknown_commands: ["🤔 Did you just speak in alien language?","🎭 That command doesn't exist in this theater!","🤪 My brain doesn't compute that gibberish!","🦄 Unicorns don't recognize that command!","🎪 That's not a circus trick I know!"],
  general_sarcasm: ["Oh look, someone discovered buttons!","Wow, such command, much wow!","My circuits are tingling with that request!","Beep boop... sarcasm mode activated!","That command deserves a participation trophy!"]
};

function getSarcasticResponse(type = "general_sarcasm") {
  const arr = SARCASTIC_RESPONSES[type] || SARCASTIC_RESPONSES.general_sarcasm;
  return arr[Math.floor(Math.random() * arr.length)];
}

const HUMANLIKE_RESPONSES = [
  "That's an interesting point you've made.",
  "I see what you mean, that's quite insightful.",
  "That's a thoughtful observation.",
  "Interesting perspective you've shared.",
  "I appreciate you sharing that with me.",
  "You raise a good point there.",
  "That's worth considering indeed.",
  "I understand where you're coming from.",
  "That's a valid observation.",
  "Good point, I agree with that."
];

function getHumanlikeResponse() {
  return HUMANLIKE_RESPONSES[Math.floor(Math.random() * HUMANLIKE_RESPONSES.length)];
}

// ── Time helpers ──────────────────────────────────────────────────────────────
function getTimeGreeting() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12)  return "Good Morning";
  if (h >= 12 && h < 17) return "Good Afternoon";
  if (h >= 17 && h < 21) return "Good Evening";
  return "";
}

function formatDuration(secs) {
  if (secs < 60)   return `${secs}s`;
  if (secs < 3600) return `${Math.floor(secs/60)}m`;
  return `${Math.floor(secs/3600)}h`;
}

function humanUptime(startMs) {
  let diff = Math.floor((Date.now() - startMs) / 1000);
  const d = Math.floor(diff / 86400); diff %= 86400;
  const h = Math.floor(diff / 3600);  diff %= 3600;
  const m = Math.floor(diff / 60);
  const s = diff % 60;
  return `${d}d ${h}h ${m}m ${s}s`;
}

// ── JID helpers ───────────────────────────────────────────────────────────────
function numToJid(number) {
  const digits = String(number).replace(/\D/g, "");
  return `${digits}@s.whatsapp.net`;
}

function jidToNum(jid) {
  return (jid || "").split("@")[0].split(":")[0];
}

function normalizeJid(jid) {
  if (!jid) return "";
  if (jid.includes("@g.us")) return jid;
  return jid.split("@")[0].split(":")[0] + "@s.whatsapp.net";
}

function isGroup(jid) {
  return (jid || "").endsWith("@g.us");
}

// ── Ticket helpers ────────────────────────────────────────────────────────────
function buildTicket(prefix, ...parts) {
  const base = parts.join(":") + ":" + Date.now() + ":" + Math.floor(Math.random()*9999);
  const h    = crypto.createHash("sha1").update(base).digest("hex").slice(0,10).toUpperCase();
  return `${prefix}-${h}`;
}

// ── Captcha ───────────────────────────────────────────────────────────────────
function newCaptcha() {
  const a  = Math.floor(Math.random()*8)+2;
  const b  = Math.floor(Math.random()*8)+2;
  const op = ["+","-","x"][Math.floor(Math.random()*3)];
  if (op === "+") return { q: `${a} + ${b}`, a: String(a+b) };
  if (op === "-") return { q: `${Math.max(a,b)} - ${Math.min(a,b)}`, a: String(Math.abs(a-b)) };
  return { q: `${a} × ${b}`, a: String(a*b) };
}

// ── Template formatter ────────────────────────────────────────────────────────
function fmtTemplate(text, user) {
  const name   = user?.name || user?.pushName || "User";
  const number = user?.jid ? jidToNum(user.jid) : (user?.number || "");
  return (text || "")
    .replace(/\{name\}/g, name)
    .replace(/\{first\}/g, name.split(" ")[0])
    .replace(/\{number\}/g, number)
    .replace(/\{username\}/g, number);
}

// ── Link / badword detection ──────────────────────────────────────────────────
function containsLinks(text) {
  return /https?:\/\/|t\.me\/|www\./i.test(text || "");
}

function containsGroupMention(text) {
  return /\@everyone|\@all|\@here/i.test(text || "");
}

// ── XP / Level bar ────────────────────────────────────────────────────────────
function buildProgressBar(pct, width = 10) {
  const filled = Math.round((pct / 100) * width);
  return "█".repeat(filled) + "░".repeat(width - filled);
}

module.exports = {
  getSarcasticResponse, getHumanlikeResponse,
  getTimeGreeting, formatDuration, humanUptime,
  numToJid, jidToNum, normalizeJid, isGroup,
  buildTicket, newCaptcha, fmtTemplate,
  containsLinks, containsGroupMention, buildProgressBar
};
