// @marketplace kanban-board v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "KanbanBoard", category: "productivity", desc: "Kanban task board",
  command: ["kanban","addtask2","movetask"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "kanban is active! This plugin is installed and working.");
  }
};
