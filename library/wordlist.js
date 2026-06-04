// library/wordlist.js — Miss Chatra Word Validator
// Two-stage: local set (fast) → Free Dictionary API (online fallback)
// Mirrors TG p53_wordchain.py _check_word_valid() exactly.
"use strict";

// ── Expanded local word set (common English words 4+ letters) ────────────────
const WORDS_RAW = [
// 4-letter
"able","aced","ache","acid","acre","acts","aged","aide","aims","akin","aloe","also","alto",
"amok","amps","ante","apex","arch","area","army","arts","ashy","atom","atop","aunt","auto",
"avid","away","axle","babe","back","bail","bait","bale","ball","band","bane","bang","bank",
"bare","bark","barn","base","bath","bead","beam","bean","bear","beat","been","beer","bell",
"belt","bend","best","bile","bill","bind","bird","bite","blob","blow","blue","blur","body",
"bold","bolt","bomb","bond","bone","book","boom","bore","boss","both","bout","brag","brew",
"brow","bulk","bull","bump","bunk","burn","busy","byte","cage","cake","call","calm","came",
"camp","cane","cape","card","care","cart","case","cash","cast","cave","cell","chef","chip",
"chop","cite","city","clam","clap","clay","clip","club","clue","coat","code","coil","coin",
"cold","come","cone","cook","cope","copy","cord","core","cork","corn","cost","cozy","cram",
"crew","crib","crop","cuff","cult","curb","curl","damp","dare","dark","dart","dash","date",
"dawn","daze","dead","deal","dear","deck","deep","deft","deli","deny","desk","dial","dice",
"dime","dire","dirt","dish","disk","dome","done","door","dose","dove","down","drag","drip",
"drop","drum","dual","dull","dump","dusk","dust","duty","each","earl","earn","ease","east",
"edge","edit","emit","epic","even","evil","exam","exit","face","fact","fade","fail","fair",
"fake","fall","fame","fang","farm","fast","fate","feat","fern","file","fill","film","find",
"fine","fire","fish","fist","flag","flat","flaw","flea","flex","flip","flop","flow","foam",
"fold","folk","fond","font","ford","fore","fork","form","fort","foul","four","fray","free",
"frog","full","fund","fury","fuse","gain","gale","gall","game","gang","gape","gate","gave",
"gaze","gear","gene","germ","gift","gill","girl","give","glad","glow","glue","goal","goat",
"gold","golf","gone","gore","grab","gray","grew","grid","grin","grip","grit","grow","gulf",
"gull","gust","hack","hail","hair","half","hall","halt","hand","hang","hard","harm","harp",
"hate","have","hawk","haze","heal","heap","hear","heat","heel","held","helm","help","hemp",
"herd","here","hero","hide","high","hike","hill","hint","hire","hold","hole","home","hook",
"hoop","hope","horn","host","hour","huge","hull","hump","hung","hunt","hurl","hurt","icon",
"idea","idle","inch","into","iron","isle","item","jerk","jive","join","joke","jolt","jump",
"keen","keep","kept","kick","kind","king","knew","knit","knob","lack","lace","lake","lamp",
"land","lane","lark","last","late","lawn","lean","leap","left","lend","lens","levy","lift",
"like","limb","lime","link","lion","list","live","load","loan","lobe","lock","loft","lone",
"loop","lore","lose","loss","lost","loud","love","luck","lure","lurk","lust","mace","made",
"mail","main","make","mall","malt","mark","mask","mass","mate","math","maze","meal","mean",
"meat","meet","meld","melt","memo","mesh","mess","mind","mine","mint","miss","mock","mode",
"mold","mole","monk","moon","moot","more","moss","most","move","much","mule","muse","must",
"myth","nail","name","nano","neon","news","next","nice","node","none","noon","norm","nose",
"note","null","oath","obey","odor","once","only","onto","open","oral","oven","over","pace",
"pack","page","paid","pain","pair","palm","pane","park","part","pass","past","pave","pawn",
"peak","peel","pelt","perk","pest","pick","pile","pill","pine","pink","pipe","pity","plan",
"play","plea","plod","plot","plow","plug","plum","plus","poem","poet","poll","polo","pond",
"pony","poor","pork","port","post","pour","pray","prey","prod","prop","pull","pump","pure",
"push","rack","rage","raid","rail","rain","rake","ramp","rang","rank","rare","rash","rate",
"rave","read","real","reap","reel","rein","rely","rend","rent","rest","rice","rich","ride",
"rife","rift","ring","riot","rise","risk","road","roam","roar","robe","rock","rode","role",
"roll","roof","room","rope","rose","rote","rude","ruin","rule","rump","ruse","rush","rust",
"sage","said","sail","sake","sale","salt","same","save","scan","scar","seat","seed","self",
"sell","send","sewn","shed","shin","ship","shop","shot","show","shut","side","sigh","sign",
"silk","silo","silt","sink","site","size","skip","slab","slap","slat","slim","slip","slit",
"slob","slop","slow","slug","slum","snag","snap","snob","snow","snub","soft","soil","sold",
"sole","some","song","sort","soul","soup","sour","span","spin","spit","spot","stem","step",
"stew","stop","stub","such","suit","sulk","sung","sunk","surf","swam","swap","swim","tale",
"talk","tall","tame","tang","tape","task","teen","tell","tend","tent","term","test","till",
"tilt","time","tire","toll","tomb","tone","took","tool","torn","toss","tour","town","toil",
"tuck","tune","turf","turn","twig","twin","type","ugly","undo","unit","upon","used","vain",
"vale","vane","vary","vast","vein","very","vest","veto","view","vine","vote","wade","wail",
"wait","wake","walk","wall","wand","ward","wary","wave","wear","weed","week","weld","well",
"went","were","whim","whom","wide","wile","will","wilt","wind","wing","wink","wire","wise",
"wish","wisp","wolf","word","wore","work","worn","wrap","wren","yank","yard","yarn","year",
"yell","your","zone",
// 5-letter
"abhor","abide","abort","above","abyss","acorn","acted","actor","adapt","adept","admit",
"adopt","adore","adult","after","again","agape","agate","agile","aglow","agree","ahead",
"aimed","aisle","alarm","album","alert","algae","alibi","alien","align","alike","allow",
"aloft","alone","along","aloof","altar","amaze","amber","amble","ample","amuse","angel",
"anger","angle","angry","anime","annex","annoy","antic","anvil","aorta","apple","apply",
"arbor","ardor","argue","arise","armor","aroma","array","arson","artsy","audio","avast",
"avian","avoid","awake","award","aware","awful","bacon","badge","badly","bagel","baggy",
"barge","basic","basin","basis","batch","bawdy","beach","began","beige","below","bench",
"berry","birth","bison","blaze","blend","bless","bliss","blimp","bloat","bloke","blood",
"bloom","blown","blunt","blurb","blurt","blush","boost","bound","brace","braid","brain",
"brand","brash","brass","brave","bread","break","breed","bribe","brine","bring","brisk",
"broad","broke","brood","broth","brown","brute","buddy","build","built","bully","bunny",
"burly","burnt","bushy","cadet","camel","candy","canoe","cargo","carol","cause","cedar",
"chalk","champ","chaos","charm","chase","chasm","cheap","cheer","chess","chest","chill",
"china","chose","civic","civil","claim","clash","clasp","clean","clear","cliff","climb",
"cloak","clock","close","cloud","clout","comet","comic","comma","condo","coral","count",
"crane","crash","crave","cream","creek","crisp","croak","cross","crowd","crown","cruel",
"curly","daily","dance","dated","decay","decoy","defer","deity","delay","delta","dense",
"depot","derby","detox","digit","dirty","disco","diver","dolly","donut","dotty","doubt",
"dough","dowry","draft","drain","drape","drawl","drool","duchy","dusky","dusty","eagle",
"early","eaten","edify","eight","elder","elite","emote","empty","enemy","enact","ensue",
"entry","epoxy","erode","error","evade","event","every","exact","exert","exile","extra",
"fable","faith","fancy","farce","fatal","favor","feast","fence","feral","ferry","fetch",
"fetid","fiend","fiery","fifth","fifty","filth","finch","first","fixed","fizzy","fjord",
"focal","foggy","folly","foray","force","forge","forte","forum","foyer","franc","fraud",
"fresh","fritz","froze","fryer","fully","funny","gaily","gamut","gaudy","gauze","ghoul",
"given","gland","glare","glint","gloat","gloom","gnome","godly","graft","grand","grant",
"grasp","graze","greed","greet","grief","grime","grimy","groom","grope","gross","grout",
"growl","gruel","gruff","guard","guile","guise","gulch","gusto","gusty","hasty","haunt",
"haste","haven","havoc","heavy","hence","heron","hoist","holly","honey","honor","hotel",
"house","hover","human","hurry","hyena","hyper","icing","idiom","image","impel","inane",
"incur","index","inept","inert","infer","inner","input","inter","intro","irony","issue",
"ivory","jaunt","jelly","jewel","joust","juice","juicy","jumpy","karma","kayak","knack",
"knave","kneel","knife","knoll","known","kudos","label","lance","lanky","lapel","laser",
"latch","later","latte","laugh","layer","leapt","leech","legal","lemur","level","light",
"lingo","liver","livid","lodge","logic","loopy","loose","lofty","lotus","lousy","lover",
"lower","lowly","loyal","lucid","lyric","magic","major","maker","manor","maple","march",
"mason","match","mauve","mealy","melee","mercy","merry","metal","midst","might","mimic",
"minor","minus","mirth","miser","moist","money","month","moose","moody","mourn","movie",
"muddy","mummy","musty","muted","naked","nasty","needy","never","nexus","nicer","ninja",
"noble","noisy","notch","novel","nymph","obese","olive","onset","optic","orbit","order",
"organ","other","otter","overt","oxide","paced","panic","pansy","parse","pasty","patsy",
"pause","payee","peace","pearl","pedal","penal","penny","perch","peril","pesky","petty",
"phase","phone","photo","piano","pinch","pilot","plaid","plain","plane","plank","pleat",
"pluck","plume","polka","poppy","porky","potty","power","prank","prawn","press","pride",
"prime","primp","privy","prize","probe","prone","prong","prose","prove","prowl","prude",
"psalm","pudgy","puffy","pulpy","punch","purse","pushy","quirk","quota","quote","rabbi",
"radix","rainy","rally","ramen","ranch","rangy","rapid","raspy","raven","react","realm",
"rebel","refer","refit","repay","repel","rerun","reset","revue","rhyme","ridge","right",
"rigid","ripen","risky","rival","river","roast","robin","robot","rocky","rouge","rough",
"round","rowdy","royal","ruddy","rugby","ruler","rupee","rusty","sadly","salsa","salty",
"sassy","sauce","savvy","scout","sedan","seedy","seize","serum","shall","shame","share",
"shark","sharp","sheer","shelf","shell","shift","shirt","shone","shook","short","shout",
"showy","shrub","shuck","siege","sigma","since","sissy","sixth","sixty","sized","skull",
"slain","slang","slant","slick","slope","sloth","slunk","smack","small","smart","smash",
"smell","smite","smock","smoky","snare","sneak","sneer","sniff","snore","snout","sober",
"softy","solid","solve","sorry","space","spare","spark","spawn","speak","speck","speed",
"spend","spice","spill","spine","spite","spook","spool","spoon","spore","spout","sprig",
"spunk","squat","stain","stale","stalk","stall","stare","stark","start","stash","state",
"stave","steam","steel","steer","stern","stiff","still","sting","stink","stout","straw",
"stray","strip","strut","stuck","stump","stung","stunk","stunt","style","suave","sugar",
"sunny","super","surge","surly","swamp","swear","sweat","sweep","swell","swept","swipe",
"swoop","sword","soggy","siren","taboo","talon","tangy","tardy","tawny","tacit","tapir",
"tasty","tepid","terse","theft","thick","think","third","thorn","those","three","threw",
"throb","throw","thump","tidal","tiger","timid","tipsy","titan","today","token","totem",
"touch","towel","toxic","tramp","triad","tribe","trice","tripe","trite","troop","trout",
"truce","truly","tuber","tutor","tummy","tuner","turbo","twirl","tiara","ulcer","ultra",
"undue","untie","until","unzip","upper","upset","usher","utter","vague","valid","value",
"vapor","vault","vaunt","vicar","vigor","viral","vista","vivid","vixen","vocal","vodka",
"voice","voter","vying","wafer","waltz","weary","weave","wedge","weird","wheat","whiff",
"while","whine","whirl","whole","wider","wield","wimpy","witch","witty","woken","women",
"world","worry","worse","worst","worth","would","wound","wreak","wrist","wring","wrong",
"wrote","yeast","yacht","young","zebra","zesty","zippy",
// 6-letter words
"absorb","accept","across","actual","aerial","afford","afraid","agency","agenda","almost",
"always","amount","anchor","animal","answer","anyone","appear","around","attack","attend",
"battle","beauty","before","behind","belong","better","beyond","blouse","border","bottle",
"bottom","budget","button","cancer","carbon","castle","caught","center","chance","change",
"charge","circle","client","coffee","column","combat","common","corner","cotton","cotton",
"couple","course","create","credit","crisis","custom","danger","darker","deadly","debate",
"decade","deeply","defeat","define","delete","demand","depend","design","detail","devote",
"differ","dinner","direct","dollar","donate","double","dragon","driven","during","effect",
"effort","eleven","empire","enable","ending","energy","engage","engine","enough","ensure",
"entire","escape","ethnic","except","excuse","expand","expect","expert","extend","factor",
"fallen","family","famous","father","fellow","figure","finger","flower","follow","forest",
"forget","formal","former","foster","fourth","freeze","friend","future","garden","gather",
"gender","global","gloves","golden","gotten","ground","growth","handle","happen","hardly",
"health","heaven","hidden","higher","highly","honest","horses","hunter","impact","import",
"income","inform","inject","inside","intent","invest","island","jacket","jungle","junior",
"kidney","knight","ladder","latest","launch","lawyer","leader","length","lesson","letter",
"liquid","little","living","longer","market","master","matter","member","memory","mental",
"method","middle","mirror","mobile","modest","moment","mother","murder","narrow","nation",
"nature","nearly","notice","number","object","obtain","occupy","office","option","origin",
"output","outside","palace","parent","partly","person","phrase","picture","planet","player",
"pocket","poison","police","policy","potato","prefer","pretty","prince","prison","profit",
"proper","protect","public","purple","pushes","rather","really","reason","recent","record",
"reject","remain","repair","repeat","report","result","return","reveal","review","reward",
"rising","robust","rocket","sadder","sample","school","screen","search","season","secret",
"select","senior","silver","simple","single","sister","slight","source","spring","square",
"stable","status","steady","stream","street","strict","strike","strong","studio","submit",
"sudden","summer","supply","system","target","terror","theory","thread","throat","throne",
"ticket","tissue","toward","travel","treaty","tribal","triple","trophy","tunnel","turkey",
"twenty","unable","unique","update","upward","useful","vector","verbal","vessel","victim",
"vision","visitor","volume","wallet","wander","warmth","wealth","weapon","weekly","weight",
"window","winner","winter","within","wonder","wooden","writer","yellow","zipper",
// Common words often rejected but valid
"empty","enemy","enjoy","enter","earth","early","email","email","elite","eight","every",
"every","elbow","ember","emote","enact","ensue","entry","erode","evade","event","exact",
"exert","exile","extra","yummy","young","yours","ready","risky","style","story","sorry",
"order","other","often","outer","orbit","offer","occur","noble","never","night","never",
];

