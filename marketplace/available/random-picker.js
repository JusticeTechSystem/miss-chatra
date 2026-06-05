// @marketplace random-picker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "RandomPicker", category: "tools",
  desc: "Pick random items from a list",
  command: ["pick", "randompick", "chooser", "randomchoice", "pickaname"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    if(!args.length) return reply("Usage: "+pfx+"pick item1 item2 item3\nExample: "+pfx+"pick Pizza Burger Pasta Suya\nExample: "+pfx+"pickaname @user1 @user2 @user3");
    const items=args.filter(a=>!a.startsWith("@")||mentionedJid?.length);
    const mentions=mentionedJid||[];
    if(mentions.length>0){
      const winner=mentions[Math.floor(Math.random()*mentions.length)];
      const num=winner.split("@")[0].split(":")[0];
      return reply("🎲 *Random Pick*\n\n👥 Choosing from "+mentions.length+" people...\n\n🏆 *@"+num+" is picked!*",{mentions:[winner]});
    }
    if(!items.length) return reply("Provide items to pick from: "+pfx+"pick A B C D");
    const picked=items[Math.floor(Math.random()*items.length)];
    return reply("🎲 *Random Pick*\n\n📋 Options: "+items.join(", ")+"\n\n🏆 *"+picked+" is picked!*");
  }
};
