// plugins/utility.js — Utility Tools: Weather · Currency · News · Wikipedia · QR · Calculator
"use strict";

const axios = require("axios");

async function httpGet(url, params, timeout = 15000) {
  try {
    const r = await axios.get(url, { params, timeout, headers: { "User-Agent": "MissChatra/1.0" } });
    return r.data;
  } catch { return null; }
}

// WMO weather codes
const WMO = {
  0:"☀️ Clear", 1:"🌤 Mainly clear", 2:"⛅ Partly cloudy", 3:"☁️ Overcast",
  45:"🌫 Foggy", 48:"🌫 Icy fog", 51:"🌦 Light drizzle", 53:"🌧 Drizzle",
  55:"🌧 Heavy drizzle", 61:"🌧 Light rain", 63:"🌧 Rain", 65:"🌧 Heavy rain",
  71:"🌨 Light snow", 73:"❄️ Snow", 75:"❄️ Heavy snow",
  80:"🌦 Showers", 81:"🌧 Heavy showers", 95:"⛈ Thunderstorm", 99:"⛈ Severe storm",
};

module.exports = {
  name:     "Utility",
  category: "tools",
  desc:     "Weather, currency conversion, Wikipedia, news, and more",
  command:  ["weather","convert","currency","wiki","wikipedia","news","calc","calculate",
             "timezone","timein","ip","define","utilitymenu"],

  run: async ({ sock, m, args, command, chatId, reply, prefix }) => {
    const query = args.join(" ").trim();

    // ── /utilitymenu ──────────────────────────────────────────────────────────
    if (command === "utilitymenu") {
      return reply(
        `🔧 *UTILITY TOOLS*\n\n` +
        `• *${prefix}weather <city>* — Current weather + 3-day forecast\n` +
        `• *${prefix}convert 100 USD NGN* — Currency conversion\n` +
        `• *${prefix}wiki <topic>* — Wikipedia summary\n` +
        `• *${prefix}news <topic>* — Latest news headlines\n` +
        `• *${prefix}calc <expression>* — Calculator\n` +
        `• *${prefix}define <word>* — Dictionary definition\n` +
        `• *${prefix}ip <address>* — IP address info\n` +
        `• *${prefix}timein <city>* — Current time in a city`
      );
    }

    // ── /weather ──────────────────────────────────────────────────────────────
    if (command === "weather") {
      if (!query) return reply(`Usage: ${prefix}weather <city>\nExample: ${prefix}weather Lagos`);
      const data = await httpGet(`https://wttr.in/${encodeURIComponent(query)}?format=j1`);
      if (!data) return reply("❌ Location not found. Check the city name.");
      try {
        const cur     = data.current_condition?.[0];
        const area    = data.nearest_area?.[0];
        if (!cur || !area) return reply("❌ Could not get weather data.");
        const aname   = area.areaName?.[0]?.value || query;
        const country = area.country?.[0]?.value || "";
        const wco     = parseInt(cur.weatherCode);
        const desc    = WMO[wco] || cur.weatherDesc?.[0]?.value || "";
        const lines = [
          `🌤 *${aname}, ${country}*\n${desc}`,
          `🌡 Temp: *${cur.temp_C}°C / ${cur.temp_F}°F* (feels ${cur.FeelsLikeC}°C)`,
          `💧 Humidity: *${cur.humidity}%*`,
          `💨 Wind: *${cur.windspeedKmph} km/h ${cur.winddir16Point}*`,
          `🔆 UV: ${cur.uvIndex || "?"}  👁 Visibility: ${cur.visibility || "?"} km`,
        ];
        const fcast = data.weather || [];
        if (fcast.length) {
          lines.push(`\n📅 *3-Day Forecast:*`);
          for (const day of fcast.slice(0, 3)) {
            const wc2 = parseInt(day.hourly?.[4]?.weatherCode || 0);
            lines.push(`  ${day.date}: ${WMO[wc2] || ""} ↑${day.maxtempC}° ↓${day.mintempC}°`);
          }
        }
        return reply(lines.join("\n"));
      } catch { return reply("❌ Weather data parsing failed. Try again."); }
    }

    // ── /convert / /currency ──────────────────────────────────────────────────
    if (command === "convert" || command === "currency") {
      // Usage: /convert 100 USD NGN
      if (args.length < 3) return reply(`Usage: ${prefix}convert <amount> <from> <to>\nExample: ${prefix}convert 100 USD NGN`);
      const amt  = parseFloat(args[0].replace(/,/g, ""));
      const from = args[1].toUpperCase();
      const to   = args[2].toUpperCase();
      if (isNaN(amt)) return reply("❌ Invalid amount.");
      const data = await httpGet(`https://open.er-api.com/v6/latest/${from}`);
      if (!data || data.result !== "success") return reply(`❌ Invalid currency code: ${from}`);
      const rate = data.rates?.[to];
      if (!rate) return reply(`❌ Invalid currency code: ${to}`);
      const result = (amt * rate).toFixed(4);
      const inv    = (1 / rate).toFixed(6);
      return reply(
        `💱 *Currency Conversion*\n\n` +
        `*${amt.toLocaleString()} ${from}* = *${parseFloat(result).toLocaleString()} ${to}*\n\n` +
        `📊 Rate: 1 ${from} = ${rate.toFixed(6)} ${to}\n` +
        `📊 Rate: 1 ${to} = ${inv} ${from}\n\n` +
        `_Source: open.er-api.com_`
      );
    }

    // ── /wiki / /wikipedia ────────────────────────────────────────────────────
    if (command === "wiki" || command === "wikipedia") {
      if (!query) return reply(`Usage: ${prefix}wiki <topic>\nExample: ${prefix}wiki artificial intelligence`);
      const enc  = encodeURIComponent(query.replace(/ /g, "_"));
      const data = await httpGet(`https://en.wikipedia.org/api/rest_v1/page/summary/${enc}`);
      if (!data || data.type === "https://mediawiki.org/wiki/HyperSwitch/errors/not_found") {
        // Try search
        const search = await httpGet("https://en.wikipedia.org/w/api.php", {
          action: "opensearch", search: query, limit: 1, format: "json"
        });
        if (!search || !search[1]?.[0]) return reply(`❌ No Wikipedia article found for "${query}"`);
        const title = search[1][0];
        const enc2  = encodeURIComponent(title.replace(/ /g, "_"));
        const data2 = await httpGet(`https://en.wikipedia.org/api/rest_v1/page/summary/${enc2}`);
        if (!data2) return reply(`❌ Could not fetch article for "${title}"`);
        return reply(
          `📖 *${data2.title}*\n\n${data2.extract?.slice(0, 800) || "No summary available."}\n\n` +
          `🔗 ${data2.content_urls?.mobile?.page || `https://en.wikipedia.org/wiki/${enc2}`}`
        );
      }
      return reply(
        `📖 *${data.title}*\n\n${data.extract?.slice(0, 800) || "No summary."}\n\n` +
        `🔗 ${data.content_urls?.mobile?.page || `https://en.wikipedia.org/wiki/${enc}`}`
      );
    }

    // ── /news ─────────────────────────────────────────────────────────────────
    if (command === "news") {
      const topic   = query || "Nigeria";
      const rssUrl  = `https://news.google.com/rss/search?q=${encodeURIComponent(topic)}&hl=en-US&gl=US&ceid=US:en`;
      const xml     = await httpGet(rssUrl, {}, 12000);
      if (!xml || typeof xml !== "string") return reply(`❌ Could not fetch news for "${topic}"`);
      const items   = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 6);
      if (!items.length) return reply(`❌ No news found for "${topic}"`);
      const lines   = [`📰 *News: ${topic}*\n`];
      items.forEach((m2, i) => {
        const raw  = m2[1];
        const ttl  = (raw.match(/<title><!\[CDATA\[(.*?)\]\]>/)?.[1] || raw.match(/<title>(.*?)<\/title>/)?.[1] || "").trim();
        const src  = raw.match(/<source[^>]*>(.*?)<\/source>/)?.[1] || "";
        const link = (raw.match(/<link>(.*?)<\/link>/)?.[1] || "").trim();
        if (ttl) lines.push(`*${i + 1}.* ${ttl}${src ? ` — _${src}_` : ""}${link ? `\n   ${link}` : ""}`);
      });
      return reply(lines.join("\n\n"));
    }

    // ── /calc / /calculate ────────────────────────────────────────────────────
    if (command === "calc" || command === "calculate") {
      if (!query) return reply(`Usage: ${prefix}calc <expression>\nExample: ${prefix}calc 15% of 4500`);
      try {
        // Safe eval via mathjs-style replacements
        let expr = query
          .replace(/×/g, "*").replace(/÷/g, "/").replace(/\^/g, "**")
          .replace(/(\d+(?:\.\d+)?)\s*%\s*of\s*(\d+(?:\.\d+)?)/gi, "($1/100)*$2")
          .replace(/(\d+(?:\.\d+)?)\s*%/g, "($1/100)");
        // Only allow safe chars
        if (!/^[\d\s\+\-\*\/\.\(\)\%\^]+$/.test(expr.replace(/\*\*/g, ""))) {
          return reply("❌ Invalid expression. Use numbers and operators only.");
        }
        // eslint-disable-next-line no-eval
        const result = Function('"use strict"; return (' + expr + ')')();
        if (!isFinite(result)) return reply("❌ Result is undefined (division by zero?)");
        return reply(`🧮 *Calculator*\n\n*${query}*\n= *${Number(result.toFixed(10)).toString()}*`);
      } catch { return reply("❌ Invalid expression."); }
    }

    // ── /define ───────────────────────────────────────────────────────────────
    if (command === "define") {
      if (!query) return reply(`Usage: ${prefix}define <word>\nExample: ${prefix}define serendipity`);
      const data = await httpGet(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(query)}`);
      if (!data || !Array.isArray(data) || !data[0]) return reply(`❌ No definition found for "${query}"`);
      const entry    = data[0];
      const phonetic = entry.phonetic || entry.phonetics?.[0]?.text || "";
      const lines    = [`📚 *${entry.word}*${phonetic ? ` /${phonetic}/` : ""}\n`];
      for (const meaning of entry.meanings?.slice(0, 2) || []) {
        lines.push(`*${meaning.partOfSpeech}*`);
        for (const def of meaning.definitions?.slice(0, 2) || []) {
          lines.push(`• ${def.definition}`);
          if (def.example) lines.push(`  _"${def.example}"_`);
        }
      }
      return reply(lines.join("\n"));
    }

    // ── /ip ───────────────────────────────────────────────────────────────────
    if (command === "ip") {
      const ip   = query || "";
      const url  = ip ? `https://ipapi.co/${ip}/json/` : "https://ipapi.co/json/";
      const data = await httpGet(url);
      if (!data || data.error) return reply(`❌ Could not find info for IP: ${ip || "your IP"}`);
      return reply(
        `🌐 *IP Information*\n\n` +
        `🔢 IP: *${data.ip}*\n` +
        `📍 Location: *${data.city}, ${data.region}, ${data.country_name}*\n` +
        `🗺 Coords: ${data.latitude}, ${data.longitude}\n` +
        `🏢 ISP: ${data.org || "Unknown"}\n` +
        `📡 ASN: ${data.asn || "Unknown"}\n` +
        `🕐 Timezone: ${data.timezone || "Unknown"}`
      );
    }

    // ── /timein ───────────────────────────────────────────────────────────────
    if (command === "timezone" || command === "timein") {
      if (!query) return reply(`Usage: ${prefix}timein <city/timezone>\nExample: ${prefix}timein Lagos`);
      const data = await httpGet(`https://worldtimeapi.org/api/timezone`, {}, 10000);
      // Find closest matching timezone
      const matches = (Array.isArray(data) ? data : []).filter(t =>
        t.toLowerCase().includes(query.toLowerCase().replace(/ /g, "_"))
      );
      if (!matches.length) return reply(`❌ Timezone not found for "${query}". Try: "Africa/Lagos" or "Europe/London"`);
      const tzData = await httpGet(`https://worldtimeapi.org/api/timezone/${matches[0]}`);
      if (!tzData) return reply("❌ Could not fetch time data.");
      const dt = new Date(tzData.datetime);
      return reply(
        `🕐 *Time in ${matches[0]}*\n\n` +
        `📅 Date: *${dt.toDateString()}*\n` +
        `⏰ Time: *${dt.toLocaleTimeString("en-GB", { hour12: true, timeZone: matches[0] })}*\n` +
        `🗓 UTC Offset: ${tzData.utc_offset}`
      );
    }
  },
};
