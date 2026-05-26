// @marketplace yoruba-calendar v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "YorubaCalendar", category: "nigerian", desc: "Yoruba calendar and cultural dates",
  command: ["yorubacal","yorubadate","naijaweek"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const DAYS=['Ose (Ojo Aiku) - Sunday - Rest day','Ojo Aje - Monday - Day of the god of trade','Ojo Isegun - Tuesday - Day of victory','Ojo Ruiru - Wednesday - Day of the god Ogun','Ojo Boda - Thursday - Day of creation','Ojo Eti - Friday - Day of the god Shango','Ojo Abameta - Saturday - Day of three crossroads'];
    const today=new Date().getDay();
    return reply("Yoruba Calendar\n\nToday ("+new Date().toLocaleDateString('en-US',{weekday:'long'})+"):\n"+DAYS[today]+"\n\nAll Yoruba Days:\n"+DAYS.map((d,i)=>(i+1)+". "+d).join("\n"));
  }
};
