// @marketplace group-rating v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "group_rating.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "GroupRating", category: "moderation", desc: "rategroup,grouprating,starrating",
  command: "    const rating=parseInt(args[0]);if(!isNaN(rating)&&rating>=1&&rating<=5){if(!gs.ratings)gs.ratings=[];gs.ratings.push({rating,by:norm(userId),date:new Date().toLocaleDateString()});save(all);const avg=(gs.ratings.reduce((s,r)=>s+r.rating,0)/gs.ratings.length).toFixed(1);return reply(\"Rating submitted! ⭐\".repeat(rating)+\"\\n\\nAverage: \"+avg+\"/5 (\"+gs.ratings.length+\" ratings)\");}return reply(\"Usage: \"+pfx+\"rategroup <1-5>\\nAverage: \"+( gs.ratings?.length?(gs.ratings.reduce((s,r)=>s+r.rating,0)/gs.ratings.length).toFixed(1):\"No ratings yet\")+\"/5\");",
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
undefined
  }
};
