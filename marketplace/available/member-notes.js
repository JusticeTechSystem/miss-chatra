// @marketplace member-notes v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "member_notes.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "MemberNotes", category: "moderation", desc: "Add private admin notes about group members",
  command: ["membernote","addnote2","staffnote","modlog"],
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
    const target = await getTarget();
    const noteText = args.filter(a=>!a.startsWith("@")).join(" ");
    if(command==="addnote2"||command==="membernote"){
      if(!target||!noteText) return reply("Usage: "+pfx+"membernote @user <note>\nExample: "+pfx+"membernote @user Previously warned for spam");
      const targetNum=norm(target);
      if(!gs.member_notes) gs.member_notes={};
      if(!gs.member_notes[targetNum]) gs.member_notes[targetNum]=[];
      gs.member_notes[targetNum].push({note:noteText,by:m?.pushName||"Admin",date:new Date().toLocaleDateString()});
      save(all);
      return reply("Note added for @"+targetNum+": "+noteText,{mentions:[target]});
    }
    if(command==="modlog"){
      const notes=gs.member_notes||{};
      const entries=Object.entries(notes);
      if(!entries.length) return reply("No member notes yet.\n"+pfx+"membernote @user <note>");
      return reply("Member Notes\n\n"+entries.slice(0,10).map(([n,ns])=>"+"+n+": "+ns.length+" note(s)\n  Last: "+ns[ns.length-1].note).join("\n"));
    }
  }
};
