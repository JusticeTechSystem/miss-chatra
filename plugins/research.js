// plugins/research.js — Miss Chatra /research — Deep Research Engine
// Multi-turn research sessions with animated progress, source extraction, and reply-continuation
"use strict";

const axios = require("axios");
const config = require("../settings/config");

const BASE_URL       = config.prexzyBase || "https://apis.prexzyvilla.site";
const MAX_HISTORY    = 100;          // messages per session
const SESSION_TTL    = 3600 * 1000;  // 1 hour in ms
const MAX_RESP_LEN   = 3500;

if (!global._researchSessions) global._researchSessions = new Map();

// ── Research AI endpoints (fallback chain) ────────────────────────────────────
const ENDPOINTS = [
  { path: "/ai/chat--cf-qwen-qwq-32b", build: p => ({ prompt: p, search: "" }) },
  { path: "/ai/chat-gemini-2-5-flash",  build: p => ({ prompt: p, search: "" }) },
  { path: "/ai/chat-gemini-2-5-pro",    build: p => ({ prompt: p, search: "" }) },
  { path: "/ai/gpt-5",                  build: p => ({ text: p, prompt: p }) },
  { path: "/ai/gemchat",               build: p => ({ prompt: p, media: "", user_id: "" }) },
  { path: "/ai/deepseekchat",          build: p => ({ prompt: p }) },
];

const SYSTEM_PROMPT = `You are Chatra Research, an intelligent research assistant inside Miss Chatra WhatsApp bot.
Give thorough, accurate, well-structured answers in a natural, human conversational tone.

FORMATTING RULES:
1. Never use ## or ### headers. Use emoji labels: 🔍 What I Found, 📌 Key Points, ⚠️ Important
2. Use short bullet points for lists
3. Write like a knowledgeable friend, not a formal report
4. Start with a brief direct answer, then expand
5. Be factual — if uncertain say "From what I can find..." or "It looks like..."
6. ALWAYS end with sources formatted exactly like:
---SOURCES---
1. Name | https://url.com
2. Name | platform description
---END SOURCES---
If no external sources, write: 1. General Knowledge | Based on training data`;

// ── Progress bar stages ───────────────────────────────────────────────────────
const STAGES = [
  [5,  "🚀 Chatra Research activated!"],
  [15, "📡 Connecting to AI..."],
  [28, "🧠 Analysing query..."],
  [42, "🔎 Scanning knowledge base..."],
  [55, "📚 Gathering sources..."],
  [68, "✍️ Structuring findings..."],
  [80, "🔬 Running deep analysis..."],
  [90, "📝 Composing response..."],
  [97, "⚡ Finalising results..."],
];

function progressBar(pct, width = 16) {
  const filled = Math.round(width * pct / 100);
  return `[${"▓".repeat(filled)}${"░".repeat(width - filled)}] ${pct}%`;
}

function buildProgressMsg(stageText, pct, query) {
  const q = query.length > 45 ? query.slice(0, 45) + "…" : query;
  return `🔬 *Chatra Research* — Activated\n━━━━━━━━━━━━━━━━━━\n📋 Query: ${q}\n\n${progressBar(pct)}\n${stageText}\n━━━━━━━━━━━━━━━━━━`;
}

// ── Session helpers ───────────────────────────────────────────────────────────
function sessionKey(chatId, userId) { return `${chatId}:${userId}`; }

function getSession(chatId, userId) {
  const key  = sessionKey(chatId, userId);
  const sess = global._researchSessions.get(key);
  if (sess && Date.now() - sess.lastActive < SESSION_TTL) return sess;
  global._researchSessions.delete(key);
  return null;
}

function newSession(chatId, userId) {
  const sess = { history: [], lastActive: Date.now(), chatId, userId };
  global._researchSessions.set(sessionKey(chatId, userId), sess);
  return sess;
}

function addToHistory(sess, role, text) {
  sess.history.push({ role, text });
  if (sess.history.length > MAX_HISTORY) sess.history = sess.history.slice(-MAX_HISTORY);
  sess.lastActive = Date.now();
}

