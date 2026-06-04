// @marketplace word-count-report v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "word_count_report.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "WordCountReport", category: "moderation", desc: "Report on message statistics",
  command: ["wordcount2","msgstats","groupstats2"],
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
    const state=require("../../../library/state").getState();
    const counts=state.user_message_counts?.[chat]||{};
    const total=Object.values(counts).reduce((s,d)=>s+(d.count||0),0);
    const members=Object.keys(counts).length;
    const active7d=Object.values(counts).filter(d=>Date.now()-(d.last_msg||0)<7*86400000).length;
    return reply("Message Statistics\n\nTotal messages: "+total+"\nActive members: "+members+"\nActive (7 days): "+active7d+"\nAvg messages/member: "+(members>0?(total/members).toFixed(1):0)+"\n\nMost active: see /activityscore");
  }
};
