// plugins/adminpowers.js — Miss Chatra Admin Superpowers
// Scheduled content calendar, multi-group broadcast targeting,
// group cloning, rule enforcement engine, admin delegation,
// bulk action manager, bot permissions matrix
// All features are GROUP-ISOLATED — must be turned on per group
"use strict";

const fs   = require("fs");
const path = require("path");
const { gsGet, gsSet } = require("../library/db");
const { getState, saveState } = require("../library/state");
const config = require("../settings/config");

const DB_DIR = path.join(__dirname, "..", "database");

// ── Storage helpers ───────────────────────────────────────────────────────────
function rj(f, fb = {}) { try { return JSON.parse(fs.readFileSync(f,"utf8")); } catch { return fb; } }
function wj(f, d) {
  try {
    if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR,{recursive:true});
    fs.writeFileSync(f, JSON.stringify(d,null,2));
  } catch {}
}

const SCHED_FILE  = path.join(DB_DIR, "scheduled_posts.json");
const RULES_FILE  = path.join(DB_DIR, "group_rules_engine.json");
const DELEGATE_FILE = path.join(DB_DIR, "admin_delegation.json");
const BROADCAST_FILE = path.join(DB_DIR, "broadcast_groups.json");
const CLONE_FILE  = path.join(DB_DIR, "group_snapshots.json");
const PERMS_FILE  = path.join(DB_DIR, "bot_permissions.json");

// ── Scheduled Posts ───────────────────────────────────────────────────────────
function getScheduled()       { return rj(SCHED_FILE, []); }
function saveScheduled(d)     { wj(SCHED_FILE, d); }
function addScheduled(post)   { const s = getScheduled(); s.push(post); saveScheduled(s); }
function delScheduled(id)     { saveScheduled(getScheduled().filter(p => p.id !== id)); }
function getGroupScheduled(chatId) { return getScheduled().filter(p => p.chatId === chatId); }

// ── Rules Engine ──────────────────────────────────────────────────────────────
function getRules(chatId)     { return rj(RULES_FILE, {})[chatId] || []; }
function saveRules(chatId, rules) { const d = rj(RULES_FILE,{}); d[chatId]=rules; wj(RULES_FILE,d); }

// ── Delegation ────────────────────────────────────────────────────────────────
function getDelegation(chatId) { return rj(DELEGATE_FILE,{})[chatId] || {}; }
function saveDelegation(chatId, d) { const all=rj(DELEGATE_FILE,{}); all[chatId]=d; wj(DELEGATE_FILE,all); }
function hasPermission(chatId, userId, command) {
  const d = getDelegation(chatId);
  const userPerms = d[userId] || [];
  return userPerms.includes("*") || userPerms.includes(command);
}

// ── Broadcast Groups ──────────────────────────────────────────────────────────
function getBroadcastGroups() { return rj(BROADCAST_FILE, {}); }
function saveBroadcastGroups(d) { wj(BROADCAST_FILE, d); }

// ── Permissions Matrix ────────────────────────────────────────────────────────
function getPerms(chatId)     { return rj(PERMS_FILE,{})[chatId] || {}; }
function savePerms(chatId, d) { const all=rj(PERMS_FILE,{}); all[chatId]=d; wj(PERMS_FILE,all); }

// ── Scheduler tick — runs every minute ───────────────────────────────────────
let _sock = null;
function startScheduler(sock) {
  _sock = sock;
  setInterval(async () => {
    const now   = Date.now();
    const posts = getScheduled();
    const due   = posts.filter(p => p.nextRun <= now && !p.paused);
    for (const post of due) {
      try {
        // Build message text with variables
        const tz = config.timezone || "Africa/Lagos";
        const dateStr = new Date().toLocaleDateString("en-GB", { timeZone: tz, weekday:"long", day:"numeric", month:"long", year:"numeric" });
        const timeStr = new Date().toLocaleTimeString("en-GB", { timeZone: tz, hour:"2-digit", minute:"2-digit" });
        const text = post.text
          .replace(/{date}/gi, dateStr)
          .replace(/{time}/gi, timeStr)
          .replace(/{botname}/gi, config.botName || "Miss Chatra");

        await sock.sendMessage(post.chatId, { text });

        // Calculate next run
        if (post.repeat === "once") {
          delScheduled(post.id);
        } else {
          const intervals = { hourly:3600000, daily:86400000, weekly:604800000, monthly:2592000000 };
          const interval  = intervals[post.repeat] || 86400000;
          const updated   = getScheduled().map(p => p.id === post.id ? {...p, nextRun: now + interval, sent: (p.sent||0)+1} : p);
          saveScheduled(updated);
        }
      } catch (e) {
        console.error("[SCHEDULER]", e.message);
      }
    }
  }, 60000); // every minute
}

