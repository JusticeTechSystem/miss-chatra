"use strict";
// ─────────────────────────────────────────────────────────────────────────────
// Miss Chatra launcher — the ONLY code that lives in the public repo.
//
// It asks the private code server for the latest bot, verifies it (SHA-256 +
// Ed25519 signature), unpacks it into ./core, keeps user data OUTSIDE ./core
// so updates never touch it, then runs core/main.js and keeps it running.
//
// Node built-ins only (runs before any npm install). Needs the `tar` binary,
// which every Linux / Pterodactyl image has.
//
// Setup: none. On first start the launcher registers itself with the update
// server, receives its own license key and stores it in ./.launcher/license.
// (To use a key you were given by hand instead, put LICENSE_KEY=... in a .env
// file next to this file, or set it as a startup variable.)
//
// Optional overrides (normally never needed):
//   LICENSE_KEY      use this key instead of registering automatically
//   SERVER_URL       code server address        (default: the one below)
//   PUBLIC_KEY       base64 Ed25519 public key  (default: the one below)
//   MAIN_FILE        entry inside the bot        (default: main.js)
//   PERSIST          dirs kept across updates    (default below)
//   PERSIST_FILES    files kept across updates   (default: .env)
//   CHECK_EVERY_MIN  background update check     (default: 360)
// ─────────────────────────────────────────────────────────────────────────────
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const crypto = require("crypto");
const { spawn, spawnSync } = require("child_process");

const ROOT = __dirname;

// Load ROOT/.env into process.env (existing real env vars win). Lets people
// on hosts without a "startup variables" screen configure the launcher with a
// plain .env file. The same file is symlinked into core/ so the bot's own
// session-id feature (which writes .env) keeps working across updates.
try {
  for (const line of fs.readFileSync(path.join(ROOT, ".env"), "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, "$2");
  }
} catch {}
const CORE = path.join(ROOT, "core");
const STATE = path.join(ROOT, ".launcher");
const NEXT = path.join(STATE, "next");
const PREV = path.join(STATE, "prev");
const VERSION_FILE = path.join(STATE, "version");
const DEPS_FILE = path.join(STATE, "deps-hash");
const INSTANCE_FILE = path.join(STATE, "instance");
const LICENSE_FILE = path.join(STATE, "license");
const BAD_FILE = path.join(STATE, "bad-version"); // a version that crash-looped; not reinstalled until the server publishes a different one

const env = process.env;
const DEFAULT_SERVER_URL = "https://4okqwc.brevo.host";
const DEFAULT_PUBLIC_KEY = "MCowBQYDK2VwAyEAx+Emg/PoRycXjw10p0Nr9VNOfsBHNoOPYN46qqR1nBo=";
const SERVER_URL = (env.SERVER_URL || DEFAULT_SERVER_URL).replace(/\/+$/, "");
const PUBLIC_KEY = env.PUBLIC_KEY || DEFAULT_PUBLIC_KEY;
const MAIN_FILE = env.MAIN_FILE || "main.js";
const PERSIST = (env.PERSIST || "database,sessions,marketplace/plugins,marketplace/temp").split(",").map(s => s.trim()).filter(Boolean);
const PERSIST_FILES = (env.PERSIST_FILES || ".env").split(",").map(s => s.trim()).filter(Boolean);
const CHECK_EVERY_MS = (parseFloat(env.CHECK_EVERY_MIN) || 360) * 60 * 1000;

const log = (...a) => console.log("[launcher]", ...a);
fs.mkdirSync(STATE, { recursive: true });

// ── tiny HTTP helper (follows redirects, never forwards auth to another host) ─
function request(url, { headers = {}, asBuffer = true, redirects = 5 } = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const lib = u.protocol === "http:" ? http : https;
    const req = lib.get(u, { headers: { "User-Agent": "chatra-launcher", ...headers }, timeout: 30000 }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        if (redirects <= 0) return reject(new Error("Too many redirects"));
        const next = new URL(res.headers.location, u);
        const h = { ...headers };
        if (next.host !== u.host) delete h.Authorization; // never leak the license key to another host
        return resolve(request(next.href, { headers: h, asBuffer, redirects: redirects - 1 }));
      }
      if (res.statusCode !== 200) { res.resume(); const e = new Error(`HTTP ${res.statusCode} from ${u.host}`); e.status = res.statusCode; return reject(e); }
      const chunks = [];
      res.on("data", c => chunks.push(c));
      res.on("end", () => {
        const buf = Buffer.concat(chunks);
        resolve({ body: asBuffer ? buf : buf.toString("utf8"), headers: res.headers });
      });
    });
    req.on("timeout", () => req.destroy(new Error("Request timed out")));
    req.on("error", reject);
  });
}

