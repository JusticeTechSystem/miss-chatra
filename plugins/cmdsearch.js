// plugins/cmdsearch.js — Miss Chatra Command Search v3 — covers ALL loaded commands
"use strict";

// Static documentation for core commands
const DOCS = {
  ban:{cat:"Moderation",desc:"Permanently ban a member. Revokes their invite link.",usage:"/ban @user [reason]",examples:["/ban @user","/ban @user Spamming links"],steps:["1. Mention user or reply to their message","2. Type /ban @user [reason]","3. Bot removes them and revokes invite link","4. Use /unban @user to reverse"]},
  unban:{cat:"Moderation",desc:"Lift a ban from a member.",usage:"/unban @user",examples:["/unban @user"],steps:["1. Type /unban @user","2. Generate new invite: /link","3. Share link with the unbanned member"]},
  kick:{cat:"Moderation",desc:"Remove a member. They can rejoin with an active invite link.",usage:"/kick @user [reason]",examples:["/kick @user","/kick @user Please return when ready"],steps:["1. Mention user or reply to message","2. Type /kick @user","3. Removed but can rejoin via invite — use /ban to prevent"]},
  mute:{cat:"Moderation",desc:"Mute a member — bot auto-deletes their messages.",usage:"/mute @user [duration]",examples:["/mute @user 30m","/mute @user 2h","/mute @user 1d"],steps:["1. Type /mute @user followed by duration","2. Units: s=seconds m=minutes h=hours d=days","3. No duration = permanent until /unmute","4. Auto-unmutes after set time"]},
  unmute:{cat:"Moderation",desc:"Remove mute from a member.",usage:"/unmute @user",examples:["/unmute @user"],steps:["1. Type /unmute @user","2. They can now post freely again"]},
  warn:{cat:"Moderation",desc:"Issue a warning. Auto-kicks at warn limit (default: 3).",usage:"/warn @user [reason]",examples:["/warn @user No spam","/warn @user Please read the rules"],steps:["1. Type /warn @user with reason","2. Bot records warning and notifies group","3. At limit, member auto-kicked","4. Check: /warns @user","5. Change limit: /setwarn 5","6. Reset: /resetwarn @user"]},
  antilink:{cat:"Moderation",desc:"Auto-handle WhatsApp group invite links.",usage:"/antilink <off|delete|warn|kick>",examples:["/antilink delete","/antilink warn","/antilink kick","/antilink off"],steps:["delete — silently remove the link","warn — delete + warn sender","kick — delete + remove sender","off — disable antilink","Admins always exempt"]},
  antispam:{cat:"Moderation",desc:"Auto-mute spammers (5+ messages in 10 seconds).",usage:"/antispam on/off",examples:["/antispam on","/antispam off"],steps:["1. /antispam on to enable","2. 5+ msgs in 10s triggers auto-mute for 60s","3. Group notified automatically","Admins exempt"]},
  tagall:{cat:"Moderation",desc:"Tag all group members with visible @numbers.",usage:"/tagall [message]",examples:["/tagall Meeting now!"],steps:["1. /tagall followed by message","2. All members notified","3. /ghosttag for invisible mentions"]},
  ghosttag:{cat:"Moderation",desc:"Tag all members silently — no visible @numbers.",usage:"/ghosttag [message]",examples:["/ghosttag Check this"],steps:["1. /ghosttag with message","2. All members notified silently"]},
  promote:{cat:"Moderation",desc:"Promote member to group admin.",usage:"/promote @user",examples:["/promote @user"],steps:["1. Bot must be admin","2. /promote @user","3. They get WhatsApp admin rights immediately"]},
  demote:{cat:"Moderation",desc:"Remove admin status from a group member.",usage:"/demote @user",examples:["/demote @user"],steps:["1. Bot must be admin","2. /demote @user"]},
  open:{cat:"Moderation",desc:"Open group — all members can send messages.",usage:"/open",examples:["/open"],steps:["Bot must be admin. /open to allow all to post."]},
  close:{cat:"Moderation",desc:"Close group — only admins can send messages.",usage:"/close",examples:["/close"],steps:["Bot must be admin. /close to allow admins only."]},
  setwarn:{cat:"Moderation",desc:"Set how many warnings before auto-kick.",usage:"/setwarn <number>",examples:["/setwarn 3","/setwarn 5"],steps:["1. /setwarn 3","2. At 3 /warn commands, member auto-kicked"]},
  menu:{cat:"Core",desc:"Show the full command menu grouped by category.",usage:"/menu",examples:["/menu","/help","/cmds"],steps:["1. Type /menu anywhere","2. See all commands grouped by category","3. Change theme: /menustyle","4. Browse category: /features"]},
  menustyle:{cat:"Core",desc:"Change the visual theme of /menu (20 themes).",usage:"/menustyle [1-20|auto]",examples:["/menustyle","/menustyle 5","/menustyle auto"],steps:["1. /menustyle to preview all themes","2. /menustyle 5 to set a theme","3. /menustyle auto to randomize each time"]},
  ghost:{cat:"Stealth",desc:"Full ghost/invisible mode — offline, no blue ticks, no last seen.",usage:"/ghost on/off/status",examples:["/ghost on","/ghost off","/ghost status"],steps:["1. /ghost on — activates invisible mode","2. Presence locked to unavailable","3. Blue ticks suppressed (3 layers)","4. /ghost status to check","5. /ghost off to restore visibility","Ghost is ON by default after every startup"]},
  plugin:{cat:"Marketplace",desc:"Browse, install, remove, and manage 1,392 marketplace plugins.",usage:"/plugin <list|install|remove|info|search|installed|update>",examples:["/plugin list","/plugin list finance","/plugin search budget","/plugin info expense-tracker","/plugin install expense-tracker","/plugin remove expense-tracker","/plugin installed","/plugin update all"],steps:["BEFORE INSTALLING — you must:","1. Join JusticeTech Tools: https://chat.whatsapp.com/GL6GUJL5QNJEuBy9fWIssu?mode=gi_t","2. Join JusticeTech Support: https://chat.whatsapp.com/Gyt75qFHoul3wp53IKi25v?mode=gi_t","3. Post plugin request in Support group:","   Plugin Request | Plugin ID: <id> | Bot: <number>","4. Wait for developer approval (24-48h)","AFTER APPROVAL:","5. /plugin list — browse","6. /plugin install <id> — install it","7. Commands appear in /menu immediately"],notes:"1,392 plugins. All require developer approval."},
  setbotname:{cat:"Settings",desc:"Change the bot display name shown in /menu.",usage:"/setbotname <name>",examples:["/setbotname Miss Chatra","/setbotname ChatraX"],steps:["1. /setbotname followed by name","2. Saved immediately","3. /menu to see change"]},
  setprefix:{cat:"Settings",desc:"Change the command prefix symbol.",usage:"/setprefix <symbol>",examples:["/setprefix /","/setprefix !","/setprefix ."],steps:["1. /setprefix ! (or any symbol)","2. All commands now use new prefix","3. E.g. !menu, !ban, !kick"],notes:"Default is /. Can be !, ., #, $ etc."},
  mode:{cat:"Settings",desc:"Change where/who the bot responds to.",usage:"/mode <public|private|group|admin>",examples:["/mode public","/mode private","/mode group","/mode admin"],steps:["public: responds everywhere to everyone","private: DM only (not in groups)","group: groups only (not DM)","admin: admins in groups + owner in DM"]},
  features:{cat:"Core",desc:"Browse all bot features organized by category.",usage:"/features [category]",examples:["/features","/features moderation","/features games"],steps:["1. /features for overview of all categories","2. /features moderation for all mod commands"]},
  cmdsearch:{cat:"Core",desc:"Search any command for full guide, examples, step-by-step.",usage:"/cmdsearch <command or keyword or category>",examples:["/cmdsearch ban","/cmdsearch anti","/cmdsearch moderation","/cmdcategory"],steps:["1. /cmdsearch <command> — full step-by-step guide","2. /cmdsearch <category> — all commands in category","3. /cmdsearch <keyword> — find related commands","4. /cmdcategory — list all categories"],notes:"Searches all core + marketplace plugins dynamically."},
  autoread:{cat:"Automation",desc:"Auto-mark all messages as read instantly.",usage:"/autoread on/off",examples:["/autoread on"],steps:["1. /autoread on — all messages marked read","2. Senders see blue ticks immediately"]},
  autotype:{cat:"Automation",desc:"Show typing indicator before every bot reply.",usage:"/autotype on/off",examples:["/autotype on"],steps:["1. /autotype on to enable","2. Bot shows typing 0.6s before each reply"]},
};

