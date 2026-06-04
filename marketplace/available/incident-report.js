// @marketplace incident-report v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "incident_report.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "IncidentReport", category: "moderation", desc: "File a formal incident report",
  command: ["incident","incidentreport","filemincident"],
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
    const text=args.join(" ");
    if(!text) return reply("Usage: "+pfx+"incident <description>\nExample: "+pfx+"incident Member harassed another member with threatening messages at 14:30");
    if(!gs.incidents) gs.incidents=[];
    const id="INC-"+String((gs.incidents.length+1)).padStart(3,"0");
    gs.incidents.push({id,text,by:m?.pushName||"Admin",date:new Date().toISOString()});save(all);
    return reply("Incident Reported: "+id+"\n\n"+text+"\n\nLogged at "+new Date().toLocaleDateString());
  }
};
