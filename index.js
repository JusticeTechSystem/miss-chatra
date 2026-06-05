// index.js — Miss Chatra
// Mirroring JusticeTech Autosave Bot structure exactly

console.clear();
const jts = require("./library/justicetechsystem");
const config = () => require("./settings/config");
process.on("uncaughtException", (err) => {
  console.error(err);
  // pbkdf2 iterations=0 → Baileys session files corrupted (common after hot update).
  // Clear the JSON session files and exit so pm2/pterodactyl restarts cleanly.
  const isPbkdf2Crash =
    err?.code === "ERR_OUT_OF_RANGE" ||
    (err?.message || "").includes("iterations") ||
    (err?.stack  || "").includes("pbkdf2");
  if (isPbkdf2Crash) {
    try {
      const _sessionDir = require("path").join(__dirname, "sessions");
      const _fs = require("fs");
      if (_fs.existsSync(_sessionDir)) {
        for (const _f of _fs.readdirSync(_sessionDir)) {
          if (_f.endsWith(".json")) {
            try { _fs.unlinkSync(require("path").join(_sessionDir, _f)); } catch {}
          }
        }
      }
      console.log("⚠️  Session files cleared due to pbkdf2 corruption. Restarting fresh — please scan QR code.");
    } catch {}
    process.exit(0);
  }
});

let makeWASocket, Browsers, useMultiFileAuthState, DisconnectReason,
    fetchLatestBaileysVersion, jidDecode, downloadContentFromMessage;

const loadBaileys = async () => {
  const baileys              = await import("@whiskeysockets/baileys");
  makeWASocket               = baileys.default;
  Browsers                   = baileys.Browsers;
  useMultiFileAuthState      = baileys.useMultiFileAuthState;
  DisconnectReason           = baileys.DisconnectReason;
  fetchLatestBaileysVersion  = baileys.fetchLatestBaileysVersion;
  jidDecode                  = baileys.jidDecode;
  downloadContentFromMessage = baileys.downloadContentFromMessage;
};

const pino     = require("pino");
const fs       = require("fs");
const path     = require("path");
const chalk    = require("chalk");

// ═══════════════════════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════════════════════
// Miss Chatra RAINBOW LOGGER
// ═══════════════════════════════════════════════════════════════════════════

// ── Suppress ALL Baileys/pino internal console noise globally ─────────────────
const _origWrite = process.stdout.write.bind(process.stdout);
const _origErrWrite = process.stderr.write.bind(process.stderr);
const _NOISE_PATTERNS = [
  // Baileys signal/session internals
  /Closing session/i, /SessionEntry/i, /chainKey/i, /ephemeralKeyPair/i,
  /lastRemoteEphemeral/i, /registrationId/i, /currentRatchet/i,
  /_chains/i, /messageKeys/i, /\[Object\].*chain/i,
  // Buffer / hex dumps
  /pubKey.*<Buffer/i, /privKey.*<Buffer/i, /Buffer [0-9a-f]{2}/i,
  /<Buffer /i, /BezQG/i,
  // Our own old debug patterns we want gone
  /\[RAW\]/i, /\[UPSERT\]/i, /\[DM_DL\]/i, /\[JTS-SIG\]/i,
  // Pino / Baileys level logs
  /^\d+$/, /^{"level"/,
  // Baileys misc
  /trying to decrypt/i, /decryption failed/i, /skipping/i,
  /recv counter/i, /unknown message/i,
];
function _isBaileyNoise(s) {
  if (typeof s !== "string") return false;
  return _NOISE_PATTERNS.some(p => p.test(s));
}
process.stdout.write = function(chunk, ...args) {
  if (_isBaileyNoise(typeof chunk === "string" ? chunk : chunk?.toString?.())) return true;
  return _origWrite(chunk, ...args);
};

// ── Rainbow colour palette (10 colours matching reference) ───────────────────
const RB = [
  "#FF0000","#FF4500","#FF8C00","#FFD700",
  "#ADFF2F","#00FF7F","#00FFFF","#1E90FF",
  "#8A2BE2","#FF1493",
];

// Full-width rainbow bar — left half + title + right half, ending with \\
function rainbowBar(title) {
  const W       = 55;  // total bar chars (excl title)
  const half    = Math.floor(W / 2);
  const CHAR    = "━";

  function makeGrad(n, reverse) {
    const step = Math.max(1, Math.ceil(n / RB.length));
    return Array.from({ length: n }, (_, i) => {
      const ci = reverse ? RB.length - 1 - Math.floor(i / step) : Math.floor(i / step);
      return chalk.hex(RB[Math.min(ci, RB.length - 1)])(CHAR);
    }).join("");
  }

  const left  = makeGrad(half, false);
  const right = makeGrad(half, true);

  if (!title) {
    // bottom bar — full gradient + space + \\
    return left + right + " " + chalk.bold.white("\\\\");
  }
  // top bar — left ─── title ─── right
  const mid = " " + chalk.bold.white("『") + " " + chalk.bold.hex("#00FFFF")("Miss Chatra") + " " + chalk.bold.white("』") + " ";
  return left + mid + right + chalk.bold.white(" —");
}

// Field line: » Label:      Value
function cxField(label, value, valColor) {
  const PAD   = 14;
  const padded = label.padEnd(PAD);
  const prefix = chalk.hex("#FF4500")("» ") + chalk.bold.hex("#FF69B4")(padded) + chalk.white(": ");
  return prefix + valColor(value);
}

function cxLog({ msgType, msgTime, speed, speedLbl, sender, name, chatId, message }) {
  const topBar = rainbowBar("title");
  const botBar = rainbowBar(null);

  const lines = [
    "",
    topBar,
    cxField("Message Type", msgType  || "unknown",  chalk.hex("#00FFFF")),
    cxField("Message Time", msgTime  || "-",         chalk.hex("#00FF7F")),
    cxField("Speed",
      chalk.hex("#FFD700")(`${speed}s`) + " " + chalk.bold.white(`[ ${speedLbl || "FAST"} ]`),
      s => s),
    cxField("Sender",       sender   || "-",         chalk.hex("#00FFFF")),
    cxField("Name",         name     || "-",         chalk.hex("#FF69B4")),
    cxField("Chat ID",      chatId   || "-",         chalk.hex("#90EE90")),
    cxField("Message",      String(message || "").slice(0, 100), chalk.white),
    botBar,
    "",
  ];
  _origWrite(lines.join("\n") + "\n");
}


function cxBoot(msg) {
  _origWrite(chalk.hex("#1E90FF")("◈ ") + chalk.bold.cyan(msg) + "\n");
}

function speedLabel(ms) {
  if (ms < 500)  return "FAST";
  if (ms < 1500) return "MODERATE";
  return "SLOW";
}

function fmtTime(ts) {
  try {
    const d    = ts ? new Date(ts * 1000) : new Date();
    const day  = d.toLocaleDateString("en-GB", { weekday: "long" });
    const time = d.toTimeString().slice(0, 8);
    // Get timezone abbreviation
    const tz   = Intl.DateTimeFormat("en", { timeZoneName: "short" }).formatToParts(d).find(p => p.type === "timeZoneName")?.value || "UTC";
    return `${day}, ${time} ${tz}`;
  } catch { return new Date().toTimeString().slice(0, 8); }
}


const readline = require("readline");
const { Boom } = require("@hapi/boom");
const { smsg } = require("./library/serialize");
const { konek } = require("./library/connection/connection");
const messageHandler = require("./message");


try { require("./plugins/system"); } catch {}

let welcomePlugin;
try { welcomePlugin = require("./plugins/welcome"); } catch {}

const ROOT_DIR    = __dirname;
const SESSION_DIR = path.join(ROOT_DIR, "sessions");
const DB_DIR      = path.join(ROOT_DIR, "database");
if (!fs.existsSync(SESSION_DIR)) fs.mkdirSync(SESSION_DIR, { recursive: true });
if (!fs.existsSync(DB_DIR))      fs.mkdirSync(DB_DIR,      { recursive: true });

// Identical to autosave bot
const question = (text) => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(chalk.yellow(text), (answer) => { resolve(answer); rl.close(); });
  });
};

