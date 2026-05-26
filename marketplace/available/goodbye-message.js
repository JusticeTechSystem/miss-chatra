// @marketplace goodbye-message v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "goodbye_message.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "GoodbyeMsg", category: "moderation", desc: "Set custom goodbye message for leaving members",
  command: ["goodbye","setgoodbye","byemsg","leavemsg"],
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
    if(sub==="on"||sub==="off"){ gs.goodbyeon=sub==="on"; save(all); return reply("Goodbye Message: *"+sub.toUpperCase()+"*"); }
    const text=args.join(" ");
    if(text&&sub!=="on"&&sub!=="off"){ gs.goodbye_msg=text; gs.goodbyeon=true; save(all); return reply("Goodbye message set!\n\n"+text); }
    return reply("Current: "+(gs.goodbye_msg||"Not set")+"\n\n"+pfx+"goodbye on/off\n"+pfx+"goodbye Goodbye {name}! We will miss you!");
  }
};
