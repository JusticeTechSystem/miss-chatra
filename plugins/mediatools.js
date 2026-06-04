// plugins/mediatools.js — Miss Chatra Media Tools
// viewonce, getdp, profileinfo, img2url, video2gif, video2mp3,
// compress, file2link, mutevideo, lyrics
"use strict";

const axios        = require("axios");
const fs           = require("fs");
const path         = require("path");
const { spawn }    = require("child_process");
const { downloadContentFromMessage } = require("@whiskeysockets/baileys");

const TMP = path.join(__dirname, "..", "database", "tmp");
if (!fs.existsSync(TMP)) fs.mkdirSync(TMP, { recursive: true });

// ── Helpers ───────────────────────────────────────────────────────────────────
function tmpFile(ext) {
  return path.join(TMP, `mt_${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`);
}

function cleanup(...files) {
  for (const f of files) { try { if (f && fs.existsSync(f)) fs.unlinkSync(f); } catch {} }
}

function fmtSize(bytes) {
  if (!bytes) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(2)} MB`;
}

// Download media from a quoted/replied message
async function downloadQuotedMedia(sock, m) {
  const q = m.quoted;
  if (!q) return null;
  try {
    // Determine content type
    const mtype = q.mtype || "";
    let contentType = mtype.replace("Message", "");
    if (!contentType || contentType === "viewOnce" || contentType === "viewOnceV2") {
      // Unwrap viewOnce
      const inner = q.message?.viewOnceMessage?.message
        || q.message?.viewOnceMessageV2?.message
        || q;
      const innerType = Object.keys(inner || {}).find(k => k !== "senderKeyDistributionMessage" && k.endsWith("Message"));
      contentType = innerType ? innerType.replace("Message", "") : "image";
    }
    const stream = await downloadContentFromMessage(q, contentType);
    let buf = Buffer.from([]);
    for await (const chunk of stream) buf = Buffer.concat([buf, chunk]);
    return { buffer: buf, mtype: contentType, mimetype: q.mimetype || "" };
  } catch {
    // fallback via sock helper
    try {
      const buf = await sock.downloadMediaMessage(q);
      return { buffer: buf, mtype: (q.mtype || "image").replace("Message",""), mimetype: q.mimetype || "" };
    } catch { return null; }
  }
}

// Run ffmpeg and return output buffer
function ffmpeg(args, inputBuf, inputExt) {
  return new Promise((resolve, reject) => {
    const inFile  = tmpFile(inputExt);
    const outExt  = args[args.indexOf("-f") + 1] || "mp4";
    const outFile = tmpFile(outExt === "gif" ? "gif" : outExt === "mp3" ? "mp3" : "mp4");

    fs.writeFileSync(inFile, inputBuf);

    const finalArgs = args.map(a => a === "__INPUT__" ? inFile : a === "__OUTPUT__" ? outFile : a);
    const proc = spawn("ffmpeg", ["-y", "-i", inFile, ...finalArgs.filter(a => a !== "__INPUT__"), outFile]);

    let stderr = "";
    proc.stderr.on("data", d => { stderr += d.toString(); });
    proc.on("close", code => {
      cleanup(inFile);
      if (code !== 0) { cleanup(outFile); return reject(new Error(`ffmpeg error: ${stderr.slice(-300)}`)); }
      try {
        const out = fs.readFileSync(outFile);
        cleanup(outFile);
        resolve(out);
      } catch (e) { reject(e); }
    });
    proc.on("error", e => { cleanup(inFile, outFile); reject(e); });
  });
}

// Upload buffer to a free file hosting service and return public URL
async function uploadToHost(buf, filename, mime) {
  // Try 0x0.st (simple, no auth needed)
  try {
    const FormData = require("form-data");
    const form = new FormData();
    form.append("file", buf, { filename: filename || "file", contentType: mime || "application/octet-stream" });
    const r = await axios.post("https://0x0.st", form, {
      headers: form.getHeaders(),
      timeout: 60000,
      maxContentLength: 200 * 1024 * 1024,
    });
    const url = (r.data || "").toString().trim();
    if (url.startsWith("http")) return url;
  } catch {}

  // Try transfer.sh
  try {
    const fname = filename || "file.bin";
    const r = await axios.put(`https://transfer.sh/${encodeURIComponent(fname)}`, buf, {
      headers: { "Content-Type": mime || "application/octet-stream", "Max-Days": "3" },
      timeout: 60000,
      maxContentLength: 200 * 1024 * 1024,
    });
    const url = (r.data || "").toString().trim();
    if (url.startsWith("http")) return url;
  } catch {}

  // Try tmpfiles.org
  try {
    const FormData = require("form-data");
    const form = new FormData();
    form.append("file", buf, { filename: filename || "file.bin" });
    const r = await axios.post("https://tmpfiles.org/api/v1/upload", form, {
      headers: form.getHeaders(),
      timeout: 60000,
    });
    const u = r.data?.data?.url || "";
    if (u) return u.replace("tmpfiles.org/", "tmpfiles.org/dl/");
  } catch {}

  throw new Error("All upload hosts failed. The file may be too large or service unavailable.");
}

