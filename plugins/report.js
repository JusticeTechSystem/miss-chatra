// plugins/report.js — Miss Chatra Report System
// /report in group → silently DMs reporter a full intake form
// No messages posted to the group at any point
"use strict";

const { buildTicket, newCaptcha, jidToNum, numToJid } = require("../library/helpers");
const { getState, saveState } = require("../library/state");
const config = require("../settings/config");

// ── Real JID → phone number ───────────────────────────────────────────────────
function realNum(jid) {
  if (!jid) return "Unknown";
  // Strip device suffix (:12) and @domain
  return (jid || "").split("@")[0].split(":")[0].replace(/\D/g, "") || "Unknown";
}

function getDmJid(jid) {
  const num = realNum(jid);
  return num !== "Unknown" ? `${num}@s.whatsapp.net` : null;
}

// ── Session helpers ───────────────────────────────────────────────────────────
function getSessions(state) {
  if (!state.report_sessions) state.report_sessions = {};
  return state.report_sessions;
}

async function sendDm(sock, jid, text) {
  try { await sock.sendMessage(jid, { text }); } catch {}
}

// ── STAGES ────────────────────────────────────────────────────────────────────
// 0 = ask name
// 1 = ask email
// 2 = ask WhatsApp number
// 3 = ask reason
// 4 = ask for screenshot/video evidence
// 5 = captcha
// 6 = confirm (yes/no)

const STAGE_PROMPTS = {
  0: `📋 *Step 1 of 6 — Your Name*\n\nPlease enter your full name:`,
  1: `📋 *Step 2 of 6 — Your Email*\n\nPlease enter your email address:`,
  2: `📋 *Step 3 of 6 — Your WhatsApp Number*\n\nPlease enter your WhatsApp number with country code:\nExample: 2348012345678`,
  3: `📋 *Step 4 of 6 — Reason for Report*\n\nPlease describe in detail what happened and why you are reporting this user:`,
  4: `📋 *Step 5 of 6 — Evidence*\n\nPlease send a screenshot or video as evidence.\n\n⚠️ Evidence is *compulsory*. Your report cannot be submitted without it.`,
  5: null, // dynamically generated with captcha
  6: null, // dynamically generated with summary
};