const clientstart = async () => {
  global.__BOT_READY = false; // set true after connection + initial sync settles
  await loadBaileys();

  // ── Same browser list as autosave bot ─────────────────────────────────────
  const browserOptions = [
    Browsers.macOS("Safari"),
    Browsers.macOS("Chrome"),
    Browsers.windows("Firefox"),
    Browsers.ubuntu("Chrome"),
    Browsers.baileys("Baileys"),
    Browsers.macOS("Edge"),
    Browsers.windows("Edge"),
  ];
  const randomBrowser = browserOptions[Math.floor(Math.random() * browserOptions.length)];

  // ── Store — same as autosave bot ──────────────────────────────────────────
  // Make store globally accessible for @lid resolution in plugins
  global.__botStore = global.__botStore || null;
  const store = {
    messages:      new Map(),
    contacts:      new Map(),
    groupMetadata: new Map(),
    loadMessage:   async (jid, id) => store.messages.get(`${jid}:${id}`) || null,
    bind: (ev) => {
      ev.on("messages.upsert", ({ messages }) => {
        for (const msg of messages || []) {
          if (msg.key?.remoteJid && msg.key?.id) {
            store.messages.set(`${msg.key.remoteJid}:${msg.key.id}`, msg);
            // Track lid -> real JID mapping from message participants
            const participant = msg.key?.participant;
            const sender      = msg.participant || msg.pushName;
            if (participant && participant.includes("@lid")) {
              // Store the lid with pushName for lookup
            }
          }
        }
      });
      // Track contacts — build @lid <-> phone mapping
      ev.on("contacts.upsert", (contacts) => {
        global.__lidMap = global.__lidMap || {};
        global.__knownContacts = global.__knownContacts || new Set();
        for (const c of (contacts || [])) {
          if (c.id) store.contacts.set(c.id, c);
          // Track real @s.whatsapp.net JIDs for status broadcasting
          if (c.id?.endsWith("@s.whatsapp.net")) global.__knownContacts.add(c.id);
          // Store @lid entry
          if (c.id?.endsWith("@lid")) {
            global.__lidMap[c.id] = c;
          }
          // If contact has BOTH id (@s.whatsapp.net) AND lid field
          if (c.lid && c.id?.endsWith("@s.whatsapp.net")) {
            global.__lidMap[c.lid] = { ...c, realJid: c.id };
          }
          // If id is @lid but there's a phone/jid field
          if (c.id?.endsWith("@lid") && (c.phone || c.jid)) {
            global.__lidMap[c.id] = { ...c, realJid: c.phone || c.jid };
          }
        }
      });
      ev.on("contacts.update", (updates) => {
        global.__lidMap = global.__lidMap || {};
        for (const u of (updates || [])) {
          if (u.id) {
            const existing = store.contacts.get(u.id) || {};
            const merged = { ...existing, ...u };
            store.contacts.set(u.id, merged);
            if (u.id?.endsWith("@lid")) {
              global.__lidMap[u.id] = { ...(global.__lidMap[u.id]||{}), ...merged };
            }
            if (u.lid && u.id?.endsWith("@s.whatsapp.net")) {
              global.__lidMap[u.lid] = { ...merged, realJid: u.id };
            }
          }
        }
        // ── Profile change monitor (autoclean plugin) ─────────────────────────
        try {
          const acPlugin = require("./plugins/autoclean");
          if (acPlugin.onContactUpdate && global.__activeGroups) {
            acPlugin.onContactUpdate(sock, updates || [], global.__activeGroups);
          }
        } catch {}
      });
      // Also capture @lid mappings from group participant updates
      ev.on("groups.update", (updates) => {
        global.__lidMap = global.__lidMap || {};
        for (const u of (updates || [])) {
          for (const p of (u.participants || [])) {
            if (p.lid && p.id?.endsWith("@s.whatsapp.net")) {
              global.__lidMap[p.lid] = { id: p.id, lid: p.lid, realJid: p.id };
            }
          }
        }
      });
    },
  };

  // ── useMultiFileAuthState with absolute path ──────────────────────────────
  // Guard: if session files are corrupted (e.g. pbkdf2 iterations=0), clear them
  // and start fresh rather than crashing the bot on every restart.
  let state, saveCreds;
  try {
    const authResult = await useMultiFileAuthState(SESSION_DIR);
    state      = authResult.state;
    saveCreds  = authResult.saveCreds;
  } catch (authErr) {
    console.error(chalk.red("⚠️  Auth state corrupted — clearing session files and restarting auth:"), authErr.message);
    // Remove only the corrupted session JSON files, keep the directory
    try {
      const sessionFiles = fs.readdirSync(SESSION_DIR).filter(f => f.endsWith(".json"));
      for (const f of sessionFiles) {
        try { fs.unlinkSync(path.join(SESSION_DIR, f)); } catch {}
      }
    } catch {}
    // Retry with fresh state
    const authResult2  = await useMultiFileAuthState(SESSION_DIR);
    state      = authResult2.state;
    saveCreds  = authResult2.saveCreds;
    console.log(chalk.yellow("✓ Fresh auth state created — please scan QR code to reconnect."));
  }

  // ── Cached Baileys version — skip network fetch on every restart ──────────
  // fetchLatestBaileysVersion() hits the internet and adds 1-3s to every
  // cold start. We cache the result locally and only refresh once per day.
  let version;
  const _verPath = path.join(__dirname, "database", ".baileys_ver.json");
  try {
    const _cached = JSON.parse(require("fs").readFileSync(_verPath, "utf8"));
    const _age    = Date.now() - (_cached.ts || 0);
    if (_cached.version && _age < 86400000) {
      version = _cached.version;
      cxBoot("Baileys cached version: " + version.join("."));
    }
  } catch {}
  if (!version) {
    try {
      const _fetched = await fetchLatestBaileysVersion();
      version = _fetched.version;
      try { require("fs").writeFileSync(_verPath, JSON.stringify({ version, ts: Date.now() })); } catch {}
      cxBoot("Baileys fetched version: " + version.join("."));
    } catch {
      version = [2, 3000, 1023408103]; // known-good fallback version
      cxBoot("Baileys fallback version");
    }
  }

  // ── makeWASocket — optimized for fast startup and immediate command response
  const sock = makeWASocket({
    logger:            pino({ level: "silent" }),
    printQRInTerminal: !config().status.terminal,
    auth:              state,
    version:           version,
    browser:           randomBrowser,
    syncFullHistory:   false,         // don't wait for full history sync
    markOnlineOnConnect: true,        // mark bot online immediately on connect
    generateHighQualityLinkPreview: false, // skip thumbnail generation (speeds up sends)
    getMessage: async () => ({ conversation: "" }), // fast no-op message getter
    shouldIgnoreJid: jid => jid?.endsWith("@broadcast"), // ignore broadcast lists
  });

  sock.public = config().status.public;

  // ── Patch sendMessage to track bot-sent IDs (prevents self-DM loops) ─────
  if (!global.__BOT_SENT_IDS) global.__BOT_SENT_IDS = new Set();
  if (!global.__BOT_SENT_TS) global.__BOT_SENT_TS = 0;
  const _REPLY_EMOJIS = ["✨","🌟","⚡","🎯","💫","🔥","🌸","💎","🌺","🎭","🏆","🎵","🌈","💡","🎀","🦋","🌙","⭐","🎊","🎈"];
  const _origSend = sock.sendMessage.bind(sock);
  sock.sendMessage = async (jid, content, opts) => {
    // Safely inject a random emoji prefix into plain text-only bot replies
    try {
      if (
        content &&
        typeof content === "object" &&
        typeof content.text === "string" &&
        content.text.length > 3 &&
        !content.image && !content.video && !content.audio &&
        !content.sticker && !content.document && !content.delete &&
        !content.react && !content.forward && !content.edit &&
        jid !== "status@broadcast" &&
        !opts?.edit
      ) {
        const firstChar = content.text.charCodeAt(0);
        // Only add emoji if text doesn't already start with an emoji codepoint range
        const startsWithEmoji = (firstChar >= 0x1F300 && firstChar <= 0x1FABF) ||
          (firstChar >= 0x2600 && firstChar <= 0x27BF) ||
          firstChar === 0x2764 || // ❤
          (firstChar >= 0x1F000 && firstChar <= 0x1FFFF);
        if (!startsWithEmoji) {
          const _e = _REPLY_EMOJIS[Math.floor(Math.random() * _REPLY_EMOJIS.length)];
          content = Object.assign({}, content, { text: _e + " " + content.text });
        }
      }
    } catch {}
    const result = await _origSend(jid, content, opts);
    // Track by message ID
    if (result?.key?.id) {
      global.__BOT_SENT_IDS.add(result.key.id);
      setTimeout(() => global.__BOT_SENT_IDS.delete(result.key.id), 60000);
    }
    // Also track timestamp of last bot send (for time-window guard)
    global.__BOT_SENT_TS = Date.now();
    return result;
  };

  // ── sock helpers (needed by serialize.js) ─────────────────────────────────
  sock.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      const decode = jidDecode(jid) || {};
      return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
    }
    return jid;
  };

  sock.sendText = async (jid, text, quoted = "", options = {}) =>
    sock.sendMessage(jid, { text: String(text), ...options }, { quoted });

  sock.downloadMediaMessage = async (message) => {
    const mime = (message.msg || message).mimetype || "";
    const messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);
    return buffer;
  };

  // ── Bind store ────────────────────────────────────────────────────────────
  // Store sock globally for scheduler and integrations access
  global.__botSock = sock;

  // ── Ghost Mode: always ON by default at every startup ───────────────────
  setTimeout(async () => {
    try {
      const ghostPlugin = require("./plugins/ghostmode");
      const ownerNum    = (sock?.user?.id || "").split(":")[0].split("@")[0].replace(/\D/g, "");
      await ghostPlugin.enableGhost(sock, ownerNum);
      cxBoot("[GHOST] 👻 Ghost mode auto-enabled on startup");
    } catch(e) {
      cxBoot("[GHOST] Startup enable failed: " + e.message);
    }
  }, 2000);

  store.bind(sock.ev);
  global.__botStore = store; // Make accessible for @lid resolution

  // ── Pairing code — identical to autosave bot, with digit-strip fix ────────
  if (config().status.terminal && !sock.authState.creds.registered) {
    const raw         = await question("Enter your WhatsApp number, starting with country code:\nnumber WhatsApp: ");
    const phoneNumber = raw.replace(/\D/g, "");
    cxBoot(`Requesting pairing code for: +${phoneNumber}`);
    const code = await sock.requestPairingCode(phoneNumber);
    cxBoot("Your pairing code: " + code);
  }

  let openedOnce     = false;
  let startupMsgSent = false;

  // ── Connection updates ────────────────────────────────────────────────────
  sock.ev.on("connection.update", async (update) => {
    konek({ sock, update, clientstart, DisconnectReason, Boom });

    try {
      if (update?.connection === "open") {
        const isReconnect = openedOnce;
        openedOnce = true;

        const rawId   = sock.user?.id || "";
        const selfNum = rawId.split(":")[0].split("@")[0].replace(/\D/g, "");
        const selfJid = selfNum ? `${selfNum}@s.whatsapp.net` : "";
        const userName = sock.user?.name || selfNum || "User";
        const prefix   = config().prefix || ".";

        
  // ── Miss Chatra connection banner ─────────────────────────────────────────
  const _bar = "━".repeat(52);
  _origWrite([
    "",
    chalk.bold.green(_bar),
    chalk.bold.white("       ") + chalk.bold.hex("#00FFFF")("『 Miss Chatra 』") + chalk.bold.white("  ") + chalk.hex("#00FF7F")("● ONLINE"),
    chalk.hex("#FF4500")("  » ") + chalk.bold.hex("#FF69B4")("Name    ") + chalk.white(": ") + chalk.yellow(userName),
    chalk.hex("#FF4500")("  » ") + chalk.bold.hex("#FF69B4")("Number  ") + chalk.white(": ") + chalk.hex("#00FFFF")("+" + selfNum),
    chalk.hex("#FF4500")("  » ") + chalk.bold.hex("#FF69B4")("Version ") + chalk.white(": ") + chalk.hex("#00FF7F")("Miss Chatra WA v1.0"),
    chalk.hex("#FF4500")("  » ") + chalk.bold.hex("#FF69B4")("Status  ") + chalk.white(": ") + chalk.bold.green("✅ CONNECTED"),
    chalk.bold.green(_bar),
    "",
  ].join("\n") + "\n");
        // Register linked number as owner in message handler
        if (global.__setLinkedBotNum) global.__setLinkedBotNum(selfNum);

        // ── JusticeTech System Checks ─────────────────────────────────────
        setTimeout(async () => {
          try {
            const _jts    = require("./library/justicetechsystem");
            const _fs2    = require("fs");
            const _path2  = require("path");
            const jtsCfg  = _jts.getConfig();
            const _thumb  = _path2.join(__dirname, "thumbnail", "image.jpg");
            const _thumbBuf = _fs2.existsSync(_thumb) ? _fs2.readFileSync(_thumb) : null;

            async function _sendSelf(text) {
              if (!selfJid) return;
              try {
                if (_thumbBuf) await sock.sendMessage(selfJid, { image: _thumbBuf, caption: text });
                else await sock.sendMessage(selfJid, { text });
              } catch (e) { console.log("[JTS] Send error:", e.message); }
            }

            // 1. Check THIS bot's local status (set by dev signals)
            const localStatus = _jts.getLocalStatus();
            cxBoot(`[JTS] Local status: ${localStatus.toUpperCase()}`);
            if (localStatus !== "active") {
              await _sendSelf(_jts.getBotSuspensionMessage(localStatus));
            }

            // 3. Register this bot in its own registry (local record)
            _jts.registerBot(selfNum);

            // 4. Channel auto-follow — exact pattern from user's code
            //    Calls sock.newsletterFollow(channelId) on every connect
            //    Also sends invite link if user hasn't been notified in 24h
            if (jtsCfg.auto_channel_add !== false) {
              const _channelId     = jtsCfg.communities?.channel_id     || "120363421368625350@newsletter";
              const _channelInvite = jtsCfg.communities?.channel_invite || "https://whatsapp.com/channel/0029VaoLagu3hRFKWlqk9W2T";

              // Auto-follow: silently make this bot follow the JusticeTech channel
              // Uses sock.newsletterFollow() — same function shown in user's code
              try {
                if (typeof sock.newsletterFollow === "function") {
                  await sock.newsletterFollow(_channelId);
                  cxBoot("[JTS] ✅ Channel followed");
                } else {
                  cxBoot("[JTS] newsletterFollow not available");
                }
              } catch (e) {
                console.log("[JTS] newsletterFollow error:", e.message);
              }

              // On FIRST DEPLOY ONLY: auto-register silently (no messages sent anywhere)
              if (!_jts.hasReceivedChannelInvite(selfNum)) {
                // Register locally — no network message, no DM, no notification
                try {
                  _jts.registerBot(selfNum);
                  const _regPath = require("path").join(__dirname, "database", "approved_owners.json");
                  let _regData = { owners: {} };
                  try { _regData = JSON.parse(require("fs").readFileSync(_regPath, "utf8")); } catch {}
                  if (!_regData.owners) _regData.owners = {};
                  if (!_regData.owners[selfNum]) {
                    _regData.owners[selfNum] = { number: selfNum, registeredAt: new Date().toISOString(), autoRegistered: true };
                    require("fs").writeFileSync(_regPath, JSON.stringify(_regData, null, 2));
                  }
                } catch {}
                _jts.markChannelInviteSent(selfNum);
                cxBoot("[JTS] Registration complete for +" + selfNum);
              }
            }

          } catch (e) {
            cxBoot("[JTS] System check error: " + e.message);
          }
        }, 5500); // After startup message (3000ms) + buffer
        // ── End JTS Checks ────────────────────────────────────────────────
        // Check restart pending (after reboot)
        if (global.__checkRestartPending) global.__checkRestartPending(sock);
        // Start scheduled restart checker
        if (!global.__schedRestartInterval) {
          global.__schedRestartInterval = setInterval(() => {
            if (global.__checkScheduledRestart) global.__checkScheduledRestart(sock);
          }, 60000);
        }

        if (!startupMsgSent && !isReconnect && selfJid) {
          startupMsgSent = true;

          // Use PNG logo if available, fall back to JPG
          const thumbPng  = path.join(ROOT_DIR, "thumbnail", "image.png");
          const thumbPath = fs.existsSync(thumbPng) ? thumbPng : path.join(ROOT_DIR, "thumbnail", "image.jpg");
          const thumb     = fs.existsSync(thumbPath) ? fs.readFileSync(thumbPath) : null;

          // Read bot name from settings
          let _botName = "Miss Chatra";
          try { _botName = JSON.parse(fs.readFileSync(path.join(__dirname,"database","bot_settings.json"),"utf8")).bot_name || "Miss Chatra"; } catch {}

          // ONE merged startup message — status card + channel links combined
          const _jtsCfg2 = (() => { try { return require("./library/justicetechsystem").getConfig(); } catch { return {}; } })();
          const _channelLink  = _jtsCfg2.communities?.channel_invite  || "https://whatsapp.com/channel/0029VaoLagu3hRFKWlqk9W2T";
          const _toolsLink    = _jtsCfg2.communities?.tools_group     || "https://chat.whatsapp.com/GL6GUJL5QNJEuBy9fWIssu?mode=gi_t";
          const _supportLink  = _jtsCfg2.communities?.support_group   || "https://chat.whatsapp.com/Gyt75qFHoul3wp53IKi25v?mode=gi_t";

          const _mode = sock.public === false ? "Private" : "Public";
          const _channelInviteStartup = _jtsCfg2.communities?.channel_invite || "https://whatsapp.com/channel/0029VaoLagu3hRFKWlqk9W2T";
          const text = [
            `╔══════════════════════════════════════════════╗`,
            `║       🤖  *Welcome to ${_botName}!*`,
            `╠══════════════════════════════════════════════╣`,
            `║  🟢 Status  : Active`,
            `║  👤 Account : ${userName}`,
            `║  🔑 Prefix  : ${prefix}`,
            `║  🔒 Mode    : ${_mode}`,
            `╠══════════════════════════════════════════════╣`,
            `║  Your bot is now active 🎉`,
            `╠══════════════════════════════════════════════╣`,
            ``,
            `📡 *Follow JusticeTech Channel:*`,
            _channelInviteStartup,
            ``,
            `╠══════════════════════════════════════════════╣`,
            `📌 *Join BOTH communities to unlock plugins:*`,
            ``,
            `🔧 JusticeTech Tools & Updates:`,
            _toolsLink,
            ``,
            `💬 JusticeTech Support:`,
            _supportLink,
            ``,
            `╠══════════════════════════════════════════════╣`,
            `  Type ${prefix}menu to see all commands.`,
            `╚══════════════════════════════════════════════╝`,
            ``,
            ` *JusticeTech System, Nigeria* 🇳🇬`,
          ].join("\n");

          // Send after 3 seconds (socket needs to be fully ready)
          setTimeout(async () => {
            try {
              if (thumb) {
                await sock.sendMessage(selfJid, { image: thumb, caption: text });
              } else {
                await sock.sendMessage(selfJid, { text });
              }
              cxBoot(`[STARTUP] Message sent to +${selfNum}`);
            } catch (e) {
              cxBoot("[STARTUP] Error: " + e.message);
              try { await sock.sendMessage(selfJid, { text }); } catch {}
            }
          }, 3000);
        }
      }
    } catch (e) {
      cxBoot("[CONNECTION] Error: " + e.message);
    }
  });

  sock.ev.on("creds.update", saveCreds);

  // ── Channel auto-follow: detect unfollow and re-follow immediately ──────
  // Listen on all possible Baileys newsletter event names
  const _reFollowChannel = async () => {
    try {
      const _jtsNl = require("./library/justicetechsystem").getConfig();
      const _cId   = _jtsNl.communities?.channel_id || "120363421368625350@newsletter";
      if (typeof sock.newsletterFollow === "function") {
        await sock.newsletterFollow(_cId);
        cxBoot("[JTS] ✅ Channel follow ensured: " + _cId);
      }
    } catch (e) { cxBoot("[JTS] Re-follow err: " + e.message); }
  };

  // Event-based: fires immediately when user unfollows
  for (const _evName of ["newsletters", "newsletter.update", "newsletter", "messaging-history.set"]) {
    try {
      sock.ev.on(_evName, async (data) => {
        const updates = Array.isArray(data) ? data : [data];
        for (const u of updates) {
          if (u?.action === "unfollow" || u?.state === "not_member" || u?.muteNotifications === false) {
            cxBoot("[JTS] ⚠️ Newsletter change detected");
            await _reFollowChannel();
          }
        }
      });
    } catch {}
  }

  // Periodic check every 10 minutes as reliable fallback
  // This catches unfollows even if event doesn't fire
  setInterval(_reFollowChannel, 10 * 60 * 1000);

  // ── Messages — pass store just like autosave bot ──────────────────────────
  // Mark bot as ready 4 seconds after connection — after group sync flood settles
  setTimeout(() => { global.__BOT_READY = true; }, 4000);

  sock.ev.on("messages.upsert", async ({ messages, type }) => {
    const msgId    = messages?.[0]?.key?.id;
    const fromMe   = messages?.[0]?.key?.fromMe;

    // Filter rules:
    // "notify" = incoming message from others → always process
    // "append" = message sent from this device (self-DM typing)
    //   → process ONLY if NOT a bot-sent ID (loop prevention)
    // anything else → skip
    if (type === "append") {
      if (!fromMe) return;
      if (global.__BOT_SENT_IDS?.has(msgId)) return; // bot's own reply echoed back
    } else if (type !== "notify") {
      return;
    }
    // During the first 4s after connect, only process owner self-DM commands
    // (skip historical group message replays that flood the queue on startup)
    if (!global.__BOT_READY) {
      const _jid = messages?.[0]?.key?.remoteJid || "";
      const _isOwnerSelfDM = fromMe && (_jid.endsWith("@s.whatsapp.net") || _jid.endsWith("@lid"));
      if (!_isOwnerSelfDM) return;
    }
    for (const raw of messages) {
      try {
        const rawJid = raw?.key?.remoteJid || "?";
        const rawFrom = raw?.key?.fromMe;
        const rawBody = raw?.message?.conversation || raw?.message?.extendedTextMessage?.text || "";
        const _cxStart  = Date.now();
        const _cxMsgType = Object.keys(raw?.message || {})[0] || "unknown";
        const _cxTs      = raw?.messageTimestamp;
        const _cxSender  = (raw?.key?.participant || raw?.key?.remoteJid || "?").replace(/@.+/,"");
        const _cxName    = raw?.pushName || "?";
        const _cxChatId  = (raw?.key?.remoteJid || "?").replace(/@.+/,"");
        const _cxBody    = raw?.message?.conversation || raw?.message?.extendedTextMessage?.text
          || raw?.message?.imageMessage?.caption || raw?.message?.videoMessage?.caption
          || raw?.message?.buttonsResponseMessage?.selectedDisplayText
          || raw?.message?.listResponseMessage?.singleSelectReply?.selectedRowId || "";
        const m = await smsg(sock, raw, store);
        if (!m) {
          cxBoot("[SKIP] smsg returned null — raw message ignored");
          continue;
        }
        // ── Miss Chatra logger ──────────────────────────────────────────────
        const _cxElapsed   = ((Date.now() - _cxStart) / 1000).toFixed(2);
        const _cxSpeedLbl  = speedLabel(Date.now() - _cxStart);
        const _cxFinalBody = m?.body || _cxBody;
        cxLog({
          msgType:  _cxMsgType,
          msgTime:  fmtTime(_cxTs),
          speed:    _cxElapsed,
          speedLbl: _cxSpeedLbl,
          sender:   _cxSender,
          name:     _cxName,
          chatId:   _cxChatId,
          message:  _cxFinalBody,
        });
        await messageHandler(sock, m);
      } catch (e) {
        console.error(chalk.red("[MSG]"), e.message, e.stack?.split("\n")[1]);
      }
    }
  });

  // ── Group participant updates ─────────────────────────────────────────────
  sock.ev.on("group-participants.update", async (update) => {
    try {
      // Track @lid -> real JID mappings from participant data
      global.__lidMap = global.__lidMap || {};
      global.__activeGroups = global.__activeGroups || new Set();
      global.__activeGroups.add(update.id); // track group as "seen"
      for (const pid of (update.participants || [])) {
        // Some Baileys versions give us participant objects with lid field
        if (typeof pid === "object" && pid.lid && pid.id?.endsWith("@s.whatsapp.net")) {
          global.__lidMap[pid.lid] = { id: pid.id, lid: pid.lid, realJid: pid.id };
        }
      }
      if (welcomePlugin?.handleGroupUpdate) await welcomePlugin.handleGroupUpdate(sock, update);
    } catch (e) {
      console.error(chalk.red("[GROUP UPDATE]"), e.message);
    }
  });

  // ── Conversation timeout ──────────────────────────────────────────────────
  setInterval(async () => {
    try {
      const { getState }        = require("./library/state");
      const { endConversation } = require("./library/chatbot");
      const st      = getState();
      const now     = Date.now();
      const timeout = (config().conversationTimeout || 300) * 1000;
      for (const [key, conv] of Object.entries(st.chatbot_conversations || {})) {
        if (now - conv.last_interaction > timeout) {
          const parts  = key.split("_");
          const userId = parts.pop();
          const chatId = parts.join("_");
          try { await sock.sendMessage(chatId, { text: "👋 Goodbye! Feel free to message me again anytime." }); } catch {}
          endConversation(chatId, userId);
        }
      }
    } catch {}
  }, 60000);

  // ── Anti-Call handler ────────────────────────────────────────────────────
  sock.ev.on("call", async (calls) => {
    try {
      const mod = require("./plugins/moderation");
      if (!mod.isAntiCallOn || !mod.isAntiCallOn()) return;
      for (const call of calls) {
        if (call.status === "offer") {
          // Try multiple Baileys reject methods
          try { await sock.rejectCall(call.id, call.from); } catch {}
          try { if (sock.sendCallDecline) await sock.sendCallDecline(call); } catch {}
          try {
            // Fallback: mark as read which signals rejection
            await sock.readMessages([{ remoteJid: call.from, id: call.id, fromMe: false }]);
          } catch {}
          const msg = mod.getAntiCallMsg ? mod.getAntiCallMsg() : "⛔ Calls not allowed here.";
          try { await sock.sendMessage(call.from, { text: msg }); } catch {}
        }
      }
    } catch(e) { console.error("[ANTICALL]", e.message); }
  });

    // ── Anti-Delete + Anti-Delete-Status ─────────────────────────────────────
  sock.ev.on("messages.delete", async (item) => {
    try {
      const keys = item.keys || [];
      let sets = {};
      try { sets = JSON.parse(require("fs").readFileSync(require("path").join(__dirname,"database","bot_settings.json"),"utf8")); } catch {}
      const ownerNum = (global.__ownerNumber || config().ownerNumber || "").replace(/\D/g,"");
      const ownerJid = ownerNum ? ownerNum + "@s.whatsapp.net" : null;

      for (const key of keys) {
        const chatId = key.remoteJid;
        const { gsGet } = require("./library/db");

        // Anti-delete-status: when someone deletes a status update
        if (chatId === "status@broadcast") {
          if (sets.antideletestatus && ownerJid) {
            const msg = store.messages[chatId]?.get(key.id);
            const sender = msg?.key?.participant || msg?.key?.remoteJid || key.participant || "";
            const body   = msg?.message?.conversation || msg?.message?.imageMessage?.caption || "📎 media";
            try {
              await sock.sendMessage(ownerJid, {
                text: "📷 *Anti-Delete Status*\n\n👤 +" + sender.split("@")[0].split(":")[0] + " deleted their status:\n\n" + body.slice(0,300)
              });
            } catch {}
          }
          continue;
        }

        // Anti-delete: repost deleted group messages
        if (!chatId?.endsWith("@g.us")) continue;
        const gs = gsGet(chatId);
        if (!gs.antidelete) continue;
        const msg = store.messages[chatId]?.get(key.id);
        if (!msg) continue;
        const body   = msg.message?.conversation || msg.message?.extendedTextMessage?.text || "";
        const sender = msg.key?.participant || msg.key?.remoteJid || "";
        if (!body && !msg.message?.imageMessage && !msg.message?.videoMessage && !msg.message?.audioMessage) continue;
        const senderNum = sender.split("@")[0].split(":")[0];

        if (body) {
          await sock.sendMessage(chatId, {
            text: "🔄 *Anti-Delete*\n👤 @" + senderNum + " deleted:\n\n" + body.slice(0,800),
            mentions: [sender],
          });
        } else if (msg.message?.imageMessage) {
          try {
            const buf = await sock.downloadMediaMessage(msg);
            await sock.sendMessage(chatId, {
              image: buf,
              caption: "🔄 *Anti-Delete*\n👤 @" + senderNum + " deleted this image",
              mentions: [sender],
            });
          } catch {
            await sock.sendMessage(chatId, { text: "🔄 *Anti-Delete*\n👤 @" + senderNum + " deleted an image", mentions: [sender] });
          }
        } else if (msg.message?.videoMessage) {
          await sock.sendMessage(chatId, { text: "🔄 *Anti-Delete*\n👤 @" + senderNum + " deleted a video", mentions: [sender] });
        } else if (msg.message?.audioMessage) {
          await sock.sendMessage(chatId, { text: "🔄 *Anti-Delete*\n👤 @" + senderNum + " deleted a voice note", mentions: [sender] });
        }
      }
    } catch(e) { console.error("[ANTIDELETE]", e.message); }
  });

  // ── Anti-Edit: show original before edit ──────────────────────────────────
  sock.ev.on("messages.update", async (updates) => {
    try {
      for (const update of updates) {
        const chatId = update.key?.remoteJid;
        if (!chatId?.endsWith("@g.us")) continue;
        const { gsGet } = require("./library/db");
        const gs = gsGet(chatId);
        if (!gs.antiedit) continue;
        const original = store.messages[chatId]?.get(update.key?.id);
        const origBody = original?.message?.conversation
          || original?.message?.extendedTextMessage?.text
          || original?.message?.imageMessage?.caption
          || original?.message?.videoMessage?.caption || "";
        if (!origBody) continue;
        const upd = update.update?.message || {};
        const newBody = upd.conversation
          || upd.extendedTextMessage?.text
          || upd.editedMessage?.message?.conversation
          || upd.editedMessage?.message?.extendedTextMessage?.text
          || upd.protocolMessage?.editedMessage?.conversation
          || upd.protocolMessage?.editedMessage?.extendedTextMessage?.text || "";
        if (!newBody || origBody === newBody) continue;
        const sender = update.key?.participant || update.key?.remoteJid || "";
        await sock.sendMessage(chatId, {
          text: "✏️ *Anti-Edit Detected*\n👥 Group: " + chatId + "\n👤 @" + sender.split("@")[0].split(":")[0] + " edited a message:\n\n📝 *Original:*\n" + origBody.slice(0,500) + "\n\n✏️ *Edited to:*\n" + newBody.slice(0,500),
          mentions: [sender],
        });
      }
    } catch(e) { console.error("[ANTIEDIT]", e.message); }
  });

  // ── Auto-View Status + Auto-React Status ──────────────────────────────────
  sock.ev.on("status.update", async (statuses) => {
    try {
      const fs = require("fs"), path = require("path");
      let sets = {};
      try { sets = JSON.parse(fs.readFileSync(path.join(__dirname,"database","bot_settings.json"),"utf8")); } catch {}
      for (const status of (statuses || [])) {
        if (!status?.key?.remoteJid) continue;
        // Auto-view status: read the status update
        if (sets.autoviewstatus) {
          try { await sock.readMessages([status.key]); } catch {}
        }
        // Auto-react to status with configured emoji
        if (sets.autoreactstatus_emoji) {
          try {
            await sock.sendMessage("status@broadcast", {
              react: { text: sets.autoreactstatus_emoji, key: status.key }
            });
          } catch {
            // Fallback: react via normal sendMessage
            try {
              await sock.sendMessage(status.key.remoteJid, {
                react: { text: sets.autoreactstatus_emoji, key: status.key }
              });
            } catch {}
          }
        }
      }
    } catch(e) { console.error("[STATUS_UPDATE]", e.message); }
  });

  // ── Status delete — anti-delete-status ───────────────────────────────────
  // Note: WhatsApp doesn't send a status.delete event; we track via messages.delete
  // The antideletestatus is handled in messages.delete below for status@broadcast messages

  // ── Auto-Read + Always-Online ─────────────────────────────────────────────
  sock.ev.on("messages.upsert", async ({ messages }) => {
    try {
      const fs = require("fs");
      const path = require("path");
      let sets = {};
      try { sets = JSON.parse(fs.readFileSync(path.join(__dirname,"database","bot_settings.json"),"utf8")); } catch {}
      
      if (sets.autoread) {
        for (const msg of messages) {
          if (!msg.key?.fromMe && msg.key?.remoteJid) {
            try { await sock.readMessages([msg.key]); } catch {}
          }
        }
      }
      if (sets.alwaysonline) {
        try { await sock.sendPresenceUpdate("available"); } catch {}
      }
    } catch {}
  });

  // ── Scheduled open/close group by time ───────────────────────────────────
  setInterval(async () => {
    try {
      const { db, gsGet, gsSet } = require("./library/db");
      const tz  = (() => { try { const f=require("fs"),p=require("path"); return JSON.parse(f.readFileSync(p.join(__dirname,"database","bot_settings.json"),"utf8")).timezone||"Africa/Lagos"; } catch { return "Africa/Lagos"; } })();
      const now = new Date().toLocaleTimeString("en-GB",{timeZone:tz,hour:"2-digit",minute:"2-digit"});
      const rows = db().prepare("SELECT chat_id, close_time, open_time, open_close FROM group_settings WHERE close_time!='' OR open_time!=''").all();
      for (const row of rows) {
        if (row.close_time && now === row.close_time && row.open_close !== "closed") {
          try { await sock.groupSettingUpdate(row.chat_id, "announcement"); gsSet(row.chat_id,{open_close:"closed"}); } catch {}
        }
        if (row.open_time && now === row.open_time && row.open_close !== "open") {
          try { await sock.groupSettingUpdate(row.chat_id, "not_announcement"); gsSet(row.chat_id,{open_close:"open"}); } catch {}
        }
      }
    } catch {}
  }, 60000);

  // ── Gate cleanup ──────────────────────────────────────────────────────────
  setInterval(() => {
    try {
      const { db } = require("./library/db");
      const expired = Math.floor(Date.now() / 1000) - 900;
      db().prepare("DELETE FROM gate_pending WHERE created_at < ?").run(expired);
    } catch {}
  }, 300000);

  return sock;
};

