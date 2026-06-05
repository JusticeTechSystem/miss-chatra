// @marketplace anti-long-message v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "anti_long_message.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "AntiLongMsg", category: "moderation", desc: "Limit message length in group",
  command: ["antilongmsg","msglimit","charlimit"],
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
    const limit=parseInt(args[0]);
    if(!isNaN(limit)&&limit>0){ gs.msglimit=limit; gs.antilongmsg=true; save(all); return reply("Message length limit set to *"+limit+"* characters."); }
    const sub=(args[0]||"").toLowerCase();
    if(sub==="off"){ gs.antilongmsg=false; save(all); return reply("Message length limit: *OFF*"); }
    return reply(pfx+"msglimit 500 — set 500 char limit\n"+pfx+"msglimit off — remove limit\nCurrent: "+(gs.antilongmsg?"Limit: "+(gs.msglimit||500)+" chars":"OFF"));
  }
};
