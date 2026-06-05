// @marketplace maintenance-mode v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "maintenance_mode.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "MaintenanceMode", category: "moderation", desc: "Put group in maintenance mode",
  command: ["maintenance","maintenancemode","groupmaintenance"],
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
    const reason=args.slice(1).join(" ")||"System maintenance";
    if(sub==="on"){
      gs.maintenance=true;gs.maintenance_reason=reason;save(all);
      try{await sock.groupSettingUpdate(chat,"announcement");}catch{}
      return reply("MAINTENANCE MODE: *ON*\n\nReason: "+reason+"\n\nThe group is temporarily restricted.\n"+pfx+"maintenance off to restore.");
    }
    if(sub==="off"){
      gs.maintenance=false;save(all);
      try{await sock.groupSettingUpdate(chat,"not_announcement");}catch{}
      return reply("MAINTENANCE MODE: *OFF*\nGroup is back to normal.");
    }
    return reply(pfx+"maintenance on [reason]\n"+pfx+"maintenance off");
  }
};
