// @marketplace unban-request v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "unban_request.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "UnbanRequest", category: "moderation", desc: "Allow banned members to request unban",
  command: ["unbanreq","requestunban","pardonrequest"],
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
    // Members use this to request unban
    if(command==="requestunban"){
      const reason=args.join(" ")||"I will follow the rules.";
      if(!gs.unban_requests) gs.unban_requests=[];
      gs.unban_requests.push({userId:norm(userId),reason,date:new Date().toLocaleDateString()});save(all);
      return reply("Unban request submitted!\n\nReason: "+reason+"\nAn admin will review your request.");
    }
    if(!canUse) return reply("Admin only.");
    const reqs=gs.unban_requests||[];
    if(!reqs.length) return reply("No unban requests pending.");
    return reply("Unban Requests ("+reqs.length+")\n\n"+reqs.map((r,i)=>(i+1)+". +"+r.userId+"\n   Reason: "+r.reason+"\n   Date: "+r.date).join("\n\n"));
  }
};
