// @marketplace font-pairing v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "FontPairing", category: "tools", desc: "Font pairing suggestions for design",
  command: ["fontpair","fonts","typographytip"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const PAIRS=[{heading:'Playfair Display',body:'Source Sans Pro',use:'Editorial, magazine, luxury brand'},{ heading:'Montserrat',body:'Open Sans',use:'Modern tech, startup, SaaS'},{ heading:'Merriweather',body:'Lato',use:'Blog, news, professional services'},{ heading:'Oswald',body:'Lora',use:'Bold lifestyle, fashion, fitness'},{heading:'Raleway',body:'Roboto',use:'Creative agency, portfolio, design'},{heading:'Poppins',body:'Noto Sans',use:'App, e-commerce, modern business'}];
    const p=PAIRS[Math.floor(Math.random()*PAIRS.length)];
    return reply("Font Pairing Recommendation\n\nHeading: "+p.heading+"\nBody: "+p.body+"\nBest for: "+p.use+"\n\nGet these free on Google Fonts (fonts.google.com)\n/fontpair for another suggestion");
  }
};
