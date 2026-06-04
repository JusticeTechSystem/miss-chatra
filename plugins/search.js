// plugins/search.js — Miss Chatra Search Hub
"use strict";

const axios  = require("axios");
const config = require("../settings/config");

const BASE = config.prexzyBase;

async function httpGet(url) {
  try {
    const res = await axios.get(url, { timeout: 20000, headers: { "User-Agent": "MissChatra/1.0" } });
    return res.data;
  } catch { return null; }
}

function extractItems(payload) {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  for (const key of ["results","data","items","list","hits","entries"]) {
    if (Array.isArray(payload[key])) return payload[key];
  }
  return [];
}

function formatItems(header, items, limit = 5) {
  const lines = [`🔎 *${header} Results*\n`];
  let count = 0;
  for (const it of items) {
    if (count >= limit) break;
    if (typeof it === "string") { lines.push(`• ${it}`); count++; continue; }
    const title = it.title || it.name || it.judul || it.app_name || "";
    const url   = it.url || it.link || it.download || it.href || it.apk_url || "";
    const desc  = it.description || it.developer || it.category || "";
    if (title || url) {
      lines.push(`*${count+1}. ${title}*`);
      if (desc) lines.push(`   ${String(desc).slice(0,80)}`);
      if (url)  lines.push(`   ${url}`);
      lines.push("");
      count++;
    }
  }
  if (!count) lines.push("No results found.");
  return lines.join("\n");
}

