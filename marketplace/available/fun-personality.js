// @marketplace fun-personality v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "FunPersonality", category: "entertainment", desc: "Hilarious personality results based on random traits",
  command: ["funnypersonality","whattype","myquirk"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const TYPES=["You are the one who always orders the same thing at restaurants because why risk a bad meal when you found perfection?","You are the friend who says 'I'll be ready in 5 minutes' but actually needs 45.","You are the person who starts watching 'just one episode' and emerges 6 hours later slightly ashamed.","You are the type who reads the last page of a book first. No regrets.","You are the one who sends voice notes that are longer than most movies.","You are the person who always has snacks. Always. People love you for this.","You are the one who remembers lyrics to a song from 2003 but forgets where you put your keys.","You are the friend who gives the best advice but never follows it yourself.","You are the person who laughs at your own jokes before finishing them.","You are the one who plans everything in detail then completely ignores the plan."];
    return reply("Your Personality Type!\n\n"+TYPES[Math.floor(Math.random()*TYPES.length)]+"\n\n/funnypersonality for another type!");
  }
};
