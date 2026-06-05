// @marketplace flood-limit v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "flood_limit.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "FloodLimit", category: "moderation", desc: "Set maximum messages per minute per member",
  command: ["floodlimit","msglimit2","floodprotect","ratelimit"],
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
    const limit=parseInt(args[0]);
    if(!isNaN(limit)&&limit>0){ gs.floodlimit=limit; save(all); return reply("Flood Limit: max *"+limit+" messages/minute* per member.\nExceeding this auto-mutes for 60s."); }
    if((args[0]||"").toLowerCase()==="off"){ gs.floodlimit=0; save(all); return reply("Flood Limit: *OFF*"); }
    return reply(pfx+"floodlimit 5 — max 5 msgs/min\n"+pfx+"floodlimit off\nCurrent: "+(gs.floodlimit?gs.floodlimit+" msgs/min":"OFF"));
  }
};
