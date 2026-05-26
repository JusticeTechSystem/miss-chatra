// @marketplace prayer-guide v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "PrayerGuide", category: "spiritual", desc: "Guide to daily prayers and spiritual practices",
  command: ["prayerguide","howto pray","dailyprayer","pray"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const GUIDES={salah:['Fajr (Dawn): 2 rakaat - before sunrise','Dhuhr (Noon): 4 rakaat - after midday','Asr (Afternoon): 4 rakaat - late afternoon','Maghrib (Sunset): 3 rakaat - after sunset','Isha (Night): 4 rakaat - at night','Perform ablution (wudu) before each prayer','Face the Qibla (direction of Mecca)','Prayer is one of the 5 Pillars of Islam'],christian:['Morning prayer - start the day with God','Scripture reading - nourish your soul daily','Midday prayer - reconnect during the day','Evening prayer - gratitude and reflection','Pray without ceasing (1 Thessalonians 5:17)','Use the ACTS model: Adoration, Confession, Thanksgiving, Supplication','Fast regularly to deepen spiritual life']};
    const type=(args[0]||'christian').toLowerCase();
    const guide=GUIDES[type]||GUIDES.christian;
    return reply("Prayer Guide ("+type+")\n\n"+guide.map((g,i)=>(i+1)+". "+g).join("\n")+"\n\nTypes: salah, christian");
  }
};