module.exports = {
  name: "Report",
  category: "moderation",
  command: ["report","setreportthreshold","setreportmaxperuser","resetreports","appeal","cancelreport","stopreport"],

  // ── Handle DM messages for ongoing report/appeal flows ───────────────────────
  handlePrivate: async (sock, m, userId, text) => {
    const state    = getState();
    const sessions = getSessions(state);
    const session  = sessions[userId];

    // Appeal flow
    const appeal = state.appeal_sessions?.[userId];
    if (appeal) return handleAppealFlow(sock, m, userId, text, appeal, state);

    // Report flow
    if (session) return handleReportFlow(sock, m, userId, text, session, state);

    return false;
  },

  run: async ({ sock, m, args, command, chatId, userId, reply, isAdmin, isOwner, isDev, prefix, mentionedJid, quotedMsg }) => {
    const state = getState();

    // ── /report ──────────────────────────────────────────────────────────────
    if (command === "report") {
      if (!chatId.endsWith("@g.us")) {
        return reply("ℹ️ The /report command is for group use only. Please use it in a group to report a member.");
      }

      // ── Fetch group metadata (used for all lookups below) ─────────────────
      let groupMeta;
      try { groupMeta = await sock.groupMetadata(chatId); } catch {}
      const groupName = groupMeta?.subject || "Unknown Group";
      const participants = groupMeta?.participants || [];

      // ── Resolve target JID ─────────────────────────────────────────────────
      // Sources (in priority order):
      //   1. Quoted message sender   — always gives real @s.whatsapp.net JID
      //   2. @mention contextInfo    — may give @lid (WA privacy)
      //   3. mentionedJid array      — same as above
      //   4. Participant name search — when user types /report @JusticeTech (by name)

      let targetJid = quotedMsg?.sender
        || m?.quoted?.sender
        || m?.message?.extendedTextMessage?.contextInfo?.participant
        || m?.msg?.contextInfo?.participant
        || mentionedJid?.[0]
        || m?.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0]
        || m?.msg?.contextInfo?.mentionedJid?.[0]
        || null;

      // ── If we got a LID, try to resolve to real JID via participant list ───
      if (targetJid && targetJid.endsWith("@lid")) {
        const lidNum = realNum(targetJid);
        for (const p of participants) {
          if (p.id === targetJid ||
              p.lid === targetJid ||
              realNum(p.lid || "") === lidNum) {
            // Participant found — use their id (may be @s.whatsapp.net or still @lid)
            targetJid = p.id;
            console.log(`[REPORT] LID resolved to participant id: ${targetJid}`);
            break;
          }
        }
        // If still @lid: that IS their canonical WhatsApp ID — keep it, it works for kick
        if (targetJid.endsWith("@lid")) {
          console.log(`[REPORT] Using LID as-is (WA privacy): ${targetJid}`);
        }
      }

      // ── Name/text search fallback: /report @JusticeTech ───────────────────
      // When WA doesn't populate mentionedJid (e.g. typed manually), search by name
      if (!targetJid && args.length > 0) {
        const searchRaw = args.join(" ").replace(/^@/, "").toLowerCase().trim();
        // Try matching participant pushName or number
        const byName = participants.find(p => {
          const pName = (p.name || p.notify || p.verifiedName || "").toLowerCase();
          const pNum  = realNum(p.id);
          return pName.includes(searchRaw) ||
                 pNum.endsWith(searchRaw.replace(/\D/g, ""));
        });
        if (byName) {
          targetJid = byName.id;
          console.log(`[REPORT] Found by name/number search "${searchRaw}": ${targetJid}`);
        }
      }

      if (!targetJid) {
        return reply([
          `ℹ️ *How to Report a Member*`,
          ``,
          `✅ *Best method:*`,
          `   Reply to their message → /report`,
          ``,
          `✅ *Also works:*`,
          `   /report @username`,
          ``,
          `Your report is handled privately.`,
        ].join("\n"));
      }

      const targetNum   = realNum(targetJid);
      const reporterNum = realNum(userId);

      if (targetNum === reporterNum) {
        return reply("❌ You cannot report yourself.");
      }

      // Check duplicate reports
      if (!state.report_counts) state.report_counts = {};
      const chatCounts = state.report_counts[chatId] || {};
      const dupKey = `${reporterNum}_${targetNum}`;
      const cfgMax = require("../settings/config").reportMaxPerUser || 3;
      const maxPerUser = state.report_max_per_user || cfgMax;
      if ((chatCounts[dupKey] || 0) >= maxPerUser) {
        // Silently redirect to DM rather than group
        const dmJid = getDmJid(userId);
        if (dmJid) await sendDm(sock, dmJid, `⚠️ You have already submitted the maximum number of reports (${maxPerUser}) against this user in this group.`);
        return;
      }

      // ── Redirect to DM silently (NO message in group) ──────────────────────
      const dmJid = getDmJid(userId);
      if (!dmJid) return; // can't DM, silently fail

      // Fix B: Delete /report command message from group + notify reporter
      try { await sock.sendMessage(chatId, { delete: m.key }); } catch {}
      // Send brief group notification tagging reporter
      try {
        const reporterJid = userId;
        const noticeMsg = await sock.sendMessage(chatId, {
          text: `📩 @${realNum(reporterJid)}, your report has been received. Please check your private DM to complete the process.`,
          mentions: [reporterJid]
        });
        // Auto-delete the notice after 10 seconds
        setTimeout(async () => { try { await sock.sendMessage(chatId, { delete: noticeMsg?.key }); } catch {} }, 10000);
      } catch {}

      // Start session
      const sessions = getSessions(state);
      sessions[userId] = {
        stage:       0,
        targetJid,       // real JID (may still be @lid if resolution failed)
        targetNum,       // real phone number
        groupId:     chatId,
        groupName,
        reporterNum,
        name:        "",
        email:       "",
        phone:       "",
        reason:      "",
        evidenceKey: null,
        evidenceMime:"",
        captcha_q:   "",
        captcha_a:   "",
        created:     Date.now(),
      };
      saveState();

      // Send welcome DM with first prompt
      await sendDm(sock, dmJid, [
        `🚨 *Miss Chatra — Report Submission*`,
        ``,
        `You are reporting a user from the group: *${groupName}*`,
        `Target: +${targetNum}`,
        ``,
        `Please complete the following form. All fields are required.`,
        `Type *cancel* at any time to stop.`,
        ``,
        STAGE_PROMPTS[0],
      ].join("\n"));

      return; // No reply in group
    }

    // ── /appeal ───────────────────────────────────────────────────────────────
    if (command === "appeal") {
      if (!chatId.endsWith("@s.whatsapp.net")) {
        return reply("📩 Please send /appeal directly to me in a private message to begin the appeal process.");
      }
      if (!state.appeal_sessions) state.appeal_sessions = {};
      const captcha = newCaptcha();
      state.appeal_sessions[userId] = { stage: 0, captcha_q: captcha.q, captcha_a: captcha.a, created: Date.now() };
      saveState();
      return reply(`⚖️ *Appeal Request*\n\nTo begin your appeal, please solve this security check:\n\n🧩 *${captcha.q} = ?*\n\nReply with the answer.`);
    }

    // ── Admin config ──────────────────────────────────────────────────────────
    if (command === "setreportthreshold" || command === "setreportmaxperuser") {
      const DEV_NUMS_R = ["2349032578690","2348166337692"];
      const callerNumR = (userId||"").split("@")[0].split(":")[0].replace(/\D/g,"");
      if (!DEV_NUMS_R.includes(callerNumR)) return reply("🔒 This command is restricted to developers only.");

      const cfg = require("../settings/config");
      const currentThreshold = state.report_threshold || cfg.reportThreshold || 10;
      const currentMax       = state.report_max_per_user || cfg.reportMaxPerUser || 3;

      if (!args[0]) {
        return reply([
          `⚙️ *Report Settings*`,
          ``,
          `📊 Auto-action threshold : *${currentThreshold}* reports`,
          `👤 Max reports per user  : *${currentMax}*`,
          ``,
          `Change threshold:`,
          `  /${prefix}setreportthreshold 5`,
          ``,
          `Change max per user:`,
          `  /${prefix}setreportmaxperuser 2`,
          ``,
          `_Default values are set in config.js_`,
        ].join("\n"));
      }

      const n = parseInt(args[0] || "");
      if (!n || n < 1) return reply(`❌ Please provide a valid number.

Usage: /${command} <number>`);
      if (command === "setreportthreshold") {
        state.report_threshold = n; saveState();
        return reply(`✅ Auto-action threshold set to *${n}* reports.

_Users will be removed from the group after ${n} reports._`);
      }
      state.report_max_per_user = n; saveState();
      return reply(`✅ Max reports per user set to *${n}*.

_Each user can submit at most ${n} report(s) against the same person._`);
    }

    // Emergency: clear stuck report session for any user
    if (command === "cancelreport" || command === "stopreport") {
      if (!state.report_sessions) state.report_sessions = {};
      if (state.report_sessions[userId]) {
        delete state.report_sessions[userId];
        saveState();
        return reply("✅ Your report session has been cancelled.");
      }
      return reply("ℹ️ You have no active report session.");
    }

    if (command === "resetreports") {
      if (!isAdmin && !isOwner && !isDev) return reply("🔒 This command is restricted to group administrators.");
      if (!chatId.endsWith("@g.us")) return reply("ℹ️ This command must be used in a group.");
      if (state.report_counts) delete state.report_counts[chatId];
      saveState();
      return reply("✅ All report records for this group have been cleared.");
    }
  }
};

