// plugins/downloader.js — Miss Chatra Media Downloader (v2 — fixed)
// Mirrors the Telegram bot's mc_resolve() with full fallback chain.
"use strict";

const axios  = require("axios");
const { gsGet, gsSet } = require("../library/db");
const { getState, saveState } = require("../library/state");

// ── API bases (mirrors Telegram shared.py exactly) ────────────────────────────
const MC_BASE  = "https://media.cypherxbot.space";
const PREXZY   = "https://apis.prexzyvilla.site";

const MC_APIS = {
  youtube_video:  `${MC_BASE}/download/youtube/video`,
  youtube_audio:  `${MC_BASE}/download/youtube/audio`,
  instagram:      `${MC_BASE}/download/instagram/video`,
  tiktok:         `${MC_BASE}/download/tiktok/video`,
  facebook:       `${MC_BASE}/download/facebook/video`,
  twitter:        `${PREXZY}/download/twitter`,
  spotify:        `${PREXZY}/download/spotify`,
};

// Fallback chains per platform (mirrors mc_resolve fallbacks in TG)
const FALLBACKS = {
  YouTube:   { video: [`${PREXZY}/download/youtube?type=video`],
               audio: [`${PREXZY}/download/youtube?type=audio`] },
  Instagram: { video: [`${PREXZY}/download/ig2`] },
  TikTok:    { video: [`${PREXZY}/download/tiktok`] },
  Facebook:  { video: [`${PREXZY}/download/facebook`] },
  Twitter:   { video: [`${PREXZY}/download/twitter`] },
  Spotify:   { audio: [`${PREXZY}/download/spotifyV2`] },
  SoundCloud:{ audio: [`${PREXZY}/download/soundcloud`] },
};

