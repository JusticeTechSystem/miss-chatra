// @marketplace strike-board v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "strike_board.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "StrikeBoard", category: "moderation", desc: "Public strike/warning leaderboard",
  command: ["strikeboard","warnboard","whosgettingwarn"],
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
    const warns=gs.warnings||{};
    const entries=Object.entries(warns).sort((a,b)=>b[1]-a[1]);
    if(!entries.length) return reply("No warnings in this group.");
    const lines=["Strike Board\n","Member | Warnings\n"];
    entries.slice(0,10).forEach(([n,c],i)=>lines.push((i+1)+". +"+n+": "+c+" warning(s)"+(c>=3?" ⚠️":"")));
    return reply(lines.join("\n")+"\n\n"+pfx+"setwarn to set warn limit");
  }
};
