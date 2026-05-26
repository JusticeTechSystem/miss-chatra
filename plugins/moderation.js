// plugins/moderation.js — Miss Chatra Complete Moderation + Settings
// Contains ALL settings menu commands + all moderation + autodelete
// Everything is group-isolated, defaults OFF
"use strict";

const fs   = require("fs");
const path = require("path");
const { db, gsGet, gsSet, warnsAdd, warnsGet, warnsReset,
        muteUser, unmuteUser, isMuted, logRestriction,
        badwordAdd, badwordDel, badwordList } = require("../library/db");
const { getSarcasticResponse, jidToNum, numToJid, formatDuration } = require("../library/helpers");
const { getState, saveState } = require("../library/state");
const config = require("../settings/config");

// ── Settings file (global bot settings, not per-group) ────────────────────────
const DB_DIR      = path.join(__dirname, "..", "database");
const SETS_FILE   = path.join(DB_DIR, "bot_settings.json");

function loadSets()   { try { return JSON.parse(fs.readFileSync(SETS_FILE,"utf8")); } catch { return {}; } }
function saveSets(d)  { try { if(!fs.existsSync(DB_DIR))fs.mkdirSync(DB_DIR,{recursive:true}); fs.writeFileSync(SETS_FILE,JSON.stringify(d,null,2)); } catch {} }
function gset(k,fb=null)  { return loadSets()[k] ?? fb; }
function sset(k,v)        { const d=loadSets(); d[k]=v; saveSets(d); }

// ── DB column migration ───────────────────────────────────────────────────────
function migrateDB() {
  const newCols = [
    ["antibug","INTEGER DEFAULT 0"],
    ["antidelete","INTEGER DEFAULT 0"],
    ["antiedit","INTEGER DEFAULT 0"],
    ["autoreact_emoji","TEXT DEFAULT ''"],
    ["autotype","INTEGER DEFAULT 0"],
    ["autorecord","INTEGER DEFAULT 0"],
    ["ignore_list","TEXT DEFAULT '[]'"],
    ["sudo_list","TEXT DEFAULT '[]'"],
    ["country_codes","TEXT DEFAULT '[]'"],
    ["setwarn_count","INTEGER DEFAULT 3"],
    ["anticall_msg","TEXT DEFAULT ''"],
    ["rules_enabled","INTEGER DEFAULT 0"],
    ["personas_on","INTEGER DEFAULT 0"],
    ["mood_tracking","INTEGER DEFAULT 0"],
    ["antispam","INTEGER DEFAULT 0"],
    ["open_close","TEXT DEFAULT 'open'"],
    ["close_time","TEXT DEFAULT ''"],
    ["open_time","TEXT DEFAULT ''"],
  ];
  for (const [col, def] of newCols) {
    try { db().prepare(`ALTER TABLE group_settings ADD COLUMN ${col} ${def}`).run(); } catch {}
  }
}
try { migrateDB(); } catch {}

// ── List helpers ──────────────────────────────────────────────────────────────
function getList(chatId, field) {
  try { return JSON.parse(gsGet(chatId)[field] || "[]"); } catch { return []; }
}
function setList(chatId, field, arr) {
  gsSet(chatId, { [field]: JSON.stringify(arr) });
}