// Fetch lyrics — multi-source with accurate query handling
async function fetchLyrics(query) {
  // Parse "artist - title" or "artist title" formats
  let artist = "", title = "";
  if (query.includes(" - ")) {
    [artist, title] = query.split(" - ").map(s => s.trim());
  } else if (query.includes(" by ")) {
    const parts = query.split(" by ");
    title  = parts[0].trim();
    artist = parts[1]?.trim() || "";
  } else {
    // Use full query as title for better accuracy
    title  = query.trim();
    artist = "";
  }

  // Source 1: lyrics.ovh — needs accurate artist/title split
  if (artist && title) {
    try {
      const r = await axios.get(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`, { timeout: 10000 });
      if (r.data?.lyrics && r.data.lyrics.trim().length > 50) {
        return { lyrics: r.data.lyrics.trim(), source: "lyrics.ovh", artist, title };
      }
    } catch {}
  }

  // Source 2: Happi.dev lyrics API (free, accurate)
  try {
    const r = await axios.get("https://api.happi.dev/v1/music", {
      params: { q: query, limit: 1, apikey: "live_OFWDYbXHYnqFJqiVTQaxLR72b" },
      timeout: 10000,
    });
    const track = r.data?.result?.[0];
    if (track?.id_track) {
      const r2 = await axios.get(`https://api.happi.dev/v1/music/${track.id_artist}/${track.id_album}/${track.id_track}`, {
        params: { apikey: "live_OFWDYbXHYnqFJqiVTQaxLR72b" },
        timeout: 10000,
      });
      const lyrics = r2.data?.result?.lyrics;
      if (lyrics && lyrics.length > 50) {
        return { lyrics, source: "Happi", title: track.track, artist: track.artist };
      }
    }
  } catch {}

  // Source 3: lrclib (free, no key, highly accurate)
  try {
    const params = artist && title ? { track_name: title, artist_name: artist } : { q: query };
    const r = await axios.get("https://lrclib.net/api/search", { params, timeout: 10000 });
    const track = r.data?.[0];
    if (track?.plainLyrics && track.plainLyrics.length > 50) {
      return { lyrics: track.plainLyrics, source: "LRCLib", title: track.trackName, artist: track.artistName };
    }
  } catch {}

  // Source 4: Genius search + page scrape
  try {
    const searchQuery = artist ? `${title} ${artist}` : query;
    const search = await axios.get("https://genius.com/api/search/song", {
      params: { q: searchQuery, per_page: 1 },
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
      timeout: 12000,
    });
    const hit = search.data?.response?.sections?.[0]?.hits?.[0]?.result;
    if (hit?.url) {
      const page = await axios.get(hit.url, {
        headers: { "User-Agent": "Mozilla/5.0" },
        timeout: 15000,
      });
      const html = page.data || "";
      const matches = [...html.matchAll(/data-lyrics-container="true"[^>]*>([\s\S]*?)<\/div>/g)];
      if (matches.length) {
        const raw = matches.map(m => m[1]).join("\n")
          .replace(/<br\s*\/?>/gi, "\n")
          .replace(/<[^>]+>/g, "")
          .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'")
          .replace(/\n{3,}/g, "\n\n")
          .trim();
        if (raw.length > 50) {
          return { lyrics: raw, source: "Genius", title: hit.title, artist: hit.primary_artist?.name };
        }
      }
    }
  } catch {}

  // Source 5: lyrics.ovh with full query as title (last resort)
  if (!artist) {
    try {
      const parts = query.trim().split(/\s+/);
      const a = parts[0]; const t = parts.slice(1).join(" ");
      if (a && t) {
        const r = await axios.get(`https://api.lyrics.ovh/v1/${encodeURIComponent(a)}/${encodeURIComponent(t)}`, { timeout: 10000 });
        if (r.data?.lyrics && r.data.lyrics.trim().length > 50) {
          return { lyrics: r.data.lyrics.trim(), source: "lyrics.ovh" };
        }
      }
    } catch {}
  }

  return null;
}