// ── Platform definitions ──────────────────────────────────────────────────────
const PLATFORMS = [
  { name:"YouTube",    emoji:"▶️",  pattern:/(?:youtube\.com\/(?:watch|shorts|live)|youtu\.be\/)/i, audioKey:"youtube_audio", videoKey:"youtube_video" },
  { name:"TikTok",     emoji:"🎵",  pattern:/(?:tiktok\.com|vm\.tiktok\.com)\//i,                   audioKey:null,            videoKey:"tiktok" },
  { name:"Instagram",  emoji:"📸",  pattern:/(?:instagram\.com|instagr\.am)\/(?:p|reel|tv|stories)\//i, audioKey:null,        videoKey:"instagram" },
  { name:"Facebook",   emoji:"📘",  pattern:/(?:facebook\.com|fb\.watch)\//i,                        audioKey:null,            videoKey:"facebook" },
  { name:"Twitter",    emoji:"🐦",  pattern:/(?:twitter\.com|x\.com)\/\w+\/status\//i,               audioKey:null,            videoKey:"twitter" },
  { name:"Spotify",    emoji:"🎧",  pattern:/open\.spotify\.com\//i,                                  audioKey:"spotify",       videoKey:null },
  { name:"SoundCloud", emoji:"🔊",  pattern:/soundcloud\.com\//i,                                     audioKey:"soundcloud",    videoKey:null },
];

const MEDIA_PATTERN = /(?:youtube\.com\/(?:watch|shorts|live)|youtu\.be\/|tiktok\.com\/|vm\.tiktok\.com\/|instagram\.com\/(?:p|reel|tv|stories)\/|(?:facebook\.com|fb\.watch)\/|(?:twitter\.com|x\.com)\/\w+\/status\/|open\.spotify\.com\/|soundcloud\.com\/)/i;

function extractUrl(text) {
  const m = (text || "").match(/https?:\/\/[^\s>"']+/i);
  return m ? m[0].replace(/[<>\s"']+$/, "") : null;
}
function detectPlatform(text) {
  const url = extractUrl(text);
  if (!url) return null;
  for (const p of PLATFORMS) { if (p.pattern.test(url)) return { ...p, url }; }
  return null;
}
function isMediaLink(text) { return MEDIA_PATTERN.test(text || ""); }
function fmtSize(b) {
  if (!b || b <= 0) return "unknown";
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1024 / 1024).toFixed(2)} MB`;
}
function bar(pct) {
  const w = 20, f = Math.max(0, Math.min(w, Math.round(pct / 100 * w)));
  return `[${"█".repeat(f)}${"░".repeat(w - f)}] ${pct}%`;
}
function isDlEnabled(chatId) {
  if ((chatId || "").endsWith("@g.us")) return gsGet(chatId).dl_enabled !== 0;
  return getState().dl_dm_enabled !== false;
}

// ── Magic-byte MIME detection ─────────────────────────────────────────────────
function detectMime(buf) {
  if (!buf || buf.length < 12) return null;
  const h = buf.slice(0, 12);
  if (h[4] === 0x66 && h[5] === 0x74 && h[6] === 0x79 && h[7] === 0x70) {
    const brand = h.slice(8, 12).toString("ascii");
    return /M4A|m4a/.test(brand) ? "audio/mp4" : "video/mp4";
  }
  if ((h[0] === 0x49 && h[1] === 0x44 && h[2] === 0x33) || (h[0] === 0xFF && (h[1] & 0xE0) === 0xE0)) return "audio/mpeg";
  if (h[0] === 0x1A && h[1] === 0x45 && h[2] === 0xDF && h[3] === 0xA3) return "video/webm";
  if (h[0] === 0x4F && h[1] === 0x67 && h[2] === 0x67 && h[3] === 0x53) return "audio/ogg";
  if (h[0] === 0xFF && (h[1] & 0xF6) === 0xF0) return "audio/aac";
  if (h[0] === 0x52 && h[1] === 0x49 && h[2] === 0x46 && h[3] === 0x46) return "audio/wav";
  return null;
}

// ── Deep JSON URL extractor (mirrors Telegram's extractMediaUrl) ──────────────
function extractMediaUrl(json, preferAudio) {
  const candidates = [];
  function walk(obj, d) {
    if (d > 7 || !obj) return;
    if (typeof obj === "string" && /^https?:\/\//i.test(obj)) { candidates.push(obj); return; }
    if (typeof obj === "object") {
      const pri = ["url","download_url","downloadUrl","audio_url","video_url","hd_url","mp4_url","media_url","link","media","stream","audio","video","src","href","file","file_url"];
      for (const k of pri) { if (obj[k]) walk(obj[k], d + 1); }
      for (const [k, v] of Object.entries(obj)) { if (!pri.includes(k)) walk(v, d + 1); }
    }
    if (Array.isArray(obj)) { for (const v of obj) walk(v, d + 1); }
  }
  // Handle Twitter-style videos array
  if (json?.videos && Array.isArray(json.videos)) {
    const vid = json.videos.find(v => v.url) || json.videos[0];
    if (vid?.url) return vid.url;
  }
  walk(json, 0);
  const isThumb   = u => /thumb|thumbnail|preview|poster|image|photo|jpeg|jpg|png|webp|cover|art/i.test(u);
  const videoExts = /\.(mp4|webm|mkv|m4v|mov|avi)(\?|#|$)/i;
  const audioExts = /\.(mp3|m4a|ogg|aac|opus|flac|wav)(\?|#|$)/i;
  const mediaSig  = /video|audio|stream|download|media|file|cdn/i;
  const nonThumb  = candidates.filter(u => !isThumb(u));
  if (preferAudio) {
    return nonThumb.find(u => audioExts.test(u)) || nonThumb.find(u => videoExts.test(u)) || nonThumb.find(u => mediaSig.test(u)) || nonThumb[0] || candidates[0];
  }
  return nonThumb.find(u => videoExts.test(u)) || nonThumb.find(u => audioExts.test(u)) || nonThumb.find(u => mediaSig.test(u)) || nonThumb[0] || candidates[0];
}

// ── Core resolver — mirrors Telegram mc_resolve() ─────────────────────────────
async function resolveDownloadUrl(platform, sourceUrl, type = "video") {
  const preferAudio = type === "audio";
  const platName    = platform.name;

  // Pick primary API key
  const apiKey = preferAudio ? platform.audioKey : platform.videoKey;
  if (!apiKey) throw new Error(`${platName} doesn't support ${type} download.`);

  const endpoint = MC_APIS[apiKey];
  if (!endpoint) throw new Error(`No endpoint configured for ${apiKey}`);

  let dlUrl = null, title = null, meta = {};

  // ── Try primary endpoint ──────────────────────────────────────────────────
  try {
    const r = await axios.get(endpoint, {
      params: { url: sourceUrl },
      timeout: 60000,
      responseType: "arraybuffer",
      validateStatus: s => s < 500,
    });
    const ctype = (r.headers["content-type"] || "").toLowerCase();
    const raw   = Buffer.from(r.data);

    // Direct binary
    if ((ctype.includes("video") || ctype.includes("audio") || ctype.includes("octet-stream")) && raw.length > 10240) {
      const mime = detectMime(raw) || ctype;
      return { buffer: raw, mime, title, source: "primary", ...meta };
    }

    // JSON response
    const text = raw.toString("utf8");
    if (!/<html[\s>]/i.test(text.slice(0, 500))) {
      try {
        const json = JSON.parse(text);
        // Handle nested result/data wrappers (mirrors TG logic)
        let res = json;
        if (json?.result && typeof json.result === "object") res = json.result;
        else if (json?.data   && typeof json.data   === "object") res = json.data;
        title  = res?.title || res?.name || null;
        // Extract stats fields
        meta.views    = res?.views    || res?.view_count    || res?.viewCount    || res?.play_count   || null;
        meta.likes    = res?.likes    || res?.like_count    || res?.likeCount    || res?.diggs        || null;
        meta.shares   = res?.shares   || res?.share_count   || res?.shareCount   || res?.repost_count || null;
        meta.comments = res?.comments || res?.comment_count || res?.commentCount || null;
        meta.reposts  = res?.reposts  || res?.repost_count  || res?.repostCount  || null;
        meta.quality  = res?.quality  || res?.resolution    || null;
        // Twitter videos array
        if (platName === "Twitter" && res?.videos?.length) {
          dlUrl = res.videos[0]?.url || null;
        } else if (type === "video") {
          dlUrl = res?.download_url || res?.video_url || res?.hd_url || res?.mp4_url || res?.url || res?.file_url || res?.media_url;
        } else {
          dlUrl = res?.download_url || res?.audio_url || res?.url || res?.file_url || res?.media_url || res?.hd_url || res?.mp4_url;
        }
        // Deep scan if simple keys didn't work
        if (!dlUrl) dlUrl = extractMediaUrl(json, preferAudio);
      } catch {
        // Not JSON — ignore
      }
    }
  } catch (e) {
    console.error(`[DL] Primary endpoint failed for ${platName}: ${e.message}`);
  }

  // ── Fallback chain (mirrors Telegram mc_resolve fallbacks) ────────────────
  if (!dlUrl) {
    const fallbackList = (FALLBACKS[platName] || {})[preferAudio ? "audio" : "video"] || [];
    for (const fbBase of fallbackList) {
      try {
        const fbUrl = `${fbBase}?url=${encodeURIComponent(sourceUrl)}`;
        const r2 = await axios.get(fbUrl, {
          timeout: 60000,
          responseType: "arraybuffer",
          validateStatus: s => s < 500,
        });
        const ctype2 = (r2.headers["content-type"] || "").toLowerCase();
        const raw2   = Buffer.from(r2.data);
        if ((ctype2.includes("video") || ctype2.includes("audio") || ctype2.includes("octet-stream")) && raw2.length > 10240) {
          const mime = detectMime(raw2) || ctype2;
          return { buffer: raw2, mime, title, source: "fallback" };
        }
        try {
          const txt2 = raw2.toString("utf8");
          const json2 = JSON.parse(txt2);
          let res2 = json2?.result || json2?.data || json2;
          if (typeof res2 === "object") {
            const fUrl = res2?.download_url || res2?.url || res2?.video_url || res2?.audio_url || res2?.media_url;
            if (fUrl) { dlUrl = fUrl; if (res2?.title || res2?.name) title = res2.title || res2.name; break; }
          }
          const deep = extractMediaUrl(json2, preferAudio);
          if (deep) { dlUrl = deep; break; }
        } catch {}
      } catch (fe) {
        console.error(`[DL] Fallback ${fbBase} failed: ${fe.message}`);
      }
    }
  }

  if (!dlUrl) throw new Error(`Could not resolve ${type} URL for ${platName}. The service may be temporarily unavailable.`);

  // ── Fetch the resolved URL ────────────────────────────────────────────────
  const r3 = await axios.get(dlUrl, {
    responseType: "arraybuffer",
    timeout: 120000,
    maxRedirects: 10,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0",
      "Referer":    "https://www.youtube.com/",
      "Accept":     "*/*",
    },
    validateStatus: s => s < 500,
  });
  const buf3 = Buffer.from(r3.data);
  if (buf3.length < 1024) throw new Error(`Downloaded file is too small (${buf3.length} bytes). Link may have expired.`);
  const mime3 = detectMime(buf3) || (r3.headers["content-type"] || "").toLowerCase() || (preferAudio ? "audio/mpeg" : "video/mp4");
  return { buffer: buf3, mime: mime3, title, source: "resolved", ...meta };
}

// ── Download + send ───────────────────────────────────────────────────────────
async function doDownload(sock, chat, m, sourceUrl, type, platform, requester, preThumb = null) {
  let prog = await sock.sendMessage(chat,
    { text: `⏬ *${platform.emoji} ${platform.name} — ${type === "audio" ? "Audio" : "Video"}*\n\n${bar(0)}\n\n_Starting..._` },
    { quoted: m }
  );

  const upd = async (pct, status) => {
    try { await sock.sendMessage(chat, { text: `⏬ *${platform.emoji} ${platform.name} — ${type === "audio" ? "Audio" : "Video"}*\n\n${bar(pct)}\n\n_${status}_`, edit: prog?.key }); } catch {}
  };

  try {
    await upd(15, "Connecting to server...");
    await new Promise(r => setTimeout(r, 300));
    await upd(30, "Downloading from source...");

    const t0  = Date.now();
    const res = await resolveDownloadUrl(platform, sourceUrl, type);

    await upd(80, `Processing ${fmtSize(res.buffer.length)}...`);
    await new Promise(r => setTimeout(r, 300));
    await upd(95, "Uploading to WhatsApp...");

    const dlTime  = ((Date.now() - t0) / 1000).toFixed(1);
    const size    = fmtSize(res.buffer.length);
    const isAudio = type === "audio" || (res.mime && res.mime.startsWith("audio"));

    // Build TG-style caption (mirrors Chatra TG downloader format)
    const sep    = "─".repeat(32);
    const views  = res.views   ? Number(res.views).toLocaleString()   : null;
    const likes  = res.likes   ? Number(res.likes).toLocaleString()   : null;
    const shares = res.shares  ? Number(res.shares).toLocaleString()  : null;
    const comms  = res.comments? Number(res.comments).toLocaleString(): null;
    const reposts= res.reposts ? Number(res.reposts).toLocaleString() : null;
    const qual   = res.quality || (isAudio ? "Best Quality" : "HD");
    const byUser = requester || "User";

    const statsLine = [
      views   ? `👁️ Views: ${views}`     : null,
      likes   ? `❤️ Likes: ${likes}`     : null,
      shares  ? `🔁 Shared: ${shares}`   : null,
      comms   ? `💬 Comments: ${comms}`  : null,
      reposts ? `🔂 Reposts: ${reposts}` : null,
    ].filter(Boolean);

    const captionLines = [
      `${isAudio ? "🎵" : "🎬"} *${res.title || platform.name}*`,
      sep,
      `📱 *Platform:* ${platform.name}`,
      `📂 *Type:* ${isAudio ? "Audio" : "Video"}`,
      `🎧 *Quality:* ${qual}`,
      `💾 *Size:* ${size}`,
      `🔗 *Source:* ${sourceUrl}`,
      `👤 *By:* ${byUser}`,
      statsLine.length ? sep : null,
      statsLine.length ? statsLine.join(" | ") : null,
      sep,
      `🚀 Powered by JusticeTech`,
    ].filter(v => v !== null).join("\n");
    const caption = captionLines;

    if (isAudio) {
      // Send as document so caption appears inline with the audio file
      const ext   = res.mime?.includes("ogg") ? "ogg" : "mp3";
      const fname = (res.title || "audio").replace(/[^a-zA-Z0-9 _-]/g,"").trim().slice(0,40) + "." + ext;
      let sent = false;
      // Try document format first — shows caption inline
      try {
        await sock.sendMessage(chat, {
          document: res.buffer,
          mimetype: res.mime?.startsWith("audio") ? res.mime : "audio/mpeg",
          fileName: fname,
          caption,
        }, { quoted: m });
        sent = true;
      } catch {}
      // Fallback: audio + separate caption
      if (!sent) {
        try {
          await sock.sendMessage(chat, { audio: res.buffer, mimetype: res.mime?.startsWith("audio") ? res.mime : "audio/mpeg", ptt: false }, { quoted: m });
        } catch {}
        await sock.sendMessage(chat, { text: caption, linkPreview: false }, { quoted: m });
      }
    } else {
      // Fetch YouTube thumbnail as fallback
      let vidThumb = preThumb || null;
      if (!vidThumb && platform.name === "YouTube") {
        try {
          const vidId = sourceUrl.match(/(?:v=|youtu\.be\/|shorts\/|live\/)([a-zA-Z0-9_-]{11})/)?.[1];
          if (vidId) {
            const tr = await axios.get(`https://img.youtube.com/vi/${vidId}/hqdefault.jpg`, { responseType: "arraybuffer", timeout: 6000 });
            if (tr.data?.byteLength > 1000) vidThumb = Buffer.from(tr.data);
          }
        } catch {}
      }
      const sendOpts = { video: res.buffer, mimetype: "video/mp4", caption };
      if (vidThumb) sendOpts.jpegThumbnail = vidThumb;
      await sock.sendMessage(chat, sendOpts, { quoted: m });
    }

    await upd(100, "✅ Upload Complete!");
    await new Promise(r => setTimeout(r, 1500));
    try { await sock.sendMessage(chat, { delete: prog?.key }); } catch {}

  } catch (e) {
    const msg = e.code === "ECONNABORTED" ? "Timed out — file may be too large."
      : (e.message || "Unknown error").slice(0, 200);
    try { await sock.sendMessage(chat, { text: `❌ *Download Failed*\n\n${msg}`, edit: prog?.key }); }
    catch { await sock.sendMessage(chat, { text: `❌ ${msg}` }, { quoted: m }); }
  }
}

// ── Pending sessions ──────────────────────────────────────────────────────────
global.__DL_SESS = global.__DL_SESS || {};
const TTL = 5 * 60 * 1000;
function setSess(k, d) { global.__DL_SESS[k] = { ...d, ex: Date.now() + TTL }; }
function getSess(k)    { const s = global.__DL_SESS[k]; if (!s || Date.now() > s.ex) { delete global.__DL_SESS[k]; return null; } return s; }
function delSess(k)    { delete global.__DL_SESS[k]; }

// ── Auto-detect (called from message.js) ─────────────────────────────────────
const handleMediaLink = async (sock, m, chatId, userId, body, { isOwner = false, isDev = false } = {}) => {
  const platform = detectPlatform(body || "");
  if (!platform) return false;

  const chat      = chatId || m?.chat;
  const enabled   = isDlEnabled(chatId);
  const requester = m?.pushName || userId?.split("@")[0] || "User";

  if (!enabled && !isOwner && !isDev) {
    const isGrpChat = (chat || "").endsWith("@g.us");
    if (isGrpChat) {
      try { await sock.sendMessage(chat, { delete: m.key }); } catch {}
      try {
        const notice = await sock.sendMessage(chat, { text: `⚠️ @${userId?.split("@")[0]} — The media downloader is currently disabled in this group.`, mentions: [userId] });
        setTimeout(async () => { try { await sock.sendMessage(chat, { delete: notice?.key }); } catch {} }, 10000);
      } catch {}
    } else {
      await sock.sendMessage(chat, { text: `⚠️ *Media Downloader is disabled.*\n\nUse /dlon to enable it.` }, { quoted: m });
    }
    return true;
  }

  const hasAudio = !!platform.audioKey;
  const hasVideo = !!platform.videoKey;
  const sessKey  = `${chatId}_${userId}`;

  // Fetch thumbnail for detection card
  let thumbBuf = null;
  try {
    const ctx = m?.message?.extendedTextMessage?.contextInfo;
    if (ctx?.thumbnail) thumbBuf = Buffer.from(ctx.thumbnail, "base64");
    else if (ctx?.thumbnailUrl) {
      const tr = await axios.get(ctx.thumbnailUrl, { responseType: "arraybuffer", timeout: 6000 });
      if (tr.data?.byteLength > 500) thumbBuf = Buffer.from(tr.data);
    }
  } catch {}
  if (!thumbBuf && platform.name === "YouTube") {
    try {
      const vidId = platform.url.match(/(?:v=|youtu\.be\/|shorts\/|live\/)([a-zA-Z0-9_-]{11})/)?.[1];
      if (vidId) {
        const tr = await axios.get(`https://img.youtube.com/vi/${vidId}/hqdefault.jpg`, { responseType: "arraybuffer", timeout: 6000 });
        if (tr.data?.byteLength > 1000) thumbBuf = Buffer.from(tr.data);
      }
    } catch {}
  }

  setSess(sessKey, { url: platform.url, platform, requester, userId, thumbBuf });

  const choices = [];
  if (hasVideo) choices.push(`  Reply *1* — 🎬 Video/MP4`);
  if (hasAudio) choices.push(`  Reply *2* — 🎵 Audio`);

  const caption = [
    `${platform.emoji} *${platform.name} Link Detected*`,
    ``,
    `Ready to download this ${!hasVideo ? "audio" : "video"} content`,
    ``,
    `*Select download format:*`,
    ...choices,
    ``,
    `_Reply expires in 5 minutes_`,
  ].join("\n");

  let sent = false;
  if (thumbBuf) {
    try { await sock.sendMessage(chat, { image: thumbBuf, caption }); sent = true; } catch {}
  }
  if (!sent) {
    try { await sock.sendMessage(chat, { text: caption }); } catch (e) {
      console.error("[DL_DETECT]", e.message);
    }
  }
  return true;
};

// ── Number reply handler ──────────────────────────────────────────────────────
const handleReply = async (sock, m, chatId, userId, body) => {
  const trimmed = (body || "").trim();
  if (trimmed !== "1" && trimmed !== "2") return false;
  const sessKey = `${chatId}_${userId}`;
  const sess    = getSess(sessKey);
  if (!sess) return false;
  delSess(sessKey);
  const chat     = chatId || m?.chat;
  const isVideo  = trimmed === "1";
  const type     = isVideo ? "video" : "audio";
  const hasType  = isVideo ? !!sess.platform.videoKey : !!sess.platform.audioKey;
  if (!hasType) {
    await sock.sendMessage(chat, { text: `❌ ${sess.platform.name} doesn't support ${type} download.` }, { quoted: m });
    return true;
  }
  await doDownload(sock, chat, m, sess.url, type, sess.platform, sess.requester, sess.thumbBuf);
  return true;
};

// ── Plugin export ─────────────────────────────────────────────────────────────
module.exports = {
  name: "Downloader",
  category: "downloader",
  command: ["dl","download","yt","ytaudio","ytvideo","tiktok","ig","instagram","fb","facebook","twitter","spotify","soundcloud","dlon","dloff","dlstatus"],
  handleMediaLink,
  handleReply,
  isMediaLink,

  run: async ({ sock, m, command, args, reply, prefix, chatId, userId, isOwner, isDev, isAdmin }) => {
    const chat  = chatId || m?.chat;
    const name  = m?.pushName || userId?.split("@")[0] || "User";
    const pfx   = prefix || "/";
    const isGrp = (chat || "").endsWith("@g.us");

    // ── Toggle ──────────────────────────────────────────────────────────────
    if (["dlon","dloff","dlstatus"].includes(command)) {
      if (!isOwner && !isDev && !isAdmin) return reply("🔒 This command is restricted to group administrators and bot owners.");
      if (command === "dlstatus") {
        return reply(`📥 *Downloader Status*\n\n${isGrp ? "Group" : "DM"}: ${isDlEnabled(chat) ? "✅ Enabled" : "❌ Disabled"}\n\n${pfx}dlon — enable\n${pfx}dloff — disable`);
      }
      const on = command === "dlon";
      if (isGrp) gsSet(chat, { dl_enabled: on ? 1 : 0 });
      else { const s = getState(); s.dl_dm_enabled = on; saveState(); }
      return reply(`✅ Media downloader ${on ? "enabled ✅" : "disabled ❌"} in this ${isGrp ? "group" : "DM"}.`);
    }

    const HELP = [
      `📥 *Miss Chatra Downloader*`, ``,
      `Paste any media link — auto-detected!`, ``,
      `*Supported:* YouTube • TikTok • Instagram`,
      `Facebook • Twitter/X • Spotify • SoundCloud`, ``,
      `*Commands:*`,
      `${pfx}yt <url>         — YouTube video`,
      `${pfx}ytaudio <url>    — YouTube audio`,
      `${pfx}tiktok <url>     — TikTok video`,
      `${pfx}ig <url>         — Instagram`,
      `${pfx}fb <url>         — Facebook`,
      `${pfx}twitter <url>    — Twitter/X`,
      `${pfx}spotify <url>    — Spotify audio`,
      `${pfx}soundcloud <url> — SoundCloud audio`, ``,
      `*Admin:* ${pfx}dlon • ${pfx}dloff • ${pfx}dlstatus`,
    ].join("\n");

    const urlArg = args.find(a => a?.startsWith("http")) || args[0];
    if (!urlArg?.startsWith("http")) return reply(HELP);

    const MAP = {
      yt:["YouTube","video"], ytaudio:["YouTube","audio"], ytvideo:["YouTube","video"],
      tiktok:["TikTok","video"], ig:["Instagram","video"], instagram:["Instagram","video"],
      fb:["Facebook","video"], facebook:["Facebook","video"],
      twitter:["Twitter","video"], spotify:["Spotify","audio"],
      soundcloud:["SoundCloud","audio"],
      dl:null, download:null,
    };

    let pName, type;
    if (command === "download" || command === "dl") {
      const typeArg = (args[0] || "").toLowerCase();
      type  = typeArg === "audio" ? "audio" : "video";
      const detected = detectPlatform(urlArg);
      pName = detected?.name || "YouTube";
    } else {
      [pName, type] = MAP[command] || ["YouTube","video"];
    }

    const p = PLATFORMS.find(x => x.name === pName) || PLATFORMS[0];
    return doDownload(sock, chat, m, urlArg, type, { ...p, url: urlArg }, name);
  }
};
