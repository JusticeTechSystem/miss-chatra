// library/chatbot.js — Miss Chatra AI Layer (synced with TG p12_ai_commands.py / shared.py)
"use strict";

const axios  = require("axios");
const config = require("../settings/config");

const BASE = config.aiBaseUrl || "https://apis.prexzyvilla.site";

async function callAI(endpoint, params = {}, timeoutMs = 35000) {
  try {
    const res = await axios.get(`${BASE}${endpoint}`, { params, timeout: timeoutMs });
    const d   = res.data;
    if (typeof d === "string") return d.trim();
    return d?.result || d?.response || d?.answer || d?.text || d?.output
      || d?.message || d?.content || d?.data?.result
      || (typeof d === "object" ? JSON.stringify(d) : null);
  } catch (e) {
    if (e.code === "ECONNABORTED") return null;
    return null;
  }
}

// ── All AI endpoints — exact mirror of TG shared.py ───────────────────────────
const AI = {
  // Core models
  gpt5:            (t)       => callAI("/ai/gpt-5",              { text: t, prompt: t }),
  gemini:          (t)       => callAI("/ai/gemini",             { text: t }),
  gemini25f:       (t, s)    => callAI("/ai/chat-gemini-2-5-flash", { prompt: t, search: s || "" }),
  gemini25p:       (t, s)    => callAI("/ai/chat-gemini-2-5-pro",   { prompt: t, search: s || "" }),
  deepseek:        (t)       => callAI("/ai/deepseekchat",       { prompt: t }),
  deepseekR1:      (t)       => callAI("/ai/chat--cf-deepseek-ai-deepseek-r1-distill-qwen-32b", { prompt: t }),
  deepseekReasoner:(t)       => callAI("/ai/deepseekreasoner",   { prompt: t }),
  claude:          (t)       => callAI("/ai/claude",             { text: t }),
  grok:            (t)       => callAI("/ai/grok",               { text: t }),
  meta:            (t)       => callAI("/ai/meta-ai",            { text: t }),
  copilot:         (t)       => callAI("/ai/copilot",            { text: t }),
  copilotDeep:     (t)       => callAI("/ai/copilot-think",      { text: t }, 60000),
  qwq:             (t)       => callAI("/ai/chat--cf-qwen-qwq-32b", { prompt: t }),
  logical:         (t)       => callAI("/ai/logical",            { text: t }),
  advanced:        (t, k, v) => callAI("/ai/advanced",           { prompt: t, keywords: k || "", voice_style: v || "default" }),
  dolphinCode:     (t)       => callAI("/ai/code-advanced",      { text: t }),

  // Image generation
  gemimage:    (p, ar) => callAI("/ai/gemimage",    { prompt: p, aspect_ratio: ar || "1:1" }),
  imgRealistic:(p)     => callAI("/ai/realistic",   { prompt: p }),
  imgAnime:    (p)     => callAI("/ai/anime",        { prompt: p }),
  imgFantasy:  (p)     => callAI("/ai/fantasy",      { prompt: p }),
  imgPixelArt: (p)     => callAI("/ai/pixel-art",    { prompt: p }),
  imgSketch:   (p)     => callAI("/ai/sketch",       { prompt: p }),
  imgCyberpunk:(p)     => callAI("/ai/cyberpunk",    { prompt: p }),
  imgWatercolor:(p)    => callAI("/ai/watercolor",   { prompt: p }),
  imgOilPainting:(p)   => callAI("/ai/oil-painting", { prompt: p }),
  imgCartoon:  (p)     => callAI("/ai/cartoon",      { prompt: p }),
  imgAbstract: (p)     => callAI("/ai/abstract",     { prompt: p }),
  imgMinimalist:(p)    => callAI("/ai/minimalist",   { prompt: p }),
  imgSurreal:  (p)     => callAI("/ai/surreal",      { prompt: p }),
  imgVintage:  (p)     => callAI("/ai/vintage",      { prompt: p }),
  imgSteampunk:(p)     => callAI("/ai/steampunk",    { prompt: p }),
  imgHorror:   (p)     => callAI("/ai/horror",       { prompt: p }),
  imgSciFi:    (p)     => callAI("/ai/sci-fi",       { prompt: p }),
  imgPopArt:   (p)     => callAI("/ai/pop-art",      { prompt: p }),

  // Code tools
  promptToCode:(p, l)  => callAI("/ai/prompttocode", { prompt: p, language: l || "python" }),
  detectBugs:  (c)     => callAI("/ai/detectbugs",   { code: c }),
  convertCode: (c, t, s) => callAI("/ai/convertcode", { code: c, target: t, source: s || "" }),
  explainCode: (c, l)  => callAI("/ai/explaincode",  { code: c, language: l || "" }),

  // Media / creative
  aiSong:        (t, g, a) => callAI("/ai/aisong",         { title: t, genre: g || "pop", artist: a || "" }),
  aiInstrumental:(t, g)    => callAI("/ai/aiinstrumental",  { title: t, genre: g || "pop" }),
  gemchat:       (t, ctx)  => callAI("/ai/gemchat",         { text: t, context: ctx || "" }),
  chatYoutube:   (url, q)  => callAI("/ai/chatup-youtube",  { url, question: q }),
  reset:         (uid)     => callAI("/ai/reset",           { user_id: uid }),
};

