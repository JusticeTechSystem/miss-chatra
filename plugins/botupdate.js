// plugins/botupdate.js — Miss Chatra Auto-Update System
// Extracted from JusticeTech WA Autosave Bot update.js
// ─────────────────────────────────────────────────────────────────────────────
// USAGE:
//   /update           — check + install latest update
//   /update check     — check version only (no install)
//   /update changelog — show what changed in latest release
//   /update force     — force reinstall even if up to date (owner/dev only)
//
// HOW IT WORKS:
//   1. GitHub API → get latest release tag
//   2. Compare with local version.json
//   3. Download release zip from GitHub
//   4. Extract ONLY safe code files (plugins/, library/, index.js etc.)
//   5. PRESERVE: database/, sessions/, credentials/, settings/config.js
//   6. Run npm install if package.json changed
//   7. Restart automatically
// ─────────────────────────────────────────────────────────────────────────────
"use strict";

const fs   = require("fs");
const path = require("path");
const https = require("https");
const http  = require("http");
const os    = require("os");
const { execSync, spawn } = require("child_process");

// ── SET YOUR GITHUB DETAILS HERE ─────────────────────────────────────────────
const GITHUB_USER = "JusticeTechSystem";          // ← your GitHub username
const GITHUB_REPO = "miss-chatra";                // ← your GitHub repo name
// ─────────────────────────────────────────────────────────────────────────────

const BOT_ROOT     = path.join(__dirname, "..");
const VERSION_FILE = path.join(BOT_ROOT, "version.json");
const THUMB_FILE   = path.join(BOT_ROOT, "thumbnail", "image.jpg");

function getThumb() { try { return fs.existsSync(THUMB_FILE) ? fs.readFileSync(THUMB_FILE) : null; } catch { return null; } }
function sleep(ms)  { return new Promise(r => setTimeout(r, ms)); }

// ── Progress card (animated spinner) ─────────────────────────────────────────
function buildProgressCard(pct, stage, version, details) {
  const filled  = Math.round(pct / 5);
  const empty   = 20 - filled;
  const bar     = "█".repeat(filled) + "░".repeat(empty);
  const spinner = pct < 100
    ? ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"][Math.floor(Date.now() / 150) % 10]
    : "✅";
  const lines = [
    "╔══════════════════════════════════════════════╗",
    `🚀 *Miss Chatra Update${version ? " — " + version : ""}*`,
    "╠══════════════════════════════════════════════╣",
    "",
    `  ${spinner} *${stage}*`,
    "",
    `  [${bar}] ${pct}%`,
  ];
  if (details) lines.push("", "  ℹ️ " + details);
  lines.push("", "╚══════════════════════════════════════════════╝");
  return lines.join("\n");
}

// ── Preserved paths (NEVER overwritten during update) ─────────────────────────
const PRESERVE_FILES = new Set([
  path.join(BOT_ROOT, "settings", "config.js"),
]);
const UPDATABLE_DIRS  = ["plugins", "library", "settings", "thumbnail", "marketplace"];
const UPDATABLE_FILES = ["index.js", "message.js", "package.json", "version.json"];

function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch { return fallback; }
}

function getLocalVersion() {
  return readJson(VERSION_FILE, { version: "0.0.0", codename: "unknown" });
}

function normaliseVersion(v) {
  // Strip leading v, strip _JT / _codename suffix, split semver
  return String(v || "0.0.0")
    .replace(/^v/i, "")
    .replace(/_[A-Za-z]+.*$/, "")  // strip _JT, _alpha, etc.
    .split(".")
    .slice(0, 3)
    .map(n => parseInt(n, 10) || 0);
}

function isNewer(remoteTag, localVersion) {
  const [rM, rm, rp] = normaliseVersion(remoteTag);
  const [lM, lm, lp] = normaliseVersion(localVersion);
  if (rM !== lM) return rM > lM;
  if (rm !== lm) return rm > lm;
  return rp > lp;
}

function isSameOrNewer(remoteTag, localTag) {
  const r = normaliseVersion(remoteTag);
  const l = normaliseVersion(localTag);
  for (let i = 0; i < 3; i++) {
    if (r[i] > l[i]) return true;
    if (r[i] < l[i]) return false;
  }
  return true; // equal
}

// Promise-based HTTPS GET with redirect following
function httpsGet(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const req = client.get(url, {
      headers: { "User-Agent": "MissChatra-AutoUpdate/1.0", "Accept": "application/vnd.github+json" },
    }, res => {
      if (res.statusCode >= 301 && res.statusCode <= 302 && res.headers.location) {
        return httpsGet(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error("HTTP " + res.statusCode + " for " + url));
      const chunks = [];
      res.on("data", c => chunks.push(c));
      res.on("end",  () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    });
    req.on("error", reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error("Request timed out")); });
  });
}