// ── Exported helpers for message.js ──────────────────────────────────────────
module.exports = {
  name: "Moderation",
  category: "moderation",
  desc: "Complete moderation, settings, anti-features, auto-features — all group-isolated, defaults OFF",
  command: [
    // ── Core moderation ────────────────────────────────────────────────────
    "ban","unban","kick","mute","unmute",
    "warn","warns","resetwarns","warnlevel",
    "promote","demote","tempadmin",
    "adminlist","admins",
    "link","resetlink",
    "setgroupname","setgroupdesc",
    "open","close",
    "closetime","opentime",
    "pin","unpin","delete","del","purge",
    "kickall","cancelkick",
    "listinactive","kickinactive",
    "listactive","listactive",
    // ── Anti-features (group-specific, defaults OFF) ────────────────────────
    "antilink","antilinkgc","antiforward","antibadword","antinsfw",
    "antibug","antidelete","antiedit","antispam",
    "antibot","antitag","antitagadmin","antigroupmention","antipromote",
    "antiforeign","addcode","delcode","listcode",
    "guard","autoguard","floodguard",
    // ── Badwords ──────────────────────────────────────────────────────────────
    "addbadword","addword","deletebadword","delword","rmword","badwords","clearwords",
    // ── Ignore / Sudo list ────────────────────────────────────────────────────
    "addignorelist","delignorelist",
    "addsudo","delsudo",
    // ── Auto-features (group-specific, defaults OFF) ──────────────────────────
    "autoreact","autotype","autorecord","autorecordtyping",
    // ── Warn settings ─────────────────────────────────────────────────────────
    "setwarn","resetwarn","listwarn",
    // ── Global bot features (owner/dev only) ──────────────────────────────────
    "alwaysonline",
    "anticall","setanticallmsg","showanticallmsg","delanticallmsg","testanticallmsg",
    "antideletestatus",
    "autobio",
    "autoreactstatus","autoviewstatus",
    "autoread","autoblock",
    // ── Auto-delete handled by autoclean.js ───────────────────────────────────
    // ── Bot identity (owner/dev only) ─────────────────────────────────────────
    "setbotname","setownername","setownerprofile","setownernumber",
    "setwatermark","setstickerauthor","setstickerpackname",
    "setstatusemoji","settimezone","setcontextlink","setmenuimage",
    // ── Mode / menu ───────────────────────────────────────────────────────────
    "mode","setmenu","setprefix",
    // ── Settings management ───────────────────────────────────────────────────
    "getsettings","resetsetting",
    // ── Group info ────────────────────────────────────────────────────────────
    "getgrouppp","setppgroup","delppgroup",
    "editsettings","tagall","tagadmin","mediatag",
    "hidetag","userid","groupinfo","ginfo","vcf","announcements","listrequests",
    "approveall","disapproveall","allow","delallowed","listallowed",
  ],

  // ── Exported helpers ───────────────────────────────────────────────────────
  isIgnored:      (chatId, userId) => getList(chatId, "ignore_list").includes(userId),
  isSudo:         (chatId, userId) => getList(chatId, "sudo_list").includes(userId),
  getAntiCallMsg: () => gset("anticall_msg") || "⛔ Sorry, calls are not allowed here.",
  isAntiCallOn:   () => !!gset("anticall", false),
  isAutoReadOn:   () => !!gset("autoread", false),
  isAlwaysOnline: () => !!gset("alwaysonline", false),
  getBotMode:     () => gset("bot_mode", "public"),
  getWarnLimit:   (chatId) => gsGet(chatId).setwarn_count || 3,
  isCountryBlocked: (chatId, num) => {
    const codes = getList(chatId, "country_codes");
    return codes.some(c => String(num).startsWith(String(c)));
  },

  run: async ({ sock, m, args, command, chatId, userId, reply,
                isOwner, isDev, isAdmin, prefix, mentionedJid, quotedMsg, isGroup }) => {

    const pfx    = prefix || "/";
    const chat   = chatId || m?.chat;
    const isGrp  = isGroup || (chat||"").endsWith("@g.us");
    const input  = args.join(" ").trim();
    const sub    = (args[0] || "").toLowerCase();
    const isOn   = sub === "on";
    const isOff  = sub === "off";
    const canUse = isOwner || isDev || isAdmin;

    // ── Helpers ───────────────────────────────────────────────────────────────
    async function getTarget() {
      if (quotedMsg?.sender) return quotedMsg.sender;
      if (mentionedJid?.[0]) return mentionedJid[0];
      if (args[0]) { const n = args[0].replace(/\D/g,""); if (n.length >= 7) return numToJid(n); }
      return null;
    }
    async function getMeta() { try { return await sock.groupMetadata(chat); } catch { return null; } }
    async function botIsAdmin() {
      try {
        const meta = await getMeta();
        if (!meta) return false;
        // Multiple normalization strategies to handle @lid, @s.whatsapp.net, device suffixes
        const norm     = jid => (jid || "").split("@")[0].split(":")[0].replace(/\D/g, "");
        const botRaw   = sock.user?.id || sock.user?.jid || "";
        const botNum   = norm(botRaw);
        const botJid1  = botNum + "@s.whatsapp.net";
        const botJid2  = botRaw;
        const botJid3  = botRaw.split(":")[0];
        const isAdminP = (p) => p.admin === "admin" || p.admin === "superadmin";
        // Check by normalized number, or by direct JID match (any format)
        const found = meta.participants.some(p => {
          const pNum = norm(p.id);
          return isAdminP(p) && (
            pNum === botNum ||
            p.id === botJid1 ||
            p.id === botJid2 ||
            p.id === botJid3 ||
            p.id.startsWith(botNum + "@") ||
            p.id.startsWith(botNum + ":")
          );
        });
        return found;
      } catch { return false; }
    }
    const notAdmin = () => reply(config.message?.admin || "🔒 Admin only.");
    const notOwner = () => reply("🔒 Owner/Dev only.");
    const grpOnly  = () => reply(config.message?.group || "📢 Group only.");

    // ══════════════════════════════════════════════════════════════════════════
    // SECTION 1: CORE MODERATION (group only, admin+ required)
    // ══════════════════════════════════════════════════════════════════════════

    if (["ban","kick","mute","unmute","warn","warns","resetwarns","promote","demote",
         "pin","unpin","delete","del","purge","kickall","cancelkick","listinactive",
         "kickinactive","link","resetlink","setgroupname","setgroupdesc","open","close",
         "closetime","opentime","adminlist","admins","getgrouppp","setppgroup","delppgroup",
         "announcements","listrequests","approveall","disapproveall","allow","delallowed",
         "listallowed","tagall","tagadmin","mediatag","hidetag","userid","vcf",
         "editsettings","listactive","setwarn","resetwarn","listwarn",
         "antilink","antilinkgc","antiforward","antibadword","antinsfw","antibug",
         "antidelete","antiedit","antispam","antibot","antitag","antitagadmin",
         "antigroupmention","antipromote","antiforeign","addcode","delcode","listcode",
         "guard","autoguard","floodguard","autoreact","autotype","autorecord",
         "autorecordtyping","addignorelist","delignorelist","addsudo","delsudo",
         "addbadword","addword","deletebadword","delword","rmword","badwords","clearwords",
         "warnlevel","tempadmin","unban"
        ].includes(command)) {

      if (!isGrp && !["adminlist","admins","addsudo","delsudo"].includes(command)) return grpOnly();
      if (!canUse) return notAdmin();
    }

    // ── BAN / UNBAN ───────────────────────────────────────────────────────────
    if (command === "ban") {
      const target = await getTarget();
      if (!target) return reply(`Usage: ${pfx}ban @user [reason]\nOr reply to a message.`);
      const reason = args.filter(a=>!a.startsWith("@")).slice(1).join(" ").trim() || "No reason";
      try {
        await sock.groupParticipantsUpdate(chat, [target], "remove");
        logRestriction(chat, target, "ban", reason, userId);
        return reply(`🚫 *Banned:* @${jidToNum(target)}\n📝 Reason: ${reason}`);
      } catch(e) { return reply(`❌ ${e.message}`); }
    }

    if (command === "setppgroup") {
      if (!canUse) return notAdmin();
      const q = m.quoted;
      const hasImg = q && (q.mtype === "imageMessage" || (q.mimetype||"").includes("image"));
      if (!hasImg) return reply("Reply to an image with " + pfx + "setppgroup");
      try {
        const buf = await sock.downloadMediaMessage(q);
        await sock.updateProfilePicture(chat, buf);
        return reply("✅ Group profile picture updated!");
      } catch(e) { return reply("❌ " + e.message); }
    }

    if (command === "getgrouppp") {
      try {
        const url = await sock.profilePictureUrl(chat, "image");
        return reply("🖼️ *Group Profile Picture:*\n" + url);
      } catch { return reply("❌ No group profile picture or could not fetch."); }
    }

    if (command === "delppgroup") {
      if (!canUse) return notAdmin();
      try {
        await sock.removeProfilePicture(chat);
        return reply("✅ Group profile picture removed.");
      } catch(e) { return reply("❌ " + e.message); }
    }

    if (command === "unban") {
      const num = (mentionedJid?.[0] ? jidToNum(mentionedJid[0]) : args[0]?.replace(/\D/g,"")) || "";
      if (!num) return reply(`Usage: ${pfx}unban @user or number`);
      try {
        const target = numToJid(num);
        await sock.groupParticipantsUpdate(chat, [target], "add");
        return reply(`✅ *Unbanned:* +${num}`);
      } catch(e) { return reply(`❌ ${e.message}`); }
    }

    // ── KICK ──────────────────────────────────────────────────────────────────
    if (command === "kick") {
      const target = await getTarget();
      if (!target) return reply(`Usage: ${pfx}kick @user [reason]`);
      const reason = args.filter(a=>!a.startsWith("@")).join(" ").trim() || "No reason";
      try {
        await sock.groupParticipantsUpdate(chat, [target], "remove");
        logRestriction(chat, target, "kick", reason, userId);
        return reply(`👢 *Kicked:* @${jidToNum(target)}\n📝 Reason: ${reason}`);
      } catch(e) { return reply(`❌ ${e.message}`); }
    }

    // ── KICK ALL / CANCEL ─────────────────────────────────────────────────────
    if (command === "kickall") {
      const meta = await getMeta();
      if (!meta) return reply("❌ Could not fetch group info.");
      const botId = sock.user?.id?.split(":")?.[0]+"@s.whatsapp.net";
      const members = meta.participants.filter(p => p.id!==userId && p.id!==botId && !p.admin);
      await reply(`⚠️ Kicking ${members.length} non-admin members...`);
      let ok=0;
      for (const p of members) {
        try { await sock.groupParticipantsUpdate(chat,[p.id],"remove"); ok++; await new Promise(r=>setTimeout(r,500)); } catch {}
      }
      return reply(`✅ Kicked ${ok}/${members.length} members.`);
    }

    // ── MUTE / UNMUTE (bot-tracked) ───────────────────────────────────────────
    if (command === "mute") {
      const target = await getTarget();
      if (!target) return reply(`Usage: ${pfx}mute @user [duration]\nExamples: ${pfx}mute @user 1h, ${pfx}mute @user 30m`);
      const durStr = args.find(a=>/^\d+[smhd]?$/.test(a));
      const secs   = durStr ? parseDuration(durStr) : 3600;
      muteUser(chat, target);
      logRestriction(chat, target, "mute", "", userId);
      await reply(`🔇 *Muted:* @${jidToNum(target)} for ${formatDuration(secs)}\nTheir messages will be deleted automatically.`);
      if (secs > 0) setTimeout(() => unmuteUser(chat, target), secs * 1000);
      return;
    }

    if (command === "unmute") {
      const target = await getTarget();
      if (!target) return reply(`Usage: ${pfx}unmute @user`);
      unmuteUser(chat, target);
      return reply(`🔊 *Unmuted:* @${jidToNum(target)}`);
    }

    // ── WARN ──────────────────────────────────────────────────────────────────
    if (command === "warn") {
      const target = await getTarget();
      if (!target) return reply(`Usage: ${pfx}warn @user [reason]`);
      const limit = gsGet(chat).setwarn_count || 3;
      const count = warnsAdd(chat, target, 1);
      await reply(`⚠️ *Warned:* @${jidToNum(target)}\n📊 Warns: ${count}/${limit}\n📝 ${args.filter(a=>!a.startsWith("@")).join(" ").trim() || "No reason"}`);
      if (count >= limit && (await botIsAdmin())) {
        try { await sock.groupParticipantsUpdate(chat,[target],"remove"); warnsReset(chat,target); await reply(`🔨 @${jidToNum(target)} auto-kicked after ${limit} warnings.`); } catch {}
      }
      return;
    }

    if (command === "warns") {
      const target = await getTarget() || userId;
      const count  = warnsGet(chat, target);
      const limit  = gsGet(chat).setwarn_count || 3;
      return reply(`⚠️ *Warns for @${jidToNum(target)}:* ${count}/${limit}`);
    }

    if (command === "resetwarns") {
      const target = await getTarget();
      if (!target) return reply(`Usage: ${pfx}resetwarns @user`);
      warnsReset(chat, target);
      return reply(`✅ Warns reset for @${jidToNum(target)}`);
    }

    // ── WARN SETTINGS ─────────────────────────────────────────────────────────
    if (command === "setwarn") {
      const n = parseInt(sub);
      if (!sub || isNaN(n) || n < 1 || n > 20) {
        const cur = gsGet(chat).setwarn_count || 3;
        return reply(`⚠️ *Warn Limit*\n\nCurrent: *${cur}*\n\nUsage: ${pfx}setwarn <1-20>\nMembers are auto-kicked at this number.`);
      }
      gsSet(chat, { setwarn_count: n });
      return reply(`✅ Warn limit set to *${n}*. Members kicked at ${n} warnings.`);
    }

    if (command === "resetwarn") {
      const target = await getTarget();
      if (target) { warnsReset(chat, target); return reply(`✅ Warns reset for @${jidToNum(target)}`); }
      db().prepare("DELETE FROM warns WHERE chat_id=?").run(chat);
      return reply("✅ All member warnings reset.");
    }

    if (command === "listwarn") {
      const rows = db().prepare("SELECT user_id,count FROM warns WHERE chat_id=? AND count>0 ORDER BY count DESC").all(chat);
      if (!rows.length) return reply("✅ No warnings on record.");
      const limit = gsGet(chat).setwarn_count || 3;
      const lines = [`⚠️ *Warning Records*\n`];
      for (const r of rows.slice(0,20)) lines.push(`• @${r.user_id.split("@")[0]} — ${r.count}/${limit}`);
      return reply(lines.join("\n"));
    }

    // ── PROMOTE / DEMOTE ──────────────────────────────────────────────────────
    if (command === "promote") {
      const target = await getTarget();
      if (!target) return reply(`Usage: ${pfx}promote @user`);
      try { await sock.groupParticipantsUpdate(chat,[target],"promote"); return reply(`👑 *Promoted:* @${jidToNum(target)}`); }
      catch(e) { return reply(`❌ ${e.message}`); }
    }

    if (command === "demote") {
      const target = await getTarget();
      if (!target) return reply(`Usage: ${pfx}demote @user`);
      try { await sock.groupParticipantsUpdate(chat,[target],"demote"); return reply(`📉 *Demoted:* @${jidToNum(target)}`); }
      catch(e) { return reply(`❌ ${e.message}`); }
    }

    if (command === "tempadmin") {
      const target = await getTarget();
      const durStr = args.find(a=>/^\d+[smhd]?$/.test(a));
      const secs   = durStr ? parseDuration(durStr) : 3600;
      if (!target) return reply(`Usage: ${pfx}tempadmin @user [duration]\nDefault: 1 hour`);
      try {
        await sock.groupParticipantsUpdate(chat,[target],"promote");
        await reply(`👑 *Temp Admin:* @${jidToNum(target)} for ${formatDuration(secs)}`);
        setTimeout(async () => {
          try { await sock.groupParticipantsUpdate(chat,[target],"demote"); await sock.sendMessage(chat,{text:`⏰ @${jidToNum(target)}'s temp admin expired.`}); } catch {}
        }, secs * 1000);
      } catch(e) { return reply(`❌ ${e.message}`); }
      return;
    }

    // ── ADMIN LIST ────────────────────────────────────────────────────────────
    if (["adminlist","admins"].includes(command)) {
      const meta = await getMeta();
      if (!meta) return reply("❌ Could not fetch group info.");
      const admins = meta.participants.filter(p=>p.admin).map(p=>`• @${jidToNum(p.id)}${p.admin==="superadmin"?" 👑":""}`);
      return reply(`👑 *Admins (${admins.length})*\n\n${admins.join("\n") || "None"}`);
    }

    // ── GROUP LINK ────────────────────────────────────────────────────────────
    if (command === "link") {
      try { const code = await sock.groupInviteCode(chat); return reply(`🔗 https://chat.whatsapp.com/${code}`); }
      catch(e) { return reply(`❌ ${e.message}`); }
    }

    if (command === "resetlink") {
      try { await sock.groupRevokeInvite(chat); const code = await sock.groupInviteCode(chat); return reply(`✅ Link reset!\n🔗 https://chat.whatsapp.com/${code}`); }
      catch(e) { return reply(`❌ ${e.message}`); }
    }

    // ── OPEN / CLOSE GROUP ────────────────────────────────────────────────────
    if (command === "open") {
      try { await sock.groupSettingUpdate(chat,"not_announcement"); gsSet(chat,{open_close:"open"}); return reply("✅ Group is now *OPEN* — all members can send."); }
      catch(e) { return reply(`❌ ${e.message}`); }
    }

    if (command === "close") {
      try { await sock.groupSettingUpdate(chat,"announcement"); gsSet(chat,{open_close:"closed"}); return reply("🔒 Group is now *CLOSED* — only admins can send."); }
      catch(e) { return reply(`❌ ${e.message}`); }
    }

    if (command === "closetime") {
      if (!sub) return reply(`Usage: ${pfx}closetime HH:MM\nExample: ${pfx}closetime 22:00\nGroup closes at this time daily.`);
      gsSet(chat, { close_time: sub });
      return reply(`✅ Group will auto-close at *${sub}* daily.`);
    }

    if (command === "opentime") {
      if (!sub) return reply(`Usage: ${pfx}opentime HH:MM\nExample: ${pfx}opentime 06:00\nGroup opens at this time daily.`);
      gsSet(chat, { open_time: sub });
      return reply(`✅ Group will auto-open at *${sub}* daily.`);
    }

    // ── PIN / DELETE ──────────────────────────────────────────────────────────
    if (command === "pin") {
      if (!quotedMsg) return reply(`Reply to a message with ${pfx}pin`);
      try { await sock.sendMessage(chat,{pin:{type:1,time:86400*7}},{quoted:quotedMsg}); return reply("📌 Pinned for 7 days."); }
      catch(e) { return reply(`❌ ${e.message}`); }
    }

    if (command === "unpin") {
      if (!quotedMsg) return reply(`Reply to a message with ${pfx}unpin`);
      try { await sock.sendMessage(chat,{pin:{type:2}},{quoted:quotedMsg}); return reply("📌 Unpinned."); }
      catch(e) { return reply(`❌ ${e.message}`); }
    }

    if (["delete","del"].includes(command)) {
      if (!quotedMsg) return reply(`Reply to a message with ${pfx}del`);
      try { await sock.sendMessage(chat,{delete:quotedMsg.key}); return reply("🗑️ Deleted."); }
      catch(e) { return reply(`❌ ${e.message}`); }
    }

    if (command === "purge") {
      const n = parseInt(sub) || 5;
      return reply(`_Purge is not directly supported by WhatsApp API — use ${pfx}del on individual messages._`);
    }

    // ── SET GROUP NAME / DESC ─────────────────────────────────────────────────
    if (command === "setgroupname") {
      if (!input) return reply(`Usage: ${pfx}setgroupname <name>`);
      try { await sock.groupUpdateSubject(chat, input); return reply("✅ Group name updated."); }
      catch(e) { return reply(`❌ ${e.message}`); }
    }

    if (command === "setgroupdesc") {
      if (!input) return reply("Usage: " + pfx + "setgroupdesc <description>\nBot must be group admin.");
      // Try directly first — let Baileys report the real error
      try {
        await sock.groupUpdateDescription(chat, input);
        return reply("✅ Group description updated.");
      } catch(e) {
        const errMsg = (e.message || "").toLowerCase();
        if (errMsg.includes("admin") || errMsg.includes("not-authorized") || errMsg.includes("forbidden")) {
          return reply("❌ Bot must be a group admin to change the description.\nPromote the bot to admin first.");
        }
        return reply("❌ Failed: " + e.message);
      }
    }

    // ── LIST INACTIVE ─────────────────────────────────────────────────────────
    if (["listinactive","kickinactive","listactive"].includes(command)) {
      const state    = getState();
      const now      = Date.now();
      const counts   = state.user_message_counts?.[chat] || {};
      const meta     = await getMeta();
      if (!meta) return reply("❌ Could not fetch group.");
      const threshold = (state.inactive_threshold || 86400) * 1000;
      const botId = sock.user?.id?.split(":")?.[0]+"@s.whatsapp.net";
      const inactive = [], active = [];
      for (const p of meta.participants) {
        if (p.id === botId) continue;
        const last = counts[p.id]?.last_msg || 0;
        if (now - last > threshold) inactive.push(p.id);
        else active.push(p.id);
      }
      if (command === "listactive") {
        if (!active.length) return reply("No active members found.");
        return reply(`✅ *Active Members (${active.length})*\n${active.slice(0,20).map(j=>`• @${jidToNum(j)}`).join("\n")}${active.length>20?`\n...+${active.length-20} more`:""}`);
      }
      if (!inactive.length) return reply("✅ No inactive members.");
      if (command === "kickinactive") {
          let kicked = 0;
        for (const j of inactive) { try { await sock.groupParticipantsUpdate(chat,[j],"remove"); kicked++; await new Promise(r=>setTimeout(r,400)); } catch {} }
        return reply(`✅ Kicked ${kicked} inactive members.`);
      }
      return reply(`😴 *Inactive Members (${inactive.length})*\n${inactive.slice(0,20).map(j=>`• @${jidToNum(j)}`).join("\n")}${inactive.length>20?`\n...+${inactive.length-20} more`:""}\n\nUse ${pfx}kickinactive to remove them.`);
    }

    // ── TAG ALL / TAG ADMIN ───────────────────────────────────────────────────
    if (command === "tagall") {
      // Visible tag — actually mentions all members with @numbers shown
      const meta = await getMeta();
      if (!meta) return reply("❌ Could not fetch group.");
      const members = meta.participants.map(p => p.id);
      const text    = input || "👋 Everyone!";
      // Split into chunks of 50 to avoid WA limits
      const chunks  = [];
      for (let i = 0; i < members.length; i += 50) chunks.push(members.slice(i, i + 50));
      for (const chunk of chunks) {
        const mentions = chunk.map(j => "@" + jidToNum(j)).join(" ");
        await sock.sendMessage(chat, { text: text + "\n" + mentions, mentions: chunk });
        if (chunks.length > 1) await new Promise(r => setTimeout(r, 1200));
      }
      return;
    }

    if (["ghosttag","hidetag"].includes(command)) {
      // Ghost tag — tags ALL members silently (they get notified but not visibly listed)
      const meta = await getMeta();
      if (!meta) return reply("❌ Could not fetch group.");
      const members = meta.participants.map(p => p.id);
      const text    = input || "📢";
      // Ghost tag: send message with mentions but no @numbers in visible text
      await sock.sendMessage(chat, { text, mentions: members });
      return;
    }

    if (command === "tagadmin") {
      const meta = await getMeta();
      if (!meta) return reply("❌ Could not fetch group.");
      const admins = meta.participants.filter(p=>p.admin).map(p=>p.id);
      const text   = input || "👑 Admins!";
      await sock.sendMessage(chat, { text: text+"\n"+admins.map(j=>`@${jidToNum(j)}`).join(" "), mentions: admins });
      return;
    }

    if (command === "userid") {
      // Usage:
      //   /userid                  → own profile
      //   /userid @tag             → tagged user
      //   /userid +2348012345678   → by number (with or without +)
      //   /userid 2348012345678    → by number digits only

      let target = null;
      let displayName = pushName || "Unknown";

      // Priority 1: number argument (e.g. /userid +234xxx or /userid 234xxx)
      const rawArg = (args.join("") || "").replace(/\s/g, "");
      const numOnly = rawArg.replace(/[^0-9]/g, "");

      if (rawArg.startsWith("+") || rawArg.startsWith("00") || (numOnly.length >= 10 && !rawArg.includes("@"))) {
        // Build proper JID
        const cleanNum = numOnly.startsWith("00") ? numOnly.slice(2) : numOnly;
        target = `${cleanNum}@s.whatsapp.net`;
        displayName = cleanNum; // will try to resolve name below
      } else {
        // Priority 2: @mention or reply
        target = await getTarget() || null;
        if (!target) target = userId;
      }

      const tNum = (target || "").split("@")[0].replace(/[^0-9]/g, "");
      const isMe = target === userId;

      // ── Resolve display name — try contact store, then group metadata ────────
      try {
        // Try contact store first (works for contacts in address book)
        const contacts = sock?.store?.contacts || {};
        const contact  = contacts[target] || contacts[target.split("@")[0]];
        if (contact?.name || contact?.notify) {
          displayName = contact.name || contact.notify;
        }
      } catch {}
      try {
        const meta   = await sock.groupMetadata(chat);
        const member = meta.participants.find(p => p.id === target || p.id?.includes(tNum));
        if (member?.id) {
          target = member.id;
          // Try to get name from group participant info
        }
      } catch {}

      // ── Gather all available data ─────────────────────────────────────────
      const { warnsGet, xpGet } = require("../library/db");

      let warnCount = 0, xpInfo = { level: 1, xp: 0, msg_count: 0 };
      try { warnCount = warnsGet(chat, target); } catch {}
      try { xpInfo    = xpGet(chat, target);    } catch {}

      let groupStatus = "—", groupRole = "";
      try {
        const meta = await sock.groupMetadata(chat);
        const part = meta.participants.find(p => p.id === target);
        if (!part)                              { groupStatus = "Not in group"; }
        else if (part.admin === "superadmin")   { groupStatus = "⭐ Group Owner"; }
        else if (part.admin === "admin")        { groupStatus = "🛡️ Admin"; }
        else                                    { groupStatus = "👤 Member"; }
      } catch {
        if (isMe) groupStatus = "—";
      }

      let ppUrl = null;
      try { ppUrl = await sock.profilePictureUrl(target, "image"); } catch {}

      let about = "";
      try {
        const statusRes = await sock.fetchStatus(target);
        about = statusRes?.status || statusRes?.setAt ? (statusRes.status || "") : "";
      } catch {}

      // ── Device / platform detection ───────────────────────────────────────
      let device = "Unknown";
      try {
        // Baileys encodes device type in the JID resource part
        const jidFull = target || "";
        if      (jidFull.includes(":"))   device = "Multi-Device";
        else if (tNum.length === 15)       device = "Business";
        else                               device = "Standard";
      } catch {}

      // ── Build profile card (mirrors TG format) ────────────────────────────
      const sep1 = "─".repeat(30);
      const lines = [
        `🌐 *User Info*`,
        sep1,
        ``,
        `🪪 *Name:*         ${displayName}`,
        `📱 *Number:*       +${tNum}`,
        `🆔 *WA JID:*       ${target || "—"}`,
        ``,
        sep1,
        ``,
        `📍 *Group Status:* ${groupStatus}`,
        `💬 *Messages:*     ${xpInfo.msg_count.toLocaleString()}`,
        `⚠️  *Warnings:*     ${warnCount}`,
        `🏆 *XP / Level:*   ${xpInfo.xp} XP  •  Lv. ${xpInfo.level}`,
        `📲 *Device:*       ${device}`,
        about ? `\n${sep1}\n\n📝 *Bio / About:*\n${about.slice(0, 300)}` : "",
        ``,
        sep1,
        ``,
        `🔗 https://wa.me/${tNum}`,
      ].filter(s => s !== null && s !== undefined).join("\n");

      // Send with profile picture if available
      let imgBuf2 = null;
      if (ppUrl) {
        try {
          const ax2 = require("axios");
          const res2 = await ax2.get(ppUrl, { responseType: "arraybuffer", timeout: 12000 });
          if (res2.data && res2.data.byteLength > 500) imgBuf2 = Buffer.from(res2.data);
        } catch {}
      }
      if (imgBuf2) {
        try { return await sock.sendMessage(chat, { image: imgBuf2, caption: lines }, { quoted: m }); } catch {}
      }
      return reply(lines);
    }

    // ── APPROVE/DISAPPROVE ALL ────────────────────────────────────────────────
    if (command === "approveall") {
      try {
        const requests = await sock.groupRequestParticipantsList(chat);
        if (!requests?.length) return reply("✅ No pending join requests.");
        const jids = requests.map(r => r.jid);
        await sock.groupRequestParticipantsUpdate(chat, jids, "approve");
        return reply("✅ Approved " + jids.length + " join request(s).");
      } catch(e) { return reply("❌ " + e.message); }
    }

    if (command === "allow") {
      // Allow a specific user to join / approve their request
      const target = await getTarget();
      if (!target) return reply("Usage: " + pfx + "allow @user\nApproves a specific member's join request.");
      try {
        await sock.groupRequestParticipantsUpdate(chat, [target], "approve");
        return reply("✅ Approved join request for @" + jidToNum(target));
      } catch {
        // Fallback: try to add directly
        try {
          await sock.groupParticipantsUpdate(chat, [target], "add");
          return reply("✅ Added @" + jidToNum(target) + " to the group.");
        } catch(e) { return reply("❌ " + e.message); }
      }
    }

    if (command === "delallowed") {
      const target = await getTarget();
      if (!target) return reply("Usage: " + pfx + "delallowed @user\nRejects a pending join request.");
      try {
        await sock.groupRequestParticipantsUpdate(chat, [target], "reject");
        return reply("✅ Rejected join request for @" + jidToNum(target));
      } catch(e) { return reply("❌ " + e.message); }
    }

    if (command === "listallowed") {
      try {
        const requests = await sock.groupRequestParticipantsList(chat);
        if (!requests?.length) return reply("✅ No pending join requests.");
        const lines = ["📋 *Pending Join Requests (" + requests.length + ")*\n"];
        for (const r of requests.slice(0, 20)) {
          lines.push("• +" + jidToNum(r.jid || r) + (r.requestMethod ? " via " + r.requestMethod : ""));
        }
        return reply(lines.join("\n"));
      } catch(e) { return reply("❌ " + e.message); }
    }

    if (command === "announcements") {
      const gs = gsGet(chat);
      return reply([
        `📢 *Group Settings*`,
        `Status: ${gs.open_close || "open"}`,
        `Auto-close: ${gs.close_time || "Not set"}`,
        `Auto-open: ${gs.open_time || "Not set"}`,
      ].join("\n"));
    }

    // ══════════════════════════════════════════════════════════════════════════
    // SECTION 2: ANTI-FEATURES (group-isolated, all default OFF)
    // ══════════════════════════════════════════════════════════════════════════

    if (["antilink","antilinkgc"].includes(command)) {
      let mode = sub === "on" ? "delete" : sub;
      if (!["off","delete","warn","kick"].includes(mode)) {
        const cur = gsGet(chat).antilink_mode || "off";
        return reply([`🔗 *Anti-Link* — Current: *${cur}*`,``,`Usage: ${pfx}antilink <mode>`,`Modes: off | delete (on) | warn | kick`,``,`• delete — removes the link`,`• warn   — deletes + warns the sender`,`• kick   — deletes + kicks the sender`].join("\n"));
      }
      gsSet(chat, { antilink_mode: mode });
      return reply(`✅ Anti-link: *${mode}*${mode==="off"?" — disabled":" — active"}`);
    }

    if (command === "antiforward") {
      let mode = sub === "on" ? "delete" : sub;
      if (!["off","delete","warn","kick"].includes(mode)) {
        return reply(`📤 *Anti-Forward* — Current: *${gsGet(chat).antiforward_mode||"off"}*\n\nUsage: ${pfx}antiforward <off|delete|warn|kick>`);
      }
      gsSet(chat, { antiforward_mode: mode });
      return reply(`✅ Anti-forward: *${mode}*`);
    }

    if (command === "antibadword") {
      let mode = sub === "on" ? "delete" : sub;
      if (!["off","delete","warn","kick"].includes(mode)) {
        return reply(`🤬 *Anti-Badword* — Current: *${gsGet(chat).antibadword_mode||"off"}*\n\nUsage: ${pfx}antibadword <off|delete|warn|kick>\n\nUse ${pfx}addbadword to add words to the list.`);
      }
      gsSet(chat, { antibadword_mode: mode });
      return reply(`✅ Anti-badword: *${mode}*`);
    }

    if (command === "antinsfw") {
      if (!isOn && !isOff) return reply(`🔞 *Anti-NSFW* — Current: *${gsGet(chat).antinsfw?"on":"off"}*\n\nUsage: ${pfx}antinsfw on/off\n\nDetects and removes NSFW images/videos.`);
      gsSet(chat, { antinsfw: isOn ? 1 : 0 });
      return reply(`✅ Anti-NSFW: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    if (command === "antibug") {
      if (!isOn && !isOff) return reply(`🐛 *Anti-Bug* — Current: *${gsGet(chat).antibug?"on":"off"}*\n\nUsage: ${pfx}antibug on/off\n\nDeletes messages with crash/exploit strings.`);
      gsSet(chat, { antibug: isOn ? 1 : 0 });
      return reply(`✅ Anti-Bug: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    if (command === "antidelete") {
      if (!isOn && !isOff) return reply(`🔄 *Anti-Delete* — Current: *${gsGet(chat).antidelete?"on":"off"}*\n\nUsage: ${pfx}antidelete on/off\n\nWhen on, bot reposts messages that members delete.`);
      gsSet(chat, { antidelete: isOn ? 1 : 0 });
      return reply(`✅ Anti-Delete: *${isOn?"Enabled ✅ — Bot will repost deleted messages":"Disabled ❌"}*`);
    }

    if (command === "antiedit") {
      if (!isOn && !isOff) return reply(`✏️ *Anti-Edit* — Current: *${gsGet(chat).antiedit?"on":"off"}*\n\nUsage: ${pfx}antiedit on/off\n\nWhen on, bot shows the original text before edits.`);
      gsSet(chat, { antiedit: isOn ? 1 : 0 });
      return reply(`✅ Anti-Edit: *${isOn?"Enabled ✅ — Original messages will be shown on edit":"Disabled ❌"}*`);
    }

    if (command === "antispam") {
      if (!isOn && !isOff) return reply(`🚫 *Anti-Spam* — Current: *${gsGet(chat).antispam?"on":"off"}*\n\nUsage: ${pfx}antispam on/off\n\nDetects and deletes spam (5+ messages in 10 seconds).`);
      gsSet(chat, { antispam: isOn ? 1 : 0 });
      return reply(`✅ Anti-Spam: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    if (command === "antibot") {
      if (!isOn && !isOff) return reply(`🤖 *Anti-Bot* — Current: *${gsGet(chat).antibot?"on":"off"}*\n\nUsage: ${pfx}antibot on/off\n\nRemoves other bots that join this group.`);
      gsSet(chat, { antibot: isOn ? 1 : 0 });
      return reply(`✅ Anti-Bot: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    if (command === "antitag") {
      if (!isOn && !isOff) return reply(`🏷️ *Anti-Tag* — Current: *${gsGet(chat).antitag?"on":"off"}*\n\nUsage: ${pfx}antitag on/off\n\nPrevents members from tagging everyone (@all/@everyone mentions).`);
      gsSet(chat, { antitag: isOn ? 1 : 0 });
      return reply(`✅ Anti-Tag: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    if (command === "antitagadmin") {
      if (!isOn && !isOff) return reply(`👑 *Anti-Tag Admin* — Current: *${gsGet(chat).antitagadmin?"on":"off"}*\n\nUsage: ${pfx}antitagadmin on/off\n\nPrevents non-admins from tagging admins.`);
      gsSet(chat, { antitagadmin: isOn ? 1 : 0 });
      return reply(`✅ Anti-Tag Admin: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    if (command === "antigroupmention") {
      if (!isOn && !isOff) return reply(`📣 *Anti-Group-Mention* — Current: *${gsGet(chat).antigroupmention?"on":"off"}*\n\nUsage: ${pfx}antigroupmention on/off\n\nPrevents @everyone/@all mass mentions.`);
      gsSet(chat, { antigroupmention: isOn ? 1 : 0 });
      return reply(`✅ Anti-Group-Mention: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    if (command === "antipromote") {
      if (!isOn && !isOff) return reply(`📢 *Anti-Promote* — Current: *${gsGet(chat).antipromote?"on":"off"}*\n\nUsage: ${pfx}antipromote on/off\n\nDeletes messages that look like promotional ads.`);
      gsSet(chat, { antipromote: isOn ? 1 : 0 });
      return reply(`✅ Anti-Promote: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    if (command === "antiforeign") {
      if (!isOn && !isOff) return reply(`🌍 *Anti-Foreign* — Current: *${gsGet(chat).antiforeign?"on":"off"}*\n\nUsage: ${pfx}antiforeign on/off\n\nRemoves members from blocked country codes (use ${pfx}addcode to set codes).`);
      gsSet(chat, { antiforeign: isOn ? 1 : 0 });
      return reply(`✅ Anti-Foreign: *${isOn?"Enabled ✅":"Disabled ❌"}*\n\nUse ${pfx}addcode to add country codes to block.`);
    }

    // ── COUNTRY CODES ─────────────────────────────────────────────────────────
    if (["addcode","addcountrycode"].includes(command)) {
      if (!input) return reply(`Usage: ${pfx}addcode <code>\nExample: ${pfx}addcode 44\n\nBlocks numbers starting with +44 from joining.`);
      const code = input.replace(/\D/g,"");
      const codes = getList(chat, "country_codes");
      if (codes.includes(code)) return reply(`⚠️ +${code} already blocked.`);
      codes.push(code);
      setList(chat, "country_codes", codes);
      return reply(`✅ Country code *+${code}* added. Numbers with this code cannot join.`);
    }

    if (["delcode","delcountrycode"].includes(command)) {
      if (!input) return reply(`Usage: ${pfx}delcode <code>`);
      const code  = input.replace(/\D/g,"");
      setList(chat, "country_codes", getList(chat,"country_codes").filter(c=>c!==code));
      return reply(`✅ Country code *+${code}* removed.`);
    }

    if (["listcode","listcountrycode"].includes(command)) {
      const codes = getList(chat, "country_codes");
      if (!codes.length) return reply(`No country codes blocked.\nUse ${pfx}addcode to block a country.`);
      return reply(`🚫 *Blocked Country Codes:*\n${codes.map(c=>`  • +${c}`).join("\n")}`);
    }

    // ── FLOOD GUARD ───────────────────────────────────────────────────────────
    if (["guard","autoguard","floodguard"].includes(command)) {
      if (!isOn && !isOff) {
        const gs = gsGet(chat);
        return reply([`🛡️ *Flood Guard* — Current: *${gs.guard_on?"on":"off"}*`,``,`Usage: ${pfx}guard on/off`,``,`Detects message flooding (5+ messages in 10s) and mutes the user.`].join("\n"));
      }
      gsSet(chat, { guard_on: isOn ? 1 : 0, autoguard: isOn ? 1 : 0 });
      return reply(`✅ Flood Guard: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    // ── AUTO REACT (group messages) ───────────────────────────────────────────
    if (command === "autoreact") {
      if (!input) {
        const cur = gsGet(chat).autoreact_emoji || "";
        return reply([`😊 *Auto React* — Current: *${cur||"off"}*`,``,`Usage: ${pfx}autoreact <emoji>`,`Example: ${pfx}autoreact 👍`,`Multiple: ${pfx}autoreact 👍❤️🔥 (random pick)`,`Disable: ${pfx}autoreact off`].join("\n"));
      }
      if (sub === "off") { gsSet(chat, { autoreact_emoji: "" }); return reply("❌ Auto-React disabled."); }
      gsSet(chat, { autoreact_emoji: input });
      return reply(`✅ Auto-React enabled: *${input}*\n\nBot will react to messages with this emoji.`);
    }

    // ── AUTO TYPE / RECORD ────────────────────────────────────────────────────
    if (command === "autotype") {
      if (!isOn && !isOff) return reply(`⌨️ *Auto Typing* — Current: *${gsGet(chat).autotype?"on":"off"}*\n\nUsage: ${pfx}autotype on/off\n\nShows 'typing...' indicator before bot replies.`);
      gsSet(chat, { autotype: isOn ? 1 : 0 });
      return reply(`✅ Auto-Typing: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    if (command === "autorecord") {
      if (!isOn && !isOff) return reply(`🎙️ *Auto Recording* — Current: *${gsGet(chat).autorecord?"on":"off"}*\n\nUsage: ${pfx}autorecord on/off\n\nShows 'recording...' indicator before voice note replies.`);
      gsSet(chat, { autorecord: isOn ? 1 : 0 });
      return reply(`✅ Auto-Recording: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    if (command === "autorecordtyping") {
      if (!isOn && !isOff) return reply(`🎙️ *Auto Record+Type* — Current: *${gsGet(chat).autorecordtyping?"on":"off"}*\n\nUsage: ${pfx}autorecordtyping on/off`);
      gsSet(chat, { autorecordtyping: isOn ? 1 : 0 });
      return reply(`✅ Auto-Record+Type: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    // ── BADWORDS ──────────────────────────────────────────────────────────────
    if (["addbadword","addword"].includes(command)) {
      if (!input) return reply(`Usage: ${pfx}addbadword <word>\nAdds word to this group's filter list.`);
      badwordAdd(chat, input.toLowerCase());
      return reply(`✅ *"${input}"* added to bad word list.\n\nMessages containing this word will be handled based on your ${pfx}antibadword setting.`);
    }

    if (["deletebadword","delword","rmword"].includes(command)) {
      if (!input) return reply(`Usage: ${pfx}delword <word>`);
      badwordDel(chat, input.toLowerCase());
      return reply(`✅ *"${input}"* removed from bad word list.`);
    }

    if (command === "badwords") {
      const words = badwordList(chat);
      if (!words.length) return reply(`No bad words set.\nUse ${pfx}addbadword to add words.`);
      return reply(`🤬 *Bad Words (${words.length}):*\n${words.map(w=>`• ${w}`).join("\n")}`);
    }

    if (command === "clearwords") {
      db().prepare("DELETE FROM badwords WHERE chat_id=?").run(chat);
      return reply("✅ All bad words cleared.");
    }

    // ── IGNORE LIST ───────────────────────────────────────────────────────────
    if (command === "addignorelist") {
      const target = mentionedJid?.[0] || (sub ? numToJid(sub.replace(/\D/g,"")) : null);
      if (!target) return reply(`Usage: ${pfx}addignorelist @user\n\nBot ignores ALL messages from this user.`);
      const list = getList(chat, "ignore_list");
      if (list.includes(target)) return reply("⚠️ Already on ignore list.");
      list.push(target);
      setList(chat, "ignore_list", list);
      return reply(`✅ @${jidToNum(target)} added to ignore list.`);
    }

    if (command === "delignorelist") {
      const target = mentionedJid?.[0] || (sub ? numToJid(sub.replace(/\D/g,"")) : null);
      if (!target) return reply(`Usage: ${pfx}delignorelist @user`);
      setList(chat, "ignore_list", getList(chat,"ignore_list").filter(u=>u!==target));
      return reply(`✅ @${jidToNum(target)} removed from ignore list.`);
    }

    // ── SUDO LIST ─────────────────────────────────────────────────────────────
    if (command === "addsudo") {
      if (!isOwner && !isDev) return notOwner();
      const target = mentionedJid?.[0] || (sub ? numToJid(sub.replace(/\D/g,"")) : null);
      if (!target) return reply(`Usage: ${pfx}addsudo @user\n\nSudo users can use admin commands without being WA admin.`);
      const list = getList(chat, "sudo_list");
      if (list.includes(target)) return reply("⚠️ Already a sudo user.");
      list.push(target);
      setList(chat, "sudo_list", list);
      return reply(`✅ @${jidToNum(target)} added as sudo user.\n\nThey can now use admin-level bot commands.`);
    }

    if (command === "delsudo") {
      if (!isOwner && !isDev) return notOwner();
      const target = mentionedJid?.[0] || (sub ? numToJid(sub.replace(/\D/g,"")) : null);
      if (!target) return reply(`Usage: ${pfx}delsudo @user`);
      setList(chat, "sudo_list", getList(chat,"sudo_list").filter(u=>u!==target));
      return reply(`✅ @${jidToNum(target)} removed from sudo list.`);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // SECTION 3: GLOBAL BOT FEATURES (owner/dev only)
    // ══════════════════════════════════════════════════════════════════════════

    // ── ALWAYS ONLINE ─────────────────────────────────────────────────────────
    if (command === "alwaysonline") {
      if (!isOwner && !isDev) return notOwner();
      if (!isOn && !isOff) return reply(`👁️ *Always Online* — Current: *${gset("alwaysonline",false)?"on":"off"}*\n\nUsage: ${pfx}alwaysonline on/off\n\nBot will always appear online to all contacts.`);
      sset("alwaysonline", isOn);
      try { await sock.sendPresenceUpdate(isOn ? "available" : "unavailable"); } catch {}
      return reply(`✅ Always Online: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    // ── ANTI-CALL ─────────────────────────────────────────────────────────────
    if (command === "anticall") {
      if (!isOwner && !isDev) return notOwner();
      if (!isOn && !isOff) return reply(`📵 *Anti-Call* — Current: *${gset("anticall",false)?"on":"off"}*\n\nUsage: ${pfx}anticall on/off\n\nRejects all incoming calls and sends a message.\nCustomize message: ${pfx}setanticallmsg`);
      sset("anticall", isOn);
      return reply(`✅ Anti-Call: *${isOn?"Enabled ✅ — All calls will be rejected":"Disabled ❌"}*`);
    }

    if (command === "setanticallmsg") {
      if (!isOwner && !isDev) return notOwner();
      if (!input) return reply(`Usage: ${pfx}setanticallmsg <message>\nCurrent: "${gset("anticall_msg","⛔ Calls not allowed.")}"`);
      sset("anticall_msg", input);
      return reply(`✅ Anti-call message set:\n\n"${input}"`);
    }

    if (command === "showanticallmsg") {
      const msg = gset("anticall_msg", "⛔ Sorry, calls are not allowed here.");
      return reply(`📵 *Anti-Call Message:*\n\n"${msg}"`);
    }

    if (command === "delanticallmsg") {
      if (!isOwner && !isDev) return notOwner();
      sset("anticall_msg", "");
      return reply("✅ Anti-call message cleared. Default message will be used.");
    }

    if (command === "testanticallmsg") {
      const msg = gset("anticall_msg", "⛔ Sorry, calls are not allowed here.");
      return reply(`📵 *Test — This is what callers receive:*\n\n${msg}`);
    }

    // ── ANTI-DELETE STATUS ────────────────────────────────────────────────────
    if (command === "antideletestatus") {
      if (!isOwner && !isDev) return notOwner();
      if (!isOn && !isOff) return reply(`📷 *Anti-Delete Status* — Current: *${gset("antideletestatus",false)?"on":"off"}*\n\nUsage: ${pfx}antideletestatus on/off\n\nSaves status updates when someone deletes them.`);
      sset("antideletestatus", isOn);
      return reply(`✅ Anti-Delete Status: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    // ── AUTO BIO ──────────────────────────────────────────────────────────────
    if (command === "autobio") {
      if (!isOwner && !isDev) return notOwner();
      if (!input) {
        const txt = gset("autobio_text","");
        const on  = gset("autobio_on",false);
        return reply([`📝 *Auto Bio* — Current: *${on?"on":"off"}*`,`${txt?`Text: "${txt}"`:""}`,``,`Usage: ${pfx}autobio <text>`,`Variables: {time} {date} {uptime}`,`Example: ${pfx}autobio 🤖 Miss Chatra | {time} WAT`,`Disable: ${pfx}autobio off`].filter(Boolean).join("\n"));
      }
      if (sub === "off") { sset("autobio_on",false); return reply("❌ Auto-Bio disabled."); }
      sset("autobio_text", input);
      sset("autobio_on", true);
      return reply(`✅ Auto-Bio enabled:\n"${input}"\n\nUpdates hourly. Variables: {time} {date} {uptime}`);
    }

    // ── AUTO REACT STATUS ─────────────────────────────────────────────────────
    if (command === "autoreactstatus") {
      if (!isOwner && !isDev) return notOwner();
      if (!input) return reply(`👍 *Auto-React Status* — Current: *${gset("autoreactstatus_emoji","")||"off"}*\n\nUsage: ${pfx}autoreactstatus <emoji>\nExample: ${pfx}autoreactstatus 🔥\nDisable: ${pfx}autoreactstatus off`);
      if (sub === "off") { sset("autoreactstatus_emoji",""); return reply("❌ Auto-React Status disabled."); }
      sset("autoreactstatus_emoji", input);
      return reply(`✅ Bot will react to all status updates with: *${input}*`);
    }

    // ── AUTO VIEW STATUS ──────────────────────────────────────────────────────
    if (command === "autoviewstatus") {
      if (!isOwner && !isDev) return notOwner();
      if (!isOn && !isOff) return reply(`👁️ *Auto-View Status* — Current: *${gset("autoviewstatus",false)?"on":"off"}*\n\nUsage: ${pfx}autoviewstatus on/off\n\nBot auto-views all contacts' status updates.`);
      sset("autoviewstatus", isOn);
      return reply(`✅ Auto-View Status: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    // ── AUTO READ ─────────────────────────────────────────────────────────────
    if (command === "autoread") {
      if (!isOwner && !isDev) return notOwner();
      if (!isOn && !isOff) return reply(`✅ *Auto-Read* — Current: *${gset("autoread",false)?"on":"off"}*\n\nUsage: ${pfx}autoread on/off\n\nBot auto-marks all messages as read (blue ticks).`);
      sset("autoread", isOn);
      return reply(`✅ Auto-Read: *${isOn?"Enabled ✅ — All messages auto-read":"Disabled ❌"}*`);
    }

    // ── AUTO BLOCK ────────────────────────────────────────────────────────────
    if (command === "autoblock") {
      if (!isOwner && !isDev) return notOwner();
      if (!isOn && !isOff) return reply(`🚫 *Auto-Block* — Current: *${gset("autoblock",false)?"on":"off"}*\n\nUsage: ${pfx}autoblock on/off\n\nAuto-blocks unknown numbers that DM the bot.`);
      sset("autoblock", isOn);
      return reply(`✅ Auto-Block: *${isOn?"Enabled ✅":"Disabled ❌"}*`);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // SECTION 4: AUTO-DELETE — routed via autoclean.js (all /autodelete* cmds)
    // ══════════════════════════════════════════════════════════════════════════

    // ══════════════════════════════════════════════════════════════════════════
    // SECTION 5: BOT IDENTITY (owner/dev only)
    // ══════════════════════════════════════════════════════════════════════════

    if (command === "setbotname") {
      if (!isOwner && !isDev) return notOwner();
      const current = gset("bot_name") || config.botName || "Miss Chatra";
      if (!input) return reply(
        "🤖 *Set Bot Name*\n\n" +
        "Current: *" + current + "*\n\n" +
        "Usage: " + pfx + "setbotname <n>\n" +
        "Example: " + pfx + "setbotname Miss Chatra\n\n" +
        "Changes the bot name shown in /menu and all bot responses.\n" +
        "To change WhatsApp profile name, use: " + pfx + "setownerprofile <n>"
      );
      sset("bot_name", input);
      try { config.botName = input; } catch {}
      return reply("✅ *Bot name set to: " + input + "*\n\nThe /menu header now shows: ◈ *" + input + "* ◈");
    }

    if (command === "setownername") {
      if (!isOwner && !isDev) return notOwner();
      const current = gset("owner_name") || config.ownerName || "Owner";
      if (!input) return reply(
        "👤 *Set Owner Name*\n\n" +
        "Current: *" + current + "*\n\n" +
        "Usage: " + pfx + "setownername <n>\n\n" +
        "This is the name the bot uses to address you."
      );
      sset("owner_name", input);
      try { config.ownerName = input; } catch {}
      return reply("✅ *Owner name set to: " + input + "*\n\nThe bot will now address you as *" + input + "*.");
    }

    if (command === "setownerprofile") {
      if (!isOwner && !isDev) return notOwner();
      const current = gset("owner_wa_name") || "";
      if (!input) return reply(
        "👤 *Set WhatsApp Profile Name*\n\n" +
        (current ? "Current saved: *" + current + "*\n\n" : "") +
        "Usage: " + pfx + "setownerprofile <n>\n" +
        "Example: " + pfx + "setownerprofile Justice Tech\n\n" +
        "This changes the actual WhatsApp display name of the bot account."
      );
      sset("owner_wa_name", input);
      let waUpdated = false;
      try { await sock.updateProfileName(input); waUpdated = true; } catch {}
      if (!waUpdated) {
        try {
          await sock.query({
            tag: "iq",
            attrs: { to: "s.whatsapp.net", type: "set", xmlns: "w:profile:picture" },
            content: [{ tag: "name", attrs: {}, content: input }]
          });
          waUpdated = true;
        } catch {}
      }
      return reply(
        waUpdated
          ? "✅ WhatsApp profile name changed to: *" + input + "*"
          : "⚠️ Could not update WhatsApp profile name automatically.\n\nChange it manually:\nWhatsApp → Settings → Profile → tap name → edit"
      );
    }

    if (command === "setownerprofile") {
      if (!isOwner && !isDev) return notOwner();
      if (!input) return reply(
        "📛 *Set WhatsApp Profile Name*\n\n" +
        "Usage: " + pfx + "setownerprofile <n>\n" +
        "Example: " + pfx + "setownerprofile Justice\n\n" +
        "This changes the bot account\'s actual WhatsApp display name\n" +
        "(the name people see when they view the bot\'s profile)."
      );
      let changed = false;
      try { await sock.updateProfileName(input); changed = true; } catch {}
      if (!changed) {
        try {
          await sock.query({
            tag: "iq", attrs: { to: "s.whatsapp.net", type: "set", xmlns: "w:profile:picture" },
            content: [{ tag: "name", attrs: {}, content: input }]
          });
          changed = true;
        } catch {}
      }
      return reply(
        changed
          ? "✅ WhatsApp profile name changed to *" + input + "*"
          : "❌ Could not update WhatsApp profile name.\n\nThis may require updating manually via WhatsApp Settings → Profile."
      );
    }


    if (command === "setownerprofile") {
      if (!isOwner && !isDev) return notOwner();
      if (!input) return reply(
        "📱 *Set WhatsApp Profile Name*\n\n" +
        "Usage: " + pfx + "setownerprofile <n>\n" +
        "Example: " + pfx + "setownerprofile Justice\n\n" +
        "Changes the actual WhatsApp display name of the bot account.\n" +
        "This is the name people see when the bot messages them."
      );
      let updated = false;
      // Try Baileys updateProfileName (changes WA profile name of the bot's WA account)
      try {
        await sock.updateProfileName(input);
        updated = true;
      } catch(e1) {
        try {
          if (typeof sock.query === "function") {
            await sock.query({
              tag: "iq",
              attrs: { to: "s.whatsapp.net", type: "set", xmlns: "w:profile:picture" },
              content: [{ tag: "name", attrs: {}, content: input }]
            });
            updated = true;
          }
        } catch {}
      }
      if (updated) {
        return reply("✅ *WhatsApp profile name changed to: " + input + "*\n\nPeople will now see this name when the bot messages them.");
      } else {
        return reply("❌ Could not update WhatsApp profile name.\n\nThis requires the bot to have an active WhatsApp session. Try again after a moment.");
      }
    }

    if (command === "setownernumber") {
      if (!isOwner && !isDev) return notOwner();
      if (!input) return reply(`Usage: ${pfx}setownernumber <number>\nExample: ${pfx}setownernumber 2349012345678`);
      sset("owner_number", input.replace(/\D/g,""));
      return reply(`✅ Owner number updated.`);
    }

    if (command === "setwatermark") {
      if (!isOwner && !isDev) return notOwner();
      if (!input) return reply(`Usage: ${pfx}setwatermark <text>\nCurrent: "${gset("watermark","")||"None"}"\nDisable: ${pfx}setwatermark off`);
      sset("watermark", sub==="off"?"":input);
      return reply(sub==="off"?"✅ Watermark removed.":`✅ Watermark: "${input}"`);
    }

    if (command === "setstickerauthor") {
      if (!isOwner && !isDev) return notOwner();
      if (!input) return reply(`Usage: ${pfx}setstickerauthor <n>\nCurrent: ${gset("sticker_author",config.sticker?.author||"Miss Chatra")}`);
      sset("sticker_author", input);
      return reply(`✅ Sticker author: *${input}*`);
    }

    if (command === "setstickerpackname") {
      if (!isOwner && !isDev) return notOwner();
      if (!input) return reply(`Usage: ${pfx}setstickerpackname <n>\nCurrent: ${gset("sticker_pack",config.sticker?.packname||"Miss Chatra")}`);
      sset("sticker_pack", input);
      return reply(`✅ Sticker pack: *${input}*`);
    }

    if (command === "setstatusemoji") {
      if (!isOwner && !isDev) return notOwner();
      if (!input) return reply(`Usage: ${pfx}setstatusemoji <emoji>\nCurrent: ${gset("status_emoji","🤖")}`);
      sset("status_emoji", input);
      return reply(`✅ Status emoji: ${input}`);
    }

    if (command === "settimezone") {
      if (!isOwner && !isDev) return notOwner();
      if (!input) return reply(`Usage: ${pfx}settimezone <timezone>\nCurrent: ${gset("timezone","Africa/Lagos")}\nExamples: Africa/Lagos, America/New_York, Europe/London`);
      try { new Date().toLocaleString("en-US",{timeZone:input}); sset("timezone",input); return reply(`✅ Timezone: *${input}*`); }
      catch { return reply(`❌ Invalid timezone.\nExamples: Africa/Lagos, America/New_York, Europe/London`); }
    }

    if (command === "setcontextlink") {
      if (!isOwner && !isDev) return notOwner();
      if (!input) return reply(`Usage: ${pfx}setcontextlink <url>\nThis link appears in bot message footers.`);
      sset("context_link", input);
      return reply(`✅ Context link: ${input}`);
    }

    if (command === "setmenuimage") {
      if (!isOwner && !isDev) return notOwner();
      const q = m.quoted;
      const hasImg = q && (q.mtype === "imageMessage" || (q.mimetype||"").includes("image"));
      if (!hasImg && !input) {
        const cur = gset("menu_image_path","");
        return reply("📸 *Set Menu Image*\n\nCurrent: " + (cur ? "Custom image set ✅" : "Default image") + "\n\nUsage:\n• Reply to any image with " + pfx + "setmenuimage\n• Or: " + pfx + "setmenuimage <image_url>\n\nTo reset: " + pfx + "setmenuimage reset");
      }
      if (sub === "reset") {
        sset("menu_image_path", "");
        return reply("✅ Menu image reset to default.");
      }
      if (hasImg) {
        try {
          const buf     = await sock.downloadMediaMessage(q);
          const imgDir  = path.join(__dirname, "..", "thumbnail");
          if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
          const imgPath = path.join(imgDir, "menu_custom.jpg");
          fs.writeFileSync(imgPath, buf);
          sset("menu_image_path", imgPath);
          return reply("✅ *Menu image updated!*\n\nYour custom image will now appear when users run " + pfx + "menu");
        } catch(e) { return reply("❌ Failed to save image: " + e.message); }
      }
      // URL provided
      try {
        const axios = require("axios");
        const r = await axios.get(input, { responseType: "arraybuffer", timeout: 15000 });
        const buf = Buffer.from(r.data);
        const imgDir  = path.join(__dirname, "..", "thumbnail");
        if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
        const imgPath = path.join(imgDir, "menu_custom.jpg");
        fs.writeFileSync(imgPath, buf);
        sset("menu_image_path", imgPath);
        return reply("✅ *Menu image updated from URL!*");
      } catch(e) { return reply("❌ Failed to download image: " + e.message); }
    }

    // ── MODE / SETMENU / SETPREFIX ────────────────────────────────────────────
    if (command === "mode") {
      if (!isOwner && !isDev) return notOwner();
      const modes = ["public","private","inbox"];
      const curMode = gset("bot_mode","public");
      const modeIcon = (m) => m === "private" ? "🔒" : m === "inbox" ? "📥" : "🌐";
      const modeDesc = (m) => m === "private"
        ? "Only owner & dev can use commands. Everyone else is silently ignored."
        : m === "inbox"
        ? "Commands only work in DMs. Groups are silently ignored."
        : "All users can use commands in all chats.";
      if (!input || !modes.includes(sub)) {
        return reply([
          `🔧 *Bot Mode Settings*`,
          ``,
          `Current: ${modeIcon(curMode)} *${curMode.toUpperCase()}*`,
          ``,
          `${modeDesc(curMode)}`,
          ``,
          `*Available modes:*`,
          `${pfx}mode public  — 🌐 Respond to everyone`,
          `${pfx}mode private — 🔒 Owner/dev only`,
          `${pfx}mode inbox   — 📥 DMs only`,
        ].join("\n"));
      }
      sset("bot_mode", sub);
      const icon = modeIcon(sub);
      const desc = modeDesc(sub);
      return reply([
        `${icon} *Bot Mode Changed!*`,
        ``,
        `Mode: *${sub.toUpperCase()}*`,
        ``,
        `${desc}`,
        ``,
        `_The menu and all responses will reflect this change immediately._`,
      ].join("\n"));
    }

    if (command === "setmenu") {
      if (!isOwner && !isDev) return notOwner();
      const n = parseInt(sub);
      if (!sub || isNaN(n) || n<1 || n>20) return reply(`Usage: ${pfx}setmenu <1-20>\nSets the default menu theme.\nPreview: ${pfx}menustyle`);
      sset("default_menu", n);
      return reply(`✅ Default menu theme: *${n}*`);
    }

    if (command === "setprefix") {
      if (!isOwner && !isDev) return notOwner();
      if (!sub) return reply(`Usage: ${pfx}setprefix <character>\nCurrent: ${config.prefix||"/"}\nExample: ${pfx}setprefix .`);
      const state = getState(); state.custom_prefix = sub; saveState();
      return reply(`✅ Prefix changed to *${sub}*\n\nAll commands now use: ${sub}command`);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // SECTION 6: SETTINGS OVERVIEW AND RESET
    // ══════════════════════════════════════════════════════════════════════════

    if (command === "getsettings") {
      const sets = loadSets();
      const grp  = isGrp ? gsGet(chat) : {};
      const lines = [
        `⚙️ *Bot Settings Overview*`,``,
        `🤖 *Identity*`,
        `  Name: ${sets.bot_name||config.botName}`,
        `  Mode: ${sets.bot_mode||"public"}`,
        `  Timezone: ${sets.timezone||"Africa/Lagos"}`,
        `  Watermark: ${sets.watermark||"None"}`,``,
        `🌐 *Global Features*`,
        `  Always Online: ${sets.alwaysonline?"✅":"❌"}`,
        `  Anti-Call: ${sets.anticall?"✅":"❌"}`,
        `  Auto Read: ${sets.autoread?"✅":"❌"}`,
        `  Auto View Status: ${sets.autoviewstatus?"✅":"❌"}`,
        `  Auto Block: ${sets.autoblock?"✅":"❌"}`,
        `  Auto Bio: ${sets.autobio_on?"✅ — "+sets.autobio_text?.slice(0,30):"❌"}`,
      ];
      if (isGrp) {
        lines.push(``, `👥 *This Group*`);
        lines.push(`  Anti-Link: ${grp.antilink_mode||"off"}`);
        lines.push(`  Anti-Forward: ${grp.antiforward_mode||"off"}`);
        lines.push(`  Anti-Badword: ${grp.antibadword_mode||"off"}`);
        lines.push(`  Anti-NSFW: ${grp.antinsfw?"✅":"❌"}`);
        lines.push(`  Anti-Bug: ${grp.antibug?"✅":"❌"}`);
        lines.push(`  Anti-Delete: ${grp.antidelete?"✅":"❌"}`);
        lines.push(`  Anti-Edit: ${grp.antiedit?"✅":"❌"}`);
        lines.push(`  Anti-Spam: ${grp.antispam?"✅":"❌"}`);
        lines.push(`  Flood Guard: ${grp.guard_on?"✅":"❌"}`);
        lines.push(`  Auto-React: ${grp.autoreact_emoji||"❌"}`);
        lines.push(`  Auto-Type: ${grp.autotype?"✅":"❌"}`);
        lines.push(`  Warn Limit: ${grp.setwarn_count||3}`);
      }
      return reply(lines.join("\n"));
    }

    if (command === "resetsetting") {
      if (!isOwner && !isDev) return notOwner();
      if (!input || sub === "all") {
        if (sub === "all") {
          saveSets({});
          if (isGrp) gsSet(chat, {antibug:0,antidelete:0,antiedit:0,autoreact_emoji:"",autotype:0,autorecord:0,antispam:0,guard_on:0});
          return reply("✅ *All settings reset* to defaults.");
        }
        return reply([`Usage: ${pfx}resetsetting <key> or ${pfx}resetsetting all`,``,`Examples:`,`  ${pfx}resetsetting anticall`,`  ${pfx}resetsetting watermark`,`  ${pfx}resetsetting all`].join("\n"));
      }
      const d = loadSets(); delete d[sub]; saveSets(d);
      return reply(`✅ Setting *${sub}* reset to default.`);
    }

    // ── /groupinfo ──────────────────────────────────────────────────────────
    if (command === "groupinfo" || command === "ginfo") {
      if (!isGrp) return reply("📋 This command only works in groups.");
      await reply("⏳ Fetching group info...");
      try {
        const meta    = await sock.groupMetadata(chat);
        const total   = meta.participants.length;
        const admins  = meta.participants.filter(p => p.admin).length;
        const owner   = meta.participants.find(p => p.admin === "superadmin");
        const ownerNum = owner ? owner.id.split("@")[0] : "Unknown";
        let created = "—";
        try {
          const ts = parseInt(meta.id.split("-")[1] || "0");
          if (ts) created = new Date(ts * 1000).toLocaleDateString("en-GB", { day:"2-digit", month:"long", year:"numeric" });
        } catch {}
        let ppUrl = null;
        try { ppUrl = await sock.profilePictureUrl(chat, "image"); } catch {}
        const gs  = require("../library/db").gsGet(chat);
        const sep = "─".repeat(30);
        const desc = meta.desc ? `\n${sep}\n\n📝 *Description:*\n${meta.desc.slice(0,400)}` : "";
        const lines = [
          `📋 *Group Info*`, sep, ``,
          `📌 *Name:*         ${meta.subject || "—"}`,
          `🆔 *Group ID:*     ${chat}`,
          `👑 *Owner:*        +${ownerNum}`,
          `📅 *Created:*      ${created}`, ``, sep, ``,
          `👥 *Total Members:* ${total}`,
          `   ├ 👤 Members: ${total - admins}`,
          `   └ 🛡️  Admins:  ${admins}`, ``, sep, ``,
          `⚙️  *Active Settings:*`,
          `   ├ 🔗 Anti-link:  ${gs.antilink_mode || "off"}`,
          `   ├ 🛡️  Guard:      ${gs.guard_on ? "✅ On" : "❌ Off"}`,
          `   ├ 👋 Welcome:    ${gs.welcome_on ? "✅ On" : "❌ Off"}`,
          `   ├ 🚪 Goodbye:    ${gs.goodbye_on ? "✅ On" : "❌ Off"}`,
          `   ├ 🤖 AI Chatbot: ${gs.chatbot_on ? "✅ On" : "❌ Off"}`,
          `   └ 🔞 Anti-NSFW:  ${gs.antinsfw ? "✅ On" : "❌ Off"}`,
          desc, ``, sep, ``,
          `🔗 https://chat.whatsapp.com/${chat.replace("@g.us","")}`,
        ].filter(v => v !== null && v !== undefined).join("\n");
        // Attempt to fetch and attach group profile picture
    let imgBuf = null;
    if (ppUrl) {
      try {
        const ax  = require("axios");
        const res = await ax.get(ppUrl, { responseType: "arraybuffer", timeout: 12000 });
        if (res.data && res.data.byteLength > 500) {
          imgBuf = Buffer.from(res.data);
        }
      } catch {}
    }
    if (imgBuf) {
      try {
        return await sock.sendMessage(chat, { image: imgBuf, caption: lines }, { quoted: m });
      } catch {
        return reply(lines);
      }
    }
    return reply(lines);
    } catch(e) { return reply(`❌ Could not fetch group info: ${e.message}`); }
    }
  }
};

function parseDuration(str) {
  const s = String(str||"").toLowerCase();
  const m = s.match(/^(\d+)([smhd]?)$/);
  if (!m) return 3600;
  const n=parseInt(m[1]), u=m[2]||"s";
  return u==="s"?n:u==="m"?n*60:u==="h"?n*3600:n*86400;
}
