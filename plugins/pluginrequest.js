// plugins/pluginrequest.js — Plugin Request System v2
// RULE: Only the DEV's bot handles requests in JusticeTech Support group
// Other bots in the group stay completely silent — no interference
"use strict";

const fs   = require("fs");
const path = require("path");
const jts  = require("../library/justicetechsystem");

const DB = path.join(__dirname, "..", "database", "plugin_requests.json");

function getRequests() {
  try { return JSON.parse(fs.readFileSync(DB, "utf8")); } catch { return []; }
}
function saveRequests(d) {
  try {
    if (!fs.existsSync(path.dirname(DB))) fs.mkdirSync(path.dirname(DB), {recursive:true});
    fs.writeFileSync(DB, JSON.stringify(d, null, 2));
  } catch {}
}

module.exports = {
  name: "PluginRequest", category: "marketplace",
  desc: "Request a marketplace plugin — only works in JusticeTech Support group",
  command: ["pluginrequest", "requestplugin"],

  run: async ({ sock, m, args, reply, prefix, chatId, userId, botNumber, isDev: callerIsDev }) => {
    const pfx      = prefix || "/";
    const cfg      = jts.getConfig();
    const comm     = cfg.communities || {};
    const supportLink = comm.support_group || "https://chat.whatsapp.com/Gyt75qFHoul3wp53IKi25v?mode=gi_t";
    const supportJid  = comm.support_group_jid || "";
    const isGroup     = chatId?.endsWith("@g.us");
    const inSupportGroup = supportJid && chatId === supportJid;

    const botSelfNum = jts.norm(botNumber || "");
    const isDevBot   = jts.isDev(botSelfNum);

    // ── NOT in JusticeTech Support group ────────────────────────────────────
    if (!inSupportGroup) {
      if (isGroup) {
        // Any group that is NOT the support group: ALL bots completely silent
        return;
      }
      // In DM: redirect to support group
      return reply(
        "📦 Plugin requests only work in *JusticeTech Support group*.\n\n" +
        "Join here: " + supportLink + "\n\n" +
        "Then type: `" + pfx + "plugin request <plugin_id> <reason>`"
      );
    }

    // ── IN JusticeTech Support group ─────────────────────────────────────────
    // Only dev's bot responds. All other bots completely silent.
    if (!isDevBot) return;

    // From here: only the dev's bot executes
    // Format: /plugin request <plugin_id> <bot_number> <reason>
    // bot_number is the WhatsApp number of the bot that needs the plugin
    const pluginId  = (args[0] || "").trim();
    const secondArg = (args[1] || "").replace(/\D/g, "");
    // If second arg looks like a phone number (7+ digits), treat as bot number
    const hasBotNum = secondArg.length >= 7;
    const botOwnerNum = hasBotNum ? secondArg : jts.norm(userId);
    const reason    = hasBotNum ? args.slice(2).join(" ").trim() || "No reason provided"
                                : args.slice(1).join(" ").trim() || "No reason provided";
    const userNum   = jts.norm(userId);
    const userName  = m?.pushName || ("+" + userNum);

    if (!pluginId) {
      return reply([
        "Usage: `" + pfx + "plugin request <plugin_id> <bot_number> <reason>`",
        "",
        "• *plugin_id* — the plugin you want (e.g. expense-tracker)",
        "• *bot_number* — your bot's WhatsApp number (the number running Miss Chatra)",
        "• *reason* — why you need this plugin",
        "",
        "Example:",
        "`" + pfx + "plugin request expense-tracker 2348012345678 I need it for group finances`",
        "",
        pfx + "plugin list — browse available plugins",
      ].join("\n"));
    }

    if (!hasBotNum) {
      return sock.sendMessage(chatId, {
        text: "@" + userNum + " ⚠️ Please include your *bot number* in the request:\n\n" +
          "`" + pfx + "plugin request " + pluginId + " <your_bot_number> <reason>`\n\n" +
          "Your bot number is the WhatsApp number running Miss Chatra.\n" +
          "Example: `" + pfx + "plugin request " + pluginId + " 2348012345678 I need this for my group`",
        mentions: [userId],
      });
    }

    // Check duplicate pending request
    const reqs  = getRequests();
    const exist = reqs.find(r => r.pluginId === pluginId && r.botOwnerNum === botOwnerNum && r.status === "pending");
    if (exist) {
      return sock.sendMessage(chatId, {
        text: "@" + userNum + " ⏳ Bot +" + botOwnerNum + " already has a pending request for *" + pluginId + "* (Ref: " + exist.id + ").\n\nWait for developer review.",
        mentions: [userId],
      });
    }

    // Save request with REAL bot number
    const reqId = "REQ-" + Date.now().toString(36).toUpperCase().slice(-6);
    reqs.push({
      id: reqId, pluginId,
      botOwnerNum,          // the ACTUAL BOT number to approve
      requestedBy: userNum, // who made the request (their phone in support group)
      requesterId: userId,
      name: userName,
      reason, status: "pending",
      date: new Date().toISOString(),
      chatId,
    });
    saveRequests(reqs);

    // Register the bot in registry so maintenance reaches it
    jts.registerBot(botOwnerNum);

    // Tag user in group
    await sock.sendMessage(chatId, {
      text: "@" + userNum + " ✅ Request received for *" + pluginId + "*\nBot: +" + botOwnerNum + "\nRef: *" + reqId + "*\nYou'll be notified here once approved.",
      mentions: [userId],
    });

    // Notify devs with CORRECT bot number for devapprove
    for (const devNum of jts.DEV_NUMBERS) {
      try {
        await sock.sendMessage(devNum + "@s.whatsapp.net", {
          text:
            "🔔 *Plugin Request*\n\n" +
            "Ref: *" + reqId + "*\n" +
            "Plugin: *" + pluginId + "*\n" +
            "Requested by: " + userName + " (+" + userNum + ")\n" +
            "Bot number: +" + botOwnerNum + "\n" +
            "Reason: " + reason + "\n\n" +
            "Approve (copy & run):\n" +
            pfx + "devapprove " + botOwnerNum + " " + pluginId,
        });
      } catch {}
    }
  },
};
