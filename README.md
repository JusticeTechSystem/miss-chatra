<div align="center">

<img src="thumbnail/image.jpg" alt="Miss Chatra" width="200" style="border-radius: 50%"/>

# 🤖 Miss Chatra — WhatsApp Bot

[![Version](https://img.shields.io/badge/version-v1.2.8%20JT-brightgreen?style=for-the-badge&logo=whatsapp&logoColor=white)](https://github.com)
[![Node](https://img.shields.io/badge/node-22%2B-blue?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![Baileys](https://img.shields.io/badge/Baileys-7.0.0--rc13-orange?style=for-the-badge)](https://github.com/WhiskeySockets/Baileys)
[![License](https://img.shields.io/badge/license-MIT-red?style=for-the-badge)](LICENSE)
[![JusticeTech](https://img.shields.io/badge/by-JusticeTech-purple?style=for-the-badge)](https://whatsapp.com/channel/0029VaoLagu3hRFKWlqk9W2T)

> **The most powerful WhatsApp bot — built for group owners, communities, and businesses.**
> 500+ commands · 54 core plugins · 1,392 marketplace plugins · AI-powered · Zero configuration

---

[📥 Install](#-quick-start) • [📚 Features](#-features) • [🛒 Plugins](#-marketplace) • [🔄 Updates](#-auto-update) • [📞 Support](#-support)

</div>

---

## ✨ What Makes Miss Chatra Special

```
🏆  500+ built-in commands out of the box
🛒  1,392 installable marketplace plugins
🤖  Claude AI chatbot with deep think mode
🖥️  Web dashboard — manage your bot from the browser
⚡  Hot-install plugins — no restart needed
🔄  Automatic updates, plus /update on demand
📡  WhatsApp channel auto-follow
🌍  Multi-language support
```

---

## 🚀 Quick Start

### Requirements
- **Node.js 22+**
- A WhatsApp number (a dedicated bot number is recommended)
- Internet access on the server

### Install (Pterodactyl / any Node.js host)

1. Upload the files from this repository (`index.js`, `package.json`) to your server's main folder.
2. Set the startup file to **`index.js`**.
3. Start the server.

That's all — there is nothing to configure. The first start takes a few minutes while
Miss Chatra downloads itself and installs its dependencies; after that it starts in seconds.

### Install (VPS)

```bash
git clone https://github.com/JusticeTech/miss-chatra-bot.git
cd miss-chatra-bot
npm start
# OR with PM2 (recommended for auto-restart):
pm2 start index.js --name "miss-chatra"
```

### First Run
1. The console shows a **setup link** — open it in your browser
2. Enter your email, choose a password, then enter your WhatsApp number
3. Open WhatsApp → **Linked Devices** → **Link with phone number** and enter the pairing code
4. Check your inbox and **verify your email**
5. Choose how the connection should be handled when the bot messages you — then you're live! 🎉

---

## 📋 Features

<details>
<summary><b>🛡️ Group Moderation</b> — Full control over your WhatsApp groups</summary>

| Command | Description |
|---------|-------------|
| `/ban @user` | Permanently ban + revoke invite |
| `/kick @user` | Remove from group |
| `/mute @user 30m` | Auto-delete their messages |
| `/warn @user` | Issue warning (auto-kick at limit) |
| `/antilink delete/warn/kick` | Auto-handle invite links |
| `/antispam on` | Auto-mute spammers |
| `/promote @user` | Make group admin |
| `/demote @user` | Remove admin status |
| `/open` / `/close` | Open/close group messaging |
| `/tagall <msg>` | Tag all members |
| `/ghosttag <msg>` | Tag silently |
| `/bulkkick` | Remove multiple members |
| `/bulkmute` | Mute multiple members |

</details>

<details>
<summary><b>🤖 AI & Chatbot</b> — Powered by Claude AI</summary>

| Feature | Description |
|---------|-------------|
| `/chatbot on` | Enable AI chatbot |
| `/claude <question>` | Ask Claude AI directly |
| `/chatra <question>` | Miss Chatra's AI persona |
| `/addcustom` | Train custom responses |
| `/chatbotmemory` | Per-user memory |
| `/apistatus` | Check AI API status |
| `/bugdetect` | Auto-detect bug reports |
| Deep Think Mode | Complex reasoning for hard questions |
| TTS Voice Replies | AI responds in voice notes |

</details>

<details>
<summary><b>⚽ Sports & Live Scores</b> — Real-time football data</summary>

| Command | Description |
|---------|-------------|
| `/livescore` | Live scores across all top leagues |
| `/livescore ucl` | UEFA Champions League live |
| `/livescore epl` | Premier League scores |
| `/table epl` | League standings |
| `/topscorer epl` | Top goal scorers |
| `/topassist epl` | Top assisters |
| `/fixture epl` | Upcoming fixtures |
| `/player <name>` | Player stats & profile |

**Full match details:** Goal scorers, yellow/red cards, substitutions, penalties

</details>

<details>
<summary><b>🎮 Games Hub</b> — Engage your group members</summary>

- Truth or Dare
- Riddles & Trivia  
- Word games (Last Letter, Alphabet Game)
- Math challenges (EmojiMath)
- Geography Race
- 20 Questions
- Blind Auction
- Crypto Price Guess
- Dare Wheel (Spin & Dare)
- Duel (1v1 challenges)

</details>

<details>
<summary><b>📱 WhatsApp Automation</b></summary>

| Feature | Description |
|---------|-------------|
| `/ghost on` | Full invisible mode (no blue ticks, no last seen) |
| `/autoread on` | Auto-read all messages |
| `/autotype on` | Show typing indicator |
| `/antiforward` | Block forwarded messages |
| `/antinsfw on` | Auto-delete inappropriate content |
| `/greetings on` | Welcome new members |
| `/goodbye on` | Goodbye messages |
| `/gate on` | Gate verification (join questions) |
| `/schedule <time> <msg>` | Schedule messages |
| `/broadcast <msg>` | Broadcast to all contacts |

</details>

<details>
<summary><b>📊 Analytics & CRM</b> — Business features</summary>

- Contact management with tags
- Lead scoring system
- Campaign manager with drip sequences
- Revenue tracking
- Engagement heatmaps
- Growth charts
- XP leveling + leaderboard
- Member activity reports
- Lost leads recovery

</details>

<details>
<summary><b>☁️ Google Integration</b></summary>

- **Google Contacts** sync — auto-save WhatsApp contacts
- **Google Sheets** sync — export contact data
- Multi-account support
- OAuth2 authentication
- Automatic token refresh

</details>

<details>
<summary><b>🔧 Bot Management</b></summary>

| Command | Description |
|---------|-------------|
| `/restart` | Restart the bot |
| `/update` | Update to the latest version & restart |
| `/checkupdate` | Check if update is available |
| `/setprefix !` | Change command prefix |
| `/setbotname` | Change bot display name |
| `/mode private/public/group` | Change bot access mode |
| `/ping` | Check bot latency |
| `/runtime` | Bot uptime stats |
| `/sessionbackup` | Backup WhatsApp session |
| `/sessionrestore` | Restore session |
| `/menustyle 1-20` | Change menu theme |
| `/groupid` | Get the current group's JID |
| `/channelid` | Get the current channel's JID (run inside the channel) |
| `/communityid` | Get the community (parent group) ID this group is linked to |
| `/device` | See which linked-device slot sent a message |

</details>

---

## 📝 What's New — v1.2.8_JT

- **NEW:** Web dashboard — set up and manage your bot from the browser.
- **NEW:** Email verification during setup, and the bot only goes live once you've confirmed your connection choice on WhatsApp.
- **NEW:** *Regenerate code* and *Back* buttons on the pairing screen — no need to restart setup if a code expires or you mistype your number.
- **NEW:** Sub-bots — deploy an extra bot with a single command.
- **NEW:** Faster menu — built once and cached, so `/menu` opens instantly even with hundreds of plugins.
- **NEW:** `/sleep` and `/wake`, `/linkchannel`, `/linkgroup` and auto-forward to a channel or group.
- **NEW:** Automatic updates every few hours.
- **FIX:** Chatbot "No response" issue, YouTube search crashes on incomplete results, empty-message sending.
- **REMOVED:** Post Status and Auto-View Status.

---

## 🛒 Marketplace

Miss Chatra has **1,392 installable plugins** across 15 categories:

```
🔧 Tools (361)           🛡️ Moderation (304)      👑 Admin (205)
🏘️ Community (202)       💰 Finance (57)           🏥 Health (48)
🌟 Lifestyle (38)        🎮 Games (32)             🇳🇬 Nigerian (26)
📚 Education (25)        🎭 Entertainment (24)      👥 Social (25)
✝️ Spiritual (20)        💼 Business (18)           📋 Productivity (7)
```

### How to Install Plugins

1. **Join** both JusticeTech communities:
   - [Tools & Updates](https://chat.whatsapp.com/GL6GUJL5QNJEuBy9fWIssu?mode=gi_t)
   - [Support Group](https://chat.whatsapp.com/Gyt75qFHoul3wp53IKi25v?mode=gi_t)

2. **Request** in the Support group:
   ```
   /plugin request <plugin_id> <your_bot_number> <reason>
   ```

3. **Install** after approval:
   ```
   /plugin install <plugin_id>
   ```

> ⚡ Plugins install instantly — no restart needed!
> 🔒 Install/enable/remove are owner-only. Installed plugin code runs with
> the same access as any built-in feature — only install plugins you trust.

---

## 🔄 Auto-Update

Miss Chatra keeps itself up to date. It checks for new versions every few hours and restarts
on the new version automatically. You can also update on demand from WhatsApp:

```bash
/checkupdate     # see whether an update is available
/update          # update now and restart
```

Your settings, WhatsApp session, database and installed plugins are never touched by updates.

---

## 📁 What's in this repository

```
miss-chatra-bot/
├── index.js         # Starts Miss Chatra and keeps it up to date
├── package.json
├── thumbnail/       # Bot profile image
├── LICENSE
└── README.md
```

Everything else is downloaded automatically on first start and refreshed on every update.

---

## 🤝 Support

<div align="center">

| Resource | Link |
|----------|------|
| 📡 **JusticeTech Channel** | [Follow for updates](https://whatsapp.com/channel/0029VaoLagu3hRFKWlqk9W2T) |
| 🔧 **Tools & Updates** | [Join community](https://chat.whatsapp.com/GL6GUJL5QNJEuBy9fWIssu?mode=gi_t) |
| 💬 **Support Group** | [Get help & request plugins](https://chat.whatsapp.com/Gyt75qFHoul3wp53IKi25v?mode=gi_t) |

</div>

---

## 📜 License

MIT License — © 2025–2026 JusticeTech, Nigeria 🇳🇬

---

<div align="center">

**Made with ❤️ by JusticeTech**

⭐ Star this repo if Miss Chatra helps your community!

</div>
