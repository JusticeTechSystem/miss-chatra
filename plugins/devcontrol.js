// plugins/devcontrol.js — JusticeTech Developer Control Panel
// Signal-based: sends signed invisible signals to target bot's DM
// Target bot receives signal → updates its OWN local status file → blocks commands
"use strict";

const fs   = require("fs");
const path = require("path");
const jts  = require("../library/justicetechsystem");

const THUMB = path.join(__dirname, "..", "thumbnail", "image.jpg");
function getThumb() { try { return fs.existsSync(THUMB) ? fs.readFileSync(THUMB) : null; } catch { return null; } }

async function card(sock, jid, text, m) {
  const t = getThumb();
  try { if (t) return await sock.sendMessage(jid, { image: t, caption: text }, m ? { quoted: m } : {}); } catch {}
  try { await sock.sendMessage(jid, { text }, m ? { quoted: m } : {}); } catch {}
}

// Send status signal to target bot's DM — it will receive, write local file, self-block
async function sendStatusSignal(sock, targetNum, status, reason, showAlert) {
  const signal = jts.buildStatusSignal(status, reason, showAlert);
  try {
    await sock.sendMessage(targetNum + "@s.whatsapp.net", { text: signal });
    return true;
  } catch { return false; }
}

// Get all known bot numbers from registry (approved_owners.json)
function getAllBotNums() {
  return jts.getAllRegisteredJids().map(j => j.replace("@s.whatsapp.net", ""));
}

