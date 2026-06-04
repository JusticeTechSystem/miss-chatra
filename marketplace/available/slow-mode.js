// @marketplace slow-mode v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "slow_mode.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "SlowMode", category: "moderation", desc: "Limit how often members can send messages",
  command: ["slowmode","slowdown","msgcooldown","cooldown"],
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
    const seconds=parseInt(args[0]);
    if(!isNaN(seconds)&&seconds>0){ gs.slowmode=seconds; save(all); return reply("Slow Mode: *"+seconds+"s* cooldown between messages.\nMembers must wait "+seconds+" seconds between messages."); }
    if((args[0]||"").toLowerCase()==="off"){ gs.slowmode=0; save(all); return reply("Slow Mode: *OFF*"); }
    return reply(pfx+"slowmode 30 — 30s cooldown\n"+pfx+"slowmode off\nCurrent: "+(gs.slowmode?gs.slowmode+"s":"OFF"));
  }
};
