// @marketplace keyword-counter v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "keyword_counter.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "KeywordCounter", category: "moderation", desc: "Count how many times a keyword is used",
  command: ["keywordcount","countword","wordfrequency"],
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
    const keyword=(args[0]||"").toLowerCase();
    if(!keyword) return reply("Usage: "+pfx+"keywordcount <word>\nExample: "+pfx+"keywordcount spam");
    const state=require("../../../library/state").getState();
    const messages=Object.values(state.messages||{}).filter(m=>m.remoteJid===chat);
    const count=messages.filter(m=>(m.body||"").toLowerCase().includes(keyword)).length;
    return reply("Keyword Count: "+keyword+"\n\n"+count+" message(s) contained this word.\n(Based on stored messages)");
  }
};
