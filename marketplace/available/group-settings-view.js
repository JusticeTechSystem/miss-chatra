// @marketplace group-settings-view v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "group_settings_view.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "GroupSettingsView", category: "moderation", desc: "View all current group moderation settings",
  command: ["modsettings","viewmodsettings","currentsettings"],
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
    const keys=Object.keys(gs).filter(k=>!['bios','badges','member_notes','reports','incidents','modlog','kicks','bans','leaves','joins'].includes(k));
    if(!keys.length) return reply("No custom settings configured for this group.\nUse moderation commands to configure.");
    const lines=["Current Moderation Settings\n"];
    keys.slice(0,20).forEach(k=>lines.push(""+k+": "+(typeof gs[k]==="boolean"?( gs[k]?"ON":"OFF"):gs[k])));
    return reply(lines.join("\n"));
  }
};
