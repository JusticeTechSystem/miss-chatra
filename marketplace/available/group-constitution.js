// @marketplace group-constitution v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "group_constitution.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "GroupConstitution", category: "moderation", desc: "Set and display formal group constitution",
  command: ["constitution","setconstitution","viewconstitution"],
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
    if(command==="viewconstitution"){
      if(!gs.constitution) return reply("No group constitution set.\nAdmins: "+pfx+"setconstitution <text>");
      return reply("GROUP CONSTITUTION\n━━━━━━━━━━━━━━━━━━\n\n"+gs.constitution+"\n\n━━━━━━━━━━━━━━━━━━\n_All members are bound by this constitution._");
    }
    if(!canUse) return reply("Admin only.");
    const text=args.join(" ");if(!text) return reply("Usage: "+pfx+"setconstitution <full text>\nExample: "+pfx+"setconstitution This group exists to... Members must... Violations result in...");
    gs.constitution=text;save(all);
    return reply("Group constitution saved!\nMembers can view with /viewconstitution");
  }
};
