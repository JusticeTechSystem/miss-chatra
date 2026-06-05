// @marketplace spin-the-bottle v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "SpinBottle", category: "games",
  desc: "Virtual spin the bottle for truth or dare",
  command: ["spinbottle", "spin2", "whospin", "spingame"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const DARES=["Do 10 push-ups right now","Send a voice note singing your favorite song","Change your WhatsApp status to something embarrassing for 1 hour","Share an embarrassing photo in the group","Call someone on your contact list and say \'I miss you\'","Write a poem about the next person who texts you"];
    const TRUTHS=["What\'s the most embarrassing thing that\'s ever happened to you?","Who in this group would you go on a date with?","What\'s your biggest fear?","What\'s the most trouble you\'ve been in?","What\'s a secret you\'ve never told anyone here?","What was your most awkward moment?"];
    if(!isAdmin&&!isOwner&&!isDev){
      const name=m?.pushName||"Someone";
      const type=Math.random()>0.5?"truth":"dare";
      const options=type==="truth"?TRUTHS:DARES;
      const pick=options[Math.floor(Math.random()*options.length)];
      return reply("🍾 *Spin the Bottle*\n\n🎯 "+name+" gets a *"+type.toUpperCase()+"!*\n\n"+pick+"\n\n_Play fair — no chickening out! 😄_");
    }
    const type=Math.random()>0.5?"truth":"dare";
    const options=type==="truth"?TRUTHS:DARES;
    const pick=options[Math.floor(Math.random()*options.length)];
    return reply("🍾 *Spin the Bottle*\n\n🎯 "+( m?.pushName||"Admin")+" gets a *"+type.toUpperCase()+"!*\n\n"+pick);
  }
};
