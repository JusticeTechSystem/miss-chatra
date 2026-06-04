// plugins/pluginmanager.js — Miss Chatra Plugin Marketplace
// The Play Store for your bot. Install, remove, enable, disable plugins instantly.
// No restart needed. No zip files. No code editing.
"use strict";
const jts = require("../library/justicetechsystem");

const fs    = require("fs");
const path  = require("path");
const axios = require("axios");

const ROOT        = path.join(__dirname, "..");
const MKT_DIR     = path.join(ROOT, "marketplace");
const PLG_DIR     = path.join(MKT_DIR, "plugins");       // installed marketplace plugins
const REGISTRY    = path.join(MKT_DIR, "registry.json"); // local catalogue
const INSTALLED   = path.join(MKT_DIR, "installed.json");// what's installed
const DISABLED    = path.join(MKT_DIR, "disabled.json"); // what's disabled

// ── Ensure directories exist ──────────────────────────────────────────────────
for (const d of [MKT_DIR, PLG_DIR]) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

// ── JSON helpers ──────────────────────────────────────────────────────────────
function rj(f, fb) { try { return JSON.parse(fs.readFileSync(f, "utf8")); } catch { return fb; } }
function wj(f, d)  { try { fs.writeFileSync(f, JSON.stringify(d, null, 2)); } catch {} }

// ── Registry: the "Play Store catalogue" ─────────────────────────────────────
function getRegistry() {
  return rj(REGISTRY, { plugins: [] });
}

function findInRegistry(id) {
  const reg = getRegistry();
  return reg.plugins.find(p => p.id === id) || null;
}

// ── Installed list ────────────────────────────────────────────────────────────
function getInstalled() { return rj(INSTALLED, {}); }
function isInstalled(id) { return !!getInstalled()[id]; }
function markInstalled(id, meta) {
  const all = getInstalled();
  all[id] = { ...meta, installedAt: new Date().toISOString() };
  wj(INSTALLED, all);
}
function markRemoved(id) {
  const all = getInstalled();
  delete all[id];
  wj(INSTALLED, all);
}

// ── Disabled list ─────────────────────────────────────────────────────────────
function getDisabled() { return rj(DISABLED, []); }
function isDisabled(id) { return getDisabled().includes(id); }
function setDisabled(id, disabled) {
  let list = getDisabled();
  if (disabled) { if (!list.includes(id)) list.push(id); }
  else { list = list.filter(x => x !== id); }
  wj(DISABLED, list);
}

// ── Plugin file path ──────────────────────────────────────────────────────────
function pluginPath(id) { return path.join(PLG_DIR, `${id}.js`); }

