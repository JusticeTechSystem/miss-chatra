// @marketplace debate-topics v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "DebateTopics", category: "entertainment", desc: "Debate topics for groups",
  command: ["debate","debatetopic","argueon","groupdebate"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const TOPICS=["Pineapple belongs on pizza","Working from home is more productive than office work","Social media does more harm than good","Money can buy happiness","Lagos is better than Abuja","Jollof rice: Nigeria vs Ghana","Being an entrepreneur is better than working a 9-5","Private schools are better than public schools","Technology is making humans lazy","Nollywood is better than Hollywood for African stories","University education is overrated","It is better to rent than to buy property in Nigeria"];
    return reply("Debate Topic!\n\n"+TOPICS[Math.floor(Math.random()*TOPICS.length)]+"\n\nPick your side and defend it!\nLet everyone share their position.\n\n/debate for a new topic");
  }
};
