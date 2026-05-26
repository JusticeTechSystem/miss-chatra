<div align="center">

<img src="thumbnail/image.jpg" alt="Miss Chatra" width="200" style="border-radius: 50%"/>

# 🤖 Miss Chatra — WhatsApp Bot

[![Version](https://img.shields.io/badge/version-v1.0.1%20JT-brightgreen?style=for-the-badge&logo=whatsapp&logoColor=white)](https://github.com)
[![Node](https://img.shields.io/badge/node-18%2B-blue?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![Baileys](https://img.shields.io/badge/Baileys-7.0.0-orange?style=for-the-badge)](https://github.com/WhiskeySockets/Baileys)
[![License](https://img.shields.io/badge/license-MIT-red?style=for-the-badge)](LICENSE)
[![JusticeTech](https://img.shields.io/badge/by-JusticeTech-purple?style=for-the-badge)](https://whatsapp.com/channel/0029VaoLagu3hRFKWlqk9W2T)

> **The most powerful WhatsApp bot — built for group owners, communities, and businesses.**
> 500+ commands · 1,392 marketplace plugins · AI-powered · Zero configuration

---

[📥 Install](#-quick-start) • [📚 Features](#-features) • [🛒 Plugins](#-marketplace) • [🛡️ JusticeTech](#-justicetch-system) • [📞 Support](#-support)

</div>

---

## ✨ What Makes Miss Chatra Special

```
🏆  500+ built-in commands out of the box
🛒  1,392 installable marketplace plugins
🤖  Claude AI chatbot with deep think mode
👑  JusticeTech developer control system
⚡  Hot-install plugins — no restart needed
🔄  GitHub auto-update with /update command
📡  WhatsApp channel auto-follow
🌍  Multi-language support
```

---

## 🚀 Quick Start

### Requirements
- Node.js 18+
- A WhatsApp number (dedicated bot number recommended)
- PM2 (for auto-restart): `npm install -g pm2`

### Install

```bash
# Clone the repository
git clone https://github.com/JusticeTech/miss-chatra-bot.git
cd miss-chatra-bot

# Install dependencies
npm install

# Configure your number
nano settings/config.js
# Set ownerNumber to your WhatsApp number (digits only, with country code)

# Start the bot
npm start
# OR with PM2 (recommended for auto-restart):
pm2 start index.js --name "miss-chatra"
```

### First Run
1. A **pairing code** will appear in the console
2. Open WhatsApp → **Linked Devices** → **Link with phone number**
3. Enter the pairing code
4. Bot sends you a welcome message — you're live! 🎉

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
| `/update` | Pull latest from GitHub & restart |
| `/checkupdate` | Check if update is available |
| `/setprefix !` | Change command prefix |
| `/setbotname` | Change bot display name |
| `/mode private/public/group` | Change bot access mode |
| `/ping` | Check bot latency |
| `/runtime` | Bot uptime stats |
| `/sessionbackup` | Backup WhatsApp session |
| `/sessionrestore` | Restore session |
| `/menustyle 1-20` | Change menu theme |

</details>

---

## 🛒 Marketplace

Miss Chatra has **1,392 installable plugins** across 15 categories:

```
🔧 Tools (360)           🛡️ Moderation (304)      👑 Admin (205)
🏘️ Community (202)       💰 Finance (40)           🏥 Health (33)
🌟 Lifestyle (27)        🎮 Games (20)             🇳🇬 Nigerian (17)
📚 Education (13)        🎭 Entertainment (13)      ✝️ Spiritual (13)
👥 Social (12)           💼 Business (9)            📋 Productivity (6)
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

---

## 🛡️ JusticeTech System

Miss Chatra includes the **JusticeTech Developer Control System** — enterprise-grade remote management for bot deployments.

### Developer Commands (Dev-only, hidden from users)

```bash
# Bot Status Control
/devsuspend <number> [reason]     # Suspend a bot
/devunsuspend <number>            # Restore suspended bot  
/devfreeze <number> [reason]      # Freeze all commands
/devunfreeze <number>             # Unfreeze bot
/devban <number> [reason]         # Permanent ban
/devunban <number>                # Lift ban

# Global Control (ALL bots at once)
/devglobalfreeze [reason]         # Freeze EVERY registered bot
/devglobalunfreeze                # Unfreeze ALL bots
/devglobalstatus                  # View all registered bots

# Plugin Management  
/devapprove <number> <plugin>     # Approve plugin for a bot
/devapproveall <number>           # Grant all-plugin access
/devrevoke <number> <plugin>      # Revoke plugin access

# Broadcast
/devbroadcastall <message>        # DM all registered bot owners

# Setup
/devsetsupportjid <jid>          # Set JusticeTech Support group
/devsetchannelid <id>@newsletter  # Set channel JID
/devgetjid                        # Get current chat JID
```

### Auto-Registration
Every bot **auto-registers** with the dev on first deployment. No manual setup. With 1000 users — they all auto-register and appear in `/devglobalstatus`.

---

## 🔄 Auto-Update

```bash
# Check if update is available
/checkupdate

# Pull latest from GitHub and restart automatically
/update
```

The update command:
1. Stashes local config changes
2. Pulls latest from `origin/main`
3. Runs `npm install`
4. Restores your config
5. Restarts automatically

> **Requires:** Bot deployed via `git clone` from GitHub

---

## 📁 Project Structure

```
miss-chatra-bot/
├── index.js              # Entry point & connection handler
├── message.js            # Message router & command dispatcher  
├── settings/
│   └── config.js         # Bot configuration
├── plugins/              # 35+ core plugins
│   ├── system.js         # Restart, update, prefix
│   ├── moderation.js     # Ban, kick, mute, warn
│   ├── sports.js         # Live scores & stats
│   ├── games.js          # Games hub
│   ├── botupdate.js      # GitHub auto-update
│   └── devcontrol.js     # JusticeTech dev system
├── marketplace/
│   ├── registry.json     # 1,392 plugin catalog
│   └── available/        # Plugin source files
├── library/
│   ├── justicetechsystem.js  # JTS core
│   ├── serialize.js      # Message serializer
│   └── db.js             # Database layer
├── database/             # Runtime data (JSON)
└── thumbnail/            # Bot profile image
```

---

## ⚙️ Configuration

Edit `settings/config.js`:

```javascript
module.exports = {
  ownerNumber: "2349012345678",  // Your WhatsApp number (no +)
  botName: "Miss Chatra",
  prefix: "/",                   // Command prefix
  
  // AI Settings
  ANTHROPIC_API_KEY: "sk-...",   // Claude AI (optional)
  
  // Google Integration
  GOOGLE_CLIENT_ID: "...",       // Google OAuth (optional)
  GOOGLE_CLIENT_SECRET: "...",
};
```

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

MIT License — © 2025 JusticeTech, Nigeria 🇳🇬

---

<div align="center">

**Made with ❤️ by JusticeTech**

⭐ Star this repo if Miss Chatra helps your community!

</div>
