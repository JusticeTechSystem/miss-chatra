// plugins/mediasearch.js — Media Search + Download via dlsearch
// Trigger: when user says "dlsearch <query>" WITHOUT the / prefix
"use strict";

const axios  = require("axios");
const config = require("../settings/config");

const DL_BASE = "https://media.cypherxbot.space";

// ── Multiple search sources (tried in order until one works) ──────────────────
const INVIDIOUS_INSTANCES = [
  "https://inv.riverside.rocks",
  "https://invidious.privacyredirect.com",
  "https://vid.puffyan.us",
  "https://y.com.sb",
  "https://invidious.tiekoetter.com",
  "https://invidious.io",
];

async function searchInvidious(query) {
  for (const base of INVIDIOUS_INSTANCES) {
    try {
      const r = await axios.get(`${base}/api/v1/search`, {
        params: { q: query, type: "video", fields: "videoId,title,author,lengthSeconds,viewCount" },
        timeout: 8000,
      });
      if (Array.isArray(r.data) && r.data.length > 0) {
        return r.data.slice(0, 5).map(v => ({
          title:    v.title,
          url:      `https://youtube.com/watch?v=${v.videoId}`,
          videoId:  v.videoId,
          channel:  v.author || "",
          duration: v.lengthSeconds ? formatDuration(v.lengthSeconds) : "",
        }));
      }
    } catch {}
  }
  return null;
}

async function searchYouTubeScrape(query) {
  try {
    const r = await axios.get("https://www.youtube.com/results", {
      params: { search_query: query },
      timeout: 12000,
      headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });
    const html = r.data || "";
    const match = html.match(/var ytInitialData = ({.+?});<\/script>/s)
      || html.match(/ytInitialData\s*=\s*({.+?});\s*(?:var|window|<\/script>)/s);
    if (!match) return null;

    const data = JSON.parse(match[1]);
    const contents = data?.contents?.twoColumnSearchResultsRenderer
      ?.primaryContents?.sectionListRenderer?.contents?.[0]
      ?.itemSectionRenderer?.contents || [];

    const results = [];
    for (const item of contents) {
      const v = item?.videoRenderer;
      if (!v || !v.videoId) continue;
      const title    = v.title?.runs?.[0]?.text || v.title?.simpleText || "Unknown";
      const channel  = v.ownerText?.runs?.[0]?.text || v.shortBylineText?.runs?.[0]?.text || "";
      const duration = v.lengthText?.simpleText || "";
      results.push({ title, channel, duration, videoId: v.videoId, url: `https://youtube.com/watch?v=${v.videoId}` });
      if (results.length >= 5) break;
    }
    return results.length ? results : null;
  } catch { return null; }
}

async function searchYouTubeMobile(query) {
  try {
    const r = await axios.get("https://m.youtube.com/results", {
      params: { search_query: query },
      timeout: 12000,
      headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36" },
    });
    const html = r.data || "";
    const results = [];
    const re = /"videoId"\s*:\s*"([^"]+)"[\s\S]{1,500}?"text"\s*:\s*"([^"]+)"/g;
    const seen = new Set();
    let mat;
    while ((mat = re.exec(html)) !== null && results.length < 5) {
      const [, videoId, title] = mat;
      if (seen.has(videoId) || videoId.length !== 11) continue;
      seen.add(videoId);
      results.push({ videoId, title, url: `https://youtube.com/watch?v=${videoId}`, channel: "", duration: "" });
    }
    return results.length ? results : null;
  } catch { return null; }
}

