// @marketplace protect-mode v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "protect_mode.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "ProtectMode", category: "moderation", desc: "protect,protectmode,fullprotect",
  command: "    if(!canUse)return reply(\"Admin only.\");const sub=(args[0]||\"\").toLowerCase();if(sub===\"on\"){gs.protect=true;gs.antilink=\"delete\";gs.antibadword=\"warn\";gs.antispam=true;gs.antiscam=true;save(all);return reply(\"Protection Mode: *FULL*\\n\\nEnabled:\\n✅ Anti-Link\\n✅ Anti-BadWord\\n✅ Anti-Spam\\n✅ Anti-Scam\\n\\nGroup is fully protected.\");}if(sub===\"off\"){gs.protect=false;save(all);return reply(\"Protection Mode: OFF\");}return reply(pfx+\"protect on — enable full protection\\n\"+pfx+\"protect off\");",
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