const WORD_SET = new Set(WORDS_RAW.map(w => w.toLowerCase().trim()).filter(w => w.length >= 4 && /^[a-z]+$/.test(w)));

// ── Online cache (mirrors TG _ONLINE_VALID / _ONLINE_INVALID) ────────────────
const ONLINE_VALID   = new Set();
const ONLINE_INVALID = new Set();

async function _checkOnline(word) {
  const w = word.toLowerCase().trim();
  if (ONLINE_VALID.has(w))   return true;
  if (ONLINE_INVALID.has(w)) return false;
  try {
    const axios = require("axios");
    const res   = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${w}`, { timeout: 4000 });
    if (res.status === 200 && Array.isArray(res.data) && res.data.length) {
      ONLINE_VALID.add(w);
      WORD_SET.add(w);   // cache locally for this session
      return true;
    }
    ONLINE_INVALID.add(w);
    return false;
  } catch {
    // If API is down, give benefit of the doubt to avoid frustrating players
    // but only if word looks plausible (no double consonants at end, etc.)
    return false;
  }
}

// ── Two-stage validation (mirrors TG _check_word_valid) ──────────────────────
async function isValidAsync(word) {
  if (!word || typeof word !== "string") return false;
  const w = word.toLowerCase().trim();
  if (w.length < 4 || !/^[a-z]+$/.test(w)) return false;
  if (WORD_SET.has(w)) return true;
  return _checkOnline(w);
}

// Sync fallback (for scrabble etc. that can't await)
function isValid(word) {
  if (!word || typeof word !== "string") return false;
  const w = word.toLowerCase().trim();
  if (w.length < 4 || !/^[a-z]+$/.test(w)) return false;
  return WORD_SET.has(w) || ONLINE_VALID.has(w);
}

function randomWord(startLetter, minLen = 4) {
  const letter = (startLetter || "").toLowerCase();
  const cands  = [...WORD_SET].filter(w => w.length >= minLen && (!letter || w[0] === letter));
  return cands.length ? cands[Math.floor(Math.random() * cands.length)] : null;
}

function chainStartWord() {
  const cands = [...WORD_SET].filter(w => w.length >= 4 && w.length <= 6);
  return cands[Math.floor(Math.random() * cands.length)] || "game";
}

function scrabbleLetters(n = 7) {
  const freq = "EEEEEEEEEEEEAAAAAAAAAIIIIIIIIIOOOOOOOONNNNNNRRRRRRTTTTTTLLLLSSSSUUUUDDDDGGGBBCCMMPPFFHHVVWWYYKKJXQZ";
  return Array.from({ length: n }, () => freq[Math.floor(Math.random() * freq.length)].toLowerCase());
}

module.exports = { isValid, isValidAsync, randomWord, chainStartWord, scrabbleLetters, WORD_SET };
