// @marketplace group-broadcast v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "group_broadcast.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "GroupBroadcast", category: "moderation", desc: "Broadcast message to all group members via DM",
  command: ["groupdm","dmall","broadcastdm"],
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
    const msg=args.join(" ");
    if(!msg) return reply("Usage: "+pfx+"dmall <message>\nWARNING: This DMs every group member.");
    try{
      const meta=await sock.groupMetadata(chat);
      const members=meta.participants.filter(p=>!p.admin);
      let sent=0;
      await reply("Broadcasting to "+members.length+" members...");
      for(const member of members.slice(0,20)){
        try{await sock.sendMessage(member.id,{text:"Message from "+meta.subject+":\n\n"+msg});sent++;await new Promise(r=>setTimeout(r,500));}catch{}
      }
      return reply("Broadcast complete: "+sent+" sent.");
    }catch(e){return reply("Error: "+e.message);}  
  }
};
