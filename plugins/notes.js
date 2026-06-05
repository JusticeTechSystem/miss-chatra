// plugins/notes.js — Miss Chatra Notes & Filters
"use strict";

const { noteSave, noteGet, noteDelete, noteList, notesClearAll,
        filtSave, filtDelete, filtList, gsGet } = require("../library/db");
const config = require("../settings/config");

module.exports = {
  name: "Notes",
  category: "notes",
  desc: "Saveable group notes and auto-reply filters",
  command: ["save","note","notes","get","delnote","clearnotes",
            "filter","filters","stopfilter","clearfilters"],
  ownerOnly: false,

  run: async ({ sock, m, args, command, chatId, userId, reply, isAdmin, isOwner, isDev, quotedMsg, prefix }) => {

    if (!chatId.endsWith("@g.us")) return reply(config.message.group);
    const adminOnly = () => { if (!isAdmin && !isOwner && !isDev) { reply(config.message.admin); return true; } return false; };

    // ═══════════════════════════════════════════════════════════════════════
    // SAVE / ADD NOTE
    // ═══════════════════════════════════════════════════════════════════════
    if (command === "save" || command === "note") {
      if (adminOnly()) return;
      const name = (args[0] || "").toLowerCase().trim();
      const content = quotedMsg?.body || args.slice(1).join(" ").trim();
      if (!name) return reply(`Usage: /save <name> <content>\nOr reply to a message: .save <name>`);
      if (!content) return reply(`Please provide content or reply to a message.\nUsage: /save ${name} <content>`);
      noteSave(chatId, name, content);
      return reply(`✅ Note *${name}* saved!\n\nRetrieve with: .get ${name}`);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // GET NOTE
    // ═══════════════════════════════════════════════════════════════════════
    if (command === "get") {
      const name = (args[0] || "").toLowerCase().trim();
      if (!name) return reply(`Usage: /get <note name>`);
      const content = noteGet(chatId, name);
      if (!content) return reply(`❌ Note *${name}* not found.\n\nSee all notes: .notes`);
      const gs = gsGet(chatId);
      if (gs.privatenotes) {
        try {
          await sock.sendMessage(userId, { text: `📝 *Note: ${name}*\n\n${content}` });
          return reply(`📨 Sent you the note privately.`);
        } catch {
          return reply(`📝 *Note: ${name}*\n\n${content}`);
        }
      }
      return reply(`📝 *Note: ${name}*\n\n${content}`);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // LIST NOTES
    // ═══════════════════════════════════════════════════════════════════════
    if (command === "notes") {
      const list = noteList(chatId);
      if (!list.length) return reply(`📝 No notes saved yet.\n\nUse .save <name> <content> to add one.`);
      const lines = [`📝 *Saved Notes (${list.length})*\n`];
      for (const n of list) lines.push(`• ${n} — .get ${n}`);
      return reply(lines.join("\n"));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // DELETE NOTE
    // ═══════════════════════════════════════════════════════════════════════
    if (command === "delnote") {
      if (adminOnly()) return;
      const name = (args[0] || "").toLowerCase().trim();
      if (!name) return reply(`Usage: /delnote <note name>`);
      noteDelete(chatId, name);
      return reply(`✅ Note *${name}* deleted.`);
    }

    if (command === "clearnotes") {
      if (adminOnly()) return;
      notesClearAll(chatId);
      return reply("✅ All notes cleared.");
    }

    // ═══════════════════════════════════════════════════════════════════════
    // FILTER (auto-reply trigger)
    // ═══════════════════════════════════════════════════════════════════════
    if (command === "filter") {
      if (adminOnly()) return;
      const keyword = (args[0] || "").toLowerCase().trim();
      const response = args.slice(1).join(" ").trim() || quotedMsg?.body;
      if (!keyword || !response) return reply(`Usage: /filter <keyword> <response>\n\nExample: /filter hello Hi there! 👋`);
      filtSave(chatId, keyword, response);
      return reply(`✅ Filter added!\n\nKeyword: *${keyword}*\nWhenever someone says this, I'll reply with your message.`);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // LIST FILTERS
    // ═══════════════════════════════════════════════════════════════════════
    if (command === "filters") {
      const list = filtList(chatId);
      if (!list.length) return reply(`🔁 No filters set.\n\nUse .filter <keyword> <response>`);
      const lines = [`🔁 *Active Filters (${list.length})*\n`];
      for (const t of list) lines.push(`• ${t}`);
      lines.push(`\nRemove with: .stopfilter <keyword>`);
      return reply(lines.join("\n"));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // STOP FILTER
    // ═══════════════════════════════════════════════════════════════════════
    if (command === "stopfilter") {
      if (adminOnly()) return;
      const keyword = (args[0] || "").toLowerCase().trim();
      if (!keyword) return reply(`Usage: /stopfilter <keyword>`);
      filtDelete(chatId, keyword);
      return reply(`✅ Filter *${keyword}* removed.`);
    }

    if (command === "clearfilters") {
      if (adminOnly()) return;
      const { db } = require("../library/db");
      db().prepare("DELETE FROM filters WHERE chat_id=?").run(chatId);
      return reply("✅ All filters cleared.");
    }
  }
};