// ── Auto bio updater ──────────────────────────────────────────────────────────
function startAutoBio(sock) {
  setInterval(async () => {
    try {
      const settings = rj(path.join(DB_DIR,"bot_settings.json"),{});
      if (!settings.autobio_on || !settings.autobio_text) return;
      const tz = settings.timezone || "Africa/Lagos";
      const timeStr = new Date().toLocaleTimeString("en-GB", { timeZone: tz, hour:"2-digit", minute:"2-digit" });
      const dateStr = new Date().toLocaleDateString("en-GB", { timeZone: tz });
      const upSecs  = Math.floor(process.uptime());
      const upStr   = `${Math.floor(upSecs/3600)}h ${Math.floor((upSecs%3600)/60)}m`;
      const bio = settings.autobio_text
        .replace(/{time}/gi, timeStr)
        .replace(/{date}/gi, dateStr)
        .replace(/{uptime}/gi, upStr);
      await sock.updateProfileStatus(bio);
    } catch {}
  }, 3600000); // every hour
}

module.exports = {
  name: "AdminPowers",
  category: "admin",
  desc: "Scheduled posts, broadcast targeting, group cloning, rule engine, admin delegation",
  command: [
    // Scheduled content calendar
    "schedule","schedulepost","schedulelist","scheduledel","schedulepause","scheduleresume","scheduleclear",
    // Multi-group broadcast
    "grouptag","groupuntag","grouptaglist","tagbroadcast",
    // Group cloning
    "groupsave","groupclone","groupsnapshots",
    // Rule enforcement engine
    "ruleadd","ruledel","rulelist","ruletest","rulesenable","rulesdisable",
    // Admin delegation
    "delegate","undelegate","delegatelist",
    // Bot permissions matrix
    "setperm","delperm","listperms","permreset",
    // Bulk actions
    "bulkwarn","bulkkick","bulkmute","bulkunmute",
    // Settings restoration
    "defaultsettings","defaultgroupsettings",
    // Schedule init
    "schedulerinit",
  ],
  startScheduler,
  startAutoBio,
  hasPermission,
  getDelegation,

  run: async ({ sock, m, args, command, chatId, userId, reply, isOwner, isDev, isAdmin, prefix, mentionedJid, isGroup }) => {
    const pfx   = prefix || "/";
    const chat  = chatId || m?.chat;
    const isGrp = isGroup || (chat||"").endsWith("@g.us");
    const canUse = isOwner || isDev || isAdmin;
    const input  = args.join(" ").trim();

    // Store sock for scheduler
    if (!_sock) _sock = sock;

    // ── SCHEDULED CONTENT CALENDAR ───────────────────────────────────────────
    if (["schedule","schedulepost"].includes(command)) {
      if (!canUse) return reply("🔒 Admin only.");
      if (!input) {
        return reply([
          `📅 *Scheduled Content Calendar*`,``,
          `Post content automatically at set times or intervals.`,``,
          `*Usage:*`,
          `  ${pfx}schedule <time> <repeat> <message>`,``,
          `*Time formats:*`,
          `  08:00       — daily at 8 AM`,
          `  +2h         — 2 hours from now`,
          `  +30m        — 30 minutes from now`,``,
          `*Repeat options:*`,
          `  once | hourly | daily | weekly | monthly`,``,
          `*Variables in message:*`,
          `  {date} {time} {botname}`,``,
          `*Examples:*`,
          `  ${pfx}schedule +30m once Good morning everyone! 🌅`,
          `  ${pfx}schedule 08:00 daily 🌅 Good morning! Today is {date}`,
          `  ${pfx}schedule 09:00 weekly 📢 Weekly reminder: Check the pinned post!`,``,
          `${pfx}schedulelist — view all scheduled posts`,
        ].join("\n"));
      }

      // Parse: first arg = time, second = repeat, rest = message
      const parts   = input.split(" ");
      if (parts.length < 3) return reply(`❌ Format: ${pfx}schedule <time> <repeat> <message>\nExample: ${pfx}schedule 08:00 daily Good morning!`);

      const timeStr  = parts[0];
      const repeat   = parts[1].toLowerCase();
      const text     = parts.slice(2).join(" ");
      const validRep = ["once","hourly","daily","weekly","monthly"];

      if (!validRep.includes(repeat)) return reply(`❌ Invalid repeat. Use: ${validRep.join(" | ")}`);
      if (!text) return reply("❌ Message cannot be empty.");

      // Parse time
      let nextRun;
      const now = Date.now();
      if (timeStr.startsWith("+")) {
        const match = timeStr.match(/^\+(\d+)([mhd])$/);
        if (!match) return reply("❌ Invalid time. Use +30m, +2h, or +1d");
        const n = parseInt(match[1]);
        const u = match[2];
        const mult = u==="m"?60000:u==="h"?3600000:86400000;
        nextRun = now + n * mult;
      } else if (/^\d{1,2}:\d{2}$/.test(timeStr)) {
        const [hh,mm] = timeStr.split(":").map(Number);
        const tz = rj(path.join(DB_DIR,"bot_settings.json"),{}).timezone || "Africa/Lagos";
        const target = new Date();
        target.setHours(hh, mm, 0, 0);
        if (target.getTime() <= now) target.setDate(target.getDate()+1);
        nextRun = target.getTime();
      } else {
        return reply("❌ Invalid time. Use HH:MM (e.g. 08:00) or +30m");
      }

      const id = `sched_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;
      addScheduled({ id, chatId: chat, text, repeat, nextRun, createdBy: userId, sent: 0, paused: false });

      const nextDate = new Date(nextRun).toLocaleString("en-GB", {
        timeZone: rj(path.join(DB_DIR,"bot_settings.json"),{}).timezone||"Africa/Lagos",
        day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"
      });

      return reply([
        `✅ *Scheduled Post Created*`,``,
        `📝 Message: "${text.slice(0,60)}${text.length>60?"...":""}"`,
        `🔄 Repeat: ${repeat}`,
        `⏰ First run: ${nextDate}`,
        `🆔 ID: ${id}`,``,
        `${pfx}schedulelist — view all posts`,
        `${pfx}scheduledel ${id} — delete this post`,
      ].join("\n"));
    }

    if (command === "schedulelist") {
      const posts = getGroupScheduled(chat);
      if (!posts.length) return reply(`📅 No scheduled posts in this group.\n\nUse ${pfx}schedule to create one.`);
      const tz = rj(path.join(DB_DIR,"bot_settings.json"),{}).timezone||"Africa/Lagos";
      const lines = [`📅 *Scheduled Posts (${posts.length})*\n`];
      for (const p of posts) {
        const next = new Date(p.nextRun).toLocaleString("en-GB",{timeZone:tz,day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});
        lines.push(`${p.paused?"⏸":"▶️"} *${p.repeat.toUpperCase()}* — Next: ${next}`);
        lines.push(`   "${p.text.slice(0,50)}${p.text.length>50?"...":""}"`);
        lines.push(`   ID: \`${p.id}\` | Sent: ${p.sent||0}x`);
        lines.push("");
      }
      lines.push(`_${pfx}scheduledel <id> | ${pfx}schedulepause <id> | ${pfx}scheduleclear_`);
      return reply(lines.join("\n"));
    }

    if (command === "scheduledel") {
      if (!canUse) return reply("🔒 Admin only.");
      if (!input) return reply(`Usage: ${pfx}scheduledel <id>`);
      const post = getScheduled().find(p => p.id === input && p.chatId === chat);
      if (!post) return reply(`❌ Scheduled post not found: ${input}`);
      delScheduled(input);
      return reply(`✅ Scheduled post deleted.`);
    }

    if (command === "schedulepause") {
      if (!canUse) return reply("🔒 Admin only.");
      if (!input) return reply(`Usage: ${pfx}schedulepause <id>`);
      const updated = getScheduled().map(p => p.id===input && p.chatId===chat ? {...p,paused:true} : p);
      saveScheduled(updated);
      return reply(`⏸ Scheduled post paused.`);
    }

    if (command === "scheduleresume") {
      if (!canUse) return reply("🔒 Admin only.");
      if (!input) return reply(`Usage: ${pfx}scheduleresume <id>`);
      const updated = getScheduled().map(p => p.id===input && p.chatId===chat ? {...p,paused:false} : p);
      saveScheduled(updated);
      return reply(`▶️ Scheduled post resumed.`);
    }

    if (command === "scheduleclear") {
      if (!canUse) return reply("🔒 Admin only.");
      saveScheduled(getScheduled().filter(p => p.chatId !== chat));
      return reply(`✅ All scheduled posts for this group cleared.`);
    }

    if (command === "schedulerinit") {
      if (!isOwner && !isDev) return reply("🔒 Owner only.");
      startScheduler(sock);
      startAutoBio(sock);
      return reply("✅ Scheduler and auto-bio started.");
    }

    // ── MULTI-GROUP BROADCAST TARGETING ──────────────────────────────────────
    if (command === "grouptag") {
      if (!isOwner && !isDev) return reply("🔒 Owner only.");
      if (!input) return reply(`Usage: ${pfx}grouptag <tag>\nExample: ${pfx}grouptag business\n\nTags this group for targeted broadcasts.`);
      const bg  = getBroadcastGroups();
      const tag = input.toLowerCase().trim();
      if (!bg[tag]) bg[tag] = [];
      if (!bg[tag].includes(chat)) bg[tag].push(chat);
      saveBroadcastGroups(bg);
      return reply(`✅ This group tagged as *"${tag}"*\n\nUse ${pfx}tagbroadcast ${tag} <message> to send to all groups with this tag.`);
    }

    if (command === "groupuntag") {
      if (!isOwner && !isDev) return reply("🔒 Owner only.");
      const tag = input.toLowerCase().trim();
      if (!tag) return reply(`Usage: ${pfx}groupuntag <tag>`);
      const bg = getBroadcastGroups();
      if (bg[tag]) { bg[tag] = bg[tag].filter(id => id !== chat); saveBroadcastGroups(bg); }
      return reply(`✅ This group removed from tag *"${tag}"*.`);
    }

    if (command === "grouptaglist") {
      const bg   = getBroadcastGroups();
      const tags = Object.entries(bg).filter(([,ids]) => ids.includes(chat)).map(([tag]) => tag);
      if (!tags.length) return reply(`This group has no tags.\nUse ${pfx}grouptag <tag> to add one.`);
      return reply(`🏷️ *This group's tags:* ${tags.map(t=>`"${t}"`).join(", ")}`);
    }

    if (command === "tagbroadcast") {
      if (!isOwner && !isDev) return reply("🔒 Owner only.");
      const parts = input.split(" ");
      if (parts.length < 2) return reply(`Usage: ${pfx}tagbroadcast <tag> <message>\nExample: ${pfx}tagbroadcast business 📢 Team update!`);
      const tag = parts[0].toLowerCase();
      const msg = parts.slice(1).join(" ");
      const bg  = getBroadcastGroups();
      const targets = bg[tag] || [];
      if (!targets.length) return reply(`❌ No groups tagged as "${tag}". Use ${pfx}grouptag first.`);
      await reply(`📤 Sending to ${targets.length} group(s) tagged "${tag}"...`);
      let ok = 0, fail = 0;
      for (const gid of targets) {
        try { await sock.sendMessage(gid, { text: msg }); ok++; await new Promise(r=>setTimeout(r,500)); }
        catch { fail++; }
      }
      return reply(`✅ Broadcast complete!\n\n✅ Sent: ${ok}\n❌ Failed: ${fail}`);
    }

    // ── GROUP CLONING ─────────────────────────────────────────────────────────
    if (command === "groupsave") {
      if (!isOwner && !isDev) return reply("🔒 Owner only.");
      if (!isGrp) return reply("Use in a group.");
      try {
        const meta  = await sock.groupMetadata(chat);
        const gs    = gsGet(chat);
        const snaps = rj(CLONE_FILE, {});
        snaps[chat] = {
          name: meta.subject || "Group",
          desc: meta.desc || "",
          gs: { ...gs },
          savedAt: Date.now(),
          memberCount: meta.participants?.length || 0,
        };
        wj(CLONE_FILE, snaps);
        return reply([
          `✅ *Group Snapshot Saved*`,``,
          `📋 Name: ${meta.subject}`,
          `👥 Members: ${meta.participants?.length}`,
          `📝 Settings: All bot configurations saved`,``,
          `Use ${pfx}groupclone to apply this snapshot to another group.`,
        ].join("\n"));
      } catch (e) { return reply(`❌ ${e.message}`); }
    }

    if (command === "groupclone") {
      if (!isOwner && !isDev) return reply("🔒 Owner only.");
      const sourceId = input || chat;
      const snaps    = rj(CLONE_FILE, {});
      const snap     = snaps[sourceId];
      if (!snap) return reply(`❌ No snapshot found for this group.\nUse ${pfx}groupsave first.`);
      // Apply snapshot settings to current group
      gsSet(chat, snap.gs);
      return reply([
        `✅ *Group Settings Cloned*`,``,
        `Source: ${snap.name}`,
        `Saved: ${new Date(snap.savedAt).toLocaleDateString()}`,``,
        `All bot settings have been applied to this group.`,
      ].join("\n"));
    }

    if (command === "groupsnapshots") {
      if (!isOwner && !isDev) return reply("🔒 Owner only.");
      const snaps = rj(CLONE_FILE, {});
      const list  = Object.entries(snaps);
      if (!list.length) return reply(`No snapshots saved. Use ${pfx}groupsave to save one.`);
      const lines = [`📸 *Group Snapshots*\n`];
      for (const [id, s] of list) {
        lines.push(`📋 *${s.name}*`);
        lines.push(`   ID: \`${id.slice(-10)}\``);
        lines.push(`   Saved: ${new Date(s.savedAt).toLocaleDateString()}`);
        lines.push(`   Members at save: ${s.memberCount}`);
        lines.push("");
      }
      return reply(lines.join("\n"));
    }

    // ── RULE ENFORCEMENT ENGINE ───────────────────────────────────────────────
    if (command === "ruleadd") {
      if (!canUse) return reply("🔒 Admin only.");
      if (!isGrp) return reply("Use in a group.");
      if (!input) {
        return reply([
          `📏 *Rule Enforcement Engine*`,``,
          `Write rules in plain English — bot enforces them automatically.`,``,
          `Usage: ${pfx}ruleadd <trigger> | <action> | <description>`,``,
          `*Triggers:* contains, starts_with, has_link, has_media, has_forward, is_night`,
          `*Actions:* delete, warn, kick, mute, reply`,``,
          `*Examples:*`,
          `  ${pfx}ruleadd has_link | delete | No links allowed`,
          `  ${pfx}ruleadd contains:promo | warn | No promotional content`,
          `  ${pfx}ruleadd is_night:22:00-06:00 | mute | No messages after 10pm`,
          `  ${pfx}ruleadd has_forward | delete | No forwarded messages`,
        ].join("\n"));
      }

      const parts = input.split("|").map(p=>p.trim());
      if (parts.length < 2) return reply(`❌ Format: ${pfx}ruleadd <trigger> | <action> | <description>`);

      const rule = {
        id: `rule_${Date.now()}`,
        trigger: parts[0],
        action:  parts[1],
        desc:    parts[2] || parts[0],
        on: true,
        createdAt: Date.now(),
      };
      const rules = getRules(chat);
      rules.push(rule);
      saveRules(chat, rules);
      return reply([
        `✅ *Rule Added*`,``,
        `📏 Trigger: ${rule.trigger}`,
        `⚡ Action: ${rule.action}`,
        `📝 Description: ${rule.desc}`,
        `🆔 ID: ${rule.id}`,``,
        `${pfx}rulelist — view all rules`,
      ].join("\n"));
    }

    if (command === "ruledel") {
      if (!canUse) return reply("🔒 Admin only.");
      if (!input) return reply(`Usage: ${pfx}ruledel <rule_id>`);
      const rules = getRules(chat).filter(r => r.id !== input);
      saveRules(chat, rules);
      return reply(`✅ Rule deleted.`);
    }

    if (command === "rulelist") {
      const rules = getRules(chat);
      if (!rules.length) return reply(`No rules set for this group.\nUse ${pfx}ruleadd to create rules.`);
      const lines = [`📏 *Group Rules (${rules.length})*\n`];
      for (const r of rules) {
        lines.push(`${r.on?"✅":"❌"} *${r.desc}*`);
        lines.push(`   Trigger: \`${r.trigger}\``);
        lines.push(`   Action: \`${r.action}\``);
        lines.push(`   ID: \`${r.id}\``);
        lines.push("");
      }
      return reply(lines.join("\n"));
    }

    if (command === "ruletest") {
      const rules = getRules(chat);
      if (!input) return reply(`Usage: ${pfx}ruletest <message>\nTests which rules would trigger on a message.`);
      const matched = rules.filter(r => checkRuleTrigger(r.trigger, input, {}));
      if (!matched.length) return reply(`✅ No rules triggered for: "${input.slice(0,50)}"`);
      const lines = [`⚠️ *Rules that would trigger:*\n`];
      for (const r of matched) lines.push(`• ${r.desc} → ${r.action}`);
      return reply(lines.join("\n"));
    }

    if (command === "rulesenable")  { if (!canUse) return reply("🔒"); if (!isGrp) return reply("Group only."); gsSet(chat,{rules_enabled:1}); return reply("✅ Rule engine enabled."); }
    if (command === "rulesdisable") { if (!canUse) return reply("🔒"); if (!isGrp) return reply("Group only."); gsSet(chat,{rules_enabled:0}); return reply("❌ Rule engine disabled."); }

    // ── ADMIN DELEGATION ──────────────────────────────────────────────────────
    if (command === "delegate") {
      if (!isOwner && !isDev && !isAdmin) return reply("🔒 Admin only.");
      if (!input || args.length < 2) {
        return reply([
          `👑 *Admin Delegation*`,``,
          `Grant specific bot command permissions to members without making them WA admin.`,``,
          `Usage: ${pfx}delegate @user <commands>`,``,
          `Examples:`,
          `  ${pfx}delegate @user ban,kick,mute`,
          `  ${pfx}delegate @user *  (all commands)`,
          `  ${pfx}delegate @user schedule,broadcast`,
        ].join("\n"));
      }
      const target = mentionedJid?.[0];
      if (!target) return reply("❌ Mention the user to delegate to.");
      const cmds   = args.slice(1).join("").split(",").map(c=>c.trim()).filter(Boolean);
      const d      = getDelegation(chat);
      d[target]    = cmds;
      saveDelegation(chat, d);
      return reply(`✅ *Delegated* to @${target.split("@")[0]}:\n\n${cmds.join(", ")}\n\nThey can now use these commands.`);
    }

    if (command === "undelegate") {
      if (!isOwner && !isDev && !isAdmin) return reply("🔒 Admin only.");
      const target = mentionedJid?.[0];
      if (!target) return reply("❌ Mention the user.");
      const d = getDelegation(chat);
      delete d[target];
      saveDelegation(chat, d);
      return reply(`✅ All delegated permissions removed from @${target.split("@")[0]}.`);
    }

    if (command === "delegatelist") {
      const d = getDelegation(chat);
      const entries = Object.entries(d);
      if (!entries.length) return reply(`No delegated permissions in this group.\nUse ${pfx}delegate to set up.`);
      const lines = [`👑 *Delegated Permissions*\n`];
      for (const [uid, cmds] of entries) {
        lines.push(`👤 @${uid.split("@")[0]}`);
        lines.push(`   Commands: ${cmds.join(", ")}`);
        lines.push("");
      }
      return reply(lines.join("\n"));
    }

    // ── BOT PERMISSIONS MATRIX ────────────────────────────────────────────────
    if (command === "setperm") {
      if (!isOwner && !isDev && !isAdmin) return reply("🔒 Admin only.");
      if (!input || args.length < 2) {
        return reply([
          `🔐 *Bot Permissions Matrix*`,``,
          `Control who can use which bot commands.`,``,
          `Usage: ${pfx}setperm <command> <level>`,``,
          `Levels: everyone | admin | owner | nobody`,``,
          `Examples:`,
          `  ${pfx}setperm dlsearch everyone`,
          `  ${pfx}setperm ban admin`,
          `  ${pfx}setperm broadcast owner`,
          `  ${pfx}setperm games everyone`,
        ].join("\n"));
      }
      const cmd  = args[0].toLowerCase();
      const lvl  = args[1].toLowerCase();
      const valid = ["everyone","admin","owner","nobody"];
      if (!valid.includes(lvl)) return reply(`❌ Level must be: ${valid.join(" | ")}`);
      const perms = getPerms(chat);
      perms[cmd]  = lvl;
      savePerms(chat, perms);
      return reply(`✅ Permission for *${pfx}${cmd}* set to *${lvl}*`);
    }

    if (command === "delperm") {
      if (!isOwner && !isDev && !isAdmin) return reply("🔒 Admin only.");
      const cmd = input.toLowerCase();
      if (!cmd) return reply(`Usage: ${pfx}delperm <command>`);
      const perms = getPerms(chat);
      delete perms[cmd];
      savePerms(chat, perms);
      return reply(`✅ Permission for *${pfx}${cmd}* reset to default.`);
    }

    if (command === "listperms") {
      const perms = getPerms(chat);
      const entries = Object.entries(perms);
      if (!entries.length) return reply(`No custom permissions set.\nUse ${pfx}setperm to configure.`);
      const lines = [`🔐 *Custom Permissions*\n`];
      for (const [cmd, lvl] of entries.sort()) {
        const icons = {everyone:"👥",admin:"🛡️",owner:"👑",nobody:"🚫"};
        lines.push(`${icons[lvl]||"?"} *${pfx}${cmd}* → ${lvl}`);
      }
      return reply(lines.join("\n"));
    }

    if (command === "permreset") {
      if (!isOwner && !isDev) return reply("🔒 Owner only.");
      const all = rj(PERMS_FILE,{}); delete all[chat]; wj(PERMS_FILE,all);
      return reply("✅ All custom permissions reset for this group.");
    }

    // ── BULK ACTIONS ──────────────────────────────────────────────────────────
    if (["bulkwarn","bulkkick","bulkmute","bulkunmute"].includes(command)) {
      if (!canUse) return reply("🔒 Admin only.");
      if (!isGrp) return reply("Group only.");
      const targets = mentionedJid?.length ? mentionedJid : [];
      if (!targets.length) return reply(`Usage: ${pfx}${command} @user1 @user2 @user3\n\nMention all users to ${command.replace("bulk","")}.`);

      const action = command.replace("bulk","");
      let ok = 0, fail = 0;

      for (const target of targets) {
        try {
          if (action === "kick") {
            await sock.groupParticipantsUpdate(chat, [target], "remove");
          } else if (action === "warn") {
            const { warnsAdd } = require("../library/db");
            warnsAdd(chat, target, 1);
          } else if (action === "mute") {
            const { muteUser } = require("../library/db");
            muteUser(chat, target);
          } else if (action === "unmute") {
            const { unmuteUser } = require("../library/db");
            unmuteUser(chat, target);
          }
          ok++;
          await new Promise(r => setTimeout(r, 300));
        } catch { fail++; }
      }

      return reply([
        `✅ *Bulk ${action.charAt(0).toUpperCase()+action.slice(1)} Complete*`,``,
        `✅ Success: ${ok}`,
        `❌ Failed: ${fail}`,
        `👥 Total: ${targets.length}`,
      ].join("\n"));
    }
    // ── /defaultsettings — restore all global bot settings to defaults ──────
    if (command === "defaultsettings") {
      if (!isOwner && !isDev) return reply("🔒 Owner only.");
      const { getState, saveState } = require("../library/state");
      const state = getState();
      // Reset all bot-level toggles to safe defaults
      const DEFAULTS = {
        auto_delete_enabled: false, auto_delete_delay: 60, auto_delete_bot_messages: false,
        auto_delete_user_messages: false, chatbot_enabled: true, nsfw_scan_enabled: false,
        virus_scan_enabled: true, forwarding_enabled: true, forwarding_enabled_groups: true,
        forwarding_enabled_users: false, autoviewstatus: false, autoreactstatus_emoji: "",
      };
      for (const [k, v] of Object.entries(DEFAULTS)) state[k] = v;
      saveState();
      return reply([
        "🔄 *Bot Settings Restored to Defaults*", "",
        "Global settings have been reset:", "",
        "• Auto-delete: ❌ Off", "• Chatbot: ✅ On",
        "• NSFW scan: ❌ Off (enable per-group with /nsfwon)",
        "• Virus scan: ✅ On", "• Forwarding: ✅ On",
        "• Auto-view status: ❌ Off",
        "", "_Group-level settings (antilink, antiforward etc) are unchanged._",
        "_Use /defaultgroupsettings in a group to reset that group's settings._",
      ].join("\n"));
    }

    // ── /defaultgroupsettings — restore this group to defaults ─────────────
    if (command === "defaultgroupsettings") {
      if (!isOwner && !isDev && !isAdmin) return reply("🔒 Admin only.");
      if (!chatId?.endsWith("@g.us")) return reply("⚠️ Group only command.");
      const { gsSet, db } = require("../library/db");
      try {
        db().prepare("DELETE FROM group_settings WHERE chat_id=?").run(chatId);
      } catch (e) {
        return reply("❌ Failed: " + e.message);
      }
      return reply([
        "🔄 *Group Settings Restored to Defaults*", "",
        "All settings for this group have been cleared:", "",
        "• Welcome/Goodbye: off", "• Anti-link: off",
        "• Anti-forward: off", "• NSFW scan: off",
        "• Virus scan: off", "• Slowmode: off",
        "• Badwords: cleared",
        "", "_Re-enable features as needed._",
      ].join("\n"));
    }

  }
};

// ── Rule trigger checker (used by message.js) ─────────────────────────────────
function checkRuleTrigger(trigger, text, msgCtx = {}) {
  const t = trigger.toLowerCase();
  const txt = (text||"").toLowerCase();

  if (t === "has_link")    return /https?:\/\//.test(txt);
  if (t === "has_media")   return !!(msgCtx.isMedia);
  if (t === "has_forward") return !!(msgCtx.isForward);
  if (t.startsWith("contains:")) { const kw = t.slice(9); return txt.includes(kw); }
  if (t.startsWith("starts_with:")) { const kw = t.slice(12); return txt.startsWith(kw); }
  if (t.startsWith("is_night:")) {
    const [start,end] = t.slice(9).split("-");
    const [sh,sm] = (start||"22:00").split(":").map(Number);
    const [eh,em] = (end||"06:00").split(":").map(Number);
    const now = new Date();
    const h = now.getHours(), min = now.getMinutes();
    const cur = h*60+min, s = sh*60+sm, e = eh*60+em;
    return s > e ? (cur >= s || cur < e) : (cur >= s && cur < e);
  }
  return false;
}

module.exports.checkRuleTrigger = checkRuleTrigger;
module.exports.getPerms = getPerms;
module.exports.getRules = getRules;
