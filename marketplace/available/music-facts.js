// @marketplace music-facts v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MusicFacts", category: "entertainment",
  desc: "Interesting facts about music and artists",
  command: ["musicfact", "musictrivia", "songfact", "artistfact"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const FACTS=["The Beatles sold more records than any other act in history — over 600 million.","Fela Kuti recorded over 77 albums in his lifetime and pioneered Afrobeats.","Mozart could hear a piece of music once and write it down perfectly from memory at age 7.","The most expensive musical instrument ever sold was a Stradivarius violin for $16 million.","Burna Boy is the first Nigerian artist to headline Madison Square Garden.","The world\'s largest orchestra performed in Nigeria — 7,548 musicians in 2022.","Studies show music can reduce pain perception and anxiety.","The human ear can distinguish over 400,000 different sounds.","Wizkid became the first Nigerian to win a Grammy Award in 2021.","The guitar is the most popular instrument in the world with over 50 million players.","A piano has 12,000 parts, 10,000 of which are moving.","Music triggers the same dopamine response as eating food or falling in love.","Davido has sold out stadiums across Africa, Europe and North America.","The longest recorded song is over 13 hours long.","Beethoven was almost completely deaf when he composed his 9th Symphony."];
    return reply("🎵 *Music Fact*\n\n"+FACTS[Math.floor(Math.random()*FACTS.length)]+"\n\n_/musicfact for another!_");
  }
};
