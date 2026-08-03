# Miss Chatra WA — Full Technical Documentation
**Version:** v1.2.0_JT | **Framework:** Baileys 7.0.0-rc13 | **Runtime:** Node.js ≥22 | **Author:** JusticeTech, Nigeria

---

## Table of Contents
1. [Architecture Overview](#architecture)
2. [File Structure](#file-structure)
3. [Startup Flow](#startup-flow)
4. [Message Processing Pipeline](#message-pipeline)
5. [Plugin System](#plugin-system)
6. [Database Layer](#database)
7. [Anti-Delete & Anti-Edit](#anti-delete-anti-edit)
8. [Media Downloader](#media-downloader)
9. [Status Posting](#status-posting)
10. [Group Moderation](#group-moderation)
11. [AI Chatbot](#ai-chatbot)
12. [Economy System](#economy)
13. [Games](#games)
14. [Admin & Owner Commands](#admin-commands)
15. [Configuration](#configuration)
16. [Deployment (Pterodactyl)](#deployment)
17. [Global Variables Reference](#globals)
18. [Known Limitations](#limitations)

---

## 1. Architecture Overview {#architecture}

Miss Chatra WA is a multi-feature WhatsApp bot built on **@whiskeysockets/baileys 7.x**. It uses a single persistent WebSocket connection to WhatsApp's multi-device protocol.

```
index.js          ← Main entry point, socket setup, event handlers
message.js        ← Message routing, plugin dispatch, all incoming message logic
library/
  serialize.js    ← Deserializes raw Baileys messages into structured m objects
  db.js           ← SQLite (node:sqlite) + JSON storage helpers
  helpers.js      ← jidToNum, numToJid, normalizeJid, lid resolution
  chatbot.js      ← Claude AI chatbot integration
  justicetechsystem.js ← License, registry, config management
plugins/          ← Feature plugins (each exports { name, command[], run() })
settings/
  config.js       ← Bot configuration (ownerNumber, prefix, mode, etc.)
database/
  bot.db          ← SQLite database (groups, warns, economy, etc.)
  bot_settings.json ← Global key/value settings (antidelete_dm, chatbot_on, etc.)
```

**Key design principle:** All event handlers are registered inside `clientstart()` which is called once per connection. Plugins are loaded via `loadPlugins()` and cached globally.

---

## 2. File Structure {#file-structure}

| File/Dir | Purpose |
|---|---|
| `index.js` | Socket creation, event registration, anti-delete/edit handlers, REVOKE interception |
| `message.js` | Message deserializer, command router, flood guard, antilink, autodownloader |
| `library/serialize.js` | Converts raw WAMessage → structured `m` object with `.sender`, `.body`, `.quoted`, etc. |
| `library/db.js` | `gsGet/gsSet` (group settings), `gset/sset` (global settings), warn system, economy |
| `library/helpers.js` | JID utilities, **3-tier @lid → phone resolution** via `__senderNumCache` + `__lidMap` |
| `settings/config.js` | Owner number, prefix, bot mode (public/private), status settings |
| `plugins/moderation.js` | Anti-link, anti-delete, anti-edit, anti-flood, warn/kick, group lock/open |
| `plugins/downloader.js` | YouTube, Instagram, TikTok, Facebook, Twitter, Spotify download with carousel support |
| `plugins/poststory.js` | `/story` wizard, `/tostory` auto-forward, status@broadcast posting |
| `plugins/botupdate.js` | `/update` command — pulls latest release from GitHub, writes `version.json` |
| `plugins/docconvert.js` | `/cvt` document converter (PDF↔DOCX↔TXT↔HTML↔PNG using Node.js packages) |
| `plugins/chatbot.js` | `/chatbot on/off`, AI response via Claude API |
| `plugins/economy.js` | Coins, daily reward, transfer, leaderboard |
| `plugins/games.js` | Word Chain, Trivia, Blackjack |
| `plugins/grouppowertools.js` | Tag all, invite link, group info, group settings bulk operations |
| `database/bot.db` | SQLite: `group_settings`, `user_warns`, `economy`, `notes`, `scheduled_msgs` |
| `database/bot_settings.json` | JSON: global flags (antidelete_dm, chatbot_on, bot_mode, antideletestatus, etc.) |

---

## 3. Startup Flow {#startup-flow}

```
index.js boots
  ↓
autoInstallDeps()     ← Checks node_modules, runs npm install if packages missing
  ↓
session IIFE          ← Validates Baileys session files, purges corrupt ones (pbkdf2 guard)
  ↓
clientstart()         ← Creates Baileys socket, registers all ev.on() handlers
  ↓
store.bind(sock.ev)   ← Attaches message/contact/group event store (messages Map)
  ↓
connection.update → "open"
  ↓
  ├── Startup banner logged to console
  ├── global.__botSock = sock
  ├── global.__botStore = store
  ├── setTimeout(2s): Enable antidelete/antiedit defaults in DB + bot_settings.json
  ├── setTimeout(3s): Send startup card to owner's DM
  └── Schedulers started (story, autobio, background checker)
```

**Global state set at startup:**
- `global.__botSock` — the active Baileys socket
- `global.__botStore` — the message/contact store (Map-based)
- `global.__lidMap` — `@lid → { realJid, phone }` mapping (populated from contacts events)
- `global.__senderNumCache` — `jid/lid → { num, pushName }` (populated from every message)
- `global.__knownContacts` — Set of `@s.whatsapp.net` JIDs (populated from contacts.upsert)
- `global.__ownerNumber` — set by `__setLinkedBotNum()` from serialize.js

---

## 4. Message Processing Pipeline {#message-pipeline}

Every incoming message goes through this pipeline in `messages.upsert`:

```
raw WAMessage arrives
  ↓
1. Store raw message: store.messages.set(`${chatId}:${msgId}`, msg)
2. Enrich __senderNumCache from m.sender (decoded by sock.decodeJid)
   ↓ Cross-links @lid → real phone number from actual messages
3. Intercept protocolMessage.type=0 (REVOKE/delete) → handleAntiDelete()
   Intercept protocolMessage.type=14 (EDIT) → handleAntiEdit()
   Intercept raw.message.editedMessage (newer WA clients) → handleAntiEdit()
  ↓
4. smsg(sock, raw, store) → structured m object
   Sets: m.sender, m.body, m.mtype, m.quoted, m.isGroup, m.chat, etc.
  ↓
5. Logger (cxLog) — prints message to console with type/sender/speed
  ↓
6. message.js handler:
   a. Flood guard check (antiflood)
   b. Mute check
   c. Bot mode check (public/private/group-only)
   d. Antilink enforcement
   e. Auto-downloader (detects media URLs in body)
   f. Command routing → plugin.run()
```

**serialize.js m object fields:**
| Field | Description |
|---|---|
| `m.sender` | Decoded real JID (`number@s.whatsapp.net`) or @lid |
| `m.body` | Message text content |
| `m.mtype` | Message type: `conversation`, `imageMessage`, `documentMessage`, `editedMessage`, etc. |
| `m.quoted` | Quoted/replied message — **unwrapped content node** (e.g. the documentMessage object directly) |
| `m.quoted.mtype` | Type of quoted content (`documentMessage`, `imageMessage`, etc.) |
| `m.quoted.fakeObj` | Full reconstructed WAMessage for downloading quoted media |
| `m.quoted.download()` | Function to download quoted media buffer |
| `m.isGroup` | Boolean |
| `m.chat` | Chat JID (`@g.us` or `@s.whatsapp.net`) |
| `m.pushName` | Sender's display name |

---

## 5. Plugin System {#plugin-system}

Each plugin exports:
```js
module.exports = {
  name: "pluginname",
  command: ["cmd1", "cmd2"],        // array of command triggers (without prefix)
  devOnly: false,                   // optional: restrict to devs
  run({ sock, m, chatId, command, args, reply, prefix, isOwner, isDev, isAdmin, ... }) {
    // handler
  }
}
```

**Plugin loading** (`message.js → loadPlugins()`):
- Reads all `.js` files from `plugins/` directory
- Indexes by each command string: `pluginMap["cmd"] = plugin`
- Accessible via `global.reloadPlugins()` for hot-reload

**Command dispatch:**
```
body starts with prefix? → extract command+args → pluginMap[command]?.run()
```

**Context passed to `run()`:**
| Parameter | Type | Description |
|---|---|---|
| `sock` | BaileysSocket | Active WA socket |
| `m` | Object | Serialized message (see above) |
| `chatId` | string | Chat JID |
| `userId` | string | Sender JID |
| `command` | string | Command string (without prefix, lowercase) |
| `args` | string[] | Arguments split by space |
| `fullArgs` | string | Full argument string |
| `reply(text)` | function | Sends quoted reply |
| `prefix` | string | Bot command prefix |
| `isOwner` | boolean | True if sender is owner |
| `isDev` | boolean | True if sender is JusticeTech developer |
| `isAdmin` | boolean | True if sender is group admin |
| `isGroup` | boolean | True if message is in a group |
| `mentionedJid` | string[] | Mentioned JIDs in message |
| `quotedMsg` | object | Simplified quoted message |

---

## 6. Database Layer {#database}

### SQLite (`database/bot.db`)

**Tables:**
- `group_settings` — per-group feature toggles (antidelete, antilink_mode, flood settings, etc.)
- `user_warns` — `(chat_id, user_id, count)` — warn system
- `economy` — `(user_id, coins, last_daily)` — virtual economy
- `notes` — `(chat_id, name, content)` — saved group notes
- `scheduled_msgs` — `(id, chat_id, content, send_at)` — scheduled messages

**Key functions in `db.js`:**
```js
gsGet(chatId)              // Get group settings (creates row if new, enables antidelete+antiedit by default)
gsSet(chatId, { key: val }) // Update group settings
gset(key, fallback)         // Read from bot_settings.json
sset(key, value)            // Write to bot_settings.json
warnsAdd(chatId, userId, n) // Add n warns, returns new total
warnsReset(chatId, userId)  // Reset warns to 0
warnsGet(chatId, userId)    // Get current warn count
```

### JSON Store (`database/bot_settings.json`)

Global flags:
| Key | Default | Description |
|---|---|---|
| `antidelete_dm` | `true` | Forward deleted DMs to owner |
| `antiedit_dm` | `true` | Forward edited DMs to owner |
| `antideletestatus` | `true` | Forward deleted statuses to owner |
| `bot_mode` | `"public"` | `"public"` or `"private"` |
| `chatbot_on` | `false` | Global AI chatbot enable |
| `autoread` | `false` | Auto-read all messages |
| `alwaysonline` | `false` | Always show online presence |

---

## 7. Anti-Delete & Anti-Edit {#anti-delete-anti-edit}

### How it works

**Deletions** arrive via two paths in Baileys 7.x:
1. `messages.delete` event: `{ keys: [{ remoteJid, id, participant }] }`
2. `messages.upsert` with `protocolMessage.type = 0` (REVOKE)

**Edits** arrive via:
1. `messages.update` event: `update.update.message` contains new content
2. `messages.upsert` with `protocolMessage.type = 14` (MESSAGE_EDIT)
3. `messages.upsert` with `raw.message.editedMessage = { message, keys }` (newer WA)

### Delivery

Both anti-delete and anti-edit send content **privately to the owner's DM only**. The deleted/edited message stays deleted/shown as edited for everyone else in the group. This is the only possible behavior within WhatsApp's API — per-user message visibility doesn't exist.

### Default state

- **Groups:** `antidelete=1` and `antiedit=1` for all groups by default (set on startup and for new groups)
- **DMs:** `antidelete_dm=true` and `antiedit_dm=true` by default (set in `bot_settings.json` on first startup)

### Commands
```
/antidelete on|off      — Toggle for current group
/antidelete dm on|off   — Toggle for DMs (owner only)
/antiedit on|off        — Toggle for current group
/antiedit dm on|off     — Toggle for DMs (owner only)
/antideletestatus on|off — Toggle for status deletions
```

### Sender Resolution (@lid issue)

Baileys 7.x multi-device uses opaque `@lid` identifiers for some participants. Resolution order in `helpers.js → jidToNum()`:

1. **`__senderNumCache`** — populated from every `messages.upsert`: when `m.sender` is decoded to a real `@s.whatsapp.net` JID by `sock.decodeJid()`, it's stored and cross-linked with the `@lid`.
2. **`__lidMap`** — populated from `contacts.upsert/update` events: when WA sends contact data with both `id` (real JID) and `lid` fields.
3. **Fallback** — shows `pushName` only with a note that the number will resolve once they send a message.

---

## 8. Media Downloader {#media-downloader}

### Auto-detection

`message.js` scans every message body against `MEDIA_PATTERN` regex. If a supported URL is found, it automatically initiates download (if `dl_enabled=1` for the group, or owner/dev).

### Supported platforms

| Platform | Video | Audio | Carousel/Images |
|---|---|---|---|
| YouTube | ✅ | ✅ | ❌ |
| Instagram | ✅ | ❌ | ✅ (all posts) |
| TikTok | ✅ | ❌ | ✅ (slideshows) |
| Facebook | ✅ | ❌ | ✅ |
| Twitter/X | ✅ | ❌ | ❌ |
| Spotify | ❌ | ✅ | ❌ |
| SoundCloud | ❌ | ✅ | ❌ |

### Carousel flow

For Instagram, TikTok, and Facebook, the bot tries carousel APIs first (before falling back to single video):
1. `https://api.igdl.app/` — returns media items array
2. `snapsave.app/action.php` — scrapes media URLs
3. PREXZY carousel endpoint

If multiple items found → sends all as separate messages with `1/N` numbering.

### Commands
```
/dl <url>     — Download video from URL
/dlon         — Enable auto-downloader in group
/dloff        — Disable auto-downloader in group
```

---

## 9. Status Posting {#status-posting}

### `/story` Wizard

Interactive wizard for posting to WhatsApp Status:
1. `/story` — starts wizard, asks for destination (Status / Group / Channel / Both)
2. Bot prompts for content type (text, image, video)
3. Applies caption if provided
4. Posts to `status@broadcast` with `statusJidList`

### Key requirement: `statusJidList`

Baileys 7.x **requires** a `statusJidList` array when posting to `status@broadcast`. This list determines who can see the status. The bot builds this from:
- `__senderNumCache` (all senders from received messages — most current)
- `__knownContacts` (contacts from `contacts.upsert` events)
- `__botStore.contacts`
- `__lidMap` (real JIDs from lid mappings)

**Important:** The list is empty on fresh startup until the bot receives at least one message. The more messages received, the more contacts get added and the more people can see the status.

### `/tostory` Auto-forward

When someone sends a message in a group, reply with `/tostory` to forward it directly to your status. Supports text, images, videos, voice notes, and documents.

---

## 10. Group Moderation {#group-moderation}

### Anti-Link
```
/antilink off|delete|warn|kick
```
- `delete` — silently removes link messages
- `warn` — removes + warns (auto-kick at warn limit, default 3)
- `kick` — removes + immediately kicks sender

### Anti-Flood
```
/antiflood off|delete|warn|mute|kick [msg_count] [seconds]
/antiflood warn 5 8    ← warn after 5 msgs in 8 seconds
```

### Warn System
```
/warn @user      — Add 1 warn
/warns @user     — Check warn count
/resetwarn @user — Reset warns
/setwarn 5       — Set warn limit (default 3)
```

### Other moderation
```
/kick @user      — Remove from group
/ban @user       — Kick + add to ban list
/promote @user   — Make admin
/demote @user    — Remove admin
/mute            — Prevent non-admins from sending
/unmute          — Allow everyone to send
/lock            — Lock group (close)
/unlock          — Unlock group (open)
/tagall [msg]    — Mention all members
/adminlist       — Show group admins with real phone numbers
```

---

## 11. AI Chatbot {#ai-chatbot}

The bot integrates **Claude AI** (Anthropic) for conversational responses.

```
/chatbot on      — Enable chatbot in current group
/chatbot off     — Disable chatbot in current group
```

When enabled, any message that doesn't match a command triggers the AI. The chatbot maintains conversation history per chat (stored in `library/chatbot.js`).

Configuration: API key stored in `settings/config.js → claudeApiKey`.

---

## 12. Economy System {#economy}

Virtual coin economy with:
```
/daily           — Claim daily coins reward
/balance [@user] — Check coin balance
/transfer @user <amount> — Send coins
/leaderboard     — Top richest users
/buy <item>      — Purchase from shop
/shop            — View available items
```

Coins are stored in `database/bot.db → economy` table.

---

## 13. Games {#games}

### Word Chain
```
/wordchain start  — Start a word chain game
```
Players take turns sending words that start with the last letter of the previous word. Uses a real English dictionary for validation.

### Trivia
```
/trivia          — Start a trivia question
```
Timed multiple-choice questions. Points awarded for correct answers.

### Blackjack
```
/blackjack <bet> — Start a blackjack game with coin bet
```

---

## 14. Admin & Owner Commands {#admin-commands}

### Owner-only
```
/broadcast <msg>  — Send message to all groups
/restart          — Restart the bot
/shutdown         — Stop the bot
/update           — Pull latest update from GitHub
/setprefix <p>    — Change command prefix
/setmode public|private — Change bot mode
/setownername <n> — Set owner display name
/sudo @user       — Add sudo (elevated) user
/unsudo @user     — Remove sudo user
/ban @user        — Global ban
/unban @user      — Global unban
```

### Developer-only
```
/devpush <code>   — Execute code remotely (JusticeTech devs only)
/botinfo          — Detailed bot diagnostics
```

---

## 15. Configuration {#configuration}

Edit `settings/config.js`:

```js
module.exports = {
  ownerNumber: "2349032578690",    // Your WhatsApp number (with country code, no +)
  ownerNumbers: ["2349032578690"], // Additional owner numbers
  prefix: "/",                     // Command prefix
  botName: "Miss Chatra",
  status: {
    public: true,                  // true = anyone can use bot; false = owner/sudo only
    terminal: false,               // true = show QR in terminal; false = use pairing code
  },
  claudeApiKey: "sk-ant-...",      // Anthropic API key for AI chatbot
  conversationTimeout: 300,        // AI conversation timeout in seconds
};
```

---

## 16. Deployment (Pterodactyl) {#deployment}

The bot runs in a **Pterodactyl** container at `/home/container/`.

### Startup
```bash
npm install    # installs all dependencies including pdf-parse, pdf-lib, docx
node index.js  # starts the bot
```

The bot auto-installs missing npm packages on startup via the `autoInstallDeps()` IIFE in `index.js`.

### Session
Session files are stored in `database/connection/` (JSON format, Baileys 7.x multi-file auth state).

If the bot crashes with `pbkdf2 iterations=0`, session files are corrupted — they are automatically detected and purged on next startup.

### Environment
- Node.js ≥ 22 required
- Python 3 at `/usr/bin/python3` (for `/cvt` document converter)
- No system-level packages needed (no LibreOffice, no Pandoc — all pure JS)

### Updates
```
/update    — Bot pulls GitHub release, writes files, restarts
```
The update system fetches the GitHub release ZIP via the API, applies it, and **writes `version.json` from the confirmed release tag** (not from whatever is inside the ZIP).

---

## 17. Global Variables Reference {#globals}

| Variable | Type | Set by | Purpose |
|---|---|---|---|
| `global.__botSock` | BaileysSocket | `index.js` | Active WA socket |
| `global.__botStore` | Object | `index.js` | Message/contact store |
| `global.__lidMap` | Object | `index.js contacts events` | `@lid → { realJid, phone }` |
| `global.__senderNumCache` | Object | `index.js messages.upsert` | `jid/lid → { num, pushName }` |
| `global.__knownContacts` | Set | `index.js contacts.upsert` | Real `@s.whatsapp.net` JIDs |
| `global.__ownerNumber` | string | `library/serialize.js` | Owner's phone number |
| `global._storyWizard` | Object | `plugins/poststory.js` | Per-user story wizard state |
| `global.__DL_SESS` | Object | `plugins/downloader.js` | Pending download sessions |
| `global._flood` | Object | `message.js` | Flood tracking `chatId:userId → timestamps[]` |
| `global.__BOT_SENT_IDS` | Set | `index.js` | Bot's own message IDs (to skip anti-delete) |
| `global.reloadPlugins` | Function | `message.js` | Hot-reload all plugins |
| `global.__setLinkedBotNum` | Function | `message.js` | Set owner number from linked device |

---

## 18. Known Limitations {#limitations}

### @lid (Multi-device participant IDs)
Baileys 7.x returns `@lid` opaque identifiers for some group participants on multi-device WA accounts. The bot resolves these through a 3-tier cache system, but numbers only appear once that participant sends a message in a session. Fresh group members who haven't sent a message since last restart will show as `"name (number pending)"` in `/adminlist`.

### Status visibility
WhatsApp status (`status@broadcast`) requires a `statusJidList` with actual contact JIDs. On fresh startup this list may be small. As the bot receives messages from more contacts, the list grows automatically. There is no API to pre-populate this from the contact book.

### Per-user message visibility
WhatsApp has no API for sending messages visible to only one user in a group. Anti-delete/anti-edit forward content to the **owner's private DM** — this is the only technically correct implementation.

### PDF→DOCX quality
The `/cvt` converter uses `pypdf` (pure Python) for text extraction which may not preserve complex formatting (tables, columns, special fonts). For professional documents, use a dedicated converter.

### Rate limits
WhatsApp enforces sending rate limits. Sending to many contacts quickly (e.g. `/broadcast`, carousel download) may trigger temporary blocks. The bot includes delays between carousel items (500ms).

---

## 19. Portable Deployment & Multi-Command Chaining (v1.4.2)

### Portable per-server deployment
`settings/config.js` no longer hardcodes any one server's hostname/port for
the onboarding hub. `library/hub/detectServer.js` auto-detects the right
port and public URL at every boot from whatever host/panel the instance is
actually running on (checks `HUB_PORT`/`HUB_PUBLIC_URL` env vars first,
then common platform env vars — Pterodactyl `SERVER_PORT`/`SERVER_HOSTNAME`,
Railway, Render, Fly.io, Replit, Koyeb, or generic `PORT`). Deploying the
same zip to a different server now just works without hand-editing
`settings/config.js` — set `HUB_PUBLIC_URL` explicitly only if you want to
pin the onboarding link to a specific domain (e.g. once you put a real
domain in front of the hub).

### Smart multi-command chaining
Send more than one prefixed command in a single message and each one runs
in order, exactly as if sent separately:

```
/warn @user spam && /mute @user 10
```

or stacked one per line:

```
/kick @user
/tagall meeting starts in 5 minutes
```

Chaining only activates when **every** segment independently starts with
the bot's prefix — a normal command whose own text happens to contain
`&&` or line breaks (a broadcast, a note, an AI prompt, etc.) is left
untouched and handled as a single command like before. Capped at 5
chained commands per message.

### Day / Date / Time on the menu
The `/menu` header now shows `Day`, `Time`, and `Date`, using whatever
timezone was set with `/settimezone <IANA timezone>` (e.g.
`/settimezone Africa/Lagos`). If no timezone has been set yet, it falls
back to the server's own local timezone.

### One-time public-address confirmation (v1.4.3, reordered in v1.5.1)
Some hosting panels map a friendly public domain (e.g. `app.brevo.host:2666`)
to your server only inside their own routing layer — that mapping is
invisible to the container itself, so no environment variable can reveal
it and auto-detection can't always be certain. To close that gap without
requiring anyone to edit a config file, the console wizard now asks
**"Pair with phone number" or "Open Dashboard"** first, in its own boxed
menu — and only if "Open Dashboard" is chosen does it show a boxed,
numbered step-by-step guide (open your panel → find the Network/
Allocations tab → copy the address → paste it) and ask you to confirm or
correct its best guess. Someone who only ever wanted to pair by phone
never sees this question at all. The answer is saved to
`database/bot_settings.json` (`hub_public_url`) and used on every future
restart without asking again.

Use `/sethubaddress <url>` any time afterward to change it (e.g. if the
server's address changes), or `/sethubaddress reset` to clear it and fall
back to auto-detection.

---

## 20. Dashboard: Groups, Contacts, Status, and the Post-Status ban fix (v1.5.0)

### Critical fix: Post Status no longer risks getting the account banned
The dashboard's Post Status feature used to build its own `status@broadcast`
call directly, and had two real bugs: it never set `broadcast:true` (which
can make WhatsApp silently drop a status while the API call still looks
successful), and it sent straight to a large, harvested list of every JID
the bot has ever seen — including people who are only members of large
groups, never actual 1:1 contacts — as its *first and only* attempt. That
pattern looks nothing like how a real WhatsApp client posts a status, and
is a plausible contributor to accounts getting flagged.

It now reuses `postToStatus()` from `plugins/poststory.js` — the same
send path `/story` and `/tostory` already relied on — which tries
`broadcast:true` alone first (matching real client behavior most closely)
and only falls back to an explicit contact list if that fails.

One honest limit: no code change eliminates WhatsApp's own risk-based
enforcement for an account that's already been flagged, or for very
high-volume broadcasting from an unofficial client in general — that's
the platform's abuse detection working as designed, not a bug.

### Groups tab — now clickable
Tap a group to open it: send it a message, tag everyone, rename it, edit
its description, lock it to admins-only, and promote/demote/remove
members. All of this requires the bot to actually be an admin in that
group — the panel tells you up front if it isn't, rather than failing
silently.

### Contacts tab
View everyone the bot has exchanged messages with, search by name or
number, tap to message them directly.

### View Status tab
Browse recent statuses the bot has seen while online (text/image/video),
tap one to preview it and send a reply — same as replying from the status
viewer in the WhatsApp app itself.

---

## 21. Dashboard moderation: warnings, group photo, join requests (v1.6.0)

Building on the Groups tab from v1.5.0, each group's detail view now also has:

### Warnings
Warn a member right from their row (a "Warn" button next to every member,
regardless of whether the bot is a group admin — warning is tracked by the
bot itself, not a WhatsApp permission). Shares the exact same limit and
storage as the `/warn`, `/listwarn`, and `/resetwarn` chat commands, so a
warning given from the dashboard and one given by chat command always
agree. The group card shows every current warning with a Reset button, and
an editable auto-remove threshold (1–20, default 3) — hitting the limit
removes the member automatically, same as `/warn` does today (this part
does need the bot to be an admin).

### Group Photo
View the current photo, upload a new one, or remove it — same
`updateProfilePicture` / `profilePictureUrl` / `removeProfilePicture` calls
already used by `/setppgroup`, `/getgrouppp`, `/delppgroup`.

### Join Requests
See everyone waiting to join, approve or reject one at a time, or
approve/reject everyone pending in one tap — same
`groupRequestParticipantsList` / `groupRequestParticipantsUpdate` calls
already used by `/listrequests`, `/approve`, `/disapprove`, `/approveall`,
`/disapproveall`.

All of the above (except warning itself) requires the bot to actually be
an admin in that group — the panel already surfaces this up front per
group, from v1.5.0.

---

## 22. Status-posting diagnosis, contact-name fix, and Profile/Files/Forgot-password (v1.7.0)

### Status posting — best-effort fix
`postToStatus()`'s success check required WhatsApp's send result to carry a
populated `key.id`. Sends to `status@broadcast` frequently resolve without
one even on a genuine success — there's no single delivery receipt to
attach it to, unlike a normal chat message. That mismatch could make a real
post get read as a failure, triggering further attempts that risked
duplicate posts, or ending on an attempt that "failed" the same check and
reporting the whole thing as broken. Success is now "the call didn't
throw," and the function stops at the first clean attempt. Detailed
`[STORY]` console logging was added for every attempt's raw result/error —
this couldn't be verified against a live WhatsApp session, so if it's still
not posting, those log lines are the next real diagnostic step.

### Contact names — root cause found
Contacts showing with no name were never fake — they're real numbers from
people who share groups with the bot. The bug: `contacts.set`/`upsert`/
`update` only ever cached a person's name under their `@lid` (WhatsApp's
privacy ID), never under the plain `@s.whatsapp.net` JID that
`getAllContacts()` and the dashboard's Contacts tab actually look up by. Now
cached under both, plus a fallback to Baileys' own contact store. A number
WhatsApp has genuinely never given a name for will still show as bare —
that part isn't fixable from here.

### Group messages: media + documents
The dashboard's group message compose box now has an attach button
supporting images, video, and documents, not just text.

### Onboarding: full country list + search
Replaced the ~8-country dropdown with the full ~195-country list. Type to
search; selection can be changed freely at any point before submitting.

### Password minimum: 5 characters
Lowered from 8, enforced both client-side (wizard) and server-side
(`server.js`), so it can't be bypassed by skipping the client check.

### Profile tab
View and edit username, email, country, and WhatsApp number. A separate
"Change Password" form requires the current password before accepting a
new one.

### Forgot password
`/dashboard/forgot-password` requests a reset link (always responds the
same way whether or not the email exists, so the endpoint can't be used to
enumerate accounts); the emailed link is single-use and expires in 1 hour.
`/dashboard/reset-password/:token` sets the new password. Backed by two new
`owner_accounts` columns (`reset_token`, `reset_expires`) added through a
safe, idempotent migration — checks for the columns and adds them if
missing, a no-op on every boot after the first.

### Files tab: edit, replace, delete
Building on the existing read-only file browser, text files (`.js`,
`.json`, `.md`, etc.) now open in an inline editor with a Save button; any
file can be replaced (upload to overwrite) or deleted. All three go through
the exact same allow-list boundary the read-only version always used —
`sessions/`, `database/`, and `settings/` (WhatsApp credentials, password
hashes, the email API key) remain permanently unreachable through this
feature no matter what path is requested, because there's no path that
resolves into them from the allow-list in the first place. Every
edit/replace/delete requires an explicit confirmation dialog and is logged
server-side.
