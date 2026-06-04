// @marketplace chat-stats v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "chat_stats.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "ChatStats", category: "moderation", desc: "Detailed chat statistics dashboard",
  command: ["chatstats","chatdashboard","groupdashboard"],
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
    const state=require("../../../library/state").getState();
    const counts=state.user_message_counts?.[chat]||{};
    const today=new Date().toDateString();
    const msgs=Object.values(counts);
    const total=msgs.reduce((s,d)=>s+(d.count||0),0);
    const todayActive=msgs.filter(d=>d.last_msg&&new Date(d.last_msg).toDateString()===today).length;
    const top3=Object.entries(counts).sort((a,b)=>b[1].count-a[1].count).slice(0,3);
    return reply("Chat Statistics\n\nTotal messages: "+total+"\nMembers chatted today: "+todayActive+"\n\nAll-time top 3:\n"+top3.map(([j,d],i)=>(i+1)+". +"+norm(j)+": "+d.count+" msgs").join("\n"));
  }
};
