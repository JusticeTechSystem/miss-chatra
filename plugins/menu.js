// plugins/menu.js — Miss Chatra
// 20-THEME ROTATING MENU SYSTEM (mirrors JusticeTech Autosave Bot)
"use strict";
const jts = require("../library/justicetechsystem");

const fs   = require("fs");
const os   = require("os");
const path = require("path");

const TOTAL_THEMES = 20;
const SESSION_TTL  = 3 * 60 * 1000;
const VERSION_FILE = path.join(__dirname, "..", "version.json");

// Read version dynamically from version.json — syncs with GitHub/update system
function getVersion() {
  try {
    const v = JSON.parse(fs.readFileSync(VERSION_FILE, "utf8"));
    return `v${v.version}${v.codename ? " JT" : " JT"}`;
  } catch { return "v1.0.1 JT"; }
}
// Cache for performance (refreshed every menu call so restart isn't needed)
function VERSION() { return getVersion(); }
const DB_DIR       = path.join(__dirname, "..", "database");
const STYLE_FILE   = path.join(DB_DIR, "menu_style.json");

// ── Session store (smart dashboards) ─────────────────────────────────────────
const _sessions = {};
const setSession   = (u, d)  => { _sessions[u] = { ...d, expiresAt: Date.now() + SESSION_TTL }; };
const getSession   = (u)     => { const s = _sessions[u]; if (!s || Date.now() > s.expiresAt) { delete _sessions[u]; return null; } return s; };
const clearSession = (u)     => { delete _sessions[u]; };

// ── Persist style ─────────────────────────────────────────────────────────────
function readJson(f, fb) { try { return JSON.parse(fs.readFileSync(f,"utf8")); } catch { return fb; } }
function writeJson(f, d) { try { if (!fs.existsSync(path.dirname(f))) fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, JSON.stringify(d,null,2)); } catch {} }
function getStyleState()      { return readJson(STYLE_FILE, { rotation: 0, pinned: {}, globalDefault: 1 }); }
function getPinned(u)         { return getStyleState().pinned?.[u] ?? null; }
function setPin(u, v)         { const s = getStyleState(); if (!s.pinned) s.pinned = {}; if (v === null) delete s.pinned[u]; else s.pinned[u] = v; writeJson(STYLE_FILE, s); }
function getGlobalDefault()   { return getStyleState().globalDefault ?? 1; }
function nextRotation()       { const s = getStyleState(); const i = ((s.rotation || 0) + 1) % TOTAL_THEMES; s.rotation = i; writeJson(STYLE_FILE, s); return i; }

// ── Helpers ───────────────────────────────────────────────────────────────────
function ucfirst(s) { return String(s).charAt(0).toUpperCase() + String(s).slice(1); }
function safeTrim(s) { return String(s||"").trim(); }
const ICON = { core:"⚙️", moderation:"🛡️", welcome:"👋", notes:"📝", badwords:"🚫", xp:"⭐", games:"🎮", reactions:"🎭", fun:"🎉", ai:"🤖", search:"🔍", settings:"⚙️", misc:"🗂️", autodelete:"🗑️", sports:"⚽", bible:"📖", tools:"🔧", downloader:"📥", info:"ℹ️", finance:"💰", business:"💼", spiritual:"✝️", admin:"🛡️", engagement:"🎯", productivity:"📚", integrations:"🔗", personalization:"🧠", media:"📸" };
function ci(cat) { return ICON[String(cat).toLowerCase()] || "📁"; }

