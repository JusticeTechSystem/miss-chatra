// @marketplace audit-log v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "audit_log.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "AuditLog", category: "moderation", desc: "Complete admin audit trail",
  command: ["auditlog","adminaudit","fullaudit"],
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
    const allLogs=[...(gs.modlog||[]),...(gs.kicks||[]).map(k=>({...k,action:"kick"})),...(gs.bans||[]).map(b=>({...b,action:"ban"}))].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,15);
    if(!allLogs.length) return reply("No audit log entries.");
    return reply("Audit Log (Last 15)\n\n"+allLogs.map((l,i)=>(i+1)+". ["+( l.action||"action").toUpperCase()+"] "+( l.target||l.num||"?")+" ("+l.date+")").join("\n"));
  }
};
