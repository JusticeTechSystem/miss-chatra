// plugins/games.js — Miss Chatra Games Hub (v2 — synced with TG p15_games.py)
"use strict";

const fs   = require("fs");
const path = require("path");
const { getState, saveState, GAME_AUTODELETE_BOT_DELAY, GAME_AUTODELETE_USER_DELAY } = require("../library/state");

// ── Game card images ──────────────────────────────────────────────────────────
const THUMB_DIR   = path.join(__dirname, "..", "thumbnail");
const TOD_CARD    = path.join(THUMB_DIR, "tod_card.jpg");
const RIDDLE_CARD = path.join(THUMB_DIR, "riddle_card.jpg");

function loadCard(p) {
  try { return fs.existsSync(p) ? fs.readFileSync(p) : null; } catch { return null; }
}

// ── Auto-delete helper (mirrors TG schedule_auto_delete for games) ────────────
function gad(sock, chatId, msgKey, context) {
  const st = getState();
  if (!st.auto_delete_enabled) return;
  if (!st.games_autodelete_enabled) return;
  const delay = context === "user"
    ? (st.game_autodelete_user_delay || GAME_AUTODELETE_USER_DELAY)
    : (st.game_autodelete_bot_delay  || GAME_AUTODELETE_BOT_DELAY);
  if (delay <= 0) return;
  setTimeout(async () => { try { await sock.sendMessage(chatId, { delete: msgKey }); } catch {} }, delay * 1000);
}

// ── Sarcastic cheat replies (for riddle reveal attempts by non-admins) ─────────
const CHEAT_REPLIES = [
  "😂 Nice try, cheater! The answer stays hidden until an admin decides you've suffered enough.",
  "🙈 Clicking Reveal without being an admin? Bold move. Spoiler: it didn't work.",
  "🕵️ Caught red-handed trying to cheat! The answer is... not for you.",
  "🤡 The classic 'tap the forbidden button' strategy. Impressive.",
  "👀 Only admins can reveal answers. Go back to guessing like everyone else.",
  "🚫 Nope. Your cheating privileges have been denied.",
  "😏 You really thought that would work? Adorable. Ask an admin nicely.",
];

const TD_SARCASTIC_CONFIRM = [
  "😭 Is that really your answer? Send it again to confirm...",
  "🤨 Bold choice. Type it again to lock it in.",
  "😬 Are you sure about that?? Send it again to confirm.",
  "👀 Oh wow... type it again to lock that in.",
  "🙈 That's your final answer? Repeat to confirm.",
  "😂 I need you to commit to that. Send it again.",
  "🤡 Really?? Are you sure? Type it one more time.",
];

const TD_VERDICTS = [
  "Verdict: I can't believe you actually typed that. Respect though ✅",
  "Verdict: I'm choosing peace... but that answer was chaos 😂",
  "Verdict: That's wild. I'm saving this for later 😏",
  "Verdict: Okay main character. Next!",
  "Verdict: Not you exposing yourself like that 😭",
  "Verdict: The group is SHOOK 😳",
  "Verdict: That was... unexpected. Legendary. 👑",
  "Verdict: Bold. I respect it. 💪",
  "Verdict: Nobody asked but everyone needed to know 😌",
  "Verdict: Real ones only. Respect. 🙌",
  "Verdict: The way everyone went silent after that 🤐",
  "Verdict: A star is born. 🌟",
];

const TRUTH_QUESTIONS = [
  "What's something you believe that most people disagree with?",
  "When was the last time you got really angry, and why?",
  "What's the most embarrassing thing you've ever googled?",
  "What's a habit you want to stop but keep making excuses for?",
  "What's the biggest lie you've told recently?",
  "Who do you miss right now but won't admit it to them?",
  "What's the pettiest reason you've stopped talking to someone?",
  "What's one thing you wish you could erase from your past?",
  "What's the most irrational fear you have?",
  "What's a compliment you still think about?",
  "If you could go back and change one decision, what would it be?",
  "What's something you're genuinely ashamed of?",
  "What's the last thing you lied about?",
  "Who in this group do you trust the most, and why?",
  "What's a secret you've kept from your family?",
  "What's the most childish thing you still do?",
  "What's a deal-breaker for you in a friendship?",
  "What's the most recent time you cried, and why?",
  "What's a lie you told that you never got caught for?",
  "What's the most trouble you've ever been in?",
  "What is something you've done that you'd never admit on camera?",
  "Who in your contacts do you secretly dislike?",
  "What's your most embarrassing childhood memory?",
  "What's a text you've regretted sending?",
  "What's one thing about you that people would be shocked to know?",
];

