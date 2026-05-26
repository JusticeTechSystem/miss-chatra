// @marketplace captcha-join v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "captcha_join.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "CaptchaJoin", category: "moderation", desc: "New members must solve a simple captcha",
  command: ["captcha","captchajoin","joincaptcha"],
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
    const captchas=global.__captchas=global.__captchas||{};
    if(!canUse){
      // Member solving captcha
      const key=chat+"_captcha_"+norm(userId);
      const c=captchas[key];
      if(!c) return reply("No captcha pending for you.\nNew members get a captcha automatically on join.");
      const answer=args.join(" ").trim().toLowerCase();
      if(answer===c.answer.toLowerCase()){ delete captchas[key]; if(!gs.verified)gs.verified=[]; gs.verified.push(norm(userId)); save(all); return reply("Captcha solved! Welcome to the group."); }
      return reply("Wrong answer! Try again.\n\n"+c.question);
    }
    // Admin toggling
    const sub=(args[0]||"").toLowerCase();
    if(sub==="on"||sub==="off"){ gs.captcha_on=sub==="on"; save(all); return reply("Captcha on Join: *"+sub.toUpperCase()+"*\n"+(sub==="on"?"New members must solve a simple math problem.":"")); }
    return reply(pfx+"captchajoin on/off\nNew members solve simple math before posting.\nCurrent: "+(gs.captcha_on?"ON":"OFF"));
  }
};
