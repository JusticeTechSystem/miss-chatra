// @marketplace member-count-goal v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "member_count_goal.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "MemberCountGoal", category: "moderation", desc: "Set and track a member count goal",
  command: ["membergoal","growthgoal","targetmembers"],
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
    const target2=parseInt(args[0]);
    if(canUse&&!isNaN(target2)){ gs.member_goal=target2; save(all); return reply("Member goal set: "+target2+" members."); }
    try{
      const meta=await sock.groupMetadata(chat);
      const current=meta.participants.length;
      const goal=gs.member_goal||100;
      const pct=Math.min(100,(current/goal*100)).toFixed(0);
      const bar="█".repeat(Math.floor(pct/10))+"░".repeat(10-Math.floor(pct/10));
      return reply("Member Count Goal\n\n["+bar+"] "+pct+"%\n\n"+current+" / "+goal+" members\n\n"+(current>=goal?"GOAL REACHED!":"Need "+(goal-current)+" more members."));
    }catch{return reply("Could not fetch member count.");}  
  }
};