const CAT_ICONS = {
  moderation:"🛡️",core:"⚙️",games:"🎮",finance:"💰",health:"🏥",education:"📚",
  entertainment:"🎭",tools:"🔧",settings:"⚙️",admin:"👑",nigerian:"🇳🇬",
  spiritual:"✝️",social:"👥",lifestyle:"🌟",business:"💼",productivity:"📋",
  community:"🏘️",automation:"🤖",stealth:"👻",misc:"📦",system:"🔧",
  downloader:"📥",welcome:"👋",ai:"🤖",reactions:"🎭",
};
const ic = cat => CAT_ICONS[String(cat || "misc").toLowerCase()] || "📦";

// ── Get all VISIBLE plugins (exclude devOnly + hidden) ─────────────────────────
function getVisiblePlugins() {
  return (global.PLUGINS || []).filter(p => !p.devOnly && !p.hidden);
}

// ── All unique categories ──────────────────────────────────────────────────────
function allCats() {
  const s = new Set();
  for (const p of getVisiblePlugins()) s.add(String(p.category || "misc").toLowerCase());
  return [...s].sort();
}

// ── Get all commands in a category ────────────────────────────────────────────
function catCommands(cat) {
  const r = [];
  for (const p of getVisiblePlugins()) {
    if (String(p.category || "misc").toLowerCase() !== cat.toLowerCase()) continue;
    const cmds = (p.command || []).filter(Boolean);
    if (cmds.length) r.push({ name: p.name || cmds[0], desc: p.desc || "", cmds });
  }
  return r;
}

