// @marketplace regex-tester v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "RegexTester", category: "tools", desc: "Test regular expressions",
  command: ["regex","testregex","regextest"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const pattern=args[0],text=args.slice(1).join(' ');
    if(!pattern||!text) return reply("Usage: "+pfx+"regex <pattern> <test text>\nExample: "+pfx+"regex \\d+ Call me on 08012345678\nCommon patterns:\n\\d+ = numbers\n[A-Z]+ = uppercase\n\\w+ = words\n.+ = any character");
    try{
      const regex=new RegExp(pattern,'g');
      const matches=[...text.matchAll(regex)].map(m=>m[0]);
      return reply("Regex Test\n\nPattern: /"+pattern+"/\nText: "+text+"\n\n"+( matches.length?"Matches found ("+matches.length+"):\n"+matches.join(', '):"No matches found"));
    }catch(e){return reply("Invalid regex pattern: "+e.message);}  
  }
};
