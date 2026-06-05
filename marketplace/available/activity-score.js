// @marketplace activity-score v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "activity_score.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "ActivityScore", category: "moderation", desc: "Score members by activity and engagement",
  command: ["activityscore","engagementscore","memberscore","topactive"],
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
    const state=require("../../../library/state").getState();
    const counts=state.user_message_counts?.[chat]||{};
    const scored=Object.entries(counts).map(([jid,d])=>({num:norm(jid),count:d.count||0,lastMsg:d.last_msg||0})).sort((a,b)=>b.count-a.count);
    if(!scored.length) return reply("No activity data yet. Members need to chat first.");
    const lines=["Activity Scores\n","Top Members:\n"];
    const medals=["🥇","🥈","🥉"];
    scored.slice(0,10).forEach((s,i)=>lines.push((medals[i]||" "+(i+1)+".")+"+"+s.num+": "+s.count+" messages"));
    return reply(lines.join("\n"));
  }
};