// ── Safety scanner — checks plugin code before loading ───────────────────────
const FORBIDDEN = [
  /\beval\s*\(/,
  /\bexec\s*\(/,
  /execSync\s*\(/,
  /spawnSync\s*\(/,
  /child_process/,
  /fs\.unlink\s*\(/,
  /fs\.unlinkSync\s*\(/,
  /fs\.rm\s*\(/,
  /fs\.rmdir\s*\(/,
  /process\.exit\s*\(/,
  /require\s*\(\s*['"`]child_process/,
  /\.env\b/,
  /rm\s+-rf/,
];

function safetyCheck(code) {
  for (const pattern of FORBIDDEN) {
    if (pattern.test(code)) {
      return { safe: false, reason: `Forbidden pattern detected: ${pattern.toString()}` };
    }
  }
  return { safe: true };
}

// ── Syntax check using Node ───────────────────────────────────────────────────
function syntaxCheck(code, id) {
  const tmpFile = path.join(MKT_DIR, "plugins", `__tmp_${id}.js`);
  try {
    fs.writeFileSync(tmpFile, code);
    const { execSync } = require("child_process");
    execSync(`node --check "${tmpFile}"`, { stdio: "pipe" });
    fs.unlinkSync(tmpFile);
    return { ok: true };
  } catch (e) {
    try { fs.unlinkSync(tmpFile); } catch {}
    return { ok: false, error: e.stderr?.toString?.()?.slice(0, 200) || e.message };
  }
}

// ── Load marketplace plugins into the bot ────────────────────────────────────
// Called on startup and after install/enable
function loadMarketplacePlugins(commandIndex, plugins) {
  const installed = getInstalled();
  const disabled  = getDisabled();
  let loaded = 0;

  for (const [id, meta] of Object.entries(installed)) {
    if (disabled.includes(id)) continue;
    const fp = pluginPath(id);
    if (!fs.existsSync(fp)) continue;
    try {
      delete require.cache[require.resolve(fp)];
      const plugin = require(fp);
      if (!plugin?.run) continue;
      plugins.push(plugin);
      const cmds = Array.isArray(plugin.command) ? plugin.command : [];
      for (const cmd of cmds) commandIndex[cmd.toLowerCase()] = plugin;
      loaded++;
    } catch (e) {
      console.error(`[MARKETPLACE] Failed to load ${id}:`, e.message);
    }
  }
  return loaded;
}

// ── Generate plugin code for BUILTIN plugins (stored in registry, code here) ─
// These plugins ship with the bot but are "opt-in" via the marketplace
function getBuiltinCode(id) {
  const builtins = {

    "crypto-tracker": `
// @marketplace crypto-tracker v1.0.0 by JusticeTech
"use strict";
const jts = require("../library/justicetechsystem");
const axios = require("axios");
module.exports = {
  name: "CryptoTracker", category: "finance",
  desc: "Real-time crypto prices, BTC, ETH, alerts",
  command: ["crypto","btc","eth","pricealert"],
  run: async ({ args, command, reply, prefix }) => {
    const pfx = prefix || "/";
    const coin = args[0]?.toLowerCase() || (command === "btc" ? "bitcoin" : command === "eth" ? "ethereum" : "bitcoin");
    const symbolMap = { btc:"bitcoin", eth:"ethereum", bnb:"binancecoin", sol:"solana", usdt:"tether", xrp:"ripple", ada:"cardano", doge:"dogecoin" };
    const id2 = symbolMap[coin] || coin;
    if (command === "pricealert") return reply("🔔 Price alerts coming in v1.1.0!\\nFor now use /crypto <coin> to check live prices.");
    try {
      await reply("📡 Fetching price...");
      const r = await axios.get("https://api.coingecko.com/api/v3/simple/price", {
        params: { ids: id2, vs_currencies: "usd,ngn", include_24hr_change: true },
        timeout: 10000,
      });
      const data = r.data[id2];
      if (!data) return reply("❌ Coin not found. Try: /crypto bitcoin");
      const change = data.usd_24h_change?.toFixed(2);
      const arrow  = change >= 0 ? "📈" : "📉";
      return reply([
        "💰 *" + id2.toUpperCase() + " Price*",
        "",
        "🇺🇸 USD: $" + data.usd?.toLocaleString(),
        "🇳🇬 NGN: ₦" + data.ngn?.toLocaleString(),
        arrow + " 24h Change: " + (change >= 0 ? "+" : "") + change + "%",
        "",
        "_Data: CoinGecko_",
      ].join("\\n"));
    } catch(e) { return reply("❌ Could not fetch price: " + e.message); }
  }
};`,

    "forex-rates": `
// @marketplace forex-rates v1.0.0 by JusticeTech
"use strict";
const jts = require("../library/justicetechsystem");
const axios = require("axios");
module.exports = {
  name: "ForexRates", category: "finance",
  desc: "Live exchange rates and currency conversion",
  command: ["forex","convert","usdngn","rates"],
  run: async ({ args, command, reply }) => {
    if (command === "convert") {
      const amount = parseFloat(args[0]) || 1;
      const from   = (args[1] || "USD").toUpperCase();
      const to     = (args[2] || "NGN").toUpperCase();
      try {
        const r = await axios.get("https://api.exchangerate-api.com/v4/latest/" + from, { timeout: 10000 });
        const rate   = r.data?.rates?.[to];
        if (!rate) return reply("❌ Currency not found.");
        const result = (amount * rate).toFixed(2);
        return reply("💱 *Currency Conversion*\\n\\n" + amount + " " + from + " = *" + result + " " + to + "*\\n\\nRate: 1 " + from + " = " + rate.toFixed(4) + " " + to);
      } catch { return reply("❌ Could not fetch rates."); }
    }
    // Default: show main rates vs NGN
    try {
      const r = await axios.get("https://api.exchangerate-api.com/v4/latest/NGN", { timeout: 10000 });
      const rates = r.data?.rates || {};
      const lines = ["💱 *Live Exchange Rates (vs NGN)*\\n"];
      const coins = ["USD","GBP","EUR","CAD","AUD","CNY","SAR","AED"];
      for (const c of coins) {
        if (rates[c]) lines.push("  " + c + ": ₦" + (1/rates[c]).toFixed(2));
      }
      lines.push("\\n_Use /convert 100 USD NGN to convert_");
      return reply(lines.join("\\n"));
    } catch { return reply("❌ Could not fetch rates."); }
  }
};`,

    "contribution-tracker": `
// @marketplace contribution-tracker v1.0.0 by JusticeTech
"use strict";
const jts = require("../library/justicetechsystem");
const fs   = require("fs");
const path = require("path");
const DB   = path.join(__dirname, "..", "..", "database", "contributions.json");
function load() { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } }
function save(d) { try { fs.writeFileSync(DB,JSON.stringify(d,null,2)); } catch {} }
module.exports = {
  name: "ContributionTracker", category: "finance",
  desc: "Track group contributions, dues, and payments",
  command: ["pay","contributions","dues","unpaid","contribsummary","settarget"],
  run: async ({ args, command, chatId, userId, reply, prefix, isAdmin, isOwner, isDev, m }) => {
    const pfx    = prefix || "/";
    const chat   = chatId;
    const all    = load();
    if (!all[chat]) all[chat] = { target: 0, contributions: {}, currency: "₦" };
    const gs     = all[chat];
    const name   = m?.pushName || userId?.split("@")[0] || "Member";
    const curr   = gs.currency || "₦";

    if (command === "settarget") {
      if (!isAdmin && !isOwner && !isDev) return reply("🔒 Admin only.");
      const amount = parseFloat(args[0]);
      const label  = args.slice(1).join(" ") || "Group Target";
      if (isNaN(amount)) return reply("Usage: " + pfx + "settarget 50000 Monthly Dues");
      gs.target = amount; gs.label = label; save(all);
      return reply("✅ Target set: *" + curr + amount.toLocaleString() + "* — " + label);
    }

    if (command === "pay") {
      const amount = parseFloat(args[0]);
      const note   = args.slice(1).join(" ") || "Contribution";
      if (isNaN(amount) || amount <= 0) return reply("Usage: " + pfx + "pay 5000 March dues");
      if (!gs.contributions[userId]) gs.contributions[userId] = { name, total: 0, history: [] };
      gs.contributions[userId].total += amount;
      gs.contributions[userId].name   = name;
      gs.contributions[userId].history.push({ amount, note, date: new Date().toLocaleDateString() });
      save(all);
      const totalPaid = Object.values(gs.contributions).reduce((s,c)=>s+c.total,0);
      const pct = gs.target ? Math.min(100,(totalPaid/gs.target*100)).toFixed(0) : null;
      const bar = pct ? "█".repeat(Math.floor(pct/10)) + "░".repeat(10-Math.floor(pct/10)) : null;
      return reply([
        "✅ *Payment Recorded*",
        "",
        "👤 " + name + ": *" + curr + amount.toLocaleString() + "*",
        "📝 Note: " + note,
        "💰 Your total: *" + curr + gs.contributions[userId].total.toLocaleString() + "*",
        "",
        gs.target ? "📊 Group Progress: [" + bar + "] " + pct + "%" : "",
        gs.target ? "🎯 Target: " + curr + gs.target.toLocaleString() + " | Collected: " + curr + totalPaid.toLocaleString() : "",
      ].filter(Boolean).join("\\n"));
    }

    if (command === "contributions" || command === "dues") {
      const contribs = Object.entries(gs.contributions);
      if (!contribs.length) return reply("No contributions recorded yet.\\nUse " + pfx + "pay <amount> <note>");
      const totalPaid = contribs.reduce((s,[,c])=>s+c.total,0);
      const lines = ["💰 *Contributions — " + (gs.label||"Group") + "*\\n"];
      contribs.sort((a,b)=>b[1].total-a[1].total).forEach(([,c],i)=>{
        lines.push((i+1) + ". *" + c.name + "* — " + curr + c.total.toLocaleString());
      });
      lines.push("\\n📊 Total Collected: *" + curr + totalPaid.toLocaleString() + "*");
      if (gs.target) lines.push("🎯 Target: " + curr + gs.target.toLocaleString() + " | Remaining: " + curr + Math.max(0,gs.target-totalPaid).toLocaleString());
      return reply(lines.join("\\n"));
    }

    if (command === "unpaid") {
      if (!isAdmin && !isOwner && !isDev) return reply("🔒 Admin only.");
      const paid = new Set(Object.keys(gs.contributions).filter(k=>gs.contributions[k].total>0));
      return reply("⚠️ *Members who haven\\'t contributed:*\\n\\nUse /contributions to see who paid.\\n\\n_Tag members with /tagall to remind everyone._");
    }

    if (command === "contribsummary") {
      const contribs = Object.values(gs.contributions);
      const total    = contribs.reduce((s,c)=>s+c.total,0);
      const count    = contribs.filter(c=>c.total>0).length;
      return reply([
        "📊 *Contribution Summary*",
        "",
        "👥 Contributors: " + count,
        "💰 Total Collected: *" + curr + total.toLocaleString() + "*",
        gs.target ? "🎯 Target: " + curr + gs.target.toLocaleString() : "",
        gs.target ? "📈 Progress: " + Math.min(100,(total/gs.target*100)).toFixed(1) + "%" : "",
        "",
        "_" + pfx + "contributions — full breakdown_",
      ].filter(Boolean).join("\\n"));
    }
  }
};`,

    "knowledge-base": `
// @marketplace knowledge-base v1.0.0 by JusticeTech
"use strict";
const jts = require("../library/justicetechsystem");
const fs   = require("fs");
const path = require("path");
const DB   = path.join(__dirname, "..", "..", "database", "knowledge_base.json");
function load() { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } }
function save(d) { try { fs.writeFileSync(DB,JSON.stringify(d,null,2)); } catch {} }
module.exports = {
  name: "KnowledgeBase", category: "productivity",
  desc: "Save, search, and retrieve important group information",
  command: ["kb","kbsave","kbfind","kblist","kbdelete"],
  run: async ({ args, command, chatId, reply, prefix, isAdmin, isOwner, isDev, m }) => {
    const pfx  = prefix || "/";
    const chat = chatId;
    const all  = load();
    if (!all[chat]) all[chat] = {};
    const db   = all[chat];

    if (command === "kbsave" || (command === "kb" && args[0] === "save")) {
      if (!isAdmin && !isOwner && !isDev) return reply("🔒 Admin only.");
      const rest  = command === "kb" ? args.slice(1) : args;
      const title = rest.join(" ").trim();
      const q     = m?.quoted;
      const body  = q?.text || q?.caption || "";
      if (!title) return reply("Usage: " + pfx + "kbsave <title>\\nReply to any message to save it.");
      if (!body)  return reply("Reply to a message first, then type " + pfx + "kbsave <title>");
      const key   = title.toLowerCase().replace(/\\s+/g,"-");
      db[key] = { title, body: body.slice(0,1000), savedAt: new Date().toLocaleDateString(), savedBy: m?.pushName||"Admin" };
      save(all);
      return reply("✅ Saved to Knowledge Base:\\n*" + title + "*\\n\\nAccess with: " + pfx + "kbfind " + title);
    }

    if (command === "kbfind" || (command === "kb" && args[0] === "find")) {
      const query = (command === "kb" ? args.slice(1) : args).join(" ").toLowerCase();
      if (!query) return reply("Usage: " + pfx + "kbfind <keyword>");
      const results = Object.entries(db).filter(([k,v]) =>
        k.includes(query) || v.title.toLowerCase().includes(query) || v.body.toLowerCase().includes(query)
      );
      if (!results.length) return reply("❌ Nothing found for: *" + query + "*\\n\\nUse " + pfx + "kblist to see all saved articles.");
      const lines = ["📚 *Knowledge Base Results*\\n"];
      for (const [,v] of results.slice(0,5)) {
        lines.push("📌 *" + v.title + "*");
        lines.push(v.body.slice(0,150) + (v.body.length>150?"...":""));
        lines.push("_Saved by " + v.savedBy + " on " + v.savedAt + "_");
        lines.push("");
      }
      return reply(lines.join("\\n"));
    }

    if (command === "kblist" || (command === "kb" && args[0] === "list")) {
      const entries = Object.values(db);
      if (!entries.length) return reply("📚 Knowledge Base is empty.\\n\\nReply to any message and type " + pfx + "kbsave <title> to add.");
      const lines = ["📚 *Knowledge Base (" + entries.length + " articles)*\\n"];
      entries.forEach((v,i) => lines.push((i+1) + ". *" + v.title + "* — saved " + v.savedAt));
      lines.push("\\n_" + pfx + "kbfind <keyword> to search_");
      return reply(lines.join("\\n"));
    }

    if (command === "kbdelete" || (command === "kb" && args[0] === "delete")) {
      if (!isAdmin && !isOwner && !isDev) return reply("🔒 Admin only.");
      const query = (command === "kb" ? args.slice(1) : args).join(" ").toLowerCase().replace(/\\s+/g,"-");
      if (db[query]) { delete db[query]; save(all); return reply("✅ Deleted: *" + query + "*"); }
      return reply("❌ Article not found. Use " + pfx + "kblist to see all articles.");
    }

    // Default: show help
    return reply([
      "📚 *Knowledge Base*",
      "",
      "Save important info that members can search anytime.",
      "",
      pfx + "kbsave <title>     — Reply to msg + save it",
      pfx + "kbfind <keyword>   — Search the knowledge base",
      pfx + "kblist             — List all saved articles",
      pfx + "kbdelete <title>   — Delete an article",
    ].join("\\n"));
  }
};`,

    "ticket-system": `
// @marketplace ticket-system v1.0.0 by JusticeTech
"use strict";
const jts = require("../library/justicetechsystem");
const fs   = require("fs");
const path = require("path");
const DB   = path.join(__dirname, "..", "..", "database", "tickets.json");
function load() { try { return JSON.parse(fs.readFileSync(DB,"utf8")); } catch { return {}; } }
function save(d) { try { fs.writeFileSync(DB,JSON.stringify(d,null,2)); } catch {} }
module.exports = {
  name: "TicketSystem", category: "business",
  desc: "Support ticket queue with assignment and resolution tracking",
  command: ["ticket","tickets","closeticket","assignticket","ticketstatus"],
  run: async ({ args, command, chatId, userId, reply, prefix, isAdmin, isOwner, isDev, sock, m, mentionedJid }) => {
    const pfx   = prefix || "/";
    const chat  = chatId;
    const all   = load();
    if (!all[chat]) all[chat] = { tickets: {}, counter: 0 };
    const gs    = all[chat];
    const name  = m?.pushName || userId?.split("@")[0] || "Member";

    if (command === "ticket") {
      const issue = args.join(" ").trim();
      if (!issue) return reply("Usage: " + pfx + "ticket <describe your issue>\\n\\nExample: " + pfx + "ticket I cannot access the group files");
      gs.counter = (gs.counter || 0) + 1;
      const id   = "TKT-" + String(gs.counter).padStart(4,"0");
      gs.tickets[id] = {
        id, issue: issue.slice(0,300), sender: userId, name,
        status: "open", createdAt: new Date().toISOString(),
        assignedTo: null, resolution: null,
      };
      save(all);
      // Notify admins
      try {
        const meta   = await sock.groupMetadata(chat);
        const admins = meta.participants.filter(p=>p.admin).map(p=>p.id);
        if (admins.length) {
          await sock.sendMessage(chat, {
            text: "🎟️ *New Support Ticket*\\n\\n🆔 " + id + "\\n👤 From: " + name + "\\n📝 Issue: " + issue.slice(0,150) + "\\n\\nAdmins: " + pfx + "assignticket " + id + " @admin",
            mentions: admins,
          });
        }
      } catch {}
      return reply("✅ *Ticket Created: " + id + "*\\n\\n📝 Issue: " + issue + "\\n🕐 Status: Open\\n\\nAn admin will attend to you shortly.\\nCheck status: " + pfx + "ticketstatus " + id);
    }

    if (command === "tickets") {
      if (!isAdmin && !isOwner && !isDev) return reply("🔒 Admin only.");
      const open   = Object.values(gs.tickets).filter(t=>t.status==="open");
      const closed = Object.values(gs.tickets).filter(t=>t.status==="closed");
      if (!open.length) return reply("✅ No open tickets!\\n\\n" + closed.length + " tickets resolved so far.");
      const lines  = ["🎟️ *Open Tickets (" + open.length + ")*\\n"];
      for (const t of open.slice(0,10)) {
        const age = Math.floor((Date.now()-new Date(t.createdAt).getTime())/3600000);
        lines.push("🆔 *" + t.id + "* — " + age + "h ago");
        lines.push("   👤 " + t.name + ": " + t.issue.slice(0,60) + (t.issue.length>60?"...":""));
        lines.push("   " + (t.assignedTo ? "👷 Assigned" : "⏳ Unassigned"));
        lines.push("");
      }
      return reply(lines.join("\\n"));
    }

    if (command === "closeticket") {
      if (!isAdmin && !isOwner && !isDev) return reply("🔒 Admin only.");
      const id  = args[0]?.toUpperCase();
      const res = args.slice(1).join(" ") || "Resolved";
      if (!id || !gs.tickets[id]) return reply("Usage: " + pfx + "closeticket TKT-0001 <resolution note>");
      gs.tickets[id].status     = "closed";
      gs.tickets[id].resolution = res;
      gs.tickets[id].closedAt   = new Date().toISOString();
      save(all);
      // DM the ticket creator
      try { await sock.sendMessage(gs.tickets[id].sender, { text: "✅ Your ticket *" + id + "* has been resolved.\\n\\n📝 Resolution: " + res }); } catch {}
      return reply("✅ Ticket *" + id + "* closed.\\nResolution: " + res);
    }

    if (command === "ticketstatus") {
      const id = args[0]?.toUpperCase();
      if (!id || !gs.tickets[id]) return reply("Usage: " + pfx + "ticketstatus TKT-0001");
      const t  = gs.tickets[id];
      return reply([
        "🎟️ *Ticket: " + t.id + "*",
        "📝 Issue: " + t.issue,
        "👤 From: " + t.name,
        "🔄 Status: " + (t.status === "open" ? "🟡 Open" : "✅ Closed"),
        t.assignedTo ? "👷 Assigned to: " + t.assignedTo : "⏳ Unassigned",
        t.resolution ? "💬 Resolution: " + t.resolution : "",
        "🕐 Created: " + new Date(t.createdAt).toLocaleDateString(),
      ].filter(Boolean).join("\\n"));
    }
  }
};`,

  };
  return builtins[id] || null;
}

// ── Install a plugin ──────────────────────────────────────────────────────────
async function installPlugin(id) {
  // Find in registry
  const meta = findInRegistry(id);
  if (!meta) return { ok: false, error: "Plugin not found in marketplace. Use /plugin list to browse." };
  if (isInstalled(id)) return { ok: false, error: "Already installed. Use /plugin update " + id + " to update." };

  let code = "";

  // Builtin plugins: code is embedded in getBuiltinCode()
  if (meta.source === "builtin") {
    code = getBuiltinCode(id);
    if (!code) return { ok: false, error: "Plugin code not available yet." };
  }
  // Local plugins: code lives in marketplace/available/
  else if (meta.source === "local") {
    const localPath = path.join(MKT_DIR, "available", (meta.file || id + ".js"));
    if (!fs.existsSync(localPath)) return { ok: false, error: "Plugin file not found locally." };
    code = fs.readFileSync(localPath, "utf8");
  }
  // External plugins: download from URL
  else if (meta.url) {
    try {
      const r = await axios.get(meta.url, { timeout: 20000, responseType: "text" });
      code = r.data;
    } catch(e) {
      return { ok: false, error: "Download failed: " + e.message };
    }
  } else {
    return { ok: false, error: "No source available for this plugin." };
  }

  // Safety check
  const safety = safetyCheck(code);
  if (!safety.safe) return { ok: false, error: "Security check failed: " + safety.reason };

  // Syntax check
  const fp = pluginPath(id);
  fs.writeFileSync(fp, code.trim());
  const syntax = syntaxCheck(code, id);
  if (!syntax.ok) {
    fs.unlinkSync(fp);
    return { ok: false, error: "Syntax error in plugin: " + syntax.error };
  }

  // Load it
  try {
    delete require.cache[require.resolve(fp)];
    const plugin = require(fp);
    if (!plugin?.run) { fs.unlinkSync(fp); return { ok: false, error: "Invalid plugin — missing run() function." }; }

    // Register commands
    const cmds = Array.isArray(plugin.command) ? plugin.command : [];
    if (global.commandIndex) {
      for (const cmd of cmds) global.commandIndex[cmd.toLowerCase()] = plugin;
    }
    if (global.PLUGINS) {
      global.PLUGINS = global.PLUGINS.filter(p => p.name !== plugin.name);
      global.PLUGINS.push(plugin);
    }

    markInstalled(id, meta);
    return { ok: true, plugin, cmds };
  } catch(e) {
    try { fs.unlinkSync(fp); } catch {}
    return { ok: false, error: "Failed to load plugin: " + e.message };
  }
}

// ── Remove a plugin ───────────────────────────────────────────────────────────
function removePlugin(id) {
  if (!isInstalled(id)) return { ok: false, error: "Plugin not installed." };
  const fp = pluginPath(id);
  // Unload from runtime
  try {
    if (fs.existsSync(fp)) {
      const plugin = require.cache[require.resolve(fp)];
      if (plugin?.exports?.command && global.commandIndex) {
        const cmds = Array.isArray(plugin.exports.command) ? plugin.exports.command : [];
        for (const cmd of cmds) delete global.commandIndex[cmd.toLowerCase()];
      }
      if (global.PLUGINS && plugin?.exports?.name) {
        global.PLUGINS = global.PLUGINS.filter(p => p.name !== plugin.exports.name);
      }
      delete require.cache[require.resolve(fp)];
      fs.unlinkSync(fp);
    }
  } catch {}
  markRemoved(id);
  return { ok: true };
}

// ═════════════════════════════════════════════════════════════════════════════
// PLUGIN COMMAND HANDLER
// ═════════════════════════════════════════════════════════════════════════════
module.exports = {
  name: "PluginManager",
  category: "core",
  desc: "Miss Chatra Plugin Marketplace — install, remove, and manage plugins",
  command: ["plugin","marketplace"],
  loadMarketplacePlugins,

  run: async ({ args, command, reply, isOwner, isDev, prefix, userId, chatId, sock, m, botNumber, isAdmin }) => {
    const pfx    = prefix || "/";
    const sub    = (args[0] || "").toLowerCase();
    const param  = args.slice(1).join(" ").trim().toLowerCase();
    const canUse = isOwner || isDev;
    const _userNum = jts.norm(userId || "");

    // ── /plugin (no args) or /plugins ────────────────────────────────────────
    if (!sub || sub === "help") {
      const installed = getInstalled();
      const count     = Object.keys(installed).length;
      return reply([
        "🧩 *Miss Chatra Plugin Marketplace*",
        "",
        "Install new features instantly — no restart, no zip files.",
        "",
        "📋 *Commands:*",
        pfx + "plugin list              — Browse all plugins",
        pfx + "plugin list <category>   — Browse by category",
        pfx + "plugin search <keyword>  — Search plugins",
        pfx + "plugin info <id>         — Plugin details",
        pfx + "plugin install <id>      — Install a plugin",
        pfx + "plugin remove <id>       — Uninstall a plugin",
        pfx + "plugin disable <id>      — Disable without removing",
        pfx + "plugin enable <id>       — Re-enable a plugin",
        pfx + "plugin installed         — What's installed",
        pfx + "plugin update <id>       — Update a plugin",
        "",
        "📦 Installed: *" + count + " plugin(s)*",
        "",
        "_" + pfx + "plugin list to start browsing_",
      ].join("\n"));
    }

    // ── /plugin list [category] ───────────────────────────────────────────────
    if (sub === "list") {
      const reg    = getRegistry();
      const inst   = getInstalled();
      let plugins  = reg.plugins;
      if (param) plugins = plugins.filter(p =>
        p.category.toLowerCase().includes(param) ||
        p.tags?.some(t => t.includes(param))
      );
      if (!plugins.length) return reply("No plugins found" + (param ? " in category: " + param : "") + ".\n\nCategories: finance, business, spiritual, admin, tools, engagement, productivity");

      // Group by category
      const cats = {};
      for (const p of plugins) {
        if (!cats[p.category]) cats[p.category] = [];
        cats[p.category].push(p);
      }
      const catIcons = { finance:"💰", business:"💼", spiritual:"✝️", admin:"🛡️", tools:"🔧", engagement:"🎯", productivity:"📚" };
      const lines = ["🧩 *Plugin Marketplace*" + (param ? " — " + param : "") + "\n"];
      for (const [cat, ps] of Object.entries(cats)) {
        lines.push((catIcons[cat]||"📦") + " *" + cat.toUpperCase() + "*");
        for (const p of ps) {
          const badge = inst[p.id] ? "✅" : (p.verified ? "🔵" : "⚪");
          lines.push("  " + badge + " *" + p.id + "* — " + p.description.slice(0,55) + (p.description.length>55?"...":""));
        }
        lines.push("");
      }
      lines.push("_✅ Installed  🔵 Verified  ⚪ Unverified_");
      lines.push("_" + pfx + "plugin info <id> for details_");
      lines.push("_" + pfx + "plugin install <id> to install_");
      return reply(lines.join("\n"));
    }

    // ── /plugin search <keyword> ──────────────────────────────────────────────
    if (sub === "search") {
      if (!param) return reply("Usage: " + pfx + "plugin search <keyword>");
      const reg   = getRegistry();
      const inst  = getInstalled();
      const found = reg.plugins.filter(p =>
        p.id.includes(param) ||
        p.name.toLowerCase().includes(param) ||
        p.description.toLowerCase().includes(param) ||
        p.tags?.some(t => t.includes(param))
      );
      if (!found.length) return reply("🔍 No plugins found for: *" + param + "*\n\nTry: " + pfx + "plugin list to browse all");
      const lines = ["🔍 *Search: " + param + "*\n"];
      for (const p of found) {
        const badge = inst[p.id] ? "✅ Installed" : (p.free ? "🆓 Free" : "💰 Paid");
        lines.push("📦 *" + p.name + "* (" + p.id + ")");
        lines.push("   " + p.description.slice(0,80));
        lines.push("   Commands: /" + p.commands.slice(0,3).join(", /") + (p.commands.length>3?" +" + (p.commands.length-3) + " more":""));
        lines.push("   " + badge);
        lines.push("");
      }
      lines.push("_" + pfx + "plugin install <id> to install_");
      return reply(lines.join("\n"));
    }

    // ── /plugin info <id> ─────────────────────────────────────────────────────
    if (sub === "info") {
      const id   = param.replace(/\s+/g,"-");
      const meta = findInRegistry(id);
      if (!meta) return reply("❌ Plugin not found: *" + id + "*\n\n" + pfx + "plugin list to browse");
      const inst = isInstalled(id);
      const dis  = isDisabled(id);
      return reply([
        "📦 *" + meta.name + "*",
        "━━━━━━━━━━━━━━━━━━━━━━",
        "🆔 ID: " + meta.id,
        "📝 " + meta.description,
        "👤 Author: " + meta.author,
        "🏷️ Category: " + meta.category,
        "📊 Version: " + meta.version,
        "⚖️ Size: " + meta.size,
        meta.verified ? "✅ Verified by JusticeTech" : "⚠️ Community plugin",
        meta.free ? "🆓 Free" : "💰 Paid",
        "",
        "⚡ *Commands:*",
        meta.commands.map(c => "  /" + c).join("\n"),
        "",
        inst
          ? (dis ? "⏸ Installed but DISABLED — " + pfx + "plugin enable " + id : "✅ INSTALLED — " + pfx + "plugin remove " + id + " to uninstall")
          : "📥 Not installed — " + pfx + "plugin install " + id,
      ].join("\n"));
    }

    // ── /plugin request <id> <reason> ────────────────────────────────────────
    if (sub === "request") {
      try {
        const pr = require("./pluginrequest");
        const prArgs = args.slice(1);
        return await pr.run({ sock, m, args: prArgs, reply, prefix: pfx, chatId, userId, isAdmin, isOwner, isDev, botNumber });
      } catch (e) {
        console.log("[plugin request] err:", e.message);
        return reply("Usage: " + pfx + "plugin request <plugin_id> <bot_number> <reason>");
      }
    }

    // ── /plugin install <id> ──────────────────────────────────────────────────
    if (sub === "install") {
      const id = param.replace(/\s+/g,"-");
      if (!id) return reply("Usage: " + pfx + "plugin install <id>\n\n" + pfx + "plugin list to browse");

      const _isGroup     = chatId?.endsWith("@g.us");
      const _botSelfNum2 = jts.norm(botNumber || "");
      const _isDevBot    = jts.isDev(_botSelfNum2);

      // ── In ANY group: ONLY dev's bot may respond. All other bots stay silent. ──
      if (_isGroup) {
        if (!_isDevBot) return; // Non-dev bots: completely silent in all groups
        // Dev's bot in a group: just show a brief note to install from DM
        return reply(
          "📥 To install *" + id + "*, open your *bot DM* (Message yourself) and type:\n" +
          "`" + pfx + "plugin install " + id + "`\n\n" +
          "Plugin installation only works in bot DM."
        );
      }

      // ── In DM: check approval then install ───────────────────────────────────
      const cfg2 = jts.getConfig();
      if (!jts.isDev(userId || "")) {
        if (cfg2.marketplace_approval_required !== false) {
          if (jts.isPluginGloballyDisabled(id)) {
            return reply("🚫 *" + id + "* has been globally disabled by JusticeTech.");
          }
          // Check if THIS bot's owner (the bot number = owner number) has approval
          // Check by botNumber (the bot's own number) AND userId (the owner typing)
          const _ownerNum  = jts.norm(botNumber || "");
          const _senderNum = jts.norm(userId || "");
          const _hasApproval = jts.hasApproval(_ownerNum, id) || jts.hasAllApprovals(_ownerNum)
                             || jts.hasApproval(_senderNum, id) || jts.hasAllApprovals(_senderNum);
          if (!_hasApproval) {
            const comm2 = cfg2.communities || {};
            return reply(
              "🔐 *" + id + "* not yet approved for this bot.\n\n" +
              "Request approval in JusticeTech Support group:\n" +
              (comm2.support_group || "https://chat.whatsapp.com/Gyt75qFHoul3wp53IKi25v?mode=gi_t") + "\n\n" +
              "Type: `" + pfx + "plugin request " + id + " <your reason>`\n\n" +
              "You will be notified here once approved."
            );
          }
        }
      }
      // ── End Approval Gate ─────────────────────────────────────────────────
      if (!canUse) return reply("🔒 Owner/Dev only.");

      await reply("⬇️ Installing *" + id + "*...\n🔍 Safety check...");

      const result = await installPlugin(id);
      if (!result.ok) return reply("❌ Installation failed:\n" + result.error);

      return reply([
        "✅ *" + id + "* installed successfully!",
        "",
        "⚡ *Commands now active:*",
        result.cmds.map(c => "  /" + c).join("\n"),
        "",
        "Try them now — no restart needed!",
        "",
        "_" + pfx + "plugin remove " + id + " to uninstall_",
      ].join("\n"));
    }

    // ── /plugin remove <id> ───────────────────────────────────────────────────
    if (sub === "remove") {
      if (!canUse) return reply("🔒 Owner/Dev only.");
      const id = param.replace(/\s+/g,"-");
      if (!id) return reply("Usage: " + pfx + "plugin remove <id>");
      const result = removePlugin(id);
      if (!result.ok) return reply("❌ " + result.error);
      return reply("✅ *" + id + "* removed.\n\nAll its commands are now inactive.");
    }

    // ── /plugin disable <id> ─────────────────────────────────────────────────
    if (sub === "disable") {
      if (!canUse) return reply("🔒 Owner/Dev only.");
      const id = param.replace(/\s+/g,"-");
      if (!isInstalled(id)) return reply("❌ Plugin not installed: " + id);
      setDisabled(id, true);
      return reply("⏸ *" + id + "* disabled.\n\nIts commands are inactive but it\\'s still installed.\n" + pfx + "plugin enable " + id + " to re-activate.");
    }

    // ── /plugin enable <id> ───────────────────────────────────────────────────
    if (sub === "enable") {
      if (!canUse) return reply("🔒 Owner/Dev only.");
      const id = param.replace(/\s+/g,"-");
      if (!isInstalled(id)) return reply("❌ Plugin not installed: " + id);
      setDisabled(id, false);
      // Reload
      const fp = pluginPath(id);
      try {
        delete require.cache[require.resolve(fp)];
        const plugin = require(fp);
        const cmds   = Array.isArray(plugin.command) ? plugin.command : [];
        if (global.commandIndex) for (const cmd of cmds) global.commandIndex[cmd.toLowerCase()] = plugin;
        if (global.PLUGINS) { global.PLUGINS = global.PLUGINS.filter(p=>p.name!==plugin.name); global.PLUGINS.push(plugin); }
      } catch {}
      return reply("▶️ *" + id + "* enabled. Commands are active again.");
    }

    // ── /plugin installed ─────────────────────────────────────────────────────
    if (sub === "installed") {
      const inst  = getInstalled();
      const dis   = getDisabled();
      const keys  = Object.keys(inst);
      if (!keys.length) return reply("No plugins installed.\n\n" + pfx + "plugin list to browse the marketplace.");
      const lines = ["🧩 *Installed Plugins (" + keys.length + ")*\n"];
      for (const id of keys) {
        const m   = inst[id];
        const off = dis.includes(id);
        lines.push((off ? "⏸" : "✅") + " *" + (m.name||id) + "* (" + id + ")");
        lines.push("   v" + (m.version||"1.0.0") + " • " + (m.category||"misc") + " • installed " + new Date(m.installedAt).toLocaleDateString());
        lines.push("   Commands: /" + (m.commands||[]).slice(0,3).join(", /"));
        lines.push("");
      }
      lines.push("_" + pfx + "plugin remove <id> | " + pfx + "plugin disable <id>_");
      return reply(lines.join("\n"));
    }

    // ── /plugin update <id> ───────────────────────────────────────────────────
    if (sub === "update") {
      if (!canUse) return reply("🔒 Owner/Dev only.");
      const id = param.replace(/\s+/g,"-") || "all";
      if (id === "all") {
        const inst = getInstalled();
        const ids  = Object.keys(inst);
        if (!ids.length) return reply("No plugins installed to update.");
        await reply("🔄 Updating " + ids.length + " plugin(s)...");
        let ok = 0, fail = 0;
        for (const pid of ids) {
          removePlugin(pid);
          const r = await installPlugin(pid);
          if (r.ok) ok++; else fail++;
        }
        return reply("✅ Update complete!\n✅ Updated: " + ok + "\n❌ Failed: " + fail);
      }
      if (!isInstalled(id)) return reply("❌ Plugin not installed: " + id);
      removePlugin(id);
      const result = await installPlugin(id);
      if (!result.ok) return reply("❌ Update failed: " + result.error);
      return reply("✅ *" + id + "* updated to latest version!\n\nCommands: /" + result.cmds.join(", /"));
    }

    return reply("Unknown sub-command.\n\n" + pfx + "plugin help — see all commands");
  }
};
