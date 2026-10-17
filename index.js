"use strict";

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const crypto = require("crypto");
const { spawn, spawnSync } = require("child_process");

const ROOT = __dirname;

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
const CRED_FILE = path.join(STATE, "cred");
const BAD_FILE = path.join(STATE, "bad-version");

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
        if (next.host !== u.host) delete h.Authorization;
        return resolve(request(next.href, { headers: h, asBuffer, redirects: redirects - 1 }));
      }
      if (res.statusCode !== 200) { res.resume(); const e = new Error(`Request failed (${res.statusCode})`); e.status = res.statusCode; return reject(e); }
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
        if (res.statusCode !== 200) { const e = new Error(`Request failed (${res.statusCode})`); e.status = res.statusCode; return reject(e); }
        try { resolve(JSON.parse(text)); } catch { reject(new Error("Unexpected response")); }
      });
    });
    req.on("timeout", () => req.destroy(new Error("Request timed out")));
    req.on("error", reject);
    req.end(data);
  });
}

const readTrim = f => { try { return fs.readFileSync(f, "utf8").trim(); } catch { return ""; } };

function instanceId() {
  let id = readTrim(INSTANCE_FILE);
  if (!/^[a-f0-9]{32}$/.test(id)) {
    id = crypto.randomBytes(16).toString("hex");
    fs.writeFileSync(INSTANCE_FILE, id);
  }
  return id;
}

async function ensureCred({ forceRegister = false } = {}) {
  if (env.ACCESS_KEY) return { key: env.ACCESS_KEY, auto: false };
  const stored = forceRegister ? "" : readTrim(CRED_FILE);
  if (stored) return { key: stored, auto: true };
  log("Setting up this install…");
  let r;
  try { r = await postJson(`${SERVER_URL}/api/register`, { instance: instanceId() }); }
  catch (e) {
    if (e.status === 503) throw new Error("New installs are paused right now. Try again later.");
    if (e.status === 429) throw new Error("Too many installs from this address. Try again later.");
    throw e;
  }
  if (!r || typeof r.key !== "string" || !r.key) throw new Error("Setup failed");
  fs.writeFileSync(CRED_FILE, r.key + "\n", { mode: 0o600 });
  return { key: r.key, auto: true };
}

async function getRelease() {
  let cred = await ensureCred();
  let manifest;
  try {
    manifest = JSON.parse((await request(`${SERVER_URL}/api/code/manifest`, { headers: { Authorization: `Bearer ${cred.key}` }, asBuffer: false })).body);
  } catch (e) {

    if (e.status === 401 && cred.auto) {
      cred = await ensureCred({ forceRegister: true });
      manifest = JSON.parse((await request(`${SERVER_URL}/api/code/manifest`, { headers: { Authorization: `Bearer ${cred.key}` }, asBuffer: false })).body);
    } else throw e;
  }
  if (manifest.pending) { const e = new Error("Waiting for approval"); e.pending = true; throw e; }
  const h = { Authorization: `Bearer ${cred.key}` };
  return {
    id: String(manifest.version),
    fetchBundle: async () => {
      const buf = (await request(`${SERVER_URL}/api/code/download`, { headers: h })).body;
      const sha = crypto.createHash("sha256").update(buf).digest("hex");
      if (sha !== manifest.sha256) throw new Error("Download verification failed");
      const key = crypto.createPublicKey({ key: Buffer.from(PUBLIC_KEY, "base64"), format: "der", type: "spki" });
      const ok = crypto.verify(null, Buffer.from(manifest.sha256), key, Buffer.from(manifest.signature || "", "base64"));
      if (!ok) throw new Error("Download verification failed");
      return buf;
    },
  };
}

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
  if (r.status !== 0) throw new Error("Extraction failed");
  if (!fs.existsSync(path.join(NEXT, MAIN_FILE))) throw new Error("Download incomplete");

  rmrf(PREV);
  if (fs.existsSync(CORE)) fs.renameSync(CORE, PREV);
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
  log("Installing dependencies…");
  const r = spawnSync("npm", ["install", "--omit=dev", "--no-audit", "--no-fund"], { cwd: CORE, stdio: "inherit" });
  if (r.status === 0) fs.writeFileSync(DEPS_FILE, hash);
  else log("Dependency install did not finish; the bot will retry on its own.");
}

function rollback() {
  if (!fs.existsSync(PREV)) return false;
  log("Restoring the previous version");
  try { fs.writeFileSync(BAD_FILE, fs.readFileSync(VERSION_FILE, "utf8")); } catch {}
  rmrf(CORE); fs.renameSync(PREV, CORE); linkPersistent();
  fs.writeFileSync(VERSION_FILE, "rolled-back");
  return true;
}

let waitingLogged = false;

async function ensureUpToDate() {
  const have = fs.existsSync(VERSION_FILE) ? fs.readFileSync(VERSION_FILE, "utf8") : "";
  try {
    const release = await getRelease();
    const bad = fs.existsSync(BAD_FILE) ? fs.readFileSync(BAD_FILE, "utf8") : "";
    if (release.id === bad && fs.existsSync(path.join(CORE, MAIN_FILE))) return false;
    if (release.id !== have || !fs.existsSync(path.join(CORE, MAIN_FILE))) { await install(release); fs.rmSync(BAD_FILE, { force: true }); }
    return release.id !== have;
  } catch (e) {
    if (e.pending) {
      if (fs.existsSync(path.join(CORE, MAIN_FILE))) return false;
      if (!waitingLogged) { log("Waiting for approval — this will start automatically once approved."); waitingLogged = true; }
      await new Promise(r => setTimeout(r, (parseFloat(env.WAIT_SEC) || 60) * 1000));
      return ensureUpToDate();
    }
    log("Update check failed:", e.message);

    if (e.status === 401 || e.status === 403) throw new Error("This install is not permitted to run.");
    if (!fs.existsSync(path.join(CORE, MAIN_FILE))) throw new Error("No local copy and could not fetch one: " + e.message);
    log("Continuing with the copy already on disk.");
    return false;
  }
}

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

    quickCrashes = !restartingForUpdate && lived < 20000 && code !== 0 ? quickCrashes + 1 : 0;
    restartingForUpdate = false;
    log(`Bot exited (code=${code}, signal=${signal}) after ${Math.round(lived / 1000)}s`);
    if (quickCrashes >= 3) {
      quickCrashes = 0;
      if (!rollback()) { log("The bot keeps crashing and there is no earlier version to restore. Exiting."); return process.exit(1); }
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

  setInterval(async () => {
    try {
      const have = fs.existsSync(VERSION_FILE) ? fs.readFileSync(VERSION_FILE, "utf8") : "";
      const release = await getRelease();
      const bad = fs.existsSync(BAD_FILE) ? fs.readFileSync(BAD_FILE, "utf8") : "";
      if (release.id !== have && release.id !== bad && child) { log("New version found — restarting."); restartingForUpdate = true; child.kill("SIGTERM"); }
    } catch (e) {
      if (e.status === 401 || e.status === 403) {
        log("This install is not permitted to run — stopping.");
        stopping = true;
        if (child) child.kill("SIGTERM"); else process.exit(1);
      }
    }
  }, CHECK_EVERY_MS).unref();
})();
