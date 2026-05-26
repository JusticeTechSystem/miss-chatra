// @marketplace relationship-advice v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "RelationshipAdvice", category: "social",
  desc: "Get relationship tips and communication advice",
  command: ["relationship", "loveadvice", "coupleadvice", "datingtip"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const TIPS={communication:["Listen to understand, not just to respond.","Never say \'you always\' or \'you never\' — it puts people on the defensive.","Pick the right time for important conversations — never when tired or hungry.","Use I-statements: \'I feel\'... not \'you make me feel\'.","Put your phone down when someone is talking to you."],trust:["Trust is built in drops and lost in buckets. Guard it carefully.","Transparency isn\'t about sharing everything — it\'s about not hiding what matters.","If you say you\'ll do something, do it. Reliability builds trust.","Address issues directly with the person, not with others.","Insecurity is not your partner\'s responsibility to fix. Work on yourself."],love:["Love is a verb, not just a feeling. Show it daily.","Celebrate each other\'s wins genuinely.","Grow together, not just alongside each other.","Say thank you for the small things.","Make time for each other even when life is busy."],conflict:["You\'re on the same team. You\'re not fighting each other, you\'re fighting the problem.","Take a 20-minute break when emotions run high.","Apologize with specifics: \'I\'m sorry I... because it made you feel...\'","Forgiveness is for you, not for them.","Some fights don\'t need to be won — just resolved."]};
    const topic=(args[0]||"communication").toLowerCase();
    const list=TIPS[topic]||TIPS.communication;
    const tip=list[Math.floor(Math.random()*list.length)];
    return reply("💕 *Relationship Tip*\n\n💬 "+tip+"\n\n_Topics: communication, trust, love, conflict_\n_"+pfx+"relationship <topic>_");
  }
};
