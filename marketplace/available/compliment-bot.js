// @marketplace compliment-bot v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ComplimentBot", category: "social",
  desc: "Send encouraging compliments to group members",
  command: ["compliment", "praise", "encourage", "cheer"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const COMPLIMENTS=["You bring so much energy and positivity to this group! 🌟","Your ideas always make us think differently. Keep them coming! 💡","You have a gift for making everyone feel welcome. 🤗","The way you explain things is truly impressive! 📚","Your commitment and dedication inspire everyone here! 💪","You have an amazing ability to bring people together. 🙏","Your sense of humor brightens everyone\'s day! 😄","The world is genuinely better because you\'re in it! ✨","Your kindness doesn\'t go unnoticed. Thank you! 💚","You\'re stronger than you know and braver than you feel! 🦁","Your passion and enthusiasm are absolutely contagious! 🔥","You make hard things look easy. That\'s real talent! 🎯","Never stop being you — you\'re exactly what this group needs! 💫","Your presence here genuinely makes a difference! 🌈","You\'re one of those people who makes everything better! ⭐"];
    const target=mentionedJid?.[0];
    const compliment=COMPLIMENTS[Math.floor(Math.random()*COMPLIMENTS.length)];
    if(target){
      const num=target.split("@")[0].split(":")[0];
      return reply("💌 @"+num+"\n\n"+compliment,{mentions:[target]});
    }
    return reply("💌 *For "+( m?.pushName||"you")+"*\n\n"+compliment);
  }
};
