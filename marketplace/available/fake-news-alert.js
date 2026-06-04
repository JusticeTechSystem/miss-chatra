// @marketplace fake-news-alert v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "fake_news_alert.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "FakeNewsAlert", category: "moderation", desc: "fakenews,reportfakenews,factcheck2",
  command: "    const target=quotedMsg;const source=args.join(\" \");if(!target)return reply(\"Reply to a message to flag it as fake news.\\nUsage: Reply to message then type /fakenews [source if known]\");if(!gs.fakenews_reports)gs.fakenews_reports=[];gs.fakenews_reports.push({reported_by:norm(userId),note:source,date:new Date().toLocaleDateString()});save(all);return reply(\"Fake news flagged!\\nAdmins will review.\\n\"+(source?\"Source: \"+source:\"\"));",
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