// ── Report flow handler ───────────────────────────────────────────────────────
async function handleReportFlow(sock, m, userId, text, session, state) {
  const dmJid  = userId; // already a DM jid
  const stage  = session.stage;

  if ((text || "").toLowerCase() === "cancel") {
    delete state.report_sessions[userId];
    saveState();
    await sendDm(sock, dmJid, "✅ Report cancelled. No submission was made.");
    return true;
  }

  // Stage 0 — Name
  if (stage === 0) {
    if (!text || text.trim().length < 2) {
      await sendDm(sock, dmJid, "⚠️ Please enter your full name (at least 2 characters).");
      return true;
    }
    session.name  = text.trim();
    session.stage = 1;
    state.report_sessions[userId] = session;
    saveState();
    await sendDm(sock, dmJid, STAGE_PROMPTS[1]);
    return true;
  }

  // Stage 1 — Email
  if (stage === 1) {
    if (!text || !text.includes("@")) {
      await sendDm(sock, dmJid, "⚠️ Please enter a valid email address (e.g. name@example.com).");
      return true;
    }
    session.email = text.trim();
    session.stage = 2;
    state.report_sessions[userId] = session;
    saveState();
    await sendDm(sock, dmJid, STAGE_PROMPTS[2]);
    return true;
  }

  // Stage 2 — Phone number
  if (stage === 2) {
    const digits = (text || "").replace(/\D/g, "");
    if (digits.length < 7) {
      await sendDm(sock, dmJid, "⚠️ Please enter a valid WhatsApp number with country code.\nExample: 2348012345678");
      return true;
    }
    session.phone = digits;
    session.stage = 3;
    state.report_sessions[userId] = session;
    saveState();
    await sendDm(sock, dmJid, STAGE_PROMPTS[3]);
    return true;
  }

  // Stage 3 — Reason
  if (stage === 3) {
    if (!text || text.trim().length < 10) {
      await sendDm(sock, dmJid, "⚠️ Please provide a more detailed reason (at least 10 characters).");
      return true;
    }
    session.reason = text.trim();
    session.stage  = 4;
    state.report_sessions[userId] = session;
    saveState();
    await sendDm(sock, dmJid, STAGE_PROMPTS[4]);
    return true;
  }

  // Stage 4 — Evidence (image or video)
  if (stage === 4) {
    const imgMsg  = m?.message?.imageMessage;
    const vidMsg  = m?.message?.videoMessage;
    const docMsg  = m?.message?.documentMessage;
    const hasMedia = !!(imgMsg || vidMsg || docMsg);

    if (!hasMedia) {
      await sendDm(sock, dmJid, "⚠️ Evidence is compulsory. Please send a *screenshot* (image) or *video* as evidence.\n\nYour report cannot proceed without it.");
      return true;
    }

    // Store message for forwarding to admins
    session.evidenceKey  = m.key;
    session.evidenceMsg  = m.message; // full message object for forward
    session.evidenceMime = imgMsg ? "image" : vidMsg ? "video" : "document";
    session.stage = 5;

    // Generate captcha
    const captcha = newCaptcha();
    session.captcha_q = captcha.q;
    session.captcha_a = captcha.a;
    state.report_sessions[userId] = session;
    saveState();

    await sendDm(sock, dmJid, [
      `✅ Evidence received.`,
      ``,
      `📋 *Step 6 of 6 — Security Check*`,
      ``,
      `To confirm you are human, please solve this:`,
      ``,
      `🧩 *${captcha.q} = ?*`,
      ``,
      `Reply with the answer.`,
    ].join("\n"));
    return true;
  }

  // Stage 5 — Captcha
  if (stage === 5) {
    if (String(text).trim() !== String(session.captcha_a)) {
      await sendDm(sock, dmJid, `❌ Incorrect answer. Try again:\n\n🧩 *${session.captcha_q} = ?*`);
      return true;
    }

    session.stage = 6;
    state.report_sessions[userId] = session;
    saveState();

    // Show summary for confirmation
    await sendDm(sock, dmJid, [
      `✅ *Security check passed!*`,
      ``,
      `📋 *Review Your Report*`,
      `─────────────────────────────`,
      `👤 Name         : ${session.name}`,
      `📧 Email        : ${session.email}`,
      `📱 Your Number  : +${session.phone}`,
      `🎯 Reporting    : +${session.targetNum}`,
      `🏠 Group        : ${session.groupName}`,
      `📝 Reason       : ${session.reason}`,
      `📎 Evidence     : ${session.evidenceMime} attached`,
      `─────────────────────────────`,
      ``,
      `Type *yes* to submit or *no* to cancel.`,
    ].join("\n"));
    return true;
  }

  // Stage 6 — Confirm
  if (stage === 6) {
    const answer = (text || "").toLowerCase().trim();

    if (answer === "no" || answer === "cancel") {
      delete state.report_sessions[userId];
      saveState();
      await sendDm(sock, dmJid, "✅ Report cancelled. No submission was made.");
      return true;
    }

    if (answer !== "yes") {
      await sendDm(sock, dmJid, `Please reply *yes* to submit or *no* to cancel.`);
      return true;
    }

    // Submit — generate ticket
    const ticket = buildTicket("RPT", session.groupId, userId, session.targetNum);

    // Track counts
    if (!state.report_counts) state.report_counts = {};
    if (!state.report_counts[session.groupId]) state.report_counts[session.groupId] = {};
    const chatCounts = state.report_counts[session.groupId];
    const dupKey  = `${session.reporterNum}_${session.targetNum}`;
    const totalKey = `total_${session.targetNum}`;
    chatCounts[dupKey]  = (chatCounts[dupKey] || 0) + 1;
    chatCounts[totalKey] = (chatCounts[totalKey] || 0) + 1;
    const totalReports = chatCounts[totalKey];
    saveState();

    // Confirm to reporter
    await sendDm(sock, dmJid, [
      `✅ *Report Submitted Successfully*`,
      ``,
      `🎫 Ticket: \`${ticket}\``,
      ``,
      `Your report has been sent to all group administrators for review. Thank you for helping keep the community safe.`,
    ].join("\n"));

    // Build admin notification
    const adminReport = [
      `🚨 *New Report Received*`,
      ``,
      `🎫 Ticket     : ${ticket}`,
      `🏠 Group      : ${session.groupName}`,
      ``,
      `👤 Reporter`,
      `   Name       : ${session.name}`,
      `   Email      : ${session.email}`,
      `   Number     : +${session.phone}`,
      ``,
      `🎯 Target     : +${session.targetNum}`,
      ``,
      `📝 Reason     : ${session.reason}`,
      ``,
      `📊 Total reports on target: ${totalReports}`,
      `📎 Evidence attached below ↓`,
    ].join("\n");

    // Send to ALL group admins
    try {
      const meta   = await sock.groupMetadata(session.groupId);
      const admins = meta.participants.filter(p => p.admin);
      console.log(`[REPORT] Sending to ${admins.length} admin(s) in ${session.groupName}`);
      for (const admin of admins) {
        // Prefer @s.whatsapp.net JID; if @lid, try to find real JID from participants
        let adminRealJid = admin.id;
        if (adminRealJid.endsWith("@lid")) {
          const lidNum = realNum(adminRealJid);
          const realP = meta.participants.find(p => 
            realNum(p.lid || "") === lidNum || realNum(p.id) === lidNum
          );
          if (realP && realP.id.endsWith("@s.whatsapp.net")) {
            adminRealJid = realP.id;
          }
        }
        const adminDm = adminRealJid.endsWith("@s.whatsapp.net") 
          ? adminRealJid 
          : getDmJid(adminRealJid);
        console.log(`[REPORT] Admin: ${admin.id} → DM: ${adminDm}`);
        if (!adminDm) continue;
        try {
          // Text report
          await sock.sendMessage(adminDm, { text: adminReport });
          console.log(`[REPORT] ✅ Sent to ${adminDm}`);
          // Forward evidence — use correct Baileys forward syntax
          if (session.evidenceKey && session.evidenceMsg) {
            try {
              await sock.sendMessage(adminDm, { forward: session.evidenceMsg });
            } catch {
              // Fallback: just note that evidence was sent
              await sock.sendMessage(adminDm, { text: `📎 Evidence was attached to the report (${session.evidenceMime}). Ticket: ${ticket}` });
            }
          }
        } catch {}
        await new Promise(r => setTimeout(r, 300));
      }
    } catch (e) {
      console.error("[REPORT] Admin send error:", e.message);
    }

    // Also always notify owner as backup
    try {
      const ownerNum = require("../settings/config").ownerNumber;
      if (ownerNum) {
        const ownerJid = `${ownerNum}@s.whatsapp.net`;
        await sock.sendMessage(ownerJid, { text: adminReport });
        if (session.evidenceKey && session.evidenceMsg) {
          try { await sock.sendMessage(ownerJid, { forward: session.evidenceMsg }); } catch {}
        }
      }
    } catch {}

    // Auto-action threshold
    const cfgThreshold = require("../settings/config").reportThreshold || 3;
    const threshold = state.report_threshold || cfgThreshold;
    console.log(`[REPORT] Reports: ${totalReports}/${threshold} — target: ${session.targetJid}`);

    if (totalReports >= threshold) {
      console.log(`[REPORT] Threshold reached — kicking ${session.targetJid} from ${session.groupName}`);
      try {
        const kickJid = session.targetJid || numToJid(session.targetNum);
        await sock.groupParticipantsUpdate(session.groupId, [kickJid], "remove");
        console.log(`[REPORT] ✅ Kicked ${kickJid}`);

        // Notify group (auto-deletes in 8s)
        try {
          const gMsg = await sock.sendMessage(session.groupId, {
            text: `🚫 A member has been removed after reaching the report threshold.`
          });
          setTimeout(async () => { try { await sock.sendMessage(session.groupId, { delete: gMsg?.key }); } catch {} }, 8000);
        } catch {}

        // Notify admins
        try {
          const meta = await sock.groupMetadata(session.groupId);
          for (const admin of meta.participants.filter(p => p.admin)) {
            const adminDm = getDmJid(admin.id);
            if (adminDm) await sendDm(sock, adminDm, `⚡ *Auto-Kick*\n\nUser +${session.targetNum} removed from *${session.groupName}* — ${totalReports} reports.\nTicket: ${ticket}`);
          }
        } catch {}

        // Always notify owner
        try {
          const ownerNum = require("../settings/config").ownerNumber;
          if (ownerNum) await sendDm(sock, `${ownerNum}@s.whatsapp.net`, `⚡ *Auto-Kick*\n\nGroup: ${session.groupName}\nTarget: +${session.targetNum}\nReports: ${totalReports}\nTicket: ${ticket}`);
        } catch {}

      } catch (e) {
        console.error(`[REPORT] ❌ Kick failed: ${e.message}`);
        try {
          const ownerNum = require("../settings/config").ownerNumber;
          if (ownerNum) await sendDm(sock, `${ownerNum}@s.whatsapp.net`, `⚠️ Auto-kick FAILED\nGroup: ${session.groupName}\nError: ${e.message}\n\nMake sure bot is admin in the group.`);
        } catch {}
      }
    }

    delete state.report_sessions[userId];
    saveState();
    return true;
  }

  return false;
}

