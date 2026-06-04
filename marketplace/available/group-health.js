// @marketplace group-health v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "group_health.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "GroupHealthCheck", category: "moderation", desc: "Overall group health assessment",
  command: ["grouphealth","healthcheck","groupscore"],
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
    try{
      const meta=await sock.groupMetadata(chat);
      const total=meta.participants.length;
      const active7d=Object.values(counts).filter(d=>Date.now()-(d.last_msg||0)<7*86400000).length;
      const engagement=(active7d/Math.max(1,total)*100).toFixed(0);
      const msgTotal=Object.values(counts).reduce((s,d)=>s+(d.count||0),0);
      const score=Math.min(100,parseInt(engagement)+( msgTotal>100?20:10)+(gs.rules_text?10:0));
      const grade=score>=80?"A - Excellent":score>=60?"B - Good":score>=40?"C - Average":"D - Needs work";
      return reply("Group Health Check\n\nScore: "+score+"/100 ("+grade+")\n\nMembers: "+total+"\nActive (7d): "+active7d+" ("+engagement+"%)\nTotal Messages: "+msgTotal+"\nHas Rules: "+(gs.rules_text?"Yes":"No")+"\nModeration: "+(Object.keys(gs).length>5?"Active":"Basic")+"\n\nTip: "+(engagement<30?"Post engaging content to boost activity.":score<70?"Add more moderation features.":"Keep up the great work!"));
    }catch{return reply("Could not assess group health. Make sure bot is admin.");}  
  }
};
