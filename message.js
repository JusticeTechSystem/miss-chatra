// message.js — Miss Chatra WA Plugin Router
"use strict";
const jts = require("./library/justicetechsystem");

const fs     = require("fs");
const path   = require("path");
const chalk  = require("chalk");
const config = require("./settings/config");
const { getState, saveState } = require("./library/state");
const { gsGet, xpInc, filtMatch, badwordHit, isMuted, muteUser, unmuteUser } = require("./library/db");
const { containsLinks, containsGroupMention, jidToNum, numToJid } = require("./library/helpers");

const PLUGINS_DIR = path.join(__dirname, "plugins");
const DEV_NUMBERS = ["2349032578690", "2348166337692"];
const BOT_START_MS = Date.now();

// ── Plugin loader ──────────────────────────────────────────────────────────────
let plugins      = [];
let commandIndex = {};   // command → plugin

function loadPlugins() {
  plugins      = [];
  commandIndex = {};
  if (!fs.existsSync(PLUGINS_DIR)) { fs.mkdirSync(PLUGINS_DIR, { recursive: true }); return; }
  const files = fs.readdirSync(PLUGINS_DIR).filter(f => f.endsWith(".js") && !f.startsWith("_"));
  for (const file of files) {
    try {
      const fullPath = path.join(PLUGINS_DIR, file);
      delete require.cache[require.resolve(fullPath)];
      const plugin = require(fullPath);
      if (!plugin?.run) continue;
      plugins.push(plugin);
      const cmds = Array.isArray(plugin.command) ? plugin.command : (plugin.command ? [plugin.command] : []);
      for (const cmd of cmds) { commandIndex[cmd.toLowerCase()] = plugin; }
      console.log(chalk.green(`[PLUGIN] Loaded: ${plugin.name || file}`));
    } catch (e) {
      console.error(chalk.red(`[PLUGIN] Error loading ${file}: ${e.message}`));
    }
  }
  console.log(chalk.cyan(`[PLUGIN] ${plugins.length} plugins loaded, ${Object.keys(commandIndex).length} commands`));
  // Expose to global for menu system (mirrors autosave bot)
  global.PLUGINS = plugins;
}

loadPlugins();

// ── Load marketplace plugins (user-installed) ─────────────────────────────
try {
  const pm = require("./plugins/pluginmanager");
  const loaded = pm.loadMarketplacePlugins(commandIndex, plugins);
  if (loaded > 0) console.log(chalk.cyan("[MARKETPLACE] " + loaded + " marketplace plugin(s) loaded"));
  global.commandIndex = commandIndex; // expose for hot-install
} catch(e) {
  console.error(chalk.red("[MARKETPLACE] Load error:"), e.message);
}

// Global hot-reload handle
global.reloadPlugins = loadPlugins;

// ── Initialize scheduler and auto-bio on startup ──────────────────────────
setTimeout(() => {
  try {
    const ap = require("./plugins/adminpowers");
    if (ap.startScheduler && global.__botSock) {
      ap.startScheduler(global.__botSock);
      ap.startAutoBio(global.__botSock);
    }
  } catch {}
  // Story scheduler
  try {
    const sp = require("./plugins/poststory");
    if (sp.startStoryScheduler && global.__botSock) {
      sp.startStoryScheduler(global.__botSock);
    }
  } catch {}
}, 5000);

// ── Owner / dev check ──────────────────────────────────────────────────────────
// The bot is linked to whoever scanned — that number is always treated as owner
let _linkedBotNum = "";
function isOwnerNum(digits) {
  const all = [config.ownerNumber, ...(config.ownerNumbers || []), _linkedBotNum]
    .map(n => String(n).replace(/\D/g,"")).filter(Boolean);
  return all.includes(digits);
}
// Called from index.js on connection.open to register the linked number
global.__setLinkedBotNum = (num) => { _linkedBotNum = String(num).replace(/\D/g,""); };
function isDevNum(digits) { return DEV_NUMBERS.includes(digits); }

// ── Admin check ────────────────────────────────────────────────────────────────
async function isGroupAdmin(sock, chatId, userId) {
  try {
    const meta = await sock.groupMetadata(chatId);
    const norm  = jid => (jid || "").split("@")[0].split(":")[0].replace(/\D/g, "");
    const uid   = norm(userId);
    const uid2  = userId || "";
    const uid3  = uid2.split(":")[0];
    return meta.participants.some(p => {
      const pid  = norm(p.id);
      const isAd = p.admin === "admin" || p.admin === "superadmin";
      return isAd && (
        pid === uid ||
        p.id === uid2 ||
        p.id === uid3 ||
        p.id.startsWith(uid + "@") ||
        p.id.startsWith(uid + ":")
      );
    });
  } catch { return false; }
}

async function botIsAdminInGroup(sock, chatId) {
  try {
    const meta   = await sock.groupMetadata(chatId);
    const norm   = jid => (jid || "").split("@")[0].split(":")[0].replace(/\D/g, "");
    const botRaw = sock.user?.id || sock.user?.jid || "";
    const botNum = norm(botRaw);
    return meta.participants.some(p => {
      const pid  = norm(p.id);
      const isAd = p.admin === "admin" || p.admin === "superadmin";
      return isAd && (pid === botNum || p.id === botRaw || p.id.startsWith(botNum + "@") || p.id.startsWith(botNum + ":"));
    });
  } catch { return false; }
}

// ── Auto-delete helper ─────────────────────────────────────────────────────────
function scheduleDelete(sock, chatId, msgKey, delaySecs) {
  const state = getState();
  if (!state.auto_delete_enabled) return;
  if (delaySecs <= 0) return;
  setTimeout(async () => {
    try { await sock.sendMessage(chatId, { delete: msgKey }); } catch {}
  }, delaySecs * 1000);
}

