// plugins/virusscanner.js — Intelligent File Threat Scanner for Miss Chatra WA
// Ported from p33_virus_detector.py — heuristic multi-layer scanning
"use strict";

const path  = require("path");
const { gsGet, gsSet } = require("../library/db");
const { getState, saveState } = require("../library/state");

// ── Enable checks ─────────────────────────────────────────────────────────────
function globalEnabled() { return getState().virus_scan_enabled !== false; }
function groupEnabled(chatId) {
  if (!chatId?.endsWith("@g.us")) return false;
  return !!(gsGet(chatId).virus_scan_on);
}

// ── Dangerous extension list ──────────────────────────────────────────────────
const DANGEROUS_EXTS  = new Set([".exe",".bat",".cmd",".msi",".scr",".pif",".com",".dll",".vbs",".wsf",".js",".jar",".apk",".dex",".elf",".run",".bin",".ps1",".sh",".bash",".cpl",".hta"]);
const SUSPICIOUS_EXTS = new Set([".zip",".rar",".7z",".tar",".gz",".iso",".img",".dmg",".pkg",".deb",".rpm"]);

// ── Magic byte signatures ─────────────────────────────────────────────────────
const MAGIC_SIGS = [
  { name:"PE/EXE",   bytes:[0x4D,0x5A],         offset:0 },
  { name:"ELF",      bytes:[0x7F,0x45,0x4C,0x46], offset:0 },
  { name:"JAR/ZIP",  bytes:[0x50,0x4B,0x03,0x04],  offset:0 },
  { name:"APK",      bytes:[0x50,0x4B,0x03,0x04],  offset:0 },
  { name:"PS1/Script",bytes:[0x23,0x21],            offset:0 }, // #!/
];

// ── Entropy calculation ───────────────────────────────────────────────────────
function shannonEntropy(buf) {
  if (!buf || buf.length === 0) return 0;
  const freq = new Array(256).fill(0);
  const sample = buf.slice(0, Math.min(buf.length, 65536));
  for (let i = 0; i < sample.length; i++) freq[sample[i]]++;
  let entropy = 0;
  for (const f of freq) {
    if (f === 0) continue;
    const p = f / sample.length;
    entropy -= p * Math.log2(p);
  }
  return entropy;
}

// ── Scan file buffer ──────────────────────────────────────────────────────────
function scanBuffer(buf, filename, mimetype) {
  const ext      = filename ? path.extname(filename).toLowerCase() : "";
  const mtype    = (mimetype || "").toLowerCase();
  const risks    = [];
  let riskScore  = 0;

  // Check extension
  if (DANGEROUS_EXTS.has(ext)) { risks.push(`⚠️ Dangerous extension: *${ext}*`); riskScore += 50; }
  else if (SUSPICIOUS_EXTS.has(ext)) { risks.push(`ℹ️ Archive/package: *${ext}*`); riskScore += 10; }

  // Check magic bytes
  if (buf && buf.length > 4) {
    for (const sig of MAGIC_SIGS) {
      const match = sig.bytes.every((b, i) => buf[sig.offset + i] === b);
      if (match) { risks.push(`🔍 Magic signature: ${sig.name}`); riskScore += 25; break; }
    }
    // High entropy = possibly packed/obfuscated
    const entropy = shannonEntropy(buf);
    if (entropy > 7.5) { risks.push(`📊 High entropy: ${entropy.toFixed(2)} (packed/encrypted?)`); riskScore += 20; }
  }

  // MIME type mismatch (doc claiming to be image etc)
  if (ext && mtype) {
    const mimeMap = { ".jpg":"image/jpeg",".png":"image/png",".pdf":"application/pdf",".mp4":"video/mp4" };
    const expectedMime = mimeMap[ext];
    if (expectedMime && !mtype.includes(expectedMime.split("/")[1])) {
      risks.push(`⚠️ MIME mismatch: claimed ${mtype} but ext is ${ext}`); riskScore += 30;
    }
  }

  // Determine verdict
  let verdict, emoji;
  if (riskScore >= 50)      { verdict = "🔴 DANGEROUS";    emoji = "🔴"; }
  else if (riskScore >= 25) { verdict = "🟡 SUSPICIOUS";   emoji = "🟡"; }
  else                       { verdict = "🟢 SAFE";         emoji = "🟢"; }

  return { verdict, emoji, riskScore, risks, entropy: buf ? shannonEntropy(buf) : 0 };
}

// ── Build ASCII progress bar ──────────────────────────────────────────────────
function progressBar(pct, width = 14) {
  const filled = Math.round(width * pct / 100);
  return `[${"▓".repeat(filled)}${"░".repeat(width - filled)}] ${pct}%`;
}

