// @marketplace fashion-calendar v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "FashionCalendar", category: "lifestyle", desc: "Nigerian fashion calendar and events",
  command: ["fashioncal","styleevents","fashionweek"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const EVENTS=['Lagos Fashion Week (Oct/Nov) - Eko Hotel','Arise Fashion Week (June) - Lagos','African Fashion Week Nigeria (June) - Abuja','Ejiro Amos Tafiri Annual Show','Head to Toe Fashion Show','GTBank Fashion Weekend (October)','Vogue Fashion Night Out Lagos','The Experience Fashion Showcase'];
    return reply("Nigerian Fashion Events\n\n"+EVENTS.map((e,i)=>(i+1)+". "+e).join("\n")+"\n\nFollow these on Instagram for dates:\n@lagosfashionweek\n@arisefashionweek\n@nativeofficial");
  }
};
