// @marketplace group-challenge v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "GroupChallenge", category: "social", desc: "30-day group challenges",
  command: ["30daychallenge","groupgoal","doitogether","monthchallenge"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const CHALLENGES=[{name:'No Complaining',desc:'For 30 days, every time you catch yourself complaining, replace it with a positive statement.',check:'Did you catch yourself today? What did you replace it with?'},{name:'Daily Reading',desc:'Read at least 10 pages of any book every day for 30 days.',check:'What did you read today and what did you learn?'},{name:'No Social Media After 10pm',desc:'Switch off all social media at 10pm for 30 days. Notice the difference in sleep.',check:'How did it go? Any difference in your sleep or mornings?'},{name:'One New Thing Daily',desc:'Learn, cook, visit, or try one new thing every single day for 30 days.',check:'What new thing did you try today?'},{name:'Gratitude Practice',desc:'Write 3 things you are grateful for every morning for 30 days.',check:'Share your 3 gratitude items for today!'}];
    const c=CHALLENGES[Math.floor(Math.random()*CHALLENGES.length)];
    return reply("30-Day Group Challenge!\n\n"+c.name+"\n\n"+c.desc+"\n\nCheck-in question:\n"+c.check+"\n\nWho's in? Reply with YES to commit!\n/30daychallenge for another challenge");
  }
};
