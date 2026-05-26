// @marketplace json-formatter v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "JSONFormatter", category: "tools", desc: "Format and validate JSON",
  command: ["jsonformat","validatejson","prettyjson"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const input=args.join(' ');
    if(!input) return reply("Usage: "+pfx+"jsonformat <json>\nExample: "+pfx+'jsonformat {"name":"John","age":30}');
    try{
      const parsed=JSON.parse(input);
      const formatted=JSON.stringify(parsed,null,2);
      const keys=Object.keys(parsed).length;
      return reply("Valid JSON!\n\nKeys: "+keys+"\nFormatted:\n"+formatted.slice(0,500)+(formatted.length>500?"\n...(truncated)":""));
    }catch(e){return reply("Invalid JSON!\n\nError: "+e.message+"\n\nMake sure:\n- All keys are quoted\n- No trailing commas\n- Proper brackets");}
  }
};