async function fetchLatestRelease() {
  const url  = "https://api.github.com/repos/" + GITHUB_USER + "/" + GITHUB_REPO + "/releases/latest";
  const buf  = await httpsGet(url);
  const data = JSON.parse(buf.toString("utf8"));
  if (!data.tag_name) throw new Error("No release found on GitHub. Publish a release first.");
  return {
    tag:     data.tag_name,
    version: data.tag_name.replace(/^v/, ""),
    name:    data.name || data.tag_name,
    body:    data.body || "(no changelog)",
    zipUrl:  data.zipball_url,
  };
}

async function downloadAndExtract(zipUrl, tmpDir) {
  const buf     = await httpsGet(zipUrl);
  const zipPath = path.join(tmpDir, "release.zip");
  fs.writeFileSync(zipPath, buf);

  const extractDir = path.join(tmpDir, "extracted");
  fs.mkdirSync(extractDir, { recursive: true });

  // Pure Node.js extraction via adm-zip (no system unzip required)
  try {
    const AdmZip = require("adm-zip");
    new AdmZip(zipPath).extractAllTo(extractDir, true);
  } catch (admErr) {
    try {
      execSync(
        "python3 -c \"import zipfile,sys; zipfile.ZipFile(sys.argv[1]).extractall(sys.argv[2])\" \"" +
        zipPath + "\" \"" + extractDir + "\""
      );
    } catch {
      throw new Error("Cannot extract zip — adm-zip failed (" + admErr.message + ") and python3 unavailable");
    }
  }

  fs.unlinkSync(zipPath);
  const entries = fs.readdirSync(extractDir);
  const srcRoot = (entries.length === 1 && fs.statSync(path.join(extractDir, entries[0])).isDirectory())
    ? path.join(extractDir, entries[0]) : extractDir;

  return srcRoot;
}

function safeCopyFile(src, dest) {
  try {
    // Ensure dest is writable — chmod 644 before overwrite
    if (fs.existsSync(dest)) {
      try { fs.chmodSync(dest, 0o644); } catch {}
    }
    fs.copyFileSync(src, dest);
    return true;
  } catch (e) {
    if (e.code === "EACCES" || e.code === "EPERM") {
      // Try copying to a temp file then renaming
      try {
        const tmp = dest + ".tmp_update";
        fs.copyFileSync(src, tmp);
        try { fs.chmodSync(tmp, 0o644); } catch {}
        fs.renameSync(tmp, dest);
        return true;
      } catch {}
    }
    console.error("[UPDATE] Copy failed:", src, "->", dest, e.message);
    return false;
  }
}

function copyDir(srcDir, destDir) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  let count = 0;
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath  = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (PRESERVE_FILES.has(destPath)) continue;
    if (entry.isDirectory()) {
      count += copyDir(srcPath, destPath);
    } else {
      if (safeCopyFile(srcPath, destPath)) count++;
    }
  }
  return count;
}

const OBF_SIGNATURES = [
  "// Encrypted by Obfuscationary",
  "pbkdf2Sync(pw,sl,_ITS,",
  "const _PWDS=",
  "Buffer.from(_b64,",
];

function _fileIsObfuscated(filePath) {
  try {
    if (!fs.existsSync(filePath)) return false;
    const head = fs.readFileSync(filePath, "utf8").slice(0, 2048);
    return OBF_SIGNATURES.some(s => head.includes(s));
  } catch { return false; }
}

function _srcIsObfuscated(root) {
  // Scan root files
  if (_fileIsObfuscated(path.join(root, "index.js"))) return true;
  if (_fileIsObfuscated(path.join(root, "message.js"))) return true;
  // Scan ALL .js files in library/ and plugins/ — obfuscated files have appeared
  // in both dirs across different update releases (library/justicetechsystem.js,
  // plugins/adminpowers.js, etc.) so we must check every file in both folders.
  for (const dir of ["library", "plugins"]) {
    const d = path.join(root, dir);
    if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d)) {
      if (f.endsWith(".js") && _fileIsObfuscated(path.join(d, f))) return true;
    }
  }
  return false;
}

