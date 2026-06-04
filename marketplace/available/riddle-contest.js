// @marketplace riddle-contest v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "RiddleContest", category: "games", desc: "Group riddle competition with points",
  command: ["riddlecontest","riddlebattle","riddlepoints"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const RIDDLES=[{r:"I have cities but no houses live there. I have mountains but no trees grow. I have water but no fish swim. What am I?",a:"map"},{r:"The more you take, the more you leave behind. What am I?",a:"footsteps"},{r:"I speak without a mouth and hear without ears. I have nobody but come alive with wind. What am I?",a:"echo"},{r:"I have hands but cannot clap. What am I?",a:"clock"},{r:"What has keys but no locks, space but no room, and you can enter but cannot go inside?",a:"keyboard"},{r:"What gets wetter the more it dries?",a:"towel"},{r:"What has to be broken before you can use it?",a:"egg"},{r:"I am not alive but I grow. I do not have lungs but I need air. What am I?",a:"fire"}];
    const G=global.__rc=global.__rc||{};const key=chatId+'_rc';
    const r=RIDDLES[Math.floor(Math.random()*RIDDLES.length)];G[key]={answer:r.a};
    return reply("Riddle Contest!\n\n"+r.r+"\n\nFirst correct answer wins!\n/riddlecontest for a new riddle");
  }
};
