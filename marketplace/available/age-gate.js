// @marketplace age-gate v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "age_gate.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "AgeGate", category: "moderation", desc: "Require members to confirm their age before posting",
  command: ["agegate","ageconfirm","18plus","agecheck"],
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
    const sub=(args[0]||"").toLowerCase();
    const minAge=parseInt(args[1])||18;
    if(sub==="on"||sub==="off"){ gs.agegate=sub==="on"; gs.minage=minAge; save(all); return reply("Age Gate: *"+sub.toUpperCase()+"*\nMinimum age: "+minAge+"\nNew members must confirm age before posting."); }
    return reply(pfx+"agegate on [min-age]\nNew members must type /ageconfirm before posting.\nCurrent: "+(gs.agegate?"ON ("+( gs.minage||18)+"+)":"OFF"));
  }
};
