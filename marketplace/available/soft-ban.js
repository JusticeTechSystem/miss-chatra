// @marketplace soft-ban v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "soft_ban.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "SoftBan", category: "moderation", desc: "Remove and blacklist member temporarily",
  command: ["softban","tempkick","softkick"],
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
    if(!target) return reply("Mention user: "+pfx+"softban @user");
    const targetNum = norm(target);
    const hours = parseInt(args.filter(a=>!a.startsWith("@"))[0])||24;
    if(!gs.softbans) gs.softbans = {};
    gs.softbans[targetNum] = { until: Date.now()+(hours*3600000), date: new Date().toLocaleDateString() };
    save(all);
    try { await sock.groupParticipantsUpdate(chat,[target],"remove"); } catch {}
    return reply("Soft ban applied to @"+targetNum+"\nDuration: "+hours+" hours\nThey cannot rejoin for "+hours+" hours.",{mentions:[target]});
  }
};