function formatDuration(secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  if (h) return `${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
  return `${m}:${String(s).padStart(2,"0")}`;
}

async function searchMedia(query) {
  let results = await searchInvidious(query);
  if (!results) results = await searchYouTubeScrape(query);
  if (!results) results = await searchYouTubeMobile(query);
  return results;
}

// ── Simple magic-byte MIME detection ─────────────────────────────────────────
function detectMimeFromBuffer(buf) {
  if (!buf || buf.length < 12) return null;
  const h = buf.slice(0, 12);

  // MP4 / M4A / MOV — ftyp box at offset 4
  if (h[4] === 0x66 && h[5] === 0x74 && h[6] === 0x79 && h[7] === 0x70) {
    const brand = h.slice(8, 12).toString("ascii");
    return /M4A|m4a/.test(brand) ? "audio/mp4" : "video/mp4";
  }
  // MP3 — ID3 tag or sync word
  if ((h[0] === 0x49 && h[1] === 0x44 && h[2] === 0x33) ||
      (h[0] === 0xFF && (h[1] & 0xE0) === 0xE0)) return "audio/mpeg";
  // WebM / MKV
  if (h[0] === 0x1A && h[1] === 0x45 && h[2] === 0xDF && h[3] === 0xA3) return "video/webm";
  // OGG
  if (h[0] === 0x4F && h[1] === 0x67 && h[2] === 0x67 && h[3] === 0x53) return "audio/ogg";
  // AAC / ADTS
  if (h[0] === 0xFF && (h[1] & 0xF6) === 0xF0) return "audio/aac";
  // RIFF / WAV
  if (h[0] === 0x52 && h[1] === 0x49 && h[2] === 0x46 && h[3] === 0x46) return "audio/wav";

  return null;
}

// ── Robust media URL extractor from API JSON ──────────────────────────────────
// Walks JSON tree prioritising video/audio file-extension URLs, then stream/download
// keywords, explicitly excluding thumbnails and image URLs.
function extractMediaUrl(json, preferAudio) {
  const candidates = [];

  function walk(obj, depth) {
    if (depth > 6 || !obj) return;
    if (typeof obj === "string" && /^https?:\/\//i.test(obj)) {
      candidates.push(obj);
      return;
    }
    if (typeof obj === "object") {
      // Priority keys first
      const pri = ["url","download_url","downloadUrl","link","media","stream","audio","video","src","href","file"];
      for (const k of pri) { if (obj[k]) walk(obj[k], depth + 1); }
      for (const [k, v] of Object.entries(obj)) { if (!pri.includes(k)) walk(v, depth + 1); }
    }
  }
  walk(json, 0);

  if (!candidates.length) return null;

  const isThumb   = u => /thumb|thumbnail|preview|poster|image|photo|jpeg|jpg|png|webp|cover|art/i.test(u);
  const videoExts = /\.(mp4|webm|mkv|m4v|mov|avi)(\?|#|$)/i;
  const audioExts = /\.(mp3|m4a|ogg|aac|opus|flac|wav)(\?|#|$)/i;
  const mediaSig  = /video|audio|stream|download|media|file|cdn/i;

  const nonThumb = candidates.filter(u => !isThumb(u));

  if (preferAudio) {
    return nonThumb.find(u => audioExts.test(u))
        || nonThumb.find(u => videoExts.test(u))
        || nonThumb.find(u => mediaSig.test(u))
        || nonThumb[0]
        || candidates[0];
  }
  return nonThumb.find(u => videoExts.test(u))
      || nonThumb.find(u => audioExts.test(u))
      || nonThumb.find(u => mediaSig.test(u))
      || nonThumb[0]
      || candidates[0];
}

// ── Resolve real media binary from the download API ───────────────────────────
async function resolveMedia(endpoint, sourceUrl, preferAudio = false) {
  const r = await axios.get(`${DL_BASE}${endpoint}`, {
    params: { url: sourceUrl },
    timeout: 90000,
    responseType: "arraybuffer",
    maxRedirects: 10,
    validateStatus: s => s < 500,
  });

  const ctype = (r.headers["content-type"] || "").toLowerCase();
  const raw   = Buffer.from(r.data);

  // Case 1: server returned real binary directly
  if ((ctype.includes("video") || ctype.includes("audio") || ctype.includes("octet-stream")) && raw.length > 1024) {
    const magic = detectMimeFromBuffer(raw);
    return { buffer: raw, ctype: magic || ctype };
  }

  // Case 2: also detect by magic bytes even if wrong content-type
  const magicDirect = detectMimeFromBuffer(raw);
  if (magicDirect && raw.length > 10240) {
    return { buffer: raw, ctype: magicDirect };
  }

  // Case 3: parse as JSON and follow the media URL
  const text = raw.toString("utf8");

  // Detect HTML error pages early
  if (/<html[\s>]/i.test(text.slice(0, 500))) {
    throw new Error("Download server returned an error page. The service may be temporarily unavailable.");
  }

  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Server response is not valid JSON or binary media (${ctype}). Got: ${text.slice(0, 120)}`);
  }

  const mediaUrl = extractMediaUrl(json, preferAudio);
  if (!mediaUrl) {
    throw new Error(`API responded but contained no downloadable media URL. Response: ${text.slice(0, 200)}`);
  }

  // Fetch the real media file
  const r2 = await axios.get(mediaUrl, {
    responseType: "arraybuffer",
    timeout: 120000,
    maxRedirects: 10,
    headers: {
      "Referer":    "https://www.youtube.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0",
      "Accept":     "*/*",
    },
    validateStatus: s => s < 500,
  });

  const buf2  = Buffer.from(r2.data);
  const ct2   = (r2.headers["content-type"] || "").toLowerCase();

  if (buf2.length < 1024) {
    throw new Error(`Downloaded file is too small (${buf2.length} bytes). The download link may have expired.`);
  }

  const magic2 = detectMimeFromBuffer(buf2);
  return { buffer: buf2, ctype: magic2 || ct2 || (preferAudio ? "audio/mpeg" : "video/mp4") };
}

