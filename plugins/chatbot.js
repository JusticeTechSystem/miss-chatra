// plugins/chatbot.js — Miss Chatra AI Chatbot
"use strict";

const { missChatra, generateTTS, startConversation, updateContext, getContext,
        isConversationActive, endConversation, isConversationIgnored, setConversationIgnored,
        addCustomTraining, removeCustomTraining, getCustomTraining,
        addUserTraining, removeUserTraining, getUserTraining, clearUserTraining, getTraining } = require("../library/chatbot");
const { getState, saveState } = require("../library/state");
const { jidToNum, isGroup } = require("../library/helpers");
const { gsGet } = require("../library/db");
const config = require("../settings/config");

module.exports = {
  name: "Chatbot",
  category: "ai",
  desc: "Miss Chatra AI chatbot, training and conversation management",
  command: ["chatra", "deepthink", "chatbot", "endchat", "trainme", "mytraining", "forgetme",
            "trainchatbot", "addcustom", "removecustom", "listcustom", "chatbotmemory",
            "clearchatbotmemory", "chatbotstatus"],
  ownerOnly: false,

  // ── Main message handler (not command — called by message.js for all messages)
  handleMessage: async ({ sock, m, chatId, userId, text, isGroupChat, sender }) => {
    const state    = getState();
    if (isGroupChat) {
      // In groups: only active if chatbot was turned on in that group
      const gs = gsGet(chatId);
      if (!gs.chatbot_on) return false;
    } else {
      // In DMs: enabled by default unless explicitly disabled
      // state.chatbot_dm_enabled = undefined/null means ENABLED (opt-out not opt-in)
      if (state.chatbot_dm_enabled === false) return false;
    }

    const msgLower = (text || "").toLowerCase().trim();
    const active   = isConversationActive(chatId, userId);

    // Trigger words — match anywhere in message
    const GREETINGS  = ["hi","hello","hey","howdy","sup","what's up","good morning",
                        "good afternoon","good evening","good night","yo","hiya",
                        "hello miss chatra","hey chatra","hi chatra","miss chatra",
                        "chatra","morning","afternoon","evening","how are you",
                        "how r u","how r you","how are u","wassup","watsup","wazup"];
    const QUESTIONS  = ["who are you","what are you","tell me about yourself",
                        "what can you do","what do you do","help me","assist me"];

    const isGreeting = GREETINGS.some(g => {
      // Exact match (standalone word)
      if (msgLower.trim() === g) return true;
      // Starts with it followed by space/punctuation (beginning of statement)
      if (msgLower.startsWith(g + " ") || msgLower.startsWith(g + ",") ||
          msgLower.startsWith(g + "!") || msgLower.startsWith(g + "?")) return true;
      // Ends with it (end of statement): "what's the weather chatra"
      if (msgLower.endsWith(" " + g) || msgLower.endsWith("," + g) ||
          msgLower.endsWith("!" + g) || msgLower.endsWith("?" + g) ||
          msgLower.endsWith(g + "?") || msgLower.endsWith(g + "!") ||
          msgLower.endsWith(g + ".")) return true;
      // For longer phrases like "miss chatra" — only at start or end, not buried
      if (g.length > 4) {
        const escaped = g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
        // start: "chatra can you..." or "miss chatra tell me..."
        const atStart = new RegExp("^" + escaped + "[\\s,!?]", "i");
        // end: "...tell me chatra" or "...help miss chatra"
        const atEnd = new RegExp("[\\s,!?]" + escaped + "[.!?\\s]*$", "i");
        return atStart.test(msgLower) || atEnd.test(msgLower);
      }
      return false;
    });

    const isQuestion = QUESTIONS.some(q => msgLower.includes(q));

    // Also trigger if replying directly to bot's message
    const isReplyToBot = m?.quoted?.fromMe === true || m?.quoted?.key?.fromMe === true;

    // Also trigger if bot is @mentioned
    const isMentioned = m?.mentionedJid?.some?.(jid =>
      jid === sock?.user?.id ||
      jid?.split("@")[0]?.split(":")?.[0] === sock?.user?.id?.split("@")[0]?.split(":")?.[0]
    ) || false;

    if (!active && !isGreeting && !isQuestion && !isReplyToBot && !isMentioned) return false;
    if (isConversationIgnored(chatId, userId)) return false;

    if (!active) startConversation(chatId, userId);

    const context = getContext(chatId, userId);
    const pushName = m?.pushName || sender || "";

    const response = await missChatra(text, { userId, context, username: jidToNum(userId), firstName: pushName });
    if (!response) return false;

    updateContext(chatId, userId, text, response);

    await sock.sendMessage(chatId, { text: response }, { quoted: m });

    // TTS voice note
    if (state.auto_delete_enabled) {
      const buf = await generateTTS(response);
      if (buf) {
        await sock.sendMessage(chatId, {
          audio: buf,
          mimetype: "audio/ogg; codecs=opus",
          pttForward: true
        }, { quoted: m });
      }
    }

    return true;
  },

  run: async ({ sock, m, args, command, chatId, userId, reply, isOwner, isDev, isAdmin, prefix }) => {
    const state = getState();

    // ── .chatra (AI reply) ────────────────────────────────────────────────────
    if (command === "chatra") {
      const q = args.join(" ").trim();
      if (!q) return reply("💬 Say something after .chatra\n\nExample: /chatra how are you?");
      if (!isConversationActive(chatId, userId)) startConversation(chatId, userId);
      const context  = getContext(chatId, userId);
      const response = await missChatra(q, { userId, context, firstName: m?.pushName });
      if (!response) return reply("❌ AI is currently unavailable.");
      updateContext(chatId, userId, q, response);
      await sock.sendMessage(chatId, { text: response }, { quoted: m });
      const buf = await generateTTS(response);
      if (buf) await sock.sendMessage(chatId, { audio: buf, mimetype: "audio/ogg; codecs=opus", pttForward: true }, { quoted: m });
      return;
    }

    // ── .deepthink ────────────────────────────────────────────────────────────
    if (command === "deepthink") {
      const q = args.join(" ").trim();
      if (!q) return reply("🧠 *DeepThink Mode*\n\nUsage: /deepthink <topic or question>\n\nExample: /deepthink explain quantum computing");
      await reply("🧠 *DeepThink activated...* Processing detailed analysis...");
      const context  = getContext(chatId, userId);
      const response = await missChatra(q, { userId, context, firstName: m?.pushName, deepThink: true });
      if (!response) return reply("❌ DeepThink is currently unavailable.");
      updateContext(chatId, userId, q, response);
      await sock.sendMessage(chatId, { text: `🧠 *DeepThink Analysis*\n\n${response}` }, { quoted: m });
      const buf = await generateTTS(response.slice(0, 500));
      if (buf) await sock.sendMessage(chatId, { audio: buf, mimetype: "audio/ogg; codecs=opus", pttForward: true }, { quoted: m });
      return;
    }

    // ── .endchat ──────────────────────────────────────────────────────────────
    if (command === "endchat") {
      if (isConversationActive(chatId, userId)) {
        endConversation(chatId, userId);
        return reply("👋 Conversation ended. Feel free to start a new one anytime.");
      }
      return reply("ℹ️ No active conversation to end.");
    }

    // ── .chatbot on/off ───────────────────────────────────────────────────────
    if (command === "chatbot") {
      if (!isAdmin && !isOwner && !isDev) return reply(config.message.admin);
      const sub = (args[0] || "").toLowerCase();
      if (sub === "on") {
        if (isGroup(chatId)) { require("../library/db").gsSet(chatId, { chatbot_on: 1 }); }
        else { state.chatbot_dm_enabled = true; } saveState();
        return reply("✅ Chatbot enabled for " + (isGroup(chatId) ? "this group" : "DMs") + ".");
      }
      if (sub === "off") {
        if (isGroup(chatId)) { require("../library/db").gsSet(chatId, { chatbot_on: 0 }); }
        else { state.chatbot_dm_enabled = false; } saveState();
        return reply("✅ Chatbot disabled for " + (isGroup(chatId) ? "this group" : "DMs") + ".");
      }
      if (sub === "dmon") {
        state.chatbot_dm_enabled = true; saveState();
        return reply("✅ Chatbot enabled for private DMs.");
      }
      if (sub === "dmoff") {
        state.chatbot_dm_enabled = false; saveState();
        return reply("✅ Chatbot disabled for private DMs.");
      }
      const gs = isGroup(chatId) ? gsGet(chatId) : null;
      const on = isGroup(chatId) ? !!gsGet(chatId).chatbot_on : (state.chatbot_dm_enabled !== false);
      const dmOn = (state.chatbot_dm_enabled !== false);
      return reply([
        `🤖 *Chatbot Status*`,
        ``,
        isGroup(chatId) ? `Group: ${on ? "✅ Enabled" : "❌ Disabled"}` : `DM: ${dmOn ? "✅ Enabled" : "❌ Disabled"}`,
        ``,
        `${prefix}chatbot on — Enable chatbot`,
        `${prefix}chatbot off — Disable chatbot`,
        `${prefix}chatbot dmon — Enable in DMs`,
        `${prefix}chatbot dmoff — Disable in DMs`,
      ].join("\n"));
    }

    // ── .chatbotstatus ────────────────────────────────────────────────────────
    if (command === "chatbotstatus") {
      const training = getTraining();
      const lines = [
        `🤖 *Miss Chatra Status*`,
        ``,
        `Name: ${training.name || config.botName}`,
        `Developer: ${training.developer || config.developerName}`,
        `Company: ${training.company || config.companyName}`,
        `Location: ${training.company_location || config.companyLocation}`,
        `Custom Training Keys: ${Object.keys(getCustomTraining()).length}`,
        ``,
        `Chatbot: ${state.chatbot_enabled ? "✅ On" : "❌ Off"}`
      ];
      return reply(lines.join("\n"));
    }

    // ── .trainme key | value ──────────────────────────────────────────────────
    if (command === "trainme") {
      const full = args.join(" ").trim();
      const sep  = full.indexOf("|");
      if (sep < 0) return reply(`📝 *TrainMe* — Teach Miss Chatra about you\n\nUsage: /trainme key | value\n\nExample:\n.trainme nickname | Champ\n.trainme profession | Software Engineer`);
      const key = full.slice(0, sep).trim().toLowerCase().replace(/\s+/g, "_");
      const val = full.slice(sep+1).trim();
      if (!key || !val) return reply("❌ Invalid format. Use: .trainme key | value");
      addUserTraining(userId, key, val);
      return reply(`✅ Trained! Miss Chatra now knows:\n*${key}* → ${val}`);
    }

    // ── .mytraining ───────────────────────────────────────────────────────────
    if (command === "mytraining") {
      const training = getUserTraining(userId);
      const keys = Object.keys(training);
      if (!keys.length) return reply("ℹ️ You haven't trained Miss Chatra with any personal info yet.\n\nUse .trainme key | value to start.");
      const lines = [`📚 *Your Training Data*\n`];
      for (const k of keys) lines.push(`• *${k}*: ${training[k]}`);
      return reply(lines.join("\n"));
    }

    // ── .forgetme ─────────────────────────────────────────────────────────────
    if (command === "forgetme") {
      clearUserTraining(userId);
      endConversation(chatId, userId);
      return reply("✅ Done! I've forgotten everything about you. Fresh start 🌱");
    }

    // ── .trainchatbot (admin/owner) ───────────────────────────────────────────
    if (command === "trainchatbot") {
      if (!isOwner && !isDev) return reply(config.message.owner);
      const full = args.join(" ").trim();
      const sep  = full.indexOf("|");
      if (sep < 0) {
        const training = getTraining();
        return reply([
          `🎓 *Chatbot Training*`,``,
          `Name: ${training.name}`,
          `Developer: ${training.developer}`,
          `Company: ${training.company}`,``,
          `Usage: /trainchatbot key | value`,
          `Example: /trainchatbot name | Aria`
        ].join("\n"));
      }
      const key = full.slice(0, sep).trim().toLowerCase();
      const val = full.slice(sep+1).trim();
      const t   = getState().chatbot_training || {};
      t[key] = val;
      getState().chatbot_training = t;
      saveState();
      return reply(`✅ Chatbot trained: *${key}* → ${val}`);
    }

    // ── .addcustom key | value ────────────────────────────────────────────────
    if (command === "addcustom") {
      if (!isOwner && !isDev) return reply(config.message.owner);
      const full = args.join(" ").trim();
      const sep  = full.indexOf("|");
      if (sep < 0) return reply("Usage: /addcustom key | value");
      const key = full.slice(0, sep).trim().toLowerCase().replace(/\s+/g, "_");
      const val = full.slice(sep+1).trim();
      if (!key || !val) return reply("❌ Invalid format.");
      addCustomTraining(key, val);
      return reply(`✅ Custom training added:\n*${key}* → ${val}`);
    }

    // ── .removecustom ─────────────────────────────────────────────────────────
    if (command === "removecustom") {
      if (!isOwner && !isDev) return reply(config.message.owner);
      const key = args.join(" ").trim().toLowerCase().replace(/\s+/g, "_");
      if (!key) return reply("Usage: /removecustom key");
      const ok = removeCustomTraining(key);
      return reply(ok ? `✅ Removed: *${key}*` : `❌ Key not found: *${key}*`);
    }

    // ── .listcustom ───────────────────────────────────────────────────────────
    if (command === "listcustom") {
      if (!isOwner && !isDev) return reply(config.message.owner);
      const ct = getCustomTraining();
      const keys = Object.keys(ct);
      if (!keys.length) return reply("ℹ️ No custom training data yet.\n\nUse .addcustom key | value");
      const lines = [`📋 *Custom Training Data*\n`];
      for (const k of keys) lines.push(`• *${k}*: ${ct[k]}`);
      return reply(lines.join("\n"));
    }

    // ── .chatbotmemory ────────────────────────────────────────────────────────
    if (command === "chatbotmemory") {
      const context = getContext(chatId, userId);
      if (!context.length) return reply("ℹ️ No active conversation memory.");
      const lines = [`🧠 *Conversation Memory (last ${context.length} messages)*\n`];
      for (const msg of context.slice(-10)) {
        lines.push(`${msg.role === "user" ? "👤" : "🤖"} ${msg.content.slice(0, 80)}${msg.content.length > 80 ? "..." : ""}`);
      }
      return reply(lines.join("\n"));
    }

    // ── .clearchatbotmemory ───────────────────────────────────────────────────
    if (command === "clearchatbotmemory") {
      endConversation(chatId, userId);
      return reply("✅ Conversation memory cleared.");
    }
  }
};
