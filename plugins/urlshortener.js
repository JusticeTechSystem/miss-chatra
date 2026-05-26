// plugins/urlshortener.js — URL Shortener Hub for Miss Chatra WA
"use strict";

const axios  = require("axios");
const config = require("../settings/config");
const BASE   = config.prexzyBase || "https://apis.prexzyvilla.site";

async function shorten(endpoint, url, extra = {}) {
  try {
    const r = await axios.get(`${BASE}${endpoint}`, {
      params:  { url, ...extra },
      timeout: 20000,
      headers: { "User-Agent": "MissChatra/1.0" },
    });
    return r.data;
  } catch (e) { return { error: e.message }; }
}

function extractShortUrl(data) {
  if (typeof data === "string" && data.startsWith("http")) return data;
  if (typeof data !== "object" || !data) return null;
  for (const k of ["short_url","shortUrl","result","url","link","short","data","output"]) {
    if (typeof data[k] === "string" && data[k].startsWith("http")) return data[k];
  }
  const inner = data.data || {};
  if (typeof inner === "object") {
    for (const k of ["short_url","url","link","result"]) {
      if (typeof inner[k] === "string" && inner[k].startsWith("http")) return inner[k];
    }
  }
  return null;
}

const PROVIDERS = {
  dagd:      { path: "/tools/dagd",      name: "da.gd",        extra: "custom_name" },
  vgd:       { path: "/tools/vgd",       name: "v.gd",         extra: "custom_name" },
  tinube:    { path: "/tools/tinube",     name: "tinu.be",      extra: "custom_name" },
  spoome:    { path: "/tools/spoome",     name: "Spoo.me",      extra: "custom_name" },
  spooemoji: { path: "/tools/spooemoji", name: "Spoo.me Emoji", extra: "emojis" },
  shorturl:  { path: "/tools/shorturl",  name: "Auto Provider", extra: "custom_name" },
};

module.exports = {
  name:     "URLShortener",
  category: "tools",
  desc:     "Shorten URLs with multiple providers",
  command:  ["shorten","dagd","vgd","tinube","spoome","spooemoji","shorturl","urlmenu"],

  run: async ({ args, command, reply, prefix }) => {
    if (command === "urlmenu") {
      return reply(
        `🔗 *URL SHORTENER HUB*\n\n` +
        `• *${prefix}dagd <url> [custom]* — Shorten with da.gd\n` +
        `• *${prefix}vgd <url> [custom]* — Shorten with v.gd\n` +
        `• *${prefix}tinube <url> [custom]* — Shorten with tinu.be\n` +
        `• *${prefix}spoome <url> [custom]* — Shorten with Spoo.me\n` +
        `• *${prefix}spooemoji <url> [emojis]* — Emoji short URL\n` +
        `• *${prefix}shorturl <url> [custom]* — Auto provider\n\n` +
        `_Example: ${prefix}dagd https://example.com mylink_`
      );
    }

    const cmd = command === "shorten" ? "shorturl" : command;
    const prov = PROVIDERS[cmd];
    if (!prov) return;

    const url     = args[0];
    const extra   = args.slice(1).join(" ").trim();

    if (!url || !url.startsWith("http")) {
      return reply(`⚠️ Usage: ${prefix}${cmd} <url> [optional custom name]\nURL must start with http:// or https://`);
    }

    reply(`⏳ Shortening with *${prov.name}*...`);
    const extraParam = extra ? { [prov.extra]: extra } : {};
    const data       = await shorten(prov.path, url, extraParam);
    const shortUrl   = extractShortUrl(data);

    if (!shortUrl) {
      if (data?.error) return reply(`❌ *${prov.name} failed:*\n${data.error}`);
      return reply(`⚠️ Got response but couldn't extract short URL.`);
    }

    return reply(
      `🔗 *URL Shortened!*\n\n` +
      `*Provider:* ${prov.name}\n` +
      `*Original:* ${url.slice(0, 60)}${url.length > 60 ? "..." : ""}\n` +
      `*Short URL:* ${shortUrl}`
    );
  },
};
