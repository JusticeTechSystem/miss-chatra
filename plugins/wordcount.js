// plugins/wordcount.js — Word Count & Text Analysis for Miss Chatra WA
"use strict";

// ── Part-of-speech heuristics ─────────────────────────────────────────────────
const PRONOUNS   = new Set(["i","me","my","myself","we","our","ours","ourselves","you","your","yours","yourself","yourselves","he","him","his","himself","she","her","hers","herself","it","its","itself","they","them","their","theirs","themselves","who","whom","which","what","this","that","these","those"]);
const PREPOSITIONS = new Set(["in","on","at","by","for","with","about","against","between","into","through","during","before","after","above","below","to","from","up","down","of","off","over","under","since","until","unless","while","toward","towards","upon","across","along","around","behind","beside","beyond","despite","except","inside","outside","within","without"]);
const CONJUNCTIONS = new Set(["and","but","or","nor","for","yet","so","although","because","since","unless","until","whether","while","after","before","if","though","even","once","rather","than","that","when","where","wherever","as"]);
const ARTICLES     = new Set(["a","an","the"]);
const AUX_VERBS    = new Set(["is","are","was","were","be","been","being","have","has","had","do","does","did","will","would","shall","should","may","might","must","can","could","ought","need","dare","used","get"]);

// Simple vowel counter
const VOWELS = new Set("aeiouAEIOU");

function analyseText(text) {
  const words       = text.trim().match(/\b[a-zA-Z'-]+\b/g) || [];
  const letters     = (text.match(/[a-zA-Z]/g) || []);
  const vowels      = letters.filter(c => VOWELS.has(c));
  const consonants  = letters.filter(c => !VOWELS.has(c));
  const sentences   = (text.match(/[.!?]+/g) || []).length || 1;
  const paragraphs  = text.split(/\n{2,}/).filter(p => p.trim()).length || 1;
  const uniqueWords = new Set(words.map(w => w.toLowerCase())).size;
  const spaces      = (text.match(/ /g) || []).length;
  const digits      = (text.match(/\d/g) || []).length;
  const special     = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;

  // POS classification
  const pronouns    = words.filter(w => PRONOUNS.has(w.toLowerCase()));
  const preps       = words.filter(w => PREPOSITIONS.has(w.toLowerCase()));
  const conjuns     = words.filter(w => CONJUNCTIONS.has(w.toLowerCase()));
  const articles    = words.filter(w => ARTICLES.has(w.toLowerCase()));
  const auxVerbs    = words.filter(w => AUX_VERBS.has(w.toLowerCase()));
  // Rough noun: capitalized non-first words, or ends with -tion/-ness/-ment/-ity/-ance/-ism/-er/-or
  const nounPattern = /^[A-Z]|tion$|ness$|ment$|ity$|ance$|ism$|er$|or$|age$|ing$/;
  const nouns       = words.filter(w => nounPattern.test(w) && !PRONOUNS.has(w.toLowerCase()) && !AUX_VERBS.has(w.toLowerCase()));
  // Rough verb: ends with -s/-ed/-ing/-en or is aux
  const verbPattern = /ed$|ing$|ize$|ise$|ify$/;
  const verbs       = words.filter(w => verbPattern.test(w.toLowerCase()) || AUX_VERBS.has(w.toLowerCase()));
  // Rough adjective: ends with -ful/-less/-ous/-ive/-al/-ble/-ic/-ish
  const adjPattern  = /ful$|less$|ous$|ive$|al$|ble$|ic$|ish$|ent$|ant$/;
  const adjs        = words.filter(w => adjPattern.test(w.toLowerCase()));
  // Adverb: ends with -ly
  const advs        = words.filter(w => /ly$/.test(w.toLowerCase()));

  // Reading time (avg 200 wpm)
  const readTimeSec = Math.max(1, Math.round((words.length / 200) * 60));
  const readTime    = readTimeSec < 60 ? `${readTimeSec}s` : `${Math.floor(readTimeSec / 60)}m ${readTimeSec % 60}s`;

  // Avg word length
  const avgLen = words.length ? (words.reduce((s, w) => s + w.length, 0) / words.length).toFixed(1) : "0.0";

  return {
    words: words.length, letters: letters.length, vowels: vowels.length, consonants: consonants.length,
    sentences, paragraphs, uniqueWords, spaces, digits, special, readTime, avgLen,
    pronouns: pronouns.length, prepositions: preps.length, conjunctions: conjuns.length,
    articles: articles.length, nouns: nouns.length, verbs: verbs.length,
    adjectives: adjs.length, adverbs: advs.length,
    pronounList: [...new Set(pronouns.map(w=>w.toLowerCase()))].slice(0,6).join(", ") || "none",
  };
}

function formatReport(text, a) {
  const preview = text.length > 50 ? text.slice(0, 50) + "…" : text;
  return [
    `📊 *Text Analysis*`,
    `_"${preview}"_`,
    ``,
    `📝 *Counts*`,
    `┣ Words:       *${a.words}* (${a.uniqueWords} unique)`,
    `┣ Letters:     *${a.letters}*`,
    `┣ Vowels:      *${a.vowels}*  Consonants: *${a.consonants}*`,
    `┣ Sentences:   *${a.sentences}*  Paragraphs: *${a.paragraphs}*`,
    `┣ Spaces:      *${a.spaces}*  Digits: *${a.digits}*`,
    `┗ Avg word:    *${a.avgLen}* chars`,
    ``,
    `🧩 *Parts of Speech* _(estimated)_`,
    `┣ Nouns:       *${a.nouns}*`,
    `┣ Verbs:       *${a.verbs}*`,
    `┣ Adjectives:  *${a.adjectives}*`,
    `┣ Adverbs:     *${a.adverbs}*`,
    `┣ Pronouns:    *${a.pronouns}* _(${a.pronounList})_`,
    `┣ Prepositions:*${a.prepositions}*`,
    `┣ Conjunctions:*${a.conjunctions}*`,
    `┗ Articles:    *${a.articles}*`,
    ``,
    `⏱ *Read time:* ~${a.readTime}`,
  ].join("\n");
}

module.exports = {
  name:     "WordCount",
  category: "tools",
  desc:     "Count words, letters, vowels, POS and analyse any text",
  command:  ["wc","wordcount","countwords","analysetext","analyzetext","textinfo","wordinfo"],

  run: async ({ sock, m, args, command, chatId, reply, prefix }) => {
    // Get text: from args, or from quoted message, or from body after command
    let text = args.join(" ").trim();
    if (!text && m.quoted) {
      text = m.quoted.text || m.quoted.caption || m.quoted.body || "";
    }
    if (!text) {
      return reply([
        `📊 *Word Counter & Text Analyser*`,
        ``,
        `Usage:`,
        `• *${prefix}wc <your text>* — analyse inline text`,
        `• Reply to any message with *${prefix}wc* — analyse quoted text`,
        ``,
        `Shows: word count, letters, vowels, consonants, nouns, verbs, adjectives, pronouns, read time and more.`,
      ].join("\n"));
    }

    const a      = analyseText(text);
    const report = formatReport(text, a);
    return reply(report);
  },
};
