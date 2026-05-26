// @marketplace character-counter v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CharCounter", category: "tools",
  desc: "Count characters, words, sentences in text",
  command: ["charcount", "wordcount", "textcount", "countwords", "textanalyze"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const text=args.join(" ");
    if(!text) return reply("Usage: "+pfx+"wordcount <your text>\nExample: "+pfx+"wordcount The quick brown fox jumps");
    const chars=text.length;
    const charsNoSpace=text.replace(/\s/g,"").length;
    const words=text.trim().split(/\s+/).filter(w=>w).length;
    const sentences=text.split(/[.!?]+/).filter(s=>s.trim()).length;
    const paragraphs=text.split(/\n+/).filter(p=>p.trim()).length;
    const avgWordLen=(charsNoSpace/words).toFixed(1);
    const readTime=Math.ceil(words/200);
    return reply("📊 *Text Analysis*\n\n📝 Characters: "+chars+"\n🔤 Characters (no spaces): "+charsNoSpace+"\n🔤 Words: "+words+"\n📄 Sentences: "+sentences+"\n📑 Paragraphs: "+paragraphs+"\n📏 Avg word length: "+avgWordLen+" chars\n⏱️ Read time: ~"+readTime+" min(s)");
  }
};
