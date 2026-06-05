// @marketplace member-list v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "member_list.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "MemberList", category: "moderation", desc: "memberlist,listmembers,allmembers",
  command: "    if(!canUse)return reply(\"Admin only.\");try{const meta=await sock.groupMetadata(chat);const members=meta.participants;return reply(\"Group Members (\"+members.length+\")\\n\\nAdmins (\"+members.filter(p=>p.admin).length+\"):\\n\"+members.filter(p=>p.admin).map(p=>\"+\"+norm(p.id)).join(\", \")+\"\\n\\nRegular members (\"+members.filter(p=>!p.admin).length+\"):\\n\"+members.filter(p=>!p.admin).slice(0,10).map(p=>\"+\"+norm(p.id)).join(\"\\n\")+(members.filter(p=>!p.admin).length>10?\"\\n...and \"+(members.filter(p=>!p.admin).length-10)+\" more\":\"\"));}catch{return reply(\"Failed. Bot must be admin.\");}  ",
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
