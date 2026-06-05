// @marketplace welcome-image v1.0.0 by JusticeTech
"use strict";
const fs = require("fs"), path = require("path");
const DB = path.join(__dirname, "../../..", "database", "welcome_image.json");
const load = () => { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } };
const save = d => { try { fs.writeFileSync(DB, JSON.stringify(d,null,2)); } catch {} };
module.exports = {
  name: "WelcomeImage", category: "moderation", desc: "Set a custom image for welcome messages",
  command: ["welcomeimg","setwelcomeimage","welcomephoto"],
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
    const q=m?.quoted;
    const hasImg=q&&(q.mtype==="imageMessage"||(q.mimetype||"").includes("image"));
    if(!hasImg&&!args[0]) return reply("Reply to an image with "+pfx+"welcomeimg\nOr: "+pfx+"welcomeimg <image url>\nThis image will be sent when new members join.");
    if(hasImg){
      try{
        const buf=await sock.downloadMediaMessage(q);
        const imgPath=require("path").join(__dirname,"../../..","thumbnail","welcome_"+chat.replace(/[^0-9]/g,"")+".jpg");
        require("fs").writeFileSync(imgPath,buf);
        gs.welcome_img=imgPath;save(all);
        return reply("Welcome image saved! Will be shown to new members.");
      }catch(e){return reply("Failed: "+e.message);}
    }
    gs.welcome_img_url=args[0];save(all);
    return reply("Welcome image URL saved.");
  }
};
