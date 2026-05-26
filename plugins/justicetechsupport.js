// plugins/justicetechsupport.js — JusticeTech Support AI
// Active in JusticeTech Support group — answers questions, approves plugins
// Dev-only configuration. Invisible in menu to non-devs.
"use strict";

const fs   = require("fs");
const path = require("path");
const jts  = require("../library/justicetechsystem");
const axios = require("axios");

const ROOT           = path.join(__dirname, "..");
const SUPPORT_AI_FILE = path.join(ROOT, "database", "support_ai.json");
const REQUESTS_FILE   = path.join(ROOT, "database", "plugin_requests.json");

function getSupportAI() {
  try { return JSON.parse(fs.readFileSync(SUPPORT_AI_FILE, "utf8")); }
  catch { return { enabled: true, personality: "You are a professional JusticeTech support agent for Miss Chatra WhatsApp bot. You are knowledgeable, friendly, and helpful. Answer questions accurately about the bot's features, plugins, and installation.", knowledge: [], sticker_pack: null, voice_replies: false }; }
}
function saveSupportAI(d) { try { fs.writeFileSync(SUPPORT_AI_FILE, JSON.stringify(d, null, 2)); } catch {} }

function getRequests() {
  try { return JSON.parse(fs.readFileSync(REQUESTS_FILE, "utf8")); }
  catch { return []; }
}
function saveRequests(d) { try { fs.writeFileSync(REQUESTS_FILE, JSON.stringify(d, null, 2)); } catch {} }

// ── Support group JID (from config) ──────────────────────────────────────────
function getSupportGroupJid() {
  const cfg = jts.getConfig();
  return cfg.communities?.support_group_jid || null;
}

// ── Answer using trained knowledge + Claude API ──────────────────────────────
async function getAIAnswer(question, ai) {
  // First try exact match in knowledge base
  const q = question.toLowerCase();
  for (const entry of ai.knowledge) {
    if (q.includes(entry.q.toLowerCase().slice(0, 15)) ||
        entry.q.toLowerCase().includes(q.slice(0, 15))) {
      return entry.a;
    }
  }

  // Build knowledge context
  const knowledgeStr = ai.knowledge.length
    ? "Knowledge base:\n" + ai.knowledge.map(k => `Q: ${k.q}\nA: ${k.a}`).join("\n\n")
    : "";

  const systemPrompt = ai.personality + "\n\n" + knowledgeStr + `

Key facts about Miss Chatra Bot:
- Built by JusticeTech System, Nigeria
- WhatsApp bot using Baileys library
- Has 30+ core plugins and 370+ marketplace plugins
- Marketplace plugins require developer approval before installation
- To install plugins: join both JusticeTech groups, request in Support group
- JusticeTech Tools: https://chat.whatsapp.com/GL6GUJL5QNJEuBy9fWIssu?mode=gi_t
- JusticeTech Support: https://chat.whatsapp.com/Gyt75qFHoul3wp53IKi25v?mode=gi_t
- Bot commands start with / by default (configurable)
- Owner commands: /setbotname, /setprefix, /mode, /ban, /kick, /warn etc.
- For technical issues: share your error message or screenshot
- Bot requires Node.js and WhatsApp account to run

Always be helpful, professional, and redirect complex issues to a human developer if needed.`;

  try {
    const response = await axios.post(
      "https://api.anthropic.com/v1/messages",
      {
        model:      "claude-sonnet-4-20250514",
        max_tokens: 500,
        system:     systemPrompt,
        messages:   [{ role: "user", content: question }]
      },
      { headers: { "Content-Type": "application/json" }, timeout: 15000 }
    );
    return response.data?.content?.[0]?.text || null;
  } catch {
    return null;
  }
}

