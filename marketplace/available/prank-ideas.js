// @marketplace prank-ideas v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "PrankIdeas", category: "entertainment", desc: "Fun harmless prank ideas",
  command: ["prank","prankidea","harmlessprank"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const PRANKS=["Put googly eyes on everything in the fridge.","Change someone's phone language to a language they don't know.","Set someone's desktop background to a screenshot of their desktop.","Replace a family photo with a photo of Nicolas Cage.","Put a paper clip on every item in someone's desk.","Change the autocorrect on their phone to change 'okay' to 'I love you'.","Wrap everything in their room with gift wrap.","Put tape under their computer mouse sensor.","Set their alarm to go off every 5 minutes.","Change their phone contact names to emoji only."];
    return reply("Harmless Prank Idea!\n\n"+PRANKS[Math.floor(Math.random()*PRANKS.length)]+"\n\nRemember: only prank people you know will laugh!\n/prank for another idea");
  }
};
