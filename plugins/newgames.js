// plugins/newgames.js — Miss Chatra: Scrabble, Trivia, NumGuess, Blackjack, /stopgame
// Synced with TG p54_newgames.py
"use strict";

const { getState, saveState, GAME_AUTODELETE_BOT_DELAY, GAME_AUTODELETE_USER_DELAY } = require("../library/state");
const { isValid, isValidAsync, scrabbleLetters, WORD_SET } = require("../library/wordlist");

// ── Per-chat session store ─────────────────────────────────────────────────────
const SESSIONS = {};  // chatId → { type, ...data }
function sess(cid)          { return SESSIONS[cid] || null; }
function setSess(cid, obj)  { SESSIONS[cid] = obj; }
function delSess(cid)       { delete SESSIONS[cid]; }

// ── Game auto-delete helper ────────────────────────────────────────────────────
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

// Helper: send + schedule auto-delete
async function gr(sock, chatId, m, text, opts) {
  const sent = await sock.sendMessage(chatId, { text }, m ? { quoted: m, ...(opts || {}) } : (opts || {}));
  gad(sock, chatId, sent?.key);
  return sent;
}

// ── TRIVIA bank ───────────────────────────────────────────────────────────────
const TRIVIA = [
  { q: "What is the capital of France?",            a: "paris",          hint: "City of Love 🗼" },
  { q: "How many sides does a hexagon have?",        a: "6",              hint: "Think beehive" },
  { q: "What planet is closest to the Sun?",         a: "mercury",        hint: "Roman messenger god" },
  { q: "Who painted the Mona Lisa?",                 a: "da vinci",       hint: "Also designed flying machines" },
  { q: "What is H2O commonly known as?",             a: "water",          hint: "You drink it daily" },
  { q: "In what year did World War II end?",         a: "1945",           hint: "Mid-1940s" },
  { q: "What is the largest ocean on Earth?",        a: "pacific",        hint: "It's truly enormous" },
  { q: "How many bones are in the human body?",      a: "206",            hint: "More than 200" },
  { q: "What is the chemical symbol for gold?",      a: "au",             hint: "From Latin 'Aurum'" },
  { q: "Who wrote Romeo and Juliet?",                a: "shakespeare",    hint: "English playwright, 1500s" },
  { q: "What is the fastest land animal?",           a: "cheetah",        hint: "African big cat" },
  { q: "Which planet has the most moons?",           a: "saturn",         hint: "Has rings too" },
  { q: "What is the currency of Japan?",             a: "yen",            hint: "¥ symbol" },
  { q: "How many players in a soccer team?",         a: "11",             hint: "Standard football" },
  { q: "What is the square root of 144?",            a: "12",             hint: "12 × 12" },
  { q: "What is the longest river in the world?",    a: "nile",           hint: "Flows through Egypt" },
  { q: "What is the hardest natural substance?",     a: "diamond",        hint: "Carbon under pressure" },
  { q: "Which continent is Egypt in?",               a: "africa",         hint: "Northern part" },
  { q: "What is the capital of Nigeria?",            a: "abuja",          hint: "Not Lagos" },
  { q: "How many continents are there?",             a: "7",              hint: "Seven" },
  { q: "Who was the first man on the moon?",         a: "neil armstrong", hint: "1969, Apollo 11" },
  { q: "What is the most spoken language globally?", a: "mandarin",       hint: "Spoken in China" },
  { q: "What is the capital of Australia?",          a: "canberra",       hint: "Not Sydney" },
  { q: "Which gas makes up most of Earth's air?",   a: "nitrogen",       hint: "About 78%" },
  { q: "What year did the Titanic sink?",            a: "1912",           hint: "Early 20th century" },
  { q: "What is the boiling point of water (°C)?",  a: "100",            hint: "At sea level" },
  { q: "How many strings does a standard guitar have?", a: "6",          hint: "Standard acoustic" },
  { q: "What country has the most natural lakes?",   a: "canada",         hint: "Maple leaf" },
  { q: "What gas do plants absorb from air?",        a: "carbon dioxide", hint: "CO₂" },
  { q: "Which country invented football (soccer)?",  a: "england",        hint: "1863" },
];

function randomTrivia() { return TRIVIA[Math.floor(Math.random() * TRIVIA.length)]; }

// ── SCRABBLE helpers ──────────────────────────────────────────────────────────
const SCRABBLE_SCORES = {a:1,b:3,c:3,d:2,e:1,f:4,g:2,h:4,i:1,j:8,k:5,l:1,m:3,n:1,o:1,p:3,q:10,r:1,s:1,t:1,u:1,v:4,w:4,x:8,y:4,z:10};
const FREQ = "EEEEEEEEEEEEAAAAAAAAAIIIIIIIIIOOOOOOOONNNNNNRRRRRRTTTTTTLLLLSSSSUUUUDDDDGGGBBCCMMPPFFHHVVWWYYKKJXQZ";

