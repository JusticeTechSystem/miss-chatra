// @marketplace mod-log v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "mod_log.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "ModerationLog", category: "moderation", desc: "Full moderation action log",
  command: ["modlog2","actionlog","moderationlog","adminactions"],
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
    const log=gs.modlog||[];
    if(!log.length) return reply("No moderation actions logged yet.\n\nLogs are auto-created when admins use ban, kick, warn, mute.");
    const lines=["Moderation Log (Last 10)\n"];
    log.slice(-10).reverse().forEach((entry,i)=>lines.push((i+1)+". ["+entry.action+"] "+entry.target+" by "+entry.by+"\n   "+entry.reason+" ("+entry.date+")"));
    return reply(lines.join("\n"));
  }
};
