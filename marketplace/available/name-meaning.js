// @marketplace name-meaning v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "NameMeaning", category: "education", desc: "Find the meaning of common names",
  command: ["namemeaning","whatdoesmyname","nameinfo"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const NAMES={'Justice':['English','Righteous, fair',"Famous for: Justice League, Justice Bieber... wait, that's Justin!"],'Faith':['English','Complete trust, belief'],'Grace':['Latin','Elegance, God favor'],'Emmanuel':['Hebrew','God is with us'],'Blessing':['English','Gift from God'],'Precious':['English','Of great value'],'Miracle':['Latin','Marvel, wonder'],'Gift':['English','A special thing given'],'Wisdom':['English','Knowledge and good judgment'],'Victor':['Latin','Winner, conqueror'],'Gloria':['Latin','Glory, praise'],'Divine':['English','Of God'],'Israel':['Hebrew','He who struggles with God'],'Joseph':['Hebrew','God will increase'],'Mary':['Hebrew','Beloved, wished for child']};
    const name=args.join(' ').replace(/^./,c=>c.toUpperCase());
    const info=NAMES[name];
    if(!info) return reply("Name not in database. Known names:\n"+Object.keys(NAMES).join(', ')+"\n\n"+pfx+"namemeaning Justice");
    return reply("Name Meaning: "+name+"\n\nOrigin: "+info[0]+"\nMeaning: "+info[1]+(info[2]?"\n\n"+info[2]:""));
  }
};