// ── Plugin ────────────────────────────────────────────────────────────────────
module.exports = {
  name: "MediaTools",
  category: "tools",
  desc: "View-once opener, DP download, profile info, img2url, video2gif, video2mp3, compress, file2link, mutevideo, lyrics",
  command: [
    "viewonce",
    "getdp",
    "profileinfo",
    "img2url",
    "video2gif",
    "video2mp3",
    "compress",
    "file2link",
    "mutevideo",
    "lyrics",
  ],

  run: async ({ sock, m, args, command, chatId, userId, reply, prefix, mentionedJid, quotedMsg }) => {
    const chat      = chatId || m?.chat;
    const requester = m?.pushName || userId?.split("@")[0] || "User";
    const pfx       = prefix || "/";

    // ── VIEW ONCE OPENER ──────────────────────────────────────────────────────
    if (command === "viewonce") {
      const q = m.quoted;
      if (!q) return reply(`❌ Reply to a view-once message with *${pfx}viewonce*`);

      const isVO = (q.mtype || "").toLowerCase().includes("viewonce")
        || q.viewOnce === true
        || q._data?.viewOnce === true;

      if (!isVO && !["imageMessage","videoMessage","audioMessage","documentMessage"].includes(q.mtype)) {
        return reply("❌ That doesn't appear to be a view-once or media message. Reply directly to one.");
      }

      await reply("🔓 Opening view-once media...");
      try {
        const media = await downloadQuotedMedia(sock, m);
        if (!media || !media.buffer || media.buffer.length < 100) {
          return reply("❌ Could not download the media. It may have already expired.");
        }

        const mtype    = media.mtype;
        const caption  = `🔓 *View-Once Revealed*\n👤 From: ${q.sender?.split("@")[0] || "unknown"}\n💾 Size: ${fmtSize(media.buffer.length)}\n\n_Revealed by Miss Chatra_`;
        const isVideo  = mtype === "video" || (media.mimetype || "").includes("video");
        const isAudio  = mtype === "audio" || (media.mimetype || "").includes("audio");
        const isDoc    = mtype === "document" || mtype === "doc";

        if (isVideo) {
          await sock.sendMessage(chat, { video: media.buffer, mimetype: "video/mp4", caption }, { quoted: m });
        } else if (isAudio) {
          await sock.sendMessage(chat, { audio: media.buffer, mimetype: "audio/mpeg", ptt: false, caption }, { quoted: m });
        } else if (isDoc) {
          await sock.sendMessage(chat, { document: media.buffer, mimetype: media.mimetype || "application/octet-stream", caption, fileName: "revealed_file" }, { quoted: m });
        } else {
          await sock.sendMessage(chat, { image: media.buffer, caption }, { quoted: m });
        }
      } catch (e) {
        return reply(`❌ Failed to reveal: ${e.message.slice(0, 150)}`);
      }
      return;
    }

    // ── GET PROFILE PICTURE (DP) ──────────────────────────────────────────────
    if (command === "getdp") {
      let target = mentionedJid?.[0] || quotedMsg?.sender;
      if (!target && args[0]) {
        const num = args[0].replace(/\D/g, "");
        if (num.length >= 7) target = `${num}@s.whatsapp.net`;
      }
      if (!target) target = userId;

      const displayNum = target.split("@")[0];
      await reply(`📸 Fetching profile picture for +${displayNum}...`);

      try {
        const ppUrl = await sock.profilePictureUrl(target, "image");
        if (!ppUrl) return reply(`❌ @${displayNum} has no profile picture or it's private.`);

        const r = await axios.get(ppUrl, { responseType: "arraybuffer", timeout: 15000 });
        const buf = Buffer.from(r.data);

        await sock.sendMessage(chat, {
          image: buf,
          caption: `📸 *Profile Picture*\n👤 User: +${displayNum}\n💾 Size: ${fmtSize(buf.length)}\n\n_Fetched by Miss Chatra_`,
        }, { quoted: m });
      } catch (e) {
        if (e.message?.includes("not-authorized") || e.message?.includes("401")) {
          return reply(`❌ +${displayNum} has their profile picture set to private.`);
        }
        return reply(`❌ Could not fetch DP: ${e.message?.slice(0, 100)}`);
      }
      return;
    }

    // ── PROFILE INFO ──────────────────────────────────────────────────────────
    if (command === "profileinfo") {
      let target = mentionedJid?.[0] || quotedMsg?.sender;
      if (!target && args[0]) {
        const num = args[0].replace(/\D/g, "");
        if (num.length >= 7) target = `${num}@s.whatsapp.net`;
      }
      if (!target) target = userId;

      const displayNum = target.split("@")[0];
      await reply(`🔍 Fetching profile info for +${displayNum}...`);

      try {
        // Fetch in parallel
        const [statusResult, ppUrl] = await Promise.allSettled([
          sock.fetchStatus(target),
          sock.profilePictureUrl(target, "image"),
        ]);

        const status = statusResult.status === "fulfilled" ? statusResult.value?.status || "No status set" : "Private / unavailable";
        const hasDP  = ppUrl.status === "fulfilled" && !!ppUrl.value;

        // Fetch business profile if available
        let bizInfo = "";
        try {
          const biz = await sock.getBusinessProfile(target);
          if (biz?.description) bizInfo = `\n🏢 *Business:* ${biz.description.slice(0, 80)}`;
          if (biz?.category) bizInfo += `\n📂 *Category:* ${biz.category}`;
        } catch {}

        const infoText = [
          `👤 *Profile Info*`,
          ``,
          `📱 *Number:* +${displayNum}`,
          `🟢 *Status:* ${status}`,
          `📸 *Profile Pic:* ${hasDP ? "Yes ✅" : "Hidden / None ❌"}`,
          bizInfo,
          ``,
          `_Fetched by Miss Chatra_`,
        ].filter(l => l !== undefined).join("\n");

        if (hasDP && ppUrl.value) {
          try {
            const r = await axios.get(ppUrl.value, { responseType: "arraybuffer", timeout: 15000 });
            await sock.sendMessage(chat, { image: Buffer.from(r.data), caption: infoText }, { quoted: m });
            return;
          } catch {}
        }
        await reply(infoText);
      } catch (e) {
        return reply(`❌ Could not fetch profile info: ${e.message?.slice(0, 120)}`);
      }
      return;
    }

    // ── IMAGE TO LINK ─────────────────────────────────────────────────────────
    if (command === "img2url") {
      const q = m.quoted;
      if (!q || !["imageMessage","image"].includes(q.mtype?.replace?.("Message","") || q.mtype)) {
        return reply(`❌ Reply to an image with *${pfx}img2url*`);
      }
      await reply("🔗 Uploading image to generate link...");
      try {
        const media = await downloadQuotedMedia(sock, m);
        if (!media?.buffer) return reply("❌ Could not download the image.");
        const url = await uploadToHost(media.buffer, "image.jpg", "image/jpeg");
        await reply([
          `🔗 *Image Link Generated*`,
          ``,
          `📎 ${url}`,
          ``,
          `💾 Size: ${fmtSize(media.buffer.length)}`,
          `⏰ Link expires in ~72 hours`,
          ``,
          `_Powered by Miss Chatra_`,
        ].join("\n"));
      } catch (e) {
        return reply(`❌ Upload failed: ${e.message.slice(0, 150)}`);
      }
      return;
    }

    // ── FILE TO LINK ──────────────────────────────────────────────────────────
    if (command === "file2link") {
      const q = m.quoted;
      if (!q) return reply(`❌ Reply to any file, image, video, or audio with *${pfx}file2link*`);
      await reply("🔗 Uploading file to generate public link...");
      try {
        const media = await downloadQuotedMedia(sock, m);
        if (!media?.buffer) return reply("❌ Could not download the file.");

        const ext  = (q.mimetype || "application/octet-stream").split("/")[1]?.split(";")[0] || "bin";
        const name = q.fileName || `file.${ext}`;
        const url  = await uploadToHost(media.buffer, name, q.mimetype || "application/octet-stream");

        await reply([
          `🔗 *File Link Generated*`,
          ``,
          `📁 File: ${name}`,
          `💾 Size: ${fmtSize(media.buffer.length)}`,
          `📎 URL: ${url}`,
          ``,
          `⏰ Expires in ~72 hours`,
          `_Powered by Miss Chatra_`,
        ].join("\n"));
      } catch (e) {
        return reply(`❌ Upload failed: ${e.message.slice(0, 150)}`);
      }
      return;
    }

    // ── VIDEO TO GIF ──────────────────────────────────────────────────────────
    if (command === "video2gif") {
      const q = m.quoted;
      const isVid = q && (q.mtype === "videoMessage" || (q.mimetype || "").includes("video"));
      if (!isVid) return reply(`❌ Reply to a video with *${pfx}togif*`);

      await reply("🎞️ Converting video to GIF... (this may take a moment)");
      try {
        const media = await downloadQuotedMedia(sock, m);
        if (!media?.buffer) return reply("❌ Could not download the video.");

        // Max 15s, scale to 320px wide, 10fps
        const gifBuf = await ffmpeg(
          ["-t","15","-vf","fps=10,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse","-loop","0","-f","gif"],
          media.buffer, "mp4"
        );

        if (gifBuf.length > 8 * 1024 * 1024) {
          return reply("⚠️ GIF is too large for WhatsApp. Try a shorter video (under 10 seconds).");
        }

        await sock.sendMessage(chat, {
          video: gifBuf,
          mimetype: "image/gif",
          gifPlayback: true,
          caption: `🎞️ *Video → GIF*\n💾 Size: ${fmtSize(gifBuf.length)}\n\n_Converted by Miss Chatra_`,
        }, { quoted: m });
      } catch (e) {
        return reply(`❌ Conversion failed: ${e.message.slice(0, 150)}`);
      }
      return;
    }

    // ── VIDEO TO MP3 ──────────────────────────────────────────────────────────
    if (command === "video2mp3") {
      const q = m.quoted;
      const isVid = q && (q.mtype === "videoMessage" || (q.mimetype || "").includes("video") ||
                          q.mtype === "audioMessage" || (q.mimetype || "").includes("audio"));
      if (!isVid) return reply(`❌ Reply to a video or audio message with *${pfx}tomp3*`);

      await reply("🎵 Extracting audio... Please wait.");
      try {
        const media = await downloadQuotedMedia(sock, m);
        if (!media?.buffer) return reply("❌ Could not download the media.");

        const mp3Buf = await ffmpeg(
          ["-vn","-ar","44100","-ac","2","-b:a","192k","-f","mp3"],
          media.buffer, "mp4"
        );

        await sock.sendMessage(chat, {
          audio: mp3Buf,
          mimetype: "audio/mpeg",
          ptt: false,
          caption: `🎵 *Audio Extracted*\n💾 Size: ${fmtSize(mp3Buf.length)}\n\n_Extracted by Miss Chatra_`,
        }, { quoted: m });
      } catch (e) {
        return reply(`❌ Extraction failed: ${e.message.slice(0, 150)}`);
      }
      return;
    }

    // ── IMAGE COMPRESSOR ──────────────────────────────────────────────────────
    if (command === "compress") {
      const q = m.quoted;
      const isImg = q && (q.mtype === "imageMessage" || (q.mimetype || "").includes("image"));
      if (!isImg) return reply(`❌ Reply to an image with *${pfx}compress*`);

      const quality = Math.max(10, Math.min(90, parseInt(args[0]) || 50));
      await reply(`🗜️ Compressing image at ${quality}% quality...`);

      try {
        const media = await downloadQuotedMedia(sock, m);
        if (!media?.buffer) return reply("❌ Could not download the image.");

        const origSize = media.buffer.length;

        // Use ffmpeg to compress/resize image
        const compBuf = await ffmpeg(
          ["-vf","scale=iw*0.8:-1","-q:v",String(Math.round((100 - quality) / 10)),"-f","image2"],
          media.buffer, "jpg"
        );

        const savings = (((origSize - compBuf.length) / origSize) * 100).toFixed(1);
        await sock.sendMessage(chat, {
          image: compBuf,
          caption: [
            `🗜️ *Image Compressed*`,
            `📦 Original: ${fmtSize(origSize)}`,
            `✅ Compressed: ${fmtSize(compBuf.length)}`,
            `💰 Saved: ${savings}%`,
            ``,
            `_Compressed by Miss Chatra_`,
          ].join("\n"),
        }, { quoted: m });
      } catch (e) {
        return reply(`❌ Compression failed: ${e.message.slice(0, 150)}`);
      }
      return;
    }

    // ── MUTE VIDEO ────────────────────────────────────────────────────────────
    if (command === "mutevideo") {
      const q = m.quoted;
      const isVid = q && (q.mtype === "videoMessage" || (q.mimetype || "").includes("video"));
      if (!isVid) return reply(`❌ Reply to a video with *${pfx}mutevideo*`);

      await reply("🔇 Muting video audio...");
      try {
        const media = await downloadQuotedMedia(sock, m);
        if (!media?.buffer) return reply("❌ Could not download the video.");

        const mutedBuf = await ffmpeg(
          ["-an","-vcodec","copy","-f","mp4"],
          media.buffer, "mp4"
        );

        await sock.sendMessage(chat, {
          video: mutedBuf,
          mimetype: "video/mp4",
          caption: `🔇 *Video Muted*\n💾 Size: ${fmtSize(mutedBuf.length)}\n\n_Muted by Miss Chatra_`,
        }, { quoted: m });
      } catch (e) {
        return reply(`❌ Muting failed: ${e.message.slice(0, 150)}`);
      }
      return;
    }

    // ── LYRICS ────────────────────────────────────────────────────────────────
    if (command === "lyrics") {
      const query = args.join(" ").trim();
      if (!query) {
        return reply([
          `🎵 *Lyrics Fetcher*`,
          ``,
          `Usage: *${pfx}lyrics <song name> [artist]*`,
          ``,
          `Examples:`,
          `  ${pfx}lyrics Holy Forever CeCe Winans`,
          `  ${pfx}lyrics Essence Wizkid`,
          `  ${pfx}lyrics Flowers Miley Cyrus`,
        ].join("\n"));
      }

      await reply(`🎵 Searching lyrics for *"${query}"*...`);
      try {
        const result = await fetchLyrics(query);
        if (!result) return reply(`❌ No lyrics found for *"${query}"*.\n\nTry adding the artist name: *${pfx}lyrics Song Title Artist Name*`);

        const header = [
          `🎵 *${result.title || query}*`,
          result.artist ? `👤 ${result.artist}` : "",
          `📖 Source: ${result.source}`,
          ``,
          `─────────────────`,
          ``,
        ].filter(Boolean).join("\n");

        const lyricsText = result.lyrics.slice(0, 3500); // WhatsApp message limit
        const truncated  = result.lyrics.length > 3500 ? "\n\n_... (lyrics truncated)_" : "";

        await reply(`${header}${lyricsText}${truncated}`);
      } catch (e) {
        return reply(`❌ Lyrics search failed: ${e.message.slice(0, 100)}`);
      }
      return;
    }
  }
};
