// @marketplace vote-ban v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "vote_ban.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "VoteBan", category: "moderation", desc: "voteban,banvote,communityban",
  command: "    if(!canUse)return reply(\"Admin only to initiate.\");const target=await getTarget();if(!target)return reply(\"Mention: \"+pfx+\"voteban @user\");const n=norm(target);if(!gs.banvotes)gs.banvotes={};gs.banvotes[n]={votes:[],against:[],date:new Date().toLocaleDateString()};save(all);return reply(\"Ban Vote started for +\"+n+\"\\n\\n/voteban yes — support ban\\n/voteban no — oppose ban\\n\\nNeeds 5+ votes in 10 minutes.\",{mentions:[target]});",
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
