// plugins/wordchain.js — Miss Chatra Word Chain Game v2 (synced with TG p53_wordchain.py)
// Rules: Real English words only. 4+ letters. Last letter → first letter of next. No repeats.
"use strict";

const { getState, saveState, GAME_AUTODELETE_BOT_DELAY, GAME_AUTODELETE_USER_DELAY } = require("../library/state");
const { isValid, isValidAsync, chainStartWord } = require("../library/wordlist");

const GAME_TYPE  = "wordchain";
const MAX_LIVES  = 3;
const DEFAULT_TO = 60;
const LOBBY_WAIT = 30000;  // ms

// ── Auto-delete helper ────────────────────────────────────────────────────────
function gad(sock, chatId, msgKey, context) {
  const st = getState();
  if (!st.auto_delete_enabled) return;
  if (st.wordchain_autodelete_enabled === false) return;
  if (!st.games_autodelete_enabled) return;
  const delay = context === "user"
    ? (st.game_autodelete_user_delay || GAME_AUTODELETE_USER_DELAY)
    : (st.game_autodelete_bot_delay  || GAME_AUTODELETE_BOT_DELAY);
  if (delay <= 0) return;
  setTimeout(async () => { try { await sock.sendMessage(chatId, { delete: msgKey }); } catch {} }, delay * 1000);
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function livesBar(n) {
  return "❤️".repeat(Math.max(0, n)) + "🖤".repeat(Math.max(0, MAX_LIVES - n));
}

function currentPlayer(game) {
  const alive = game.order.filter(uid => (game.players[uid]?.lives || 0) > 0);
  return alive.length ? alive[game.turn_index % alive.length] : null;
}

function advanceTurn(game) {
  const alive = game.order.filter(uid => (game.players[uid]?.lives || 0) > 0);
  if (alive.length) game.turn_index = (game.turn_index + 1) % alive.length;
}

function getTimeout(chatId) {
  return getState().game_settings?.[chatId]?.wc_timeout || DEFAULT_TO;
}

// ── Announce whose turn it is ─────────────────────────────────────────────────
async function announceTurn(sock, chatId, game) {
  const cur = currentPlayer(game);
  if (!cur) return;
  const info = game.players[cur];
  const must = game.last_word ? game.last_word.slice(-1).toUpperCase() : "?";
  try {
    const msg = await sock.sendMessage(chatId, {
      text: [
        `🔤 *Word Chain — Your Turn!*`,
        ``,
        `*${info.name}*, send a word:`,
        `• Must start with *${must}*`,
        `• Must be a *real English word*`,
        `• Must be *4+ letters*`,
        ``,
        `Last word: \`${game.last_word}\``,
        `⏱ ${game.timeout}s | ${livesBar(info.lives)}`,
      ].join("\n")
    });
    gad(sock, chatId, msg?.key);
  } catch {}
  game.turn_started_at = Date.now();
  if (game.turn_timer) clearTimeout(game.turn_timer);
  game.turn_timer = setTimeout(() => turnTimeout(sock, chatId, game, cur), game.timeout * 1000);
}

// ── Turn timeout ──────────────────────────────────────────────────────────────
async function turnTimeout(sock, chatId, game, expected) {
  if (ACTIVE_GAMES[chatId] !== game) return;
  const cur = currentPlayer(game);
  if (cur !== expected) return;
  const info = game.players[expected];
  info.lives -= 1;
  const alive = game.order.filter(uid => (game.players[uid]?.lives || 0) > 0);
  if (info.lives <= 0) {
    try {
      const msg = await sock.sendMessage(chatId, { text: `⏰ *${info.name}* timed out — eliminated! 💀` });
      gad(sock, chatId, msg?.key);
    } catch {}
    if (alive.length <= 1) { await endGame(sock, chatId, game, "elim"); return; }
  } else {
    try {
      const msg = await sock.sendMessage(chatId, { text: `⏰ *${info.name}* was too slow! ${livesBar(info.lives)} lives left.` });
      gad(sock, chatId, msg?.key);
    } catch {}
  }
  advanceTurn(game);
  await announceTurn(sock, chatId, game);
}

// ── End game ──────────────────────────────────────────────────────────────────
async function endGame(sock, chatId, game, reason = "normal") {
  if (game.turn_timer) clearTimeout(game.turn_timer);
  delete ACTIVE_GAMES[chatId];
  const sorted = Object.entries(game.players).sort(([,a],[,b]) => b.words - a.words || b.score - a.score);
  const alive  = sorted.filter(([,p]) => p.lives > 0);
  const lines  = ["🏆 *Word Chain — Game Over!*\n"];
  if (alive.length === 1)     lines.push(`👑 Winner: *${alive[0][1].name}* 🎉\n`);
  else if (reason === "admin_end") lines.push("🛑 Game ended by admin.\n");
  lines.push("*Final Scores:*");
  ["🥇","🥈","🥉"].forEach((medal, i) => {
    if (sorted[i]) {
      const [, p] = sorted[i];
      lines.push(`${medal} ${p.name}${p.lives <= 0 ? " 💀" : ""} — ${p.words} words | ${livesBar(p.lives)}`);
    }
  });
  for (let i = 3; i < sorted.length; i++) {
    const [, p] = sorted[i];
    lines.push(`${i+1}. ${p.name}${p.lives <= 0 ? " 💀" : ""} — ${p.words} words`);
  }
  lines.push(`\n📖 Valid words used: *${game.used_words.size}*`);
  try {
    const msg = await sock.sendMessage(chatId, { text: lines.join("\n") });
    gad(sock, chatId, msg?.key);
  } catch {}
}

// ── Launch game after lobby ────────────────────────────────────────────────────
async function launchGame(sock, chatId, game) {
  if (game.started) return;
  game.started = true;
  if (!Object.keys(game.players).length) { delete ACTIVE_GAMES[chatId]; return; }
  const order = Object.keys(game.players).sort(() => Math.random() - 0.5);
  game.order = order;
  game.turn_index = 0;
  const startWord = typeof chainStartWord === "function" ? chainStartWord() : "game";
  game.last_word  = startWord;
  game.used_words = new Set([startWord]);
  const names = order.map(u => game.players[u].name).join(", ");
  try {
    const msg = await sock.sendMessage(chatId, {
      text: [
        `▶️ *Word Chain — Starting!*`,
        ``,
        `Players: ${names}`,
        ``,
        `First word: \`${startWord}\``,
        `Next must start with: *${startWord.slice(-1).toUpperCase()}*`,
        ``,
        `_Words must be real English, 4+ letters, no repeats_`,
      ].join("\n")
    });
    gad(sock, chatId, msg?.key);
  } catch {}
  await new Promise(r => setTimeout(r, 1200));
  await announceTurn(sock, chatId, game);
}

// ── Active games state ────────────────────────────────────────────────────────
const ACTIVE_GAMES = {};

module.exports = {
  name: "WordChain",
  category: "games",
  command: ["wordchain","wc","wcjoin","wcscore","endwc","wctime"],
  ACTIVE_GAMES,

  // ── Message flow handler (called from message.js) ────────────────────────────
  handleGameMessage: async (sock, m, chatId, userId, text) => {
    const game = ACTIVE_GAMES[chatId];

    // ── Lobby-phase: handle "join" / "start" text replies ──────────────────
    if (game && !game.started) {
      const body = (text || "").trim().toLowerCase();
      if (body === "join" || body === "wcjoin") {
        if (!game.players[userId]) {
          const name = m?.pushName || userId.split("@")[0] || "Player";
          game.players[userId] = { name, lives: MAX_LIVES, words: 0, score: 0 };
          try {
            const msg = await sock.sendMessage(chatId, { text: `✅ *${name}* joined the lobby! (${Object.keys(game.players).length} players)` }, { quoted: m });
            gad(sock, chatId, msg?.key);
          } catch {}
        } else {
          try {
            const msg = await sock.sendMessage(chatId, { text: "✋ You're already in the lobby!" }, { quoted: m });
            gad(sock, chatId, msg?.key);
          } catch {}
        }
        return true;
      }
      if (body === "start" && userId === game.mod) {
        await launchGame(sock, chatId, game);
        return true;
      }
    }

    if (!game || !game.started) return false;

    const cur = currentPlayer(game);
    if (!cur || userId !== cur) return false;
    if (!text || text.startsWith("/")) return false;

    const word = text.trim().toLowerCase().split(/\s+/)[0];
    const last = game.last_word;
    const req  = last ? last.slice(-1).toLowerCase() : "";

    // Validate
    if (word.length < 4) {
      const msg = await sock.sendMessage(chatId, { text: `❌ *"${word}"* is too short. Words must be *4+ letters*. Try again!` }, { quoted: m });
      gad(sock, chatId, msg?.key); return true;
    }
    if (!/^[a-z]+$/.test(word)) {
      const msg = await sock.sendMessage(chatId, { text: `❌ Words must contain *letters only*. Try again!` }, { quoted: m });
      gad(sock, chatId, msg?.key); return true;
    }
    if (req && word[0] !== req) {
      const msg = await sock.sendMessage(chatId, { text: `❌ Must start with *${req.toUpperCase()}* (last letter of _${last}_). Try again!` }, { quoted: m });
      gad(sock, chatId, msg?.key); return true;
    }
    if (game.used_words.has(word)) {
      const msg = await sock.sendMessage(chatId, { text: `♻️ *"${word}"* was already used! Pick another.` }, { quoted: m });
      gad(sock, chatId, msg?.key); return true;
    }
    // Two-stage validation: local set (instant) → Free Dictionary API (online fallback)
    const wordOk = isValid(word) ? true : await isValidAsync(word);
    if (!wordOk) {
      const msg = await sock.sendMessage(chatId, { text: `❌ *"${word}"* is not a recognised English word. Try a different word!` }, { quoted: m });
      gad(sock, chatId, msg?.key); return true;
    }

    // ✅ Valid — auto-delete player's word message
    gad(sock, chatId, m?.key, "user");

    if (game.turn_timer) clearTimeout(game.turn_timer);
    game.last_word = word;
    game.used_words.add(word);
    const info = game.players[userId];
    info.words++;
    info.score += word.length;
    advanceTurn(game);
    const alive = game.order.filter(u => (game.players[u]?.lives || 0) > 0);

    if (alive.length <= 1 && Object.keys(game.players).length > 1) {
      const msg = await sock.sendMessage(chatId, { text: `✅ *${info.name}* played \`${word}\` — last player standing!` }, { quoted: m });
      gad(sock, chatId, msg?.key);
      await endGame(sock, chatId, game, "last");
      return true;
    }

    const next = word.slice(-1).toUpperCase();
    const msg  = await sock.sendMessage(chatId, {
      text: `✅ *${info.name}* → \`${word}\`  |  Next starts with *${next}*`
    }, { quoted: m });
    gad(sock, chatId, msg?.key);
    await announceTurn(sock, chatId, game);
    return true;
  },

  run: async ({ sock, m, command, args, reply, prefix, chatId, userId, isOwner, isDev, isAdmin, pushName }) => {
    const chat  = chatId || m?.chat;
    const name  = pushName || userId?.split("@")[0] || "Player";
    const isGrp = (chat || "").endsWith("@g.us");
    const st    = getState();

    // /wordchain or /wc
    if (command === "wordchain" || command === "wc") {
      if (!isGrp) return reply("🎮 Word Chain is a group game!");
      const ex = ACTIVE_GAMES[chat];
      if (ex) {
        if (!ex.started && !ex.players[userId]) {
          ex.players[userId] = { name, lives: MAX_LIVES, words: 0, score: 0 };
          return reply(`✅ *${name}* joined! (${Object.keys(ex.players).length} players)`);
        }
        if (ex.started) return reply("⚠️ A Word Chain game is running. Use /wcjoin when the next lobby opens.");
        return reply("⚠️ You're already in the lobby.");
      }
      const to = getTimeout(chat);
      const game = {
        type: GAME_TYPE, started: false, mod: userId, timeout: to,
        players: { [userId]: { name, lives: MAX_LIVES, words: 0, score: 0 } },
        order: [], turn_index: 0, last_word: "", used_words: new Set(),
        turn_started_at: 0, turn_timer: null,
      };
      ACTIVE_GAMES[chat] = game;
      try {
        const msg = await sock.sendMessage(chat, {
          text: [
            `🔤 *Word Chain Lobby Open!*`,
            ``,
            `*Rules:*`,
            `• Each word starts with the last letter of the previous`,
            `• Must be a *real English word* (4+ letters)`,
            `• No repeats — ${livesBar(MAX_LIVES)} lives each`,
            ``,
            `*Reply JOIN to enter the lobby*`,
            `*Reply START to begin immediately*`,
            ``,
            `_Auto-starts in ${LOBBY_WAIT/1000}s_`,
          ].join("\n")
        }, { quoted: m });
        gad(sock, chat, msg?.key);
      } catch {}
      setTimeout(() => {
        if (ACTIVE_GAMES[chat] === game && !game.started) launchGame(sock, chat, game);
      }, LOBBY_WAIT);
      return;
    }

    // /wcjoin
    if (command === "wcjoin") {
      const game = ACTIVE_GAMES[chat];
      if (!game) return reply("❌ No Word Chain lobby open. Start one with /wordchain.");
      if (game.started) return reply("⚠️ Game already started!");
      if (game.players[userId]) return reply("✋ You're already in!");
      game.players[userId] = { name, lives: MAX_LIVES, words: 0, score: 0 };
      return reply(`✅ *${name}* joined! (${Object.keys(game.players).length} players)`);
    }

    // /wcscore
    if (command === "wcscore") {
      const game = ACTIVE_GAMES[chat];
      if (!game) return reply("❌ No active Word Chain game.");
      const sorted = Object.entries(game.players).sort(([,a],[,b]) => b.words - a.words);
      const lines  = ["📊 *Word Chain Scores*\n"];
      sorted.forEach(([, p], i) => {
        lines.push(`${i+1}. ${p.name}${p.lives <= 0 ? " 💀" : ""} — ${p.words} words | ${livesBar(p.lives)}`);
      });
      if (game.last_word) lines.push(`\nLast word: \`${game.last_word}\` → next starts with *${game.last_word.slice(-1).toUpperCase()}*`);
      return reply(lines.join("\n"));
    }

    // /endwc
    if (command === "endwc") {
      const game = ACTIVE_GAMES[chat];
      if (!game) return reply("❌ No active Word Chain game.");
      if (!isOwner && !isDev && !isAdmin && userId !== game.mod) return reply("🚫 Only admins can end the game.");
      try { await sock.sendMessage(chat, { text: "🛑 Word Chain ended by admin." }, { quoted: m }); } catch {}
      await endGame(sock, chat, game, "admin_end");
      return;
    }

    // /wctime <seconds>
    if (command === "wctime") {
      if (!isOwner && !isDev && !isAdmin) return reply("🚫 Admins only.");
      const secs = Math.max(15, Math.min(300, parseInt(args[0]) || DEFAULT_TO));
      if (!st.game_settings) st.game_settings = {};
      if (!st.game_settings[chat]) st.game_settings[chat] = {};
      st.game_settings[chat].wc_timeout = secs;
      saveState();
      return reply(`⏱ Word Chain timer set to *${secs}s*.`);
    }
  },
};
