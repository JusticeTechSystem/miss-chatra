// plugins/tools.js — walink, chealth, chatsearch, language, tutorial
"use strict";

const fs   = require("fs");
const path = require("path");
const axios = require("axios");

const ROOT    = path.join(__dirname, "..");
const DB_DIR  = path.join(ROOT, "database");
const THUMB_PNG = path.join(ROOT, "thumbnail", "image.png");
const THUMB_JPG = path.join(ROOT, "thumbnail", "image.jpg");

function rj(f,fb)  { try { return JSON.parse(fs.readFileSync(f,"utf8")); } catch { return fb; } }
function wj(f,d)   { if (!fs.existsSync(path.dirname(f))) fs.mkdirSync(path.dirname(f),{recursive:true}); fs.writeFileSync(f,JSON.stringify(d,null,2)); }
function thumb()   { try { const p = fs.existsSync(THUMB_PNG) ? THUMB_PNG : THUMB_JPG; return fs.existsSync(p) ? fs.readFileSync(p) : null; } catch { return null; } }
function norm(n)   { return String(n||"").replace(/\D/g,""); }

async function card(sock, chat, text, m) {
  const img = thumb();
  if (img) { try { return await sock.sendMessage(chat, { image: img, caption: text }, { quoted: m }); } catch {} }
  return sock.sendMessage(chat, { text }, { quoted: m });
}

// Language fingerprints
const FINGERPRINTS = {
  yoruba:     ["e kaaro","e kaasan","e kaale","bawo ni","o daro","a sunmo","eku ise","jowo","ose","e se","egba mi","abi","sha","nitori"],
  igbo:       ["ndewo","kedu","bia","biko","ọ dị mma","daalu","nna","nne","onye","gwa m","chukwu","ọ bụ"],
  hausa:      ["sannu","yaya","lafiya","ina wuni","nagode","dan allah","kai","yanzu","wane ne","sai anjima","insha allah"],
  french:     ["bonjour","bonsoir","merci","s'il vous","comment","je suis","c'est","oui","non","pourquoi","bonne nuit"],
  spanish:    ["hola","buenos","gracias","por favor","cómo","sí","está","qué tal","buenas","hasta luego"],
  portuguese: ["olá","bom dia","obrigado","obrigada","por favor","como está","tudo bem","sim","não"],
  arabic:     ["مرحبا","السلام","كيف","شكرا","من فضلك","إن شاء الله","الحمد لله","اهلا"],
  german:     ["hallo","guten morgen","danke","bitte","wie geht","ja","nein","auf wiedersehen"],
  pidgin:     ["how now","how far","wetin","na so","make we","abeg","oya","ehen","chai","shey","dem say","no wahala"],
};

const LANG_FILE = path.join(DB_DIR, "multilang.json");
const TUTORIAL_FILE = path.join(DB_DIR, "tutorials.json");

function getLangSettings() { return rj(LANG_FILE, { enabled: false, replies: {}, notify: true }); }
function saveLangSettings(d) { wj(LANG_FILE, d); }
function detectLang(text) {
  const lower = (text||"").toLowerCase();
  let best = null, bestScore = 0;
  for (const [lang, kws] of Object.entries(FINGERPRINTS)) {
    const score = kws.filter(kw => lower.includes(kw)).length;
    if (score > bestScore) { bestScore = score; best = lang; }
  }
  return bestScore >= 1 ? best : null;
}

