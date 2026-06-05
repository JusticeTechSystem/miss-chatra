// plugins/hyperpersonal.js — Miss Chatra Hyper-Personalization
// Member personas, smart mention suggester, personalized news,
// interest matching, mood-based responses, memory journal, custom bot personality
// All features are GROUP-ISOLATED
"use strict";

const axios = require("axios");
const fs    = require("fs");
const path  = require("path");

const DB_DIR = path.join(__dirname, "..", "database");
const PERSONA_FILE  = path.join(DB_DIR, "member_personas.json");
const MEMORY_FILE   = path.join(DB_DIR, "memory_journal.json");
const PERSONALITY_FILE = path.join(DB_DIR, "bot_personality.json");
const MOOD_FILE     = path.join(DB_DIR, "group_mood.json");

function rj(f, fb={}) { try{return JSON.parse(fs.readFileSync(f,"utf8"));}catch{return fb;} }
function wj(f,d) { try{if(!fs.existsSync(DB_DIR))fs.mkdirSync(DB_DIR,{recursive:true});fs.writeFileSync(f,JSON.stringify(d,null,2));}catch{} }

// ── Persona helpers ───────────────────────────────────────────────────────────
function getPersona(userId) {
  const all = rj(PERSONA_FILE, {});
  return all[userId] || { interests:[], expertise:[], msgCount:0, lastSeen:0, sentiment:[] };
}
function savePersona(userId, p) { const all=rj(PERSONA_FILE,{}); all[userId]=p; wj(PERSONA_FILE,all); }

// Update persona from message (called passively from message.js)
function updatePersonaFromMessage(userId, text, chatId) {
  const p = getPersona(userId);
  p.msgCount = (p.msgCount || 0) + 1;
  p.lastSeen = Date.now();
  p.lastChat = chatId;

  // Detect interests from keywords
  const interestMap = {
    football:  ["football","soccer","epl","laliga","goal","match","premier","champions"],
    music:     ["music","song","artist","album","listen","spotify","lyrics"],
    tech:      ["code","programming","developer","app","software","tech","api","bot"],
    business:  ["business","sales","marketing","revenue","startup","entrepreneur"],
    faith:     ["god","church","bible","pray","prayer","faith","jesus","worship"],
    finance:   ["crypto","bitcoin","investment","stock","money","forex","trading"],
    food:      ["food","recipe","eat","cook","restaurant","delicious","hungry"],
    health:    ["fitness","gym","health","exercise","workout","diet","weight"],
    education: ["study","school","university","learn","course","exam","degree"],
    news:      ["news","politics","government","election","president","minister"],
  };

  const lower = (text||"").toLowerCase();
  for (const [interest, keywords] of Object.entries(interestMap)) {
    if (keywords.some(kw => lower.includes(kw))) {
      if (!p.interests.includes(interest)) {
        p.interests.push(interest);
        if (p.interests.length > 8) p.interests.shift(); // keep recent 8
      }
    }
  }

  // Detect expertise from message patterns
  const expertiseMap = {
    "developer":    ["function","const","async","await","import","export","npm","git"],
    "designer":     ["figma","design","ui","ux","color","font","prototype","wireframe"],
    "marketer":     ["campaign","conversion","ctr","seo","ads","funnel","engagement"],
    "pastor":       ["sermon","congregation","gospel","ministry","anointing","blessing"],
    "entrepreneur": ["startup","mvp","pitch","investor","scale","revenue","client"],
  };
  for (const [exp, kws] of Object.entries(expertiseMap)) {
    if (kws.some(kw => lower.includes(kw)) && !p.expertise.includes(exp)) {
      p.expertise.push(exp);
      if (p.expertise.length > 5) p.expertise.shift();
    }
  }

  // Sentiment tracking (last 10 messages)
  const positive = ["great","amazing","love","excellent","good","happy","thanks","awesome","blessed","wonderful"];
  const negative = ["hate","bad","terrible","awful","worst","frustrated","angry","sad","disappointed"];
  const sentiment = positive.some(w=>lower.includes(w)) ? "positive" : negative.some(w=>lower.includes(w)) ? "negative" : "neutral";
  p.sentiment = [...(p.sentiment||[]).slice(-9), sentiment];

  savePersona(userId, p);
}

