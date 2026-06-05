// @marketplace self-care-checklist v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "SelfCareChecklist", category: "lifestyle", desc: "Daily self-care checklist",
  command: ["selfcare","selfcarecheck","careroutine"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const CHECKLIST={physical:['Drank 8 glasses of water','Got 7-8 hours of sleep','Ate nutritious meals','Moved my body (any exercise)','Personal hygiene completed'],mental:['Had quiet/alone time','Limited social media use','Practiced gratitude','Did something creative or enjoyable','Took breaks when needed'],social:['Connected with someone I care about','Set and respected a boundary','Asked for help when needed','Supported someone else']};
    const cat=(args[0]||'physical').toLowerCase();
    const items=CHECKLIST[cat]||CHECKLIST.physical;
    return reply("Self-Care Checklist ("+cat+")\n\n"+items.map((x,i)=>"[ ] "+x).join("\n")+"\n\nCheck each off mentally as you complete it.\n\nCategories: physical, mental, social");
  }
};
