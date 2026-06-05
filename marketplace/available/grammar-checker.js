// @marketplace grammar-checker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "GrammarHelper", category: "education",
  desc: "Grammar rules and language tips",
  command: ["grammar", "grammarcheck", "spelling", "englishhelp"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const TIPS={"its vs it\'s":"Use \'it\'s\' = it is/it has. Use \'its\' = belonging to it.\nExample: It\'s raining. The dog wagged its tail.","your vs you\'re":"Use \'you\'re\' = you are. Use \'your\' = belonging to you.\nExample: You\'re late. Is that your bag?","there vs their vs they\'re":"there = place, their = belonging to them, they\'re = they are.","affect vs effect":"Affect (verb) = to influence. Effect (noun) = the result.","then vs than":"Then = time sequence. Than = comparison.","fewer vs less":"Fewer = countable things. Less = uncountable.\nFewer apples. Less water.","i before e":"I before E except after C, or when sounded like A.","passive voice":"Avoid: 'The report was written by me.' Use: 'I wrote the report.'","run-on sentence":"Separate two complete thoughts with a period or semicolon.","comma splice":"Don\'t join sentences with just a comma. Use a semicolon or period."};
    const query=args.join(" ").toLowerCase();
    if(!query) return reply("📚 *Grammar Helper*\n\nTopics:\n"+Object.keys(TIPS).map(k=>"  • "+k).join("\n")+"\n\n"+pfx+"grammar its vs it\'s — for explanation");
    const match=Object.entries(TIPS).find(([k])=>query.includes(k.split(" ")[0])||k.includes(query));
    if(match) return reply("📝 *Grammar Rule: "+match[0]+"*\n\n"+match[1]);
    return reply("Grammar tip not found for: "+query+"\n\n"+pfx+"grammar its vs it\'s\n"+pfx+"grammar your vs you\'re\n"+pfx+"grammar affect vs effect");
  }
};