const DARE_CHALLENGES = [
  "Send a voice note saying 'I was wrong' in your most dramatic tone.",
  "Change your profile picture to something silly for 10 minutes.",
  "Type your next message using ONLY emojis.",
  "Mention someone and tell them 'I owe you snacks'.",
  "Confess your most recent guilty pleasure song.",
  "Write a 2-line poem about this group chat.",
  "Compliment the last person who spoke.",
  "Do 10 pushups and report back (no lies... or else 😈).",
  "Say 'I love peace' and then start harmless drama in one line.",
  "Send a screenshot of your last meme search.",
  "Describe yourself in 3 words that start with the same letter.",
  "Tell us your most unpopular opinion about something everyone loves.",
  "Shout 'Miss Chatra is amazing!' in your best voice note.",
  "React to the last 5 messages in this group with only 😭.",
  "Send your current phone wallpaper screenshot.",
  "Text 'I need help' to the last person you called and screenshot.",
  "Say something nice about every active member in this chat.",
  "Describe your crush using only food emojis.",
  "Send a voice note of you beatboxing for 10 seconds.",
  "Caption your current mood using only a movie title.",
  "Send a voice note of you singing the chorus of the last song you listened to.",
  "Tell everyone what you *really* think about social media.",
  "Post the weirdest photo in your gallery right now.",
  "Go 10 minutes without replying to this chat — starting now.",
];

