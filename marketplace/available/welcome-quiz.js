// @marketplace welcome-quiz v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "welcome_quiz.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "WelcomeQuiz", category: "moderation", desc: "New members answer a quiz to join",
  command: ["welcomequiz","joinquiz","memberquiz"],
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
    if(sub==="set"){
      const sep=args.indexOf("=>");
      if(sep<0) return reply("Usage: "+pfx+"welcomequiz set <question> => <answer>\nExample: "+pfx+"welcomequiz set What is our group topic? => Technology");
      const q=args.slice(1,sep).join(" "),a=args.slice(sep+1).join(" ");
      gs.welcome_quiz={q,a:a.toLowerCase()};gs.quiz_on=true;save(all);
      return reply("Welcome Quiz set!\n\nQ: "+q+"\nA: "+a);
    }
    if(sub==="on"||sub==="off"){ gs.quiz_on=sub==="on"; save(all); return reply("Welcome Quiz: *"+sub.toUpperCase()+"*"); }
    return reply("Welcome Quiz: "+(gs.welcome_quiz?"ON":"OFF")+"\n"+(gs.welcome_quiz?"Q: "+gs.welcome_quiz.q:"")+"\n\n"+pfx+"welcomequiz set <question> => <answer>");
  }
};
