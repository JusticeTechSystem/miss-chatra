// @marketplace night-mode v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "night_mode.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "NightMode", category: "moderation", desc: "Restrict group during night hours",
  command: ["nightmode","quiethours","nightquiet","silentnight"],
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
    const start=args[1]||"22:00",end=args[2]||"06:00";
    if(sub==="on"){ gs.nightmode=true; gs.night_start=start; gs.night_end=end; save(all); return reply("Night Mode: *ON*\nQuiet hours: "+start+" — "+end+"\nGroup will be restricted during these hours."); }
    if(sub==="off"){ gs.nightmode=false; save(all); return reply("Night Mode: *OFF*"); }
    return reply(pfx+"nightmode on 22:00 06:00\n"+pfx+"nightmode off\nCurrent: "+(gs.nightmode?"ON ("+( gs.night_start||"22:00")+" - "+(gs.night_end||"06:00")+")":"OFF"));
  }
};
