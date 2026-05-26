// @marketplace blacklist-words v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "blacklist_words.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "BlacklistWords", category: "moderation", desc: "Advanced word blacklist with auto-actions",
  command: ["blacklist","addblacklist","removeblacklist","blacklistview"],
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
    if(command==="addblacklist"){
      const word=args[0],action=args[1]||"delete",severity=args[2]||"medium";
      if(!word) return reply("Usage: "+pfx+"addblacklist <word> [action] [severity]\nActions: delete, warn, mute, kick\nSeverity: low, medium, high");
      if(!gs.blacklist)gs.blacklist=[];
      gs.blacklist.push({word:word.toLowerCase(),action,severity});save(all);
      return reply("Added to blacklist: "+word+"\nAction: "+action+" | Severity: "+severity);
    }
    if(command==="removeblacklist"){
      if(!gs.blacklist)return reply("Blacklist is empty.");
      gs.blacklist=gs.blacklist.filter(b=>b.word!=(args[0]||"").toLowerCase());save(all);
      return reply("Removed: "+args[0]);
    }
    const list=gs.blacklist||[];
    if(!list.length) return reply("Blacklist empty.\n"+pfx+"addblacklist <word> warn medium");
    return reply("Blacklist ("+list.length+" words)\n\n"+list.slice(0,15).map((b,i)=>(i+1)+". "+b.word+" → "+b.action+" ("+b.severity+")").join("\n"));
  }
};
