// @marketplace verification-word v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "verification_word.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "VerificationWord", category: "moderation", desc: "Require new members to say a verification word",
  command: ["verifyword","verificationword","joinpassword","grouppassword"],
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
    if(sub==="set"){ const word=args.slice(1).join(" "); if(!word) return reply("Usage: "+pfx+"verifyword set <word/phrase>"); gs.verify_word=word.toLowerCase(); gs.verify_on=true; save(all); return reply("Verification word set: *"+word+"*\nNew members must type this word to chat freely."); }
    if(sub==="on"||sub==="off"){ gs.verify_on=sub==="on"; save(all); return reply("Verification Word: *"+sub.toUpperCase()+"*"); }
    return reply("Verification Word: "+(gs.verify_word?"*"+gs.verify_word+"*":"Not set")+"\n\n"+pfx+"verifyword set <word>\n"+pfx+"verifyword on/off");
  }
};