// ── Dynamic search across ALL visible plugins ──────────────────────────────────
function dynSearch(q) {
  const lower = q.toLowerCase().trim();
  const words = lower.split(/\s+/).filter(w => w.length > 2);
  const res   = [];

  for (const p of getVisiblePlugins()) {
    const cmds = (p.command || []).filter(Boolean).map(c => c.toLowerCase());
    const cat  = String(p.category || "misc").toLowerCase();
    const name = String(p.name || "").toLowerCase();
    const desc = String(p.desc || "").toLowerCase();
    let score  = 0;

    if (cmds.some(c => c === lower))             score = 100;
    else if (cmds.some(c => c.startsWith(lower))) score = 85;
    else if (cmds.some(c => c.includes(lower)))  score = 70;
    else if (name.includes(lower))               score = 60;
    else if (lower.includes(name) && name.length > 3) score = 55;
    else if (desc.includes(lower))               score = 45;
    else if (cat.includes(lower) || lower.includes(cat)) score = 35;
    else if (words.some(w => desc.includes(w) || cmds.some(c => c.includes(w)) || name.includes(w))) score = 25;

    if (score > 0) {
      const cmd0 = cmds[0] || name;
      res.push({ score, cmd: cmd0, allCmds: cmds, name: p.name, cat: p.category || "misc", desc: p.desc || "" });
    }
  }
  return res.sort((a, b) => b.score - a.score);
}

// ── Format static doc ──────────────────────────────────────────────────────────
function fmtDoc(cmd, doc, pfx) {
  const lines = [
    `${ic(doc.cat)} *${pfx}${cmd}*  —  _${doc.cat}_`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ``, `📝 *What it does:*`, doc.desc, ``,
    `⌨️ *Usage:*`, `\`${doc.usage.replace(/^\//,pfx)}\``,
  ];
  if (doc.examples?.length) {
    lines.push(``, `💡 *Examples:*`);
    doc.examples.slice(0,5).forEach(e => lines.push(`  • \`${e.replace(/^\//,pfx)}\``));
  }
  if (doc.steps?.length) {
    lines.push(``, `📋 *Step-by-step:*`);
    doc.steps.forEach(s => lines.push(`  ${s}`));
  }
  if (doc.notes) lines.push(``, `⚠️ *Note:* ${doc.notes}`);
  return lines.join("\n");
}

// ── Format dynamic plugin ──────────────────────────────────────────────────────
function fmtPlugin(r, pfx) {
  const lines = [
    `${ic(r.cat)} *${pfx}${r.cmd}*  —  _${String(r.cat).toUpperCase()}_`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ``, `📝 *Description:*`, r.desc || "No description available.",
    ``, `⌨️ *Usage:*`, `\`${pfx}${r.cmd} [options]\``,
  ];
  if (r.allCmds.length > 1) {
    lines.push(``, `⚡ *All commands in this plugin:*`);
    r.allCmds.slice(0,8).forEach(c => lines.push(`  • \`${pfx}${c}\``));
    if (r.allCmds.length > 8) lines.push(`  _...+${r.allCmds.length-8} more_`);
  }
  lines.push(``, `📂 *Category:* ${ic(r.cat)} ${String(r.cat).toUpperCase()}`);
  return lines.join("\n");
}