function postJson(url, obj) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const lib = u.protocol === "http:" ? http : https;
    const data = Buffer.from(JSON.stringify(obj));
    const req = lib.request(u, { method: "POST", timeout: 30000, headers: { "User-Agent": "chatra-launcher", "Content-Type": "application/json", "Content-Length": data.length } }, res => {
      const chunks = [];
      res.on("data", c => chunks.push(c));
      res.on("end", () => {
        const text = Buffer.concat(chunks).toString("utf8");
        if (res.statusCode !== 200) { const e = new Error(`HTTP ${res.statusCode} from ${u.host}`); e.status = res.statusCode; return reject(e); }
        try { resolve(JSON.parse(text)); } catch { reject(new Error("Bad response from server")); }
      });
    });
    req.on("timeout", () => req.destroy(new Error("Request timed out")));
    req.on("error", reject);
    req.end(data);
  });
}

// ── Source: the private code server ──────────────────────────────────────────
// manifest = { version, sha256 (hex of the tarball), signature (base64 Ed25519
// over the sha256 hex string) }. The bundle is only accepted if BOTH match.
const readTrim = f => { try { return fs.readFileSync(f, "utf8").trim(); } catch { return ""; } };

function instanceId() {
  let id = readTrim(INSTANCE_FILE);
  if (!/^[a-f0-9]{32}$/.test(id)) {
    id = crypto.randomBytes(16).toString("hex");
    fs.writeFileSync(INSTANCE_FILE, id);
  }
  return id;
}

// Returns { key, auto }. A key from LICENSE_KEY always wins; otherwise the
// stored one; otherwise this instance registers itself and stores what it gets.
async function ensureLicense({ forceRegister = false } = {}) {
  if (env.LICENSE_KEY) return { key: env.LICENSE_KEY, auto: false };
  const stored = forceRegister ? "" : readTrim(LICENSE_FILE);
  if (stored) return { key: stored, auto: true };
  log("Registering with the update server…");
  let r;
  try { r = await postJson(`${SERVER_URL}/api/register`, { instance: instanceId() }); }
  catch (e) {
    if (e.status === 503) throw new Error("The update server is not accepting new installs right now. Try again later.");
    if (e.status === 429) throw new Error("Too many installs from this address right now. Try again later.");
    throw e;
  }
  if (!r || typeof r.key !== "string" || !r.key) throw new Error("Server did not return a key");
  fs.writeFileSync(LICENSE_FILE, r.key + "\n", { mode: 0o600 });
  return { key: r.key, auto: true };
}

