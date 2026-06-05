// @marketplace vip-member v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "vip_member.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "VIPMember", category: "moderation", desc: "Grant VIP status to bypass some restrictions",
  command: ["vip","addvip","removevip","viplist"],
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
    const target = await getTarget();
    if(command==="addvip"){
      if(!target) return reply("Mention user: "+pfx+"addvip @user");
      const n=norm(target);
      if(!gs.vips) gs.vips=[];
      if(!gs.vips.includes(n)) gs.vips.push(n);
      save(all);
      return reply("VIP granted to @"+n+"\nThey bypass: anti-spam, media blocks, and message limits.",{mentions:[target]});
    }
    if(command==="removevip"){
      if(!target) return reply("Mention user: "+pfx+"removevip @user");
      const n=norm(target);
      if(gs.vips) gs.vips=gs.vips.filter(v=>v!==n);
      save(all);
      return reply("VIP removed from @"+n,{mentions:[target]});
    }
    if(command==="viplist"){
      const vips=gs.vips||[];
      if(!vips.length) return reply("No VIP members.\n"+pfx+"addvip @user");
      return reply("VIP Members ("+vips.length+"):\n"+vips.map(n=>"  • +"+n).join("\n"));
    }
  }
};
