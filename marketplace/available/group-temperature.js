// @marketplace group-temperature v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "group_temperature.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "GroupTemperature", category: "moderation", desc: "Check group activity temperature",
  command: ["grouptemp","grouptempcheck","howhotisgroup"],
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
    const state=require("../../../library/state").getState();
    const counts=state.user_message_counts?.[chat]||{};
    const lastHour=Object.values(counts).filter(d=>Date.now()-(d.last_msg||0)<3600000).length;
    const temp=lastHour>20?"🔥 Very Hot":lastHour>10?"⚡ Active":lastHour>5?"😊 Warm":lastHour>2?"😴 Cool":"❄️ Cold";
    return reply("Group Temperature\n\n"+temp+"\n\n"+lastHour+" members active last hour.\n\n"+(lastHour<3?"Time for an engaging post!":"Group is buzzing!"));
  }
};