// ── Auto-scan handler ─────────────────────────────────────────────────────────
async function handleVirusScan(sock, m, chatId, userId) {
  if (!chatId?.endsWith("@g.us")) return false;
  if (!globalEnabled()) return false;
  if (!groupEnabled(chatId)) return false;
  if (m.key?.fromMe) return false;

  const msg   = m.message || {};
  const mtype = m.mtype   || "";
  if (mtype !== "documentMessage" && !msg.documentMessage) return false;

  // Dev exempt
  const DEV_NUMS = ["2349032578690","2348166337692"];
  const userNum  = (userId||"").split("@")[0].split(":")[0];
  if (DEV_NUMS.includes(userNum)) return false;

  const inner    = m.msg || msg.documentMessage || {};
  const filename = inner.fileName || inner.title || "unknown";
  const mimetype = inner.mimetype || "";
  const fileSize = inner.fileLength || 0;

  // Send progress
  const stages = [
    [10,"🔍 Scanning file..."],
    [35,"📊 Analysing signature..."],
    [60,"🧮 Calculating entropy..."],
    [85,"🔬 Checking patterns..."],
    [100,"✅ Scan complete!"],
  ];

  let progressMsg = null;
  try {
    progressMsg = await sock.sendMessage(chatId, {
      text: `🦠 *Miss Chatra Virus Scanner*\n\n📄 File: *${filename}*\n\n${progressBar(10)} 🔍 Scanning...`
    });
  } catch {}

  // Download file (capped at 5MB for speed)
  let buf = null;
  if (fileSize < 5 * 1024 * 1024) {
    try {
      if (typeof m.download === "function") buf = await m.download();
      if (!buf?.length) buf = await sock.downloadMediaMessage(m.msg || inner);
    } catch {}
  }

  // Run scan
  const result = scanBuffer(buf, filename, mimetype);

  // Update progress
  for (const [pct, stage] of stages.slice(1)) {
    if (progressMsg) {
      try { await sock.sendMessage(chatId, { text: `🦠 *Miss Chatra Virus Scanner*\n\n📄 File: *${filename}*\n\n${progressBar(pct)} ${stage}`, edit: progressMsg.key }); } catch {}
    }
    await new Promise(r => setTimeout(r, 300));
  }

  // Build verdict
  const sizeStr = fileSize > 0 ? (fileSize > 1024*1024 ? `${(fileSize/1024/1024).toFixed(1)} MB` : `${(fileSize/1024).toFixed(0)} KB`) : "unknown";
  const lines = [
    `🦠 *File Scan Verdict*`,
    ``,
    `📄 *File:* ${filename}`,
    `📦 *Size:* ${sizeStr}`,
    `📋 *MIME:* ${mimetype || "unknown"}`,
    ``,
    `${result.emoji} *Verdict: ${result.verdict}*`,
    `📊 *Risk Score:* ${result.riskScore}/100`,
    ``,
  ];
  if (result.risks.length) {
    lines.push(`*Findings:*`);
    for (const r of result.risks) lines.push(`  ${r}`);
  } else {
    lines.push(`✅ No threats detected`);
  }
  if (result.riskScore >= 50) lines.push(`\n⚠️ *File deleted from group as a precaution.*`);

  // Delete dangerous files
  if (result.riskScore >= 50) {
    try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
  }

  // Replace progress with verdict
  if (progressMsg) {
    try { await sock.sendMessage(chatId, { text: lines.join("\n"), edit: progressMsg.key }); } catch {
      await sock.sendMessage(chatId, { text: lines.join("\n") });
    }
  } else {
    await sock.sendMessage(chatId, { text: lines.join("\n") });
  }

  return true;
}

module.exports = {
  name:     "VirusScanner",
  category: "moderation",
  desc:     "Auto-scan files for malware and threats in groups",
  command:  ["viruson","virusoff","virusstatus","virusscan","virusglobal"],

  handleVirusScan,

  run: async ({ sock, m, args, command, chatId, userId, reply, isOwner, isDev, isAdmin, prefix }) => {
    const isGroup = chatId?.endsWith("@g.us");

    if (command === "virusglobal") {
      if (!isOwner && !isDev) return reply("🔒 Developer only.");
      const sub = (args[0]||"").toLowerCase();
      const state = getState();
      if (sub === "on")  { state.virus_scan_enabled = true;  saveState(); return reply("✅ Virus scanner globally enabled."); }
      if (sub === "off") { state.virus_scan_enabled = false; saveState(); return reply("✅ Virus scanner globally disabled."); }
      return reply(`🦠 Global: ${globalEnabled() ? "✅ Active" : "❌ Disabled"}`);
    }

    if (!isGroup) return reply("⚠️ Virus scanning commands only work in groups.");
    if (!isAdmin && !isOwner && !isDev) return reply("🔒 Admin only.");

    if (command === "viruson") {
      gsSet(chatId, { virus_scan_on: 1 });
      return reply("✅ *Virus Scanner enabled*\n\nAll document files will be automatically scanned for threats.");
    }
    if (command === "virusoff") {
      gsSet(chatId, { virus_scan_on: 0 });
      return reply("✅ Virus Scanner disabled for this group.");
    }
    if (command === "virusstatus") {
      return reply(
        `🦠 *Virus Scanner Status*\n\n` +
        `Global: ${globalEnabled() ? "✅ Active" : "❌ Disabled"}\n` +
        `This Group: ${groupEnabled(chatId) ? "✅ Enabled" : "❌ Disabled"}\n\n` +
        `${prefix}viruson — Enable\n${prefix}virusoff — Disable\n\n` +
        `_Scans: Extension · Magic bytes · Entropy · MIME mismatch_`
      );
    }
    if (command === "virusscan") {
      const q = m.quoted;
      if (!q) return reply("↩️ Reply to a document with /virusscan to scan it.");
      const inner = q.documentMessage || {};
      const filename = inner.fileName || "unknown";
      const mimetype = inner.mimetype || "";
      let buf = null;
      try {
        if (typeof q.download === "function") buf = await q.download();
        if (!buf?.length && q.fakeObj) buf = await sock.downloadMediaMessage(q.fakeObj);
      } catch {}
      const result = scanBuffer(buf, filename, mimetype);
      return reply([
        `🦠 *Manual File Scan*`,
        `📄 ${filename}`,
        `${result.emoji} *${result.verdict}* — Score: ${result.riskScore}/100`,
        ...result.risks,
        result.risks.length === 0 ? "✅ No threats found" : "",
      ].filter(Boolean).join("\n"));
    }
  },
};