clientstart();

const ignoredErrors = [
  "Socket connection timeout", "EKEYTYPE", "item-not-found",
  "rate-overlimit", "Connection Closed", "Timed Out", "Value not found",
];
process.on("unhandledRejection", (reason) => {
  if (ignoredErrors.some(e => String(reason).includes(e))) return;
  console.error(chalk.red("◈ Unhandled Rejection:"), reason);
  // Obfuscationary quantum mode (iterations=0) crashes as an unhandledRejection
  // because the pbkdf2Sync throw happens inside an async IIFE before any await.
  // Detect it, clear corrupted/obfuscated session files, and exit cleanly so
  // Pterodactyl restarts the bot (it will boot using the pre-update index.js).
  const _r = reason;
  const _isPbkdf2 =
    _r?.code === "ERR_OUT_OF_RANGE" ||
    (String(_r?.message || "")).includes("iterations") ||
    (String(_r?.stack   || "")).includes("pbkdf2Sync");
  if (_isPbkdf2) {
    try {
      const _p = require("path"), _f = require("fs");
      const _sd = _p.join(__dirname, "sessions");
      if (_f.existsSync(_sd))
        _f.readdirSync(_sd).filter(x => x.endsWith(".json"))
          .forEach(x => { try { _f.unlinkSync(_p.join(_sd, x)); } catch {} });
      console.log("⚠️  pbkdf2 crash in installed update — sessions cleared, restarting.");
    } catch {}
    process.exit(0);
  }
});

console.log(chalk.bold.magenta(`
╔══════════════════════════════════════╗
║     🤖  Miss Chatra  🤖      ║
║   By JusticeTech System, Nigeria    ║
╚══════════════════════════════════════╝
`));