function buildPrompt(sess, query) {
  const parts = [SYSTEM_PROMPT, "\n\n--- CONVERSATION HISTORY ---\n"];
  for (const msg of sess.history) {
    parts.push(`${msg.role === "user" ? "User" : "Chatra Research"}: ${msg.text}\n`);
  }
  parts.push(`\n--- NEW QUERY ---\nUser: ${query}\nChatra Research:`);
  return parts.join("");
}

// ── Source extraction ─────────────────────────────────────────────────────────
function extractSources(raw) {
  let body = raw, sources = [];
  const srcMatch = raw.match(/---SOURCES---\s*([\s\S]*?)\s*---END SOURCES---/i);
  if (srcMatch) {
    body = raw.slice(0, srcMatch.index).trim();
    for (const line of srcMatch[1].trim().split("\n")) {
      const clean = line.replace(/^\d+[\.)]\s*/, "").trim();
      if (clean) sources.push(clean);
    }
  }
  // Fallback: scrape URLs from body
  const existing = sources.join(" ");
  for (const url of (body.match(/https?:\/\/[^\s\)\]>"']+/g) || [])) {
    if (!existing.includes(url)) {
      const domain = url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0];
      sources.push(`${domain} | ${url}`);
    }
  }
  // Clean body
  body = body.replace(/^#{1,6}\s+(.+)$/gm, "$1").replace(/\*\*(.+?)\*\*/g, "$1").replace(/\n{3,}/g, "\n\n").trim();
  // Build sources block
  const srcLines = sources.length
    ? sources.map((s, i) => `${i + 1}. ${s}`).join("\n")
    : "1. General knowledge — based on AI training data";
  return { body, sources: `📚 *Sources*\n${"─".repeat(20)}\n${srcLines}` };
}

function formatResult(body, sources, query, isContinuation = false) {
  const q = query.length > 50 ? query.slice(0, 50) + "…" : query;
  const header = isContinuation
    ? `🔬 *Chatra Research*\n━━━━━━━━━━━━━━━━━━\n`
    : `🔬 *Chatra Research* — Results\n━━━━━━━━━━━━━━━━━━\n📋 ${q}\n━━━━━━━━━━━━━━━━━━\n\n`;
  const footer = `\n\n━━━━━━━━━━━━━━━━━━\n💬 Reply to continue · /endresearch to close`;
  return header + body + "\n\n" + sources + footer;
}

function splitLong(text, limit = MAX_RESP_LEN) {
  if (text.length <= limit) return [text];
  const chunks = [], paras = text.split("\n\n");
  let buf = [];
  for (const para of paras) {
    if (buf.join("\n\n").length + para.length > limit && buf.length) {
      chunks.push(buf.join("\n\n")); buf = [para];
    } else { buf.push(para); }
  }
  if (buf.length) chunks.push(buf.join("\n\n"));
  return chunks.length ? chunks : [text.slice(0, limit)];
}

// ── AI call with fallback ─────────────────────────────────────────────────────
async function chatraResearch(prompt) {
  for (const ep of ENDPOINTS) {
    try {
      const resp = await axios.get(`${BASE_URL}${ep.path}`, {
        params:  ep.build(prompt),
        timeout: 60000,
        headers: { "User-Agent": "MissChatra/1.0" },
      });
      const data = resp.data;
      let result = "";
      if (typeof data === "string") { result = data.trim(); }
      else if (typeof data === "object") {
        for (const key of ["reply","response","text","message","content","result","output","answer"]) {
          if (typeof data[key] === "string" && data[key].trim()) { result = data[key].trim(); break; }
        }
        if (!result && data.data && typeof data.data === "object") {
          for (const key of ["reply","response","text","message","content","result","output","answer"]) {
            if (typeof data.data[key] === "string" && data.data[key].trim()) { result = data.data[key].trim(); break; }
          }
        }
        if (!result) result = JSON.stringify(data);
      }
      if (result && !result.startsWith("❌") && result.length >= 5) return result;
    } catch {}
  }
  return "⚠️ Chatra Research is temporarily unavailable. All AI engines are busy. Please try again.\n\n---SOURCES---\n1. N/A | Service temporarily offline\n---END SOURCES---";
}

