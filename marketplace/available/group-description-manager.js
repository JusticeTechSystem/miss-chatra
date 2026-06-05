// @marketplace group-description-manager v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "group_description_manager.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "GroupDescManager", category: "moderation", desc: "Manage and update group description easily",
  command: ["setdesc2","updatedesc","descmanager"],
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
    const text=args.join(" ");
    if(!text){
      try{const meta=await sock.groupMetadata(chat);return reply("Current Description:\n\n"+(meta.desc||"No description set")+"\n\n"+pfx+"setdesc2 <new description>");}
      catch{return reply("Usage: "+pfx+"setdesc2 <description>");}
    }
    try{await sock.groupUpdateDescription(chat,text);return reply("Group description updated!");}
    catch{return reply("Failed. Bot must be admin.");}  
  }
};
