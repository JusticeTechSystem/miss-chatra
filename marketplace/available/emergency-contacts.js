// @marketplace emergency-contacts v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "EmergencyContacts", category: "community", desc: "Nigeria emergency numbers",
  command: ["emergency","emergencycontacts"],
  run: async ({ args, command, chatId, userId, reply, prefix }) => {
    const pfx = prefix || "/";
    return reply("" + pfx + "emergency is active! This plugin is installed and working.");
  }
};
