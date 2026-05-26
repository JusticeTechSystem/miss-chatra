// @marketplace content-rating v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "content_rating.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "ContentRating", category: "moderation", desc: "Set content rating restriction for group",
  command: ["contentrating","agerating","setrating","pg13"],
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
    const rating=(args[0]||"g").toUpperCase();
    const ratings={"G":"General audiences","PG":"Parental guidance","PG-13":"13+ only","R":"Restricted 18+","NONE":"No restriction"};
    if(ratings[rating]){ gs.contentrating=rating; save(all); return reply("Content Rating set to: *"+rating+"* ("+ratings[rating]+")\nContent exceeding this rating will be moderated."); }
    return reply("Content Rating Options:\nG — General audiences\nPG — Parental guidance\nPG-13 — 13+ only\nR — Restricted 18+\n\n"+pfx+"contentrating PG-13\nCurrent: "+(gs.contentrating||"NONE"));
  }
};
