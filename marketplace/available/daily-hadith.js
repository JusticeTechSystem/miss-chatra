// @marketplace daily-hadith v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "DailyHadith", category: "spiritual", desc: "Daily Hadith and Islamic wisdom",
  command: ["hadith","islamicwisdom","dailyhadith","prophetwords"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const HADITHS=[{text:'Actions are judged by their intentions.',source:'Bukhari & Muslim'},{text:'The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.',source:'Bukhari'},{text:'Cleanliness is half of faith.',source:'Muslim'},{text:'None of you truly believes until he loves for his brother what he loves for himself.',source:'Bukhari & Muslim'},{text:'The best of people are those who are most beneficial to people.',source:'Tabarani'},{text:'Make things easy and do not make them difficult.',source:'Bukhari'},{text:'A kind word is a form of charity.',source:'Bukhari'},{text:'Whoever believes in Allah and the Last Day, let him speak good or remain silent.',source:'Bukhari & Muslim'}];
    const h=HADITHS[Math.floor(Math.random()*HADITHS.length)];
    return reply("Daily Hadith\n\nThe Prophet (SAW) said:\n\n"+h.text+"\n\nSource: "+h.source+"\n\nMay Allah grant us wisdom to live by this. Ameen.");
  }
};
