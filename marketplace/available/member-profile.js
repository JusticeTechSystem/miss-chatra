// @marketplace member-profile v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "member_profile.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "MemberProfile", category: "moderation", desc: "View detailed member activity profile",
  command: ["memberprofile","profilecheck","memberhistory"],
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
    const target=await getTarget()||userId;
    const targetNum=norm(target);
    const state=require("../../../library/state").getState();
    const counts=state.user_message_counts?.[chat]||{};
    const userCount=counts[target]||{count:0,last_msg:null};
    const notes=(gs.member_notes||{})[targetNum]||[];
    const warns=await (async()=>{ try{const {warnsGet}=require("../../../library/db");return warnsGet(chat,target)||0;}catch{return 0;}})();
    const isMuted=gs.shadowmuted?.includes(targetNum)?true:false;
    const isVIP=gs.vips?.includes(targetNum)?true:false;
    const daysSince=userCount.last_msg?Math.floor((Date.now()-userCount.last_msg)/86400000):null;
    return reply("Member Profile: +"+targetNum+"\n\nMessages: "+userCount.count+"\nLast active: "+(daysSince===0?"Today":daysSince?daysSince+"d ago":"Unknown")+"\nWarnings: "+warns+"\nStatus: "+(isVIP?"VIP":"Regular")+(isMuted?" | Shadow-Muted":"")+"\nAdmin notes: "+notes.length);
  }
};
