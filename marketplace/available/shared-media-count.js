// @marketplace shared-media-count v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "shared_media_count.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "SharedMediaCount", category: "moderation", desc: "mediacount,sharedmedia,countmedia",
  command: "    if(!canUse)return reply(\"Admin only.\");const state=require(\"../../../library/state\").getState();const msgs=Object.values(state.messages||{}).filter(m=>m.remoteJid===chat);const images=msgs.filter(m=>m.message?.imageMessage).length;const videos=msgs.filter(m=>m.message?.videoMessage).length;const docs=msgs.filter(m=>m.message?.documentMessage).length;return reply(\"Shared Media Count\\n\\nImages: \"+images+\"\\nVideos: \"+videos+\"\\nDocuments: \"+docs+\"\\nTotal: \"+(images+videos+docs)+\"\\n(Based on cached messages)\");",
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