function applyUpdate(srcRoot) {
  // If ANY key file in the downloaded zip is obfuscated (pbkdf2 iterations=0 crash),
  // skip ALL affected dirs/files to prevent a crash-on-restart loop.
  const _skipObfuscated = _srcIsObfuscated(srcRoot);
  if (_skipObfuscated) {
    console.log("[UPDATE] ⚠️  Obfuscated files detected in update package — skipping index.js, message.js, library/ and plugins/ to avoid pbkdf2 crash. Push unobfuscated source.");
  }
  let total = 0;
  for (const dir of UPDATABLE_DIRS) {
    const src  = path.join(srcRoot, dir);
    const dest = path.join(BOT_ROOT, dir);
    if (!fs.existsSync(src)) continue;
    // Skip library/ entirely if the downloaded package is obfuscated
    if (_skipObfuscated && (dir === "library" || dir === "plugins")) continue;
    if (dir === "settings") {
      if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
      for (const f of fs.readdirSync(src)) {
        if (f === "config.js") continue;
        safeCopyFile(path.join(src, f), path.join(dest, f));
        total++;
      }
      continue;
    }
    total += copyDir(src, dest);
  }
  for (const file of UPDATABLE_FILES) {
    // Skip index.js and message.js if the downloaded package is obfuscated
    if (_skipObfuscated && (file === "index.js" || file === "message.js")) continue;
    const src = path.join(srcRoot, file);
    if (!fs.existsSync(src)) continue;
    safeCopyFile(src, path.join(BOT_ROOT, file));
    total++;
  }
  return total;
}

function needsNpmInstall(srcRoot) {
  try {
    const oldPkg = readJson(path.join(BOT_ROOT, "package.json"), {});
    const newPkg = readJson(path.join(srcRoot, "package.json"), {});
    return JSON.stringify(oldPkg.dependencies) !== JSON.stringify(newPkg.dependencies);
  } catch { return false; }
}

function restartBot() {
  try {
    const pm2List = execSync("pm2 list --no-color 2>/dev/null", { encoding: "utf8" });
    if (pm2List.includes("online") || pm2List.includes("stopped")) {
      execSync("pm2 restart all", { stdio: "inherit" });
      return;
    }
  } catch {}
  const child = spawn(process.execPath, process.argv.slice(1), {
    detached: true, stdio: "inherit", cwd: BOT_ROOT, env: process.env,
  });
  child.unref();
  process.exit(0);
}

// ── Background update checker — runs every 6 hours silently ──────────────────
let _bgCheckInterval = null;
function startBackgroundChecker(sock) {
  if (_bgCheckInterval) return; // already running
  _bgCheckInterval = setInterval(async () => {
    try {
      const local  = readJson(VERSION_FILE, { version: "0.0.0" });
      const remote = await fetchLatestRelease();
      if (!remote) return;
      if (isNewer(remote.tag, local.tag || local.version)) {
        // Store pending update info so /update sees it immediately
        global.__pendingUpdate = remote;
        console.log(`[UPDATE] New version available: ${remote.tag}`);
      } else {
        global.__pendingUpdate = null;
      }
    } catch {}
  }, 6 * 60 * 60 * 1000); // every 6 hours
  // Also run once after 30 seconds
  setTimeout(async () => {
    try {
      const local  = readJson(VERSION_FILE, { version: "0.0.0" });
      const remote = await fetchLatestRelease();
      if (remote && isNewer(remote.tag, local.tag || local.version)) {
        global.__pendingUpdate = remote;
      }
    } catch {}
  }, 30000);
}