// ── Appeal flow ───────────────────────────────────────────────────────────────
async function handleAppealFlow(sock, m, userId, text, appeal, state) {
  const stage = appeal.stage || 0;

  if (stage === 0) {
    if (String(text).trim() !== String(appeal.captcha_a)) {
      await sendDm(sock, userId, `❌ Incorrect. Try again: *${appeal.captcha_q} = ?*`);
      return true;
    }
    appeal.stage = 1;
    state.appeal_sessions[userId] = appeal;
    saveState();
    await sendDm(sock, userId, `✅ Security check passed.\n\nPlease explain your appeal — describe what happened and why you believe the action was unfair:`);
    return true;
  }

  if (stage === 1) {
    if (!text || text.length < 10) {
      await sendDm(sock, userId, "⚠️ Please provide a more detailed explanation (minimum 10 characters).");
      return true;
    }
    const ticket = buildTicket("APL", userId, Date.now());
    appeal.text   = text;
    appeal.ticket = ticket;

    await sendDm(sock, userId, [
      `✅ *Appeal Submitted*`,
      ``,
      `🎫 Ticket: \`${ticket}\``,
      ``,
      `Your appeal has been forwarded to the administrators for review. You will be notified of the outcome.`,
    ].join("\n"));

    const ownerJid = getDmJid(config.ownerNumber);
    if (ownerJid) {
      await sendDm(sock, ownerJid, `⚖️ *New Appeal*\n\nTicket: ${ticket}\nUser: +${jidToNum(userId)}\n\n${text}`);
    }

    delete state.appeal_sessions[userId];
    saveState();
    return true;
  }

  return false;
}
