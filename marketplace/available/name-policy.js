// @marketplace name-policy v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "name_policy.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "NamePolicy", category: "moderation", desc: "Enforce naming convention for group members",
  command: ["namepolicy","forcename","nameformat","namecheck"],
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
    const format=args.slice(1).join(" ")||"";
    if(sub==="set"&&format){ gs.namepolicy=format; save(all); return reply("Name policy set: "+format+"\nExample format: 'FirstName | Location | Profession'"); }
    if(sub==="on"||sub==="off"){ gs.namecheck=sub==="on"; save(all); return reply("Name Policy Check: *"+sub.toUpperCase()+"*"); }
    return reply("Name Policy\n\nCurrent format: "+(gs.namepolicy||"Not set")+"\n\n"+pfx+"namepolicy set 'Name | City'\n"+pfx+"namepolicy on/off");
  }
};