// ── Build context from live plugin registry ───────────────────────────────────
function buildCtx({ sock, prefix, isOwner, isDev: dev }) {
  const pfx  = prefix || "/";
  const up   = process.uptime();
  const uptime = `${Math.floor(up/86400)}d ${Math.floor((up%86400)/3600)}h ${Math.floor((up%3600)/60)}m`;
  const upsh   = `${Math.floor(up/3600)}h ${Math.floor((up%3600)/60)}m`;
  const usedMB = process.memoryUsage().heapUsed / 1024 / 1024;
  const pct    = Math.min(100, (usedMB / (os.totalmem()/1024/1024)) * 100);
  const bar    = "█".repeat(Math.max(0,Math.floor(pct/10))) + "░".repeat(Math.max(0,10-Math.floor(pct/10)));
  // Read owner name from settings (set via /setownername), fallback to WA display name
  let name = "Owner";
  try {
    const fs2   = require("fs"), path2 = require("path");
    const sets2 = JSON.parse(fs2.readFileSync(path2.join(__dirname,"..","database","bot_settings.json"),"utf8"));
    name = sets2.owner_name || safeTrim(sock?.user?.name) || "Owner";
  } catch {
    name = safeTrim(sock?.user?.name) || "Owner";
  }
  // Read real bot mode from bot_settings.json
  let mode = "🌐 Public";
  try {
    const _mD = JSON.parse(require("fs").readFileSync(require("path").join(__dirname,"..","database","bot_settings.json"),"utf8"));
    const _mR = (_mD.bot_mode || "public").toLowerCase();
    if (_mR === "private") mode = "🔒 Private";
    else if (_mR === "inbox") mode = "📥 Inbox";
    else mode = "🌐 Public";
  } catch {}
  // Read bot name from settings (set via /setbotname)
  let botName = "Miss Chatra";
  try {
    const _fs3  = require("fs"), _pt3 = require("path");
    const _s3   = JSON.parse(_fs3.readFileSync(_pt3.join(__dirname,"..","database","bot_settings.json"),"utf8"));
    botName = _s3.bot_name || "Miss Chatra";
  } catch {}

  // Gather all plugins registered globally
  // dev is passed into buildCtx as isDev - use it directly
  const allPlugins = (Array.isArray(global.PLUGINS) ? global.PLUGINS : []).filter(p => dev || (!p.devOnly && !p.hidden));
  const cats = new Map();
  for (const pl of allPlugins) {
    if (pl.hidden) continue;
    // Hide dev-only commands from non-developers
    if (pl.devOnly && !dev) continue;
    // Hide owner-only commands from non-owners (dev can always see)
    if (pl.ownerOnly && !dev && !isOwner) continue;
    const cat  = String(pl.category || "misc").toLowerCase();
    const cmds = [].concat(pl.command || []).filter(c => c && !c.startsWith("_") && !c.includes("internal"));
    if (!cmds.length) continue;
    if (!cats.has(cat)) cats.set(cat, []);
    for (const c of cmds) { if (!cats.get(cat).includes(c)) cats.get(cat).push(c); }
  }
  // Sort: core first, then alphabetical
  const sorted = [...cats.entries()].sort((a,b) => {
    if (a[0]==="core" && b[0]!=="core") return -1;
    if (b[0]==="core" && a[0]!=="core") return  1;
    return a[0].localeCompare(b[0]);
  });
  const total_cmds   = sorted.reduce((n,[,c]) => n + c.length, 0);
  const total_plugins = (Array.isArray(global.PLUGINS) ? global.PLUGINS : []).length;
  // Measure message response speed (approximate via event loop lag)
  const _t0   = process.hrtime.bigint();
  const speedMs = Number(process.hrtime.bigint() - _t0) / 1e6;
  // CPU usage %
  let cpuPct = 0;
  try {
    const cpus = os.cpus();
    const total = cpus.reduce((s, c) => { const t = Object.values(c.times).reduce((a,b)=>a+b,0); return s + t; }, 0);
    const idle  = cpus.reduce((s, c) => s + c.times.idle, 0);
    cpuPct = Math.round((1 - idle/total)*100);
  } catch {}
  const mem = process.memoryUsage();
  const heapMB   = (mem.heapUsed/1024/1024).toFixed(1);
  const rssMB    = (mem.rss/1024/1024).toFixed(1);
  const usageLine = `Heap ${heapMB}MB / RSS ${rssMB}MB | CPU ${cpuPct}%`;
  const ver = VERSION();
  return { pfx, dev, uptime, upsh, pct, bar, name, mode, sorted, total_cmds, botName, total_plugins, speedMs, usageLine, ver };
}

