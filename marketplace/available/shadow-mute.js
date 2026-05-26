// @marketplace shadow-mute v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "shadow_mute.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "ShadowMute", category: "moderation", desc: "Mute user silently — their messages deleted without notice",
  command: ["shadowmute","silentmute","ghostmute"],
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
    const target = await getTarget();
    if(!target) return reply("Mention user: "+pfx+"shadowmute @user");
    const targetNum = norm(target);
    if(!gs.shadowmuted) gs.shadowmuted = [];
    if(!gs.shadowmuted.includes(targetNum)) gs.shadowmuted.push(targetNum);
    save(all);
    return reply("@"+targetNum+" is shadow-muted.\n\nTheir messages will be silently deleted without any notification to them.",{mentions:[target]});
  }
};
