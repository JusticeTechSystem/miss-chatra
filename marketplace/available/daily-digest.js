// @marketplace daily-digest v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "daily_digest.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "DailyDigest", category: "moderation", desc: "Schedule and send daily group summaries",
  command: ["dailydigest","groupdigest","dailysummary"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid, quotedMsg }) => {
    const pfx = prefix || "/";
    const chat = chatId;
    const canUse = isAdmin || isOwner || isDev;
    const norm = jid => (jid||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const botNum = norm(sock?.user?.id);
    async function isBotAdmin() {
      try {
        const meta = await sock.groupMetadata(chat);
        return meta.participants.some(p => norm(p.id)===botNum && (p.admin==="admin"||p.admin==="superadmin"));
      } catch { return false; }
    }
    async function getTarget() {
      const t = mentionedJid?.[0] || quotedMsg?.sender;
      return t || null;
    }
    const all = load(); if(!all[chat]) all[chat] = {};
    const gs = all[chat];
    if(!canUse) return reply("Admin only.");
    const sub=(args[0]||"").toLowerCase(),time=args[1]||"08:00";
    if(sub==="on"){ gs.dailydigest=true; gs.digest_time=time; save(all); return reply("Daily Digest: *ON*\nWill post group summary at "+time+" daily."); }
    if(sub==="off"){ gs.dailydigest=false; save(all); return reply("Daily Digest: *OFF*"); }
    return reply("Daily Digest\n\nSends a morning summary of group stats.\n\n"+pfx+"dailydigest on 08:00\n"+pfx+"dailydigest off\nCurrent: "+(gs.dailydigest?"ON at "+(gs.digest_time||"08:00"):"OFF"));
  }
};
