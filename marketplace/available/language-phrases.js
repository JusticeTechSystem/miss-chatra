// @marketplace language-phrases v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "LanguagePhrases", category: "education", desc: "Common phrases in multiple languages",
  command: ["phrases","sayin","greetings2","multilang"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const PHRASES={french:{'Hello':'Bonjour','Thank you':'Merci','Please':'Sil vous plait','Yes':'Oui','No':'Non','Goodbye':'Au revoir','How are you?':'Comment allez-vous?','I love you':'Je t amour'},spanish:{'Hello':'Hola','Thank you':'Gracias','Please':'Por favor','Yes':'Si','No':'No','Goodbye':'Adios','How are you?':'Como estas?','I love you':'Te quiero'},arabic:{'Hello':'Marhaba','Thank you':'Shukran','Please':'Min fadlak','Yes':'Na am','No':'La','Goodbye':'Ma assalama','How are you?':'Kayfa halak?'}};
    const lang=(args[0]||'french').toLowerCase();
    const data=PHRASES[lang];
    if(!data) return reply("Languages: french, spanish, arabic\n"+pfx+"phrases french");
    return reply(lang.toUpperCase()+" Phrases\n\n"+Object.entries(data).map(([e,t])=>e+" = "+t).join("\n"));
  }
};