function scrabbleRandLetters(n = 7) {
  if (typeof scrabbleLetters === "function") return scrabbleLetters(n);
  return Array.from({ length: n }, () => FREQ[Math.floor(Math.random() * FREQ.length)].toLowerCase());
}

function scoreWord(word, letters) {
  const avail = letters.map(l => l.toLowerCase());
  let score = 0;
  for (const ch of word.toLowerCase()) {
    const idx = avail.indexOf(ch);
    if (idx === -1) return null;
    avail.splice(idx, 1);
    score += SCRABBLE_SCORES[ch] || 0;
  }
  return score;
}

function isValidWord(word) {
  if (typeof isValid === "function") return isValid(word);
  return word.length >= 3 && /^[a-z]+$/.test(word);
}

// ── BLACKJACK helpers ─────────────────────────────────────────────────────────
const SUITS = ["♠","♥","♦","♣"];
const RANKS = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

function cardVal(r) { return r === "A" ? 11 : isNaN(+r) ? 10 : +r; }
function newDeck() {
  const d = [];
  for (const s of SUITS) for (const r of RANKS) d.push({ r, s });
  for (let i = d.length - 1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [d[i],d[j]]=[d[j],d[i]]; }
  return d;
}
function handVal(cards) {
  let v = cards.reduce((s, c) => s + cardVal(c.r), 0);
  let a = cards.filter(c => c.r === "A").length;
  while (v > 21 && a-- > 0) v -= 10;
  return v;
}
function showHand(cards, hideSecond = false) {
  return cards.map((c, i) => (hideSecond && i === 1) ? "🂠" : `${c.r}${c.s}`).join(" ");
}

// ── Economy helper (reads WA db if available) ─────────────────────────────────
function getBal(chatId, userId) {
  try {
    const { db } = require("../library/db");
    db().prepare("INSERT OR IGNORE INTO economy(chat_id,user_id) VALUES(?,?)").run(chatId, userId);
    return db().prepare("SELECT balance FROM economy WHERE chat_id=? AND user_id=?").get(chatId, userId)?.balance || 0;
  } catch {
    const st = getState();
    st._bj_bal = st._bj_bal || {};
    const key = `${chatId}:${userId}`;
    st._bj_bal[key] = st._bj_bal[key] ?? 1000;
    return st._bj_bal[key];
  }
}
function addBal(chatId, userId, amount) {
  try {
    const { db } = require("../library/db");
    db().prepare("UPDATE economy SET balance=balance+? WHERE chat_id=? AND user_id=?").run(amount, chatId, userId);
  } catch {
    const st = getState();
    st._bj_bal = st._bj_bal || {};
    const key = `${chatId}:${userId}`;
    st._bj_bal[key] = (st._bj_bal[key] ?? 1000) + amount;
    saveState();
  }
}

