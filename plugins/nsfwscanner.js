// plugins/nsfwscanner.js — NSFW Content Detector for Miss Chatra WA
// Ported from p38_nsfw_detector.py — 4-layer detection + HuggingFace ViT classifier
"use strict";

const fs    = require("fs");
const path  = require("path");
const axios = require("axios");
const { gsGet, gsSet } = require("../library/db");
const { getState, saveState } = require("../library/state");

const HF_MODEL  = "Falconsai/nsfw_image_detection";
const HF_API    = `https://api-inference.huggingface.co/models/${HF_MODEL}`;
const HF_TOKEN  = process.env.HF_TOKEN || "";

// ── Skin-detection threshold ──────────────────────────────────────────────────
const SKIN_WARN_THRESH  = 0.55;
const SKIN_BLOCK_THRESH = 0.72;

// ── Global enable guard ───────────────────────────────────────────────────────
function globalEnabled() { return getState().nsfw_scan_enabled !== false; }
function groupEnabled(chatId) {
  if (!chatId?.endsWith("@g.us")) return false;
  const gs = gsGet(chatId);
  return !!gs.nsfw_scan_on;
}

// ── HuggingFace ViT NSFW classifier ──────────────────────────────────────────
async function hfClassify(imageBuffer) {
  try {
    const headers = { "Content-Type": "application/octet-stream" };
    if (HF_TOKEN) headers["Authorization"] = `Bearer ${HF_TOKEN}`;
    const resp = await axios.post(HF_API, imageBuffer, { headers, timeout: 25000, responseType: "json" });
    const results = resp.data;
    if (!Array.isArray(results)) return null;
    const nsfwItem = results.find(r => r.label?.toLowerCase() === "nsfw");
    const safeItem = results.find(r => r.label?.toLowerCase() === "normal" || r.label?.toLowerCase() === "safe");
    const nsfwScore = nsfwItem?.score ?? 0;
    const safeScore = safeItem?.score ?? 0;
    if (nsfwScore > 0.70) return { verdict: "nsfw",  score: nsfwScore };
    if (nsfwScore > 0.45) return { verdict: "warn",  score: nsfwScore };
    if (safeScore > 0.85) return { verdict: "safe",  score: safeScore };
    return { verdict: "uncertain", score: nsfwScore };
  } catch { return null; }
}

// ── Simple skin-ratio heuristic ───────────────────────────────────────────────
// Works on raw JPEG/PNG bytes using pixel sampling heuristic
function skinRatioHeuristic(buf) {
  try {
    if (!buf || buf.length < 1000) return 0;
    // Sample every ~2000 bytes as crude RGB proxy
    let skinPixels = 0, totalPixels = 0;
    const step = Math.max(3, Math.floor(buf.length / 300));
    for (let i = 0; i < buf.length - 2; i += step) {
      const r = buf[i], g = buf[i+1], b = buf[i+2];
      if (r > 60 && r < 255 && g > 40 && g < 220 && b > 20 && b < 200) {
        if (r > g && r > b && r - g > 15 && r - b > 15) skinPixels++;
      }
      totalPixels++;
    }
    return totalPixels > 0 ? skinPixels / totalPixels : 0;
  } catch { return 0; }
}

// ── Keyword scan on caption/filename ─────────────────────────────────────────
const NSFW_KEYWORDS = /\b(nude|naked|nsfw|18\+|porn|xxx|sex|boobs?|dick|cock|pussy|ass|vagina|penis|hentai|lewd|nudes?|onlyfans|explicit)\b/i;
function captionNsfw(caption) {
  return NSFW_KEYWORDS.test(caption || "");
}

// ── Main scan ─────────────────────────────────────────────────────────────────
async function scanMedia(m, sock) {
  const msg   = m.message || {};
  const mtype = m.mtype   || "";
  if (mtype !== "imageMessage" && mtype !== "videoMessage" && !msg.imageMessage && !msg.videoMessage) return null;

  const caption = m.msg?.caption || m.msg?.text || "";
  // Layer 1: Caption keyword scan (instant)
  if (captionNsfw(caption)) {
    return { layer: "caption", verdict: "nsfw", score: 1.0, reason: "NSFW keywords in caption" };
  }

  // Download image (only for images, skip video for speed)
  if (mtype !== "imageMessage" && !msg.imageMessage) return null;
  let buf = null;
  try {
    if (typeof m.download === "function") buf = await m.download();
    if (!buf?.length) buf = await sock.downloadMediaMessage(m.msg || msg.imageMessage);
  } catch { return null; }
  if (!buf?.length) return null;

  // Layer 2: Skin heuristic (local, instant)
  const skinRatio = skinRatioHeuristic(buf);
  if (skinRatio > SKIN_BLOCK_THRESH) {
    return { layer: "skin", verdict: "nsfw", score: skinRatio, reason: `High skin content (${(skinRatio*100).toFixed(0)}%)` };
  }

  // Layer 3: HuggingFace ViT (AI, best accuracy)
  const hfResult = await hfClassify(buf);
  if (hfResult?.verdict === "nsfw") {
    return { layer: "hf_vit", verdict: "nsfw", score: hfResult.score, reason: `AI confidence: ${(hfResult.score*100).toFixed(0)}%` };
  }
  if (hfResult?.verdict === "warn" || skinRatio > SKIN_WARN_THRESH) {
    return { layer: "combined", verdict: "warn", score: Math.max(hfResult?.score||0, skinRatio), reason: "Borderline content detected" };
  }

  return { layer: "clean", verdict: "safe", score: 0 };
}