// ── Progress bar ──────────────────────────────────────────────────────────────
const bar = p => {
  const w = 20, f = Math.max(0, Math.min(w, Math.round(p / 100 * w)));
  return `[${"█".repeat(f)}${"░".repeat(w - f)}] ${p}%`;
};

function fmtSize(bytes) {
  if (!bytes || bytes <= 0) return "unknown";
  return bytes < 1048576 ? `${(bytes / 1024).toFixed(1)} KB` : `${(bytes / 1048576).toFixed(2)} MB`;
}

// ── Download and send to WhatsApp ─────────────────────────────────────────────
async function doDownload(sock, chat, m, result, type, requester) {
  const endpoint = type === "audio" ? "/download/youtube/audio" : "/download/youtube/videofhd";
  const isAudio  = type === "audio";
  const label    = isAudio ? "🎵 Audio" : "🎬 Video";

  let prog = await sock.sendMessage(chat,
    { text: `⏬ *${label} — ${result.title.slice(0, 40)}*\n\n${bar(0)}\n\n_Starting..._` },
    { quoted: m }
  );

  const upd = async (p, s) => {
    try {
      await sock.sendMessage(chat, {
        text: `⏬ *${label} — ${result.title.slice(0, 40)}*\n\n${bar(p)}\n\n_${s}_`,
        edit: prog?.key,
      });
    } catch {}
  };

  try {
    await upd(15, "Connecting to download server...");
    await new Promise(r => setTimeout(r, 400));
    await upd(30, "Downloading from YouTube...");

    const t0  = Date.now();
    const res = await resolveMedia(endpoint, result.url, isAudio);

    if (!res.buffer || res.buffer.length < 1024) {
      throw new Error("Received empty or corrupt media file.");
    }

    await upd(85, `Processing ${fmtSize(res.buffer.length)}...`);
    await new Promise(r => setTimeout(r, 300));
    await upd(95, "Uploading to WhatsApp...");

    const dlTime   = ((Date.now() - t0) / 1000).toFixed(1);
    const size     = fmtSize(res.buffer.length);
    const isSendAudio = isAudio || (res.ctype && res.ctype.startsWith("audio"));

    const caption = [
      `${isSendAudio ? "🎵" : "▶️"} ${result.title}`,
      `📊 Platform: YouTube`,
      `🎬 Quality: ${isSendAudio ? "Audio" : "≤480p"}`,
      `💾 Size: ${size}`,
      `⏱️ Download Time: ${dlTime}s`,
      `🔗 Source: ${result.url}`,
      `👤 Requested by: ${requester}`,
      ``,
      `_Powered by Miss Chatra_`,
    ].join("\n");

    if (isSendAudio) {
      const audioMime = res.ctype.startsWith("audio") ? res.ctype : "audio/mpeg";
      await sock.sendMessage(chat, {
        audio:    res.buffer,
        mimetype: audioMime,
        ptt:      false,
        caption,
      }, { quoted: m });
    } else {
      // Fetch YouTube thumbnail for video preview card
      let thumb = null;
      try {
        const vidId = result.videoId
          || result.url.match(/(?:v=|youtu\.be\/|shorts\/)([a-zA-Z0-9_-]{11})/)?.[1];
        if (vidId) {
          const tr = await axios.get(`https://img.youtube.com/vi/${vidId}/hqdefault.jpg`,
            { responseType: "arraybuffer", timeout: 8000 });
          if (tr.data?.byteLength > 1000) thumb = Buffer.from(tr.data);
        }
      } catch {}

      const videoMime = res.ctype.startsWith("video") ? res.ctype : "video/mp4";
      const sendOpts  = { video: res.buffer, mimetype: videoMime, caption };
      if (thumb) sendOpts.jpegThumbnail = thumb;
      await sock.sendMessage(chat, sendOpts, { quoted: m });
    }

    await upd(100, "✅ Upload Complete!");
    await new Promise(r => setTimeout(r, 1500));
    try { await sock.sendMessage(chat, { delete: prog?.key }); } catch {}

  } catch (e) {
    const msg = e.code === "ECONNABORTED"
      ? "Timed out — the file may be too large or the server is slow."
      : (e.message || "Unknown error").slice(0, 200);

    try { await sock.sendMessage(chat, { text: `❌ *Download Failed*\n\n${msg}`, edit: prog?.key }); }
    catch { await sock.sendMessage(chat, { text: `❌ ${msg}` }, { quoted: m }); }
  }
}

