// @marketplace group-currency v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "group_currency.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "GroupCurrency", category: "moderation", desc: "groupcurrency,setcurrency,currencysymbol",
  command: "    if(!canUse)return reply(\"Admin only.\");const c=(args[0]||\"NGN\").toUpperCase();const SYMBOLS={NGN:\"₦\",USD:\"$\",GBP:\"£\",EUR:\"€\",GHS:\"₵\",KES:\"KSh\",ZAR:\"R\"};gs.currency=c;gs.currency_symbol=SYMBOLS[c]||c;save(all);return reply(\"Group currency set to \"+c+\" (\"+(SYMBOLS[c]||c)+\")\");",
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