module.exports = {
  name:     "Research",
  category: "ai",
  desc:     "Deep multi-turn research engine powered by Chatra AI",
  command:  ["research", "endresearch"],

  // Called from message.js to check if a REPLY should continue a research session
  handleResearchReply: async (sock, m, chatId, userId, body) => {
    const sess = getSession(chatId, userId);
    if (!sess) return false;
    // Only intercept replies to the bot's own research messages
    if (!m.quoted || !m.key?.fromMe) return false;
    // Check if the quoted message is a research result (heuristic: contains "Chatra Research")
    const quotedTxt = m.quoted?.text || m.quoted?.caption || "";
    if (!quotedTxt.includes("Chatra Research") && !quotedTxt.includes("endresearch")) return false;
    if (!body || body.trim().startsWith("/")) return false;

    const query = body.trim();
    addToHistory(sess, "user", query);
    const prompt = buildPrompt(sess, query);

    // Send progress
    const prog = await sock.sendMessage(chatId, { text: buildProgressMsg("🚀 Processing follow-up...", 5, query) }, { quoted: m });
    let stageIdx = 0;
    const progInterval = setInterval(async () => {
      stageIdx = Math.min(stageIdx + 1, STAGES.length - 1);
      const [pct, txt] = STAGES[stageIdx];
      try { await sock.sendMessage(chatId, { text: buildProgressMsg(txt, pct, query), edit: prog.key }); } catch {}
    }, 2500);

    try {
      const raw = await chatraResearch(prompt);
      clearInterval(progInterval);
      addToHistory(sess, "assistant", raw);
      const { body: b, sources } = extractSources(raw);
      const full   = formatResult(b, sources, query, true);
      const chunks = splitLong(full);
      for (const chunk of chunks) {
        await sock.sendMessage(chatId, { text: chunk }, { quoted: m });
        if (chunks.length > 1) await new Promise(r => setTimeout(r, 500));
      }
      try { await sock.sendMessage(chatId, { delete: prog.key }); } catch {}
    } catch (e) {
      clearInterval(progInterval);
      try { await sock.sendMessage(chatId, { delete: prog.key }); } catch {}
      await sock.sendMessage(chatId, { text: "❌ Research failed. Please try again." });
    }
    return true;
  },

  run: async ({ sock, m, args, command, chatId, userId, reply, prefix }) => {
    if (command === "endresearch") {
      const key = sessionKey(chatId, userId);
      if (global._researchSessions.has(key)) {
        global._researchSessions.delete(key);
        return reply("✅ Research session closed.");
      }
      return reply("ℹ️ No active research session.");
    }

    // /research
    const query = args.join(" ").trim();
    if (!query) {
      return reply(
        `🔬 *Chatra Research* — How to use:\n\n` +
        `*${prefix}research <your question>*\n\n` +
        `📌 Example:\n${prefix}research How does blockchain work?\n\n` +
        `💡 Reply to any of my research messages to continue the conversation.\n` +
        `Use ${prefix}endresearch to close the session.`
      );
    }

    const sess = newSession(chatId, userId);
    addToHistory(sess, "user", query);
    const prompt = buildPrompt(sess, query);

    // Animated progress
    const progMsg = await sock.sendMessage(chatId, {
      text: buildProgressMsg(STAGES[0][1], STAGES[0][0], query)
    }, { quoted: m });

    let stageIdx = 0;
    const progInterval = setInterval(async () => {
      stageIdx = Math.min(stageIdx + 1, STAGES.length - 1);
      const [pct, txt] = STAGES[stageIdx];
      try { await sock.sendMessage(chatId, { text: buildProgressMsg(txt, pct, query), edit: progMsg.key }); } catch {}
    }, 2500);

    try {
      const raw    = await chatraResearch(prompt);
      clearInterval(progInterval);
      addToHistory(sess, "assistant", raw);
      const { body, sources } = extractSources(raw);
      const full   = formatResult(body, sources, query, false);
      const chunks = splitLong(full);

      for (const chunk of chunks) {
        await sock.sendMessage(chatId, { text: chunk }, { quoted: m });
        if (chunks.length > 1) await new Promise(r => setTimeout(r, 500));
      }
      try { await sock.sendMessage(chatId, { delete: progMsg.key }); } catch {}
    } catch (e) {
      clearInterval(progInterval);
      try { await sock.sendMessage(chatId, { delete: progMsg.key }); } catch {}
      await reply("❌ Research failed. Please try again.");
    }
  },
};
