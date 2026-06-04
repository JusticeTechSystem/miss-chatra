// plugins/integrations.js — Miss Chatra Integrations
// WhatsApp → Telegram Bridge + Instagram Auto-Post
// All features are GROUP-ISOLATED — must be configured per group
"use strict";

const axios = require("axios");
const fs    = require("fs");
const path  = require("path");

const DB_DIR   = path.join(__dirname, "..", "database");
const CFG_FILE = path.join(DB_DIR, "integrations.json");

function loadCfg()   { try { return JSON.parse(fs.readFileSync(CFG_FILE,"utf8")); } catch { return {}; } }
function saveCfg(d)  { try { if(!fs.existsSync(DB_DIR))fs.mkdirSync(DB_DIR,{recursive:true}); fs.writeFileSync(CFG_FILE,JSON.stringify(d,null,2)); } catch {} }
function getGroup(chatId)   { const d = loadCfg(); return d[chatId] || {}; }
function setGroup(chatId,g) { const d = loadCfg(); d[chatId]=g; saveCfg(d); }

// ── Telegram Bridge ───────────────────────────────────────────────────────────
async function sendToTelegram(botToken, chatIdTg, text, imageBuffer = null) {
  const base = `https://api.telegram.org/bot${botToken}`;
  if (imageBuffer) {
    const FormData = require("form-data");
    const form = new FormData();
    form.append("chat_id", chatIdTg);
    form.append("caption", text || "");
    form.append("photo", imageBuffer, { filename: "photo.jpg", contentType: "image/jpeg" });
    return axios.post(`${base}/sendPhoto`, form, { headers: form.getHeaders(), timeout: 20000 });
  }
  return axios.post(`${base}/sendMessage`, { chat_id: chatIdTg, text, parse_mode: "HTML" }, { timeout: 10000 });
}

// ── Instagram Graph API ───────────────────────────────────────────────────────
async function postToInstagram(accessToken, igUserId, imageUrl, caption) {
  // Step 1: Create media container
  const r1 = await axios.post(
    `https://graph.facebook.com/v18.0/${igUserId}/media`,
    { image_url: imageUrl, caption, access_token: accessToken },
    { timeout: 20000 }
  );
  const containerId = r1.data?.id;
  if (!containerId) throw new Error("Failed to create Instagram media container");

  // Step 2: Wait for container to be ready
  await new Promise(r => setTimeout(r, 3000));

  // Step 3: Publish
  const r2 = await axios.post(
    `https://graph.facebook.com/v18.0/${igUserId}/media_publish`,
    { creation_id: containerId, access_token: accessToken },
    { timeout: 20000 }
  );
  return r2.data;
}

// Upload image to get a public URL (uses 0x0.st)
async function uploadImageForInstagram(buffer) {
  const FormData = require("form-data");
  const form = new FormData();
  form.append("file", buffer, { filename: "post.jpg", contentType: "image/jpeg" });
  const r = await axios.post("https://0x0.st", form, { headers: form.getHeaders(), timeout: 30000 });
  const url = (r.data || "").toString().trim();
  if (!url.startsWith("http")) throw new Error("Failed to get public URL for image");
  return url;
}

// ── Active bridges (in-memory list, set from message.js) ─────────────────────
// This is read by message.js to forward messages
function getActiveBridges() {
  const cfg = loadCfg();
  return Object.entries(cfg)
    .filter(([, g]) => g.telegram_on)
    .map(([chatId, g]) => ({ chatId, botToken: g.tg_token, tgChatId: g.tg_chatid, prefix: g.tg_prefix || "" }));
}

