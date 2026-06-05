// plugins/welcome.js — Miss Chatra Welcome, Goodbye & Gate System
"use strict";

const { gsGet, gsSet, gateSet, gateGet, gateDelete } = require("../library/db");
const { fmtTemplate, numToJid, jidToNum, buildTicket } = require("../library/helpers");
const { getState, saveState } = require("../library/state");
const config = require("../settings/config");
const crypto = require("crypto");

const DEFAULT_WELCOME = "👋 Welcome {name} to the group!";
const DEFAULT_GOODBYE = "👋 {name} has left the group.";

module.exports = {
  name: "Welcome",
  category: "welcome",
  desc: "Welcome/goodbye messages and gate verification for new members",
  command: ["welcome","goodbye","setwelcome","setgoodbye","cleanwelcome","cleangoodbye",
            "gate","gatelock","gatetype","gatetext","gatekick","gateholdtime"],
  ownerOnly: false,

  // ── Group participant update handler (called from message.js) ──────────────
  handleGroupUpdate: async (sock, update) => {
    const { id: chatId, action } = update;
    // Baileys 7.x may pass participants as objects { id, lid } — normalize to strings
    const participants = (update.participants || []).map(p =>
      (p && typeof p === "object") ? (p.id || p.lid || String(p)) : String(p || "")
    ).filter(Boolean);
    const state = getState();

    for (const participant of participants) {
      const userNum  = jidToNum(participant);
      const userInfo = { name: userNum, jid: participant, number: userNum };

      // ── USER JOINED ────────────────────────────────────────────────────────
      if (action === "add") {
        const gs = gsGet(chatId);

        // Welcome message
        if (gs.welcome_on) {
          try {
            const text = fmtTemplate(gs.welcome_text || DEFAULT_WELCOME, userInfo);
            // Clean previous welcome
            if (gs.clean_welcome) {
              const lastId = state.last_welcome?.[chatId];
              if (lastId) {
                try { await sock.sendMessage(chatId, { delete: { id: lastId, remoteJid: chatId, fromMe: true } }); } catch {}
              }
            }
            const sent = await sock.sendMessage(chatId, {
              text,
              mentions: [participant]
            });
            if (!state.last_welcome) state.last_welcome = {};
            state.last_welcome[chatId] = sent.key?.id;
            saveState();

            // Auto-delete welcome
            const delay = state.welcome_autodelete_delay || 60;
            if (delay > 0) setTimeout(async () => {
              try { await sock.sendMessage(chatId, { delete: sent.key }); } catch {}
            }, delay * 1000);
          } catch (e) { console.error("[WELCOME] Error:", e.message); }
        }

        // Gate verification
        if (gs.gatelock) {
          const gatetype = (gs.gatetype || "button").toLowerCase();
          const token    = crypto.randomBytes(4).toString("hex");
          let answer, challengeText;

          if (gatetype === "math") {
            const a = Math.floor(Math.random()*8)+2;
            const b = Math.floor(Math.random()*8)+2;
            answer = String(a + b);
            challengeText = gs.gatetext || `🔐 *Verification Required*\n\n@${userNum}, solve to chat:\n\n*${a} + ${b} = ?*\n\nReply with the answer.`;
          } else {
            const words = ["justice","chatra","verify","welcome","secure","human"];
            answer = words[Math.floor(Math.random()*words.length)];
            challengeText = gs.gatetext || `🔐 *Verification Required*\n\n@${userNum}, type the word: *${answer}*\n\nReply with this exact word to verify.`;
          }

          gateSet(chatId, participant, token, answer);

          try {
            await sock.sendMessage(chatId, {
              text: challengeText,
              mentions: [participant]
            });
          } catch {}

          // Kick if not verified in time
          if (gs.gatekick) {
            const kickAfter = parseInt(gs.gatekicktime || 600) * 1000;
            setTimeout(async () => {
              const pending = gateGet(chatId, participant);
              if (pending) {
                gateDelete(chatId, participant);
                try {
                  await sock.groupParticipantsUpdate(chatId, [participant], "remove");
                  await sock.sendMessage(chatId, { text: `❌ @${userNum} was removed for not completing verification.`, mentions: [participant] });
                } catch {}
              }
            }, kickAfter);
          }
        }
      }

      // ── USER LEFT ──────────────────────────────────────────────────────────
      if (action === "remove") {
        const gs = gsGet(chatId);
        if (!gs.goodbye_on) continue;
        try {
          const text = fmtTemplate(gs.goodbye_text || DEFAULT_GOODBYE, userInfo);
          if (gs.clean_goodbye) {
            const lastId = state.last_goodbye?.[chatId];
            if (lastId) {
              try { await sock.sendMessage(chatId, { delete: { id: lastId, remoteJid: chatId, fromMe: true } }); } catch {}
            }
          }
          const sent = await sock.sendMessage(chatId, { text, mentions: [participant] });
          if (!state.last_goodbye) state.last_goodbye = {};
          state.last_goodbye[chatId] = sent.key?.id;
          saveState();

          const delay = state.goodbye_autodelete_delay || 60;
          if (delay > 0) setTimeout(async () => {
            try { await sock.sendMessage(chatId, { delete: sent.key }); } catch {}
          }, delay * 1000);
        } catch {}
      }
    }
  },

  // ── Gate verification message handler (called from message.js) ────────────
  handleGateMessage: async (sock, m, chatId, participant) => {
    const pending = gateGet(chatId, participant);
    if (!pending) return false;

    const text = (m.body || "").trim().toLowerCase();
    const expected = (pending.answer || "").toLowerCase();

    if (text !== expected) {
      await sock.sendMessage(chatId, { text: `❌ Wrong answer. Try again: expected *${pending.answer}*`, mentions: [participant] });
      return true;
    }

    gateDelete(chatId, participant);
    await sock.sendMessage(chatId, { text: `✅ @${jidToNum(participant)} has been verified! Welcome!`, mentions: [participant] });
    return true;
  },

  run: async ({ args, command, chatId, reply, isAdmin, isOwner, isDev, prefix }) => {
    if (!chatId.endsWith("@g.us")) return reply(config.message.group);
    if (!isAdmin && !isOwner && !isDev) return reply(config.message.admin);

    const gs = gsGet(chatId);

    // ── WELCOME ───────────────────────────────────────────────────────────────
    if (command === "welcome") {
      const sub = (args[0] || "").toLowerCase();
      if (sub === "on")  { gsSet(chatId, { welcome_on: 1 }); return reply("✅ Welcome messages enabled."); }
      if (sub === "off") { gsSet(chatId, { welcome_on: 0 }); return reply("✅ Welcome messages disabled."); }
      if (sub === "set") {
        const text = args.slice(1).join(" ").trim();
        if (!text) return reply(`Usage: /welcome set <text>\n\nVariables: {name} {number}`);
        gsSet(chatId, { welcome_text: text, welcome_on: 1 });
        return reply(`✅ Welcome message set!\n\n${text}`);
      }
      if (sub === "reset") { gsSet(chatId, { welcome_text: "" }); return reply("✅ Welcome reset to default."); }
      return reply([
        `👋 *Welcome Settings*`,``,
        `Status: ${gs.welcome_on ? "✅ On" : "❌ Off"}`,
        `Text: ${gs.welcome_text || DEFAULT_WELCOME}`,``,
        `${prefix}welcome on/off — Toggle`,
        `${prefix}welcome set <text> — Set text`,
        `${prefix}welcome reset — Reset to default`,``,
        `*Variables:* {name} {number}`
      ].join("\n"));
    }

    // ── GOODBYE ───────────────────────────────────────────────────────────────
    if (command === "goodbye") {
      const sub = (args[0] || "").toLowerCase();
      if (sub === "on")  { gsSet(chatId, { goodbye_on: 1 }); return reply("✅ Goodbye messages enabled."); }
      if (sub === "off") { gsSet(chatId, { goodbye_on: 0 }); return reply("✅ Goodbye messages disabled."); }
      if (sub === "set") {
        const text = args.slice(1).join(" ").trim();
        if (!text) return reply(`Usage: /goodbye set <text>`);
        gsSet(chatId, { goodbye_text: text, goodbye_on: 1 });
        return reply(`✅ Goodbye message set!\n\n${text}`);
      }
      return reply([
        `👋 *Goodbye Settings*`,``,
        `Status: ${gs.goodbye_on ? "✅ On" : "❌ Off"}`,
        `Text: ${gs.goodbye_text || DEFAULT_GOODBYE}`,``,
        `${prefix}goodbye on/off — Toggle`,
        `${prefix}goodbye set <text> — Set text`
      ].join("\n"));
    }

    if (command === "setwelcome") {
      const text = args.join(" ").trim();
      if (!text) return reply(`Usage: /setwelcome <text>`);
      gsSet(chatId, { welcome_text: text, welcome_on: 1 });
      return reply(`✅ Welcome set: ${text}`);
    }

    if (command === "setgoodbye") {
      const text = args.join(" ").trim();
      if (!text) return reply(`Usage: /setgoodbye <text>`);
      gsSet(chatId, { goodbye_text: text, goodbye_on: 1 });
      return reply(`✅ Goodbye set: ${text}`);
    }

    if (command === "cleanwelcome") {
      const on = args[0]?.toLowerCase() === "on";
      gsSet(chatId, { clean_welcome: on ? 1 : 0 });
      return reply(`✅ Clean welcome: *${on ? "On" : "Off"}*`);
    }

    if (command === "cleangoodbye") {
      const on = args[0]?.toLowerCase() === "on";
      gsSet(chatId, { clean_goodbye: on ? 1 : 0 });
      return reply(`✅ Clean goodbye: *${on ? "On" : "Off"}*`);
    }

    // ── GATE ──────────────────────────────────────────────────────────────────
    if (command === "gate" || command === "gatelock") {
      const sub = (args[0] || "").toLowerCase();
      if (sub === "on")  { gsSet(chatId, { gatelock: 1 }); return reply("🔐 Gate verification enabled."); }
      if (sub === "off") { gsSet(chatId, { gatelock: 0 }); return reply("🔓 Gate verification disabled."); }
      return reply([
        `🔐 *Gate Verification*`,``,
        `Status: ${gs.gatelock ? "✅ On" : "❌ Off"}`,
        `Type: ${gs.gatetype || "button"}`,
        `Hold time: ${gs.gateholdtime}s`,
        `Auto-kick: ${gs.gatekick ? "✅ Yes" : "❌ No"}`,``,
        `${prefix}gate on/off`,
        `${prefix}gatetype <button|math|text>`,
        `${prefix}gatetext <custom text>`,
        `${prefix}gateholdtime <seconds>`,
        `${prefix}gatekick on/off`
      ].join("\n"));
    }

    if (command === "gatetype") {
      const t = (args[0] || "").toLowerCase();
      if (!["button","math","text"].includes(t)) return reply("Usage: /gatetype <button|math|text>");
      gsSet(chatId, { gatetype: t });
      return reply(`✅ Gate type: *${t}*`);
    }

    if (command === "gatetext") {
      const text = args.join(" ").trim();
      if (!text) return reply("Usage: /gatetext <custom verification message>");
      gsSet(chatId, { gatetext: text });
      return reply(`✅ Gate text set.`);
    }

    if (command === "gatekick") {
      const on = args[0]?.toLowerCase() === "on";
      gsSet(chatId, { gatekick: on ? 1 : 0 });
      return reply(`✅ Gate auto-kick: *${on ? "On" : "Off"}*`);
    }

    if (command === "gateholdtime") {
      const secs = parseInt(args[0] || "300");
      gsSet(chatId, { gateholdtime: secs });
      return reply(`✅ Gate hold time: *${secs} seconds*`);
    }
  }
};
