// @marketplace kick-vote v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "kick_vote.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "KickVote", category: "moderation", desc: "Democratic kick vote — members vote to remove someone",
  command: ["kickvote","votekick","demockicks"],
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
    const active=gs.kickvote||null;
    if(command==="votekick"){
      if(!canUse) return reply("Admin only to initiate.");
      const target=await getTarget();
      if(!target) return reply("Mention: "+pfx+"votekick @user");
      const targetNum=norm(target);
      gs.kickvote={target:targetNum,votes:[],against:[],started:Date.now(),by:norm(userId)};save(all);
      return reply("KICK VOTE STARTED!\n\nShould @"+targetNum+" be removed?\n\n/kickvote yes — vote to kick\n/kickvote no — vote to keep\n\nVote ends in 5 minutes.",{mentions:[target]});
    }
    if((args[0]||"").toLowerCase()==="yes"||(args[0]||"").toLowerCase()==="no"){
      if(!gs.kickvote) return reply("No active kick vote.");
      const vote=(args[0]||"").toLowerCase();
      const vn=norm(userId);
      if(gs.kickvote.votes.includes(vn)||gs.kickvote.against.includes(vn)) return reply("You already voted!");
      if(vote==="yes") gs.kickvote.votes.push(vn);
      else gs.kickvote.against.push(vn);
      save(all);
      return reply("Vote recorded!\nYes: "+gs.kickvote.votes.length+" | No: "+gs.kickvote.against.length);
    }
    if(!gs.kickvote) return reply("No active kick vote.\nAdmins: "+pfx+"votekick @user");
    return reply("Active Vote: +"+gs.kickvote.target+"\nYes (kick): "+gs.kickvote.votes.length+"\nNo (keep): "+gs.kickvote.against.length);
  }
};
