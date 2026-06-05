// plugins/sports.js — Miss Chatra Sports Hub v5
// Fixed: correct 2025/26 season, dynamic season IDs, working scorers, season history
"use strict";

const axios = require("axios");

// ── Current season detection (auto-updates) ───────────────────────────────────
// Football season starts ~August. If month >= 8 → current year, else previous year
function currentSeasonYear() {
  const now = new Date();
  return now.getMonth() >= 7 ? now.getFullYear() : now.getFullYear() - 1;
}
const SEASON = String(currentSeasonYear()); // "2025" for 2025/26 season

// ── HTTP helper ───────────────────────────────────────────────────────────────
async function get(url, opts = {}) {
  const cfg = {
    params:  opts.params || {},
    headers: {
      "User-Agent":      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122",
      "Accept":          "application/json, */*",
      "Accept-Language": "en-US,en;q=0.9",
      ...(opts.headers || {}),
    },
    timeout: opts.timeout || 18000,
    validateStatus: s => s < 500,
  };
  for (let i = 0; i < 2; i++) {
    try {
      const r = await axios.get(url, cfg);
      if (r.status === 200 && r.data) return r.data;
    } catch {}
    if (i === 0) await new Promise(r => setTimeout(r, 700));
  }
  return null;
}

// ── League config ─────────────────────────────────────────────────────────────
const TOP5 = ["Premier League", "La Liga", "Serie A", "Bundesliga", "Champions League"];

