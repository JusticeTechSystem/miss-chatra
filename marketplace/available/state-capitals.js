// @marketplace state-capitals v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "NigeriaStates", category: "nigerian", desc: "Nigeria states and capital cities",
  command: ["stateinfo","nigstates","statecapital"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const STATES={'Abia':'Umuahia','Adamawa':'Yola','Akwa Ibom':'Uyo','Anambra':'Awka','Bauchi':'Bauchi','Bayelsa':'Yenagoa','Benue':'Makurdi','Borno':'Maiduguri','Cross River':'Calabar','Delta':'Asaba','Ebonyi':'Abakaliki','Edo':'Benin City','Ekiti':'Ado Ekiti','Enugu':'Enugu','FCT':'Abuja','Gombe':'Gombe','Imo':'Owerri','Jigawa':'Dutse','Kaduna':'Kaduna','Kano':'Kano','Katsina':'Katsina','Kebbi':'Birnin Kebbi','Kogi':'Lokoja','Kwara':'Ilorin','Lagos':'Ikeja','Nasarawa':'Lafia','Niger':'Minna','Ogun':'Abeokuta','Ondo':'Akure','Osun':'Osogbo','Oyo':'Ibadan','Plateau':'Jos','Rivers':'Port Harcourt','Sokoto':'Sokoto','Taraba':'Jalingo','Yobe':'Damaturu','Zamfara':'Gusau'};
    const query=(args[0]||'').toLowerCase();
    if(query){
      const match=Object.entries(STATES).find(([s,c])=>s.toLowerCase().includes(query)||c.toLowerCase().includes(query));
      if(match) return reply("State: "+match[0]+"\nCapital: "+match[1]);
      return reply("State not found. Try: "+pfx+"statecapital Lagos");
    }
    const sample=Object.entries(STATES).slice(0,10);
    return reply("Nigeria - 36 States + FCT\n\n"+sample.map(([s,c])=>s+": "+c).join("\n")+"\n...and more\n\n"+pfx+"stateinfo Lagos — get specific state");
  }
};