// ── Style → endpoint map (for /imagestyle) ────────────────────────────────────
const STYLE_MAP = {
  realistic: "/ai/realistic", anime: "/ai/anime", fantasy: "/ai/fantasy",
  cyberpunk: "/ai/cyberpunk", watercolor: "/ai/watercolor",
  oil_painting: "/ai/oil-painting", pixel_art: "/ai/pixel-art",
  sketch: "/ai/sketch", cartoon: "/ai/cartoon", abstract: "/ai/abstract",
  minimalist: "/ai/minimalist", surreal: "/ai/surreal", vintage: "/ai/vintage",
  steampunk: "/ai/steampunk", horror: "/ai/horror",
  sci_fi: "/ai/sci-fi", pop_art: "/ai/pop-art",
};
AI.imgStyle = (p, style) => {
  const ep = STYLE_MAP[(style||"realistic").toLowerCase().replace(/[-\s]/g,"_")] || "/ai/realistic";
  return callAI(ep, { prompt: p });
};

// ── Chatbot / Miss Chatra persona ─────────────────────────────────────────────
const _ctx = {};
function getContext(chatId, userId) {
  const k = `${chatId}:${userId}`;
  return _ctx[k] || [];
}
function addContext(chatId, userId, role, text) {
  const k = `${chatId}:${userId}`;
  if (!_ctx[k]) _ctx[k] = [];
  _ctx[k].push({ role, text });
  if (_ctx[k].length > 12) _ctx[k] = _ctx[k].slice(-12);
}

const IDENTITY_TRIGGERS = [
  /who (are|made|created|built|designed|programmed|developed) you/i,
  /your (name|creator|developer|owner|maker)/i,
  /what (are|is) (you|your name)/i,
  /introduce yourself/i, /tell me about yourself/i,
  /are you (an ai|a bot|chatgpt|gpt|gemini|claude|copilot|bard|openai)/i,
  /who (is|are) (your (creator|developer|owner|maker))/i,
];

const IDENTITY_RESPONSE = `I'm *Miss Chatra* 👋, an advanced AI assistant created by *JusticeTech* — a Nigerian tech company run by Justice Tech City. I'm here to help with questions, group management, media, games, and more. Just ask! 😊`;

const IDENTITY_FILTER = [
  /i'?m (copilot|chatgpt|gpt|gemini|claude|bard|an ai|microsoft)/i,
  /i am (copilot|chatgpt|gpt-\d|gemini|claude|bard|microsoft copilot)/i,
  /called (copilot|chatgpt|gemini|claude)/i,
  /my name is (copilot|chatgpt|gemini|claude)/i,
  /created by (openai|google|anthropic|microsoft)/i,
  /made by (openai|google|anthropic|microsoft)/i,
];

async function missChatra(text, opts = {}) {
  const { userId = "anon", context = [], deepThink = false } = opts;
  const st = require("./state").getState();
  const training = st.chatbot_training || {};
  const name     = training.name || "Miss Chatra";
  const dev      = training.developer || "JusticeTech";
  const company  = training.company   || "JusticeTech System";
  const location = training.company_location || "Nigeria";

  // Identity override
  for (const p of IDENTITY_TRIGGERS) {
    if (p.test(text)) return IDENTITY_RESPONSE;
  }

  const sysPrompt = [
    `You are ${name}, an advanced AI assistant created by ${dev} of ${company} (${location}).`,
    `You are helpful, witty, and natural. Never claim to be ChatGPT, Claude, Gemini, Copilot, or any other AI.`,
    `If asked who made you, always say you were created by ${dev} / ${company}.`,
    `Keep responses concise (2-4 sentences) unless asked for detail.`,
    deepThink ? "This is a deep-think request. Provide 200-300 word detailed analysis." : "",
    context.length ? `Recent conversation: ${context.slice(-4).map(c => `[${c.role}]: ${c.text}`).join(" | ")}` : "",
  ].filter(Boolean).join(" ");

  const prompt = `${sysPrompt}\n\nUser: ${text}`;
  let reply = await AI.gemini25f(prompt);
  if (!reply) reply = await AI.gemini(prompt);
  if (!reply) reply = await AI.gpt5(text);
  if (!reply) return null;

  // Filter identity leaks
  for (const p of IDENTITY_FILTER) {
    if (p.test(reply)) {
      reply = await AI.gemini(`You are ${name} by ${dev}. Answer this naturally without naming other AIs: ${text}`);
    }
  }
  return reply;
}

