// @marketplace member-bio v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "member_bio.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "MemberBio", category: "moderation", desc: "Let members set their own group bio/description",
  command: ["memberbio","setbio","mybio","viewbio"],
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
    if(command==="setbio"){
      const bio=args.join(" ");
      if(!bio) return reply("Usage: "+pfx+"setbio <your bio>\nExample: "+pfx+"setbio Software developer | Lagos | Tech enthusiast");
      if(!gs.bios) gs.bios={};
      gs.bios[norm(userId)]=bio;save(all);
      return reply("Bio set!\n\n"+bio);
    }
    if(command==="viewbio"){
      const target=await getTarget()||userId;
      const bio=(gs.bios||{})[norm(target)];
      if(!bio) return reply("No bio set for this member.\nSet one: "+pfx+"setbio <bio>");
      return reply("Bio: +"+norm(target)+"\n\n"+bio);
    }
    if(command==="mybio"){
      const bio=(gs.bios||{})[norm(userId)];
      return reply(bio?"Your bio:\n\n"+bio:"No bio set.\n"+pfx+"setbio <your bio>");
    }
  }
};
