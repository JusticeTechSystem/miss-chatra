// @marketplace zip-code v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ZipCodeInfo", category: "tools", desc: "Nigerian area code and zip code info",
  command: ["zipcode","areacode","postalcode"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const CODES={'Lagos Island':'101001','Victoria Island':'101241','Ikeja':'100001','Lekki':'105102','Surulere':'100004','Yaba':'101212','Abuja':'900001','Garki':'900102','Wuse':'900271','Maitama':'900231','Gwarinpa':'900108','Port Harcourt':'500001','Kano':'700001','Ibadan':'200001','Enugu':'400001','Benin City':'300001','Calabar':'540001','Warri':'330001','Aba':'450001','Owerri':'460001'};
    const query=(args.join(' ')||'').replace(/^./,c=>c.toUpperCase());
    const match=Object.entries(CODES).find(([place])=>place.toLowerCase().includes(query.toLowerCase()));
    if(match) return reply("Area: "+match[0]+"\nPostal Code: "+match[1]);
    return reply("Nigerian Postal Codes\n\n"+Object.entries(CODES).slice(0,8).map(([p,c])=>p+": "+c).join("\n")+"\n\n"+pfx+"zipcode Lagos Island");
  }
};
