// @marketplace rule-engine v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "rule_engine.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "RuleEngine", category: "moderation", desc: "Create if-then automated rules",
  command: ["ruleadd2","rulelist2","ruledelete2","rulesengine"],
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
    if(command==="ruleadd2"){
      const pipe=args.indexOf("|");
      if(pipe<0) return reply("Usage: "+pfx+"ruleadd2 <trigger> | <action> | <response>\nTriggers: contains:<word>, has_link, has_forward\nActions: delete, warn, mute, kick\nExample: "+pfx+"ruleadd2 contains:bitcoin | warn | No crypto promotions!");
      const trigger=args.slice(0,pipe).join(" "),rest=args.slice(pipe+1).join(" ").split("|");
      const action=(rest[0]||"delete").trim(),response=(rest[1]||"Rule violation").trim();
      if(!gs.rules2)gs.rules2=[];gs.rules2.push({trigger,action,response,by:m?.pushName,date:new Date().toLocaleDateString()});save(all);
      return reply("Rule added!\n\nTrigger: "+trigger+"\nAction: "+action+"\nResponse: "+response);
    }
    if(command==="rulelist2"){
      const rules=gs.rules2||[];if(!rules.length) return reply("No rules set.");
      return reply("Rule Engine ("+rules.length+" rules)\n\n"+rules.map((r,i)=>(i+1)+". IF "+r.trigger+" → "+r.action+(r.response?": "+r.response:"")).join("\n"));
    }
    if(command==="ruledelete2"){
      const idx=parseInt(args[0])-1;
      if(gs.rules2&&gs.rules2[idx]){gs.rules2.splice(idx,1);save(all);return reply("Rule deleted.");}
      return reply("Rule #"+( idx+1)+" not found.");
    }
  }
};
