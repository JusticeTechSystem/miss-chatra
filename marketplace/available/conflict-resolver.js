// @marketplace conflict-resolver v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ConflictResolver", category: "social", desc: "Tips for resolving conflicts peacefully",
  command: ["conflict","resolve","mediate","peacemaker"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const TIPS=['Before reacting, breathe and count to 10. Most arguments escalate from initial reactions.','Listen to understand, not to respond. Repeat back what you heard to confirm.','Use I-statements: say how YOU feel, not what THEY did wrong.','Attack the problem, not the person. You are on the same team.','Find common ground first - what do both parties agree on?','Take a break if emotions are too high. Come back when calm.','Avoid absolute language: never say "always" or "never".','Apologize specifically: not just "sorry" but "sorry for saying/doing..."','Ask: what would make this right? Not just what went wrong.','Remember the relationship is more important than being right.'];
    const tip=TIPS[Math.floor(Math.random()*TIPS.length)];
    return reply("Conflict Resolution Tip\n\n"+tip+"\n\nPeaceful resolution is always possible with patience and respect.\n/resolve for another tip");
  }
};
