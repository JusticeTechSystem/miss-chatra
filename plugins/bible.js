// plugins/bible.js — Miss Chatra Bible Plugin v2
// Verse lookup, working search, multi-user group quiz, scripture teaching, topic suggestions
"use strict";

const axios = require("axios");

// ── Bible Versions ────────────────────────────────────────────────────────────
const VERSIONS = {
  kjv: "kjv", niv: "web", nlt: "web", esv: "web",
  web: "web", bbe: "bbe", ylt: "ylt", asv: "asv",
};
const VERSION_LABELS = {
  kjv: "King James Version",       niv: "New International Version",
  nlt: "New Living Translation",   esv: "English Standard Version",
  web: "World English Bible",      bbe: "Bible in Basic English",
  ylt: "Young's Literal Translation", asv: "American Standard Version",
};

// ── Book name → bible-api.com id map ─────────────────────────────────────────
const BOOK_ABBR = {
  genesis:"genesis",gen:"genesis",exo:"exodus",exodus:"exodus",
  lev:"leviticus",leviticus:"leviticus",num:"numbers",numbers:"numbers",
  deu:"deuteronomy",deuteronomy:"deuteronomy",jos:"joshua",joshua:"joshua",
  jdg:"judges",judges:"judges",rut:"ruth",ruth:"ruth",
  "1sa":"1samuel","1samuel":"1samuel","2sa":"2samuel","2samuel":"2samuel",
  "1ki":"1kings","1kings":"1kings","2ki":"2kings","2kings":"2kings",
  "1ch":"1chronicles","1chronicles":"1chronicles","2ch":"2chronicles","2chronicles":"2chronicles",
  ezr:"ezra",ezra:"ezra",neh:"nehemiah",nehemiah:"nehemiah",
  est:"esther",esther:"esther",job:"job",
  psa:"psalms",psalm:"psalms",psalms:"psalms",
  pro:"proverbs",proverbs:"proverbs",ecc:"ecclesiastes",ecclesiastes:"ecclesiastes",
  sng:"songofsolomon","song of solomon":"songofsolomon","song of songs":"songofsolomon",
  isa:"isaiah",isaiah:"isaiah",jer:"jeremiah",jeremiah:"jeremiah",
  lam:"lamentations",lamentations:"lamentations",ezk:"ezekiel",ezekiel:"ezekiel",
  dan:"daniel",daniel:"daniel",hos:"hosea",hosea:"hosea",
  joe:"joel",joel:"joel",amo:"amos",amos:"amos",oba:"obadiah",obadiah:"obadiah",
  jon:"jonah",jonah:"jonah",mic:"micah",micah:"micah",
  nam:"nahum",nahum:"nahum",hab:"habakkuk",habakkuk:"habakkuk",
  zep:"zephaniah",zephaniah:"zephaniah",hag:"haggai",haggai:"haggai",
  zec:"zechariah",zechariah:"zechariah",mal:"malachi",malachi:"malachi",
  mat:"matthew",matthew:"matthew",mrk:"mark",mark:"mark",
  luk:"luke",luke:"luke",jhn:"john",john:"john",
  act:"acts",acts:"acts",rom:"romans",romans:"romans",
  "1co":"1corinthians","1corinthians":"1corinthians",
  "2co":"2corinthians","2corinthians":"2corinthians",
  gal:"galatians",galatians:"galatians",eph:"ephesians",ephesians:"ephesians",
  php:"philippians",philippians:"philippians",col:"colossians",colossians:"colossians",
  "1th":"1thessalonians","1thessalonians":"1thessalonians",
  "2th":"2thessalonians","2thessalonians":"2thessalonians",
  "1ti":"1timothy","1timothy":"1timothy",
  "2ti":"2timothy","2timothy":"2timothy",
  tit:"titus",titus:"titus",phm:"philemon",philemon:"philemon",
  heb:"hebrews",hebrews:"hebrews",jas:"james",james:"james",
  "1pe":"1peter","1peter":"1peter","2pe":"2peter","2peter":"2peter",
  "1jn":"1john","1john":"1john","2jn":"2john","2john":"2john","3jn":"3john","3john":"3john",
  jud:"jude",jude:"jude",rev:"revelation",revelation:"revelation",revelations:"revelation",
};

// Bible search index — topic → verses
const TOPIC_INDEX = {
  faith: ["Hebrews 11:1","Romans 10:17","Matthew 17:20","Ephesians 2:8-9","James 2:17","Hebrews 11:6","2 Corinthians 5:7","Galatians 2:20"],
  love: ["John 3:16","1 Corinthians 13:4-7","Romans 8:38-39","1 John 4:8","John 15:13","Romans 5:8","1 John 3:16","Ephesians 3:17-19"],
  hope: ["Jeremiah 29:11","Romans 5:3-5","Romans 8:24-25","Psalm 71:14","Lamentations 3:22-23","Romans 15:13","Hebrews 6:19","Isaiah 40:31"],
  prayer: ["Matthew 6:9-13","Philippians 4:6-7","1 Thessalonians 5:17","James 5:16","Matthew 7:7-8","Luke 18:1","Psalm 145:18","John 15:7"],
  strength: ["Philippians 4:13","Isaiah 40:31","Psalm 46:1","2 Corinthians 12:9","Psalm 28:7","Ephesians 6:10","Isaiah 41:10","Joshua 1:9"],
  grace: ["Ephesians 2:8-9","2 Corinthians 12:9","Romans 5:15","John 1:14","Hebrews 4:16","Romans 3:24","Titus 2:11","1 Peter 5:10"],
  peace: ["John 14:27","Philippians 4:7","Isaiah 26:3","Romans 5:1","Colossians 3:15","Psalm 29:11","John 16:33","2 Thessalonians 3:16"],
  salvation: ["Romans 10:9-10","John 3:16","Acts 4:12","Ephesians 2:8-9","Romans 6:23","1 John 1:9","John 14:6","Titus 3:5"],
  forgiveness: ["1 John 1:9","Ephesians 4:32","Matthew 6:14","Psalm 103:12","Colossians 3:13","Acts 3:19","Isaiah 43:25","Micah 7:18"],
  joy: ["Psalm 16:11","John 15:11","Romans 15:13","Nehemiah 8:10","Galatians 5:22-23","James 1:2-3","Psalm 30:5","Isaiah 35:10"],
  healing: ["Jeremiah 30:17","Isaiah 53:5","Psalm 103:2-3","James 5:14-15","Exodus 15:26","Proverbs 4:20-22","3 John 1:2","Psalm 107:20"],
  wisdom: ["James 1:5","Proverbs 3:5-6","Proverbs 9:10","Colossians 3:16","Psalm 111:10","Proverbs 4:7","1 Corinthians 1:30","Ecclesiastes 7:12"],
  fear: ["Isaiah 41:10","Psalm 23:4","2 Timothy 1:7","Joshua 1:9","Psalm 34:4","Isaiah 43:1","Romans 8:15","Psalm 56:3"],
  trust: ["Proverbs 3:5-6","Psalm 9:10","Psalm 56:3","Isaiah 26:4","Psalm 37:5","Jeremiah 17:7-8","Psalm 143:8","Nahum 1:7"],
  purpose: ["Jeremiah 29:11","Romans 8:28","Ephesians 2:10","Proverbs 19:21","Psalm 138:8","Isaiah 46:10","1 Corinthians 10:31","Acts 17:26"],
  blessing: ["Numbers 6:24-26","Genesis 12:2","Psalm 1:1-3","Ephesians 1:3","James 1:17","Deuteronomy 28:1-6","Psalm 103:1-5","Proverbs 10:22"],
  suffering: ["Romans 8:18","James 1:2-4","2 Corinthians 4:17","1 Peter 5:10","Romans 5:3-5","Psalm 34:18","John 16:33","2 Corinthians 12:9-10"],
  marriage: ["Genesis 2:24","Ephesians 5:25-28","1 Corinthians 13:4-7","Proverbs 18:22","Colossians 3:18-19","Hebrews 13:4","Ruth 1:16-17","Song of Solomon 8:6-7"],
  money: ["Matthew 6:24","1 Timothy 6:10","Proverbs 13:11","Luke 16:13","Ecclesiastes 5:10","Deuteronomy 8:18","Proverbs 22:7","Malachi 3:10"],
  worry: ["Matthew 6:25-27","Philippians 4:6-7","1 Peter 5:7","Psalm 55:22","Isaiah 43:1-2","Luke 12:22-24","Psalm 56:3","Proverbs 12:25"],
  death: ["John 11:25-26","Romans 8:38-39","1 Corinthians 15:55-57","Revelation 21:4","Psalm 23:4","2 Corinthians 5:8","John 14:2-3","1 Thessalonians 4:13-14"],
  "holy spirit": ["John 14:16-17","Acts 1:8","Galatians 5:22-23","Romans 8:26","John 16:13","Ephesians 5:18","1 Corinthians 6:19","Acts 2:38"],
  repentance: ["Acts 3:19","2 Chronicles 7:14","1 John 1:9","Luke 15:7","Mark 1:15","Acts 2:38","2 Corinthians 7:10","Joel 2:12-13"],
  worship: ["John 4:24","Psalm 100:1-4","Revelation 4:11","Romans 12:1","Psalm 150:1-6","Hebrews 13:15","Psalm 95:6-7","Isaiah 6:3"],
  fasting: ["Matthew 6:16-18","Isaiah 58:6-7","Acts 13:2-3","Matthew 17:21","Ezra 8:23","Nehemiah 1:4","Joel 2:12","Acts 14:23"],
  humility: ["Proverbs 22:4","James 4:10","Matthew 23:12","Philippians 2:3-4","1 Peter 5:6","Micah 6:8","Colossians 3:12","Isaiah 57:15"],
  sin: ["Romans 3:23","1 John 1:8-9","Romans 6:23","Isaiah 59:2","Psalm 51:1-3","Hebrews 4:15","James 4:17","Romans 8:1"],
  heaven: ["John 14:2-3","Revelation 21:1-4","Matthew 6:20","Philippians 3:20","Colossians 3:2","1 Corinthians 2:9","Hebrews 11:16","Revelation 22:1-5"],
  patience: ["Romans 5:3-4","James 1:3-4","Hebrews 10:36","Psalm 27:14","Lamentations 3:25","Isaiah 40:31","Galatians 6:9","Romans 15:4"],
  obedience: ["John 14:15","Acts 5:29","1 Samuel 15:22","Deuteronomy 28:1","Romans 6:17","James 1:25","Luke 6:46","John 15:10"],
  courage: ["Joshua 1:9","Psalm 27:1","Isaiah 41:10","2 Timothy 1:7","1 Corinthians 16:13","Deuteronomy 31:6","Acts 4:29","Ephesians 6:10"],
  temptation: ["1 Corinthians 10:13","James 4:7","Matthew 26:41","1 Peter 5:8-9","Ephesians 6:11","Hebrews 4:15","James 1:13-14","2 Peter 2:9"],
};