module.exports = {
  name: "NewGames",
  category: "games",
  command: ["trivia","numguess","scrabble","blackjack","bj","hit","stand","stopgame"],
  SESSIONS,

  // ── Message interceptor (called from message.js) ──────────────────────────
  handleGameMessage: async (sock, m, chatId, userId, text) => {
    const s = sess(chatId);
    if (!s) return false;
    const body = (text || "").toLowerCase().trim();
    if (!body || body.startsWith("/")) return false;

    gad(sock, chatId, m?.key, "user");

    // ── TRIVIA ────────────────────────────────────────────────────────────────
    if (s.type === "trivia") {
      const ans = s.answer.toLowerCase();
      if (body === ans || ans.includes(body) || body.includes(ans)) {
        let name = "Player";
        try { name = (m?.pushName || userId.split("@")[0] || "Player"); } catch {}
        delSess(chatId);
        await gr(sock, chatId, m, `🎉 *Correct!* Well done, *${name}*!\n\nAnswer: *${s.answer}*\n\n_Next question: /trivia_`);
      } else {
        await gr(sock, chatId, m, "❌ Not quite! Keep trying…");
      }
      return true;
    }

    // ── NUMGUESS ──────────────────────────────────────────────────────────────
    if (s.type === "numguess" && userId === s.user) {
      const guess = parseInt(body);
      if (isNaN(guess)) return true;
      s.guesses++;
      if (guess === s.answer) {
        delSess(chatId);
        await gr(sock, chatId, m, `🎉 *Correct!* The number was *${s.answer}*!\n\nGot it in *${s.guesses}* guess${s.guesses > 1 ? "es" : ""}! 🏆`);
      } else if (s.guesses >= s.max) {
        delSess(chatId);
        await gr(sock, chatId, m, `💀 Out of guesses! The number was *${s.answer}*.`);
      } else {
        const left = s.max - s.guesses;
        const hint = guess < s.answer ? "📈 Too low!" : "📉 Too high!";
        await gr(sock, chatId, m, `${hint} Try again. (${left} guess${left > 1 ? "es" : ""} left)`);
      }
      return true;
    }

    // ── SCRABBLE ──────────────────────────────────────────────────────────────
    if (s.type === "scrabble" && userId === s.user) {
      if (!body.match(/^[a-z]+$/) || body.length < 3) return true;
      const pts = scoreWord(body, s.letters);
      if (pts === null) {
        await gr(sock, chatId, m, `❌ *"${body}"* uses letters you don't have!\nYour tiles: \`${s.letters.join(" ")}\``);
      } else if (!(isValid(body) || await isValidAsync(body))) {
        await gr(sock, chatId, m, `❌ *"${body}"* is not a valid English word. Try again!`);
      } else if (s.used.has(body)) {
        await gr(sock, chatId, m, `♻️ *"${body}"* already played! Try another.`);
      } else {
        s.used.add(body);
        s.score += pts;
        s.plays++;
        delSess(chatId);
        await gr(sock, chatId, m, `✅ *"${body.toUpperCase()}"* — *+${pts} points!*\n\nScore: *${s.score} pts* in ${s.plays} word${s.plays > 1 ? "s" : ""}.\n\n_Play again: /scrabble_`);
      }
      return true;
    }

    return false;
  },

  run: async ({ sock, m, command, args, reply, prefix, chatId, userId, isOwner, isDev, isAdmin }) => {
    const chat = chatId || m?.chat;

    // ── /trivia ───────────────────────────────────────────────────────────────
    if (command === "trivia") {
      if (sess(chat)) return reply("⚠️ A game is already active! Use /stopgame to end it.");
      const { q, a, hint } = randomTrivia();
      const expire = setTimeout(async () => {
        const cur = sess(chat);
        if (cur && cur.type === "trivia") {
          delSess(chat);
          try { await gr(sock, chat, null, `⏰ Time's up! The answer was: *${a}*`); } catch {}
        }
      }, 45000);
      setSess(chat, { type: "trivia", answer: a, question: q, expire });
      await gr(sock, chat, m,
        `🧠 *TRIVIA TIME!*\n\n${q}\n\n💡 Hint: _${hint}_\n\n_45 seconds — just type your answer!_`);
      return;
    }

    // ── /numguess [max] ───────────────────────────────────────────────────────
    if (command === "numguess") {
      if (sess(chat)) return reply("⚠️ A game is already active! Use /stopgame to end it.");
      const maxN   = Math.min(parseInt(args[0] || "100") || 100, 1000);
      const answer = Math.floor(Math.random() * maxN) + 1;
      const maxG   = maxN <= 10 ? 5 : maxN <= 50 ? 7 : 10;
      setSess(chat, { type: "numguess", user: userId, answer, max: maxG, guesses: 0 });
      await gr(sock, chat, m,
        `🎯 *Number Guess!*\n\nI'm thinking of a number between *1 and ${maxN}*.\nYou have *${maxG} guesses*.\n\n_Just type your guess!_`);
      return;
    }

    // ── /scrabble ─────────────────────────────────────────────────────────────
    if (command === "scrabble") {
      if (sess(chat)) return reply("⚠️ A game is already active! Use /stopgame to end it.");
      const letters = scrabbleRandLetters(7);
      const expire  = setTimeout(async () => {
        const cur = sess(chat);
        if (cur && cur.type === "scrabble") {
          delSess(chat);
          try { await gr(sock, chat, null, `⏰ Time's up!\n\n_Play again: /scrabble_`); } catch {}
        }
      }, 90000);
      setSess(chat, { type: "scrabble", user: userId, letters, score: 0, plays: 0, used: new Set(), expire });
      await gr(sock, chat, m,
        `🔤 *SCRABBLE ROUND!*\n\nYour 7 tiles: *${letters.join(" ")}*\n\nForm the *longest valid English word* using these letters!\n\n• Min 3 letters\n• Must be a real word\n• Score = sum of letter values\n\n_Type your word! 90 seconds._`);
      return;
    }

    // ── /blackjack [bet] ─────────────────────────────────────────────────────
    if (command === "blackjack" || command === "bj") {
      const bet = Math.max(1, parseInt(args[0] || "50") || 50);
      const bal = getBal(chat, userId);
      if (bal < bet) {
        return reply(`❌ Insufficient coins. Your balance: *${bal}*. Use /daily to get more.`);
      }
      const deck   = newDeck();
      const player = [deck.pop(), deck.pop()];
      const dealer = [deck.pop(), deck.pop()];
      const pv     = handVal(player);

      if (pv === 21) {
        const won = Math.floor(bet * 1.5);
        addBal(chat, userId, won);
        await gr(sock, chat, m,
          `🃏 *BLACKJACK!* You win *+${won} coins*! 🎉\n\nYour hand: ${showHand(player)} = 21\nDealer: ${showHand(dealer)} = ${handVal(dealer)}`);
        return;
      }

      const ex = sess(chat);
      if (ex && ex.type === "blackjack") return reply("⚠️ A Blackjack game is running! Use /hit or /stand.");
      setSess(chat, { type: "blackjack", user: userId, bet, deck, player, dealer });
      await gr(sock, chat, m,
        `♠️ *BLACKJACK*\n\nYour hand: ${showHand(player)} = *${pv}*\nDealer shows: ${showHand(dealer, true)}\n\nBet: *${bet} coins*\n\n_/hit to draw | /stand to hold_`);
      return;
    }

    // ── /hit ─────────────────────────────────────────────────────────────────
    if (command === "hit") {
      const s = sess(chat);
      if (!s || s.type !== "blackjack") return reply("❌ No active Blackjack. Start with /blackjack <bet>.");
      if (s.user !== userId) return reply("⚠️ Not your game!");
      s.player.push(s.deck.pop());
      const pv = handVal(s.player);
      if (pv > 21) {
        addBal(chat, userId, -s.bet);
        delSess(chat);
        await gr(sock, chat, m,
          `💥 *Bust!* Your hand: ${showHand(s.player)} = ${pv}\n\nYou lose *${s.bet} coins* 😢\nDealer had: ${showHand(s.dealer)}`);
      } else {
        await gr(sock, chat, m,
          `🃏 *Hit!* Your hand: ${showHand(s.player)} = *${pv}*\n\n_/hit or /stand_`);
      }
      return;
    }

    // ── /stand ────────────────────────────────────────────────────────────────
    if (command === "stand") {
      const s = sess(chat);
      if (!s || s.type !== "blackjack") return reply("❌ No active Blackjack. Start with /blackjack <bet>.");
      if (s.user !== userId) return reply("⚠️ Not your game!");
      while (handVal(s.dealer) < 17) s.dealer.push(s.deck.pop());
      const pv = handVal(s.player), dv = handVal(s.dealer);
      let delta, result;
      if (dv > 21 || pv > dv)       { delta =  s.bet; result = `🎉 *You win +${s.bet} coins!*`; }
      else if (pv === dv)            { delta = 0;     result = `🤝 *Push!* Bet returned.`; }
      else                           { delta = -s.bet; result = `😢 *Dealer wins. -${s.bet} coins.*`; }
      if (delta !== 0) addBal(chat, userId, delta);
      delSess(chat);
      await gr(sock, chat, m,
        `🎴 *Blackjack Result*\n\nYour hand: ${showHand(s.player)} = ${pv}\nDealer: ${showHand(s.dealer)} = ${dv}\n\n${result}`);
      return;
    }

    // ── /stopgame ─────────────────────────────────────────────────────────────
    if (command === "stopgame") {
      if (!isOwner && !isDev && !isAdmin) return reply("🚫 Only admins can stop games.");
      const stopped = [];

      // Stop newgames session
      const cur = sess(chat);
      if (cur) {
        if (cur.expire) clearTimeout(cur.expire);
        delSess(chat);
        stopped.push(cur.type || "game");
      }

      // Stop wordchain if running
      try {
        const wc = require("./wordchain");
        const wcGame = wc.ACTIVE_GAMES?.[chat];
        if (wcGame) {
          if (wcGame.turn_timer) clearTimeout(wcGame.turn_timer);
          delete wc.ACTIVE_GAMES[chat];
          stopped.push("wordchain");
        }
      } catch {}

      // Stop truth/dare/riddle if running
      try {
        const g = require("./games");
        const gGame = g.ACTIVE_GAMES?.[chat];
        if (gGame) {
          if (gGame.timeout_timer) clearTimeout(gGame.timeout_timer);
          delete g.ACTIVE_GAMES[chat];
          stopped.push(gGame.type || "game");
        }
      } catch {}

      if (stopped.length) {
        return reply(`🛑 Stopped: *${stopped.join(", ")}*.`);
      } else {
        return reply("❌ No active game to stop.");
      }
    }
  },
};
