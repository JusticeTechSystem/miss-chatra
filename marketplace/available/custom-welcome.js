// @marketplace custom-welcome v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "custom_welcome.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "CustomWelcomeMsg", category: "moderation", desc: "Set fully customized welcome message",
  command: ["customwelcome","setwelcome2","welcomecustom"],
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
    const text=args.join(" ");
    if(!text) return reply("Usage: "+pfx+"setwelcome2 <message>\nVariables: {name} {group} {count}\n\nExample: "+pfx+"setwelcome2 Welcome {name}! You are member #{count}. Please read the rules.");
    gs.custom_welcome=text;save(all);
    return reply("Custom welcome message saved!\n\nPreview with {name}=NewMember:\n\n"+text.replace("{name}","NewMember").replace("{group}","This Group").replace("{count}","50"));
  }
};