// ── Bible API fetchers ────────────────────────────────────────────────────────
async function fetchVerse(reference, version = "kjv") {
  const apiVer = VERSIONS[version] || "kjv";
  // Primary: bible-api.com
  try {
    const r = await axios.get(`https://bible-api.com/${encodeURIComponent(reference)}`, {
      params: { translation: apiVer },
      timeout: 12000,
      headers: { "User-Agent": "MissChatra/2.0" },
    });
    if (r.data?.text || r.data?.verses?.length) {
      const text = r.data.text?.trim() || r.data.verses?.map(v => v.text).join(" ").trim();
      return { reference: r.data.reference || reference, text, version: apiVer.toUpperCase() };
    }
  } catch {}

  // Fallback: getbible.net
  try {
    const bookMap = { john: "John", romans: "Romans", psalms: "Psalms", genesis: "Genesis" };
    const r2 = await axios.get(`https://getbible.net/v2/${apiVer}/${reference.replace(/\s+/g,"+")}.json`, {
      timeout: 10000,
    });
    if (r2.data?.verses) {
      const text = Object.values(r2.data.verses).map(v => v.verse).join(" ").trim();
      if (text) return { reference, text, version: apiVer.toUpperCase() };
    }
  } catch {}

  return null;
}

// ── BIBLE SEARCH — multi-source with fallback ─────────────────────────────────
async function searchBible(query) {
  const results = [];
  const seen = new Set();
  const queryLower = query.toLowerCase().trim();

  function addResult(ref, text, score=1) {
    const key = (ref||"").toLowerCase().trim();
    if (seen.has(key) || !text || text.length < 5) return;
    seen.add(key);
    results.push({ ref: ref||"", text: text.slice(0,250), _score: score });
  }

  // Extract meaningful keywords (strip stopwords)
  const stopwords = new Set(["the","a","an","is","are","was","were","be","been","being","have","has","had","do","does","did","will","would","could","should","may","might","shall","can","i","you","he","she","it","we","they","me","him","her","us","them","my","your","his","our","their","this","that","these","those","in","on","at","to","for","of","and","or","but","not","with","from","by","about","as","into","through","during","before","after","above","below","between","out","off","over","under","again","then","once","here","there","when","where","why","how","all","both","each","few","more","most","other","some","such","no","nor","only","own","same","so","than","too","very","just","because","until","while","although","though","even","just","give","gives","gave","given","make","made","makes","need","needs","needed","want","wants","wanted","get","gets","got","go","goes","went","come","comes","came","feel","feels","felt","know","knows","knew","say","says","said","see","sees","saw","tell","told","let","lets","still","like","also","more","when","help","god","lord","jesus","christ"]);
  const keywords = queryLower.split(/\s+/).filter(w => w.length > 2 && !stopwords.has(w));

  // SOURCE 1: Try as direct Bible reference first (John 3:16, Psalm 23 etc)
  try {
    const r = await axios.get(`https://bible-api.com/${encodeURIComponent(query.trim())}?translation=kjv`, { timeout: 10000 });
    if (r.data?.verses?.length > 0 && r.data.verses.length < 40) {
      for (const v of r.data.verses.slice(0, 10)) {
        addResult(`${v.book_name} ${v.chapter}:${v.verse}`, v.text?.trim(), 10);
      }
      if (results.length >= 2) return results.sort((a,b) => b._score - a._score);
    }
  } catch {}

  // SOURCE 2: getbible.net search
  try {
    const r = await axios.get(`https://getbible.net/v2/kjv.json`, { timeout: 12000 });
    if (r.data) {
      const books = Object.values(r.data);
      for (const book of books) {
        const bookName = book.name || "";
        for (const [chNum, chapter] of Object.entries(book.chapters || {})) {
          for (const [vNum, verse] of Object.entries(chapter.verses || {})) {
            const text = (verse.verse || "").toLowerCase();
            const score = keywords.filter(kw => text.includes(kw)).length;
            if (score > 0) {
              addResult(`${bookName} ${chNum}:${vNum}`, verse.verse, score);
              if (results.length >= 30) break;
            }
          }
          if (results.length >= 30) break;
        }
        if (results.length >= 30) break;
      }
      if (results.length >= 3) {
        return results.sort((a,b) => b._score-a._score).slice(0,10);
      }
    }
  } catch {}

  // SOURCE 3: scripture.api.bible search (free public key)
  try {
    const apiKeys = ["b6d96f2c842ed2cc0bc73a9e3fa8e2a8","9879dbb7cfe39e4d-01"];
    for (const key of apiKeys) {
      const r = await axios.get(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/search`, {
        params: { query: query, limit: 10, sort: "relevance" },
        headers: { "api-key": key },
        timeout: 12000,
      });
      const passages = r.data?.data?.verses || r.data?.data?.passages || [];
      for (const p of passages) {
        const text = (p.text || p.content || "").replace(/<[^>]+>/g,"").trim();
        if (text) addResult(p.reference || p.id, text, 5);
      }
      if (results.length >= 3) return results.sort((a,b) => b._score-a._score).slice(0,10);
    }
  } catch {}

  // SOURCE 4: bible-api.com keyword search
  try {
    const searchTerms = keywords.slice(0,3);
    for (const term of searchTerms) {
      const r = await axios.get(`https://bible-api.com/${encodeURIComponent(term)}?translation=kjv`, { timeout: 8000 });
      if (r.data?.verses?.length > 0 && r.data.verses.length < 50) {
        for (const v of r.data.verses.slice(0,5)) {
          addResult(`${v.book_name} ${v.chapter}:${v.verse}`, v.text?.trim(), 4);
        }
      }
      await new Promise(r => setTimeout(r, 150));
    }
    if (results.length >= 3) return results.sort((a,b) => b._score-a._score).slice(0,10);
  } catch {}

  // SOURCE 5: Exhaustive local index — ALL topic verses searched against ALL keywords
  const allMatchedRefs = new Set();

  // 5a: Direct topic name matches
  for (const [topic, refs] of Object.entries(TOPIC_INDEX)) {
    const topicWords = topic.toLowerCase().split(" ");
    const matchScore =
      queryLower.includes(topic) ? 8 :
      topic.includes(queryLower) ? 7 :
      topicWords.some(w => queryLower.includes(w)) ? 5 :
      keywords.some(kw => topicWords.some(tw => tw.includes(kw) || kw.includes(tw))) ? 3 : 0;
    if (matchScore > 0) {
      for (const ref of refs) allMatchedRefs.add(ref);
    }
  }

  // 5b: Semantic matches - expand keywords to related topics
  const semanticMap = {
    "afraid":"fear","scared":"fear","frightened":"fear","anxious":"worry","anxious":"worry",
    "worried":"worry","stressed":"worry","broke":"money","debt":"money","poor":"money",
    "rich":"money","sick":"healing","ill":"healing","disease":"healing","pain":"healing",
    "hopeless":"hope","despair":"hope","sad":"joy","depression":"hope","angry":"forgiveness",
    "enemy":"love","hate":"love","divorced":"marriage","lonely":"love","single":"love",
    "addiction":"temptation","struggle":"strength","weak":"strength","tired":"strength",
    "lost":"purpose","confused":"wisdom","decision":"wisdom","direction":"purpose",
    "praise":"worship","thankful":"worship","grateful":"blessing","blessed":"blessing",
    "eternal":"salvation","heaven":"heaven","hell":"salvation","saved":"salvation",
    "prayer":"prayer","praying":"prayer","fasting":"fasting","bible":"wisdom",
    "scripture":"wisdom","holy":"holy spirit","spirit":"holy spirit",
    "fire":"courage","bold":"courage","brave":"courage",
    "peace":"peace","calm":"peace","still":"peace","rest":"peace",
    "grace":"grace","mercy":"forgiveness","compassion":"love",
  };

  for (const kw of keywords) {
    const mapped = semanticMap[kw];
    if (mapped && TOPIC_INDEX[mapped]) {
      for (const ref of TOPIC_INDEX[mapped]) allMatchedRefs.add(ref);
    }
    // Also direct keyword -> topic search
    for (const [topic, refs] of Object.entries(TOPIC_INDEX)) {
      if (topic.includes(kw) || kw.includes(topic)) {
        for (const ref of refs.slice(0,4)) allMatchedRefs.add(ref);
      }
    }
  }

  // Fetch all matched refs
  const refsToFetch = [...allMatchedRefs].slice(0, 15);
  for (const ref of refsToFetch) {
    try {
      const v = await fetchVerse(ref, "kjv");
      if (v?.text) {
        const text = v.text.toLowerCase();
        const score = keywords.filter(kw => text.includes(kw)).length + 2;
        addResult(v.reference || ref, v.text, score);
      }
      await new Promise(r => setTimeout(r, 100));
    } catch {}
  }

  if (results.length >= 2) return results.sort((a,b) => b._score-a._score).slice(0,10);

  // SOURCE 6: Massive inline verse bank — 60+ verses, scored against query
  const VERSE_BANK = [
    {ref:"John 3:16",text:"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."},
    {ref:"Jeremiah 29:11",text:"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future."},
    {ref:"Philippians 4:13",text:"I can do all this through him who gives me strength."},
    {ref:"Romans 8:28",text:"And we know that in all things God works for the good of those who love him, who have been called according to his purpose."},
    {ref:"Psalm 23:1-3",text:"The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul."},
    {ref:"Isaiah 40:31",text:"But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."},
    {ref:"Proverbs 3:5-6",text:"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."},
    {ref:"Matthew 6:33",text:"But seek first his kingdom and his righteousness, and all these things will be given to you as well."},
    {ref:"Romans 8:38-39",text:"For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God."},
    {ref:"Hebrews 11:1",text:"Now faith is confidence in what we hope for and assurance about what we do not see."},
    {ref:"Joshua 1:9",text:"Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."},
    {ref:"Psalm 119:105",text:"Your word is a lamp for my feet, a light on my path."},
    {ref:"Matthew 11:28",text:"Come to me, all you who are weary and burdened, and I will give you rest."},
    {ref:"Isaiah 41:10",text:"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."},
    {ref:"Galatians 5:22-23",text:"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control."},
    {ref:"1 Corinthians 13:4-7",text:"Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs."},
    {ref:"Romans 3:23",text:"For all have sinned and fall short of the glory of God."},
    {ref:"John 14:6",text:"Jesus answered, I am the way and the truth and the life. No one comes to the Father except through me."},
    {ref:"2 Timothy 3:16",text:"All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness."},
    {ref:"Psalm 46:10",text:"He says, Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth."},
    {ref:"Philippians 4:6-7",text:"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts."},
    {ref:"2 Timothy 1:7",text:"For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline."},
    {ref:"Psalm 37:4",text:"Take delight in the Lord, and he will give you the desires of your heart."},
    {ref:"John 14:27",text:"Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid."},
    {ref:"Romans 12:2",text:"Do not conform to the pattern of this world, but be transformed by the renewing of your mind."},
    {ref:"Ephesians 2:8-9",text:"For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God— not by works, so that no one can boast."},
    {ref:"Psalm 91:1",text:"Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty."},
    {ref:"Jeremiah 30:17",text:"But I will restore you to health and heal your wounds, declares the Lord."},
    {ref:"Isaiah 53:5",text:"But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed."},
    {ref:"James 5:16",text:"Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective."},
    {ref:"1 John 1:9",text:"If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness."},
    {ref:"Ephesians 4:32",text:"Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."},
    {ref:"Psalm 34:18",text:"The Lord is close to the brokenhearted and saves those who are crushed in spirit."},
    {ref:"Romans 10:9",text:"If you declare with your mouth, Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved."},
    {ref:"John 15:13",text:"Greater love has no one than this: to lay down one's life for one's friends."},
    {ref:"Nehemiah 8:10",text:"Do not grieve, for the joy of the Lord is your strength."},
    {ref:"Romans 5:8",text:"But God demonstrates his own love for us in this: While we were still sinners, Christ died for us."},
    {ref:"Lamentations 3:22-23",text:"Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness."},
    {ref:"John 10:10",text:"The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full."},
    {ref:"Matthew 7:7",text:"Ask and it will be given to you; seek and you will find; knock and the door will be opened to you."},
    {ref:"Deuteronomy 28:13",text:"The Lord will make you the head, not the tail. If you pay attention to the commands of the Lord your God and carefully follow them, you will always be at the top, never at the bottom."},
    {ref:"Proverbs 18:21",text:"The tongue has the power of life and death, and those who love it will eat its fruit."},
    {ref:"Malachi 3:10",text:"Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this says the Lord, and see if I will not throw open the floodgates of heaven and pour out so much blessing."},
    {ref:"Psalm 1:1-3",text:"Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers, but whose delight is in the law of the Lord."},
    {ref:"1 Peter 5:7",text:"Cast all your anxiety on him because he cares for you."},
    {ref:"Numbers 6:24-26",text:"The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace."},
    {ref:"Colossians 3:23",text:"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."},
    {ref:"James 1:2-4",text:"Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance."},
    {ref:"Proverbs 4:23",text:"Above all else, guard your heart, for everything you do flows from it."},
    {ref:"Romans 6:23",text:"For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord."},
    {ref:"John 11:25",text:"Jesus said to her, I am the resurrection and the life. The one who believes in me will live, even though they die."},
    {ref:"Isaiah 26:3",text:"You will keep in perfect peace those whose minds are steadfast, because they trust in you."},
    {ref:"Revelation 21:4",text:"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away."},
    {ref:"Genesis 1:1",text:"In the beginning God created the heavens and the earth."},
    {ref:"John 1:1",text:"In the beginning was the Word, and the Word was with God, and the Word was God."},
    {ref:"Acts 1:8",text:"But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth."},
    {ref:"Ephesians 6:11",text:"Put on the full armor of God, so that you can take your stand against the devil's schemes."},
    {ref:"1 Corinthians 10:13",text:"No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear."},
    {ref:"Psalm 51:10",text:"Create in me a pure heart, O God, and renew a steadfast spirit within me."},
    {ref:"Matthew 5:8",text:"Blessed are the pure in heart, for they will see God."},
    {ref:"Micah 6:8",text:"He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God."},
  ];

  const allKw = [...new Set([...keywords, ...queryLower.split(/\s+/).filter(w=>w.length>2)])];
  for (const v of VERSE_BANK) {
    const vLower = v.text.toLowerCase();
    const rLower = v.ref.toLowerCase();
    let score = 0;
    for (const kw of allKw) {
      if (vLower.includes(kw)) score += 2;
      if (rLower.includes(kw)) score += 1;
    }
    // Partial word matching for statement queries
    const queryWords = queryLower.split(/\s+/);
    for (const qw of queryWords) {
      if (qw.length > 3 && vLower.includes(qw)) score += 1;
    }
    if (score > 0) addResult(v.ref, v.text, score);
  }

  return results.sort((a,b) => b._score-a._score).slice(0,10);
}


async function getScriptureTeaching(topic) {
  const config = require("../settings/config");
  const topicKey = topic.toLowerCase().trim();

  // Get relevant verses
  const matchKey = Object.keys(TOPIC_INDEX).find(k =>
    k === topicKey || k.includes(topicKey) || topicKey.includes(k)
  );
  const verseRefs = matchKey ? TOPIC_INDEX[matchKey].slice(0, 4) : [];

  // Fetch actual verse texts
  const verses = [];
  for (const ref of verseRefs) {
    const v = await fetchVerse(ref, "kjv");
    if (v?.text) verses.push({ ref: v.reference || ref, text: v.text.slice(0, 180) });
  }

  // Build teaching using AI if available, otherwise use rich template
  try {
    const AI_BASE = config.aiBaseUrl || "https://apis.prexzyvilla.site";
    const prompt = [
      `You are a Bible teacher. Provide an in-depth, practical Bible teaching on the topic: "${topic}".`,
      ``,
      `Structure your response as follows (use these exact headers):`,
      ``,
      `📖 INTRODUCTION:`,
      `(2-3 sentences introducing the topic from a biblical perspective)`,
      ``,
      `📚 WHAT THE BIBLE SAYS:`,
      `(Explain the biblical foundation of this topic with references)`,
      ``,
      `💡 KEY PRINCIPLES:`,
      `(3-4 numbered practical principles from Scripture)`,
      ``,
      `🌍 REAL LIFE EXAMPLES:`,
      `(2-3 relatable modern life examples that illustrate the teaching)`,
      ``,
      `🙏 APPLICATION:`,
      `(How to practically apply this teaching today - 2-3 points)`,
      ``,
      `✨ CONCLUSION:`,
      `(A brief encouraging closing statement)`,
      ``,
      `Keep the total response under 800 words. Be warm, practical, and biblically accurate.`,
      verses.length ? `\nRelevant verses: ${verses.map(v => `${v.ref}: "${v.text}"`).join("; ")}` : "",
    ].join("\n");

    const r = await axios.post(`${AI_BASE}/chat`, {
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    }, { timeout: 30000 });

    const text = r.data?.choices?.[0]?.message?.content
      || r.data?.response
      || r.data?.message
      || r.data?.reply;

    if (text && text.length > 100) return { teaching: text, verses };
  } catch {}

  // Try prexzy API
  try {
    const AI_BASE = config.prexzyBase || config.aiBaseUrl;
    const r = await axios.get(`${AI_BASE}/ai/chatgpt`, {
      params: { prompt: `Provide a detailed Bible teaching on "${topic}" with introduction, key scriptures, real-life examples, and practical application. Be warm and biblically grounded. Max 600 words.` },
      timeout: 25000,
    });
    const text = r.data?.message || r.data?.response || r.data?.reply || r.data?.result;
    if (text && text.length > 100) return { teaching: text, verses };
  } catch {}

  // Fallback: built-in rich teaching template
  const teachings = {
    faith: {
      intro: "Faith is the cornerstone of the Christian life — it is the bridge between God's promises and our daily reality. Without faith, it is impossible to please God (Hebrews 11:6).",
      principles: ["1️⃣ Faith is not feeling — it is a decision to trust God's Word above circumstances.", "2️⃣ Faith grows through trials (James 1:3) and through hearing God's Word (Romans 10:17).", "3️⃣ Faith without action is dead — true faith always produces fruit (James 2:17).", "4️⃣ Even the smallest faith can move mountains (Matthew 17:20)."],
      examples: ["💼 *Business:* When starting a business with no capital, faith means taking the first step anyway, believing God will provide — like a young man who prayed, acted, and saw doors open supernaturally.", "💔 *Illness:* A believer diagnosed with a terminal illness chooses to confess God's Word daily: 'By His stripes I am healed' (Isaiah 53:5), standing in faith while receiving medical treatment.", "🎓 *Education:* A student who failed once chooses to return to school, trusting that God's purpose for their life cannot be cancelled by a setback."],
      application: ["📖 Read a faith-building scripture aloud every morning — faith comes by hearing.", "🙏 Replace every worried thought with a scripture promise.", "🚶 Take one step of obedience daily even when you cannot see the full picture."],
    },
    love: {
      intro: "God IS love (1 John 4:8) — not just loving, but love itself. Every expression of true love in the world is a reflection of God's nature.",
      principles: ["1️⃣ Love is a choice, not just a feeling — God chose to love us while we were still sinners (Romans 5:8).", "2️⃣ Unconditional love sees beyond faults and looks at potential.", "3️⃣ Love is expressed through sacrifice — the greatest act of love is laying down one's life (John 15:13).", "4️⃣ We love because He first loved us — our love for others flows from our relationship with God."],
      examples: ["👨‍👩‍👧 *Family:* A parent who prays daily for a wayward child, refusing to give up — this is agape love in action.", "🤝 *Community:* Forgiving a friend who wronged you deeply, choosing to restore the relationship rather than harbor bitterness.", "🌍 *Society:* Choosing to help a stranger in need even at personal cost, because love looks beyond convenience."],
      application: ["💬 Practice speaking words of love and encouragement to those around you daily.", "🙏 Pray specifically for the people who are hardest to love.", "📖 Meditate on 1 Corinthians 13:4-7 and measure your love by its standard."],
    },
  };

  // Generic teaching if topic not in cache
  const cached = teachings[topicKey];
  if (cached) {
    const teaching = [
      `📖 *INTRODUCTION:*\n${cached.intro}`,
      ``,
      `📚 *WHAT THE BIBLE SAYS:*\n${verses.length ? verses.map(v => `"${v.text}"\n— ${v.ref}`).join("\n\n") : "See the key scriptures related to this topic in the Word of God."}`,
      ``,
      `💡 *KEY PRINCIPLES:*\n${cached.principles.join("\n")}`,
      ``,
      `🌍 *REAL LIFE EXAMPLES:*\n${cached.examples.join("\n\n")}`,
      ``,
      `🙏 *APPLICATION:*\n${cached.application.join("\n")}`,
      ``,
      `✨ *CONCLUSION:*\nAs you meditate on "${topic}" today, remember that God's Word is alive and active. Let it transform not just your mind, but your daily walk.`,
    ].join("\n");
    return { teaching, verses };
  }

  // Universal fallback
  const teaching = [
    `📖 *INTRODUCTION:*`,
    `The topic of "${topic}" is one that touches the very heart of God's Word. Scripture has much to say about it, and understanding it deeply can transform your life.`,
    ``,
    `📚 *WHAT THE BIBLE SAYS:*`,
    verses.length
      ? verses.map(v => `📌 *${v.ref}*\n"${v.text}"`).join("\n\n")
      : `God's Word addresses "${topic}" throughout both the Old and New Testaments. Search the Scriptures with an open heart.`,
    ``,
    `💡 *KEY PRINCIPLES:*`,
    `1️⃣ God's perspective on "${topic}" is revealed through His Word, not circumstances.`,
    `2️⃣ This topic is directly connected to your walk of faith and daily obedience.`,
    `3️⃣ Prayer and meditation on relevant scriptures will unlock deeper understanding.`,
    `4️⃣ The Holy Spirit is your teacher — ask Him to illuminate this topic for you.`,
    ``,
    `🌍 *REAL LIFE EXAMPLES:*`,
    `🔹 Consider how "${topic}" shows up in your workplace, family, and relationships.`,
    `🔹 Biblical figures like David, Paul, and Jesus himself navigated this topic and left us examples.`,
    `🔹 Every trial and season in your life is an opportunity to apply this truth practically.`,
    ``,
    `🙏 *APPLICATION:*`,
    `📖 Search "topic" in your Bible app and read at least 3 passages today.`,
    `✍️ Journal one way this teaching changes how you will act this week.`,
    `🙏 Pray and ask God to make this truth real in your specific situation.`,
    ``,
    `✨ *CONCLUSION:*`,
    `God's Word on "${topic}" is not just information — it is transformation. As you apply these truths, you will see real change in your life.`,
  ].join("\n");
  return { teaching, verses };
}

// ── QUIZ STATE ────────────────────────────────────────────────────────────────
global.__BIBLE_QUIZ = global.__BIBLE_QUIZ || {};

const QUIZ_POOL = [
  { q:"How many books are in the Bible?", a:"66", opts:["64","66","73","72"] },
  { q:"Who built the ark?", a:"Noah", opts:["Moses","Abraham","Noah","David"] },
  { q:"What is the first book of the Bible?", a:"Genesis", opts:["Exodus","Genesis","Matthew","Psalms"] },
  { q:"How many disciples did Jesus have?", a:"12", opts:["10","11","12","13"] },
  { q:"Who baptized Jesus?", a:"John the Baptist", opts:["Peter","Paul","John the Baptist","Moses"] },
  { q:"In what city was Jesus born?", a:"Bethlehem", opts:["Jerusalem","Nazareth","Bethlehem","Jericho"] },
  { q:"Who denied Jesus three times?", a:"Peter", opts:["Judas","Peter","Thomas","John"] },
  { q:"How many days was Lazarus in the tomb?", a:"4", opts:["2","3","4","7"] },
  { q:"Who was swallowed by a great fish?", a:"Jonah", opts:["Jonah","Elijah","Moses","Elisha"] },
  { q:"What did God create on the first day?", a:"Light", opts:["Sky","Light","Land","Animals"] },
  { q:"Who wrote most of the Psalms?", a:"David", opts:["Solomon","Moses","David","Asaph"] },
  { q:"What is the last book of the Bible?", a:"Revelation", opts:["Jude","Acts","Hebrews","Revelation"] },
  { q:"How many plagues were in Egypt?", a:"10", opts:["7","8","10","12"] },
  { q:"Who killed Goliath?", a:"David", opts:["Saul","Jonathan","David","Samuel"] },
  { q:"How many days did it rain during the flood?", a:"40", opts:["20","30","40","50"] },
  { q:"Who was the first man?", a:"Adam", opts:["Abel","Adam","Enoch","Noah"] },
  { q:"What was the name of Abraham's wife?", a:"Sarah", opts:["Rebekah","Rachel","Sarah","Leah"] },
  { q:"How many sons did Jacob have?", a:"12", opts:["10","11","12","13"] },
  { q:"Who wrote the book of Revelation?", a:"John", opts:["Peter","Paul","John","James"] },
  { q:"In what language was most of the New Testament written?", a:"Greek", opts:["Latin","Hebrew","Aramaic","Greek"] },
  { q:"Who betrayed Jesus for 30 pieces of silver?", a:"Judas Iscariot", opts:["Judas Iscariot","Barabbas","Thomas","Caiaphas"] },
  { q:"How many books are in the New Testament?", a:"27", opts:["25","26","27","28"] },
  { q:"What river was Jesus baptized in?", a:"Jordan", opts:["Nile","Euphrates","Jordan","Tigris"] },
  { q:"Who was known as the Apostle to the Gentiles?", a:"Paul", opts:["Peter","James","John","Paul"] },
  { q:"On which mountain did Moses receive the Ten Commandments?", a:"Mount Sinai", opts:["Mount Zion","Mount Sinai","Mount Carmel","Mount Tabor"] },
  { q:"How many days did Jesus fast in the desert?", a:"40", opts:["20","30","40","50"] },
  { q:"Who was the mother of Jesus?", a:"Mary", opts:["Mary","Martha","Elizabeth","Anna"] },
  { q:"What is the shortest book in the Bible?", a:"3 John", opts:["2 John","3 John","Obadiah","Philemon"] },
  { q:"Who was the first king of Israel?", a:"Saul", opts:["David","Saul","Solomon","Samuel"] },
  { q:"How many commandments did God give Moses?", a:"10", opts:["7","10","12","15"] },
  { q:"Who was thrown into the lion's den?", a:"Daniel", opts:["Daniel","Joseph","Elijah","Isaiah"] },
  { q:"What miracle did Jesus perform first?", a:"Turning water into wine", opts:["Healing a blind man","Feeding 5000","Turning water into wine","Walking on water"] },
  { q:"How many times did Peter deny Jesus?", a:"3", opts:["1","2","3","4"] },
  { q:"Who led the Israelites out of Egypt?", a:"Moses", opts:["Aaron","Moses","Joshua","Abraham"] },
  { q:"What was the name of the garden where Adam and Eve lived?", a:"Eden", opts:["Eden","Gethsemane","Canaan","Paradise"] },
  { q:"Who wrote most of the New Testament letters?", a:"Paul", opts:["Peter","John","Paul","James"] },
  { q:"How many people were on Noah's ark?", a:"8", opts:["4","6","8","10"] },
  { q:"What animal did Balaam's donkey speak to?", a:"Balaam", opts:["Moses","Balaam","Elijah","Abraham"] },
  { q:"Which book contains the 23rd Psalm?", a:"Psalms", opts:["Proverbs","Psalms","Isaiah","Matthew"] },
  { q:"Who was Job's wife?", a:"She is unnamed in the Bible", opts:["Ruth","She is unnamed in the Bible","Naomi","Deborah"] },
];

// ── Quiz reply handler (exported for message.js) ──────────────────────────────
const handleQuizReply = async (sock, m, chatId, userId, body) => {
  const trimmed = (body || "").trim();
  if (!/^[1-4]$/.test(trimmed)) return false;

  // Check group quiz first (shared session)
  const groupKey = `group_${chatId}`;
  const groupQuiz = global.__BIBLE_QUIZ[groupKey];

  if (groupQuiz && !groupQuiz.answered?.has(userId)) {
    const idx      = parseInt(trimmed) - 1;
    const chosen   = groupQuiz.opts[idx];
    const correct  = chosen === groupQuiz.a;
    const name     = m?.pushName || userId?.split("@")[0] || "User";
    const chat     = chatId || m?.chat;

    if (!groupQuiz.answered) groupQuiz.answered = new Set();
    groupQuiz.answered.add(userId);

    // Update scores
    if (!groupQuiz.scores) groupQuiz.scores = {};
    if (correct) groupQuiz.scores[userId] = (groupQuiz.scores[userId] || 0) + 1;

    if (correct) {
      groupQuiz.correctCount = (groupQuiz.correctCount || 0) + 1;
      await sock.sendMessage(chat, {
        text: `✅ *${name}* got it right! The answer is *${groupQuiz.a}* 🎉\n\n_${groupQuiz.answered.size} answered so far_`,
      }, { quoted: m });
    } else {
      await sock.sendMessage(chat, {
        text: `❌ *${name}* — Wrong! You answered *${chosen}*\n_The correct answer is_ *${groupQuiz.a}*`,
      }, { quoted: m });
    }
    return true;
  }

  // Check individual quiz
  const personalKey = `solo_${chatId}_${userId}`;
  const personalQuiz = global.__BIBLE_QUIZ[personalKey];

  if (personalQuiz) {
    const idx     = parseInt(trimmed) - 1;
    const chosen  = personalQuiz.opts[idx];
    const correct = chosen === personalQuiz.a;
    const chat    = chatId || m?.chat;

    delete global.__BIBLE_QUIZ[personalKey];

    const pfx = "/";
    await sock.sendMessage(chat, {
      text: correct
        ? `✅ *Correct!* 🎉\n\nThe answer is *${personalQuiz.a}*\n\n_Keep studying the Word! Type ${pfx}biblequiz for another question._`
        : `❌ *Wrong!* You answered *${chosen}*\n\nThe correct answer was: *${personalQuiz.a}*\n\n_Don't give up! Type ${pfx}biblequiz to try again._`,
    }, { quoted: m });
    return true;
  }

  return false;
};

// ── VOTD ──────────────────────────────────────────────────────────────────────
const VOTD_LIST = [
  { ref:"John 3:16",        text:"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
  { ref:"Jeremiah 29:11",   text:"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." },
  { ref:"Philippians 4:13", text:"I can do all this through him who gives me strength." },
  { ref:"Romans 8:28",      text:"And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
  { ref:"Psalm 23:1",       text:"The Lord is my shepherd, I lack nothing." },
  { ref:"Isaiah 40:31",     text:"But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." },
  { ref:"Proverbs 3:5-6",   text:"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." },
  { ref:"Joshua 1:9",       text:"Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." },
  { ref:"Isaiah 41:10",     text:"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you." },
  { ref:"Matthew 11:28",    text:"Come to me, all you who are weary and burdened, and I will give you rest." },
  { ref:"1 Corinthians 13:4-7", text:"Love is patient, love is kind. It does not envy, it does not boast, it is not proud." },
  { ref:"Hebrews 11:1",     text:"Now faith is confidence in what we hope for and assurance about what we do not see." },
  { ref:"Romans 8:38-39",   text:"I am convinced that neither death nor life, neither angels nor demons, neither height nor depth, will be able to separate us from the love of God." },
  { ref:"Galatians 5:22-23",text:"The fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control." },
  { ref:"Psalm 46:10",      text:"Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth." },
  { ref:"Matthew 6:33",     text:"But seek first his kingdom and his righteousness, and all these things will be given to you as well." },
  { ref:"2 Timothy 1:7",    text:"For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline." },
  { ref:"Psalm 37:4",       text:"Take delight in the Lord, and he will give you the desires of your heart." },
  { ref:"John 14:6",        text:"I am the way and the truth and the life. No one comes to the Father except through me." },
  { ref:"Revelation 21:4",  text:"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain." },
  { ref:"Ephesians 2:8-9",  text:"For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God." },
  { ref:"2 Corinthians 5:7",text:"For we live by faith, not by sight." },
  { ref:"Psalm 91:1",       text:"Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty." },
  { ref:"Romans 12:2",      text:"Do not conform to the pattern of this world, but be transformed by the renewing of your mind." },
  { ref:"John 15:13",       text:"Greater love has no one than this: to lay down one's life for one's friends." },
  { ref:"1 John 4:8",       text:"Whoever does not love does not know God, because God is love." },
  { ref:"Isaiah 26:3",      text:"You will keep in perfect peace those whose minds are steadfast, because they trust in you." },
  { ref:"Philippians 4:6-7",text:"Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God." },
  { ref:"Numbers 6:24-26",  text:"The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you." },
  { ref:"Lamentations 3:22-23", text:"Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning." },
];

function getDailyVerse() {
  const day = Math.floor(Date.now() / 86400000);
  return VOTD_LIST[day % VOTD_LIST.length];
}

// ── Plugin ────────────────────────────────────────────────────────────────────
module.exports = {
  name: "Bible",
  category: "bible",
  desc: "Bible verse lookup, search, VOTD, multi-user quiz, scripture teaching, topic suggestions",
  command: [
    "bible",
    "votd",
    "biblesearch",
    "bibleversions",
    "biblebooks",
    "biblequiz",
    "groupquiz",
    "devotional",
    "teach",
    "suggesttopic",
    "biblecompare",
    "biblehelp",
  ],
  handleQuizReply,

  run: async ({ sock, m, args, command, chatId, userId, reply, prefix, isGroup }) => {
    const chat  = chatId || m?.chat;
    const pfx   = prefix || "/";
    const input = args.join(" ").trim();
    const name  = m?.pushName || userId?.split("@")[0] || "User";

    // ── HELP ─────────────────────────────────────────────────────────────────
    if (command === "biblehelp") {
      return reply([
        `📖 *Miss Chatra Bible*`,``,
        `*Commands:*`,
        `  ${pfx}bible <ref> [version]  — Fetch a verse`,
        `  ${pfx}votd                   — Verse of the Day`,
        `  ${pfx}biblesearch <keywords> — Search Bible`,
        `  ${pfx}teach <topic>          — Deep scripture teaching`,
        `  ${pfx}suggesttopic <desc>    — AI topic suggestions`,
        `  ${pfx}bibleversions          — List all versions`,
        `  ${pfx}biblebooks             — List all 66 books`,
        `  ${pfx}biblequiz              — Solo quiz question`,
        `  ${pfx}groupquiz              — Group quiz (everyone plays)`,
        `  ${pfx}devotional             — Daily devotional`,
        `  ${pfx}compare <ref>          — Compare 4 versions`,
        ``,
        `*Verse Examples:*`,
        `  ${pfx}bible John 3:16`,
        `  ${pfx}bible Psalm 23 niv`,
        `  ${pfx}bible Romans 8:28 esv`,
        ``,
        `*Versions:* kjv • niv • nlt • esv • web • bbe • ylt • asv`,
      ].join("\n"));
    }

    // ── VERSIONS ──────────────────────────────────────────────────────────────
    if (command === "bibleversions") {
      return reply([
        `📚 *Bible Versions*`,``,
        ...Object.entries(VERSION_LABELS).map(([k,v]) => `  *${k.toUpperCase()}* — ${v}`),
        ``,`*Usage:* ${pfx}bible John 3:16 niv`,
      ].join("\n"));
    }

    // ── BOOKS LIST ────────────────────────────────────────────────────────────
    if (command === "biblebooks") {
      const OT = ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"];
      const NT = ["Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"];
      return reply([
        `📚 *66 Books of the Bible*`,``,
        `*📜 Old Testament (39)*`,
        OT.map((b,i)=>`  ${String(i+1).padStart(2)}. ${b}`).join("\n"),
        ``,
        `*✝️ New Testament (27)*`,
        NT.map((b,i)=>`  ${String(i+1).padStart(2)}. ${b}`).join("\n"),
      ].join("\n"));
    }

    // ── VERSE OF THE DAY ──────────────────────────────────────────────────────
    if (command === "votd") {
      const dv = getDailyVerse();
      try {
        const live = await fetchVerse(dv.ref, "niv");
        if (live?.text) {
          return reply([`📖 *Verse of the Day*`,`📅 ${new Date().toDateString()}`,``,`*${live.reference}* (NIV)`,``,`"${live.text}"`,``,`_Type ${pfx}teach ${dv.ref.split(" ")[0]} for a deep teaching_`].join("\n"));
        }
      } catch {}
      return reply([`📖 *Verse of the Day*`,`📅 ${new Date().toDateString()}`,``,`*${dv.ref}*`,``,`"${dv.text}"`,``,`_Type ${pfx}teach on a topic for deep scripture teaching_`].join("\n"));
    }

    // ── DEVOTIONAL ────────────────────────────────────────────────────────────
    if (command === "devotional") {
      const dv = getDailyVerse();
      const day = Math.floor(Date.now() / 86400000);
      const reflections = ["Meditate on this truth and let it shape your decisions today.","God's Word is a living guide for every situation you face today.","His promises are yes and amen — stand firm on this word.","Let this scripture anchor your soul today and every day.","Hide this word in your heart — it will protect and guide you."];
      const prayers = ["Lord, let Your word dwell richly in me today.","Father, help me to apply Your truth in every area of my life.","God, let this scripture guide my steps and decisions today.","Holy Spirit, breathe life into this word for me today."];
      return reply([`🌅 *Daily Devotional*`,`📅 ${new Date().toDateString()}`,``,`📖 *Scripture*`,`*${dv.ref}*`,`"${dv.text}"`,``,`💭 *Reflection*`,reflections[day%reflections.length],``,`🙏 *Prayer Point*`,prayers[day%prayers.length],``,`✨ *Action*`,`Share this verse with someone who needs it today.`,``,`_Miss Chatra Bible — Be blessed! 🙏_`].join("\n"));
    }

    // ── BIBLE SEARCH ──────────────────────────────────────────────────────────
    if (command === "biblesearch") {
      if (!input) return reply(`🔍 *Bible Search*\n\nUsage: *${pfx}biblesearch <keywords>*\n\nExamples:\n  ${pfx}biblesearch faith hope love\n  ${pfx}biblesearch God is with me\n  ${pfx}biblesearch do not be afraid\n  ${pfx}biblesearch strength weakness`);

      await reply(`🔍 Searching the Bible for *"${input}"*...`);
      try {
        const results = await searchBible(input);
        if (!results.length) {
          return reply([
            `❌ No Bible results found for *"${input}"*`,``,
            `Try:`,
            `• Simpler keywords: *faith*, *love*, *strength*`,
            `• Topic names: *forgiveness*, *healing*, *hope*`,
            `• Phrases: *do not fear*, *God is love*`,
            ``,`Or use: *${pfx}teach ${input}* for a scripture teaching on this topic`,
          ].join("\n"));
        }

        const lines = [`🔍 *Bible Search: "${input}"*\n📖 Found ${results.length} verse${results.length>1?"s":""}\n`];
        for (const v of results.slice(0, 8)) {
          lines.push(`📌 *${v.ref}*`);
          lines.push(`"${v.text.slice(0,200)}${v.text.length>200?"...":""}"`);
          lines.push("");
        }
        if (results.length > 8) lines.push(`_...and ${results.length-8} more. Refine your search for specific results._`);
        lines.push(`_${pfx}teach ${input} — Get a deep teaching on this topic_`);
        await reply(lines.join("\n"));
      } catch (e) {
        return reply(`❌ Search error: ${e.message?.slice(0,100)}`);
      }
      return;
    }

    // ── SCRIPTURE TEACHING ────────────────────────────────────────────────────
    if (command === "teach") {
      if (!input) {
        return reply([
          `📚 *Scripture Teaching*`,``,
          `Get an in-depth Bible teaching with real-life examples on any topic.`,``,
          `Usage: *${pfx}teach <topic>*`,``,
          `Examples:`,
          `  ${pfx}teach faith`,
          `  ${pfx}teach forgiveness`,
          `  ${pfx}teach marriage and relationships`,
          `  ${pfx}teach dealing with anxiety`,
          `  ${pfx}teach the power of prayer`,
          `  ${pfx}teach money and finances`,
          ``,`_Not sure what to study? Try: ${pfx}suggesttopic I am going through a difficult time_`,
        ].join("\n"));
      }

      await reply(`📚 Preparing teaching on *"${input}"*... This may take a moment 🙏`);
      try {
        const { teaching, verses } = await getScriptureTeaching(input);

        const header = [
          `📚 *Scripture Teaching: "${input.toUpperCase()}"*`,
          `━━━━━━━━━━━━━━━━━━━━━━━━`,
          ``,
        ].join("\n");

        const footer = [
          ``,`━━━━━━━━━━━━━━━━━━━━━━━━`,
          verses.length ? `📖 *Key Scriptures:* ${verses.map(v=>v.ref).join(" • ")}` : "",
          `_${pfx}teach <topic> for more teachings_`,
          `_${pfx}biblesearch <keyword> to find related verses_`,
        ].filter(Boolean).join("\n");

        await reply(header + teaching + footer);
      } catch (e) {
        return reply(`❌ Teaching failed: ${e.message?.slice(0,100)}`);
      }
      return;
    }

    // ── SUGGEST TOPIC ─────────────────────────────────────────────────────────
    if (command === "suggesttopic") {
      if (!input) {
        return reply([
          `💡 *Topic Suggestions*`,``,
          `Describe your situation and I'll suggest Bible topics to study.`,``,
          `Usage: *${pfx}suggesttopic <description>*`,``,
          `Examples:`,
          `  ${pfx}suggesttopic I am feeling hopeless and discouraged`,
          `  ${pfx}suggesttopic I am struggling with my marriage`,
          `  ${pfx}suggesttopic I need financial breakthrough`,
          `  ${pfx}suggesttopic I want to grow spiritually`,
        ].join("\n"));
      }

      const suggested = suggestTopics(input);

      if (!suggested.length) {
        // Generic suggestions based on time of day / day of week
        const always = ["faith","prayer","hope","love","strength"];
        return reply([
          `💡 *Suggested Topics to Study*`,``,
          `Based on your description, here are topics to explore:`,``,
          always.map((t,i) => `${i+1}. *${t.charAt(0).toUpperCase()+t.slice(1)}* — Type: ${pfx}teach ${t}`).join("\n"),
          ``,`_Or describe your situation more specifically for better suggestions._`,
        ].join("\n"));
      }

      const lines = [
        `💡 *Suggested Topics for You*`,
        `📝 Based on: _"${input}"_`,``,
        `These Bible topics will help with your situation:`,``,
      ];
      suggested.forEach((t, i) => {
        lines.push(`${i+1}. *${t.charAt(0).toUpperCase()+t.slice(1)}*`);
        lines.push(`   → Type: *${pfx}teach ${t}*`);
        lines.push(`   → Search: *${pfx}biblesearch ${t}*`);
        lines.push("");
      });
      lines.push(`_Type ${pfx}teach <topic name> to get a full teaching_`);
      await reply(lines.join("\n"));
      return;
    }

    // ── SOLO BIBLE QUIZ ───────────────────────────────────────────────────────
    if (command === "biblequiz") {
      const personalKey = `solo_${chatId}_${userId}`;
      const q = QUIZ_POOL[Math.floor(Math.random() * QUIZ_POOL.length)];
      const opts = [...q.opts].sort(() => Math.random() - 0.5);
      global.__BIBLE_QUIZ[personalKey] = { ...q, opts };
      setTimeout(() => { delete global.__BIBLE_QUIZ[personalKey]; }, 5 * 60 * 1000);

      return reply([
        `📖 *Bible Quiz*`,``,
        `❓ ${q.q}`,``,
        opts.map((o,i) => `  *${i+1}.* ${o}`).join("\n"),
        ``,`Reply *1, 2, 3 or 4* with your answer`,`_Expires in 5 minutes_`,
      ].join("\n"));
    }

    // ── GROUP QUIZ with LOBBY SYSTEM ────────────────────────────────────────
    if (command === "groupquiz") {
      const groupKey  = `group_${chatId}`;
      const lobbyKey  = `lobby_${chatId}`;
      const existing  = global.__BIBLE_QUIZ[groupKey];
      const lobby     = global.__BIBLE_QUIZ[lobbyKey];

      // Quiz is active — show current status
      if (existing && existing.phase === "active") {
        const scores = existing.scores || {};
        const board  = Object.entries(scores).sort((a,b)=>b[1]-a[1]).slice(0,10);
        const scoreText = board.length
          ? board.map(([uid,pts],i)=>`${["🥇","🥈","🥉"][i]||`${i+1}.`} @${uid.split("@")[0]} — ${pts} pts`).join("\n")
          : "No answers yet";
        return reply([
          `📖 *Bible Quiz In Progress*`,``,
          `❓ *${existing.q}*`,``,
          existing.opts.map((o,i)=>`  *${i+1}.* ${o}`).join("\n"),
          ``,`📊 *Current Scores:*`,scoreText,
          ``,`_Reply 1-4 to answer!_`,
        ].join("\n"));
      }

      // Lobby open — join it
      if (lobby && lobby.phase === "lobby") {
        if (lobby.participants.has(userId)) {
          const remaining = Math.max(0, Math.ceil((lobby.startsAt - Date.now()) / 1000));
          return reply(`✅ *${name}*, you are already in!\n👥 *${lobby.participants.size} player(s)* registered\n⏰ Starts in *${remaining}s*`);
        }
        lobby.participants.add(userId);
        lobby.participantNames[userId] = name;
        const remaining = Math.max(0, Math.ceil((lobby.startsAt - Date.now()) / 1000));
        await sock.sendMessage(chat, {
          text: `✅ *${name}* joined the Bible Quiz!\n👥 *${lobby.participants.size} player(s)* registered\n⏰ Quiz starts in *${remaining}s*\n\n_Type ${pfx}groupquiz to join_`,
        }, { quoted: m });
        return;
      }

      // Open new lobby — 45 second registration window
      const LOBBY_SECS = 45;
      const startsAt   = Date.now() + LOBBY_SECS * 1000;
      global.__BIBLE_QUIZ[lobbyKey] = {
        phase: "lobby",
        participants: new Set([userId]),
        participantNames: { [userId]: name },
        startsAt,
      };

      await sock.sendMessage(chat, {
        text: [
          `📖 *Bible Quiz — Join Now!*`,
          `━━━━━━━━━━━━━━━━━━━━`,``,
          `🙋 *${name}* started a Bible quiz!`,``,
          `📝 *How to join:*`,
          `   Type *${pfx}groupquiz* to register`,``,
          `⏰ *Registration open for ${LOBBY_SECS} seconds*`,
          `🎯 Quiz starts automatically after`,
          `🏆 Each correct answer = 1 point`,``,
          `_1 player registered — waiting for more..._`,
        ].join("\n"),
      }, { quoted: m });

      // 20-second warning
      setTimeout(async () => {
        const lb = global.__BIBLE_QUIZ[lobbyKey];
        if (!lb || lb.phase !== "lobby") return;
        try {
          await sock.sendMessage(chat, {
            text: `⏰ *20 seconds left to join!*\n👥 ${lb.participants.size} player(s) registered\n\nType *${pfx}groupquiz* — last chance!`,
          });
        } catch {}
      }, 25000);

      // Start quiz when lobby closes
      setTimeout(async () => {
        const lb = global.__BIBLE_QUIZ[lobbyKey];
        if (!lb || lb.phase !== "lobby") return;
        delete global.__BIBLE_QUIZ[lobbyKey];

        const participants = [...lb.participants];

        // Pick random question
        const q    = QUIZ_POOL[Math.floor(Math.random() * QUIZ_POOL.length)];
        const opts = [...q.opts].sort(() => Math.random() - 0.5);

        global.__BIBLE_QUIZ[groupKey] = {
          ...q, opts, phase: "active",
          scores: {}, answered: new Set(), correctCount: 0,
          participants: new Set(participants),
          participantNames: lb.participantNames,
          startedBy: userId,
        };

        const playerTags = participants.map(uid => `@${uid.split("@")[0]}`).join(" ");

        try {
          await sock.sendMessage(chat, {
            text: [
              `📖 *Bible Quiz — Question Time!*`,
              `━━━━━━━━━━━━━━━━━━━━`,``,
              `👥 Players: ${playerTags}`,``,
              `❓ *${q.q}*`,``,
              opts.map((o,i)=>`  *${i+1}.* ${o}`).join("\n"),``,
              `👇 *Reply 1, 2, 3 or 4 to answer*`,
              `⏰ *You have 30 seconds!*`,``,
              `_First correct answer gets bonus! 🙏_`,
            ].join("\n"),
            mentions: participants,
          });
        } catch {}

        // Close quiz after 30 seconds
        setTimeout(async () => {
          const quiz = global.__BIBLE_QUIZ[groupKey];
          if (!quiz || quiz.phase !== "active") return;
          delete global.__BIBLE_QUIZ[groupKey];
          const scores    = quiz.scores || {};
          const board     = Object.entries(scores).sort((a,b)=>b[1]-a[1]).slice(0,10);
          const medals    = ["🥇","🥈","🥉"];
          const scoreText = board.length
            ? board.map(([uid,pts],i)=>`${medals[i]||`${i+1}.`} ${quiz.participantNames?.[uid]||`@${uid.split("@")[0]}`} — ${pts} pt`).join("\n")
            : "😔 Nobody answered correctly this round!";
          try {
            await sock.sendMessage(chat, {
              text: [
                `⏰ *Quiz Round Over!*`,``,
                `✅ *Correct Answer: ${quiz.a}*`,``,
                `🏆 *Results:*`, scoreText,``,
                `👥 ${quiz.participants?.size||0} players • ${quiz.correctCount||0} correct`,``,
                `_Type ${pfx}groupquiz to play again! 📖_`,
              ].join("\n"),
            });
          } catch {}
        }, 30000);

      }, LOBBY_SECS * 1000);

      return;
    }

    // ── COMPARE VERSIONS ─────────────────────────────────────────────────────
    if (command === "biblecompare") {
      if (!input) return reply(`Usage: ${pfx}compare John 3:16\n\nCompares KJV, NIV/WEB, BBE and YLT side by side.`);
      await reply(`📖 Comparing versions for *${input}*...`);
      try {
        const vers = ["kjv","web","bbe","ylt"];
        const results = await Promise.allSettled(vers.map(v => fetchVerse(input, v)));
        const lines = [`📖 *${input} — Version Comparison*\n`];
        for (let i = 0; i < vers.length; i++) {
          const r = results[i];
          if (r.status === "fulfilled" && r.value?.text) {
            lines.push(`*${vers[i].toUpperCase()}*\n"${r.value.text.slice(0,280)}"\n`);
          }
        }
        if (lines.length === 1) return reply(`❌ Could not fetch *${input}*. Check the format.\nExample: ${pfx}compare John 3:16`);
        lines.push(`_Miss Chatra Bible_`);
        return reply(lines.join("\n"));
      } catch (e) { return reply(`❌ ${e.message?.slice(0,100)}`); }
    }

    // ── VERSE LOOKUP (main) ───────────────────────────────────────────────────
    if (command === "bible") {
      if (!input) {
        return reply([
          `📖 *Bible Verse Lookup*`,``,
          `Usage: *${pfx}bible <reference> [version]*`,``,
          `Examples:`,
          `  ${pfx}bible John 3:16`,
          `  ${pfx}bible Psalm 23 niv`,
          `  ${pfx}bible Romans 8:28 esv`,
          `  ${pfx}bible 1 Corinthians 13:4-7`,
          ``,`Versions: kjv • niv • web • bbe • ylt • asv`,
          `${pfx}biblehelp — all Bible commands`,
        ].join("\n"));
      }

      let ref = input, version = "kjv";
      const lastWord = args[args.length-1]?.toLowerCase();
      if (VERSIONS[lastWord]) {
        version = lastWord;
        ref = args.slice(0,-1).join(" ").trim();
      }

      await reply(`📖 Fetching *${ref}* (${version.toUpperCase()})...`);
      try {
        const result = await fetchVerse(ref, version);
        if (!result?.text) {
          return reply([
            `❌ Could not find *${ref}*.`,``,
            `Check:`,
            `• Format: Book Chapter:Verse (e.g. John 3:16)`,
            `• Book name spelling`,
            `• Example: ${pfx}bible Psalm 23:1`,
            ``,`Type ${pfx}biblebooks to see all book names.`,
          ].join("\n"));
        }
        await reply([
          `📖 *${result.reference}*`,
          `📚 Version: ${result.version}`,``,
          `"${result.text}"`,``,
          `_${pfx}compare ${ref} | ${pfx}votd | ${pfx}teach ${ref.split(" ")[0]}_`,
        ].join("\n"));
      } catch (e) { return reply(`❌ Error: ${e.message?.slice(0,100)}`); }
    }
  }
};