module.exports = {
  name: "DevControl", category: "dev",
  desc: "JusticeTech developer control panel — signal-based remote bot management",
  devOnly: true, hidden: true,
  command: [
    "devsuspend","devunsuspend","devrestrict","devunrestrict",
    "devfreeze","devunfreeze","devban","devunban",
    "devbotstatus","devbotlist","devbotactivate",
    "devapprove","devapproveall","devrevoke","devrevokeall","devapprovelist",
    "devplugindisable","devpluginable","devpluginlist",
    "devchanneltoggle","devconfig","devsetconfig","devbroadcastall",
    "devsetsupportjid","devgetjid","devaddbot","devremovebot",
    "devglobalfreeze","devglobalunfreeze","devglobalstatus",    "devgetchanneljid","devsetchannelid","devchanneljid","devchannelinfo",
  ],

  run: async ({ sock, m, args, command, reply, chatId, userId, prefix }) => {
    if (!jts.isDev(userId)) return; // silent for non-devs

    const pfx    = prefix || "/";
    const target = (args[0] || "").replace(/\D/g, "");
    const reason = args.slice(1).join(" ") || "Action by JusticeTech";

    // ── SUSPEND ───────────────────────────────────────────────────────────────
    if (command === "devsuspend") {
      if (!target) return reply(`Usage: ${pfx}devsuspend <bot_number> [reason]\n\nSends signal to target bot. It will block all commands immediately.`);
      const sent = await sendStatusSignal(sock, target, "suspended", reason, true);
      return reply(`⚠️ *+${target}* SUSPENDED\nSignal sent: ${sent ? "✅" : "❌ (will apply on restart)"}\nReason: ${reason}`);
    }

    if (command === "devunsuspend") {
      if (!target) return reply(`Usage: ${pfx}devunsuspend <bot_number>`);
      const sent = await sendStatusSignal(sock, target, "active", reason, true);
      return reply(`✅ *+${target}* UNSUSPENDED\nSignal sent: ${sent ? "✅" : "❌"}`);
    }

    // ── RESTRICT ──────────────────────────────────────────────────────────────
    if (command === "devrestrict") {
      if (!target) return reply(`Usage: ${pfx}devrestrict <bot_number> [reason]`);
      const sent = await sendStatusSignal(sock, target, "restricted", reason, true);
      return reply(`🔒 *+${target}* RESTRICTED\nSignal sent: ${sent ? "✅" : "❌"}\nReason: ${reason}`);
    }

    if (command === "devunrestrict") {
      if (!target) return reply(`Usage: ${pfx}devunrestrict <bot_number>`);
      const sent = await sendStatusSignal(sock, target, "active", "Restrictions lifted by JusticeTech", true);
      return reply(`✅ *+${target}* UNRESTRICTED\nSignal sent: ${sent ? "✅" : "❌"}`);
    }

    // ── FREEZE ────────────────────────────────────────────────────────────────
    if (command === "devfreeze") {
      if (!target) return reply(`Usage: ${pfx}devfreeze <bot_number> [reason]`);
      const sent = await sendStatusSignal(sock, target, "frozen", reason, true);
      return reply(`❄️ *+${target}* FROZEN\nSignal sent: ${sent ? "✅" : "❌"}\nReason: ${reason}`);
    }

    if (command === "devunfreeze") {
      if (!target) return reply(`Usage: ${pfx}devunfreeze <bot_number>`);
      const sent = await sendStatusSignal(sock, target, "active", "Unfrozen by JusticeTech", true);
      return reply(`✅ *+${target}* UNFROZEN\nSignal sent: ${sent ? "✅" : "❌"}`);
    }

    // ── BAN ───────────────────────────────────────────────────────────────────
    if (command === "devban") {
      if (!target) return reply(`Usage: ${pfx}devban <bot_number> [reason]`);
      const sent = await sendStatusSignal(sock, target, "banned", reason, true);
      return reply(`🚫 *+${target}* BANNED\nSignal sent: ${sent ? "✅" : "❌"}\nReason: ${reason}`);
    }

    if (command === "devunban") {
      if (!target) return reply(`Usage: ${pfx}devunban <bot_number>`);
      const sent = await sendStatusSignal(sock, target, "active", "Ban lifted by JusticeTech", true);
      return reply(`✅ *+${target}* UNBANNED\nSignal sent: ${sent ? "✅" : "❌"}`);
    }

    // ── STATUS CHECK ──────────────────────────────────────────────────────────
    if (command === "devbotstatus") {
      const num = target || jts.norm(sock?.user?.id || "");
      const status = jts.getLocalStatus();
      const info   = jts.readStatus();
      return reply([
        `📊 *Bot Status: +${num}*`,
        ``,
        `Status : *${status.toUpperCase()}*`,
        info.reason  ? `Reason : ${info.reason}` : "",
        info.setAt   ? `Since  : ${new Date(info.setAt).toLocaleString("en-GB")}` : "",
      ].filter(Boolean).join("\\n"));
    }

    if (command === "devbotactivate") {
      // Manually write active status on THIS bot
      jts.writeStatus({ status: "active", reason: "", setAt: new Date().toISOString() });
      return reply("✅ This bot's local status set to ACTIVE");
    }

    if (command === "devaddbot") {
      // Manually add a bot number to the registry (for bots that haven't deployed yet)
      if (!target) return reply("Usage: " + pfx + "devaddbot <bot_number>\nManually register a bot for maintenance broadcasts");
      jts.addBotToRegistry(target);
      return reply("✅ Bot +" + target + " added to registry.\nIt will now receive maintenance broadcasts.");
    }

    if (command === "devremovebot") {
      if (!target) return reply("Usage: " + pfx + "devremovebot <bot_number>");
      const reg = jts.readRegistry();
      delete reg.owners[target];
      jts.writeRegistry(reg);
      return reply("✅ Bot +" + target + " removed from registry.");
    }

    if (command === "devglobalfreeze") {
      const reason  = args.join(" ") || "Global freeze by JusticeTech";
      const allJids = jts.getAllRegisteredJids();
      if (!allJids.length) return reply("❌ No bots in registry. Run /devmaintstatus to check.");
      await reply("❄️ Freezing ALL " + allJids.length + " registered bots...\n\nReason: " + reason);
      let sent = 0, failed = 0;
      for (const jid of allJids) {
        try {
          const _num = jid.replace("@s.whatsapp.net", "");
          const _sig = jts.buildStatusSignal("frozen", reason, false); // no alert (silent freeze)
          await sock.sendMessage(jid, { text: _sig }, { ephemeralExpiration: 1 });
          // Also write to our registry so we track who is frozen
          jts.writeStatus ? null : null;
          sent++;
          await new Promise(r => setTimeout(r, 200));
        } catch { failed++; }
      }
      return reply(
        "❄️ *Global Freeze Complete*\n\n" +
        "✅ Frozen : " + sent + "\n" +
        "❌ Failed : " + failed + "\n" +
        "👥 Total  : " + allJids.length + "\n\n" +
        "All frozen bots show freeze message on any command.\n" +
        "Lift with: " + pfx + "devglobalunfreeze"
      );
    }

    if (command === "devglobalunfreeze") {
      const allJids = jts.getAllRegisteredJids();
      if (!allJids.length) return reply("❌ No bots in registry.");
      await reply("✅ Unfreezing ALL " + allJids.length + " bots...");
      let sent = 0, failed = 0;
      for (const jid of allJids) {
        try {
          const _sig = jts.buildStatusSignal("active", "Global unfreeze by JusticeTech", false);
          await sock.sendMessage(jid, { text: _sig }, { ephemeralExpiration: 1 });
          sent++;
          await new Promise(r => setTimeout(r, 200));
        } catch { failed++; }
      }
      return reply(
        "✅ *Global Unfreeze Complete*\n\n" +
        "✅ Unfrozen : " + sent + "\n" +
        "❌ Failed   : " + failed + "\n" +
        "👥 Total    : " + allJids.length
      );
    }

    if (command === "devglobalstatus") {
      const allJids = jts.getAllRegisteredJids();
      const reg     = jts.readRegistry();
      return reply([
        "📊 *Global Bot Status*",
        "",
        "Registered bots: " + allJids.length,
        "",
        allJids.length ? allJids.slice(0,20).map(j => "  +" + j.replace("@s.whatsapp.net","")).join("\n") : "  None yet",
        allJids.length > 20 ? "  ...+" + (allJids.length-20) + " more" : "",
        "",
        pfx + "devglobalfreeze [reason]   — freeze all",
        pfx + "devglobalunfreeze          — unfreeze all",
        pfx + "devbroadcastall <msg>      — message all",
      ].filter(Boolean).join("\\n"));
    }

    if (command === "devbotlist") {
      const reg  = jts.readRegistry();
      const nums = Object.keys(reg.owners || {});
      const lines = ["📋 *Registered Bots (" + nums.length + ")*", ""];
      nums.forEach(n => {
        const e   = reg.owners[n];
        const tag = jts.isDev(n) ? " 👑 DEV" : "";
        lines.push("+" + n + tag + " — " + (e.registeredAt ? new Date(e.registeredAt).toLocaleDateString() : "?"));
      });
      if (!nums.length) {
        lines.push("No bots registered yet.", "");
        lines.push("Add a bot: " + pfx + "devaddbot <number>");
      }
      lines.push("", pfx + "devaddbot <number> — add bot to registry");
      return reply(lines.join("\\n"));
    }

    // ── APPROVALS ─────────────────────────────────────────────────────────────
    if (command === "devapprove") {
      const ownerNum = (args[0] || "").replace(/\D/g, "");
      const pluginId = args[1];
      if (!ownerNum || !pluginId) return reply(`Usage: ${pfx}devapprove <owner_number> <plugin_id>`);
      jts.grantApproval(ownerNum, pluginId);
      // Register bot in registry so maintenance reaches it
      jts.registerBot(ownerNum);

      // ── Send APPROVE signal to target bot ────────────────────────────────
      // Signal: writes approval to TARGET bot's own database
      // The target bot then self-notifies its owner from its OWN number (not dev's)
      // So the user sees "Plugin Approved" from their own bot, not from dev's number
      const _approveSignal = jts.buildSignal("APPROVE", {
        pluginId, botNum: ownerNum, all: false, showAlert: true
      });
      let _signalSent = false;
      try {
        await sock.sendMessage(ownerNum + "@s.whatsapp.net", { text: _approveSignal }, { ephemeralExpiration: 1 });
        _signalSent = true;
        console.log("[devapprove] APPROVE signal sent to bot +" + ownerNum);
      } catch (e) {
        console.log("[devapprove] APPROVE signal failed:", e.message);
      }

      const cfg3  = jts.getConfig();
      const supportJid = cfg3.communities?.support_group_jid || "";

      // 1. Notify user in JusticeTech Support group (tagged) if JID is set
      if (supportJid) {
        try {
          await sock.sendMessage(supportJid, {
            text:
              "@" + ownerNum + " ✅ *Plugin Approved: " + pluginId + "*\n\n" +
              "Your request has been approved by JusticeTech! 🎉\n\n" +
              "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
              "*How to install on your bot:*\n\n" +
              "1️⃣ Open your bot DM (Message yourself)\n" +
              "2️⃣ Type: `" + pfx + "plugin install " + pluginId + "`\n" +
              "3️⃣ Plugin installs instantly — no restart needed\n\n" +
              "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
              "*How to use:*\n" +
              "Type `" + pfx + "plugin info " + pluginId + "` for usage guide\n" +
              "Type `" + pfx + "cmdsearch " + pluginId + "` for step-by-step guide\n\n" +
              "_Note: This plugin is approved for your bot only (+" + ownerNum + ")._\n\n" +
              "— JusticeTech System 🇳🇬",
            mentions: [ownerNum + "@s.whatsapp.net"],
          });
        } catch (e) { console.log("[devapprove] support group notify err:", e.message); }
      }

      // NOTE: No direct DM from dev's number — APPROVE signal handler in message.js
      // makes the target bot self-notify its owner from ITS OWN number
      return reply("✅ Approved *" + pluginId + "* for +" + ownerNum + (supportJid ? "\nTagged in Support group ✅" : "") + "\nSignal sent: " + (_signalSent ? "✅" : "❌ (bot may be offline)"));
    }

    if (command === "devapproveall") {
      const ownerNum = (args[0] || "").replace(/\D/g, "");
      if (!ownerNum) return reply(`Usage: ${pfx}devapproveall <owner_number>`);
      jts.grantAllApprovals(ownerNum);
      jts.registerBot(ownerNum);
      // Send APPROVE ALL signal to target bot
      const _allSig = jts.buildSignal("APPROVE", { all: true, botNum: ownerNum });
      try { await sock.sendMessage(ownerNum + "@s.whatsapp.net", { text: _allSig }); } catch {}
      try { await sock.sendMessage(ownerNum + "@s.whatsapp.net", {
        text: "🎉 *Full Plugin Access Granted!*\n\nYou now have access to ALL Miss Chatra marketplace plugins.\n\n" + pfx + "plugin list to browse.\n\n— JusticeTech System 🇳🇬"
      }); } catch {}
      return reply("✅ ALL access granted to +" + ownerNum);
    }

    if (command === "devrevoke") {
      const ownerNum = (args[0] || "").replace(/\D/g, "");
      const pluginId = args[1];
      if (!ownerNum || !pluginId) return reply(`Usage: ${pfx}devrevoke <owner_number> <plugin_id>`);
      jts.revokeApproval(ownerNum, pluginId);
      return reply(`✅ Revoked *${pluginId}* from +${ownerNum}`);
    }

    if (command === "devrevokeall") {
      const ownerNum = (args[0] || "").replace(/\D/g, "");
      if (!ownerNum) return reply(`Usage: ${pfx}devrevokeall <owner_number>`);
      jts.revokeAllApprovals(ownerNum);
      return reply(`✅ All approvals revoked from +${ownerNum}`);
    }

    if (command === "devapprovelist") {
      const a = jts.getApprovals();
      const entries = Object.entries(a);
      if (!entries.length) return reply("No approvals on file.");
      return reply(`📋 *Approved Bots (${entries.length})*\n\n` +
        entries.map(([n, p]) => `+${n}: ${p.includes("*ALL*") ? "ALL" : p.length + " plugin(s)"}`).join("\\n"));
    }

    // ── GLOBAL PLUGIN CONTROLS ────────────────────────────────────────────────
    if (command === "devplugindisable") {
      const pid = args[0];
      if (!pid) return reply(`Usage: ${pfx}devplugindisable <plugin_id>`);
      const cfg = jts.getConfig();
      if (!cfg.global_plugins_disabled) cfg.global_plugins_disabled = [];
      if (!cfg.global_plugins_disabled.includes(pid)) cfg.global_plugins_disabled.push(pid);
      jts.saveConfig(cfg);
      return reply(`🚫 Plugin *${pid}* globally disabled.`);
    }

    if (command === "devpluginable") {
      const pid = args[0];
      if (!pid) return reply(`Usage: ${pfx}devpluginable <plugin_id>`);
      const cfg = jts.getConfig();
      cfg.global_plugins_disabled = (cfg.global_plugins_disabled || []).filter(p => p !== pid);
      jts.saveConfig(cfg);
      return reply(`✅ Plugin *${pid}* re-enabled.`);
    }

    if (command === "devpluginlist") {
      const dis = jts.getConfig().global_plugins_disabled || [];
      return reply(`📦 *Globally Disabled (${dis.length})*\n\n${dis.map(p => "🚫 " + p).join("\\n") || "None"}`);
    }

    // ── CONFIG ────────────────────────────────────────────────────────────────
    if (command === "devchanneltoggle") {
      const cfg = jts.getConfig();
      cfg.auto_channel_add = !cfg.auto_channel_add;
      jts.saveConfig(cfg);
      return reply(`📡 Auto-Channel-Add: *${cfg.auto_channel_add ? "ON" : "OFF"}*`);
    }

    if (command === "devconfig") {
      const cfg    = jts.getConfig();
      const status = jts.getLocalStatus();
      return reply([
        "⚙️ JusticeTech Config",
        ``,
        `This bot status : ${status.toUpperCase()}`,
        `Approval Required: ${cfg.marketplace_approval_required}`,
        `Auto-Channel-Add: ${cfg.auto_channel_add !== false ? "ON" : "OFF"}`,
        `Registered bots : ${getAllBotNums().length}`,
        `Maintenance: ${jts.isMaintenance() ? "ON 🔧" : "OFF ✅"}`,
        `Disabled plugins: ${(cfg.global_plugins_disabled || []).length}`,
      ].join("\\n"));
    }

    if (command === "devgetchanneljid") {
      // To get a WhatsApp Channel JID:
      // 1. Open WhatsApp, go to the channel
      // 2. Share the channel link — it looks like: https://whatsapp.com/channel/XXXXXX
      // 3. Or check bot logs when you interact with the channel
      // For JusticeTech: the channel ID is in the config
      const cfg5 = jts.getConfig();
      return reply([
        "📡 *JusticeTech Channel Info*",
        "",
        "Current channel ID: " + (cfg5.communities?.channel_id || "NOT SET"),
        "Channel invite: " + (cfg5.communities?.channel_invite || "NOT SET"),
        "",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "",
        "*How to get a WhatsApp Channel JID:*",
        "",
        "Method 1 (Easiest):",
        "Share the channel link in your bot DM.",
        "The bot will log the newsletter JID in console.",
        "",
        "Method 2:",
        "The JID format is: <digits>@newsletter",
        "e.g. 120363304952880147@newsletter",
        "",
        "Method 3 (Dev logs):",
        "Check console logs when bot receives a channel message.",
        "Look for: jid=XXXXXXX@newsletter",
        "",
        "Set it: " + pfx + "devsetchannelid <id>@newsletter",
      ].join("\\n"));
    }

    if (command === "devsetchannelid") {
      const newId = args[0];
      if (!newId || !newId.endsWith("@newsletter")) {
        return reply("Usage: " + pfx + "devsetchannelid <id>@newsletter\n\nExample:\n" + pfx + "devsetchannelid 120363304952880147@newsletter");
      }
      const cfg5 = jts.getConfig();
      if (!cfg5.communities) cfg5.communities = {};
      cfg5.communities.channel_id = newId;
      jts.saveConfig(cfg5);
      return reply("✅ Channel ID set: " + newId + "\n\nBot will auto-follow this channel on next restart.");
    }

    if (command === "devsetsupportjid") {
      // Shortcut: /devsetsupportjid <jid>  — set support group JID
      // Get it from any message in the group: the chatId is the JID
      const jid = args[0];
      if (!jid) return reply(
        "Usage: " + pfx + "devsetsupportjid <group_jid>\n\n" +
        "Get JID by typing this command in your JusticeTech Support group:\n" +
        pfx + "devgetjid\n\n" +
        "Or check bot logs for: [UPSERT] jid=xxxxx@g.us"
      );
      const cfg4 = jts.getConfig();
      if (!cfg4.communities) cfg4.communities = {};
      cfg4.communities.support_group_jid = jid;
      jts.saveConfig(cfg4);
      return reply("✅ JusticeTech Support group JID set:\n" + jid + "\n\nPlugin requests and approvals will now work in that group.");
    }

    if (command === "devgetjid") {
      const isNewsletter = chatId?.endsWith("@newsletter");
      const isGroup      = chatId?.endsWith("@g.us");

      if (isNewsletter) {
        // Typed inside a WhatsApp Channel
        return reply(
          "📡 *Channel JID:*\n" + chatId + "\n\n" +
          "Set it:\n`" + pfx + "devsetchannelid " + chatId + "`"
        );
      }

      if (isGroup) {
        // Typed in a group — show group JID + support group setup hint
        return reply(
          "👥 *Group JID:*\n" + chatId + "\n\n" +
          "To set as JusticeTech Support group:\n`" + pfx + "devsetsupportjid " + chatId + "`"
        );
      }

      // In DM — show all JIDs and how to get channel JID
      const cfg = jts.getConfig();
      return reply([
        "📋 *JID Information*",
        "",
        "This DM JID: " + chatId,
        "Your number: +" + jts.norm(userId),
        "",
        "Current config:",
        "Support group: " + (cfg.communities?.support_group_jid || "NOT SET"),
        "Channel ID: "    + (cfg.communities?.channel_id      || "NOT SET"),
        "",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "",
        "*To get your Channel JID:*",
        "",
        "1. Forward any message FROM your channel",
        "   to this bot DM",
        "2. Run: `" + pfx + "devchanneljid`",
        "   (detects newsletter JID from forwarded msg)",
        "",
        "OR: Go into the channel, type: `" + pfx + "devgetjid`",
        "",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        pfx + "devsetsupportjid <jid>  — set support group",
        pfx + "devsetchannelid <jid>   — set channel",
      ].join("\\n"));
    }

    if (command === "devchannelinfo") {
      // /devchannelinfo <channel_invite_link>
      // Fetches the real @newsletter JID from a WhatsApp channel link
      // e.g. /devchannelinfo https://whatsapp.com/channel/0029VaoLagu3hRFKWlqk9W2T
      const link = args[0] || "";
      if (!link) {
        return reply(
          "Usage: " + pfx + "devchannelinfo <channel_invite_link>\n\n" +
          "Example:\n" +
          pfx + "devchannelinfo https://whatsapp.com/channel/0029VaoLagu3hRFKWlqk9W2T\n\n" +
          "Get your channel link:\n" +
          "WhatsApp → Your Channel → Invite → Copy Link"
        );
      }

      // Extract invite code from link
      const inviteCode = link.split("/channel/").pop().split("?")[0].trim();
      if (!inviteCode) return reply("❌ Invalid channel link. Must contain /channel/<code>");

      await reply("🔍 Fetching channel info for invite code: " + inviteCode + "...");

      try {
        // Try different Baileys newsletter methods
        let info = null;

        if (typeof sock.newsletterMetadata === "function") {
          info = await sock.newsletterMetadata("invite", inviteCode);
        } else if (typeof sock.fetchNewsletterInfo === "function") {
          info = await sock.fetchNewsletterInfo(inviteCode);
        } else if (typeof sock.getNewsletterInfo === "function") {
          info = await sock.getNewsletterInfo(inviteCode);
        }

        if (info && info.id) {
          const channelJid = info.id;
          const channelName = info.name || info.title || "Unknown";

          // Auto-save it
          const cfg = jts.getConfig();
          if (!cfg.communities) cfg.communities = {};
          cfg.communities.channel_id = channelJid;
          jts.saveConfig(cfg);

          return reply(
            "✅ *Channel JID Found & Saved!*\n\n" +
            "Name: " + channelName + "\n" +
            "JID: " + channelJid + "\n\n" +
            "Auto-saved to config. Bot will use this on next restart.\n\n" +
            "To manually set anytime:\n" +
            pfx + "devsetchannelid " + channelJid
          );
        } else {
          return reply(
            "⚠️ Could not fetch channel info automatically.\n\n" +
            "Available methods: " + [
              "newsletterMetadata", "fetchNewsletterInfo", "getNewsletterInfo"
            ].filter(m => typeof sock[m] === "function").join(", ") + "\n\n" +
            "*Manual method:*\n" +
            "1. Open your channel in WhatsApp\n" +
            "2. Tap 3 dots → Channel info\n" +
            "3. Share the link\n" +
            "4. The JID format is the numeric part + @newsletter"
          );
        }
      } catch (e) {
        return reply(
          "❌ Error: " + e.message + "\n\n" +
          "*Try the manual method:*\n" +
          "1. Go to your channel\n" +
          "2. Post any message (if you are owner)\n" +
          "3. The bot will log the JID in console\n\n" +
          "Or check your server console for lines containing @newsletter"
        );
      }
    }

    if (command === "devchanneljid") {
      // Detects newsletter JID from a forwarded/quoted message
      const quoted = m?.quoted || m?.msg?.contextInfo?.quotedMessage;
      const fwdCtx = m?.msg?.contextInfo;
      const newsJid = fwdCtx?.remoteJid?.endsWith("@newsletter")
        ? fwdCtx.remoteJid
        : m?.message?.extendedTextMessage?.contextInfo?.remoteJid?.endsWith("@newsletter")
        ? m.message.extendedTextMessage.contextInfo.remoteJid
        : null;

      if (newsJid) {
        const cfg = jts.getConfig();
        if (!cfg.communities) cfg.communities = {};
        cfg.communities.channel_id = newsJid;
        jts.saveConfig(cfg);
        return reply(
          "✅ *Channel JID detected and saved!*\n\n" +
          "JID: " + newsJid + "\n\n" +
          "Bot will auto-follow this channel on next restart."
        );
      }

      return reply(
        "📡 *How to get your Channel JID:*\n\n" +
        "1. Open your JusticeTech WhatsApp Channel\n" +
        "2. Forward any message from it to this bot DM\n" +
        "3. Type `" + pfx + "devchanneljid` — bot will detect and save it automatically\n\n" +
        "OR type `" + pfx + "devgetjid` while INSIDE the channel\n\n" +
        "Channel JIDs end in *@newsletter*"
      );
    }

    if (command === "devsetconfig") {
      const key = args[0]; const value = args.slice(1).join(" ");
      if (!key) return reply(`Usage: ${pfx}devsetconfig <key> <value>`);
      const cfg = jts.getConfig();
      cfg[key] = value === "true" ? true : value === "false" ? false : value;
      jts.saveConfig(cfg);
      return reply(`✅ ${key} = ${cfg[key]}`);
    }

    if (command === "devbroadcastall") {
      const msg = args.join(" ");
      if (!msg) return reply(`Usage: ${pfx}devbroadcastall <message>`);
      const nums = getAllBotNums();
      let sent = 0;
      for (const n of nums) {
        try {
          await sock.sendMessage(n + "@s.whatsapp.net", {
            text: "📢 *Message from JusticeTech*\n\n" + msg + "\n\n— JusticeTech System 🇳🇬"
          });
          sent++; await new Promise(r => setTimeout(r, 500));
        } catch {}
      }
      return reply(`📢 Broadcast done: ${sent}/${nums.length}`);
    }

    return reply(`Unknown dev command: ${command}`);
  },
};