// ── Pending search sessions ───────────────────────────────────────────────────
global.__MSESS = global.__MSESS || {};
const TTL = 5 * 60 * 1000;
function setSS(k, d) { global.__MSESS[k] = { ...d, ex: Date.now() + TTL }; }
function getSS(k)    { const s = global.__MSESS[k]; if (!s || Date.now() > s.ex) { delete global.__MSESS[k]; return null; } return s; }
function delSS(k)    { delete global.__MSESS[k]; }

// ── Handle numbered replies from search results ───────────────────────────────
const handleSearchReply = async (sock, m, chatId, userId, body) => {
  const sessKey = `search_${chatId}_${userId}`;
  const sess    = getSS(sessKey);
  if (!sess) return false;

  const chat    = chatId || m?.chat;
  const trimmed = (body || "").trim().toLowerCase();

  if (sess.stage === "pick") {
    const n = parseInt(trimmed);
    if (isNaN(n) || n < 1 || n > sess.results.length) return false;
    const result = sess.results[n - 1];
    sess.selected = result;
    sess.stage    = "format";
    setSS(sessKey, sess);
    await sock.sendMessage(chat, {
      text: `🎵 *${result.title}*${result.channel ? `\n📺 ${result.channel}` : ""}${result.duration ? `  [${result.duration}]` : ""}\n\nSelect format:\n  Reply *1* — 🎬 Video/MP4\n  Reply *2* — 🎵 Audio/Play`,
    }, { quoted: m });
    return true;
  }

  if (sess.stage === "format" && (trimmed === "1" || trimmed === "2")) {
    const type   = trimmed === "2" ? "audio" : "video";
    const result = sess.selected;
    delSS(sessKey);
    await doDownload(sock, chat, m, result, type, sess.requester);
    return true;
  }

  return false;
};

// ── Plugin ────────────────────────────────────────────────────────────────────
module.exports = {
  name: "MediaSearch",
  category: "downloader",
  command: ["dlsearch","ytsearch","ytdl","ytplay"],
  handleSearchReply,

  run: async ({ sock, m, command, args, reply, prefix, chatId, userId }) => {
    const chat      = chatId || m?.chat;
    const query     = args.join(" ").trim();
    const requester = m?.pushName || userId?.split("@")[0] || "User";
    const pfx       = prefix || "/";

    if (!query) {
      return reply([
        `🔍 *Media Search*`,
        ``,
        `Search and download any song or video from YouTube.`,
        ``,
        `*Usage:*`,
        `  ${pfx}dlsearch <song title or keywords>`,
        ``,
        `*Examples:*`,
        `  ${pfx}dlsearch Holy Forever`,
        `  ${pfx}dlsearch Burna Boy Last Last`,
        `  ${pfx}dlsearch Afrobeats mix 2024`,
        ``,
        `After searching, reply with a number to select,`,
        `then reply 1 for Video or 2 for Audio.`,
      ].join("\n"));
    }

    await reply(`🔍 Searching YouTube for *"${query}"*...`);
    const results = await searchMedia(query);

    if (!results || results.length === 0) {
      return reply([
        `❌ *No results found for "${query}"*`,
        ``,
        `Tips:`,
        `• Try fewer words: \`Holy Forever CeCe\``,
        `• Add the artist name`,
        `• Try English titles`,
      ].join("\n"));
    }

    const sessKey = `search_${chatId}_${userId}`;
    setSS(sessKey, { results, stage: "pick", requester, query });

    const medals = ["1️⃣","2️⃣","3️⃣","4️⃣","5️⃣"];
    const lines  = [`🎵 *Search Results — "${query}"*\n`];
    results.forEach((r, i) => {
      lines.push(`${medals[i]} *${r.title}*`);
      if (r.channel || r.duration) lines.push(`   ${r.channel ? `📺 ${r.channel}  ` : ""}${r.duration ? `⏱ ${r.duration}` : ""}`.trim());
    });
    lines.push(`\n*Reply 1-${results.length} to select a result.*`);
    lines.push(`_Expires in 5 minutes_`);

    await sock.sendMessage(chat, { text: lines.join("\n") }, { quoted: m });
    return true;
  }
};
