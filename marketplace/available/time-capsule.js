// @marketplace time-capsule v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "time_capsule.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "TimeCapsule", category: "moderation", desc: "Schedule a message to be revealed in the future",
  command: ["timecapsule","futuremessage","scheduledreveal"],
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
    const days=parseInt(args[0]),msg=args.slice(1).join(" ");
    if(isNaN(days)||!msg) return reply("Usage: "+pfx+"timecapsule <days> <message>\nExample: "+pfx+"timecapsule 30 Happy 1-month anniversary everyone!");
    setTimeout(async()=>{
      try{await sock.sendMessage(chat,{text:"Time Capsule from "+days+" days ago:\n\n"+msg});}catch{}
    },days*86400000);
    return reply("Time capsule set!\n\nMessage: "+msg+"\nWill be revealed in "+days+" day(s).");
  }
};
