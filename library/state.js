// library/state.js — Miss Chatra WA State Management
"use strict";

const fs   = require("fs");
const path = require("path");

const DB_DIR    = path.join(__dirname, "..", "database");
const STATE_FILE = path.join(DB_DIR, "bot_state.json");

if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });

const config = require("../settings/config");

// ── Auto-delete delay constants (mirror TG) ────────────────────────────────────
const MENU_AUTODELETE_BOT_DELAY      = 120;   // seconds
const MENU_AUTODELETE_USER_DELAY     = 15;
const GAME_AUTODELETE_BOT_DELAY      = 60;
const GAME_AUTODELETE_USER_DELAY     = 30;
const WELCOME_AUTODELETE_DELAY       = 60;
const GOODBYE_AUTODELETE_DELAY       = 60;

function defaultState() {
  return {
    // Chatbot
    chatbot_enabled: true,
    chatbot_conversations: {},
    chatbot_training: {
      name: config.botName,
      developer: config.developerName,
      developer_username: `@${config.developerUsername}`,
      company: config.companyName,
      company_location: config.companyLocation,
      company_focus: config.companyFocus,
      custom_training: {},
      special_instructions: {
        personality: "Respond like a mature adult having a natural conversation. No formal greetings. 1-3 sentences max.",
        language: "Use natural, everyday language. Sound like a real person.",
        developer_recognition: `Always recognize the developer ${config.developerName} and company ${config.companyName} when asked.`,
        company_location: `Company location: ${config.companyLocation}.`
      }
    },
    user_chatbot_training: {},

    // ── Auto-delete (master) ─────────────────────────────────────────────────
    auto_delete_enabled:      true,
    auto_delete_delay:        config.autoDeleteDelay || 180,
    auto_delete_bot_messages: true,
    auto_delete_user_messages: false,
    auto_delete_groups:       true,
    auto_delete_private:      true,
    auto_delete_channels:     false,
    auto_delete_supergroups:  true,

    // ── Menu auto-delete ─────────────────────────────────────────────────────
    menu_autodelete_enabled:    true,
    menu_autodelete_bot_delay:  MENU_AUTODELETE_BOT_DELAY,
    menu_autodelete_user_delay: MENU_AUTODELETE_USER_DELAY,

    // ── Games auto-delete ────────────────────────────────────────────────────
    games_autodelete_enabled:       true,
    game_autodelete_bot_delay:      GAME_AUTODELETE_BOT_DELAY,
    game_autodelete_user_delay:     GAME_AUTODELETE_USER_DELAY,
    wordchain_autodelete_enabled:   true,
    trivia_autodelete_enabled:      true,
    numguess_autodelete_enabled:    true,
    scrabble_autodelete_enabled:    true,
    blackjack_autodelete_enabled:   true,

    // ── Welcome / Goodbye delays ─────────────────────────────────────────────
    welcome_autodelete_delay: WELCOME_AUTODELETE_DELAY,
    goodbye_autodelete_delay: GOODBYE_AUTODELETE_DELAY,

    // ── Reports auto-delete ──────────────────────────────────────────────────
    reports_autodelete_enabled:   true,
    reports_autodelete_bot_delay: 10,
    reports_autodelete_user_delay: 5,

    // ── GiveawayX post auto-delete ───────────────────────────────────────────
    gx_autodelete_post_enabled: true,
    gx_autodelete_post_delay:   240,

    // ── Virus verdict auto-delete ────────────────────────────────────────────
    vd_autodelete_enabled: true,
    vd_autodelete_delay:   240,

    // ── Appeal announce ──────────────────────────────────────────────────────
    appeal_announce_autodelete_delay: 240,

    // ── Other ────────────────────────────────────────────────────────────────
    last_triggered: {},
    update_log_text: "",
    report_threshold: 20,
    report_max_per_user: 1,
    report_counts: {},
    report_sessions: {},
    appeal_sessions: {},
    review_sessions: {},
    game_settings: {},
    active_games: {},
    inactive_threshold: 3600,
    user_message_counts: {},
    command_users: {},
    last_welcome: {},
    last_goodbye: {},
  };
}

let state;

function loadState() {
  if (fs.existsSync(STATE_FILE)) {
    try {
      const raw = JSON.parse(fs.readFileSync(STATE_FILE, "utf8"));
      state = Object.assign(defaultState(), raw);
    } catch {
      state = defaultState();
    }
  } else {
    state = defaultState();
  }
  return state;
}

function saveState() {
  try {
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
  } catch (e) {
    console.error("[STATE] Save error:", e.message);
  }
}

function getState() {
  if (!state) loadState();
  return state;
}

// Auto-save every 30 seconds
setInterval(saveState, 30000);

loadState();

module.exports = {
  getState, saveState, loadState,
  MENU_AUTODELETE_BOT_DELAY, MENU_AUTODELETE_USER_DELAY,
  GAME_AUTODELETE_BOT_DELAY, GAME_AUTODELETE_USER_DELAY,
  WELCOME_AUTODELETE_DELAY, GOODBYE_AUTODELETE_DELAY,
};
