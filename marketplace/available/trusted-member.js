// @marketplace trusted-member v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "trusted_member.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "TrustedMember", category: "moderation", desc: "Mark members as trusted to bypass filters",
  command: ["trusted","addtrusted","removetrusted","trustedlist"],
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
    const target=await getTarget();
    if(command==="addtrusted"){
      if(!target) return reply("Mention: "+pfx+"addtrusted @user");
      const n=norm(target);if(!gs.trusted)gs.trusted=[];
      if(!gs.trusted.includes(n))gs.trusted.push(n);save(all);
      return reply("@"+n+" added to trusted members. Exempt from content filters.",{mentions:[target]});
    }
    if(command==="removetrusted"){
      if(!target) return reply("Mention: "+pfx+"removetrusted @user");
      const n=norm(target);if(gs.trusted)gs.trusted=gs.trusted.filter(t=>t!==n);save(all);
      return reply("@"+n+" removed from trusted members.",{mentions:[target]});
    }
    return reply("Trusted Members ("+( gs.trusted||[]).length+"):\n"+(gs.trusted||[]).map(n=>"  +"+n).join("\n")||"None");
  }
};