module.exports = {
  name: "Integrations",
  category: "integrations",
  desc: "WhatsApp → Telegram bridge and Instagram auto-post",
  command: [
    // Telegram bridge
    "tgsetup","tgon","tgoff","tgstatus","tgtest","tgprefix",
    // Instagram
    "igsetup","igpost","igon","igoff","igstatus","igtest",
    // General
    "integrationshelp","integrations",
  ],
  getActiveBridges,
  sendToTelegram,

  run: async ({ sock, m, args, command, chatId, userId, reply, isOwner, isDev, isAdmin, prefix }) => {
    const pfx   = prefix || "/";
    const chat  = chatId || m?.chat;
    const canUse = isOwner || isDev || isAdmin;
    const input  = args.join(" ").trim();
    const grp    = getGroup(chat);

    // ── INTEGRATIONS HELP ─────────────────────────────────────────────────────
    if (["integrationshelp","integrations"].includes(command)) {
      return reply([
        `🔗 *Miss Chatra Integrations*`,``,
        `Connect this group to external platforms.`,``,
        `*📨 WhatsApp → Telegram Bridge:*`,
        `  ${pfx}tgsetup <bot_token> <chat_id>`,
        `  ${pfx}tgon / ${pfx}tgoff — Enable/disable`,
        `  ${pfx}tgprefix <text> — Message prefix on Telegram`,
        `  ${pfx}tgtest — Send a test message`,
        `  ${pfx}tgstatus — View configuration`,``,
        `*📸 Instagram Auto-Post:*`,
        `  ${pfx}igsetup <access_token> <ig_user_id>`,
        `  ${pfx}igon / ${pfx}igoff — Enable/disable`,
        `  ${pfx}igpost — Post image (reply to image)`,
        `  ${pfx}igtest — Test your connection`,
        `  ${pfx}igstatus — View configuration`,``,
        `*Setup guides:*`,
        `Telegram: Create a bot at @BotFather, get the token, add bot to channel, get chat_id`,
        `Instagram: Create a Meta Developer App, get Page Access Token and Instagram User ID`,
      ].join("\n"));
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // TELEGRAM BRIDGE
    // ═══════════════════════════════════════════════════════════════════════════

    if (command === "tgsetup") {
      if (!canUse) return reply("🔒 Admin only.");
      if (args.length < 2) {
        return reply([
          `📨 *Telegram Bridge Setup*`,``,
          `Usage: ${pfx}tgsetup <bot_token> <telegram_chat_id>`,``,
          `Steps:`,
          `1. Open Telegram → search @BotFather`,
          `2. Send /newbot → follow steps → copy the token`,
          `3. Add your bot to your Telegram channel/group`,
          `4. Get chat_id:`,
          `   • For channel: @channelname or -100xxxxxxxxx`,
          `   • For group: use @userinfobot to get ID`,
          `5. Run: ${pfx}tgsetup <token> <chat_id>`,``,
          `Example:`,
          `  ${pfx}tgsetup 7123456789:AAFxxx... -1001234567890`,
        ].join("\n"));
      }
      const [token, tgChatId] = args;
      // Validate token by calling getMe
      try {
        const r = await axios.get(`https://api.telegram.org/bot${token}/getMe`, { timeout: 10000 });
        if (!r.data?.ok) throw new Error("Invalid bot token");
        const botInfo = r.data.result;
        grp.tg_token  = token;
        grp.tg_chatid = tgChatId;
        grp.tg_botname = botInfo.first_name || "Bot";
        grp.tg_botusername = botInfo.username || "";
        grp.telegram_on = false;
        setGroup(chat, grp);
        return reply([
          `✅ *Telegram Bot Verified!*`,``,
          `🤖 Bot: ${botInfo.first_name} (@${botInfo.username})`,
          `📨 Target: ${tgChatId}`,``,
          `Now run *${pfx}tgon* to start bridging messages.`,
          `Or set a prefix: *${pfx}tgprefix [WA]*`,
        ].join("\n"));
      } catch (e) {
        return reply(`❌ Telegram setup failed: ${e.message?.includes("Invalid bot") ? "Invalid bot token. Check and try again." : e.message?.slice(0,100)}`);
      }
    }

    if (command === "tgon") {
      if (!canUse) return reply("🔒 Admin only.");
      if (!grp.tg_token || !grp.tg_chatid) return reply(`❌ Not configured yet.\nRun ${pfx}tgsetup first.`);
      grp.telegram_on = true;
      setGroup(chat, grp);
      return reply(`✅ *Telegram Bridge ENABLED*\n\nMessages sent in this group will be forwarded to Telegram.\nRun ${pfx}tgtest to verify.`);
    }

    if (command === "tgoff") {
      if (!canUse) return reply("🔒 Admin only.");
      grp.telegram_on = false;
      setGroup(chat, grp);
      return reply(`❌ *Telegram Bridge DISABLED*\n\nNo more messages will be forwarded.`);
    }

    if (command === "tgprefix") {
      if (!canUse) return reply("🔒 Admin only.");
      const pfxText = input || "";
      grp.tg_prefix = pfxText;
      setGroup(chat, grp);
      if (!pfxText) return reply("✅ Telegram message prefix cleared.");
      return reply(`✅ Telegram prefix set to: *${pfxText}*\n\nMessages will appear as:\n"${pfxText} [sender]: message"`);
    }

    if (command === "tgtest") {
      if (!canUse) return reply("🔒 Admin only.");
      if (!grp.tg_token || !grp.tg_chatid) return reply(`❌ Not configured. Run ${pfx}tgsetup first.`);
      try {
        const name = m?.pushName || "Test User";
        await sendToTelegram(grp.tg_token, grp.tg_chatid,
          `${grp.tg_prefix ? grp.tg_prefix+" " : ""}🔗 <b>Bridge Test</b>\n👤 Sent by: ${name}\n✅ WhatsApp → Telegram bridge is working!`
        );
        return reply("✅ Test message sent to Telegram successfully!");
      } catch (e) {
        return reply(`❌ Failed to send to Telegram: ${e.message?.slice(0,100)}\n\nCheck your bot token and chat ID.`);
      }
    }

    if (command === "tgstatus") {
      return reply([
        `📨 *Telegram Bridge Status*`,``,
        `Status: ${grp.telegram_on ? "✅ Active" : "❌ Inactive"}`,
        grp.tg_botname ? `Bot: ${grp.tg_botname} (@${grp.tg_botusername||"?"})` : "Bot: Not configured",
        grp.tg_chatid  ? `Target Chat: ${grp.tg_chatid}` : "Target: Not set",
        grp.tg_prefix  ? `Prefix: "${grp.tg_prefix}"` : "Prefix: None",``,
        grp.tg_token ? `_Token: ****${grp.tg_token.slice(-8)}_` : "_Not configured_",``,
        `${pfx}tgon | ${pfx}tgoff | ${pfx}tgtest | ${pfx}tgprefix`,
      ].join("\n"));
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // INSTAGRAM AUTO-POST
    // ═══════════════════════════════════════════════════════════════════════════

    if (command === "igsetup") {
      if (!canUse) return reply("🔒 Admin only.");
      if (args.length < 2) {
        return reply([
          `📸 *Instagram Auto-Post Setup*`,``,
          `Usage: ${pfx}igsetup <access_token> <ig_user_id>`,``,
          `Steps to get credentials:`,
          `1. Go to developers.facebook.com`,
          `2. Create an App → Add Instagram product`,
          `3. Connect your Instagram Business/Creator account`,
          `4. Generate a Page Access Token`,
          `5. Get your Instagram User ID from the API Explorer`,``,
          `Important: Your Instagram must be:`,
          `  • A Business or Creator account`,
          `  • Connected to a Facebook Page`,``,
          `Example:`,
          `  ${pfx}igsetup EAAxxxxxxx... 17841xxxxxxxxx`,
        ].join("\n"));
      }
      const [token, igId] = args;
      // Validate by fetching account info
      try {
        const r = await axios.get(`https://graph.facebook.com/v18.0/${igId}`, {
          params: { fields: "name,username,followers_count", access_token: token },
          timeout: 12000,
        });
        const account = r.data;
        grp.ig_token    = token;
        grp.ig_user_id  = igId;
        grp.ig_username = account.username || account.name || "Instagram";
        grp.ig_on       = false;
        setGroup(chat, grp);
        return reply([
          `✅ *Instagram Account Connected!*`,``,
          `👤 Account: @${account.username || account.name}`,
          `👥 Followers: ${account.followers_count?.toLocaleString() || "N/A"}`,``,
          `Run *${pfx}igon* to enable auto-posting.`,
          `Or use *${pfx}igpost* to post manually.`,
        ].join("\n"));
      } catch (e) {
        return reply(`❌ Instagram setup failed: ${e.response?.data?.error?.message || e.message?.slice(0,120)}\n\nCheck your access token and user ID.`);
      }
    }

    if (command === "igon") {
      if (!canUse) return reply("🔒 Admin only.");
      if (!grp.ig_token || !grp.ig_user_id) return reply(`❌ Not configured. Run ${pfx}igsetup first.`);
      grp.ig_on = true;
      setGroup(chat, grp);
      return reply(`✅ *Instagram Auto-Post ENABLED*\n\nImages sent with caption will be auto-posted to @${grp.ig_username||"Instagram"}.\n\nFormat: send image with caption as the Instagram post caption.`);
    }

    if (command === "igoff") {
      if (!canUse) return reply("🔒 Admin only.");
      grp.ig_on = false;
      setGroup(chat, grp);
      return reply(`❌ *Instagram Auto-Post DISABLED*`);
    }

    if (command === "igpost") {
      if (!canUse) return reply("🔒 Admin only.");
      if (!grp.ig_token || !grp.ig_user_id) return reply(`❌ Not configured. Run ${pfx}igsetup first.`);
      const q = m.quoted;
      const isImg = q && (q.mtype === "imageMessage" || (q.mimetype||"").includes("image"));
      if (!isImg) return reply(`❌ Reply to an image with ${pfx}igpost [caption]\n\nExample: Reply to image → ${pfx}igpost Check out our latest update! 🔥`);

      await reply("📸 Posting to Instagram...");
      try {
        const buf = await sock.downloadMediaMessage(q);
        const caption = input || q.caption || "";
        const imageUrl = await uploadImageForInstagram(buf);
        await postToInstagram(grp.ig_token, grp.ig_user_id, imageUrl, caption);
        return reply([
          `✅ *Posted to Instagram!*`,``,
          `📸 Account: @${grp.ig_username||"Instagram"}`,
          caption ? `📝 Caption: "${caption.slice(0,60)}${caption.length>60?"...":""}"` : "",``,
          `_View on your Instagram profile_`,
        ].filter(Boolean).join("\n"));
      } catch (e) {
        return reply(`❌ Instagram post failed: ${e.message?.slice(0,150)}\n\nCommon issues:\n• Token expired — regenerate\n• Image too small (min 320px)\n• Account not Business/Creator type`);
      }
    }

    if (command === "igtest") {
      if (!canUse) return reply("🔒 Admin only.");
      if (!grp.ig_token || !grp.ig_user_id) return reply(`❌ Not configured. Run ${pfx}igsetup first.`);
      try {
        const r = await axios.get(`https://graph.facebook.com/v18.0/${grp.ig_user_id}`, {
          params: { fields: "name,username,followers_count,media_count", access_token: grp.ig_token },
          timeout: 12000,
        });
        const a = r.data;
        return reply([
          `✅ *Instagram Connection Active!*`,``,
          `👤 @${a.username || a.name}`,
          `👥 Followers: ${(a.followers_count||0).toLocaleString()}`,
          `📸 Posts: ${(a.media_count||0).toLocaleString()}`,``,
          `_Token is valid and working._`,
        ].join("\n"));
      } catch (e) {
        return reply(`❌ Instagram connection failed: ${e.response?.data?.error?.message || e.message?.slice(0,100)}`);
      }
    }

    if (command === "igstatus") {
      return reply([
        `📸 *Instagram Status*`,``,
        `Status: ${grp.ig_on ? "✅ Auto-post Active" : "❌ Inactive"}`,
        grp.ig_username ? `Account: @${grp.ig_username}` : "Account: Not configured",
        grp.ig_user_id  ? `User ID: ${grp.ig_user_id}` : "User ID: Not set",``,
        grp.ig_token ? `_Token: ****${grp.ig_token.slice(-8)}_` : "_Not configured_",``,
        `${pfx}igon | ${pfx}igoff | ${pfx}igpost | ${pfx}igtest`,
      ].join("\n"));
    }
  }
};
