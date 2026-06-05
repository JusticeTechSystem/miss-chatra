// plugins/ai.js — Miss Chatra AI Commands (synced with TG p12_ai_commands.py)
"use strict";

const { AI } = require("../library/chatbot");
const config = require("../settings/config");

module.exports = {
  name: "AI",
  category: "ai",
  command: [
    // Core models
    "gpt5","gemini","gemini25f","gemini25p",
    "deepseek","deepseekr1","deepseekreasoner",
    "claude","grok","meta","copilot","copilotdeep",
    "qwq","logical","advanced","dolphincode","deepthink",
    // Image generation
    "gemimage","imagestyle",
    "imagerealistic","imageanime","imagefantasy","imagepixelart",
    "imagesketch","imagecyberpunk","imagewatercolor","imageoilpainting",
    "imagecartoon","imageabstract","imageminimalist","imagesurreal",
    "imagevintage","imagesteampunk","imagehorror","imagescifi","imagepopArt",
    // Code tools
    "prompttocode","detectbugs","convertcode","explaincode",
    // Creative / media
    "aisong","aiinstrumental","chatyoutube","resetai",
    // Status
    "apistatus",
  ],

  run: async ({ sock, m, command, args, fullArgs, chatId, userId, reply, prefix, isOwner, isDev }) => {
    const text = fullArgs.trim();
    const pfx  = prefix || "/";

    const need = (hint) => { if (!text) { reply(`⚠️ Usage: ${pfx}${command} ${hint}`); return true; } return false; };
    const wrap = async (label, fn) => {
      if (!text) return reply(`⚠️ Usage: ${pfx}${command} <prompt>`);
      try {
        await reply(`⏳ ${label}...`);
        const r = await fn();
        if (!r) return reply(`❌ ${label} returned no response. Try again later.`);
        return reply(`*${label}*\n\n${r}`);
      } catch(e) { return reply(`❌ Error: ${e.message}`); }
    };

    // ── Core models ───────────────────────────────────────────────────────────
    if (command === "gpt5")            return wrap("GPT-5",               () => AI.gpt5(text));
    if (command === "gemini")          return wrap("Gemini",              () => AI.gemini(text));
    if (command === "gemini25f")       return wrap("Gemini 2.5 Flash",    () => AI.gemini25f(text));
    if (command === "gemini25p")       return wrap("Gemini 2.5 Pro",      () => AI.gemini25p(text));
    if (command === "deepseek")        return wrap("DeepSeek",            () => AI.deepseek(text));
    if (command === "deepseekr1")      return wrap("DeepSeek R1",         () => AI.deepseekR1(text));
    if (command === "deepseekreasoner") return wrap("DeepSeek Reasoner",  () => AI.deepseekReasoner(text));
    if (command === "claude")          return wrap("Claude",              () => AI.claude(text));
    if (command === "grok")            return wrap("Grok",                () => AI.grok(text));
    if (command === "meta")            return wrap("Meta AI",             () => AI.meta(text));
    if (command === "copilot")         return wrap("Copilot",             () => AI.copilot(text));
    if (command === "copilotdeep")     return wrap("Copilot (Deep Think)",() => AI.copilotDeep(text));
    if (command === "qwq")             return wrap("QwQ-32B",             () => AI.qwq(text));
    if (command === "logical")         return wrap("Dolphin (Logical)",   () => AI.logical(text));
    if (command === "dolphincode")     return wrap("Dolphin Code",        () => AI.dolphinCode(text));

    if (command === "advanced") {
      if (!text) return reply(`⚠️ Usage: ${pfx}advanced <prompt>`);
      const [prompt, ...kws] = text.split("|");
      return wrap("Advanced AI", () => AI.advanced(prompt.trim(), kws.join("|").trim()));
    }

    if (command === "deepthink") {
      if (!text) return reply(`⚠️ Usage: ${pfx}deepthink <prompt>\n\nGets a 200-300 word detailed analysis.`);
      await reply("🧠 *Deep thinking...*");
      const { missChatra, getContext } = require("../library/chatbot");
      const ctx = getContext(chatId, userId);
      const res = await missChatra(text, { userId, context: ctx, deepThink: true });
      return reply(res || "❌ Deep think returned no response.");
    }

    // ── Image generation ──────────────────────────────────────────────────────
    async function sendImage(label, fn) {
      if (!text) return reply(`⚠️ Usage: ${pfx}${command} <prompt>`);
      await reply(`🎨 Generating ${label}...`);
      const url = await fn();
      if (!url) return reply(`❌ ${label} generation failed. Try again.`);
      if (typeof url === "string" && url.startsWith("http")) {
        try {
          const axios = require("axios");
          const res   = await axios.get(url, { responseType: "arraybuffer", timeout: 40000 });
          return sock.sendMessage(chatId, { image: Buffer.from(res.data), caption: `🎨 *${text.slice(0,60)}*` }, { quoted: m });
        } catch { return reply(`🎨 ${url}`); }
      }
      return reply(url);
    }

    if (command === "gemimage") {
      if (!text) return reply(`⚠️ Usage: ${pfx}gemimage <prompt> [16:9|1:1|9:16]`);
      const arM = text.match(/\b(\d{1,2}:\d{1,2})\b/);
      const ar  = arM ? arM[1] : "1:1";
      const prm = text.replace(/\b\d{1,2}:\d{1,2}\b/, "").trim();
      return sendImage("Gemini Image", () => AI.gemimage(prm, ar));
    }

    if (command === "imagestyle") {
      const [style, ...rest] = text.split(" ");
      const prm = rest.join(" ");
      if (!style || !prm) return reply(`⚠️ Usage: ${pfx}imagestyle <style> <prompt>\n\nStyles: realistic, anime, fantasy, cyberpunk, watercolor, oil_painting, pixel_art, sketch, cartoon, abstract, minimalist, surreal, vintage, steampunk, horror, sci_fi, pop_art`);
      return sendImage(`${style} image`, () => AI.imgStyle(prm, style));
    }

    const IMG_MAP = {
      imagerealistic: ["Realistic", AI.imgRealistic],
      imageanime:     ["Anime",     AI.imgAnime],
      imagefantasy:   ["Fantasy",   AI.imgFantasy],
      imagepixelart:  ["Pixel Art", AI.imgPixelArt],
      imagesketch:    ["Sketch",    AI.imgSketch],
      imagecyberpunk: ["Cyberpunk", AI.imgCyberpunk],
      imagewatercolor:["Watercolor",AI.imgWatercolor],
      imageoilpainting:["Oil Painting",AI.imgOilPainting],
      imagecartoon:   ["Cartoon",   AI.imgCartoon],
      imageabstract:  ["Abstract",  AI.imgAbstract],
      imageminimalist:["Minimalist",AI.imgMinimalist],
      imagesurreal:   ["Surreal",   AI.imgSurreal],
      imagevintage:   ["Vintage",   AI.imgVintage],
      imagesteampunk: ["Steampunk", AI.imgSteampunk],
      imagehorror:    ["Horror",    AI.imgHorror],
      imagescifi:     ["Sci-Fi",    AI.imgSciFi],
      imagepopArt:    ["Pop Art",   AI.imgPopArt],
    };
    if (IMG_MAP[command]) {
      const [lbl, fn] = IMG_MAP[command];
      return sendImage(lbl, () => fn(text));
    }

    // ── Code tools ────────────────────────────────────────────────────────────
    if (command === "prompttocode") {
      const parts = text.split(/\s+/);
      const lang  = parts.slice(-1)[0]?.match(/^[a-z]+$/) ? parts.pop() : "python";
      const prm   = parts.join(" ");
      if (!prm) return reply(`⚠️ Usage: ${pfx}prompttocode <prompt> [language]\nExample: ${pfx}prompttocode sort a list python`);
      await reply("💻 Generating code...");
      const r = await AI.promptToCode(prm, lang);
      return reply(r ? `*Code (${lang})*\n\`\`\`\n${r}\n\`\`\`` : "❌ Failed to generate code.");
    }

    if (command === "detectbugs") {
      if (!text) return reply(`⚠️ Usage: ${pfx}detectbugs <code>`);
      await reply("🔍 Analysing code for bugs...");
      const r = await AI.detectBugs(text);
      return reply(r ? `*Bug Report*\n\n${r}` : "❌ No bugs detected or analysis failed.");
    }

    if (command === "convertcode") {
      const [code, target, source] = text.split("|").map(s => s.trim());
      if (!code || !target) return reply(`⚠️ Usage: ${pfx}convertcode <code> | <target_lang> | [source_lang]`);
      await reply(`🔄 Converting to ${target}...`);
      const r = await AI.convertCode(code, target, source);
      return reply(r ? `*Converted (${target})*\n\`\`\`\n${r}\n\`\`\`` : "❌ Conversion failed.");
    }

    if (command === "explaincode") {
      const parts = text.split("|");
      const code  = parts[0].trim();
      const lang  = (parts[1] || "").trim();
      if (!code) return reply(`⚠️ Usage: ${pfx}explaincode <code> | [language]`);
      await reply("📖 Explaining code...");
      const r = await AI.explainCode(code, lang);
      return reply(r ? `*Code Explanation*\n\n${r}` : "❌ Explanation failed.");
    }

    // ── Creative ──────────────────────────────────────────────────────────────
    if (command === "aisong") {
      if (!text) return reply(`⚠️ Usage: ${pfx}aisong <title> | [genre] | [artist]\nExample: ${pfx}aisong Love Forever | afrobeat | Davido`);
      const [title, genre, artist] = text.split("|").map(s => s.trim());
      await reply("🎵 Generating song lyrics...");
      const r = await AI.aiSong(title, genre, artist);
      return reply(r ? `🎵 *${title}*\n\n${r}` : "❌ Song generation failed.");
    }

    if (command === "aiinstrumental") {
      if (!text) return reply(`⚠️ Usage: ${pfx}aiinstrumental <title> | [genre]`);
      const [title, genre] = text.split("|").map(s => s.trim());
      await reply("🎶 Generating instrumental...");
      const r = await AI.aiInstrumental(title, genre);
      return reply(r ? `🎶 *${title}*\n\n${r}` : "❌ Instrumental generation failed.");
    }

    if (command === "chatyoutube") {
      const parts = text.split("|");
      const url   = (parts[0] || "").trim();
      const q     = (parts[1] || "summarize this video").trim();
      if (!url) return reply(`⚠️ Usage: ${pfx}chatyoutube <youtube_url> | <question>`);
      await reply("📹 Analysing YouTube video...");
      const r = await AI.chatYoutube(url, q);
      return reply(r ? `📹 *Video Analysis*\n\n${r}` : "❌ Could not process that video.");
    }

    if (command === "resetai") {
      await AI.reset(userId);
      return reply("✅ Your AI conversation context has been reset.");
    }

    // ── API Status ────────────────────────────────────────────────────────────
    if (command === "apistatus") {
      if (!isOwner && !isDev) return reply("🚫 Owner only.");
      await reply("🔍 *Checking AI endpoints...*");
      const endpoints = [
        ["GPT-5",          () => AI.gpt5("hi")],
        ["Gemini",         () => AI.gemini("hi")],
        ["Gemini 2.5F",    () => AI.gemini25f("hi")],
        ["DeepSeek",       () => AI.deepseek("hi")],
        ["DeepSeek R1",    () => AI.deepseekR1("hi")],
        ["Claude",         () => AI.claude("hi")],
        ["Grok",           () => AI.grok("hi")],
        ["Meta AI",        () => AI.meta("hi")],
        ["Copilot",        () => AI.copilot("hi")],
        ["QwQ-32B",        () => AI.qwq("hi")],
        ["Logical",        () => AI.logical("hi")],
      ];
      const results = await Promise.allSettled(
        endpoints.map(async ([label, fn]) => {
          const t0 = Date.now();
          const r  = await fn();
          return { label, ok: !!r, ms: Date.now() - t0 };
        })
      );
      const lines = results.map(r => {
        const v = r.status === "fulfilled" ? r.value : { label: "?", ok: false, ms: 0 };
        return `${v.ok ? "✅" : "❌"} *${v.label}*${v.ok ? ` — ${v.ms}ms` : " — OFFLINE"}`;
      });
      return reply(`🤖 *AI Endpoint Status*\n\n${lines.join("\n")}`);
    }
  },
};
