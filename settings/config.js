// settings/config.js — Miss Chatra Configuration
const config = {

  // ── Owner / Pairing ────────────────────────────────────────────────────────
  // ⚠️  IMPORTANT: Set your WhatsApp number here BEFORE starting the bot.
  //    Digits only — include country code — NO + sign.
  //    Nigeria +234 example:  "2349012345678"
  //    UK      +44  example:  "447911123456"
  //    USA     +1   example:  "12025551234"
  //
  //    On first run, the bot will print a PAIRING CODE in the console.
  //    Enter it in WhatsApp → Linked Devices → Link with phone number.
  ownerNumber: "2349032578690",      // ← Your own number (bot owner)
  webPort: 3000,                     // ← Port for the pairing web UI
  ownerNumbers: ["2349032578690"],   // Additional owner numbers if needed
  ownerName: "JusticeTech",

  // ── Report System ──────────────────────────────────────────────────────────
  // How many reports on a user before auto-action (kick from group)
  reportThreshold: 3,   // auto-kick after this many reports (change as needed)
  // Max number of reports one user can submit against the same person
  reportMaxPerUser: 3,

  // ── Bot Identity ───────────────────────────────────────────────────────────
  botName: "Miss Chatra",
  setPair: "MissChatra",
  session: "sessions",

  // ── Developer / Company ────────────────────────────────────────────────────
  developerNumber: "2349032578690",
  developerUsername: "justicetechie",
  developerName: "JusticeTech",
  companyName: "JusticeTech System",
  companyLocation: "JusticeTech City, Nigeria",
  companyFocus: "Web Development, App Development, Bot Development and Automation",
  developerLink: "https://wa.me/2349032578690",
  channelLink: "https://whatsapp.com/channel/justicetechsystem",
  supportLink: "https://wa.me/2349032578690",

  // ── AI / API ───────────────────────────────────────────────────────────────
  aiBaseUrl: "https://apis.prexzyvilla.site",
  ttsEndpoint: "https://apis.prexzyvilla.site/tools/onyx",
  prexzyBase: "https://apis.prexzyvilla.site",

  // ── Command Prefix ─────────────────────────────────────────────────────────
  prefix: "/",

  // ── Status ─────────────────────────────────────────────────────────────────
  status: {
    public: true,
    terminal: true,
    reactsw: false
  },

  // ── Sticker meta ───────────────────────────────────────────────────────────
  sticker: {
    packname: "Miss Chatra",
    author: "JusticeTech"
  },

  settings: {
    title: "Miss Chatra",
    packname: "JusticeTech",
    description: "Your intelligent WhatsApp group manager",
    footer: "Miss Chatra by JusticeTech"
  },

  // ── Chatbot ────────────────────────────────────────────────────────────────
  conversationTimeout: 300,   // seconds before conversation times out
  maxContextLength: 50,

  // ── Auto-delete defaults ───────────────────────────────────────────────────
  autoDeleteDelay: 180,       // seconds

  // ── Messages ───────────────────────────────────────────────────────────────
  message: {
    owner: "🔒 This command is for the bot owner only.",
    admin: "🔒 This command is for group admins only.",
    group: "📢 This command only works in groups.",
    private: "📩 This command only works in private chat.",
    error: "❌ Something went wrong, please try again.",
    wait: "⏳ Please wait..."
  }
};

module.exports = config;
