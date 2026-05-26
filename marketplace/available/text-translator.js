// @marketplace text-translator v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "TextTranslator", category: "tools",
  desc: "Translate text between languages",
  command: ["translate", "tr", "lang2", "translatetext"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const axios=require("axios");
    const to=(args[0]||"en").toLowerCase();
    const text=args.slice(1).join(" ");
    if(!text) return reply("Usage: "+pfx+"translate <to_lang> <text>\nExample: "+pfx+"translate yo Hello how are you\n\nLang codes: en=English, yo=Yoruba, fr=French, es=Spanish, ar=Arabic, zh=Chinese, pt=Portuguese");
    try{
      const r=await axios.get("https://translate.googleapis.com/translate_a/single",{
        params:{client:"gtx",sl:"auto",tl:to,dt:"t",q:text},timeout:10000
      });
      const translated=r.data?.[0]?.[0]?.[0];
      if(translated) return reply("🌍 *Translation*\n\n📝 Original: "+text+"\n\n✅ Translated ("+to+"):\n*"+translated+"*");
    }catch{}
    return reply("❌ Translation failed. Check language code and try again.\n\nPopular codes: en, fr, es, ar, yo, ig, ha, pt, zh, de, it, ru");
  }
};