// ── Random warning messages ────────────────────────────────────────────────────
const NSFW_MSGS = [
  "🔞 NSFW content is not tolerated here. Removed.",
  "🚫 That's a bit too spicy for this group. Message deleted.",
  "❌ NSFW detected and removed. Keep it clean.",
  "🛡️ Content violation: NSFW material removed.",
  "🔒 Not on my watch. NSFW content deleted.",
];
const WARN_MSGS = [
  "⚠️ Borderline content detected and removed as a precaution.",
  "🚨 Suspicious content removed. When in doubt, I act.",
];
function randMsg(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// ── Auto-scan handler (called from message.js) ────────────────────────────────
async function handleNsfwScan(sock, m, chatId, userId) {
  if (!chatId?.endsWith("@g.us")) return false;
  if (!globalEnabled()) return false;
  if (!groupEnabled(chatId)) return false;
  if (m.key?.fromMe) return false;

  // Dev/superadmin exempt
  const DEV_NUMS = ["2349032578690","2348166337692"];
  const userNum  = (userId||"").split("@")[0].split(":")[0];
  if (DEV_NUMS.includes(userNum)) return false;

  const result = await scanMedia(m, sock);
  if (!result || result.verdict === "safe") return false;

  const isNsfw = result.verdict === "nsfw";
  const isWarn = result.verdict === "warn";

  if (!isNsfw && !isWarn) return false;

  try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}

  const msg = isNsfw ? randMsg(NSFW_MSGS) : randMsg(WARN_MSGS);
  const detail = result.reason ? ` _(${result.reason})_` : "";
  try {
    await sock.sendMessage(chatId, { text: `${msg}${detail}` });
  } catch {}
  return true;
}

module.exports = {
  name:     "NSFWScanner",
  category: "moderation",
  desc:     "Auto-detect and remove NSFW images in groups",
  command:  ["nsfwon","nsfwoff","nsfwstatus","nsfwglobal"],

  handleNsfwScan,

  run: async ({ sock, m, args, command, chatId, userId, reply, isOwner, isDev, isAdmin, prefix }) => {
    const isGroup = chatId?.endsWith("@g.us");

    // ── Dev-only global toggle ──────────────────────────────────────────────
    if (command === "nsfwglobal") {
      if (!isOwner && !isDev) return reply("🔒 Developer only.");
      const sub = (args[0]||"").toLowerCase();
      const state = getState();
      if (sub === "on")  { state.nsfw_scan_enabled = true;  saveState(); return reply("✅ NSFW scanner globally enabled."); }
      if (sub === "off") { state.nsfw_scan_enabled = false; saveState(); return reply("✅ NSFW scanner globally disabled."); }
      return reply(`🔞 *NSFW Scanner — Global Status*\n\nStatus: ${globalEnabled() ? "✅ Enabled" : "❌ Disabled"}\n\n${prefix}nsfwglobal on/off`);
    }

    // Group commands
    if (!isGroup) return reply("⚠️ NSFW scanning commands only work in groups.");
    if (!isAdmin && !isOwner && !isDev) return reply("🔒 Admin only.");

    if (command === "nsfwon") {
      gsSet(chatId, { nsfw_scan_on: 1 });
      return reply("✅ *NSFW Scanner enabled* for this group.\n\nAll images will be automatically scanned. NSFW content will be deleted.");
    }
    if (command === "nsfwoff") {
      gsSet(chatId, { nsfw_scan_on: 0 });
      return reply("✅ *NSFW Scanner disabled* for this group.");
    }
    if (command === "nsfwstatus") {
      const on = groupEnabled(chatId);
      const gl = globalEnabled();
      return reply(
        `🔞 *NSFW Scanner Status*\n\n` +
        `Global: ${gl ? "✅ Active" : "❌ Disabled"}\n` +
        `This Group: ${on ? "✅ Enabled" : "❌ Disabled"}\n\n` +
        `${prefix}nsfwon — Enable in this group\n` +
        `${prefix}nsfwoff — Disable in this group\n\n` +
        `_Detection layers: Caption scan · Skin heuristic · HuggingFace ViT AI_`
      );
    }
  },
};
