// @marketplace welcome-rules v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "welcome_rules.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "WelcomeRules", category: "moderation", desc: "Auto-send rules to new members on join",
  command: ["welcomerules","newmemberrules","autorules"],
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
    if(sub==="on"||sub==="off"){ gs.welcomerules=sub==="on"; save(all); return reply("Welcome Rules: *"+sub.toUpperCase()+"*\n"+(sub==="on"?"New members will receive rules in DM.":"")); }
    const text=args.join(" ");
    if(text&&text!=="on"&&text!=="off"){ gs.rules_text=text; gs.welcomerules=true; save(all); return reply("Rules set and auto-send enabled!"); }
    return reply("Current rules: "+(gs.rules_text||"Not set")+"\n\n"+pfx+"welcomerules on/off\n"+pfx+"welcomerules <rules text>");
  }
};
