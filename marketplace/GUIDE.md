# 🧩 Miss Chatra Plugin Marketplace
## Complete Step-by-Step Guide
---

## WHAT IS IT?
The Plugin Marketplace lets you install new features into the bot instantly.
No zip files. No code editing. No restarts.
Type one command → feature is live in 3 seconds.

---

## HOW TO USE IT — STEP BY STEP

---

### STEP 1: Browse what's available

```
/plugin list
```
Shows every plugin in the marketplace grouped by category.

To browse a specific category:
```
/plugin list finance
/plugin list business
/plugin list spiritual
/plugin list admin
/plugin list tools
```

---

### STEP 2: Search for something specific

```
/plugin search crypto
/plugin search invoice
/plugin search ticket
/plugin search bible
```

---

### STEP 3: Get full details before installing

```
/plugin info crypto-tracker
/plugin info ticket-system
/plugin info contribution-tracker
```

Shows: description, all commands, version, author, size, whether it's free.

---

### STEP 4: Install

```
/plugin install crypto-tracker
```

Bot responds:
```
⬇️ Installing crypto-tracker...
🔍 Safety check...
✅ crypto-tracker installed!

⚡ Commands now active:
  /crypto
  /btc
  /eth
  /pricealert

Try them now — no restart needed!
```

That's it. The commands are live immediately.

---

### STEP 5: Use the plugin

```
/crypto bitcoin
/btc
/eth
/pricealert BTC 100000
```

---

### STEP 6: See what you have installed

```
/plugin installed
```

Shows all installed plugins with their status (active/disabled) and commands.

---

### STEP 7: Remove when you don't need it

```
/plugin remove crypto-tracker
```

Plugin is uninstalled, its commands disappear, no trace left.

---

### STEP 8: Disable temporarily (without removing)

```
/plugin disable crypto-tracker
```

Commands go inactive but the plugin stays installed.
Re-activate any time:

```
/plugin enable crypto-tracker
```

---

### STEP 9: Update a plugin

```
/plugin update crypto-tracker
```

Update all at once:
```
/plugin update all
```

---

## AVAILABLE PLUGINS

| Plugin ID | Name | Commands | Category |
|---|---|---|---|
| crypto-tracker | Crypto Price Tracker | /crypto /btc /eth /pricealert | Finance |
| forex-rates | Forex & Currency Rates | /forex /convert /usdngn /rates | Finance |
| contribution-tracker | Group Contribution Tracker | /pay /contributions /dues /unpaid | Finance |
| ticket-system | Support Ticket System | /ticket /tickets /closeticket | Business |
| knowledge-base | Group Knowledge Base | /kb /kbsave /kbfind /kblist | Productivity |
| invoice-gen | Invoice Generator | /invoice /receipt /payremind | Business |
| devotional | Daily Devotional | /devotional /fasting /prayerchain | Spiritual |
| group-analytics | Group Analytics | /analytics /groupreport /heatmap | Admin |
| poll-advanced | Advanced Polls | /poll /vote /endpoll /blindpoll | Engagement |
| voice-transcribe | Voice Note Transcriber | /transcribe /vtt /voicetotext | Tools |

---

## REAL EXAMPLES

---

### Example 1: Church/Religious Group

Install the devotional plugin:
```
/plugin install devotional
```

Now members can:
```
/devotional          → Get today's devotional
/prayerchain         → Add a prayer request
/fasting on 3 days   → Start a fasting tracker
/readingplan genesis → Start a Bible reading plan
```

---

### Example 2: Business/Sales Group

Install the contribution tracker:
```
/plugin install contribution-tracker
```

Admin sets the target:
```
/settarget 500000 January Dues
```

Members log payments:
```
/pay 50000 January dues
```

Bot shows:
```
✅ Payment Recorded
👤 Justice: ₦50,000
💰 Your total: ₦50,000
📊 Group Progress: [█░░░░░░░░░] 10%
🎯 Target: ₦500,000 | Collected: ₦50,000
```

Check who paid:
```
/contributions
```

---

### Example 3: Support/Customer Group

Install tickets:
```
/plugin install ticket-system
```

Customer raises issue:
```
/ticket I cannot access my account after payment
```

Bot creates TKT-0001, notifies all admins.

Admin closes it:
```
/closeticket TKT-0001 Account restored, check your email
```

Customer gets DM: "Your ticket TKT-0001 has been resolved."

---

### Example 4: Knowledge Group

Install knowledge base:
```
/plugin install knowledge-base
```

Admin saves important info (reply to any message):
```
/kbsave How to join the premium group
/kbsave Payment account details
/kbsave Group rules
```

Member searches:
```
/kbfind payment
```

Bot returns the saved information instantly. No more answering the same question 100 times.

---

### Example 5: Finance Group

Install forex rates:
```
/plugin install forex-rates
```

Members use:
```
/rates              → Live USD, GBP, EUR vs NGN
/convert 1000 USD NGN → Convert currencies
/usdngn             → Quick dollar rate
```

---

## SAFETY — HOW IT WORKS

Every plugin goes through 4 safety gates before installing:

1. **Verified Badge** — Only JusticeTech-verified plugins install by default
2. **Security Scan** — Code is checked for dangerous patterns (no system commands, no file deletion, no eval)
3. **Syntax Check** — Broken code is rejected before it touches the runtime
4. **Sandbox** — Marketplace plugins run with limited access, cannot affect core bot systems

If any gate fails → installation is blocked with a clear error message.

---

## TROUBLESHOOTING

**"Plugin not found"**
→ Check the exact ID: `/plugin list` to see all IDs

**"Already installed"**
→ Use `/plugin update <id>` to refresh it

**"Installation failed"**
→ Bot will show the exact reason

**Commands not working after install**
→ Try `/plugin disable <id>` then `/plugin enable <id>` to reload

---

## FOR DEVELOPERS — HOW TO WRITE A PLUGIN

Any plugin that already works in Miss Chatra can become a marketplace plugin.
Just add the manifest header at the top:

```javascript
// @marketplace my-plugin-id v1.0.0 by YourName
// @description What this plugin does
// @commands command1, command2, command3
// @category finance
"use strict";

module.exports = {
  name: "MyPlugin",
  category: "finance",
  desc: "What this plugin does",
  command: ["command1", "command2"],

  run: async ({ reply, args, command, prefix, chatId, userId }) => {
    if (command === "command1") {
      return reply("Hello from my plugin!");
    }
  }
};
```

Submit to JusticeTech for review → gets verified → appears in marketplace.

---

## QUICK REFERENCE

| Command | What it does |
|---|---|
| /plugin list | Browse all plugins |
| /plugin list <category> | Browse by category |
| /plugin search <word> | Search plugins |
| /plugin info <id> | Full plugin details |
| /plugin install <id> | Install a plugin |
| /plugin remove <id> | Uninstall a plugin |
| /plugin disable <id> | Pause a plugin |
| /plugin enable <id> | Resume a plugin |
| /plugin installed | What's installed |
| /plugin update <id> | Update one plugin |
| /plugin update all | Update everything |

---

*Miss Chatra Plugin Marketplace — by JusticeTech System, Nigeria*