module.exports = {
  name: "Tools",
  category: "tools",
  command: [
    "walink","waqr",
    "chealth",
    "chatsearch","msearch","find",
    "lang","language","multilang",
    "tutorial","tut","tutorials"
  ],

  // Passive multilang handler — called from message.js
  handlePassive: async (sock, m, chatId, userId, body) => {
    try {
      const cfg = getLangSettings();
      if (!cfg.enabled || !body) return;
      const lang = detectLang(body);
      if (!lang || lang === "english") return;
      const selfNum = (sock?.user?.id||"").split(":")[0].split("@")[0].replace(/\D/g,"");
      const selfJid = selfNum ? `${selfNum}@s.whatsapp.net` : "";
      // Notify owner
      if (cfg.notify && selfJid) {
        const userName = m.pushName || userId.split("@")[0];
        await sock.sendMessage(selfJid, { text: `🌍 *Language Detected*\n\n👤 ${userName}\n🗣️ Language: *${lang.charAt(0).toUpperCase()+lang.slice(1)}*\n💬 "${body.slice(0,80)}"` });
      }
      // Auto-reply if set
      if (cfg.replies[lang]) {
        await sock.sendMessage(chatId, { text: cfg.replies[lang] }, { quoted: m });
      }
    } catch {}
  },

  run: async ({ sock, m, command, args, reply, isOwner, isDev, prefix, chatId, userId }) => {
    const pfx  = prefix || "/";
    const chat = chatId || m?.chat;
    const self = (sock?.user?.id||"").split(":")[0].split("@")[0].replace(/\D/g,"");

    // ── /walink ──────────────────────────────────────────────────────────────
    if (command === "walink") {
      if (!isOwner && !isDev) return reply("🔒 Owner only.");
      const sub = (args[0]||"").toLowerCase();
      const rest = args.slice(1).join(" ").trim();

      if (!sub || sub === "me") {
        const link = `https://wa.me/${self}`;
        return card(sock, chat, `╔═══════════════════════════════════╗\n  🔗 *Your WhatsApp Link*\n╚═══════════════════════════════════╝\n\n  📱 Number : +${self}\n  🔗 Link   : ${link}\n\n  Share this link for people to message you.\n\n  ${pfx}walink qr     — QR code instructions\n  ${pfx}walink <num>  — link for another number`, m);
      }

      if (sub === "group") {
        if (!rest) return reply(`Usage: ${pfx}walink group <group name>`);
        let groups; try { groups = Object.values(await sock.groupFetchAllParticipating()||{}); } catch { groups = []; }
        const g = groups.find(g => g.subject?.toLowerCase() === rest.toLowerCase()) || groups.find(g => g.subject?.toLowerCase().includes(rest.toLowerCase()));
        if (!g) return reply(`❌ No group matching "${rest}"`);
        try {
          const code = await sock.groupInviteCode(g.id);
          return card(sock, chat, `╔═══════════════════════════════════╗\n  🔗 *Group Invite Link*\n╚═══════════════════════════════════╝\n\n  👥 Group  : *${g.subject}*\n  👤 Members: ${(g.participants||[]).length}\n  🔗 Link   : https://chat.whatsapp.com/${code}`, m);
        } catch { return reply(`❌ Could not get invite link. Make sure bot is admin in the group.`); }
      }

      if (sub === "qr") {
        const target = rest.toLowerCase() === "me" || !rest ? self : norm(rest);
        const link = `https://wa.me/${target}`;
        return card(sock, chat, `╔═══════════════════════════════════╗\n  📱 *WA Link & QR*\n╚═══════════════════════════════════╝\n\n  📞 Number : +${target}\n  🔗 Link   : ${link}\n  📷 QR URL : https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(link)}\n\n  Open the QR URL in a browser to get the QR image.`, m);
      }

      const num = norm(sub) || norm(args[0]||"");
      if (!num || num.length < 7) return reply(`╔═══════════════════════════════════╗\n  🔗 *WhatsApp Link Generator*\n╚═══════════════════════════════════╝\n\n  ${pfx}walink me                 — your link\n  ${pfx}walink +2349012345678     — link for number\n  ${pfx}walink +234901234 Hi      — with pre-filled text\n  ${pfx}walink group <name>       — group invite\n  ${pfx}walink qr +2349012345678  — QR code`);
      const msgPart = rest ? `?text=${encodeURIComponent(rest)}` : "";
      return card(sock, chat, `╔═══════════════════════════════════╗\n  🔗 *WhatsApp Link*\n╚═══════════════════════════════════╝\n\n  📞 Number : +${num}\n  🔗 Link   : https://wa.me/${num}${msgPart}${rest ? `\n  💬 Message: "${rest}"` : ""}`, m);
    }

    // ── /chealth ─────────────────────────────────────────────────────────────
    if (command === "chealth") {
      if (!isOwner && !isDev) return reply("🔒 Owner only.");
      await reply("⏳ Checking contact health in this chat...");
      try {
        const meta = await sock.groupMetadata(chat);
        const participants = meta.participants || [];
        const noName = participants.filter(p => !p.id).length;
        const total  = participants.length;
        const admins = participants.filter(p => p.admin).length;
        return card(sock, chat, [
          `╔════════════════════════════════════╗`,
          `🏥 *Contact Health Report*`,
          `╠════════════════════════════════════╣`,
          ``,
          `  👥 Total Members : ${total}`,
          `  🛡️ Admins        : ${admins}`,
          `  📱 Regular       : ${total - admins}`,
          ``,
          `╠════════════════════════════════════╣`,
          `  ✅ Group is healthy!`,
          `╚════════════════════════════════════╝`,
        ].join("\n"), m);
      } catch {
        return reply("ℹ️ Use this command in a group.");
      }
    }

    // ── /chatsearch ───────────────────────────────────────────────────────────
    if (["chatsearch"].includes(command)) {
      const query = args.join(" ").trim();
      if (!query) return reply(`🔍 *Chat Search*\n\nUsage: ${pfx}chatsearch <keyword>\n\nSearches through message history in this chat.`);
      // Search in-memory store
      const idx   = global.__MSG_INDEX || [];
      const lower = query.toLowerCase();
      const results = idx.filter(e => e.jid === chat && (e.text||"").toLowerCase().includes(lower)).slice(0, 10);
      if (!results.length) return reply(`🔍 No messages found containing "${query}"\n\n_Message history is stored in memory and cleared on restart._`);
      const lines = results.map((r,i) => `${i+1}. [${new Date(r.ts*1000).toLocaleTimeString()}] ${r.text?.slice(0,60)}...`).join("\n");
      return reply(`🔍 *Search: "${query}"*\n\nFound ${results.length} result(s):\n\n${lines}`);
    }

    // ── /lang ──────────────────────────────────────────────────────────────────
    if (["lang"].includes(command)) {
      const cfg = getLangSettings();
      const sub = (args[0]||"").toLowerCase();
      const rest = args.slice(1).join(" ").trim();

      if (!sub || sub === "status") {
        const replyList = Object.entries(cfg.replies).map(([l,r]) => `  • ${l}: "${r.slice(0,30)}"`).join("\n") || "  None set";
        return card(sock, chat, [
          `╔════════════════════════════════════╗`,
          `🌍 *Multi-Language Settings*`,
          `╠════════════════════════════════════╣`,
          ``,
          `  Status  : ${cfg.enabled ? "✅ Enabled" : "❌ Disabled"}`,
          `  Notify  : ${cfg.notify ? "✅ On" : "❌ Off"}`,
          ``,
          `  *Auto-Replies:*`,
          replyList,
          ``,
          `╠════════════════════════════════════╣`,
          `  ${pfx}lang on/off         — toggle detection`,
          `  ${pfx}lang set yoruba "E kaaro!"`,
          `  ${pfx}lang remove yoruba`,
          `  ${pfx}lang notify on/off  — toggle notifications`,
          `  ${pfx}lang test "E kaaro" — test detection`,
          `  Supported: yoruba igbo hausa french spanish`,
          `             portuguese arabic german pidgin`,
          `╚════════════════════════════════════╝`,
        ].join("\n"), m);
      }
      if (sub === "on")  { cfg.enabled = true;  saveLangSettings(cfg); return reply("✅ Language detection enabled."); }
      if (sub === "off") { cfg.enabled = false; saveLangSettings(cfg); return reply("✅ Language detection disabled."); }
      if (sub === "notify") {
        const on = (args[1]||"").toLowerCase() === "on";
        cfg.notify = on; saveLangSettings(cfg);
        return reply(`✅ Language notifications: ${on ? "on" : "off"}`);
      }
      if (sub === "set") {
        const lang = (args[1]||"").toLowerCase();
        const replyText = args.slice(2).join(" ").replace(/^["']|["']$/g,"");
        if (!lang || !replyText) return reply(`Usage: ${pfx}lang set <language> "<reply text>"`);
        cfg.replies[lang] = replyText; saveLangSettings(cfg);
        return reply(`✅ Auto-reply set for *${lang}*: "${replyText}"`);
      }
      if (sub === "remove") {
        const lang = (args[1]||"").toLowerCase();
        if (cfg.replies[lang]) { delete cfg.replies[lang]; saveLangSettings(cfg); return reply(`✅ Removed auto-reply for *${lang}*.`); }
        return reply(`❌ No auto-reply set for "${lang}".`);
      }
      if (sub === "test") {
        const testText = args.slice(1).join(" ");
        const detected = detectLang(testText);
        return reply(`🔍 *Language Detection Test*\n\nText: "${testText}"\nDetected: *${detected || "English / Unknown"}*`);
      }
      if (sub === "list") {
        return reply(`🌍 *Supported Languages:*\n\n${Object.keys(FINGERPRINTS).map(l => `• ${l}`).join("\n")}`);
      }
    }

    // ── /tutorial ─────────────────────────────────────────────────────────────
    if (["tutorial"].includes(command)) {
      const sub = (args[0]||"").toLowerCase();
      const TUTORIALS = {
        antilink: `📖 *Tutorial: Anti-Link*\n\n1. Go to the group\n2. Send: /antilink on\n   (turns on delete mode)\n3. Or: /antilink warn — warns user\n4. Or: /antilink kick — removes user\n5. Turn off: /antilink off`,
        chatbot:  `📖 *Tutorial: Chatbot*\n\n1. Enable: /chatbot on\n2. People can now talk to Miss Chatra\n3. Train her: /trainme nickname | John\n4. Deep analysis: /deepthink <topic>\n5. Disable: /chatbot off`,
        welcome:  `📖 *Tutorial: Welcome*\n\n1. Enable: /welcome on\n2. Custom message: /setwelcome Welcome {name}!\n3. Variables: {name} {number} {group}\n4. Goodbye: /goodbye on\n5. Gate verification: /gate on`,
        xp:       `📖 *Tutorial: XP System*\n\n1. Members earn XP automatically by chatting\n2. Check rank: /rank\n3. Leaderboard: /top10\n4. 5 messages = 1 XP, 5 XP = 1 level`,
        menu:     `📖 *Tutorial: Menu*\n\n1. See all commands: /menu\n2. Change theme: /menustyle\n3. Pick theme 1-10: classic full menus\n4. Pick theme 11-20: smart dashboards\n5. Pin theme: /menustyle 5`,
      };
      const topics = Object.keys(TUTORIALS);
      if (!sub || sub === "list") {
        return reply(`📚 *Miss Chatra Tutorials*\n\n${topics.map((t,i) => `${i+1}. ${t}`).join("\n")}\n\nUsage: ${pfx}tutorial <topic>\nExample: ${pfx}tutorial antilink`);
      }
      if (TUTORIALS[sub]) return reply(TUTORIALS[sub]);
      return reply(`❌ Tutorial not found: "${sub}"\n\nAvailable: ${topics.join(", ")}\n\nUsage: ${pfx}tutorial <topic>`);
    }
  }
};