// ── Group mood tracking ───────────────────────────────────────────────────────
function updateGroupMood(chatId, sentiment) {
  const all = rj(MOOD_FILE, {});
  if (!all[chatId]) all[chatId] = { history: [], updated: 0 };
  all[chatId].history = [...all[chatId].history.slice(-49), { s: sentiment, t: Date.now() }];
  all[chatId].updated = Date.now();
  wj(MOOD_FILE, all);
}

function getGroupMoodSummary(chatId) {
  const all  = rj(MOOD_FILE, {});
  const data = all[chatId]?.history || [];
  if (!data.length) return { positive:0, negative:0, neutral:0, overall:"neutral", emoji:"😐" };
  const counts = { positive:0, negative:0, neutral:0 };
  for (const d of data) counts[d.s] = (counts[d.s]||0) + 1;
  const total = data.length;
  const pct = k => Math.round(counts[k]/total*100);
  const overall = counts.positive > counts.negative ? "positive" : counts.negative > counts.positive ? "negative" : "neutral";
  const emoji   = overall==="positive" ? "😊" : overall==="negative" ? "😔" : "😐";
  return { positive:pct("positive"), negative:pct("negative"), neutral:pct("neutral"), overall, emoji, total };
}

// ── Memory journal ────────────────────────────────────────────────────────────
function getMemory(userId) { return rj(MEMORY_FILE,{})[userId] || []; }
function addMemory(userId, fact, chatId) {
  const all  = rj(MEMORY_FILE,{});
  if (!all[userId]) all[userId] = [];
  all[userId].push({ fact, chatId, savedAt: Date.now() });
  if (all[userId].length > 50) all[userId].shift();
  wj(MEMORY_FILE, all);
}
function delMemory(userId, idx) {
  const all = rj(MEMORY_FILE,{});
  if (all[userId]) { all[userId].splice(idx,1); wj(MEMORY_FILE,all); }
}

// ── Custom bot personality ────────────────────────────────────────────────────
function getPersonality(chatId) { return rj(PERSONALITY_FILE,{})[chatId] || null; }
function savePersonality(chatId, p) { const all=rj(PERSONALITY_FILE,{}); all[chatId]=p; wj(PERSONALITY_FILE,all); }

// ── Smart mention suggester ───────────────────────────────────────────────────
function findExpertFor(question, chatId) {
  const lower = (question||"").toLowerCase();
  const topicExpertise = {
    "code|programming|bug|error|api|app|software|developer": "developer",
    "design|figma|ui|ux|logo|brand": "designer",
    "marketing|seo|ads|campaign|social media": "marketer",
    "bible|prayer|sermon|faith|gospel|god": "pastor",
    "startup|business|sales|pitch|revenue": "entrepreneur",
  };

  let neededExpertise = null;
  for (const [patterns, exp] of Object.entries(topicExpertise)) {
    if (patterns.split("|").some(p => lower.includes(p))) {
      neededExpertise = exp; break;
    }
  }
  if (!neededExpertise) return null;

  // Find persona with this expertise
  const allPersonas = rj(PERSONA_FILE,{});
  const experts = Object.entries(allPersonas)
    .filter(([,p]) => p.expertise?.includes(neededExpertise) && p.lastChat === chatId)
    .sort((a,b) => (b[1].msgCount||0)-(a[1].msgCount||0));

  return experts[0]?.[0] || null;
}

// ── Interest matcher ──────────────────────────────────────────────────────────
function findSimilarInterests(userId, chatId) {
  const myPersona = getPersona(userId);
  const myInterests = myPersona.interests || [];
  if (!myInterests.length) return [];

  const allPersonas = rj(PERSONA_FILE,{});
  const matches = [];
  for (const [uid, p] of Object.entries(allPersonas)) {
    if (uid === userId) continue;
    if (p.lastChat !== chatId) continue;
    const shared = (p.interests||[]).filter(i => myInterests.includes(i));
    if (shared.length >= 2) {
      matches.push({ userId: uid, sharedInterests: shared, count: shared.length });
    }
  }
  return matches.sort((a,b) => b.count-a.count).slice(0,5);
}

