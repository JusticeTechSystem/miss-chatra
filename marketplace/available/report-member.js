// @marketplace report-member v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "report_member.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "ReportMember", category: "moderation", desc: "Members can report rule-breakers to admins",
  command: ["report2","reportuser","reportto","flaguser"],
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
    const target=await getTarget();
    const reason=args.filter(a=>!a.startsWith("@")).join(" ")||"Rule violation";
    if(!target) return reply("Usage: "+pfx+"report2 @user <reason>\nExample: "+pfx+"report2 @user Sharing spam links");
    const targetNum=norm(target);
    if(!gs.reports) gs.reports=[];
    gs.reports.push({reporter:norm(userId),target:targetNum,reason,date:new Date().toLocaleDateString()});save(all);
    return reply("Report submitted for +"+targetNum+"\nReason: "+reason+"\n\nAdmins will review this report.\n\nThank you for helping keep the group safe.");
  }
};
