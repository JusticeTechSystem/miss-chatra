// @marketplace daily-verse v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "DailyVerse", category: "spiritual", desc: "Get a random Bible verse for the day",
  command: ["dailyverse","bibleverse","verseofday"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const VERSES=[{ref:'Jeremiah 29:11',text:'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.'},{ ref:'Philippians 4:13',text:'I can do all things through Christ who strengthens me.'},{ref:'Romans 8:28',text:'And we know that in all things God works for the good of those who love him.'},{ref:'Isaiah 40:31',text:'But those who hope in the LORD will renew their strength. They will soar on wings like eagles.'},{ref:'Proverbs 3:5-6',text:'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him and he will make your paths straight.'},{ref:'Matthew 6:33',text:'But seek first his kingdom and his righteousness, and all these things will be given to you as well.'},{ref:'Psalm 23:1',text:'The LORD is my shepherd, I lack nothing.'},{ref:'John 3:16',text:'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.'}];
    const v=VERSES[Math.floor(Math.random()*VERSES.length)];
    return reply("Daily Bible Verse\n\n"+v.ref+"\n\n"+v.text+"\n\nMay this word strengthen you today.");
  }
};