module.exports = {
  name:     "JusticeTechSupport",
  category: "dev",
  desc:     "JusticeTech Support AI — answers questions, manages plugin requests",
  hidden:   true,
  devOnly:  false, // Runs in support group — members interact with it
  command:  ["jtask", "jtpluginrequest", "jtmyplugins", "jtstatus",
             "jtfaq", "jtguide", "jtcontact", "jtdevset"],

  run: async ({ sock, m, args, command, reply, chatId, userId, prefix, isAdmin, isOwner, isDev: _isDev, quotedMsg, mentionedJid }) => {
    const pfx       = prefix || "/";
    const isDev     = jts.isDev(userId);
    const ownerNum  = jts.norm(userId);
    const cfg       = jts.getConfig();
    const comm      = cfg.communities || {};
    const ai        = getSupportAI();

    // ── /jtstatus — public bot status ────────────────────────────────────────
    if (command === "jtstatus") {
      return reply([
        "📊 *JusticeTech Bot Status*",
        "",
        "Miss Chatra WhatsApp Bot",
        "Status: 🟢 Operational",
        "Version: 1.3.5",
        "Core plugins: 30+",
        "Marketplace plugins: 370+",
        "",
        "🌐 Communities:",
        "📌 Tools & Updates: " + (comm.tools_group || "See /jtcontact"),
        "📌 Support: " + (comm.support_group || "See /jtcontact"),
        "",
        "_For issues, use /jtask <your question>_",
      ].join("\n"));
    }

    // ── /jtcontact — contact information ─────────────────────────────────────
    if (command === "jtcontact") {
      return reply([
        "📞 *JusticeTech Contact*",
        "",
        "📌 JusticeTech Tools & Updates:",
        comm.tools_group || "https://chat.whatsapp.com/GL6GUJL5QNJEuBy9fWIssu?mode=gi_t",
        "",
        "📌 JusticeTech Support:",
        comm.support_group || "https://chat.whatsapp.com/Gyt75qFHoul3wp53IKi25v?mode=gi_t",
        "",
        "🇳🇬 JusticeTech System, Nigeria",
        "_Building tools that work._",
      ].join("\n"));
    }

    // ── /jtfaq — frequently asked questions ──────────────────────────────────
    if (command === "jtfaq") {
      return reply([
        "❓ *Frequently Asked Questions*",
        "",
        "*Q: How do I install a plugin?*",
        "A: Join both JusticeTech groups, post a plugin request in Support group, then wait for developer approval.",
        "",
        "*Q: How do I change the bot prefix?*",
        "A: Type /setprefix <symbol> — e.g. /setprefix !",
        "",
        "*Q: Bot not responding — what do I do?*",
        "A: Check that bot number is saved, try restarting the bot, ensure bot is not frozen/suspended.",
        "",
        "*Q: How do I add the bot to a group?*",
        "A: Add the bot's WhatsApp number to the group as you would any member. Then promote it to admin for full features.",
        "",
        "*Q: Commands not working?*",
        "A: Type /menu to see active commands. Check /mode to ensure bot isn't in a restricted mode.",
        "",
        "_For more: /jtask <your question>_",
      ].join("\n"));
    }

    // ── /jtguide — quick start guide ─────────────────────────────────────────
    if (command === "jtguide") {
      return reply([
        "📖 *Miss Chatra Quick Start Guide*",
        "",
        "*1. Deploy the bot*",
        "   Run: node index.js",
        "   Scan the QR code with your WhatsApp",
        "",
        "*2. Set up basics*",
        "   /setbotname Miss Chatra",
        "   /setownername Your Name",
        "   /setprefix /",
        "",
        "*3. Add to a group*",
        "   Add bot number to group",
        "   Promote bot to admin",
        "",
        "*4. Enable features*",
        "   /antilink delete — block links",
        "   /antispam on — block spam",
        "   /welcome on — greet new members",
        "   /ghost on — stealth mode",
        "",
        "*5. Install marketplace plugins*",
        "   /plugin list — browse plugins",
        "   Join JusticeTech groups first (required)",
        "   Request approval, then /plugin install <id>",
        "",
        "_Need help? /jtask <question>_",
      ].join("\n"));
    }

    // ── /jtpluginrequest — formal plugin install request ─────────────────────
    if (command === "jtpluginrequest") {
      const pluginId  = args[0];
      const botNumber = args[1]?.replace(/\D/g, "") || ownerNum;
      const reason    = args.slice(2).join(" ") || "I need this plugin for my group.";

      if (!pluginId) {
        return reply([
          "📦 *Plugin Request*",
          "",
          "Usage:",
          pfx + "jtpluginrequest <plugin_id> <bot_number> <reason>",
          "",
          "Example:",
          pfx + "jtpluginrequest crypto-tracker 2348012345678 Need it for crypto updates",
          "",
          "_Make sure you have joined both JusticeTech groups first!_",
        ].join("\n"));
      }

      const requests = getRequests();
      const existing = requests.find(r => r.pluginId === pluginId && r.botNumber === botNumber && r.status === "pending");
      if (existing) return reply("You already have a pending request for *" + pluginId + "*.\n\nPlease wait for developer review.");

      const reqId = "REQ-" + Date.now().toString(36).toUpperCase();
      requests.push({
        id:        reqId,
        pluginId,
        botNumber,
        requestedBy: ownerNum,
        reason,
        status:    "pending",
        date:      new Date().toISOString(),
        chatId,
      });
      saveRequests(requests);

      // Notify all devs
      for (const devNum of jts.DEV_NUMBERS) {
        try {
          await sock.sendMessage(devNum + "@s.whatsapp.net", {
            text: [
              "🔔 *New Plugin Request*",
              "",
              "ID: " + reqId,
              "Plugin: *" + pluginId + "*",
              "Bot: +" + botNumber,
              "By: +" + ownerNum,
              "Reason: " + reason,
              "Date: " + new Date().toLocaleDateString(),
              "",
              "Approve: /devapprove " + botNumber + " " + pluginId,
              "Reject: (just ignore or notify them)",
            ].join("\n"),
          });
        } catch {}
      }

      return reply([
        "✅ *Plugin Request Submitted!*",
        "",
        "Request ID: *" + reqId + "*",
        "Plugin: " + pluginId,
        "Bot: +" + botNumber,
        "",
        "A JusticeTech developer has been notified.",
        "You will receive a WhatsApp message when approved.",
        "",
        "Typical response time: *24–48 hours*",
        "",
        "_Track your request with: " + pfx + "jtmyplugins_",
      ].join("\n"));
    }

    // ── /jtmyplugins — view your requests and approvals ──────────────────────
    if (command === "jtmyplugins") {
      const requests = getRequests();
      const mine     = requests.filter(r => r.requestedBy === ownerNum || r.botNumber === ownerNum);
      const approved = jts.getApprovals()[ownerNum] || [];
      const hasAll   = approved.includes("*ALL*");

      const lines = ["📦 *My Plugin Status*", ""];
      lines.push("Approvals: " + (hasAll ? "ALL PLUGINS ✅" : approved.length + " plugin(s)"));
      if (!hasAll && approved.length) {
        approved.slice(0, 10).forEach(p => lines.push("  ✅ " + p));
        if (approved.length > 10) lines.push("  ...+" + (approved.length - 10) + " more");
      }

      if (mine.length) {
        lines.push("", "Pending requests (" + mine.filter(r => r.status === "pending").length + "):");
        mine.slice(-5).forEach(r => {
          lines.push("  " + (r.status === "pending" ? "⏳" : r.status === "approved" ? "✅" : "❌") + " " + r.pluginId + " (" + r.id + ")");
        });
      }

      lines.push("", "_" + pfx + "jtpluginrequest <id> to request a plugin_");
      return reply(lines.join("\n"));
    }

    // ── /jtask — AI-powered question answering ────────────────────────────────
    if (command === "jtask") {
      const question = args.join(" ").trim();
      if (!question) return reply("Usage: " + pfx + "jtask <your question>\nExample: " + pfx + "jtask How do I ban a member?");

      if (!ai.enabled) {
        return reply([
          "💬 *JusticeTech Support*",
          "",
          "Our support AI is currently offline.",
          "",
          "For help:",
          "• Browse: " + pfx + "jtfaq",
          "• Quick start: " + pfx + "jtguide",
          "• Contact: " + pfx + "jtcontact",
        ].join("\n"));
      }

      // Show typing indicator
      try { await sock.sendPresenceUpdate("composing", chatId); } catch {}

      const answer = await getAIAnswer(question, ai);

      try { await sock.sendPresenceUpdate("paused", chatId); } catch {}

      if (!answer) {
        return reply([
          "💬 *Support Answer*",
          "",
          "I could not find a specific answer for:",
          "*" + question + "*",
          "",
          "Try:",
          "• " + pfx + "jtfaq — common questions",
          "• " + pfx + "jtguide — setup guide",
          "• Post in JusticeTech Support group for human support",
          comm.support_group || "",
        ].join("\n"));
      }

      return reply("💬 *JusticeTech Support*\n\n" + answer + "\n\n_" + pfx + "jtask <question> for more help_");
    }

    // ── /jtdevset — dev-only AI config (hidden from non-devs) ────────────────
    if (command === "jtdevset") {
      if (!isDev) return; // Silent
      const key   = args[0];
      const value = args.slice(1).join(" ");
      if (!key) return reply("jtdevset <key> <value>\nKeys: personality, voice_replies(true/false), support_group_jid");
      const a = getSupportAI();
      if (key === "personality") { a.personality = value; saveSupportAI(a); return reply("Personality updated."); }
      if (key === "voice_replies") { a.voice_replies = value === "true"; saveSupportAI(a); return reply("Voice replies: " + a.voice_replies); }
      if (key === "support_group_jid") {
        const c = jts.getConfig(); c.communities = c.communities || {};
        c.communities.support_group_jid = value; jts.saveConfig(c);
        return reply("Support group JID set: " + value);
      }
      return reply("Unknown key: " + key);
    }
  },

  // ── Passive AI listener for support group ───────────────────────────────────
  async passive({ sock, m, chatId, userId, body }) {
    if (!body || body.startsWith("/") || body.startsWith("!")) return;
    const ai = getSupportAI();
    if (!ai.enabled) return;

    const cfg = jts.getConfig();
    const supportJid = cfg.communities?.support_group_jid;
    if (!supportJid || chatId !== supportJid) return;

    // Only respond to questions or keywords
    const lower = body.toLowerCase();
    const triggers = ["how do i", "how to", "can the bot", "what is", "help me", "not working",
                      "error", "install plugin", "plugin request", "how does", "what command",
                      "support", "issue", "problem", "fix", "setup", "configure"];
    if (!triggers.some(t => lower.includes(t))) return;

    // Avoid responding to bot messages
    if (jts.isDev(userId)) return;

    try { await sock.sendPresenceUpdate("composing", chatId); } catch {}
    await new Promise(r => setTimeout(r, 1500));

    const answer = await getAIAnswer(body, ai);
    if (!answer) return;

    try { await sock.sendPresenceUpdate("paused", chatId); } catch {}

    // Reply as quoted
    try {
      await sock.sendMessage(chatId, {
        text: "💬 *JusticeTech AI Support*\n\n" + answer + "\n\n_For human support, ping a group admin._",
      }, { quoted: m });
    } catch {}
  },
};
