// @marketplace intro-required v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "intro_required.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "IntroRequired", category: "moderation", desc: "Require members to introduce themselves",
  command: ["introreq","requireintro","mustintroduce","newintro"],
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
    if(!canUse)return reply("Admin only.");
    const sub=(args[0]||"").toLowerCase();
    if(sub==="on"||sub==="off"){ gs.introreq=sub==="on"; save(all); return reply("Intro Required: *"+sub.toUpperCase()+"*\n"+(sub==="on"?"New members must send an intro before chatting.":"")); }
    if(command==="newintro"){
      // Member submitting intro
      const intro=args.join(" ");
      if(!intro) return reply("Usage: "+pfx+"newintro <tell us about yourself>\nExample: "+pfx+"newintro Hi I'm Justice, software developer from Lagos");
      if(!gs.intros) gs.intros={};
      gs.intros[norm(userId)]=intro;save(all);
      return reply("Introduction posted!\n\n"+intro+"\n\nWelcome to the group!");
    }
    return reply(pfx+"introreq on/off\nNew members must do /newintro before chatting.\nCurrent: "+(gs.introreq?"ON":"OFF"));
  }
};