// manifest = { version, sha256 (hex of the tarball), signature (base64 Ed25519
// over the sha256 hex string) }. The bundle is only accepted if BOTH match.
async function getRelease() {
  let lic = await ensureLicense();
  let manifest;
  try {
    manifest = JSON.parse((await request(`${SERVER_URL}/api/code/manifest`, { headers: { Authorization: `Bearer ${lic.key}` }, asBuffer: false })).body);
  } catch (e) {
    // The server forgot our key (e.g. its data was reset): register again, once.
    // A 403 (revoked) is never retried — that must stay final.
    if (e.status === 401 && lic.auto) {
      lic = await ensureLicense({ forceRegister: true });
      manifest = JSON.parse((await request(`${SERVER_URL}/api/code/manifest`, { headers: { Authorization: `Bearer ${lic.key}` }, asBuffer: false })).body);
    } else throw e;
  }
  const h = { Authorization: `Bearer ${lic.key}` };
  return {
    id: String(manifest.version),
    fetchBundle: async () => {
      const buf = (await request(`${SERVER_URL}/api/code/download`, { headers: h })).body;
      const sha = crypto.createHash("sha256").update(buf).digest("hex");
      if (sha !== manifest.sha256) throw new Error("Bundle hash mismatch — refusing to run it");
      const key = crypto.createPublicKey({ key: Buffer.from(PUBLIC_KEY, "base64"), format: "der", type: "spki" });
      const ok = crypto.verify(null, Buffer.from(manifest.sha256), key, Buffer.from(manifest.signature || "", "base64"));
      if (!ok) throw new Error("Bad signature — refusing to run it");
      return buf;
    },
  };
}

// ── install: extract to NEXT, atomically swap into CORE, relink persistent dirs ─
function rmrf(p) { fs.rmSync(p, { recursive: true, force: true }); }

function linkPersistentFiles() {
  for (const name of PERSIST_FILES) {
    const real = path.join(ROOT, name);
    const inCore = path.join(CORE, name);
    if (!fs.existsSync(real)) fs.writeFileSync(real, "");
    rmrf(inCore);
    fs.symlinkSync(real, inCore, "file");
  }
}

function linkPersistent() {
  linkPersistentFiles();
  for (const name of PERSIST) {
    const real = path.join(ROOT, name);
    const inCore = path.join(CORE, name);
    fs.mkdirSync(path.dirname(real), { recursive: true });
    fs.mkdirSync(path.dirname(inCore), { recursive: true });
    if (!fs.existsSync(real)) {
      // first run: seed from the bundle's copy (e.g. default database/ files) if it has one
      if (fs.existsSync(inCore) && !fs.lstatSync(inCore).isSymbolicLink()) fs.renameSync(inCore, real);
      else fs.mkdirSync(real, { recursive: true });
    }
    rmrf(inCore);
    fs.symlinkSync(real, inCore, "dir");
  }
}

async function install(release) {
  const bundle = await release.fetchBundle();
  rmrf(NEXT); fs.mkdirSync(NEXT, { recursive: true });
  const tarPath = path.join(STATE, "bundle.tgz");
  fs.writeFileSync(tarPath, bundle);
  const r = spawnSync("tar", ["-xzf", tarPath, "-C", NEXT, "--strip-components=1"], { stdio: "inherit" });
  fs.rmSync(tarPath, { force: true });
  if (r.status !== 0) throw new Error("tar extraction failed");
  if (!fs.existsSync(path.join(NEXT, MAIN_FILE))) throw new Error(`Bundle has no ${MAIN_FILE}`);

  rmrf(PREV);
  if (fs.existsSync(CORE)) fs.renameSync(CORE, PREV);   // keep last-known-good for rollback
  fs.renameSync(NEXT, CORE);
  linkPersistent();
  fs.writeFileSync(VERSION_FILE, release.id);
  installDepsIfNeeded();
  log("Installed version", release.id.slice(0, 12));
}

function installDepsIfNeeded() {
  const pj = path.join(CORE, "package.json");
  if (!fs.existsSync(pj)) return;
  const hash = crypto.createHash("sha256").update(fs.readFileSync(pj)).digest("hex");
  const old = fs.existsSync(DEPS_FILE) ? fs.readFileSync(DEPS_FILE, "utf8") : "";
  if (hash === old && fs.existsSync(path.join(CORE, "node_modules", ".package-lock.json"))) return;
  log("Dependencies changed — running npm install…");
  const r = spawnSync("npm", ["install", "--omit=dev", "--no-audit", "--no-fund"], { cwd: CORE, stdio: "inherit" });
  if (r.status === 0) fs.writeFileSync(DEPS_FILE, hash);
  else log("npm install failed (child's own dependency check may still recover)");
}

