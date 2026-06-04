// plugins/animehub.js — Anime Hub for Miss Chatra WA
"use strict";

const axios  = require("axios");
const config = require("../settings/config");
const BASE   = config.prexzyBase || "https://apis.prexzyvilla.site";

async function get(url, params) {
  try {
    const r = await axios.get(url, { params, timeout: 15000, headers: { "User-Agent": "MissChatra/1.0" } });
    return r.data;
  } catch { return null; }
}

function extractItems(data) {
  if (!data) return [];
  if (Array.isArray(data)) return data;
  for (const k of ["results","data","items","list","animes","mangas","characters"]) {
    if (Array.isArray(data[k])) return data[k];
  }
  return [];
}

const REACTIONS = ["hug","kiss","pat","slap","poke","wave","nom","cuddle","blush","happy",
                   "wink","cry","dance","nod","thumbsup","bored","angry","laugh","smug"];

module.exports = {
  name:     "AnimeHub",
  category: "anime",
  desc:     "Anime search, manga, characters, and reaction GIFs",
  command:  ["anime","manga","anichar","anireact","animehub", ...REACTIONS],

  run: async ({ sock, m, args, command, chatId, reply, prefix }) => {
    const query = args.join(" ").trim();

    // ── /animehub — menu ─────────────────────────────────────────────────────
    if (command === "animehub") {
      return reply(
        `🌸 *ANIME HUB*\n\n` +
        `*Search Commands:*\n` +
        `• *${prefix}anime <title>* — Search anime\n` +
        `• *${prefix}manga <title>* — Search manga\n` +
        `• *${prefix}anichar <name>* — Search character\n\n` +
        `*Reaction GIFs:*\n` +
        `• *${prefix}anireact <type>* — Get a reaction GIF\n` +
        `   Types: hug, kiss, pat, slap, poke, wave, nom, cuddle, blush, happy, wink, cry, dance, nod, thumbsup, bored, angry, laugh, smug\n\n` +
        `Or use shortcut: *${prefix}hug*, *${prefix}kiss*, *${prefix}pat*, etc.`
      );
    }

    // ── Reaction GIFs ─────────────────────────────────────────────────────────
    if (REACTIONS.includes(command) || command === "anireact") {
      const action = command === "anireact" ? (query || "hug") : command;
      const data   = await get(`${BASE}/anime/react`, { type: action });
      const url    = data?.url || data?.gif || data?.image || (typeof data === "string" ? data : null);
      if (!url) return reply(`❌ No GIF found for *${action}*. Try another reaction.`);
      try {
        await sock.sendMessage(chatId, {
          image: { url },
          caption: `🎌 *${action.toUpperCase()}* reaction!`,
        }, { quoted: m });
      } catch {
        return reply(`🎌 *${action}* GIF: ${url}`);
      }
      return;
    }

    // ── Anime search ──────────────────────────────────────────────────────────
    if (command === "anime") {
      if (!query) return reply(`Usage: ${prefix}anime <title>\nExample: ${prefix}anime naruto`);
      const data  = await get(`${BASE}/anime/search`, { query });
      const items = extractItems(data);
      if (!items.length) return reply(`❌ No anime found for "${query}"`);
      const lines = [`🎌 *Anime Search: "${query}"*\n`];
      items.slice(0, 5).forEach((it, i) => {
        const title  = it.title || it.name || it.english_title || "";
        const score  = it.score || it.rating || "";
        const eps    = it.episodes || "";
        const status = it.status || "";
        const genre  = Array.isArray(it.genres) ? it.genres.slice(0, 3).join(", ") : (it.genre || "");
        const desc   = (it.synopsis || it.description || "").slice(0, 100);
        lines.push(
          `*${i + 1}. ${title}*` +
          (score ? `  ⭐ ${score}` : "") +
          (eps ? `  📺 ${eps} eps` : "") +
          (status ? `  [${status}]` : "") +
          (genre ? `\n   📁 ${genre}` : "") +
          (desc ? `\n   ${desc}...` : "")
        );
      });
      return reply(lines.join("\n\n"));
    }

    // ── Manga search ──────────────────────────────────────────────────────────
    if (command === "manga") {
      if (!query) return reply(`Usage: ${prefix}manga <title>\nExample: ${prefix}manga one piece`);
      const data  = await get(`${BASE}/anime/manga`, { query });
      const items = extractItems(data);
      if (!items.length) return reply(`❌ No manga found for "${query}"`);
      const lines = [`📖 *Manga Search: "${query}"*\n`];
      items.slice(0, 5).forEach((it, i) => {
        const title  = it.title || it.name || "";
        const score  = it.score || "";
        const vols   = it.volumes || "";
        const status = it.status || "";
        const desc   = (it.synopsis || it.description || "").slice(0, 100);
        lines.push(
          `*${i + 1}. ${title}*` +
          (score ? `  ⭐ ${score}` : "") +
          (vols ? `  📚 ${vols} vols` : "") +
          (status ? `  [${status}]` : "") +
          (desc ? `\n   ${desc}...` : "")
        );
      });
      return reply(lines.join("\n\n"));
    }

    // ── Character search ──────────────────────────────────────────────────────
    if (command === "anichar") {
      if (!query) return reply(`Usage: ${prefix}anichar <character name>\nExample: ${prefix}anichar naruto uzumaki`);
      const data  = await get(`${BASE}/anime/character`, { query });
      const items = extractItems(data);
      if (!items.length) return reply(`❌ No character found for "${query}"`);
      const lines = [`🧑 *Character Search: "${query}"*\n`];
      items.slice(0, 4).forEach((it, i) => {
        const name  = it.name || it.full_name || "";
        const anime = Array.isArray(it.animeography) ? it.animeography[0]?.name || "" : (it.anime || "");
        const desc  = (it.about || it.description || "").slice(0, 120);
        const img   = it.image_url || it.image || "";
        lines.push(`*${i + 1}. ${name}*${anime ? `  (${anime})` : ""}${desc ? `\n   ${desc}...` : ""}${img ? `\n   🖼 ${img}` : ""}`);
      });
      return reply(lines.join("\n\n"));
    }
  },
};