module.exports = {
  name: "Search",
  category: "search",
  desc: "Google, Pinterest, wallpapers and more",
  command: ["search","google","pinterest","gimage","wallpaper","imdb",
            "mediafire","playstore","apkcombo","apkmirror","apkpure",
            "fdroid","modgames","wagroup","tggroup","telegramch",
            "freesound","chord","ghrepo","ghusers","ghissues","ghcode"],
  ownerOnly: false,

  run: async ({ sock, m, args, command, chatId, reply, prefix }) => {
    const query = args.join(" ").trim();

    if (command === "search") {
      return reply([
        `🔎 *Search Hub*`,``,
        `${prefix}dlsearch <song/video> — 🎵 YouTube search & download`,
        `${prefix}google <query> — Web search`,
        `${prefix}pinterest <query> — Pinterest images`,
        `${prefix}gimage <query> — Google images`,
        `${prefix}wallpaper <query> — HD wallpapers`,
        `${prefix}imdb <query> — Movies/Shows`,
        `${prefix}mediafire <query> — Mediafire files`,
        `${prefix}playstore <query> — Android apps`,
        `${prefix}apkcombo <query> — APK downloads`,
        `${prefix}fdroid <query> — Open source apps`,
        `${prefix}ghrepo <query> — GitHub repos`,
        `${prefix}wagroup <query> — WhatsApp groups`,
        `${prefix}chord <query> — Guitar chords`,
        `${prefix}freesound <query> — Sound effects`
      ].join("\n"));
    }

    if (!query) return reply("Usage: " + prefix + command + " <search query>");

    const q = encodeURIComponent(query);

    // ── Universal fallback helper ─────────────────────────────────────────────
    async function withFallback(primaryUrl, fallbackFn, formatter) {
      let data = await httpGet(primaryUrl);
      let items = data ? extractItems(data) : [];
      if (!items.length && fallbackFn) {
        try { items = await fallbackFn(); } catch {}
      }
      return items;
    }

        // ── GOOGLE ───────────────────────────────────────────────────────────────
    if (command === "google") {
      let items = extractItems(await httpGet(BASE + "/search/google?q=" + q));

      // Fallback 1: DuckDuckGo Instant Answer API
      if (!items.length) {
        try {
          const r = await axios.get("https://api.duckduckgo.com/", {
            params: { q: query, format: "json", no_redirect: 1, no_html: 1, skip_disambig: 1 },
            timeout: 10000,
          });
          const d = r.data;
          const results = [];
          if (d && d.AbstractText) results.push({ title: d.Heading, snippet: d.AbstractText, url: d.AbstractURL });
          if (d && d.RelatedTopics) {
            for (const t of d.RelatedTopics.slice(0, 4)) {
              if (t.Text) results.push({ snippet: t.Text, url: t.FirstURL });
            }
          }
          if (results.length) items = results;
        } catch {}
      }

      // Fallback 2: Wikipedia search
      if (!items.length) {
        try {
          const r = await axios.get("https://en.wikipedia.org/w/api.php", {
            params: { action: "opensearch", search: query, limit: 3, format: "json" },
            timeout: 10000,
          });
          const arr = r.data || [];
          const titles   = arr[1] || [];
          const snippets = arr[2] || [];
          const urls     = arr[3] || [];
          items = titles.map((t, i) => ({ title: t, snippet: snippets[i] || "", url: urls[i] || "" }));
        } catch {}
      }

      if (!items.length) {
        return reply("🔎 No results found.\n\nSearch: https://www.google.com/search?q=" + encodeURIComponent(query));
      }

      const lines = ["🔎 *Google: " + query + "*\n"];
      for (const it of items.slice(0, 5)) {
        const title   = it.title   || it.heading     || "";
        const snippet = it.snippet || it.text        || it.description || (typeof it === "string" ? it : "");
        const url     = it.url     || it.link        || "";
        if (title)   lines.push("📌 *" + title + "*");
        if (snippet) lines.push(snippet.slice(0, 200));
        if (url)     lines.push("🔗 " + url);
        lines.push("");
      }
      lines.push("_Full: https://google.com/search?q=" + encodeURIComponent(query) + "_");
      return reply(lines.join("\n"));
    }

        // ── PINTEREST ─────────────────────────────────────────────────────────────
    if (command === "pinterest") {
      const data = await httpGet(`${BASE}/search/pinterest?q=${q}`);
      const items = extractItems(data);
      const imgUrls = [];
      for (const it of items) {
        if (imgUrls.length >= 4) break;
        const url = typeof it === "string" ? it : (it.image || it.img || it.url || "");
        if (url?.startsWith("http")) imgUrls.push(url);
      }
      if (!imgUrls.length) return reply(`🔎 *Pinterest*\n\nSearch: https://www.pinterest.com/search/pins/?q=${q}`);
      await reply(`🎨 *Pinterest images for:* ${query}`);
      for (const url of imgUrls) {
        try {
          const buf = await axios.get(url, { responseType: "arraybuffer", timeout: 15000 });
          await sock.sendMessage(chatId, { image: Buffer.from(buf.data), caption: query }, { quoted: m });
        } catch {}
      }
      return;
    }

    // ── GIMAGE ────────────────────────────────────────────────────────────────
    if (command === "gimage") {
      const data = await httpGet(`${BASE}/search/gimage?q=${q}`);
      const items = extractItems(data);
      const imgUrls = [];
      for (const it of items) {
        if (imgUrls.length >= 4) break;
        const url = typeof it === "string" ? it : (it.url || it.image || it.link || "");
        if (url?.startsWith("http")) imgUrls.push(url);
      }
      if (!imgUrls.length) return reply(`🔎 *Google Images*\n\nSearch: https://www.google.com/search?tbm=isch&q=${q}`);
      await reply(`🖼️ *Google Images for:* ${query}`);
      for (const url of imgUrls.slice(0,3)) {
        try {
          const buf = await axios.get(url, { responseType: "arraybuffer", timeout: 15000 });
          await sock.sendMessage(chatId, { image: Buffer.from(buf.data), caption: query }, { quoted: m });
        } catch {}
      }
      return;
    }

    // ── WALLPAPER ─────────────────────────────────────────────────────────────
    if (command === "wallpaper") {
      const data = await httpGet(`${BASE}/tools/wallpaper?q=${q}`);
      const items = extractItems(data);
      if (!items.length) return reply(`🔎 *Wallpaper*\n\nSearch: https://wallhaven.cc/search?q=${q}`);
      const imgUrls = [];
      for (const it of items) {
        if (imgUrls.length >= 3) break;
        const url = typeof it === "string" ? it : (it.path || it.url || it.image || "");
        if (url?.startsWith("http")) imgUrls.push(url);
      }
      await reply(`🖼️ *HD Wallpapers for:* ${query}`);
      for (const url of imgUrls) {
        try {
          const buf = await axios.get(url, { responseType: "arraybuffer", timeout: 20000 });
          await sock.sendMessage(chatId, { image: Buffer.from(buf.data), caption: `Wallpaper: ${query}` }, { quoted: m });
        } catch {}
      }
      return;
    }

    // ── GENERIC API SEARCHES ──────────────────────────────────────────────────
    const endpoints = {
      imdb:       `${BASE}/search/imdb?query=${q}`,
      mediafire:  `${BASE}/search/msearch?query=${q}`,
      playstore:  `${BASE}/search/playstore?q=${q}`,
      apkcombo:   `${BASE}/search/apkcombo?q=${q}`,
      apkmirror:  `${BASE}/search/apkmirror?query=${q}`,
      apkpure:    `https://apkpure.com/search?q=${q}`,
      fdroid:     `${BASE}/tools/fdroidsearch?q=${q}`,
      modgames:   `${BASE}/search/android1?q=${q}`,
      wagroup:    `${BASE}/search/wagroup?query=${q}`,
      tggroup:    `${BASE}/search/tggroup?query=${q}`,
      telegramch: `${BASE}/search/telegram?query=${q}`,
      freesound:  `${BASE}/sound/search?query=${q}`,
      chord:      `${BASE}/search/chord?query=${q}`,
      ghrepo:     `${BASE}/search/repos?query=${q}&per_page=5&sort=stars`,
      ghusers:    `${BASE}/search/users?query=${q}&per_page=5`,
      ghissues:   `${BASE}/search/issues?query=${q}&per_page=5`,
      ghcode:     `${BASE}/search/code?query=${q}&per_page=5`
    };

    const labels = {
      imdb: "IMDb", mediafire: "Mediafire", playstore: "Play Store",
      apkcombo: "APKCombo", apkmirror: "APKMirror", apkpure: "APKPure",
      fdroid: "F-Droid", modgames: "Modded Games", wagroup: "WhatsApp Groups",
      tggroup: "Telegram Groups", telegramch: "Telegram Channels",
      freesound: "Free Sounds", chord: "Chords",
      ghrepo: "GitHub Repos", ghusers: "GitHub Users",
      ghissues: "GitHub Issues", ghcode: "GitHub Code"
    };

    if (endpoints[command]) {
      if (command === "apkpure") return reply(`🔎 *APKPure*\n\n${endpoints[command]}`);
      const data = await httpGet(endpoints[command]);
      if (!data) return reply(`🔎 *${labels[command]}*\n\nCould not fetch. Try: ${endpoints[command]}`);
      const items = extractItems(data);
      return reply(formatItems(labels[command] || command, items, 5));
    }
  }
};