function rollback() {
  if (!fs.existsSync(PREV)) return false;
  log("Rolling back to previous version");
  try { fs.writeFileSync(BAD_FILE, fs.readFileSync(VERSION_FILE, "utf8")); } catch {}
  rmrf(CORE); fs.renameSync(PREV, CORE); linkPersistent();
  fs.writeFileSync(VERSION_FILE, "rolled-back");
  return true;
}

async function ensureUpToDate() {
  const have = fs.existsSync(VERSION_FILE) ? fs.readFileSync(VERSION_FILE, "utf8") : "";
  try {
    const release = await getRelease();
    const bad = fs.existsSync(BAD_FILE) ? fs.readFileSync(BAD_FILE, "utf8") : "";
    if (release.id === bad && fs.existsSync(path.join(CORE, MAIN_FILE))) return false; // known-bad, wait for a fix
    if (release.id !== have || !fs.existsSync(path.join(CORE, MAIN_FILE))) { await install(release); fs.rmSync(BAD_FILE, { force: true }); }
    return release.id !== have;
  } catch (e) {
    log("Update check failed:", e.message);
    // A rejected/revoked license must stop the bot — only network or server
    // trouble is allowed to fall back to the copy already on disk.
    if (e.status === 401 || e.status === 403) throw new Error("The update server refused this instance (license invalid or revoked).");
    if (!fs.existsSync(path.join(CORE, MAIN_FILE))) throw new Error("No local copy and could not fetch one: " + e.message);
    log("Continuing with the copy already on disk.");
    return false;
  }
}

// ── supervisor ───────────────────────────────────────────────────────────────
let child = null, stopping = false, quickCrashes = 0, restartingForUpdate = false;

function start() {
  const startedAt = Date.now();
  child = spawn(process.execPath, [MAIN_FILE], {
    cwd: CORE, stdio: "inherit", env: { ...env, LAUNCHED_BY: "launcher" },
  });
  child.on("exit", async (code, signal) => {
    child = null;
    if (stopping) return process.exit(code || 0);
    const lived = Date.now() - startedAt;
    // Only a real crash counts toward the rollback threshold — not a restart we
    // triggered ourselves (update / /update command exits with code 0).
    quickCrashes = !restartingForUpdate && lived < 20000 && code !== 0 ? quickCrashes + 1 : 0;
    restartingForUpdate = false;
    log(`Child exited (code=${code}, signal=${signal}) after ${Math.round(lived / 1000)}s`);
    if (quickCrashes >= 3) {
      quickCrashes = 0;
      if (!rollback()) { log("Crash loop and nothing to roll back to — exiting."); return process.exit(1); }
    }
    setTimeout(async () => {
      try { await ensureUpToDate(); } catch (e) { log("FATAL:", e.message); return process.exit(1); }
      start();
    }, 3000);
  });
}

for (const sig of ["SIGINT", "SIGTERM"]) {
  process.on(sig, () => { stopping = true; if (child) child.kill(sig); else process.exit(0); });
}

(async () => {
  try { await ensureUpToDate(); } catch (e) { log("FATAL:", e.message); process.exit(1); }
  start();
  // Periodic check: if a new version landed, just restart the child — it comes back on the new code.
  setInterval(async () => {
    try {
      const have = fs.existsSync(VERSION_FILE) ? fs.readFileSync(VERSION_FILE, "utf8") : "";
      const release = await getRelease();
      const bad = fs.existsSync(BAD_FILE) ? fs.readFileSync(BAD_FILE, "utf8") : "";
      if (release.id !== have && release.id !== bad && child) { log("New version found — restarting child."); restartingForUpdate = true; child.kill("SIGTERM"); }
    } catch (e) {
      if (e.status === 401 || e.status === 403) {
        log("The update server refused this instance (license invalid or revoked) — stopping.");
        stopping = true;
        if (child) child.kill("SIGTERM"); else process.exit(1);
      }
    }
  }, CHECK_EVERY_MS).unref();
})();