// ═════════════════════════════════════════════════════════════════════════════
//  THEMES 1–10: Classic full menus
// ═════════════════════════════════════════════════════════════════════════════
const THEMES = [

{ id:1, name:"Classic JT", emoji:"📋", smart:false,
  render(c) {
    const {pfx,uptime,name,mode,pct,bar,sorted,total_cmds,total_plugins,speedMs,usageLine,ver} = c, B = [];
    B.push(`┏▣ ◈ *${c.botName}* ◈\n┃👤 *Owner*   : ${name}\n┃🔑 *Prefix*  : [ ${pfx} ]\n┃🌐 *Mode*    : ${mode}\n┃⏱️ *Uptime*  : ${uptime}\n┃⚡ *Speed*   : ${speedMs < 1 ? "<1" : speedMs.toFixed(1)}ms\n┃🔌 *Plugins* : ${total_plugins}\n┃🧠 *RAM*     : [${bar}] ${pct.toFixed(1)}%\n┃💾 *Usage*   : ${usageLine}\n┃📊 *Cmds*    : ${total_cmds}\n┃🤖 *Version* : ${ver}\n┗▣`);
    for (const [cat, cmds] of sorted) B.push(`┏▣ ◈ *${cat.toUpperCase()}* ◈\n${cmds.sort().map(c => `│➽ ${pfx}${c}`).join("\n")}\n┗▣`);
    B.push(`┏▣ ◈ *TIP* ◈\n│💡 Type ${pfx}menustyle to change theme\n┗▣`);
    return B.join("\n\n");
  }
},

{ id:2, name:"Neon Terminal", emoji:"⚡", smart:false,
  render(c) {
    const {pfx,uptime,name,mode,pct,bar,sorted} = c, B = [];
    B.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚡  *${c.botName}*  ⚡\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🖥  SYSTEM ONLINE ● ${ver}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n◤ RUNTIME ◢\n▸ Owner    » ${name}\n▸ Uptime   » ${uptime}\n▸ RAM      » [${bar}] ${pct.toFixed(1)}%\n▸ Mode     » ${mode.toUpperCase()}\n▸ Prefix   » [ ${pfx} ]\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    for (const [cat, cmds] of sorted) B.push(`▄▄▄▄▄▄ ◈ *${cat.toUpperCase()}* ◈ ▄▄▄▄▄▄\n${cmds.sort().map(c => `  » ${pfx}${c}`).join("\n")}\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`);
    B.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚡ *POWERED BY JUSTICETECH* ⚡\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    return B.join("\n\n");
  }
},

{ id:3, name:"Luxury Card", emoji:"🏆", smart:false,
  render(c) {
    const {pfx,upsh,name,mode,pct,bar,sorted} = c;
    const L = "─────────────────────────────", B = [];
    B.push(`╭${L}╮\n│     🏆  *Miss Chatra*  🏆\n│  ${L}\n│         ✦ Your Intelligent Assistant\n╰${L}╯`);
    B.push(`╭${L}╮\n│  👤  *${name}*\n│  ⏱️  Uptime: ${upsh}\n│  🔋  [${bar}] ${pct.toFixed(1)}%\n│  🌐  ${mode}  •  Prefix: [ ${pfx} ]\n│  🤖  ${ver}\n╰${L}╯`);
    for (const [cat, cmds] of sorted) B.push(`╭──── ${ci(cat)} *${cat.toUpperCase()}* ────╮\n${cmds.sort().map(c => `  ❯  ${pfx}${c}`).join("\n")}\n╰${"─".repeat(27)}╯`);
    B.push(`╭${L}╮\n│  💡 Type ${pfx}menustyle to change theme\n╰${L}╯`);
    return B.join("\n\n");
  }
},

{ id:4, name:"Military Ops", emoji:"🛡️", smart:false,
  render(c) {
    const {pfx,uptime,name,mode,pct,bar,sorted} = c;
    const TK = "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓", TN = "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", B = [];
    B.push(`${TK}\n      🛡️  *Miss Chatra*  🛡️\n      *${ver}*\n${TK}\n\n[OPERATIVE]   ${name.toUpperCase()}\n[MISSION]     GROUP MANAGEMENT\n► UPTIME   : ${uptime}\n► MEMORY   : [${bar}] ${pct.toFixed(1)}%\n► MODE     : ${mode.toUpperCase()}\n► TRIGGER  : ${pfx}\n\nSTATUS ● ONLINE ● ALL SYSTEMS GO\n${TK}`);
    for (const [cat, cmds] of sorted) { let i=1; B.push(`${TN}\n  ⬛ *${cat.toUpperCase()} COMMANDS*\n${TN}\n${cmds.sort().map(c => `  [${String(i++).padStart(2,"0")}]  ${pfx}${c}`).join("\n")}\n${TN}`); }
    B.push(`${TK}\n  Miss Chatra • BY JUSTICETECH\n${TK}`);
    return B.join("\n\n");
  }
},

{ id:5, name:"Galaxy Minimal", emoji:"🌌", smart:false,
  render(c) {
    const {pfx,upsh,name,mode,pct,bar,sorted} = c;
    const S = "✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦", B = [];
    B.push(`${S}\n\n       🌌 *Miss Chatra* 🌌\n     _${ver}_\n\n🪐  *${name}*\n🔋 [${bar}] ${pct.toFixed(1)}%\n⚡ ${upsh}  •  ${mode}\n🔑 Prefix: [ ${pfx} ]\n\n${S}`);
    for (const [cat, cmds] of sorted) B.push(`〔 ${ci(cat)} *${cat.toUpperCase()}* 〕\n${cmds.sort().map(c => `  ✦  ${pfx}${c}`).join("\n")}`);
    B.push(`${S}\n  💡 ${pfx}menustyle — change theme\n${S}`);
    return B.join("\n\n");
  }
},

{ id:6, name:"Fire & Ice", emoji:"🔥", smart:false,
  render(c) {
    const {pfx,uptime,name,mode,pct,bar,sorted} = c;
    const F = "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥", I = "❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️", M = "🔥━━━━━━━━━━━━━━━━━━━━━━━━━❄️", B = [];
    B.push(`${F}\n  *⚡ Miss Chatra ⚡*\n${I}\n${M}\n  Name    ➤  ${name}\n  🔋 RAM  ➤  [${bar}] ${pct.toFixed(1)}%\n  ⏱️ Up   ➤  ${uptime}\n  🌐 Mode ➤  ${mode}\n  🔑 Pfx  ➤  [ ${pfx} ]\n${M}\n${F}`);
    for (const [cat, cmds] of sorted) B.push(`🔥 ━━━ ${ci(cat)} *${cat.toUpperCase()}* ━━━ ❄️\n${cmds.sort().map(c => `  ➤  ${pfx}${c}`).join("\n")}\n${M}`);
    B.push(`${F}\n  By JusticeTech System, Nigeria\n${I}`);
    return B.join("\n\n");
  }
},

{ id:7, name:"Cyberpunk Grid", emoji:"🤖", smart:false,
  render(c) {
    const {pfx,uptime,name,pct,bar,sorted} = c;
    const T = "╔══════════════════════════════╗", M = "╠══════════════════════════════╣", Bo = "╚══════════════════════════════╝";
    const p = s => `║  ${String(s).padEnd(28)}║`, B = [];
    B.push(`${T}\n${p("🤖 Miss Chatra "+(c?.ver || getVersion()))}\n${M}\n${p("► USER   : "+name)}\n${p("► RAM    : ["+bar+"] "+pct.toFixed(0)+"%")}\n${p("► UPTIME : "+uptime)}\n${p("► PFX    : "+pfx)}\n${Bo}`);
    for (const [cat, cmds] of sorted) B.push(`┌── ⟦ *${cat.toUpperCase()}* ⟧ ${"─".repeat(Math.max(1,18-cat.length))}┐\n${cmds.sort().map(c => `  ▸ ${pfx}${c}`).join("\n")}\n└${"─".repeat(30)}┘`);
    return B.join("\n\n");
  }
},

{ id:8, name:"Royal Palace", emoji:"👑", smart:false,
  render(c) {
    const {pfx,upsh,name,pct,bar,sorted} = c;
    const CW = "♛ ♕ ♛ ♕ ♛ ♕ ♛ ♕ ♛ ♕ ♛ ♕ ♛", SC = "≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋", B = [];
    B.push(`${CW}\n      👑 *Miss Chatra* 👑\n${CW}\n  ⚜️  *${name}*\n  🏰  Uptime: ${upsh}\n  ⚗️ RAM: [${bar}] ${pct.toFixed(1)}%\n  Prefix: [ ${pfx} ]\n${SC}`);
    for (const [cat, cmds] of sorted) B.push(`${ci(cat)} ═══ *${cat.toUpperCase()}* ═══ ${ci(cat)}\n${cmds.sort().map(c => `    ♦ ${pfx}${c}`).join("\n")}\n${SC}`);
    B.push(`${CW}\n  By JusticeTech System, Nigeria\n${CW}`);
    return B.join("\n\n");
  }
},

{ id:9, name:"Dark Void", emoji:"🖤", smart:false,
  render(c) {
    const {pfx,uptime,name,pct,bar,sorted} = c;
    const V = "▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪", B = [];
    B.push(`${V}\n🖤  *Miss Chatra*\n${V}\n  👤 ${name}\n  ⏱️ ${uptime}  |  🧠 [${bar}] ${pct.toFixed(1)}%\n  🔑 ${pfx}  |  ${ver}\n${V}`);
    for (const [cat, cmds] of sorted) B.push(`${V}\n  ${ci(cat)} *${cat.toUpperCase()}*\n${V}\n${cmds.sort().map(c => `  ◆ ${pfx}${c}`).join("\n")}`);
    B.push(`${V}\n  By JusticeTech System\n${V}`);
    return B.join("\n\n");
  }
},

{ id:10, name:"Aurora Wave", emoji:"🌊", smart:false,
  render(c) {
    const {pfx,upsh,name,pct,bar,sorted} = c;
    const W = "〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰", W2 = "∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿", B = [];
    B.push(`🌊 *Miss Chatra* 🌊\n${W2}\n🐬  *${name}*\n🌀  Uptime: ${upsh}\n💧  RAM: [${bar}] ${pct.toFixed(1)}%\n🌊  Prefix: [ ${pfx} ]\n${W}`);
    for (const [cat, cmds] of sorted) B.push(`${ci(cat)} *${cat.toUpperCase()}* ${ci(cat)}\n${W}\n${cmds.sort().map(c => `  ~ ${pfx}${c}`).join("\n")}\n${W}`);
    B.push(`${W2}\n  By JusticeTech System\n${W2}`);
    return B.join("\n\n");
  }
},

// ═════════════════════════════════════════════════════════════════════════════
//  THEMES 11–20: Smart Interactive Dashboards (index + detail)
// ═════════════════════════════════════════════════════════════════════════════

{ id:11, name:"Classic Dashboard", emoji:"📂", smart:true,
  index(c) {
    const {name,uptime,pfx,sorted} = c;
    const list = sorted.map(([cat], i) => `📂 *${i+1}.* ${ci(cat)} ${ucfirst(cat)}`).join("\n");
    return `╔════════════════════╗\n   ◈ *${c.botName}* ◈\n╚════════════════════╝\n\n👤 ${name}  |  ⏱️ ${uptime}\n⚡ ${ver}\n\n━━━━━━━━━━━━━━━━━━\n\n${list}\n\n━━━━━━━━━━━━━━━━━━\n💬 *Reply with a number to explore*`;
  },
  detail(n, cat, cmds, c, total) {
    return `╔════════════════════╗\n   ${ci(cat)} *${cat.toUpperCase()}*\n╚════════════════════╝\n\n${cmds.sort().map(cmd => `  ➤ *${c.pfx}${cmd}*`).join("\n")}\n\n━━━━━━━━━━━━━━━━━━\n📂 Category ${n} of ${total}  •  Reply another number or *${c.pfx}menu*`;
  }
},

{ id:12, name:"Neon Dashboard", emoji:"⚡", smart:true,
  index(c) {
    const {name,pct,bar,upsh,pfx,sorted} = c;
    const list = sorted.map(([cat, cmds], i) => `  [${String(i+1).padStart(2,"0")}] ${ci(cat)}  ${cat.toUpperCase().padEnd(12)} (${cmds.length} cmds)`).join("\n");
    return `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚡  *${c.botName}*  ⚡\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n▸ ${name}\n▸ RAM: [${bar}] ${pct.toFixed(0)}%  •  UP: ${upsh}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n${list}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n» *Reply with a number to open*`;
  },
  detail(n, cat, cmds, c, total) {
    return `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n▄▄▄ ◈ *${cat.toUpperCase()}* ◈ ▄▄▄\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n${cmds.sort().map(cmd => `  » *${c.pfx}${cmd}*`).join("\n")}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n» [${n}/${total}]  Reply another number or *${c.pfx}menu*`;
  }
},

{ id:13, name:"Luxury Dashboard", emoji:"🏆", smart:true,
  index(c) {
    const {name,upsh,pfx,sorted} = c;
    const list = sorted.map(([cat], i) => `  ❯  *${i+1}.*  ${ci(cat)}  ${ucfirst(cat)}`).join("\n");
    return `╭─────────────────────────────╮\n│  🏆  *Miss Chatra*  🏆   │\n│  ─────────────────────────── │\n│  👤 ${name}\n│  ⏱️  ${upsh}\n╰─────────────────────────────╯\n\n${list}\n\n╭─────────────────────────────╮\n│  💬 *Reply with a number*    │\n╰─────────────────────────────╯`;
  },
  detail(n, cat, cmds, c, total) {
    return `╭─────────────────────────────╮\n│  ${ci(cat)}  *${cat.toUpperCase()}*  •  ${cmds.length} commands\n╰─────────────────────────────╯\n${cmds.sort().map(cmd => `  ❯  *${c.pfx}${cmd}*`).join("\n")}\n╭─────────────────────────────╮\n│  [${n}/${total}]  Reply another number or *${c.pfx}menu*\n╰─────────────────────────────╯`;
  }
},

{ id:14, name:"Military Dashboard", emoji:"🛡️", smart:true,
  index(c) {
    const {name,uptime,mode,pfx,sorted} = c;
    const list = sorted.map(([cat, cmds], i) => `  ► [${String(i+1).padStart(2,"0")}]  ${cat.toUpperCase().padEnd(12)}  [${cmds.length} cmds]`).join("\n");
    return `▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n  🛡️  *Miss Chatra*  🛡️\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n[ID]      ${name.toUpperCase()}\n[STATUS]  ONLINE\n[UPTIME]  ${uptime}\n[NET]     ${mode.toUpperCase()}\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n  ⬛ *SELECT COMMAND MODULE*\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n\n${list}\n\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n  ► *SEND MODULE NUMBER TO ACCESS*`;
  },
  detail(n, cat, cmds, c, total) {
    return `▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n  ⬛ *${cat.toUpperCase()} MODULE* [${n}/${total}]\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n${cmds.sort().map((cmd, i) => `  [${String(i+1).padStart(2,"0")}]  *${c.pfx}${cmd}*`).join("\n")}\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n  ► Reply another number or *${c.pfx}menu*`;
  }
},

{ id:15, name:"Galaxy Dashboard", emoji:"🌌", smart:true,
  index(c) {
    const {name,upsh,pfx,sorted} = c, S = "✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦";
    const list = sorted.map(([cat], i) => `  ✦ *${i+1}.*  🌠 ${ucfirst(cat)}`).join("\n");
    return `${S}\n\n     🌌 *Miss Chatra* 🌌\n   _${ver}_\n\n🪐 ${name}  •  ⚡ Uptime: ${upsh}\n\n${S}\n\n${list}\n\n${S}\n✦ *Reply with a number to explore* ✦`;
  },
  detail(n, cat, cmds, c, total) {
    const S = "✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦";
    return `${S}\n〔 🌠 *${cat.toUpperCase()}* 〕  [${n}/${total}]\n${S}\n${cmds.sort().map(cmd => `  ✦  *${c.pfx}${cmd}*`).join("\n")}\n${S}\n✦ Reply another number or *${c.pfx}menu* ✦`;
  }
},

{ id:16, name:"Fire Dashboard", emoji:"🔥", smart:true,
  index(c) {
    const {name,upsh,mode,pfx,sorted} = c;
    const F = "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥", M = "🔥━━━━━━━━━━━━━━━━━━━━━━━━━❄️";
    const list = sorted.map(([cat], i) => `  ➤ *${i+1}.*  ${ci(cat)}  ${ucfirst(cat)}`).join("\n");
    return `${F}\n  *⚡ Miss Chatra ⚡*\n${M}\n  👤 ${name}  |  ⏱️ ${upsh}  |  🌐 ${mode}\n${M}\n\n${list}\n\n${M}\n  ➤ *Reply with a number to open*\n${F}`;
  },
  detail(n, cat, cmds, c, total) {
    const M = "🔥━━━━━━━━━━━━━━━━━━━━━━━━━❄️";
    return `${M}\n🔥 *${cat.toUpperCase()}* [${n}/${total}] ❄️\n${M}\n${cmds.sort().map(cmd => `  ➤  *${c.pfx}${cmd}*`).join("\n")}\n${M}\n➤ Reply another number or *${c.pfx}menu*`;
  }
},

{ id:17, name:"Royal Dashboard", emoji:"👑", smart:true,
  index(c) {
    const {name,upsh,pfx,sorted} = c;
    const CW = "♛ ♕ ♛ ♕ ♛ ♕ ♛ ♕ ♛ ♕ ♛ ♕ ♛", SC = "≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋";
    const list = sorted.map(([cat], i) => `  ♦ *${i+1}.*  ${ci(cat)}  ${ucfirst(cat)}`).join("\n");
    return `${CW}\n      👑 *Miss Chatra* 👑\n${CW}\n  ⚜️  *${name}*\n  🏰  Uptime: ${upsh}\n${SC}\n\n${list}\n\n${SC}\n  ♦ *Reply with a number to enter*\n${CW}`;
  },
  detail(n, cat, cmds, c, total) {
    const SC = "≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋";
    return `${SC}\n  ⚜️  *${cat.toUpperCase()} CHAMBER* [${n}/${total}]\n${SC}\n${cmds.sort().map(cmd => `    ♦ *${c.pfx}${cmd}*`).join("\n")}\n${SC}\n  ♦ Reply another number or *${c.pfx}menu*`;
  }
},

{ id:18, name:"Dark Dashboard", emoji:"🖤", smart:true,
  index(c) {
    const {name,uptime,pfx,sorted} = c, V = "▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪";
    const list = sorted.map(([cat], i) => `  ◆ *${i+1}.*  ${ci(cat)}  ${ucfirst(cat)}`).join("\n");
    return `${V}\n🖤  *Miss Chatra*\n${V}\n  👤 ${name}  |  ⏱️ ${uptime}\n${V}\n\n${list}\n\n${V}\n  ◆ *Reply with a number*\n${V}`;
  },
  detail(n, cat, cmds, c, total) {
    const V = "▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪";
    return `${V}\n  ◆ *${cat.toUpperCase()}* [${n}/${total}]\n${V}\n${cmds.sort().map(cmd => `  ◆ *${c.pfx}${cmd}*`).join("\n")}\n${V}\n  ◆ Reply another number or *${c.pfx}menu*`;
  }
},

{ id:19, name:"Wave Dashboard", emoji:"🌊", smart:true,
  index(c) {
    const {name,upsh,pfx,sorted} = c, W = "〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰";
    const list = sorted.map(([cat], i) => `  ~ *${i+1}.*  ${ci(cat)}  ${ucfirst(cat)}`).join("\n");
    return `🌊 *Miss Chatra* 🌊\n${W}\n🐬  *${name}*\n🌀  Uptime: ${upsh}\n${W}\n\n${list}\n\n${W}\n~ *Reply with a number*\n${W}`;
  },
  detail(n, cat, cmds, c, total) {
    const W = "〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰";
    return `${W}\n${ci(cat)} *${cat.toUpperCase()}* [${n}/${total}]\n${W}\n${cmds.sort().map(cmd => `  ~ *${c.pfx}${cmd}*`).join("\n")}\n${W}\n~ Reply another number or *${c.pfx}menu*`;
  }
},

{ id:20, name:"Cyber Dashboard", emoji:"🤖", smart:true,
  index(c) {
    const {name,uptime,pfx,sorted} = c;
    const T = "╔══════════════════════════════╗", Bo = "╚══════════════════════════════╝", p = s => `║  ${String(s).padEnd(28)}║`;
    const list = sorted.map(([cat, cmds], i) => `║  ▸ ${String(i+1).padStart(2)} │ ${cat.padEnd(14)} │ ${String(cmds.length).padStart(2)} cmds ║`).join("\n");
    return `${T}\n${p("🤖 Miss Chatra "+(c?.ver || getVersion()))}\n${p("► USER   : "+name.slice(0,18))}\n${p("► UPTIME : "+uptime.slice(0,18))}\n╠══════════════════════════════╣\n${list}\n${Bo}\n  ▸ *Reply a number to open*`;
  },
  detail(n, cat, cmds, c, total) {
    const T = "╔══════════════════════════════╗", Bo = "╚══════════════════════════════╝";
    return `${T}\n║  ▸ *${cat.toUpperCase()}* [${n}/${total}]\n${Bo}\n${cmds.sort().map(cmd => `  ▸ *${c.pfx}${cmd}*`).join("\n")}\n  ▸ Reply another number or *${c.pfx}menu*`;
  }
},

];