module.exports = {
  name: "HyperPersonal",
  category: "personalization",
  desc: "Member personas, smart mentions, interest matching, mood tracking, memory journal, custom personality",
  command: [
    // Personas
    "mypersona","persona","memberpersona",
    // Smart mention
    "whoshouldanswer","askexpert","expertfor",
    // Interest matching
    "myinterests","findmatch","similarpeople","interestmatch",
    // Group mood
    "groupmood","mood","moodtracker","moodhistory",
    // Memory journal
    "remember","memories","mymemories","forgetme","forgetall","forgetthat",
    // Custom personality
    "setpersonality","showpersonality","resetpersonality","personality",
    // Personalized news
    "mynews","personalfeed","newsforme",
    // Activate features
    "personason","personasoff","moodtrackon","moodtrackoff",
  ],
  updatePersonaFromMessage,
  updateGroupMood,
  getPersonality,
  findExpertFor,

  run: async ({ sock, m, args, command, chatId, userId, reply, isOwner, isDev, isAdmin, prefix, mentionedJid }) => {
    const pfx   = prefix || "/";
    const chat  = chatId || m?.chat;
    const canUse = isOwner || isDev || isAdmin;
    const input  = args.join(" ").trim();
    const name   = m?.pushName || userId?.split("@")[0] || "User";

    // ── MY PERSONA ────────────────────────────────────────────────────────────
    if (["mypersona","persona"].includes(command)) {
      const targetId = mentionedJid?.[0] || userId;
      const p = getPersona(targetId);
      const targetName = mentionedJid?.[0] ? `@${targetId.split("@")[0]}` : "You";

      if (!p.msgCount) return reply(`${targetName} ${targetName==="You"?"don't":"doesn't"} have a persona yet.\n\nPersonas are built automatically from messages. Send some messages first!`);

      const mood = p.sentiment?.length > 0
        ? (() => { const c={positive:0,negative:0,neutral:0}; p.sentiment.forEach(s=>c[s]++); const top=Object.entries(c).sort((a,b)=>b[1]-a[1])[0]; return top[0]; })()
        : "neutral";
      const moodEmoji = {positive:"😊",negative:"😔",neutral:"😐"}[mood] || "😐";

      return reply([
        `🧠 *${targetName === "You" ? "Your" : targetName+"'s"} Persona*`,
        `━━━━━━━━━━━━━━━━━━━━`,
        `📊 Messages: *${p.msgCount}*`,
        `🕐 Last active: ${p.lastSeen ? new Date(p.lastSeen).toLocaleDateString() : "Unknown"}`,``,
        p.interests?.length ? `💡 *Interests:*\n  ${p.interests.map(i=>`🔹 ${i}`).join("\n  ")}` : "",
        p.expertise?.length ? `🏆 *Expertise:*\n  ${p.expertise.map(e=>`⭐ ${e}`).join("\n  ")}` : "",
        `${moodEmoji} *Recent mood:* ${mood}`,``,
        `_Persona auto-built from message patterns_`,
      ].filter(Boolean).join("\n"));
    }

    if (command === "memberpersona") {
      if (!canUse) return reply("🔒 Admin only.");
      const allPersonas = rj(PERSONA_FILE,{});
      const groupPersonas = Object.entries(allPersonas)
        .filter(([,p]) => p.lastChat === chat)
        .sort((a,b) => (b[1].msgCount||0)-(a[1].msgCount||0))
        .slice(0,10);

      if (!groupPersonas.length) return reply("No member personas built yet. Members need to be more active!");

      const lines = [`🧠 *Member Personas — Top 10*\n`];
      for (const [uid, p] of groupPersonas) {
        const top = p.interests?.[0] || "unknown";
        lines.push(`👤 @${uid.split("@")[0]} — ${p.msgCount} msgs — 💡 ${top}`);
      }
      return reply(lines.join("\n"));
    }

    // ── SMART MENTION SUGGESTER ───────────────────────────────────────────────
    if (["whoshouldanswer","askexpert","expertfor"].includes(command)) {
      if (!input) return reply(`Usage: ${pfx}askexpert <question>\nExample: ${pfx}askexpert Who can help me fix this React bug?`);
      const expertId = findExpertFor(input, chat);
      if (!expertId) return reply(`🤷 No expert found for that topic yet.\n\nPersonas are built over time from member messages.`);
      const expertPersona = getPersona(expertId);
      return reply([
        `💡 *Expert Suggestion*`,``,
        `For your question: _"${input.slice(0,60)}..."_`,``,
        `I suggest asking: @${expertId.split("@")[0]}`,
        expertPersona.expertise?.length ? `🏆 Expertise: ${expertPersona.expertise.join(", ")}` : "",
        `📊 Active member with ${expertPersona.msgCount} messages`,``,
        `_Based on message pattern analysis_`,
      ].filter(Boolean).join("\n"));
    }

    // ── INTEREST MATCHING ─────────────────────────────────────────────────────
    if (["myinterests","findmatch","similarpeople","interestmatch"].includes(command)) {
      if (command === "myinterests") {
        const p = getPersona(userId);
        if (!p.interests?.length) return reply(`You have no detected interests yet.\n\nSend more messages and your interests will be detected automatically!`);
        return reply([
          `💡 *Your Detected Interests*`,``,
          p.interests.map(i=>`  🔹 ${i.charAt(0).toUpperCase()+i.slice(1)}`).join("\n"),``,
          `_Detected from your messages_`,
          `_${pfx}findmatch — find members with similar interests_`,
        ].join("\n"));
      }

      const matches = findSimilarInterests(userId, chat);
      if (!matches.length) return reply(`No close interest matches found yet.\n\nMore members need to be active for interest matching to work.`);

      const lines = [`🤝 *Members with Similar Interests*\n`];
      for (const match of matches) {
        lines.push(`👤 @${match.userId.split("@")[0]}`);
        lines.push(`   🔗 Shared: ${match.sharedInterests.join(", ")}`);
        lines.push("");
      }
      lines.push(`_Based on message pattern analysis_`);
      return reply(lines.join("\n"));
    }

    // ── GROUP MOOD TRACKER ────────────────────────────────────────────────────
    if (["groupmood","mood","moodhistory"].includes(command)) {
      const summary = getGroupMoodSummary(chat);
      if (!summary.total) return reply(`No mood data yet.\n\nMood is tracked automatically from group messages. Chat more!`);

      const bar = (pct) => "█".repeat(Math.round(pct/10)) + "░".repeat(10-Math.round(pct/10));

      return reply([
        `${summary.emoji} *Group Mood Analysis*`,``,
        `Based on last ${summary.total} messages:`,``,
        `😊 Positive  [${bar(summary.positive)}] ${summary.positive}%`,
        `😐 Neutral   [${bar(summary.neutral)}] ${summary.neutral}%`,
        `😔 Negative  [${bar(summary.negative)}] ${summary.negative}%`,``,
        `🎯 *Overall mood: ${summary.overall.toUpperCase()}* ${summary.emoji}`,``,
        summary.overall === "negative" ? "💡 _Tip: Try posting something positive or fun!_" :
        summary.overall === "positive" ? "🌟 _The group has great energy right now!_" :
        "📊 _Mood is balanced — keep the good vibes going!_",
      ].join("\n"));
    }

    if (command === "moodtracker") {
      if (!canUse) return reply("🔒 Admin only.");
      const on = args[0]?.toLowerCase() === "on";
      const { gsSet } = require("../library/db");
      gsSet(chat, { mood_tracking: on ? 1 : 0 });
      return reply(`${on?"✅":"❌"} *Mood Tracking ${on?"Enabled":"Disabled"}*\n\n${on?"Bot will analyze the group's emotional tone from messages.":"Mood tracking stopped."}`);
    }

    if (["personason","personasoff"].includes(command)) {
      if (!canUse) return reply("🔒 Admin only.");
      const on = command === "personason";
      const { gsSet } = require("../library/db");
      gsSet(chat, { personas_on: on ? 1 : 0 });
      return reply(`${on?"✅":"❌"} *Member Personas ${on?"Enabled":"Disabled"}*\n\n${on?"Bot will build personality profiles from member messages.":"Persona tracking stopped."}`);
    }

    if (["moodtrackon","moodtrackoff"].includes(command)) {
      if (!canUse) return reply("🔒 Admin only.");
      const on = command === "moodtrackon";
      const { gsSet } = require("../library/db");
      gsSet(chat, { mood_tracking: on ? 1 : 0 });
      return reply(`${on?"✅":"❌"} *Mood Tracking ${on?"Enabled":"Disabled"}*`);
    }

    // ── MEMORY JOURNAL ────────────────────────────────────────────────────────
    if (command === "remember") {
      if (!input) return reply(`Usage: ${pfx}remember <fact about you>\nExample: ${pfx}remember I work as a software engineer in Lagos\n\nBot saves this and references it when relevant.`);
      addMemory(userId, input, chat);
      return reply(`✅ *Remembered!*\n\n"${input}"\n\n_${pfx}memories — view all your memories_`);
    }

    if (["memories","mymemories"].includes(command)) {
      const targetId = mentionedJid?.[0] || userId;
      if (mentionedJid?.[0] && !canUse) return reply("🔒 Admin only to view others' memories.");
      const mems = getMemory(targetId);
      if (!mems.length) return reply(`No memories saved${mentionedJid?.[0] ? ` for @${targetId.split("@")[0]}` : " yet"}.\n\nUse ${pfx}remember <fact> to save one.`);
      const lines = [`📔 *${mentionedJid?.[0] ? "@"+targetId.split("@")[0]+"'s" : "Your"} Memories (${mems.length})*\n`];
      mems.slice(-15).forEach((mem, i) => {
        lines.push(`${i+1}. "${mem.fact}"`);
        lines.push(`   _${new Date(mem.savedAt).toLocaleDateString()}_`);
        lines.push("");
      });
      lines.push(`_${pfx}forgetthat <number> — delete a memory_`);
      return reply(lines.join("\n"));
    }

    if (command === "forgetthat") {
      const idx = parseInt(input) - 1;
      const mems = getMemory(userId);
      if (isNaN(idx) || idx < 0 || idx >= mems.length) return reply(`Usage: ${pfx}forgetthat <number>\n\nUse ${pfx}memories to see numbers.`);
      const fact = mems[idx].fact;
      delMemory(userId, idx);
      return reply(`✅ Memory deleted:\n"${fact.slice(0,60)}"`);
    }

    if (command === "forgetme") {
      const all = rj(MEMORY_FILE,{});
      delete all[userId];
      wj(MEMORY_FILE, all);
      const allP = rj(PERSONA_FILE,{});
      delete allP[userId];
      wj(PERSONA_FILE, allP);
      return reply("✅ All your memories and persona data have been deleted.");
    }

    if (command === "forgetall") {
      if (!isOwner && !isDev) return reply("🔒 Owner only.");
      wj(MEMORY_FILE, {});
      wj(PERSONA_FILE, {});
      return reply("✅ All memory and persona data cleared for all users.");
    }

    // ── CUSTOM BOT PERSONALITY ────────────────────────────────────────────────
    if (["setpersonality","personality"].includes(command)) {
      if (!canUse) return reply("🔒 Admin only.");
      if (!input) {
        const p = getPersonality(chat);
        return reply([
          `🎭 *Custom Bot Personality*`,``,
          `Configure the bot's name, personality, and style for this group.`,``,
          `Current:`,
          p ? [
            `  Name: ${p.name || "Miss Chatra"}`,
            `  Style: ${p.style || "default"}`,
            `  Tone: ${p.tone || "friendly"}`,
          ].join("\n") : "  Default personality",``,
          `*Usage:* ${pfx}setpersonality name:<n> style:<style> tone:<tone>`,``,
          `*Styles:* friendly | professional | sarcastic | enthusiastic | calm`,
          `*Tones:* casual | formal | humorous | motivational`,``,
          `*Examples:*`,
          `  ${pfx}setpersonality name:Chidi style:friendly tone:casual`,
          `  ${pfx}setpersonality name:AssistantBot style:professional tone:formal`,``,
          `${pfx}resetpersonality — restore default`,
        ].join("\n"));
      }

      // Parse key:value pairs
      const parsed = {};
      const kvPattern = /(\w+):([\w\s]+?)(?=\s+\w+:|$)/g;
      let kvMatch;
      while ((kvMatch = kvPattern.exec(input)) !== null) {
        parsed[kvMatch[1].trim()] = kvMatch[2].trim();
      }

      if (!Object.keys(parsed).length) {
        // Try simple format: setpersonality <name>
        parsed.name = input;
      }

      const personality = { ...getPersonality(chat)||{}, ...parsed, updatedAt: Date.now() };
      savePersonality(chat, personality);
      return reply([
        `✅ *Bot Personality Updated*`,``,
        `🤖 Name: ${personality.name || "Miss Chatra"}`,
        `🎭 Style: ${personality.style || "friendly"}`,
        `📢 Tone: ${personality.tone || "casual"}`,``,
        `_Applied to this group only_`,
      ].join("\n"));
    }

    if (command === "showpersonality") {
      const p = getPersonality(chat);
      if (!p) return reply(`This group uses the default personality.\n\nUse ${pfx}setpersonality to customize.`);
      return reply([
        `🎭 *This Group's Bot Personality*`,``,
        `🤖 Name: *${p.name || "Miss Chatra"}*`,
        `🎨 Style: *${p.style || "friendly"}*`,
        `📢 Tone: *${p.tone || "casual"}*`,
        p.backstory ? `📖 Backstory: ${p.backstory}` : "",``,
        `_Updated: ${p.updatedAt ? new Date(p.updatedAt).toLocaleDateString() : "Never"}_`,
      ].filter(Boolean).join("\n"));
    }

    if (command === "resetpersonality") {
      if (!canUse) return reply("🔒 Admin only.");
      const all = rj(PERSONALITY_FILE,{});
      delete all[chat];
      wj(PERSONALITY_FILE, all);
      return reply("✅ Bot personality reset to default for this group.");
    }

    // ── PERSONALIZED NEWS FEED ────────────────────────────────────────────────
    if (["mynews","personalfeed","newsforme"].includes(command)) {
      const p = getPersona(userId);
      const interests = p.interests?.length ? p.interests.slice(0,3) : ["football","technology","business"];

      await reply(`📰 Fetching personalized news for your interests: ${interests.join(", ")}...`);

      const results = [];
      for (const interest of interests.slice(0,2)) {
        try {
          const searchMap = {
            football: "football soccer latest",
            tech: "technology AI latest news",
            business: "business finance Nigeria",
            music: "music entertainment latest",
            faith: "christian news inspiration",
            finance: "crypto bitcoin market news",
            health: "health wellness tips",
            education: "education scholarship opportunity",
            news: "Nigeria Africa breaking news",
          };
          const query = searchMap[interest] || `${interest} latest news`;
          const r = await axios.get(`https://newsapi.org/v2/everything`, {
            params: { q: query, language: "en", sortBy: "publishedAt", pageSize: 2, apiKey: "demo" },
            timeout: 8000,
          });
          const articles = r.data?.articles || [];
          for (const a of articles.slice(0,2)) {
            if (a.title && !a.title.includes("[Removed]")) {
              results.push({ title: a.title, url: a.url, source: a.source?.name, interest });
            }
          }
        } catch {}
      }

      if (!results.length) {
        return reply([
          `📰 *Your Personalized Feed*`,``,
          `Based on your interests: ${interests.join(", ")}`,``,
          `No live news available right now.`,``,
          `_Your interests: ${interests.join(" • ")}_`,
          `_${pfx}myinterests — view/update interests_`,
        ].join("\n"));
      }

      const lines = [`📰 *Your Personalized Feed*\n`];
      for (const r of results.slice(0,6)) {
        lines.push(`📌 *${r.interest.toUpperCase()}*`);
        lines.push(`${r.title.slice(0,80)}`);
        if (r.source) lines.push(`_${r.source}_`);
        if (r.url) lines.push(r.url);
        lines.push("");
      }
      lines.push(`_${pfx}myinterests — see your interests_`);
      await reply(lines.join("\n"));
      return;
    }
  }
};
