// @marketplace penalty-system v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "penalty_system.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "PenaltySystem", category: "moderation", desc: "Configure penalties for rule violations",
  command: ["penalty","setpenalty","penaltylist","penaltyscale"],
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
    const DEFAULTS={1:{action:"warn",msg:"First warning"},2:{action:"mute_1h",msg:"Muted 1 hour"},3:{action:"mute_24h",msg:"Muted 24 hours"},4:{action:"kick",msg:"Kicked from group"},5:{action:"ban",msg:"Permanently banned"}};
    if(args[0]==="set"){
      const level=parseInt(args[1]),action=args[2],msg=args.slice(3).join(" ");
      if(!gs.penalties)gs.penalties={...DEFAULTS};
      gs.penalties[level]={action,msg};save(all);
      return reply("Penalty level "+level+" set: "+action+" — "+msg);
    }
    const p=gs.penalties||DEFAULTS;
    return reply("Penalty System\n\nLevel 1: "+(p[1]?.msg||"Warning")+"\nLevel 2: "+(p[2]?.msg||"Mute 1h")+"\nLevel 3: "+(p[3]?.msg||"Mute 24h")+"\nLevel 4: "+(p[4]?.msg||"Kick")+"\nLevel 5: "+(p[5]?.msg||"Ban")+"\n\n"+pfx+"penalty set <1-5> <action> <message>");
  }
};
