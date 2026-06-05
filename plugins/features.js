// plugins/features.js — Miss Chatra Features Overview
"use strict";

const fs   = require("fs");
const path = require("path");

const THUMB = path.join(__dirname, "..", "thumbnail", "image.jpg");
function getThumb() { try { return fs.existsSync(THUMB) ? fs.readFileSync(THUMB) : null; } catch { return null; } }

const CAT_ICONS = {
  core:"⚙️", moderation:"🛡️", admin:"👑", sports:"⚽", bible:"📖",
  games:"🎮", tools:"🔧", downloader:"📥", search:"🔎", ai:"🤖",
  info:"ℹ️", settings:"⚙️", personalization:"🧠", integrations:"🔗",
  welcome:"👋", notes:"📝", "anti-features":"🚫", "auto-features":"🤖",
};

module.exports = {
  name: "Features",
  category: "core",
  desc: "Browse all bot features by category: /features [category]",
  command: ["features"],

  run: async ({ reply, args, m, sock, prefix, isOwner, isDev }) => {
    const pfx  = prefix || "/";
    const all  = Array.isArray(global.PLUGINS) ? global.PLUGINS : [];
    const sub  = (args[0] || "").toLowerCase();
    const ver  = global.BOT_VERSION || "v1.0 Miss Chatra";
    const thumb = getThumb();

    async function send(text) {
      if (thumb && sock && m?.chat) {
        try { return await sock.sendMessage(m.chat, { image: thumb, caption: text }, { quoted: m }); } catch {}
      }
      return reply(text);
    }

    // Group plugins by category
    const catMap = new Map();
    for (const pl of all) {
      if (pl.hidden) continue;
      const cat  = String(pl.category || "misc").toLowerCase();
      const cmds = (pl.command || []).filter(c => c && !String(c).startsWith("_"));
      if (!cmds.length) continue;
      if (!catMap.has(cat)) catMap.set(cat, []);
      catMap.get(cat).push({ name: pl.name, desc: pl.desc || "", cmds });
    }

    const cats = [...catMap.keys()].sort((a,b) => a==="core"?-1:b==="core"?1:a.localeCompare(b));
    const totalCmds = all.reduce((n,p) => n + (p.command||[]).filter(c=>c&&!String(c).startsWith("_")).length, 0);

    // Show specific category
    if (sub && catMap.has(sub)) {
      const items = catMap.get(sub);
      const icon  = CAT_ICONS[sub] || "📦";
      const lines = [`${icon} *${sub.toUpperCase()} Features*\n${"═".repeat(32)}\n`];
      for (const it of items) {
        lines.push(`📌 *${it.name}*`);
        if (it.desc) lines.push(`   ${it.desc.slice(0,80)}`);
        for (const cmd of it.cmds.slice(0,6)) lines.push(`   └ ${pfx}${cmd}`);
        if (it.cmds.length > 6) lines.push(`   └ ...+${it.cmds.length-6} more`);
        lines.push("");
      }
      lines.push(`${"═".repeat(32)}\n📊 Commands in this category: ${items.reduce((n,i)=>n+i.cmds.length,0)}`);
      return send(lines.join("\n"));
    }

    // Show all categories overview
    if (!sub || sub === "all") {
      const lines = [
        `🤖 *Miss Chatra — Features Overview*`,
        `${"═".repeat(32)}`,
        ``,
        `📊 Total: ${totalCmds} commands across ${cats.length} categories`,
        ``,
        `*Categories:*`,
      ];
      for (const cat of cats) {
        const icon  = CAT_ICONS[cat] || "📦";
        const items = catMap.get(cat);
        const cmdCount = items.reduce((n,i)=>n+i.cmds.length,0);
        lines.push(`  ${icon} *${cat.toUpperCase()}* — ${cmdCount} commands`);
      }
      lines.push(``);
      lines.push(`*To browse a category:*`);
      lines.push(`  ${pfx}features moderation`);
      lines.push(`  ${pfx}features sports`);
      lines.push(`  ${pfx}features games`);
      lines.push(`  ${pfx}features ai`);
      lines.push(``);
      lines.push(`🤖 ${ver}`);
      return send(lines.join("\n"));
    }

    // Category not found — show list
    const line = [`❓ Category *"${sub}"* not found.\n\nAvailable categories:`];
    for (const cat of cats) line.push(`  • ${pfx}features ${cat}`);
    return reply(line.join("\n"));
  },
};
