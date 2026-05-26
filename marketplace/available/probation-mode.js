// @marketplace probation-mode v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "probation_mode.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "ProbationMode", category: "moderation", desc: "Put new members on probation — limited posting",
  command: ["probation","newmemberlimit","trialmode"],
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
    const days=parseInt(args[1])||3;
    if(sub==="on"||sub==="off"){ gs.probation=sub==="on"; gs.probation_days=days; save(all); return reply("Probation Mode: *"+sub.toUpperCase()+"*\nNew members on probation for "+days+" days.\nThey can only reply, not initiate."); }
    return reply(pfx+"probation on [days]\nNew members wait "+( gs.probation_days||3)+" days before posting freely.\nCurrent: "+(gs.probation?"ON":"OFF"));
  }
};
