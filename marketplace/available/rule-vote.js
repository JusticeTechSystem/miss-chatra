// @marketplace rule-vote v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "rule_vote.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "RuleVote", category: "moderation", desc: "Members vote to add or change rules",
  command: ["rulevote","voteonrule","proposerule"],
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
    const text=args.join(" ");
    if(!text) return reply("Usage: "+pfx+"proposerule <proposed rule>\nExample: "+pfx+"proposerule Members should only post between 7am and 10pm");
    if(!gs.rule_proposals)gs.rule_proposals=[];
    gs.rule_proposals.push({rule:text,proposer:m?.pushName||"Member",votes:{yes:[],no:[]},date:new Date().toLocaleDateString()});save(all);
    return reply("Rule Proposal Submitted!\n\nProposed: "+text+"\nBy: "+(m?.pushName||"Member")+"\n\nAdmins will review this proposal.");
  }
};