module.exports = { AI, callAI, missChatra, getContext, addContext, STYLE_MAP };

// ── Conversation session management ──────────────────────────────────────────
const _sessions  = new Map(); // key: `${chatId}:${userId}` → { context, active, ignored, ts }
const SESSION_TTL = 60 * 60 * 1000; // 1 hour

function _key(chatId, userId) { return `${chatId}:${userId}`; }
function _get(chatId, userId)  { return _sessions.get(_key(chatId, userId)) || {}; }
function _set(chatId, userId, data) {
  _sessions.set(_key(chatId, userId), { ..._get(chatId, userId), ...data, ts: Date.now() });
}

function startConversation(chatId, userId)   { _set(chatId, userId, { active: true, ignored: false }); }
function endConversation(chatId, userId)     { _set(chatId, userId, { active: false }); }
function isConversationActive(chatId, userId){ const s = _get(chatId, userId); return !!(s.active && (Date.now() - (s.ts||0)) < SESSION_TTL); }
function isConversationIgnored(chatId, userId){ return !!_get(chatId, userId).ignored; }
function setConversationIgnored(chatId, userId, v){ _set(chatId, userId, { ignored: v }); }
function getContext(chatId, userId)          { return _get(chatId, userId).context || []; }
function updateContext(chatId, userId, user, bot){
  const ctx = getContext(chatId, userId);
  ctx.push({ role: "user", text: user }, { role: "bot", text: bot });
  if (ctx.length > 20) ctx.splice(0, ctx.length - 20);
  _set(chatId, userId, { context: ctx, active: true });
}

// ── TTS generation ────────────────────────────────────────────────────────────
async function generateTTS(text) {
  try {
    const config = require("../settings/config");
    const base   = config.prexzyBase || "https://apis.prexzyvilla.site";
    const resp   = await require("axios").get(`${base}/ai/tts`, { params: { text: text.slice(0, 200) }, responseType: "arraybuffer", timeout: 15000 });
    const buf = Buffer.from(resp.data);
    if (buf.length > 1000) return buf;
  } catch {}
  return null;
}

// ── Custom training storage ────────────────────────────────────────────────────
const _globalTraining = new Map();
const _userTraining   = new Map();

function addCustomTraining(key, value)    { _globalTraining.set(key, value); }
function removeCustomTraining(key)        { _globalTraining.delete(key); }
function getCustomTraining()             { return Object.fromEntries(_globalTraining); }
function addUserTraining(userId, k, v)   { if (!_userTraining.has(userId)) _userTraining.set(userId, new Map()); _userTraining.get(userId).set(k, v); }
function removeUserTraining(userId, k)   { _userTraining.get(userId)?.delete(k); }
function getUserTraining(userId)         { return Object.fromEntries(_userTraining.get(userId) || []); }
function clearUserTraining(userId)       { _userTraining.delete(userId); }
function getTraining()                   { return { global: getCustomTraining() }; }

// Cleanup stale sessions every 30 min
setInterval(() => {
  const now = Date.now();
  for (const [k, s] of _sessions) { if (now - (s.ts||0) > SESSION_TTL) _sessions.delete(k); }
}, 1800000);

// Re-export with all functions
module.exports = {
  AI, callAI, missChatra, getContext: (c,u) => _get(c,u).context || [], addContext, STYLE_MAP,
  // Conversation management
  startConversation, endConversation, isConversationActive, isConversationIgnored,
  setConversationIgnored, updateContext, generateTTS,
  // Training
  addCustomTraining, removeCustomTraining, getCustomTraining,
  addUserTraining, removeUserTraining, getUserTraining, clearUserTraining, getTraining,
};
