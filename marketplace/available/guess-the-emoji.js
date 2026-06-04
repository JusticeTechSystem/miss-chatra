// @marketplace guess-the-emoji v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "GuessEmoji", category: "games", desc: "Guess the word from emojis",
  command: ["guessemoji","emojipuzzle","emojiguess"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const PUZZLES=[{emojis:'🦁👑',answer:'lion king'},{emojis:'🕷️🕸️',answer:'spider'},{emojis:'🍕🍕🍕',answer:'pizza party'},{emojis:'📚🔬👨‍🔬',answer:'scientist'},{emojis:'🌍✈️🏖️',answer:'travel'},{emojis:'🎵🎸🎤',answer:'rock music'},{emojis:'🐝🏠',answer:'beehive'},{emojis:'💰🏦💳',answer:'banking'},{emojis:'🌙⭐😴',answer:'sleep'},{emojis:'🐍🍎',answer:'temptation'},{emojis:'🔑🚪🏠',answer:'home'},{ emojis:'🌹❤️💏',answer:'romance'}];
    const G=global.__ge=global.__ge||{};const key=chatId+'_ge';
    const p=PUZZLES[Math.floor(Math.random()*PUZZLES.length)];G[key]={answer:p.answer};
    return reply("Guess the Emoji!\n\n"+p.emojis+"\n\nWhat does this represent?\n/guessemoji for a new puzzle");
  }
};