const RIDDLES = [
  { q: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", a: "echo" },
  { q: "What has keys but can't open locks?", a: "piano" },
  { q: "The more of this you take, the more you leave behind. What is it?", a: "footsteps" },
  { q: "What gets wetter the more it dries?", a: "towel" },
  { q: "What can travel around the world while staying in a corner?", a: "stamp" },
  { q: "I have cities, but no houses live there. Mountains, but no trees. Water, but no fish. What am I?", a: "map" },
  { q: "The more you have of me, the less you see. What am I?", a: "darkness" },
  { q: "I run but never walk. I have a mouth but never talk. I have a bed but never sleep. What am I?", a: "river" },
  { q: "What has hands but can't clap?", a: "clock" },
  { q: "What begins with T, ends with T, and has T in it?", a: "teapot" },
  { q: "I'm light as a feather, but even the strongest person can't hold me for more than a few minutes. What am I?", a: "breath" },
  { q: "What comes once in a minute, twice in a moment, but never in a thousand years?", a: "m" },
  { q: "What has a head and a tail but no body?", a: "coin" },
  { q: "What goes up when rain comes down?", a: "umbrella" },
  { q: "What can you catch but not throw?", a: "cold" },
  { q: "What has an eye but cannot see?", a: "needle" },
  { q: "What can fly without wings?", a: "time" },
  { q: "What tastes better than it smells?", a: "tongue" },
  { q: "I have no legs but always run. I have no mouth but tell a lot. What am I?", a: "clock" },
  { q: "What belongs to you but is used more by others?", a: "name" },
];

// ── Per-chat used-content tracking ────────────────────────────────────────────
const _USED_TRUTHS  = {};
const _USED_DARES   = {};
const _USED_RIDDLES = {};

function pickNoRepeat(arr, usedSet) {
  const avail = arr.filter((_, i) => !usedSet.has(i));
  if (!avail.length) usedSet.clear();
  const pool = avail.length ? avail : arr;
  const idx  = Math.floor(Math.random() * pool.length);
  usedSet.add(arr.indexOf(pool[idx]));
  if (usedSet.size > 12) usedSet.delete(usedSet.values().next().value);
  return pool[idx];
}

function pickTruth(chatId)  { if (!_USED_TRUTHS[chatId])  _USED_TRUTHS[chatId]  = new Set(); return pickNoRepeat(TRUTH_QUESTIONS, _USED_TRUTHS[chatId]); }
function pickDare(chatId)   { if (!_USED_DARES[chatId])   _USED_DARES[chatId]   = new Set(); return pickNoRepeat(DARE_CHALLENGES, _USED_DARES[chatId]); }
function pickRiddle(chatId) { if (!_USED_RIDDLES[chatId]) _USED_RIDDLES[chatId] = new Set(); return pickNoRepeat(RIDDLES, _USED_RIDDLES[chatId]); }

// ── Active game state ─────────────────────────────────────────────────────────
const ACTIVE_GAMES = {};

// ── Game card helper ─────────────────────────────────────────────────────────
async function sendCard(sock, chatId, m, cardPath, caption) {
  const img = loadCard(cardPath);
  if (img) {
    try { return await sock.sendMessage(chatId, { image: img, caption }, m ? { quoted: m } : {}); } catch {}
  }
  return sock.sendMessage(chatId, { text: caption }, m ? { quoted: m } : {});
}

// ── Get TD timer ─────────────────────────────────────────────────────────────
function getTdSecs(chatId) {
  const st = getState();
  return (st.game_settings?.[chatId]?.td_seconds) || 60;
}

// ── Start truth/dare round ────────────────────────────────────────────────────
async function startTDRound(sock, chatId, userId, kind) {
  let prompt, label;
  if (kind === "truth")     { prompt = pickTruth(chatId); label = "💗 Truth"; }
  else if (kind === "dare") { prompt = pickDare(chatId);  label = "🔥 Dare"; }
  else {
    if (Math.random() < 0.5) { prompt = pickTruth(chatId); label = "💗 Truth"; }
    else                      { prompt = pickDare(chatId);  label = "🔥 Dare"; }
  }
  const tdSecs = getTdSecs(chatId);
  const caption = [
    `${label}`,
    ``,
    `📋 ${prompt}`,
    ``,
    `_Reply with your answer (${tdSecs}s to respond)_`,
    `*(Type SKIP to pass)*`,
  ].join("\n");
  const sent = await sendCard(sock, chatId, null, TOD_CARD, caption);
  if (ACTIVE_GAMES[chatId]?.timeout_timer) clearTimeout(ACTIVE_GAMES[chatId].timeout_timer);
  const game = {
    type: "truthdare", kind: label, prompt,
    prompt_msg_key: sent?.key,
    participant_id: null,
    pending_confirm: {},
    expires_at: Math.floor(Date.now() / 1000) + tdSecs,
    started_at: Math.floor(Date.now() / 1000),
    timeout_timer: null,
  };
  game.timeout_timer = setTimeout(async () => {
    if (ACTIVE_GAMES[chatId] === game) {
      delete ACTIVE_GAMES[chatId];
      try {
        const msg = await sock.sendMessage(chatId, { text: `⏰ *Time's up!* ${label} prompt expired.\n\n_Use /truth, /dare or /truthordare to play again._` });
        gad(sock, chatId, msg?.key);
      } catch {}
    }
  }, tdSecs * 1000);
  ACTIVE_GAMES[chatId] = game;
  if (sent?.key) gad(sock, chatId, sent.key);
}

// ── End active game ────────────────────────────────────────────────────────────
function endActiveGame(chatId) {
  const g = ACTIVE_GAMES[chatId];
  if (g?.timeout_timer) clearTimeout(g.timeout_timer);
  delete ACTIVE_GAMES[chatId];
}

// ── Module export ─────────────────────────────────────────────────────────────
module.exports = {
  name: "Games",
  category: "games",
  command: [
    "truth","dare","truthordare","endgame","riddleanswer",
    "riddle","settdtime",
    "dice","dart","basketball","football","bowling","slot","game",
  ],
  ACTIVE_GAMES,

  handleGameMessage: async (sock, m, chatId, userId, text) => {
    const game = ACTIVE_GAMES[chatId];
    if (!game) return false;

    // ── Truth/Dare flow ──────────────────────────────────────────────────────
    if (game.type === "truthdare") {
      if (Math.floor(Date.now() / 1000) > game.expires_at) return false;
      const t = (text || "").trim();
      if (!t || t.startsWith("/")) return false;

      gad(sock, chatId, m?.key, "user");

      if (t.toLowerCase() === "skip") {
        clearTimeout(game.timeout_timer);
        endActiveGame(chatId);
        const msg = await sock.sendMessage(chatId, { text: "⏭ *Skipped!* Use /truth, /dare, or /truthordare to play again." }, { quoted: m });
        gad(sock, chatId, msg?.key);
        return true;
      }

      if (!game.participant_id) game.participant_id = userId;
      if (userId !== game.participant_id) return false;

      const pending = game.pending_confirm[userId];
      if (!pending) {
        const conf = TD_SARCASTIC_CONFIRM[Math.floor(Math.random() * TD_SARCASTIC_CONFIRM.length)];
        const msg  = await sock.sendMessage(chatId, { text: conf }, { quoted: m });
        game.pending_confirm[userId] = { answer: t, last_bot_msg_key: msg?.key, asked_at: Date.now() };
        gad(sock, chatId, msg?.key);
        return true;
      }

      if (t.toLowerCase() !== (pending.answer || "").toLowerCase()) {
        const conf = TD_SARCASTIC_CONFIRM[Math.floor(Math.random() * TD_SARCASTIC_CONFIRM.length)];
        const msg  = await sock.sendMessage(chatId, { text: conf }, { quoted: m });
        pending.answer = t; pending.last_bot_msg_key = msg?.key; pending.asked_at = Date.now();
        gad(sock, chatId, msg?.key);
        return true;
      }

      clearTimeout(game.timeout_timer);
      const verdict = TD_VERDICTS[Math.floor(Math.random() * TD_VERDICTS.length)];
      const msg = await sock.sendMessage(chatId, {
        text: [`✅ *Confirmed!*`, verdict, ``, `_Pick next:_ */truth* | */dare* | */truthordare* | */endgame*`].join("\n")
      }, { quoted: m });
      gad(sock, chatId, msg?.key);
      endActiveGame(chatId);
      return true;
    }

    // ── Riddle flow ──────────────────────────────────────────────────────────
    if (game.type === "riddle") {
      const guess = (text || "").trim().toLowerCase();
      if (!guess || guess.startsWith("/")) return false;

      gad(sock, chatId, m?.key, "user");
      if (!game.attempts) game.attempts = {};
      const tries = game.attempts[userId] || 0;
      if (tries >= 3) {
        const msg = await sock.sendMessage(chatId, { text: "❌ You're out of tries for this riddle." }, { quoted: m });
        gad(sock, chatId, msg?.key);
        return true;
      }
      game.attempts[userId] = tries + 1;

      if (guess === game.answer.toLowerCase()) {
        const msg = await sock.sendMessage(chatId, {
          text: `✅ *Correct!* 🎉\n\n_Answer:_ *${game.answer}*\n\n_Use /riddle for a new one._`
        }, { quoted: m });
        gad(sock, chatId, msg?.key);
        return true;
      }
      const left = 3 - game.attempts[userId];
      const msg = await sock.sendMessage(chatId, { text: `❌ Nope! Tries left: *${left}*` }, { quoted: m });
      gad(sock, chatId, msg?.key);
      return true;
    }

    return false;
  },

  run: async ({ sock, m, command, args, reply, prefix, chatId, userId, isOwner, isDev, isAdmin }) => {
    const chat  = chatId || m?.chat;
    const isGrp = (chat || "").endsWith("@g.us");
    const st    = getState();

    // /settdtime <secs>
    if (command === "settdtime") {
      if (!isOwner && !isDev && !isAdmin) return reply("🚫 Only admins can change the game timer.");
      const secs = Math.max(5, Math.min(600, parseInt(args[0] || "60") || 60));
      if (!st.game_settings) st.game_settings = {};
      if (!st.game_settings[chat]) st.game_settings[chat] = {};
      st.game_settings[chat].td_seconds = secs;
      saveState();
      return reply(`✅ Truth/Dare timer set to *${secs}s*.`);
    }

    // /truth
    if (command === "truth") {
      if (!isGrp) return reply("Use this in a group so everyone can play.");
      endActiveGame(chat);
      await startTDRound(sock, chat, userId, "truth");
      return;
    }

    // /dare
    if (command === "dare") {
      if (!isGrp) return reply("Use this in a group so everyone can play.");
      endActiveGame(chat);
      await startTDRound(sock, chat, userId, "dare");
      return;
    }

    // /truthordare
    if (command === "truthordare") {
      if (!isGrp) return reply("Use this in a group so everyone can play.");
      endActiveGame(chat);
      const caption = [
        `🎲 *Truth or Dare?*`,
        ``,
        `*/truth* — get a truth question`,
        `*/dare*  — get a dare challenge`,
        `*/truthordare* — let fate decide 🎲`,
      ].join("\n");
      const sent = await sendCard(sock, chat, m, TOD_CARD, caption);
      gad(sock, chat, sent?.key);
      return;
    }

    // /endgame
    if (command === "endgame") {
      if (!isGrp) return reply("This command is for group chats.");
      if (!isOwner && !isDev && !isAdmin) return reply("Only admins can end the current game.");
      if (!ACTIVE_GAMES[chat]) return reply("No active game to end.");
      endActiveGame(chat);
      return reply("🛑 Game ended.");
    }

    // /riddle
    if (command === "riddle") {
      if (!isGrp) return reply("Use this in a group so everyone can play.");
      endActiveGame(chat);
      const r = pickRiddle(chat);
      const caption = [
        `🧩 *Riddle Time*`,
        ``,
        `❓ ${r.q}`,
        ``,
        `Send your answer — no reply tag needed.`,
        `Each person has *3 tries*.`,
        ``,
        `_Admin: /riddleanswer to reveal | /endgame to end_`,
      ].join("\n");
      const sent = await sendCard(sock, chat, m, RIDDLE_CARD, caption);
      ACTIVE_GAMES[chat] = {
        type: "riddle", moderator_id: userId,
        prompt_msg_key: sent?.key,
        started_at: Math.floor(Date.now() / 1000),
        question: r.q, answer: r.a, attempts: {},
      };
      if (sent?.key) gad(sock, chat, sent.key);
      return;
    }

    // /riddleanswer — admin-only reveal
    if (command === "riddleanswer") {
      const game = ACTIVE_GAMES[chat];
      if (!game || game.type !== "riddle") return reply("No active riddle.");
      if (!isAdmin && !isOwner && !isDev) {
        const r = CHEAT_REPLIES[Math.floor(Math.random() * CHEAT_REPLIES.length)];
        const msg = await sock.sendMessage(chat, { text: r }, { quoted: m });
        gad(sock, chat, msg?.key);
        return;
      }
      const msg = await sock.sendMessage(chat, {
        text: `👑 *Answer:* ${game.answer}`
      }, { quoted: m });
      gad(sock, chat, msg?.key);
      return;
    }

    // Dice games
    const DICE_MAP = { dice:"🎲", dart:"🎯", basketball:"🏀", football:"⚽", bowling:"🎳", slot:"🎰" };
    if (DICE_MAP[command] || command === "game") {
      const list  = Object.values(DICE_MAP);
      const emoji = command === "game" ? list[Math.floor(Math.random() * list.length)] : DICE_MAP[command];
      try { await sock.sendMessage(chat, { text: emoji }, { quoted: m }); } catch { reply(emoji); }
    }
  },
};
