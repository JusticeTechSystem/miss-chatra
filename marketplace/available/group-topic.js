// @marketplace group-topic v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "group_topic.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "GroupTopic", category: "moderation", desc: "Set and enforce discussion topic for the day",
  command: ["grouptopic","settopic","todaystopic","topicmode"],
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
    const sub=(args[0]||"").toLowerCase();
    if(sub==="set"||args.length>=1&&sub!=="off"&&sub!=="on"&&sub!=="clear"){
      const topic=args[0]==="set"?args.slice(1).join(" "):args.join(" ");
      gs.topic=topic;gs.topic_date=new Date().toLocaleDateString();save(all);
      await sock.sendMessage(chat,{text:"Today's Topic:\n\n"+topic+"\n\n_Keep discussions related to this topic._"});
      return;
    }
    if(sub==="clear"){ delete gs.topic; save(all); return reply("Topic cleared."); }
    if(gs.topic) return reply("Current Topic ("+gs.topic_date+"):\n\n"+gs.topic);
    return reply("No topic set.\n"+pfx+"grouptopic <topic text>\n"+pfx+"grouptopic clear");
  }
};