// ─────────────────────────────────────────────────────────────────────────────
module.exports = {
  name: "BotUpdate", category: "core",
  desc: "Auto-update Miss Chatra from GitHub releases with live progress bar",
  command: ["update", "checkupdate", ],
  ownerOnly: true,
  startBackgroundChecker,

  run: async ({ reply, sock, m, command, args, chatId, isOwner, isDev, prefix }) => {
    if (!isOwner && !isDev) return reply("🔒 Owner only.");

    const pfx   = prefix || "/";
    const sub   = String(args?.[0] || "").toLowerCase().trim();
    const thumb = getThumb();
    const local = getLocalVersion();
    const pending = global.__JT_PENDING_UPDATE;

    async function sendCard(text) {
      if (thumb) {
        try { return await sock.sendMessage(chatId, { image: thumb, caption: text }, { quoted: m }); } catch {}
      }
      return reply(text);
    }

    async function sendProgress(pct, stage, version, details) {
      const card = buildProgressCard(pct, stage, version, details);
      if (!module._progressKey) {
        try {
          const sent = await sock.sendMessage(chatId, { text: card }, { quoted: m });
          module._progressKey = sent?.key || null;
        } catch { await reply(card); }
      } else {
        try { await sock.sendMessage(chatId, { text: card, edit: module._progressKey }); }
        catch { try { await sock.sendMessage(chatId, { text: card }); } catch {} }
      }
    }
    module._progressKey = null;

    // /checkupdate — version check only
    if (command === "checkupdate" || sub === "check") {
      if (pending) {
        return sendCard([
          "╔══════════════════════════════════════════════╗",
          "🔔 *Update Available — " + pending.version + "*",
          "╠══════════════════════════════════════════════╣",
          "",
          "  📋 *What's new:*",
          ...(pending.entries || []).map(e => "  • " + e),
          "",
          "  ✅ Run *" + pfx + "update* to install now.",
          "╚══════════════════════════════════════════════╝",
        ].join("\n"));
      }
      try {
        await sendCard("🔍 Checking latest release on GitHub...");
        const remote = await fetchLatestRelease();
        const newer  = isNewer(remote.tag, local.tag || local.version);
        return sendCard([
          "╔══════════════════════════════════════════════╗",
          newer ? "🆕 *Update Available — " + remote.tag + "*" : "✅ *Bot is up to date*",
          "╠══════════════════════════════════════════════╣",
          "",
          "  Current : " + (local.tag || ("v"+local.version)) + " (local)",
          "  Latest  : " + remote.tag + " (github)",
          "",
          newer
            ? "  Run *" + pfx + "update* to install."
            : "  You are on the latest version.",
          "╚══════════════════════════════════════════════╝",
        ].join("\n"));
      } catch (e) {
        return reply("❌ Could not check GitHub:\n" + e.message + "\n\nMake sure GITHUB_USER and GITHUB_REPO are set in botupdate.js");
      }
    }

    // /update — full update
    await sendProgress(0, "Initialising update...", null, "Current: v" + local.version);
    await sleep(600);

    // Resolve source
    await sendProgress(10, "Resolving update source...", null, GITHUB_USER + "/" + GITHUB_REPO);
    let remote;
    const pendingUrl = pending?.downloadUrl || null;

    try {
      if (pendingUrl) {
        remote = { tag: pending.version, version: pending.version.replace(/^v/, ""), name: pending.version, body: (pending.entries || []).join("\n"), zipUrl: pendingUrl };
        await sendProgress(15, "Using dev-provided download URL...", remote.tag);
      } else {
        remote = await fetchLatestRelease();
        await sendProgress(20, "Latest release found!", remote.tag, remote.name);
      }
    } catch (e) {
      await sendProgress(0, "❌ Could not resolve update source", null, e.message);
      return;
    }

    const newer = isNewer(remote.tag, local.tag || local.version);
    if (!newer && !pending && sub !== "force") {
      await sendProgress(100, "Already up to date!", remote.tag, "v" + local.version + " is the latest");
      return;
    }

    await sendProgress(25, "Preparing download...", remote.tag, "v" + local.version + " → v" + remote.version);
    await sleep(500);

    // Download
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "chatra-update-"));
    let srcRoot;
    try {
      await sendProgress(30, "Downloading update package...", remote.tag, "From GitHub releases");
      srcRoot = await downloadAndExtract(remote.zipUrl, tmpDir);
      await sendProgress(55, "Download complete!", remote.tag, "Extracting files...");
      await sleep(400);
    } catch (e) {
      try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}
      await sendProgress(0, "❌ Download failed", remote.tag, e.message);
      return;
    }

    // Apply
    await sendProgress(60, "Applying update files...", remote.tag, "Writing new plugins and library");
    await sleep(300);
    let totalFiles = 0;
    try {
      totalFiles = applyUpdate(srcRoot);
      await sendProgress(78, "Files applied!", remote.tag, totalFiles + " files updated");
      await sleep(400);
    } catch (e) {
      try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}
      await sendProgress(0, "❌ Failed to apply files", remote.tag, e.message);
      return;
    }

    // npm install
    let npmRan = false;
    try {
      if (needsNpmInstall(srcRoot)) {
        await sendProgress(82, "Installing new dependencies...", remote.tag, "npm install running...");
        execSync("npm install --production --silent", { cwd: BOT_ROOT, stdio: "inherit" });
        npmRan = true;
        await sendProgress(92, "Dependencies installed!", remote.tag);
      }
    } catch {}

    // Cleanup
    await sendProgress(96, "Cleaning up...", remote.tag);
    try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}
    global.__JT_PENDING_UPDATE = null;
    await sleep(400);

    await sendProgress(100, "✅ Update complete!", remote.tag, totalFiles + " files updated");
    await sleep(800);

    await sendCard([
      "╔══════════════════════════════════════════════╗",
      "🎉 *Miss Chatra Updated — " + remote.tag + "*",
      "╠══════════════════════════════════════════════╣",
      "",
      "📋 *What's New*",
      ...(pending?.entries || remote.body.split("\n").slice(0, 6)).filter(Boolean).map(e => e.replace(/^[-•*✅✓]\s*/,"").trim()).filter(Boolean).filter(e => !/^what'?s\s+new/i.test(e)).map(e => "  " + e),
      "",
      "╠══════════════════════════════════════════════╣",
      "  ♻️ Restarting in 5 seconds...",
      "  All new features active after restart.",
      "╚══════════════════════════════════════════════╝",
    ].join("\n"));

    await sleep(5000);
    restartBot();
  },
};
