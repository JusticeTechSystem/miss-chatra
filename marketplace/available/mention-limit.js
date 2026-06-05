// @marketplace mention-limit v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "mention_limit.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "MentionLimit", category: "moderation", desc: "Limit how many members can be mentioned at once",
  command: ["mentionlimit","tagcount","limitmentions"],
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
    const limit=parseInt(args[0])||3;
    if(!isNaN(limit)&&limit>0){ gs.mention_limit=limit; save(all); return reply("Mention limit set to "+limit+" per message.\nTagging more than "+limit+" people at once will be deleted."); }
    if((args[0]||"").toLowerCase()==="off"){ gs.mention_limit=0; save(all); return reply("Mention limit: OFF"); }
    return reply(pfx+"mentionlimit 3\nCurrent: "+(gs.mention_limit?gs.mention_limit+" per message":"OFF"));
  }
};