const LEAGUES = {
  "Premier League":   { flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", espn:"eng.1",          fd:"PL",  sfId:"17"  },
  "La Liga":          { flag:"🇪🇸", espn:"esp.1",          fd:"PD",  sfId:"8"   },
  "Serie A":          { flag:"🇮🇹", espn:"ita.1",          fd:"SA",  sfId:"23"  },
  "Bundesliga":       { flag:"🇩🇪", espn:"ger.1",          fd:"BL1", sfId:"35"  },
  "Ligue 1":          { flag:"🇫🇷", espn:"fra.1",          fd:"FL1", sfId:"34"  },
  "Champions League": { flag:"🏆", espn:"UEFA.CHAMPIONS",  fd:"CL",  sfId:"7"   },
  "Europa League":    { flag:"🥈", espn:"UEFA.EUROPA",     fd:"EL",  sfId:"679" },
  "Eredivisie":       { flag:"🇳🇱", espn:"ned.1",          fd:null,  sfId:"37"  },
  "Primeira Liga":    { flag:"🇵🇹", espn:"por.1",          fd:null,  sfId:"238" },
  "Super Lig":        { flag:"🇹🇷", espn:"tur.1",          fd:null,  sfId:"52"  },
  "MLS":              { flag:"🇺🇸", espn:"usa.1",          fd:"MLS", sfId:"242" },
  "Saudi Pro League": { flag:"🇸🇦", espn:"ksa.1",          fd:null,  sfId:"955" },
  "Brasileirao":      { flag:"🇧🇷", espn:"bra.1",          fd:null,  sfId:"325" },
  "Argentine Liga":   { flag:"🇦🇷", espn:"arg.1",          fd:null,  sfId:"155" },
  "NPFL":             { flag:"🇳🇬", espn:null,             fd:null,  sfId:"879" },
};

const ALIASES = {
  epl:"Premier League","premier league":"Premier League",prem:"Premier League",pl:"Premier League",england:"Premier League",
  laliga:"La Liga","la liga":"La Liga",spain:"La Liga",
  "serie a":"Serie A",seriea:"Serie A",italy:"Serie A",calcio:"Serie A",
  bundesliga:"Bundesliga",germany:"Bundesliga",buli:"Bundesliga",
  "ligue 1":"Ligue 1",ligue1:"Ligue 1",france:"Ligue 1",
  ucl:"Champions League",cl:"Champions League","champions league":"Champions League",uefa:"Champions League",
  uel:"Europa League","europa league":"Europa League",
  eredivisie:"Eredivisie",netherlands:"Eredivisie",dutch:"Eredivisie",
  "primeira liga":"Primeira Liga",portugal:"Primeira Liga",
  "super lig":"Super Lig",turkey:"Super Lig",
  mls:"MLS",usa:"MLS",
  saudi:"Saudi Pro League","saudi pro":"Saudi Pro League",
  brazil:"Brasileirao",
  argentina:"Argentine Liga",
  npfl:"NPFL",nigeria:"NPFL",
};

function resolveLeague(input) {
  if (!input) return null;
  const k = input.toLowerCase().trim();
  return Object.keys(LEAGUES).find(l => l.toLowerCase() === k)
    || ALIASES[k]
    || Object.keys(LEAGUES).find(l => l.toLowerCase().startsWith(k))
    || Object.keys(LEAGUES).find(l => k.split(" ").filter(w=>w.length>2).every(w => l.toLowerCase().includes(w)))
    || null;
}

// ── Sofascore — fetch CURRENT season ID dynamically ───────────────────────────
const SF = "https://api.sofascore.com/api/v1";
const SF_HDR = {
  "User-Agent":   "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 Chrome/122 Mobile Safari/537.36",
  "Accept":       "application/json",
  "Referer":      "https://www.sofascore.com/",
  "Origin":       "https://www.sofascore.com",
};

// Cache season IDs per tournament
const _sfSeasonCache = {};

async function sfCurrentSeason(sfId) {
  if (_sfSeasonCache[sfId]) return _sfSeasonCache[sfId];
  try {
    const d = await get(`${SF}/unique-tournament/${sfId}/seasons`, { headers: SF_HDR, timeout: 12000 });
    const seasons = d?.seasons || [];
    // Find the most recent season
    const current = seasons[0]; // Sofascore returns newest first
    if (current?.id) {
      _sfSeasonCache[sfId] = String(current.id);
      return _sfSeasonCache[sfId];
    }
  } catch {}
  return null;
}

async function sfReq(path) {
  return get(`${SF}${path}`, { headers: SF_HDR, timeout: 16000 });
}

async function sfStandings(sfId, seasonId) {
  const sid = seasonId || await sfCurrentSeason(sfId);
  if (!sid) return null;
  const d = await sfReq(`/unique-tournament/${sfId}/season/${sid}/standings/total`);
  return d?.standings?.[0]?.rows || null;
}

async function sfTopPlayers(sfId, seasonId, type) {
  const sid = seasonId || await sfCurrentSeason(sfId);
  if (!sid) return null;
  const d = await sfReq(`/unique-tournament/${sfId}/season/${sid}/top-players/${type}`);
  return d?.topPlayers?.[type] || null;
}

// Get available seasons for a league (for season-by-season)
async function sfGetSeasons(sfId) {
  try {
    const d = await get(`${SF}/unique-tournament/${sfId}/seasons`, { headers: SF_HDR, timeout: 12000 });
    return (d?.seasons || []).slice(0, 10).map(s => ({
      id:   String(s.id),
      year: s.year || s.name || String(s.id),
    }));
  } catch { return []; }
}

// ── ESPN API ──────────────────────────────────────────────────────────────────
const ESPN_SITE = "https://site.api.espn.com/apis/site/v2/sports/soccer";
const ESPN_WEB  = "https://site.web.api.espn.com/apis/v2/sports/soccer";
const ESPN_CORE = "https://sports.core.api.espn.com/v2/sports/soccer/leagues";

async function espnScoreboard(code) {
  const d = await get(`${ESPN_SITE}/${code}/scoreboard`);
  return d?.events || [];
}

async function espnEventSummary(code, eventId) {
  // Returns detailed match stats: scorers, cards, subs, penalties
  try {
    const d = await get(`${ESPN_SITE}/${code}/summary`, { params: { event: eventId } });
    return d;
  } catch { return null; }
}

function parseMatchEvents(summary) {
  if (!summary) return null;
  const events = [];
  // Walk all play-by-play or key events
  const plays = summary?.keyEvents || summary?.plays || summary?.drives?.plays || [];
  // ESPN keyEvents / boxscore
  const teams = summary?.boxscore?.teams || [];
  const hTeam = teams.find(t => t.homeAway === "home");
  const aTeam = teams.find(t => t.homeAway === "away");

  // Parse scoringPlays (goals/penalties)
  for (const sp of summary?.scoringPlays || []) {
    events.push({
      type: "goal",
      team: sp.team?.displayName || "?",
      player: sp.athletesInvolved?.[0]?.displayName || sp.text || "?",
      clock: sp.clock?.displayValue || sp.period?.displayValue || "?",
      text: sp.text || "",
    });
  }

  // ESPN pickcenter / gamepackage for cards
  for (const inc of summary?.incidents || []) {
    const t = inc.type?.toLowerCase() || "";
    if (t.includes("yellow") || t.includes("red") || t.includes("card")) {
      events.push({
        type: t.includes("red") ? "redcard" : "yellowcard",
        team: inc.team?.displayName || "?",
        player: inc.player?.displayName || inc.athletesInvolved?.[0]?.displayName || "?",
        clock: inc.clock?.displayValue || "?",
      });
    }
  }

  return { events, homeTeam: hTeam?.team?.displayName, awayTeam: aTeam?.team?.displayName };
}

function fmtMatchEvents(summary, homeTeam, awayTeam) {
  const lines = [];
  const plays = summary?.scoringPlays || [];
  const cards = [];

  // Goals
  if (plays.length) {
    lines.push("⚽ *Goals:*");
    for (const g of plays) {
      const who = g.athletesInvolved?.[0]?.displayName || g.text || "?";
      const when = g.clock?.displayValue || g.period?.displayValue || "?";
      const team = g.team?.displayName || "?";
      const pen  = g.text?.toLowerCase().includes("penalty") ? " ⚽ pen" : "";
      const og   = g.text?.toLowerCase().includes("own goal") ? " (OG)" : "";
      lines.push(`  ${when}' ${who}${og}${pen} (${team})`);
    }
  }

  // Cards from ESPN incidents or disciplinaryActions
  const disc = summary?.article?.injuries || [];
  const allInc = [
    ...(summary?.drives?.previousGamePlayList || []),
    ...(summary?.keyPlays || []),
  ];

  // Sofascore incidents pattern
  const sfInc = summary?.incidents || [];
  const yellows = sfInc.filter(i => i.incidentType === "card" && (i.incidentClass === "yellow" || i.incidentClass === "yellowRed"));
  const reds    = sfInc.filter(i => i.incidentType === "card" && i.incidentClass === "red");
  const goals   = sfInc.filter(i => i.incidentType === "goal" || i.incidentType === "penalty");
  const subs    = sfInc.filter(i => i.incidentType === "substitution");

  if (goals.length && !plays.length) {
    lines.push("⚽ *Goals:*");
    for (const g of goals) {
      const who  = g.player?.name || g.player?.shortName || "?";
      const when = g.time?.injuryTime ? `${g.time?.added || g.time?.seconds ? Math.floor((g.time.seconds||0)/60) : "?"}+${g.time.injuryTime}` : (g.time?.seconds ? Math.floor(g.time.seconds/60) : "?");
      const pen  = g.incidentClass === "penalty" ? " (pen)" : g.incidentClass === "ownGoal" ? " (OG)" : "";
      lines.push(`  ${when}' ${who}${pen}`);
    }
  }

  if (yellows.length) {
    lines.push("🟨 *Yellow Cards:*");
    for (const y of yellows) {
      const who  = y.player?.name || y.player?.shortName || "?";
      const when = y.time?.seconds ? Math.floor(y.time.seconds/60) : "?";
      lines.push(`  ${when}' ${who}`);
    }
  }
  if (reds.length) {
    lines.push("🟥 *Red Cards:*");
    for (const r of reds) {
      const who  = r.player?.name || r.player?.shortName || "?";
      const when = r.time?.seconds ? Math.floor(r.time.seconds/60) : "?";
      lines.push(`  ${when}' ${who}`);
    }
  }
  if (subs.length) {
    lines.push("🔄 *Substitutions:*");
    for (const s of subs.slice(0, 6)) {
      const out  = s.player?.name    || s.player?.shortName    || "?";
      const _in  = s.playerIn?.name  || s.playerIn?.shortName  || "?";
      const when = s.time?.seconds ? Math.floor(s.time.seconds/60) : "?";
      lines.push(`  ${when}' ↑${_in} ↓${out}`);
    }
  }

  return lines.join("\n");
}

async function espnStandings(code, season) {
  const s = season || SEASON;
  // Try web API first (richer)
  let d = await get(`${ESPN_WEB}/${code}/standings`, { params: { season: s, type: 0, sort: "rank:asc" } });
  if (!d) d = await get(`${ESPN_SITE}/${code}/standings`, { params: { season: s } });
  return d;
}

function parseESPNStandings(data) {
  if (!data) return null;
  let entries =
    data?.standings?.entries ||
    data?.children?.[0]?.standings?.entries ||
    data?.children?.[0]?.children?.[0]?.standings?.entries;

  if (!entries?.length) {
    for (const g of (data?.groups || [])) {
      const e = g?.standings?.entries || g?.children?.[0]?.standings?.entries;
      if (e?.length) { entries = e; break; }
    }
  }
  if (!entries?.length) return null;

  return entries.slice(0, 20).map((e, i) => {
    const st = {};
    for (const s of (e.stats || [])) {
      st[s.abbreviation] = s.value;
      st[s.name] = s.value;
    }
    const gf = Number(st.GF || st.F || st.pointsFor    || st["Goals For"]    || 0);
    const ga = Number(st.GA || st.A || st.pointsAgainst || st["Goals Against"] || 0);
    const gd = Number(st.GD || st.pointDifferential || (gf - ga) || 0);
    const w  = Number(st.W  || st.w  || 0);
    const d  = Number(st.T  || st.D  || st.d || 0);
    const l  = Number(st.L  || st.l  || 0);
    // Points: trust ESPN if non-zero, otherwise compute W*3+D (UEFA rules)
    const espnPts = Number(st.PTS || st.Pts || st.pts || st.Points || st.TP || st.tp || 0);
    const pts  = espnPts > 0 ? espnPts : (w * 3 + d);
    return {
      pos:  i + 1,
      team: e.team?.displayName || e.team?.shortDisplayName || "?",
      p:    Number(st.GP || st.gp || st.P || st.GS || w + d + l || 0),
      w, d, l, gd, pts,
    };
  }).filter(r => r.team && r.team !== "?");
}

// ── Scorers: football-data.org (PRIMARY) → Sofascore → ESPN ──────────────────
// fd.org /scorers is reliable and free, no key needed for the public data
async function fdGetScorers(code, season) {
  if (!code) return null;
  const seasonParam = season ? `?season=${season}&limit=20` : "?limit=20";
  const d = await fdReq(`/competitions/${code}/scorers${seasonParam}`);
  return d?.scorers || null;
}

// ESPN scorers fallback — tries multiple endpoints
async function espnGetScorers(code, season, type) {
  const s = season || SEASON;
  for (const base of [ESPN_SITE, ESPN_WEB]) {
    for (const ep of ["leaders", "statistics/leaders", "statistics"]) {
      try {
        const d = await get(`${base}/${code}/${ep}`, { params: { season: s }, timeout: 10000 });
        const cats = d?.leaders || d?.statistics || [];
        if (!Array.isArray(cats) || !cats.length) continue;
        const typeKws = { goals:["goals","goal","scoring","g"], assists:["assists","assist","a"], rating:["rating","ra"] };
        const kws = typeKws[type] || typeKws.goals;
        const cat = cats.find(c => kws.some(kw =>
          (c.name||"").toLowerCase().includes(kw) || (c.abbreviation||"").toLowerCase() === kw
        )) || cats[0];
        if (cat?.leaders?.length >= 3) {
          return cat.leaders.slice(0,15).map((l,i) => ({
            rank: i+1,
            name: l.athlete?.displayName || l.athlete?.fullName || "?",
            team: l.team?.displayName    || l.team?.shortDisplayName || "?",
            value: l.value ?? 0,
            apps: l.statistics?.appearances || l.statistics?.gamesPlayed || null,
            nat:  l.athlete?.flag?.alt || "",
          })).filter(r => r.name !== "?");
        }
      } catch {}
    }
  }
  return null;
}

// ── football-data.org ─────────────────────────────────────────────────────────
async function fdReq(path) {
  return get(`https://api.football-data.org/v4${path}`, {
    headers: { "X-Auth-Token": "" }, timeout: 14000
  });
}
async function fdStandings(code, season) {
  if (!code) return null;
  const d = await fdReq(`/competitions/${code}/standings${season ? `?season=${season}` : ""}`);
  return d?.standings?.find(s => s.type === "TOTAL")?.table || null;
}


// ── LIVE SCORES ───────────────────────────────────────────────────────────────
async function getLiveScores(leagueName) {
  const lInfo = leagueName ? LEAGUES[leagueName] : null;
  const codes = lInfo?.espn ? [lInfo.espn] : TOP5.map(l => LEAGUES[l].espn);
  const results = [];
  const seen = new Set();

  const fetches = await Promise.allSettled(codes.map(c => espnScoreboard(c)));
  fetches.forEach((res, i) => {
    if (res.status !== "fulfilled") return;
    const lbl = leagueName || TOP5[i] || codes[i];
    for (const ev of res.value) {
      const comp = ev.competitions?.[0];
      if (!comp) continue;
      const home = comp.competitors?.find(c => c.homeAway === "home");
      const away = comp.competitors?.find(c => c.homeAway === "away");
      const key  = `${home?.team?.id}${away?.team?.id}${ev.date}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const state = ev.status?.type?.state;
      const clock = ev.status?.displayClock || "";
      const t = ev.date ? new Date(ev.date).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"Africa/Lagos"}) : "TBD";
      const icon = state === "in" ? `🔴 ${clock}`.trim() : state === "post" ? "✅ FT" : `🕐 ${t}`;
      results.push({
        home: home?.team?.displayName || "?",
        away: away?.team?.displayName || "?",
        sh: home?.score ?? "-", sa: away?.score ?? "-",
        icon, league: ev.name || lbl,
        ts: ev.date ? new Date(ev.date).getTime() : 0,
        espnId: ev.id || null,
        espnCode: codes[i] || null,
      });
    }
  });

  // Sofascore fallback
  if (!results.length) {
    try {
      const today = new Date().toISOString().split("T")[0];
      const d = await sfReq(`/sport/football/scheduled-events/${today}`);
      for (const ev of (d?.events || []).slice(0, 50)) {
        const lge = ev.tournament?.uniqueTournament?.name || "";
        if (leagueName && !lge.toLowerCase().includes(leagueName.toLowerCase().split(" ")[0])) continue;
        const code = ev.status?.code;
        const clk  = ev.status?.displayClock || "";
        const t    = new Date((ev.startTimestamp||0)*1000).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"Africa/Lagos"});
        const icon = [6,7].includes(code) ? `🔴 ${clk}`.trim() : code===31 ? "⏸ HT" : [100,110].includes(code) ? "✅ FT" : `🕐 ${t}`;
        results.push({
          home: ev.homeTeam?.name||"?", away: ev.awayTeam?.name||"?",
          sh: ev.homeScore?.current??"-", sa: ev.awayScore?.current??"-",
          icon, league: lge||leagueName||"Football", ts: (ev.startTimestamp||0)*1000,
          eventId: ev.id || null,
        });
      }
    } catch {}
  }

  const rank = s => s.includes("🔴")?0:s.includes("⏸")?1:s.includes("🕐")?2:3;
  return results.sort((a,b) => rank(a.icon)-rank(b.icon)||a.ts-b.ts);
}

// ── LEAGUE TABLE ──────────────────────────────────────────────────────────────
async function getTable(leagueName, season) {
  const l = LEAGUES[leagueName];
  if (!l) return null;
  const s = season || SEASON;

  // SOURCE 1: ESPN (most reliable, correct season param)
  if (l.espn) {
    try {
      const raw  = await espnStandings(l.espn, s);
      const rows = parseESPNStandings(raw);
      if (rows?.length >= 5) return { rows, source: "ESPN", season: s };
    } catch {}
  }

  // SOURCE 2: Sofascore with dynamic season ID
  try {
    const sfSeason = await sfCurrentSeason(l.sfId);
    const rows = await sfStandings(l.sfId, sfSeason);
    if (rows?.length >= 5) {
      return {
        rows: rows.slice(0,20).map(r => ({
          pos: r.position,
          team: r.team?.shortName||r.team?.name||"?",
          p: r.matches??0, w: r.wins??0, d: r.draws??0, l: r.losses??0,
          gd: (r.scoresFor??0)-(r.scoresAgainst??0), pts: r.points??0,
        })),
        source: "Sofascore", season: s,
      };
    }
  } catch {}

  // SOURCE 3: football-data.org
  if (l.fd) {
    try {
      const table = await fdStandings(l.fd, s);
      if (table?.length >= 5) {
        return {
          rows: table.slice(0,20).map(r => ({
            pos: r.position, team: r.team?.shortName||r.team?.name||"?",
            p: r.playedGames??0, w: r.won??0, d: r.draw??0, l: r.lost??0,
            gd: r.goalDifference??0, pts: r.points??0,
          })),
          source: "football-data.org", season: s,
        };
      }
    } catch {}
  }

  return null;
}

// ── TOP PLAYERS ───────────────────────────────────────────────────────────────
async function getTopPlayers(leagueName, type, season) {
  const l = LEAGUES[leagueName];
  if (!l) return null;
  const s = season || SEASON;

  // SOURCE 1: football-data.org (most reliable for goals/assists, free)
  if (l.fd && (type === "goals" || type === "assists")) {
    try {
      const sc = await fdGetScorers(l.fd, s);
      if (sc?.length >= 1) {
        return {
          players: sc.slice(0,15).map((p,i) => ({
            rank: i+1,
            name: p.player?.name || "?",
            team: p.team?.shortName || p.team?.name || "?",
            value: type === "goals" ? (p.goals ?? 0) : (p.assists ?? 0),
            apps: p.playedMatches || null,
            nat: p.player?.nationality || "",
          })),
          source: "football-data.org", season: s,
        };
      }
    } catch {}
  }

  // SOURCE 2: Sofascore with DYNAMIC season ID
  try {
    const sfSeason = await sfCurrentSeason(l.sfId);
    if (sfSeason) {
      const players = await sfTopPlayers(l.sfId, sfSeason, type);
      if (players?.length >= 1) {
        return {
          players: players.slice(0,15).map((p,i) => {
            const st = p.statistics || {};
            return {
              rank: i+1,
              name: p.player?.name || p.player?.shortName || "?",
              team: p.team?.name   || p.team?.shortName   || "?",
              value: type === "rating" ? Number(st[type] ?? 0).toFixed(2) : (st[type] ?? 0),
              apps: st.appearances || null,
              nat: p.player?.country?.alpha2 || "",
            };
          }),
          source: "Sofascore", season: s,
        };
      }
    }
  } catch {}

  // SOURCE 3: ESPN (goals/assists fallback)
  if (l.espn) {
    try {
      const players = await espnGetScorers(l.espn, s, type);
      if (players?.length >= 1) return { players, source: "ESPN", season: s };
    } catch {}
  }

  return null;
}

// ── SEASON HISTORY ────────────────────────────────────────────────────────────
async function getSeasonHistory(leagueName, type) {
  const l = LEAGUES[leagueName];
  if (!l) return null;

  const seasons = await sfGetSeasons(l.sfId);
  if (!seasons.length) return null;

  const history = [];
  for (const season of seasons.slice(0, 5)) {
    try {
      const players = await sfTopPlayers(l.sfId, season.id, type);
      if (players?.length) {
        const top = players[0];
        const st  = top.statistics || {};
        history.push({
          season: season.year,
          name:   top.player?.name || "?",
          team:   top.team?.name   || "?",
          value:  st[type] ?? 0,
        });
      }
      await new Promise(r => setTimeout(r, 300)); // rate limit
    } catch {}
  }
  return history;
}

// ── PLAYER SEARCH ─────────────────────────────────────────────────────────────
async function findPlayer(name) {
  // Sofascore search is most reliable
  try {
    const d = await sfReq(`/search/all?q=${encodeURIComponent(name)}&page=0`);
    const allResults = d?.results || d?.groups?.flatMap?.(g => g.results||[]) || [];
    const players = allResults.filter(r =>
      r.type === "player" || r.entity?.type === "player" || r.subType === "player"
    );
    if (players.length) {
      return players.slice(0, 5).map(p => {
        const pl = p.entity || p;
        const team = pl.team?.name || pl.latestTeam?.name || "?";
        const nat  = pl.country?.alpha2 || pl.nationality?.alpha2 || "";
        const pos  = pl.position || pl.proposedMarketValue ? (pl.preferredPosition || "?") : "?";
        return { id: pl.id, name: pl.name||pl.shortName||"?", team, pos, nat, source:"sofascore" };
      });
    }
  } catch {}

  // ESPN soccer player search via name lookup
  try {
    // ESPN doesn't have a direct player search for soccer but we can try the athletes endpoint
    for (const base of [ESPN_SITE, ESPN_WEB]) {
      const d = await get(`${base}/athletes`, { params: { limit: 10, q: name }, timeout: 10000 });
      const athletes = d?.athletes || d?.items || d?.data || [];
      if (athletes.length) {
        return athletes.slice(0,5).map(a => ({
          id: a.id, name: a.displayName||a.fullName||"?",
          team: a.team?.displayName||a.team?.shortDisplayName||"?",
          pos: a.position?.abbreviation||a.position?.name||"?",
          nat: a.flag?.alt||a.nationality||"", source: "espn"
        })).filter(a => a.name !== "?");
      }
    }
  } catch {}

  return [];
}

async function getPlayerStats(name) {
  const players = await findPlayer(name);
  if (!players.length) return null;
  const player = players[0];
  let currentStats = null;
  let careerStats  = null;

  if (player.source === "sofascore" && player.id) {
    // Current season stats
    try {
      const d = await sfReq(`/player/${player.id}/statistics/season`);
      const st = Array.isArray(d?.statistics) ? d.statistics[0] : d?.statistics;
      if (st) {
        currentStats = {
          season: st.season?.year || `${currentSeasonYear()}/${currentSeasonYear()+1-2000}`,
          league: st.tournament?.name || st.uniqueTournament?.name || "?",
          apps: st.appearances ?? st.games ?? null,
          goals: st.goals ?? 0,
          assists: st.assists ?? 0,
          rating: st.rating ? Number(st.rating).toFixed(2) : null,
          yellowCards: st.yellowCards ?? 0,
          redCards: st.redCards ?? 0,
          minutesPlayed: st.minutesPlayed ?? null,
          shots: st.shots ?? null,
          shotsOnTarget: st.onTargetScoringAttempt ?? st.shotsOnTarget ?? null,
          keyPasses: st.keyPasses ?? null,
          tackles: st.totalTackle ?? st.tackles ?? null,
          dribbles: st.successfulDribbles ?? null,
          passingAcc: st.accuratePasses && st.totalPasses ? `${Math.round(st.accuratePasses/st.totalPasses*100)}%` : null,
        };
      }
    } catch {}

    // All-time career stats
    try {
      const d = await sfReq(`/player/${player.id}/career-statistics`);
      const career = d?.career || d;
      if (career) {
        careerStats = {
          totalGoals:   career.goals ?? null,
          totalAssists: career.assists ?? null,
          totalApps:    career.appearances ?? null,
          leagues: (career.tournaments||[]).slice(0,6).map(t=>t.name).join(", ") || null,
        };
      }
    } catch {}
  }

  return { player, currentStats, careerStats, allMatches: players };
}

// ── FORMAT helpers ────────────────────────────────────────────────────────────
function pL(s,n){return String(s).padStart(n);}
function pR(s,n){return String(s).padEnd(n);}

function fmtTable(rows) {
  const h   = `${pL("#",2)} ${pR("Club",18)} ${pL("P",2)} ${pL("W",2)} ${pL("D",2)} ${pL("L",2)} ${pL("GD",4)} ${pL("Pts",3)}`;
  const sep = "─".repeat(40);
  const body = rows.map(r => {
    const gd = Number(r.gd||0);
    return `${pL(r.pos,2)} ${pR((r.team||"?").slice(0,18),18)} ${pL(r.p,2)} ${pL(r.w,2)} ${pL(r.d,2)} ${pL(r.l,2)} ${pL(gd>=0?`+${gd}`:String(gd),4)} ${pL(r.pts,3)}`;
  });
  return "```\n" + [h, sep, ...body].join("\n") + "\n```";
}

function fmtPlayers(players, emoji) {
  return players.map(p => {
    const apps = p.apps ? ` · ${p.apps} apps` : "";
    const nat  = p.nat  ? ` ${p.nat}` : "";
    return `${pL(p.rank,2)}. ${emoji} *${(p.name||"?").slice(0,24)}* — *${p.value}*\n    🏟 ${p.team}${apps}${nat}`;
  }).join("\n\n");
}

function getStreams(leagueName) {
  const official = {
    "Premier League":   [{name:"Sky Sports",url:"https://skysports.com/watch",signal:"📶📶📶"},{name:"TNT Sports",url:"https://tntsports.co.uk",signal:"📶📶📶"},{name:"Peacock TV",url:"https://peacocktv.com",signal:"📶📶📶"}],
    "Champions League": [{name:"UEFA.TV Free",url:"https://uefa.com/uefachampionsleague",signal:"📶📶📶"},{name:"CBS Sports",url:"https://cbssports.com/soccer",signal:"📶📶📶"}],
    "Europa League":    [{name:"UEFA.TV Free",url:"https://uefa.com/uefaeuropaleague",signal:"📶📶📶"}],
    "La Liga":          [{name:"LaLiga TV",url:"https://laliga.com",signal:"📶📶📶"}],
    "Bundesliga":       [{name:"Bundesliga App",url:"https://bundesliga.com",signal:"📶📶📶"}],
    "Serie A":          [{name:"DAZN",url:"https://dazn.com",signal:"📶📶📶"}],
    "Ligue 1":          [{name:"DAZN",url:"https://dazn.com",signal:"📶📶📶"}],
  };
  return {
    "🏆 Official":       leagueName ? (official[leagueName]||[]) : [],
    "🎁 Free Legal":     [{name:"FIFA+",url:"https://plus.fifa.com",signal:"📶📶📶"},{name:"YouTube Soccer",url:"https://youtube.com/c/PLpremierleague",signal:"📶📶📶"},{name:"ESPN",url:"https://espn.com/soccer",signal:"📶📶"}],
    "📡 Free Streams":   [{name:"StreamEast",url:"https://streameast.to",signal:"📶📶📶"},{name:"FootyBite",url:"https://footybite.cc",signal:"📶📶📶"},{name:"Hesgoal",url:"https://hesgoal.tv",signal:"📶📶📶"},{name:"CrackStreams",url:"https://crackstreams.io",signal:"📶📶📶"},{name:"SportSurge",url:"https://sportsurge.net",signal:"📶📶📶"},{name:"VIPLeague",url:"https://vipleague.im",signal:"📶📶"},{name:"BuffStream",url:"https://buffstream.io",signal:"📶📶"},{name:"LiveTV.sx",url:"https://livetv.sx",signal:"📶📶"},{name:"Soccerstreams100",url:"https://soccerstreams-100.io",signal:"📶📶"},{name:"Bosscast",url:"https://bosscast.net",signal:"📶📶"},{name:"Ronaldo7",url:"https://ronaldo7.net",signal:"📶"},{name:"1Stream",url:"https://1stream.eu",signal:"📶📶"}],
    "💬 Social/Reddit":  [{name:"r/soccerstreams",url:"https://reddit.com/r/soccerstreams",signal:"📶📶📶 (match days)"},{name:"r/footballstreams",url:"https://reddit.com/r/footballstreams",signal:"📶📶📶 (match days)"},{name:"Telegram @footballlive",url:"https://t.me/footballlivestream",signal:"📶📶"},{name:"Twitter #FootballLive",url:"https://twitter.com/search?q=%23FootballLive&f=live",signal:"📶📶"}],
  };
}

// ── Plugin ────────────────────────────────────────────────────────────────────
module.exports = {
  name: "Sports",
  category: "sports",
  desc: "Live scores, tables, top scorers, player stats, season history, stream links",
  command: [
    // ONE primary + common aliases for each function
    "livescore","scores",
    "table","standings",
    "topscorer","topscorers",
    "topassist","topassists",
    "toprating",
    "topstats",
    "seasonscorer","seasonassist","seasonhistory","seasonstat",
    "player","playerstats",
    "livestream","streams",
    "leagues","sporthelp",
  ],

  run: async ({ sock, m, args, command, chatId, userId, reply, prefix }) => {
    const pfx     = prefix || "/";
    const chat    = chatId || m?.chat;
    const fullArg = args.join(" ").trim();

    // Parse season from args: e.g. "/topscorer epl 2023"
    let seasonArg = null;
    let leagueArg = fullArg;
    const yearMatch = fullArg.match(/\b(20\d{2})\b/);
    if (yearMatch) {
      seasonArg = yearMatch[1];
      leagueArg = fullArg.replace(yearMatch[0], "").trim();
    }
    const league = resolveLeague(leagueArg) || resolveLeague(args[0]);
    const seasonLabel = seasonArg ? `${seasonArg}/${String(parseInt(seasonArg)+1).slice(2)}` : `${SEASON}/${String(parseInt(SEASON)+1).slice(2)}`;

    // ── HELP ──────────────────────────────────────────────────────────────────
    if (["leagues","sporthelp"].includes(command)) {
      return reply([
        `⚽ *Miss Chatra Sports*`,``,
        `*Commands:*`,
        `  ${pfx}livescore [league]        — Today's scores`,
        `  ${pfx}table [league] [year]     — Standings`,
        `  ${pfx}topscorer [league] [year] — Top scorers`,
        `  ${pfx}topassist [league] [year] — Top assists`,
        `  ${pfx}toprating [league]        — Highest rated`,
        `  ${pfx}topstats [league]         — Goals + assists`,
        `  ${pfx}seasonscorer <league>     — Season-by-season scorers`,
        `  ${pfx}seasonassist <league>     — Season-by-season assists`,
        `  ${pfx}player <name>             — Player stats`,
        `  ${pfx}livestream [league]       — Stream links`,``,
        `*No league = Top 5 leagues shown*`,
        `*Add year for history: ${pfx}topscorer epl 2023*`,``,
        `*Leagues:*`,
        Object.keys(LEAGUES).map(l=>`  ${LEAGUES[l].flag} ${l}`).join("\n"),
      ].join("\n"));
    }

    // ── LIVE SCORES ───────────────────────────────────────────────────────────
    if (["livescore","scores"].includes(command)) {
      const dateStr = new Date().toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",timeZone:"Africa/Lagos"});
      await reply(`⚽ Fetching ${league?`*${league}*`:"top league"} scores & match details...`);
      const all = await getLiveScores(league);
      if (!all.length) return reply(`📅 *${dateStr}*\n\nNo matches found${league?` for *${league}*`:""}.\n\n• Check back later or try a specific league\n• Example: *${pfx}livescore epl*`);

      const live = all.filter(s=>s.icon.includes("🔴")).length;
      const fin  = all.filter(s=>s.icon.includes("✅")).length;
      const groups = {};
      for (const s of all) { if (!groups[s.league]) groups[s.league]=[]; groups[s.league].push(s); }

      const lines = [
        `╔══════════════════════════════════════════════╗`,
        `⚽ *Football — ${dateStr}*`,
        `╠══════════════════════════════════════════════╣`,
        live>0?`🔴 *${live} LIVE*  •  ${fin} Finished  •  ${all.length-live-fin} Upcoming`:`📅 ${all.length} Matches  •  ${fin} Finished`,
        `╚══════════════════════════════════════════════╝`,
        ``,
      ].filter(Boolean);

      for (const [lge, ms] of Object.entries(groups)) {
        lines.push(`🏆 *${lge}*`);
        lines.push(`${"─".repeat(40)}`);

        for (const s of ms) {
          // Score line
          lines.push(`${s.icon}  *${s.home}* ${s.sh} — ${s.sa} *${s.away}*`);

          // Match events (goals, cards, subs) from Sofascore if match has score
          if (s.eventId && (s.icon.includes("🔴") || s.icon.includes("✅"))) {
            try {
              const summ = await sfReq(`/event/${s.eventId}/incidents`);
              if (summ?.incidents?.length) {
                const goals   = summ.incidents.filter(i => i.incidentType === "goal" || i.incidentType === "penalty");
                const yellows = summ.incidents.filter(i => i.incidentType === "card" && (i.incidentClass === "yellow" || i.incidentClass === "yellowRed"));
                const reds    = summ.incidents.filter(i => i.incidentType === "card" && i.incidentClass === "red");
                const subs    = summ.incidents.filter(i => i.incidentType === "substitution").slice(0,4);

                if (goals.length) {
                  for (const g of goals) {
                    const who  = g.player?.shortName || g.player?.name || "?";
                    const when = g.time?.injuryTime
                      ? `${g.time?.added||"?"}+${g.time.injuryTime}`
                      : (g.time?.seconds ? Math.floor(g.time.seconds/60) : "?");
                    const pen  = g.incidentClass === "penalty" ? " ⚽pen" : g.incidentClass === "ownGoal" ? " (OG)" : "";
                    const isHome = g.isHome;
                    lines.push(`  ⚽ ${when}' ${who}${pen}${isHome?" (H)":" (A)"}`);
                  }
                }
                if (yellows.length) {
                  const names = yellows.map(y => {
                    const t = y.time?.seconds ? Math.floor(y.time.seconds/60) : "?";
                    return `${t}' ${y.player?.shortName||y.player?.name||"?"}`;
                  });
                  lines.push(`  🟨 ${names.join("  ")}`);
                }
                if (reds.length) {
                  const names = reds.map(r => {
                    const t = r.time?.seconds ? Math.floor(r.time.seconds/60) : "?";
                    return `${t}' ${r.player?.shortName||r.player?.name||"?"}`;
                  });
                  lines.push(`  🟥 ${names.join("  ")}`);
                }
                if (subs.length) {
                  for (const sb of subs) {
                    const t   = sb.time?.seconds ? Math.floor(sb.time.seconds/60) : "?";
                    const out = sb.player?.shortName   || "?";
                    const _in = sb.playerIn?.shortName || "?";
                    lines.push(`  🔄 ${t}' ↑${_in} ↓${out}`);
                  }
                }
              }
            } catch {}
          } else if (s.sh !== "-" && s.sh !== 0 && Number(s.sh)+Number(s.sa) > 0) {
            // Has score but no eventId — show ESPN scoringPlays if available
            if (s.espnId && s.espnCode) {
              try {
                const summ = await espnEventSummary(s.espnCode, s.espnId);
                const plays = summ?.scoringPlays || [];
                for (const g of plays) {
                  const who  = g.athletesInvolved?.[0]?.displayName || g.text || "?";
                  const when = g.clock?.displayValue || "?";
                  lines.push(`  ⚽ ${when}' ${who}`);
                }
              } catch {}
            }
          }
          lines.push("");
        }
      }
      lines.push(`_${new Date().toLocaleTimeString("en-GB",{timeZone:"Africa/Lagos"})} WAT · Miss Chatra_`);
      lines.push(`_Type ${pfx}livescore <league> for specific league_`);
      await reply(lines.join("\n"));
      return;
    }

    // ── TABLE ─────────────────────────────────────────────────────────────────
    if (["table","standings"].includes(command)) {
      if (!league) {
        await reply(`📊 Fetching Top 5 standings (${seasonLabel})...`);
        const results = await Promise.allSettled(TOP5.map(l => getTable(l, seasonArg)));
        const lines = [`📊 *Top 5 Standings — ${seasonLabel}*\n`];
        let found = 0;
        for (let i = 0; i < TOP5.length; i++) {
          const res = results[i];
          if (res.status==="fulfilled" && res.value?.rows?.length) {
            found++;
            lines.push(`${LEAGUES[TOP5[i]].flag} *${TOP5[i]}*`);
            lines.push(fmtTable(res.value.rows.slice(0,6)));
            lines.push(`_Full: ${pfx}table ${TOP5[i].toLowerCase()}_\n`);
          }
        }
        if (!found) return reply(`❌ Could not load standings right now.\n\nTry: *${pfx}table epl*`);
        await reply(lines.join("\n"));
        return;
      }
      await reply(`📊 Fetching *${league}* standings (${seasonLabel})...`);
      const result = await getTable(league, seasonArg);
      if (!result?.rows?.length) return reply(`❌ *${league}* standings unavailable right now.\n\nTry again in a moment.`);
      await reply([
        `${LEAGUES[league].flag} *${league} — Standings ${seasonLabel}*`,
        `_Source: ${result.source}_`,``,
        fmtTable(result.rows),``,
        `_${pfx}topscorer ${leagueArg} | ${pfx}topassist ${leagueArg}_`,
        `_Add year for history: ${pfx}table ${leagueArg} 2023_`,
      ].join("\n"));
      return;
    }

    // ── TOP SCORERS ───────────────────────────────────────────────────────────
    if (["topscorer","topscorers"].includes(command)) {
      if (!league) {
        await reply(`⚽ Fetching top scorers (${seasonLabel})...`);
        const results = await Promise.allSettled(TOP5.slice(0,4).map(l=>getTopPlayers(l,"goals",seasonArg)));
        const lines = [`⚽ *Top Scorers — ${seasonLabel}*\n`];
        let found = 0;
        for (let i=0;i<4;i++) {
          const res = results[i]; if (res.status!=="fulfilled"||!res.value?.players?.length) continue;
          found++;
          lines.push(`${LEAGUES[TOP5[i]].flag} *${TOP5[i]}*`);
          lines.push(fmtPlayers(res.value.players.slice(0,5),"⚽")); lines.push("");
        }
        if (!found) return reply(`❌ Data unavailable.\n\nTry: *${pfx}topscorer epl*`);
        await reply(lines.join("\n")); return;
      }
      await reply(`⚽ Fetching top scorers — *${league}* (${seasonLabel})...`);
      const result = await getTopPlayers(league,"goals",seasonArg);
      if (!result?.players?.length) return reply(`❌ Scorer data unavailable for *${league}*.\n\nPlease try again shortly.\nOr specify a year: *${pfx}topscorer epl 2023*`);
      await reply([
        `${LEAGUES[league].flag} *${league} — Top Scorers ${seasonLabel}*`,
        `_Source: ${result.source}_`,``,
        fmtPlayers(result.players,"⚽"),``,
        `_${pfx}topassist ${leagueArg} | ${pfx}seasonscorer ${leagueArg}_`,
      ].join("\n"));
      return;
    }

    // ── TOP ASSISTS ───────────────────────────────────────────────────────────
    if (["topassist","topassists"].includes(command)) {
      if (!league) {
        await reply(`🎯 Fetching top assists (${seasonLabel})...`);
        const results = await Promise.allSettled(TOP5.slice(0,4).map(l=>getTopPlayers(l,"assists",seasonArg)));
        const lines = [`🎯 *Top Assists — ${seasonLabel}*\n`];
        let found = 0;
        for (let i=0;i<4;i++) {
          const res = results[i]; if (res.status!=="fulfilled"||!res.value?.players?.length) continue;
          found++;
          lines.push(`${LEAGUES[TOP5[i]].flag} *${TOP5[i]}*`);
          lines.push(fmtPlayers(res.value.players.slice(0,5),"🎯")); lines.push("");
        }
        if (!found) return reply(`❌ Data unavailable.\n\nTry: *${pfx}topassist epl*`);
        await reply(lines.join("\n")); return;
      }
      await reply(`🎯 Fetching top assists — *${league}* (${seasonLabel})...`);
      const result = await getTopPlayers(league,"assists",seasonArg);
      if (!result?.players?.length) return reply(`❌ Assist data unavailable for *${league}*.\n\nTry: *${pfx}topassist epl 2023*`);
      await reply([
        `${LEAGUES[league].flag} *${league} — Top Assists ${seasonLabel}*`,
        `_Source: ${result.source}_`,``,
        fmtPlayers(result.players,"🎯"),``,
        `_${pfx}topscorer ${leagueArg} | ${pfx}seasonassist ${leagueArg}_`,
      ].join("\n"));
      return;
    }

    // ── TOP RATING ────────────────────────────────────────────────────────────
    if (command === "toprating") {
      const target = league || "Premier League";
      await reply(`⭐ Fetching highest rated — *${target}* (${seasonLabel})...`);
      const result = await getTopPlayers(target,"rating",seasonArg);
      if (!result?.players?.length) return reply(`❌ Rating data unavailable for *${target}*.\n\nTry: *${pfx}toprating la liga*`);
      await reply([
        `${LEAGUES[target].flag} *${target} — Highest Rated ${seasonLabel}*`,
        `_Source: ${result.source}_`,``,
        fmtPlayers(result.players,"⭐"),``,
        `_Ratings: 1-10 scale (Sofascore)_`,
      ].join("\n"));
      return;
    }

    // ── TOP STATS ─────────────────────────────────────────────────────────────
    if (command === "topstats") {
      if (!league) {
        await reply(`📈 Fetching top stats (${seasonLabel})...`);
        const [gr,ar] = await Promise.allSettled([
          Promise.allSettled(TOP5.slice(0,3).map(l=>getTopPlayers(l,"goals",seasonArg))),
          Promise.allSettled(TOP5.slice(0,3).map(l=>getTopPlayers(l,"assists",seasonArg))),
        ]);
        const goals   = gr.status==="fulfilled" ? gr.value : [];
        const assists = ar.status==="fulfilled" ? ar.value : [];
        const lines = [`📈 *Top Stats — ${seasonLabel}*\n`];
        let found = 0;
        for (let i=0;i<3;i++) {
          const g = goals[i]?.status==="fulfilled" ? goals[i].value : null;
          const a = assists[i]?.status==="fulfilled" ? assists[i].value : null;
          if (!g?.players?.length && !a?.players?.length) continue;
          found++;
          lines.push(`${LEAGUES[TOP5[i]].flag} *${TOP5[i]}*`);
          if (g?.players?.length) { lines.push(`⚽ Top Scorers`); lines.push(fmtPlayers(g.players.slice(0,3),"⚽")); }
          if (a?.players?.length) { lines.push(`🎯 Top Assists`); lines.push(fmtPlayers(a.players.slice(0,3),"🎯")); }
          lines.push("");
        }
        if (!found) return reply(`❌ Data unavailable. Try: *${pfx}topstats epl*`);
        await reply(lines.join("\n")); return;
      }
      await reply(`📈 Fetching top stats — *${league}* (${seasonLabel})...`);
      const [gr,ar] = await Promise.allSettled([getTopPlayers(league,"goals",seasonArg),getTopPlayers(league,"assists",seasonArg)]);
      const goals = gr.status==="fulfilled"?gr.value:null;
      const assts = ar.status==="fulfilled"?ar.value:null;
      if (!goals?.players?.length && !assts?.players?.length) return reply(`❌ Stats unavailable for *${league}*. Try again shortly.`);
      const lines = [`${LEAGUES[league].flag} *${league} — Top Stats ${seasonLabel}*\n`];
      if (goals?.players?.length) { lines.push(`⚽ *Top Scorers*`); lines.push(fmtPlayers(goals.players.slice(0,7),"⚽")); lines.push(""); }
      if (assts?.players?.length) { lines.push(`🎯 *Top Assists*`); lines.push(fmtPlayers(assts.players.slice(0,7),"🎯")); lines.push(""); }
      await reply(lines.join("\n"));
      return;
    }

    // ── SEASON HISTORY ────────────────────────────────────────────────────────
    if (["seasonscorer","seasonassist","seasonhistory","seasonstat"].includes(command)) {
      const type = command.includes("assist") ? "assists" : "goals";
      const emoji = type==="assists" ? "🎯" : "⚽";
      const label = type==="assists" ? "Top Assists" : "Top Scorers";
      const target = league || "Premier League";

      if (!league) return reply(`Usage: *${pfx}${command} <league>*\nExample: ${pfx}${command} epl\n\nShows season-by-season ${type} leaders.`);

      await reply(`📅 Fetching season-by-season ${type} history for *${target}*...`);
      const history = await getSeasonHistory(target, type);
      if (!history?.length) return reply(`❌ Season history unavailable for *${target}* right now.`);

      const l = LEAGUES[target];
      const lines = [`${l.flag} *${target} — ${label} History*\n`];
      for (const h of history) {
        lines.push(`📅 *${h.season}*`);
        lines.push(`  ${emoji} *${h.name}* — ${h.value} ${type}`);
        lines.push(`  🏟 ${h.team}\n`);
      }
      lines.push(`_Data: Sofascore_`);
      await reply(lines.join("\n"));
      return;
    }

    // ── PLAYER STATS ──────────────────────────────────────────────────────────
    if (["player","playerstats"].includes(command)) {
      if (!fullArg) return reply([
        `🔍 *Player Stats*`,``,
        `Usage: *${pfx}player <player name>*`,``,
        `Examples:`,
        `  ${pfx}player Erling Haaland`,
        `  ${pfx}player Mohamed Salah`,
        `  ${pfx}player Kylian Mbappe`,
        `  ${pfx}player Bukayo Saka`,
        `  ${pfx}player Vinicius Jr`,
      ].join("\n"));

      // Strip any year suffix from player name e.g. "Salah 2025" -> "Salah"
      const playerName = fullArg.replace(/\b20\d{2}\b/g, "").trim();
      await reply(`🔍 Searching player *${playerName}*...`);
      try {
        const result = await getPlayerStats(playerName);
        if (!result) return reply(`❌ Player *"${playerName}"* not found.\n\nCheck spelling and try again.\nExample: *${pfx}player Haaland*`);

        const { player, currentStats, careerStats } = result;
        const lines = [
          `🏟 *${player.name}*`,
          `━━━━━━━━━━━━━━━━━━━━`,
          `🔵 Club: *${player.team || "Unknown"}*`,
          `📍 Position: *${player.pos || "?"}*`,
          player.nat ? `🌍 Nationality: *${player.nat}*` : "",
          ``,
        ].filter(Boolean);

        if (currentStats) {
          lines.push(`📊 *${currentStats.season} Stats*`);
          lines.push(`🏆 League: ${currentStats.league}`);
          if (currentStats.apps != null)          lines.push(`👟 Appearances: *${currentStats.apps}*`);
          if (currentStats.goals != null)         lines.push(`⚽ Goals: *${currentStats.goals}*`);
          if (currentStats.assists != null)       lines.push(`🎯 Assists: *${currentStats.assists}*`);
          if (currentStats.rating)                lines.push(`⭐ Rating: *${currentStats.rating}*`);
          if (currentStats.minutesPlayed)         lines.push(`⏱ Minutes: *${currentStats.minutesPlayed}'*`);
          if (currentStats.shots)                 lines.push(`🎯 Shots: *${currentStats.shots}*`);
          if (currentStats.shotsOnTarget)         lines.push(`🎯 On Target: *${currentStats.shotsOnTarget}*`);
          if (currentStats.keyPasses)             lines.push(`🔑 Key Passes: *${currentStats.keyPasses}*`);
          if (currentStats.tackles)               lines.push(`💪 Tackles: *${currentStats.tackles}*`);
          if (currentStats.dribbles)              lines.push(`🏃 Dribbles: *${currentStats.dribbles}*`);
          if (currentStats.passingAcc)            lines.push(`📤 Pass Acc: *${currentStats.passingAcc}*`);
          if (currentStats.yellowCards)           lines.push(`🟡 Yellow: *${currentStats.yellowCards}*`);
          if (currentStats.redCards)              lines.push(`🔴 Red: *${currentStats.redCards}*`);
          lines.push("");
        }

        if (careerStats) {
          lines.push(`📈 *Career Overview*`);
          if (careerStats.totalApps)    lines.push(`👟 Total Apps: *${careerStats.totalApps}*`);
          if (careerStats.totalGoals)   lines.push(`⚽ Career Goals: *${careerStats.totalGoals}*`);
          if (careerStats.totalAssists) lines.push(`🎯 Career Assists: *${careerStats.totalAssists}*`);
          if (careerStats.leagues)      lines.push(`🏆 Clubs/Leagues: *${careerStats.leagues}*`);
          lines.push("");
        }

        if (!currentStats && !careerStats) {
          lines.push(`_Player found but detailed stats unavailable._`);
          lines.push(`_Try searching a top-5 league player._`);
        }
        lines.push(`_Data: Sofascore / ESPN_`);
        await reply(lines.join("\n"));
      } catch (e) {
        return reply(`❌ Error finding player. Try: *${pfx}player Mohamed Salah*`);
      }
      return;
    }

    // ── LIVE STREAMS ──────────────────────────────────────────────────────────
    if (["livestream","streams"].includes(command)) {
      const grouped = getStreams(league);
      const lines = [
        `📺 *Football Live Streams*`,
        league ? `🏆 *${league}*` : `🌍 All Leagues`,``,
        `⚠️ _Ad-blocker recommended (uBlock Origin). VPN helps._`,``,
      ];
      for (const [cat,links] of Object.entries(grouped)) {
        if (!links.length) continue;
        lines.push(`*${cat}*`);
        for (const s of links) { lines.push(`  • *${s.name}*  ${s.signal}`); lines.push(`    ${s.url}`); }
        lines.push("");
      }
      lines.push(`💡 *Best for Nigeria/Africa:*\n  → StreamEast, FootyBite, Hesgoal\n  → Reddit/Telegram on match days`);
      lines.push(`\n_📶📶📶 Strong | 📶📶 Medium | 📶 Weak_`);
      await reply(lines.join("\n")); return;
    }
  }
};
