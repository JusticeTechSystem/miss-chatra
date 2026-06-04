// @marketplace group-invite-link-manager v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "group_invite_link_manager.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "InviteLinkManager", category: "moderation", desc: "Control and manage group invite links",
  command: ["invitemanager","linkmanager","rotateinvite"],
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
    if(sub==="get"){
      try{const code=await sock.groupInviteCode(chat);return reply("Current invite link:\nhttps://chat.whatsapp.com/"+code);}
      catch{return reply("Could not get invite link.");}
    }
    if(sub==="revoke"||sub==="rotate"){
      try{
        await sock.groupRevokeInvite(chat);
        const newCode=await sock.groupInviteCode(chat);
        return reply("Invite link rotated!\nOld link is now invalid.\n\nNew link:\nhttps://chat.whatsapp.com/"+newCode);
      }catch{return reply("Failed to rotate link. Bot must be admin.");}
    }
    return reply(pfx+"invitemanager get — show link\n"+pfx+"invitemanager revoke — rotate link");
  }
};
