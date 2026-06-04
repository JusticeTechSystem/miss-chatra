// @marketplace islamic-calendar v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "IslamicCalendar", category: "spiritual", desc: "Islamic calendar and important dates",
  command: ["islamiccal","hijri","islamicdate","muslimcal"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const MONTHS=['Muharram','Safar','Rabi al-Awwal','Rabi al-Thani','Jumada al-Awwal','Jumada al-Thani','Rajab','Shaban','Ramadan','Shawwal','Dhu al-Qadah','Dhu al-Hijjah'];
    const EVENTS=['1 Muharram - Islamic New Year','10 Muharram - Day of Ashura','12 Rabi al-Awwal - Mawlid (Prophet Birthday)','27 Rajab - Isra wal Miraj (Night Journey)','1 Ramadan - Start of Ramadan','27 Ramadan - Laylat al-Qadr (Night of Power)','1 Shawwal - Eid al-Fitr','9 Dhu al-Hijjah - Day of Arafah','10 Dhu al-Hijjah - Eid al-Adha'];
    return reply("Islamic Calendar\n\nHijri Months:\n"+MONTHS.map((m,i)=>(i+1)+". "+m).join("\n")+"\n\nKey Dates:\n"+EVENTS.map((e,i)=>(i+1)+". "+e).join("\n"));
  }
};
