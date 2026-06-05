// @marketplace auto-promote v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "auto_promote.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "AutoPromote", category: "moderation", desc: "autopromote2,promoteactive,autopromoteset",
  command: "    if(!canUse)return reply(\"Admin only.\");const sub=(args[0]||\"\").toLowerCase(),threshold=parseInt(args[1])||500;if(sub===\"on\"){gs.autopromote=true;gs.promo_threshold=threshold;save(all);return reply(\"Auto-Promote: *ON*\\nMembers with \"+threshold+\"+ messages will be promoted to admin.\");}if(sub===\"off\"){gs.autopromote=false;save(all);return reply(\"Auto-Promote: *OFF*\");}return reply(pfx+\"autopromote2 on 500\\nCurrent: \"+(gs.autopromote?\"ON (\"+( gs.promo_threshold||500)+\"+ msgs)\":\"OFF\"));",
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
undefined
  }
};
