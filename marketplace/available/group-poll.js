// @marketplace group-poll v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "group_poll.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "GroupPollCreate", category: "moderation", desc: "grouppoll,quickpoll,createpoll2",
  command: "    const sep=args.indexOf(\"|\");if(sep<0)return reply(\"Usage: \"+pfx+\"createpoll2 <question> | <option1> | <option2>\\nExample: \"+pfx+\"createpoll2 Best meetup day? | Saturday | Sunday | Weekday\");const q=args.slice(0,sep).join(\" \");const opts=args.slice(sep+1).join(\" \").split(\"|\").map(o=>o.trim());if(opts.length<2)return reply(\"Need at least 2 options.\");if(!gs.polls)gs.polls=[];const id=\"P\"+(gs.polls.length+1);gs.polls.push({id,q,opts,votes:{},date:new Date().toLocaleDateString()});save(all);const optText=opts.map((o,i)=>String.fromCharCode(65+i)+\") \"+o).join(\"\\n\");await sock.sendMessage(chat,{text:\"POLL (\"+id+\")\\n\\n\"+q+\"\\n\\n\"+optText+\"\\n\\nVote: \"+pfx+\"vote \"+id+\" A/B/C\"});return;",
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
undefined
  }
};