// ─────────────────────────────────────────────────────────────────────────────
module.exports = {
  name: "CmdSearch", category: "core",
  desc: "Search any command — full guide, examples, step-by-step instructions",
  command: ["cmdsearch","searchcmd","cmdcategory"],

  run: async ({ args, command, reply, prefix }) => {
    const pfx   = prefix || "/";
    const raw   = args.join(" ").trim();
    const query = raw.toLowerCase().replace(/^[\/!.#]/, "");

    // ── /cmdcategory ──────────────────────────────────────────────────────────
    if (command === "cmdcategory" || query === "categories") {
      const cats    = allCats();
      const plugins = getVisiblePlugins();
      const total   = plugins.reduce((n, p) => n + (p.command||[]).filter(Boolean).length, 0);
      const lines   = [`📂 *All Command Categories*`,`━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,``,`${cats.length} categories  •  ${total} total commands`,``];
      cats.forEach(cat => {
        const n = plugins.filter(p => (p.category||"misc").toLowerCase() === cat)
                         .reduce((sum, p) => sum + (p.command||[]).filter(Boolean).length, 0);
        lines.push(`${ic(cat)} *${cat.toUpperCase()}* — ${n} commands`);
      });
      lines.push(``, `_${pfx}cmdsearch <category> to browse commands_`);
      return reply(lines.join("\n"));
    }

    // ── No query ──────────────────────────────────────────────────────────────
    if (!query) {
      const total = getVisiblePlugins().reduce((n, p) => n + (p.command||[]).filter(Boolean).length, 0);
      return reply([
        `🔍 *Command Search*`,`━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,``,
        `Search all *${total} commands* for full guides.`,``,
        `*By command:*`,
        `  ${pfx}cmdsearch ban`,`  ${pfx}cmdsearch mute`,`  ${pfx}cmdsearch antilink`,``,
        `*By keyword:*`,
        `  ${pfx}cmdsearch anti  →  all anti-features`,
        `  ${pfx}cmdsearch budget  →  finance tools`,
        `  ${pfx}cmdsearch quiz  →  quiz games`,``,
        `*By category:*`,
        `  ${pfx}cmdcategory  →  all categories`,
        `  ${pfx}cmdsearch moderation`,
        `  ${pfx}cmdsearch finance`,
        `  ${pfx}cmdsearch games`,``,
        `_${pfx}cmdsearch ban  gives full step-by-step guide_`,
      ].join("\n"));
    }

    // ── Category browse ───────────────────────────────────────────────────────
    if (allCats().includes(query)) {
      const items = catCommands(query);
      const total = items.reduce((n, x) => n + x.cmds.length, 0);
      const lines = [`${ic(query)} *${query.toUpperCase()} Commands*`,`━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,`${items.length} plugins  •  ${total} commands`,``];
      for (const item of items.slice(0, 25)) {
        lines.push(`📌 *${item.name}*`);
        if (item.desc) lines.push(`   ${item.desc.slice(0, 70)}${item.desc.length > 70 ? "..." : ""}`);
        item.cmds.slice(0, 4).forEach(c => lines.push(`   └ \`${pfx}${c}\``));
        if (item.cmds.length > 4) lines.push(`   └ _+${item.cmds.length-4} more_`);
        lines.push("");
      }
      if (items.length > 25) lines.push(`_Showing 25/${items.length}. Refine search._`);
      lines.push(`_${pfx}cmdsearch <command> for full step-by-step guide_`);
      return reply(lines.join("\n"));
    }

    // ── Static doc exact match ────────────────────────────────────────────────
    if (DOCS[query]) return reply(fmtDoc(query, DOCS[query], pfx));

    // ── Dynamic search ────────────────────────────────────────────────────────
    const results = dynSearch(query);

    if (!results.length) {
      return reply([
        `❌ No commands found for *"${raw}"*`,``,
        `Try:`,
        `  • ${pfx}cmdsearch ban  — exact command`,
        `  • ${pfx}cmdsearch moderation  — category`,
        `  • ${pfx}cmdcategory  — all categories`,
        `  • ${pfx}menu  — all commands`,
      ].join("\n"));
    }

    // ── Single strong match → full detail ─────────────────────────────────────
    if (results[0].score >= 70) {
      const best = results[0];
      let out = DOCS[best.cmd] ? fmtDoc(best.cmd, DOCS[best.cmd], pfx) : fmtPlugin(best, pfx);
      if (results.length > 1) {
        out += `\n\n_Related: ${results.slice(1,5).map(r => `${pfx}${r.cmd}`).join("  •  ")}_`;
      }
      return reply(out);
    }

    // ── Multiple results grouped by category ───────────────────────────────────
    const grouped = {};
    for (const r of results.slice(0, 30)) {
      const cat = String(r.cat).toLowerCase();
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(r);
    }
    const lines = [`🔍 *Results for "${raw}"* — ${results.length} found`,`━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,``];
    for (const [cat, items] of Object.entries(grouped)) {
      lines.push(`${ic(cat)} *${cat.toUpperCase()}*`);
      for (const item of items.slice(0, 5)) {
        const d = item.desc ? ` — ${item.desc.slice(0,55)}${item.desc.length>55?"...":""}` : "";
        lines.push(`  • \`${pfx}${item.cmd}\`${d}`);
      }
      if (items.length > 5) lines.push(`  _...+${items.length-5} more_`);
      lines.push("");
    }
    if (results.length > 30) lines.push(`_Showing top 30. Refine for better results._`);
    lines.push(`_${pfx}cmdsearch <exact command name> for full guide_`);
    return reply(lines.join("\n"));
  },
};
