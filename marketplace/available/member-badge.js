// @marketplace member-badge v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "member_badge.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "MemberBadge", category: "moderation", desc: "Assign badges to group members",
  command: ["badge","givebadge","removebadge","mybadges"],
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
    if(command==="mybadges"){
      const badges=(gs.badges||{})[norm(userId)]||[];
      if(!badges.length) return reply("You have no badges yet.");
      return reply("Your Badges:\n\n"+badges.join("  "));
    }
    if(!canUse) return reply("Admin only.");
    const target=await getTarget();const badge=args.filter(a=>!a.startsWith("@")).join(" ");
    if(command==="givebadge"){
      if(!target||!badge) return reply("Usage: "+pfx+"givebadge @user <badge emoji/text>\nExample: "+pfx+"givebadge @user ⭐ Top Contributor");
      if(!gs.badges)gs.badges={};const n=norm(target);
      if(!gs.badges[n])gs.badges[n]=[];gs.badges[n].push(badge);save(all);
      return reply("Badge given to @"+n+": "+badge,{mentions:[target]});
    }
    if(command==="removebadge"){
      if(!target) return reply("Mention user.");
      const n=norm(target);
      if(gs.badges&&gs.badges[n]){gs.badges[n].pop();save(all);}
      return reply("Last badge removed from @"+n,{mentions:[target]});
    }
  }
};
