// @marketplace flood-track v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "flood_track.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "FloodTrack", category: "moderation", desc: "Real-time flood detection and tracking",
  command: ["floodtrack","trackflood","floodmonitor"],
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
    if(sub==="on"||sub==="off"){ gs.floodtrack=sub==="on"; gs.flood_threshold=parseInt(args[1])||5; save(all); return reply("Flood Tracking: *"+sub.toUpperCase()+"*\nThreshold: "+(gs.flood_threshold||5)+" messages in 10 seconds."); }
    const track=global.__floodData=global.__floodData||{};const recent=track[chat]||{};
    const flooding=Object.entries(recent).filter(([,d])=>d.count>=( gs.flood_threshold||5)).map(([n])=>"+"+n);
    return reply("Flood Monitor\n\nStatus: "+(gs.floodtrack?"ON":"OFF")+"\nThreshold: "+(gs.flood_threshold||5)+" msgs/10s\n\nCurrently flooding: "+(flooding.length?flooding.join(", "):"None"));
  }
};
