// @marketplace text-formatter v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "TextFormatter", category: "tools",
  desc: "Format text in different styles",
  command: ["textformat", "bold2", "italic2", "caps", "lowercase", "titlecase", "reverse"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const text=args.join(" ");
    if(!text) return reply("📝 *Text Formatter*\n\n"+pfx+"caps Hello World → HELLO WORLD\n"+pfx+"lowercase HELLO → hello\n"+pfx+"titlecase hello world → Hello World\n"+pfx+"reverse Hello → olleH");
    if(command==="caps") return reply("FORMATTED: "+text.toUpperCase());
    if(command==="lowercase") return reply("formatted: "+text.toLowerCase());
    if(command==="titlecase"||command==="textformat") return reply("Formatted: "+text.split(" ").map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(" "));
    if(command==="reverse") return reply("Reversed: "+text.split("").reverse().join(""));
    if(command==="bold2") return reply("*"+text+"*");
    if(command==="italic2") return reply("_"+text+"_");
    return reply("📝 "+text);
  }
};