// ═════════════════════════════════════════════════════════════════════════════
//  Plugin export
// ═════════════════════════════════════════════════════════════════════════════
module.exports = {
  name: "Menu",
  command: ["menu","menustyle","setdefaultmenu","start","ping","runtime","uptime","speed"],
  category: "core",
  description: "Miss Chatra menu system with 20 rotating themes",

  // Handle plain number replies for smart dashboards
  handleNumberReply(sock, m, chatId, userId, body) {
    const num = parseInt(body.trim());
    if (isNaN(num)) return false;
    const snum = String(userId).replace(/\D/g,"");
    const sess = getSession(snum);
    if (!sess) return false;
    const { theme, ctx, sorted } = sess;
    if (!theme.smart) return false;
    const idx = num - 1;
    if (idx < 0 || idx >= sorted.length) {
      sock.sendMessage(chatId, { text: `❌ Choose 1–${sorted.length}` }, { quoted: m });
      return true;
    }
    const [cat, cmds] = sorted[idx];
    const text = theme.detail(num, cat, cmds, ctx, sorted.length);
    sock.sendMessage(chatId, { text }, { quoted: m });
    sess.expiresAt = Date.now() + SESSION_TTL;
    return true;
  },

  async run({ sock, m, args, command, chatId, userId, reply, prefix, isOwner, isDev }) {
    const pfx  = prefix || "/";
    // Strip @lid artifacts from userId for session key
    const snum = String(userId || "").split("@")[0].split(":")[0].replace(/\D/g,"") || "0";
    const arg  = args.join(" ").trim().toLowerCase();

    // ── /ping ──────────────────────────────────────────────────────────────
    if (command === "ping" || command === "speed") {
      // Measure actual round-trip: time from message received to reply sent
      const _pingStart  = m?.messageTimestamp
        ? Date.now() - (Number(m.messageTimestamp) * 1000)
        : 0;
      const _t0 = Date.now();
      // Send initial message then measure delivery time
      const _pSent = await sock.sendMessage(chatId, {
        text: "🏓 Measuring response speed..."
      }, { quoted: m });
      const _pingMs   = Date.now() - _t0;
      const _latencyMs = _pingStart + _pingMs;
      const _pingLabel = _pingMs < 500 ? "⚡ FAST" : _pingMs < 1500 ? "🟡 MODERATE" : "🔴 SLOW";
      const up = process.uptime();
      const upStr = `${Math.floor(up/86400)}d ${Math.floor((up%86400)/3600)}h ${Math.floor((up%3600)/60)}m ${Math.floor(up%60)}s`;
      const mem  = process.memoryUsage();
      const memMB = (mem.heapUsed / 1024 / 1024).toFixed(1);
      const _pingReply = [
        `🏓 *Pong!*`,
        ``,
        `⚡ *Response Speed*`,
        `• Round-trip: *${_pingMs}ms* ${_pingLabel}`,
        `• Message lag: *${_pingStart > 0 ? _pingStart + "ms" : "< 1ms"}*`,
        ``,
        `🖥️ *System*`,
        `• Uptime: *${upStr}*`,
        `• Memory: *${memMB} MB*`,
        `• Node: *${process.version}*`,
        ``,
        `🤖 ${ver}`,
      ].join("\n");
      try {
        await sock.sendMessage(chatId, {
          text: _pingReply, edit: _pSent?.key
        });
      } catch {
        await sock.sendMessage(chatId, { text: _pingReply }, { quoted: m });
      }
      return;
    }

    if (command === "runtime" || command === "uptime") {
      const up   = process.uptime();
      const d    = Math.floor(up / 86400);
      const h    = Math.floor((up % 86400) / 3600);
      const min  = Math.floor((up % 3600) / 60);
      const s    = Math.floor(up % 60);
      const mem  = process.memoryUsage();
      const heapMB  = (mem.heapUsed  / 1024 / 1024).toFixed(1);
      const totalMB = (mem.heapTotal / 1024 / 1024).toFixed(1);
      const rssMB   = (mem.rss       / 1024 / 1024).toFixed(1);
      const cpuU  = process.cpuUsage();
      const startedAt = new Date(Date.now() - up * 1000);
      const startedStr = startedAt.toLocaleString("en-GB", {
        weekday: "long", year: "numeric", month: "long",
        day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
      });
      return reply([
        `⏱️ *Bot Runtime*`,
        ``,
        `🕐 *Uptime*`,
        `• Days:    *${d}*`,
        `• Hours:   *${h}*`,
        `• Minutes: *${min}*`,
        `• Seconds: *${s}*`,
        `• Total:   *${d}d ${h}h ${min}m ${s}s*`,
        ``,
        `📅 *Started At*`,
        `• ${startedStr}`,
        ``,
        `💾 *Memory Usage*`,
        `• Heap Used:  *${heapMB} MB*`,
        `• Heap Total: *${totalMB} MB*`,
        `• RSS:        *${rssMB} MB*`,
        ``,
        `🤖 ${ver} | Node ${process.version}`,
      ].join("\n"));
    }

    // ── /start ─────────────────────────────────────────────────────────────
    if (command === "start") {
      const cfg = require("../settings/config");
      return reply(`👋 *Welcome to Miss Chatra!*\n\n🤖 I'm Miss Chatra, your intelligent WhatsApp group assistant.\n\n🔑 *Prefix:* ${pfx}\n📋 *Commands:* ${pfx}menu\n💬 *Chat:* Just say hi!\n\n_By JusticeTech System, Nigeria_`);
    }

    // ── /setdefaultmenu ────────────────────────────────────────────────────
    if (command === "setdefaultmenu") {
      if (!isOwner && !isDev) return reply("🚫 Owner only.");
      const n = parseInt(arg);
      if (isNaN(n) || n < 1 || n > TOTAL_THEMES) return reply(`❌ Choose 1–${TOTAL_THEMES}.`);
      const s = getStyleState(); s.globalDefault = n; writeJson(STYLE_FILE, s);
      const t = THEMES[n-1];
      return reply(`✅ Global default set to *Theme ${n}: ${t.name}* ${t.emoji}`);
    }

    // ── /menustyle ─────────────────────────────────────────────────────────
    if (command === "menustyle") {
      clearSession(snum);
      if (!arg) {
        const pin     = getPinned(snum);
        const classic = THEMES.filter(t => !t.smart);
        const smart   = THEMES.filter(t =>  t.smart);
        const mkRow   = t => { const active = (pin === t.id) ? "  ◀" : ""; return `  ${t.emoji}  ${String(t.id).padStart(2," ")}.  ${t.name}${active}`; };
        const status  = pin !== null ? `📌 Pinned → *${pin}. ${THEMES[pin-1]?.name}*` : `🔄 Mode → *Auto-rotate all ${TOTAL_THEMES} themes*`;
        return reply([
          `┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`,
          `       🎨  *MENU STYLE SELECTOR*`,
          `┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`,
          ``, `▸ *CLASSIC FULL MENUS*  [ 1 – 10 ]`,
          `  Shows all commands at once`,
          `─────────────────────────────────────`,
          ...classic.map(mkRow), ``,
          `▸ *SMART DASHBOARDS*  [ 11 – 20 ]`,
          `  Category list first → reply number`,
          `─────────────────────────────────────`,
          ...smart.map(mkRow), ``,
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
          `  ${status}`,
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
          `  Pin: ${pfx}menustyle 11`,
          `  Auto: ${pfx}menustyle auto`,
        ].join("\n"));
      }
      if (arg === "auto" || arg === "0") {
        setPin(snum, null);
        return reply(`🔄 Auto-rotate enabled. Your menu now cycles all *${TOTAL_THEMES} themes* automatically.`);
      }
      const n = parseInt(arg);
      if (isNaN(n) || n < 1 || n > TOTAL_THEMES) return reply(`❌ Choose 1–${TOTAL_THEMES} or "auto".`);
      setPin(snum, n);
      const t = THEMES[n-1];
      return reply(`📌 *Theme ${n}: ${t.name}* ${t.emoji} pinned!\n${t.smart ? `📊 Smart — type ${pfx}menu, then reply a number.` : `📋 Classic — all commands shown at once.`}`);
    }

    // ── /menu / /help / /cmds ──────────────────────────────────────────────
    clearSession(snum);
    const pin       = getPinned(snum);
    const globalDef = getGlobalDefault();
    const themeIdx  = pin !== null
      ? Math.max(0, Math.min(TOTAL_THEMES-1, pin-1))
      : Math.max(0, Math.min(TOTAL_THEMES-1, (arg ? 0 : globalDef-1)));

    const theme = THEMES[themeIdx];
    const ctx   = buildCtx({ sock, prefix: pfx, isOwner, isDev });

    const image = (() => {
    try {
      const fs2 = require("fs"), pt = require("path");
      // Check custom menu image first
      const setsFile = pt.join(__dirname,"..","database","bot_settings.json");
      if (fs2.existsSync(setsFile)) {
        const sets = JSON.parse(fs2.readFileSync(setsFile,"utf8"));
        const custom = sets.menu_image_path || pt.join(__dirname,"..","thumbnail","menu_custom.jpg");
        if (fs2.existsSync(custom)) return fs2.readFileSync(custom);
      }
      // Fall back to default
      const png = pt.join(__dirname,"..","thumbnail","image.png");
      const jpg = pt.join(__dirname,"..","thumbnail","image.jpg");
      if (fs2.existsSync(png)) return fs2.readFileSync(png);
      if (fs2.existsSync(jpg)) return fs2.readFileSync(jpg);
      return null;
    } catch { return null; }
  })();

    if (theme.smart) {
      const text = theme.index(ctx) + `\n\n🔄 Theme ${theme.id}/${TOTAL_THEMES} • *${pfx}menustyle* to change`;
      setSession(snum, { theme, ctx, sorted: ctx.sorted });
      if (image) return sock.sendMessage(chatId, { image, caption: text }, { quoted: m });
      return sock.sendMessage(chatId, { text }, { quoted: m });
    }

    const text = theme.render(ctx) + `\n\n🔄 Theme ${theme.id}/${TOTAL_THEMES} • *${pfx}menustyle* to change`;
    if (image) return sock.sendMessage(chatId, { image, caption: text }, { quoted: m });
    return sock.sendMessage(chatId, { text }, { quoted: m });
  }
};
