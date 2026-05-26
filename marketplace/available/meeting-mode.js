// @marketplace meeting-mode v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "meeting_mode.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "MeetingMode", category: "moderation", desc: "Enable structured meeting mode with agenda",
  command: ["meeting2","meetingmode","startmeeting2","endmeeting2"],
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
    if(sub==="start"||sub==="on"){
      const title=args.slice(1).join(" ")||"Group Meeting";
      gs.meeting={active:true,title,start:new Date().toLocaleTimeString(),speakers:[],points:[]};save(all);
      try{await sock.groupSettingUpdate(chat,"announcement");}catch{}
      return reply("MEETING STARTED\n\nTitle: "+title+"\nTime: "+gs.meeting.start+"\n\nOnly admins can speak during the meeting.\n\n"+pfx+"meeting2 end — to close meeting");
    }
    if(sub==="end"||sub==="off"){
      if(!gs.meeting?.active) return reply("No active meeting.");
      const duration=gs.meeting.start;gs.meeting.active=false;save(all);
      try{await sock.groupSettingUpdate(chat,"not_announcement");}catch{}
      return reply("MEETING ENDED\n\nTitle: "+gs.meeting.title+"\nAll members can now post freely.");
    }
    return reply(pfx+"meeting2 start [title]\n"+pfx+"meeting2 end");
  }
};