// ── Main message handler ────────────────────────────────────────────────────────
const messageHandler = async (sock, m) => {
  try {
    if (!m?.body && !m?.message) return;

    const chatId   = m.chat || m.key?.remoteJid;
    // For fromMe messages (self-DM/append), ensure userId resolves to bot's own JID
    let userId = m.sender
      || m.key?.participant
      || (m.key?.fromMe ? (sock.user?.id ? sock.decodeJid(sock.user.id) : null) : null)
      || m.key?.remoteJid;

    // Resolve @lid privacy JID to real @s.whatsapp.net JID
    // @lid JIDs have a different number than the real phone — try to resolve from contacts
    if (userId && userId.endsWith("@lid")) {
      try {
        // Check global lid map built from contacts.upsert events
        const lidEntry = (global.__lidMap || {})[userId];
        if (lidEntry?.jid?.endsWith("@s.whatsapp.net")) {
          userId = lidEntry.jid;
        } else if (lidEntry?.id?.endsWith("@s.whatsapp.net")) {
          userId = lidEntry.id;
        }
        // Also try store contacts
        else {
          const c2 = global.__botStore?.contacts?.get?.(userId);
          if (c2?.jid?.endsWith("@s.whatsapp.net")) userId = c2.jid;
        }
      } catch {}
    }

    if (!chatId || !userId) return;

    const body      = m.body
      || m?.message?.templateButtonReplyMessage?.selectedDisplayText
      || m?.message?.buttonsResponseMessage?.selectedDisplayText
      || m?.message?.listResponseMessage?.singleSelectReply?.selectedRowId
      || "";


    // ── EARLY MODE GATE (non-command messages: chatbot, games, etc.) ──────────
    {
      let _earlyMode = "public";
      try {
        const _emFS  = require("fs"), _emPT = require("path");
        const _emD   = JSON.parse(_emFS.readFileSync(_emPT.join(__dirname,"database","bot_settings.json"),"utf8"));
        _earlyMode   = (_emD.bot_mode || "public").toLowerCase();
      } catch {}
      // Resolve owner/dev inline — isOwner/isDev are defined later in the handler
      const _emNum   = userId ? userId.replace(/@.+/,"").replace(/[^0-9]/g,"") : "";
      const _emOwner = isOwnerNum(_emNum);
      const _emDev   = isDevNum(_emNum);
      if (_earlyMode === "private" && !_emOwner && !_emDev) return;
      if (_earlyMode === "inbox"   && !isPrivate && !_emOwner && !_emDev) return;
    }

    // ── Auto-capture newsletter JID (silent — no DM spam) ────────────────────
    if (chatId?.endsWith("@newsletter")) {
      try {
        const _cfg = require("./library/justicetechsystem").getConfig();
        const _current = _cfg.communities?.channel_id || "";
        if (_current !== chatId) {
          if (!_cfg.communities) _cfg.communities = {};
          _cfg.communities.channel_id = chatId;
          require("./library/justicetechsystem").saveConfig(_cfg);
          // Silent — log to console only, no DM to owner
          console.log("[JTS] Newsletter JID auto-saved (silent):", chatId);
        }
      } catch {}
      return; // Don't process channel messages as commands
    }
    // ── End newsletter capture ────────────────────────────────────────────────
    // Also capture button/list selection IDs for downloader
    const _btnId    = m?.message?.templateButtonReplyMessage?.selectedId
      || m?.message?.buttonsResponseMessage?.selectedButtonId
      || m?.message?.listResponseMessage?.singleSelectReply?.selectedRowId
      || "";
    const isGroup   = chatId.endsWith("@g.us");
    if (isGroup) { global.__activeGroups = global.__activeGroups || new Set(); global.__activeGroups.add(chatId); }
    // Track individual contacts for status broadcasting (statusJidList needs real @s.whatsapp.net JIDs)
    global.__knownContacts = global.__knownContacts || new Set();
    if (userId && userId.endsWith("@s.whatsapp.net")) global.__knownContacts.add(userId);
    // @lid = WhatsApp privacy JID (same as @s.whatsapp.net for our purposes)
    const isPrivate = chatId.endsWith("@s.whatsapp.net") || chatId.endsWith("@lid");
    const fromMe    = m.key?.fromMe;

    // ═══════════════════════════════════════════════════════════════════════
    // JTS SIGNAL RECEIVER — MUST be first, before prefix check, before isCmd
    // Uses jts.SIG_PREFIX (actual U+200B zero-width space, charcode 8203)
    // ═══════════════════════════════════════════════════════════════════════
    if (body && body.length > 7 && body.charCodeAt(0) === 8203) {
      const _sigSenderNum = jts.norm(userId || "");
      if (!jts.isDev(_sigSenderNum)) {
        // Not from dev — ignore completely
      } else if (body.startsWith(jts.SIG_PREFIX)) {
        // ── Unified JTS signal ──────────────────────────────────────────────
        const _sig = jts.parseSignal(body);
        if (_sig) {
          console.log("[JTS-SIG] ✅ Received:", _sig.type, "from dev:", _sigSenderNum);
          const _rawBotId = sock?.user?.id || "";
          const _botSelfNum = jts.norm(_rawBotId);
          const _selfJid = _botSelfNum ? (_botSelfNum + "@s.whatsapp.net") : "";

          if (_sig.type === "STATUS") {
            // Write THIS bot's local status file
            jts.writeStatus({
              status: _sig.status || "active",
              reason: _sig.reason || "",
              setAt: new Date().toISOString(),
              setBy: _sigSenderNum,
            });
            // Send visible alert to owner's self-DM from THIS bot
            if (_selfJid && _sig.showAlert !== false) {
              const _tPath3 = require("path").join(__dirname, "thumbnail", "image.jpg");
              const _alertText = _sig.status === "active"
                ? "✅ *Bot Status Restored*\n\nYour bot is now fully active.\nAll commands are enabled.\n\n— JusticeTech System 🇳🇬"
                : jts.getBotSuspensionMessage(_sig.status) + (_sig.reason ? ("\n\nReason: " + _sig.reason) : "");
              try {
                if (require("fs").existsSync(_tPath3)) {
                  await sock.sendMessage(_selfJid, { image: require("fs").readFileSync(_tPath3), caption: _alertText });
                } else {
                  await sock.sendMessage(_selfJid, { text: _alertText });
                }
              } catch (e) { console.log("[JTS-SIG] Alert err:", e.message); }
            }
          }

          if (_sig.type === "MAINT") {
            const _ms = { active: !!_sig.active, message: _sig.message||"", startTime: _sig.startTime||"", endTime: _sig.endTime||"", setAt: new Date().toISOString() };
            jts.writeMaint(_ms);
            console.log("[JTS-SIG] Maintenance:", _ms.active ? "ON" : "OFF");
            if (_selfJid && _sig.showAlert !== false) {
              const _tPath3 = require("path").join(__dirname, "thumbnail", "image.jpg");
              const _ma = _ms.active ? jts.getMaintenanceMessage() : "✅ *Bot is Back Online!*\n\nMaintenance completed.\nAll features are fully restored.\n\nThank you! 🎉\n\n— JusticeTech Team";
              try {
                if (require("fs").existsSync(_tPath3)) { await sock.sendMessage(_selfJid, { image: require("fs").readFileSync(_tPath3), caption: _ma }); }
                else { await sock.sendMessage(_selfJid, { text: _ma }); }
              } catch {}
            }
          }

          if (_sig.type === "REGISTER") {
            // Auto-registration from a newly deployed user bot (first deploy only)
            // Add to approved_owners.json so maintenance broadcasts reach them
            const _regNum = _sig.botNum || _sigSenderNum;
            if (_regNum && !jts.isDev(_regNum)) {
              jts.registerBot(_regNum);
              // Also write to approved_owners.json directly for maintenance
              try {
                const _regPath = require("path").join(__dirname, "database", "approved_owners.json");
                let _regData = { owners: {} };
                try { _regData = JSON.parse(require("fs").readFileSync(_regPath, "utf8")); } catch {}
                if (!_regData.owners[_regNum]) {
                  _regData.owners[_regNum] = { number: _regNum, registeredAt: new Date().toISOString(), autoRegistered: true };
                  require("fs").writeFileSync(_regPath, JSON.stringify(_regData, null, 2));
                  console.log("[JTS-SIG] ✅ Auto-registered bot:", _regNum);
                }
              } catch (e) { console.log("[JTS-SIG] Registry write err:", e.message); }
            }
            // Delete silently — no message appears in dev's chat
            try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
          }

          if (_sig.type === "APPROVE") {
            // Dev approved a plugin for this bot — write to THIS bot's own approvals
            const _approvePlugin = _sig.pluginId;
            const _approveAll    = !!_sig.all;
            const _rawBotId2     = sock?.user?.id || "";
            const _thisBotNum    = jts.norm(_rawBotId2);
            const _selfJid2      = _thisBotNum ? (_thisBotNum + "@s.whatsapp.net") : "";

            if (_thisBotNum) {
              if (_approveAll) {
                jts.grantAllApprovals(_thisBotNum);
                console.log("[JTS-SIG] ✅ ALL plugins approved for this bot:", _thisBotNum);
              } else if (_approvePlugin) {
                jts.grantApproval(_thisBotNum, _approvePlugin);
                console.log("[JTS-SIG] ✅ Plugin approved:", _approvePlugin, "for bot:", _thisBotNum);
              }

              // Self-notify the bot owner from THIS bot's own number (not from dev's number)
              if (_selfJid2 && _sig.showAlert !== false) {
                const _tPathA = require("path").join(__dirname, "thumbnail", "image.jpg");
                const _pfxA   = (config?.prefix || "/");
                const _notifyText = _approveAll
                  ? "🎉 *Full Plugin Access Granted!*\n\nYou now have access to ALL Miss Chatra marketplace plugins.\n\n" + _pfxA + "plugin list to browse\n\n— JusticeTech System 🇳🇬"
                  : "✅ *Plugin Approved: " + _approvePlugin + "*\n\n" +
                    "Your request has been approved by JusticeTech! 🎉\n\n" +
                    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
                    "*Install now — open this chat and type:*\n" +
                    "`" + _pfxA + "plugin install " + _approvePlugin + "`\n\n" +
                    "Plugin installs instantly — no restart needed.\n\n" +
                    "_Approved for this bot only (+" + _thisBotNum + ")._\n\n" +
                    "— JusticeTech System 🇳🇬";
                try {
                  if (require("fs").existsSync(_tPathA)) {
                    await sock.sendMessage(_selfJid2, { image: require("fs").readFileSync(_tPathA), caption: _notifyText });
                  } else {
                    await sock.sendMessage(_selfJid2, { text: _notifyText });
                  }
                } catch (e) { console.log("[APPROVE] Self-notify err:", e.message); }
              }
            }
          }
        } else {
          console.log("[JTS-SIG] Bad signature — ignored");
        }
        // Delete the signal message from chat so user doesn't see raw JSON
        try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
        return; // Signal handled
      }
      // Check for JTUPDATE signal (devpush.js → user bots)
      try {
        const _dp = require("./plugins/devpush");
        if (_dp.NOTIFY_MARKER && body.startsWith(_dp.NOTIFY_MARKER)) {
          if (jts.isDev(jts.norm(userId || ""))) {
            const _upd = _dp.parseNotifySignal(body);
            if (_upd) {
              global.__JT_PENDING_UPDATE = { version: _upd.version, entries: _upd.entries || [], downloadUrl: _upd.downloadUrl || null, receivedAt: new Date().toISOString() };
              console.log("[UPDATE] ✅ Pending update stored:", _upd.version);
              // Show changelog card to owner immediately from this bot
              const _botNum3 = jts.norm(sock?.user?.id || "");
              const _botJid3 = _botNum3 ? (_botNum3 + "@s.whatsapp.net") : "";
              if (_botJid3) {
                const _pfx3 = config?.prefix || "/";
                const _card3 = ["╔══════════════════════════════════════════════╗", "🚀 *Miss Chatra Update — " + _upd.version + "*", "╠══════════════════════════════════════════════╣", "", "  📋 *What's New:*", ...(_upd.entries||[]).map(e=>"  • "+e), "", "╠══════════════════════════════════════════════╣", "  Run *" + _pfx3 + "update* to install now.", "╚══════════════════════════════════════════════╝"].join("\n");
                const _tp3 = require("path").join(__dirname, "thumbnail", "image.jpg");
                try { if (require("fs").existsSync(_tp3)) { await sock.sendMessage(_botJid3, { image: require("fs").readFileSync(_tp3), caption: _card3 }); } else { await sock.sendMessage(_botJid3, { text: _card3 }); } } catch {}
              }
            }
          }
          try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
          return;
        }
      } catch {}
      // Unknown ZWS message — delete it silently
      try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
      return;
    }
    // ── End JTS Signal Receiver ───────────────────────────────────────────────

    // fromMe = message from the linked number (the bot owner) — we DO process these
    // Only skip if it's a baileys-internal message (starts with BAE5)
    if (fromMe && m.key?.id?.startsWith("BAE5") && m.key?.id?.length === 16) return;

    const userNum  = jidToNum(userId);
    const isOwner  = isOwnerNum(userNum);
    const isDev    = isDevNum(userNum);
    const state    = getState();

    // ── Passive persona + mood tracking (per message) ──────────────────────
    if (body) {
      try {
        const hp = require("./plugins/hyperpersonal");
        const gs = require("./library/db").gsGet(chatId);
        if (gs.personas_on) hp.updatePersonaFromMessage(userId, body, chatId);
        if (gs.mood_tracking) {
          const pos = ["great","good","love","happy","amazing","blessed","excellent","wonderful"];
          const neg = ["hate","bad","terrible","awful","angry","sad","frustrated","terrible"];
          const bl  = body.toLowerCase();
          const sent = pos.some(w=>bl.includes(w)) ? "positive" : neg.some(w=>bl.includes(w)) ? "negative" : "neutral";
          hp.updateGroupMood(chatId, sent);
        }
      } catch {}
    }

    // ── Telegram bridge forwarding ────────────────────────────────────────
    if (body && isGroup) {
      try {
        const ig = require("./plugins/integrations");
        const bridges = ig.getActiveBridges();
        const bridge = bridges.find(b => b.chatId === chatId);
        if (bridge) {
          const senderName = m?.pushName || userId?.split("@")[0] || "Unknown";
          const prefix = bridge.prefix ? `${bridge.prefix} ` : "";
          ig.sendToTelegram(bridge.botToken, bridge.tgChatId,
            `${prefix}<b>${senderName}</b>: ${body.slice(0,1000)}`
          ).catch(()=>{});
        }
      } catch {}
    }

    // Track user message count + XP
    if (isGroup) {
      try {
        xpInc(chatId, userId);
        if (!state.user_message_counts) state.user_message_counts = {};
        if (!state.user_message_counts[chatId]) state.user_message_counts[chatId] = {};
        state.user_message_counts[chatId][userId] = {
          count: ((state.user_message_counts[chatId][userId]?.count) || 0) + 1,
          last_msg: Date.now()
        };
      } catch {}
    }

    // ── Check if user is muted ────────────────────────────────────────────────
    // ── Moderation: ignore list check ───────────────────────────────────────
    try {
      const mod = require("./plugins/moderation");
      if (mod.isIgnored && mod.isIgnored(chatId, userId)) return;
    } catch {}

    if (isGroup && isMuted(chatId, userId) && !isOwner && !isDev) {
      try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
      return;
    }

    // ── Group passive enforcement ─────────────────────────────────────────────
    if (isGroup && body) {
      const gs      = gsGet(chatId);
      const bodyLow = body.toLowerCase();
      const prefix  = config.prefix;
      const isCmd   = body.startsWith(prefix);

      if (!isCmd) {
        // Gate verification
        const gateResult = await require("./plugins/welcome").handleGateMessage?.(sock, m, chatId, userId);
        if (gateResult) return;

        // Multilang passive detection
        try {
          const tools = require("./plugins/tools");
          if (tools.handlePassive) await tools.handlePassive(sock, m, chatId, userId, body);
        } catch {}

        // ── Link routing logic ─────────────────────────────────────────────────
        // Owner/dev: ALWAYS trigger downloader if it's a media link (bypass dl_enabled)
        // Others: if downloader ON → media links → downloader; other links → antilink
        //         if downloader OFF → all links → antilink (user gets informed for media links)
        if (containsLinks(body)) {
          let dl, isMediaUrl = false;
          try {
            dl = require("./plugins/downloader");
            isMediaUrl = dl.isMediaLink ? dl.isMediaLink(body) : false;
          } catch {}

          if (isMediaUrl) {
            // Pass isOwner/isDev so downloader can bypass enabled check for owner/dev
            try {
              const handled = await dl.handleMediaLink(sock, m, chatId, userId, body, { isOwner, isDev });
              if (handled) return; // downloader consumed it (or showed disabled notice)
            } catch {}
          }
          // Non-media link, or media link that wasn't consumed → fall through to antilink
        }

        // Flood guard
        if (gs.guard_on && !isOwner && !isDev) {
          const key = `${chatId}:${userId}`;
          if (!global._flood) global._flood = {};
          const now = Date.now();
          const win = (gs.guard_window || 10) * 1000;
          global._flood[key] = (global._flood[key] || []).filter(t => now - t < win);
          global._flood[key].push(now);
          if (global._flood[key].length >= 6) {
            try {
              await sock.groupParticipantsUpdate(chatId, [userId], "remove");
              await sock.sendMessage(chatId, { text: `🛡️ @${userNum} removed for flooding.`, mentions: [userId] });
            } catch {}
            return;
          }
        }

        // Anti-forward
        if (gs.antiforward_mode !== "off" && m.message?.extendedTextMessage?.contextInfo?.isForwarded) {
          const mode = gs.antiforward_mode;
          try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
          if (mode === "warn") require("./library/db").warnsAdd(chatId, userId, 1);
          if (mode === "kick" && !isOwner) try { await sock.groupParticipantsUpdate(chatId, [userId], "remove"); } catch {}
          return;
        }

        // Anti-link (handles both non-media links, and media links when downloader is off)
        if (gs.antilink_mode !== "off" && containsLinks(body) && !isOwner && !isDev) {
          const mode = gs.antilink_mode;
          try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
          if (mode === "warn") require("./library/db").warnsAdd(chatId, userId, 1);
          if (mode === "kick") try { await sock.groupParticipantsUpdate(chatId, [userId], "remove"); } catch {}
          return;
        }

        // Anti-badword
        if (gs.antibadword_mode !== "off") {
          const hit = badwordHit(chatId, bodyLow);
          if (hit && !isOwner && !isDev) {
            const mode = gs.antibadword_mode;
            try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
            if (mode === "warn") require("./library/db").warnsAdd(chatId, userId, 1);
            if (mode === "kick") try { await sock.groupParticipantsUpdate(chatId, [userId], "remove"); } catch {}
            return;
          }
        }

        // ── Anti-Bug: delete crash/exploit messages ────────────────────────
        if (gs.antibug && !isOwner && !isDev) {
          const bugStrings = ["‮","\x00","​​​","‏‏",String.fromCharCode(0x0000)];
          const hasBug = bugStrings.some(bs => (m.body||"").includes(bs)) || 
                         (m.body||"").length > 5000; // unusually long crash message
          if (hasBug) {
            try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
            return;
          }
        }

        // ── Anti-Spam: 5+ messages in 10s ──────────────────────────────────
        if (gs.antispam && !isOwner && !isDev && !isAdmin) {
          if (!global.__spamTrack) global.__spamTrack = {};
          const spKey = `${chatId}_${userId}`;
          const now = Date.now();
          if (!global.__spamTrack[spKey]) global.__spamTrack[spKey] = [];
          global.__spamTrack[spKey] = global.__spamTrack[spKey].filter(t => now-t < 10000);
          global.__spamTrack[spKey].push(now);
          if (global.__spamTrack[spKey].length >= 5) {
            try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
            muteUser(chatId, userId);
            setTimeout(() => unmuteUser(chatId, userId), 60000);
            try { await sock.sendMessage(chatId, { text: `⚠️ @${userNum} muted 1 minute for spamming.`, mentions: [userId] }); } catch {}
            global.__spamTrack[spKey] = [];
            return;
          }
        }

        // ── Anti-Tag: prevent non-admins from tagging everyone ─────────────
        if (gs.antitag && !isOwner && !isDev && !isAdmin) {
          if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 3) {
            try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
            try { await sock.sendMessage(chatId, { text: `⚠️ @${userNum} mass tagging is not allowed.`, mentions: [userId] }); } catch {}
            return;
          }
        }

        // ── Anti-Tag-Admin: prevent non-admins from tagging admins ─────────
        if (gs.antitagadmin && !isOwner && !isDev && !isAdmin) {
          try {
            const meta    = await sock.groupMetadata(chatId);
            const admins  = meta.participants.filter(p => p.admin).map(p => p.id);
            const tagged  = m.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
            const taggedAdmin = tagged.some(t => admins.some(a => a.split("@")[0].split(":")[0] === t.split("@")[0].split(":")[0]));
            if (taggedAdmin) {
              try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
              try { await sock.sendMessage(chatId, { text: `⚠️ @${userNum} you cannot tag admins.`, mentions: [userId] }); } catch {}
              return;
            }
          } catch {}
        }

        // ── Anti-Group-Mention: block @everyone/@all ──────────────────────
        if (gs.antigroupmention && !isOwner && !isDev && !isAdmin) {
          if (containsGroupMention(body)) {
            try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
            return;
          }
        }

        // ── Anti-Promote: block promotional messages ─────────────────────
        if (gs.antipromote && !isOwner && !isDev && !isAdmin) {
          const promoWords = ["join our group","check my channel","buy now","click link","limited offer","whatsapp group link","telegram channel","dm for price","free money","investment opportunity","work from home","earn daily"];
          if (promoWords.some(w => body.toLowerCase().includes(w))) {
            try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
            return;
          }
        }

        // ── Auto-React: react to messages with configured emoji ─────────────
        if (gs.autoreact_emoji && body) {
          try {
            const emojis = [...gs.autoreact_emoji];
            const emoji  = emojis.length > 1 ? emojis[Math.floor(Math.random()*emojis.length)] : emojis[0];
            if (emoji) await sock.sendMessage(chatId, { react: { text: emoji, key: m.key } });
          } catch {}
        }



        // ── Anti-NSFW
        if (gs.antinsfw && !isOwner && !isDev) {
          if (m.message?.imageMessage || m.message?.videoMessage || m.message?.documentMessage) {
            try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
            return;
          }
        }

        // Filters
        // ── Passive game answer checking ──────────────────────────────────
        if (!isCmd && body) {
          try {
            const st    = getState();
            const games = st.active_games || {};
            const bodyL = body.toLowerCase().trim();
            const mathKey   = chatId + "_math";
            const numKey    = chatId + "_numguess";
            const emojiKey  = chatId + "_emoji";
            const scramKey  = chatId + "_scramble";
            if (games[mathKey] && Date.now()-games[mathKey].ts < 30000) {
              const ans = parseInt(body.trim());
              if (!isNaN(ans) && ans === games[mathKey].answer) {
                delete st.active_games[mathKey]; saveState();
                await sock.sendMessage(chatId,{text:"🎉 *Correct!* " + (m?.pushName||"@"+userNum) + " got it! Answer: *" + ans + "*",mentions:[userId]});
                return;
              }
            }
            if (games[numKey] && Date.now()-games[numKey].ts < 120000) {
              const guess = parseInt(body.trim());
              if (!isNaN(guess)) {
                const g = games[numKey];
                g.guesses = (g.guesses||0)+1;
                if (guess === g.answer) {
                  delete st.active_games[numKey]; saveState();
                  await sock.sendMessage(chatId,{text:"🎉 *Correct!* " + (m?.pushName||"@"+userNum) + " guessed *" + g.answer + "* in " + g.guesses + " tries!",mentions:[userId]});
                } else if (g.guesses >= 7) {
                  delete st.active_games[numKey]; saveState();
                  await sock.sendMessage(chatId,{text:"❌ Game over! The number was *" + g.answer + "*"});
                } else {
                  saveState();
                  await sock.sendMessage(chatId,{text:(guess < g.answer ? "📈 Higher!" : "📉 Lower!") + " " + (7-g.guesses) + " guesses left."});
                }
                return;
              }
            }
            if (games[emojiKey] && Date.now()-games[emojiKey].ts < 45000 && bodyL.includes(games[emojiKey].answer)) {
              const ans = games[emojiKey].answer; delete st.active_games[emojiKey]; saveState();
              await sock.sendMessage(chatId,{text:"🎉 *Correct!* " + (m?.pushName||"@"+userNum) + "! Answer: *" + ans + "*",mentions:[userId]});
              return;
            }
            if (games[scramKey] && Date.now()-games[scramKey].ts < 45000 && bodyL === games[scramKey].answer) {
              const ans = games[scramKey].answer; delete st.active_games[scramKey]; saveState();
              await sock.sendMessage(chatId,{text:"🎉 *Correct!* *" + ans + "* — Well done " + (m?.pushName||"@"+userNum) + "!",mentions:[userId]});
              return;
            }
          } catch {}
        }

        const match = filtMatch(chatId, bodyLow);
        if (match) {
          if (gs.privatenotes) {
            try { await sock.sendMessage(userId, { text: match.reply }); } catch {
              await sock.sendMessage(chatId, { text: match.reply }, { quoted: m });
            }
          } else {
            const sent = await sock.sendMessage(chatId, { text: match.reply }, { quoted: m });
            if (state.auto_delete_enabled && state.auto_delete_bot_messages) {
              scheduleDelete(sock, chatId, sent.key, state.auto_delete_delay || 180);
            }
          }
          return;
        }
// Menu number-reply handler (smart dashboards)
        const menuPlugin = plugins.find(p => p.name === "Menu");
        if (menuPlugin?.handleNumberReply) {
          const handled = menuPlugin.handleNumberReply(sock, m, chatId, userId, body);
          if (handled) return;
        }

        // Game message handler — Truth/Dare/Riddle
        const gamePlugin = plugins.find(p => p.name === "Games");
        if (gamePlugin?.handleGameMessage) {
          const handled = await gamePlugin.handleGameMessage(sock, m, chatId, userId, body);
          if (handled) return;
        }

        // NewGames message handler — Trivia/NumGuess/Scrabble/Blackjack
        const ngPlugin = plugins.find(p => p.name === "NewGames");
        if (ngPlugin?.handleGameMessage) {
          const handled = await ngPlugin.handleGameMessage(sock, m, chatId, userId, body);
          if (handled) return;
        }

        // WordChain message handler
        const wcPlugin = plugins.find(p => p.name === "WordChain");
        if (wcPlugin?.handleGameMessage) {
          const handled = await wcPlugin.handleGameMessage(sock, m, chatId, userId, body);
          if (handled) return;
        }
      }

    }

    // ── Research reply handler — continue research sessions ───────────────────
    try {
      if (global._researchSessions?.size > 0) {
        const rp = require("./plugins/research");
        if (rp?.handleResearchReply) {
          const handled = await rp.handleResearchReply(sock, m, chatId, userId, body);
          if (handled) return;
        }
      }
    } catch {}

    // ── EasyPosterX wizard ────────────────────────────────────────────────────
    try {
      if (global._epxSessions?.[userId]) {
        const ep = require("./plugins/easyposterx");
        if (ep?.handleEpxWizard) {
          const handled = await ep.handleEpxWizard(sock, m, userId, chatId, body);
          if (handled) return;
        }
      }
    } catch {}

    // ── NSFW Scanner (auto-scan media in groups) ──────────────────────────────
    try {
      const ns = require("./plugins/nsfwscanner");
      if (ns?.handleNsfwScan) await ns.handleNsfwScan(sock, m, chatId, userId);
    } catch {}

    // ── Virus Scanner (auto-scan documents in groups) ─────────────────────────
    try {
      const vs = require("./plugins/virusscanner");
      if (vs?.handleVirusScan) await vs.handleVirusScan(sock, m, chatId, userId);
    } catch {}

    // ── Story wizard — MUST be before command parse so it catches media + plain text ──
    // Non-command messages (media, "Done", "Now", captions) would hit return; inside
    // if (!body.startsWith(prefix)) if placed below — so intercept here first.
    try {
      if (global._storyWizard && global._storyWizard[userId]) {
        const _pfx = (config && config.prefix) || "/";
        // Let real commands through (cancel, done etc handled inside wizard itself)
        const _isRealCmd = body && body.startsWith(_pfx) && body.length > _pfx.length;
        if (!_isRealCmd) {
          const sp = require("./plugins/poststory");
          if (sp?.handleStoryWizard) {
            const handled = await sp.handleStoryWizard(sock, m, userId, chatId, body);
            if (handled) return;
          }
        }
      }
    } catch (e) { console.error("[STORY_WIZARD]", e.message); }

    // ── Parse command ──────────────────────────────────────────────────────────
    const prefix = config.prefix;

    // ── Private flows (appeal/report + DM media links) ──────────────────────
    if (isPrivate) {
      // Report/appeal flow first (handles ongoing sessions)
      try {
        const reportPlugin = plugins.find(p => p.name === "Report");
        if (reportPlugin?.handlePrivate) {
          const handled = await reportPlugin.handlePrivate(sock, m, userId, body);
          if (handled) return;
        }
      } catch (e) { console.error("[REPORT_PRIVATE]", e.message); }

      // DM media link detection — runs for all non-command messages
      if (body) {
        try {
          const dl = require("./plugins/downloader");
          if (dl.isMediaLink && dl.isMediaLink(body) && dl.handleMediaLink) {
            const handled = await dl.handleMediaLink(sock, m, chatId, userId, body, { isOwner, isDev });
            if (handled) return;
          }
        } catch (e) {
        }
      }
    }

    // ── Downloader reply handler (numbered: 1=video, 2=audio) ──────────────
    try {
      const dl = require("./plugins/downloader");
      if (dl.handleReply) {
        const handled = await dl.handleReply(sock, m, chatId, userId, body);
        if (handled) return;
      }
    } catch {}

    // ── Media search reply handler (pick result, then format) ─────────────
    try {
      const ms = require("./plugins/mediasearch");
      if (ms.handleSearchReply) {
        const handled = await ms.handleSearchReply(sock, m, chatId, userId, body);
        if (handled) return;
      }
    } catch {}

    // ── Bible quiz reply handler (1-4 answers for solo + group quiz) ───────
    try {
      const bib = require("./plugins/bible");
      if (bib.handleQuizReply) {
        const handled = await bib.handleQuizReply(sock, m, chatId, userId, body);
        if (handled) return;
      }
    } catch {}

    if (!body.startsWith(prefix)) {

      // Menu number-reply for private chat too
      if (isPrivate) {
        const menuPlugin = plugins.find(p => p.name === "Menu");
        if (menuPlugin?.handleNumberReply) {
          const handled = menuPlugin.handleNumberReply(sock, m, chatId, userId, body);
          if (handled) return;
        }
      }
      // ── dlsearch trigger (no prefix needed: "dlsearch Holy Forever") ────
      const bodyLower = body.toLowerCase().trimStart();
      if (bodyLower.startsWith("dlsearch ") || bodyLower.startsWith("ytsearch ") || bodyLower.startsWith("ytplay ")) {
        try {
          const ms = require("./plugins/mediasearch");
          // Extract the query part after the keyword
          const spaceIdx = body.indexOf(" ");
          const fakeArgs = body.slice(spaceIdx + 1).trim().split(/\s+/);
          if (fakeArgs.length > 0 && fakeArgs[0]) {
            const handled = await ms.run({
              sock, m,
              command: "dlsearch",
              args: fakeArgs,
              reply: async (text) => sock.sendMessage(chatId, { text: String(text) }, { quoted: m }),
              prefix: config.prefix,
              chatId, userId,
            });
            if (handled) return;
          }
        } catch (e) { console.error("[DLSEARCH]", e.message); }
      }

      // Chatbot handler (no prefix needed for greeting/active convos)
      const chatPlugin = plugins.find(p => p.name === "Chatbot");
      if (chatPlugin?.handleMessage) {
        let isAdmin = isGroup ? await isGroupAdmin(sock, chatId, userId) : false;
    // Sudo users get admin-level permissions
    if (!isAdmin && isGroup) {
      try {
        const mod = require("./plugins/moderation");
        if (mod.isSudo && mod.isSudo(chatId, userId)) isAdmin = true;
      } catch {}
    }
    // Admin delegation check
    if (!isAdmin && isGroup) {
      try {
        const ap = require("./plugins/adminpowers");
        if (ap.getDelegation) {
          const d = ap.getDelegation(chatId);
          const rawCmd2 = body?.slice(config.prefix?.length||1).trim().split(/\s+/)[0]?.toLowerCase() || "";
          if (d[userId]?.includes("*") || d[userId]?.includes(rawCmd2)) isAdmin = true;
        }
      } catch {}
    }
        await chatPlugin.handleMessage({
          sock, m, chatId, userId, text: body,
          isGroupChat: isGroup, sender: m?.pushName || userNum
        });
      }
      return;
    }

    const rawCmd   = body.slice(prefix.length).trim();
    let   parts    = rawCmd.split(/\s+/);
    let   command  = parts[0].toLowerCase();
    let   args     = parts.slice(1);
    let   fullArgs = rawCmd.slice(command.length).trim();

    // ── Shortcut resolver — expand aliases before command lookup ──────────
    try {
      const scPlugin = require("./plugins/shortcuts");
      const resolved = scPlugin.resolveShortcut(command);
      if (resolved) {
        command  = resolved.toLowerCase();
        fullArgs = [command, ...args].slice(1).join(" ") || fullArgs;
        // args stay the same — shortcut just remaps the command name
      }
    } catch {}

    // Quoted message extraction
    const quotedMsg = m.quoted ? {
      sender: m.quoted?.sender || m.quoted?.key?.participant,
      body:   m.quoted?.text || m.quoted?.caption || m.quoted?.body || "",
      key:    m.quoted?.key
    } : null;

    // Mentioned JIDs
    const mentionedJid = m.mentionedJid || m.msg?.contextInfo?.mentionedJid || [];

    // ═══════════════════════════════════════════════════════════════════════
   

    // ── BOT MODE GATE ─────────────────────────────────────────────────────────
    // Checks bot_mode before allowing any command through
    {
      let _botMode = "public";
      try {
        const _mFS   = require("fs"), _mPT = require("path");
        const _mData = JSON.parse(_mFS.readFileSync(_mPT.join(__dirname,"database","bot_settings.json"),"utf8"));
        _botMode = (_mData.bot_mode || "public").toLowerCase();
      } catch {}

      const _isOwnerOrDev = isOwner || isDev;

      if (_botMode === "private" && !_isOwnerOrDev) {
        // Private mode: only owner/dev gets responses — everyone else silently ignored
        return;
      }

      if (_botMode === "inbox" && !isPrivate && !_isOwnerOrDev) {
        // Inbox mode: only DMs (private chats) get responses, groups are silent
        return;
      }
    }

        // Resolve plugin
    const plugin = commandIndex[command];
    if (!plugin) {
      // Command suggestion — find closest matching commands
      try {
        const allCmds = Object.keys(commandIndex);
        const suggestions = allCmds.filter(c => {
          if (c === command) return false;
          // Starts with same letters
          if (c.startsWith(command.slice(0,3))) return true;
          // Contains the typed string
          if (c.includes(command) || command.includes(c.slice(0,4))) return true;
          // Levenshtein distance <= 2
          if (c.length < 3 || command.length < 3) return false;
          let s = 0;
          const shorter = command.length < c.length ? command : c;
          const longer  = command.length < c.length ? c : command;
          for (let i = 0; i < shorter.length; i++) { if (shorter[i] === longer[i]) s++; }
          return (shorter.length - s) <= 2;
        }).slice(0, 3);

        if (suggestions.length) {
          const pfxStr = config.prefix || "/";
          await sock.sendMessage(chatId, {
            text: "❓ Unknown command *" + pfxStr + command + "*\n\nDid you mean:\n" + suggestions.map(s => "  • *" + pfxStr + s + "*").join("\n") + "\n\n_Type *" + pfxStr + "menu* to see all commands_",
          }, { quoted: m });
        } else {
          // No suggestions — send helpful fallback (especially important in DM)
          const pfxStr = config.prefix || "/";
          await sock.sendMessage(chatId, {
            text: "❓ Unknown command *" + pfxStr + command + "*\n\n" +
              "Type *" + pfxStr + "menu* to see all available commands.\n" +
              "Type *" + pfxStr + "cmdsearch <keyword>* to search for a command.",
          }, { quoted: m });
        }
      } catch {}
      return;
    }

    // Check if group/private required
    let isAdmin = isGroup ? await isGroupAdmin(sock, chatId, userId) : false;
    // Sudo users get admin-level permissions
    if (!isAdmin && isGroup) {
      try {
        const mod = require("./plugins/moderation");
        if (mod.isSudo && mod.isSudo(chatId, userId)) isAdmin = true;
      } catch {}
    }
    // Admin delegation check
    if (!isAdmin && isGroup) {
      try {
        const ap = require("./plugins/adminpowers");
        if (ap.getDelegation) {
          const d = ap.getDelegation(chatId);
          const rawCmd2 = body?.slice(config.prefix?.length||1).trim().split(/\s+/)[0]?.toLowerCase() || "";
          if (d[userId]?.includes("*") || d[userId]?.includes(rawCmd2)) isAdmin = true;
        }
      } catch {}
    }

    // Reply helper with auto-delete
    // For @lid private chats, normalize to @s.whatsapp.net for reliable delivery
    const replyJid = (isPrivate && chatId.endsWith("@lid"))
      ? (userId.endsWith("@s.whatsapp.net") ? userId : chatId)
      : chatId;
    const reply = async (text) => {
      // Apply watermark if configured
      let displayText = String(text);
      try {
        const _setsF = require("fs").readFileSync(require("path").join(__dirname,"database","bot_settings.json"),"utf8");
        const _sets  = JSON.parse(_setsF);
        if (_sets.watermark && !displayText.includes(_sets.watermark)) {
          displayText = displayText + "\n\n_" + _sets.watermark + "_";
        }
      } catch {}
      const sent = await sock.sendMessage(replyJid, { text: displayText }, { quoted: m });
      const st   = getState();
      if (st.auto_delete_enabled && st.auto_delete_bot_messages) {
        const inGroup   = chatId.endsWith("@g.us");
        const inPrivate = chatId.endsWith("@s.whatsapp.net");
        if ((inGroup && st.auto_delete_groups) || (inPrivate && st.auto_delete_private)) {
          scheduleDelete(sock, chatId, sent?.key, st.auto_delete_delay || 180);
        }
      }
      return sent;
    };

    // ── Auto-type / auto-record: show presence before replying ─────────────
    try {
      const _presGS = isGroup ? gsGet(chatId) : {};
      if (_presGS.autotype || _presGS.autorecordtyping) {
        await sock.sendPresenceUpdate("composing", chatId);
        await new Promise(r => setTimeout(r, 600));
      } else if (_presGS.autorecord) {
        await sock.sendPresenceUpdate("recording", chatId);
        await new Promise(r => setTimeout(r, 600));
      }
    } catch {}

    // ═══════════════════════════════════════════════════════════════════════
    // JusticeTech Enforcement Gate (Signal-based — reads THIS bot's local status)
    // ═══════════════════════════════════════════════════════════════════════
    {
      // 1. BOT STATUS GATE — reads THIS bot's local status file (written by signal receiver)
      //    Dev always bypasses status gate
      if (!jts.isDev(userId)) {
        const _localStatus = jts.getLocalStatus(); // reads fresh from bot_status.json each time

        if (_localStatus === "banned") {
          // Completely silent
          return;
        }

        const _tPath2 = require("path").join(__dirname, "thumbnail", "image.jpg");

        if (_localStatus === "frozen" || _localStatus === "suspended") {
          // Always allow restart/reboot so owner can restart a frozen/suspended bot
          const _bypassCmds = ["restart", "reboot", "unfreeze", "devunfreeze", "devbotactivate"];
          if (!_bypassCmds.includes(command)) {
            const _blockMsg = jts.getBotSuspensionMessage(_localStatus);
            try {
              if (require("fs").existsSync(_tPath2)) {
                return sock.sendMessage(chatId, { image: require("fs").readFileSync(_tPath2), caption: _blockMsg }, { quoted: m });
              }
            } catch {}
            return reply(_blockMsg);
          }
        }

        if (_localStatus === "restricted") {
          const _okCmds = ["menu","help","cmdsearch","features","ping",
            "jtstatus","jtask","jtcontact","jtfaq","jtguide","ghost","ghostmode","mode"];
          if (!_okCmds.includes(command)) {
            return reply(jts.getBotSuspensionMessage("restricted"));
          }
        }
      }
    }
    // ── End JTS enforcement ─────────────────────────────────────────────────

    // ── Hide dev-only plugins from non-devs (silent) ─────────────────────────
    if (plugin.devOnly && !jts.isDev(userId)) return;

    try {
      await plugin.run({
        sock, m, args, command, chatId, userId,
        reply, isOwner, isDev, isAdmin,
        prefix, mentionedJid, quotedMsg,
        fullArgs, body,
        isGroup,
        pushName: m?.pushName || m?.name || "",
        botNumber: jidToNum(sock.user?.id || "")
      });
    } catch (e) {
      console.error(chalk.red(`[CMD ERROR] .${command}: ${e.message}`));
    }

  } catch (e) {
    console.error(chalk.red(`[MSG HANDLER] ${e.message}`));
  }
};

module.exports = messageHandler;
