// @marketplace coin-toss v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CoinToss", category: "tools", desc: "Flip a coin for decisions",
  command: ["cointoss","flipcoin","headsortails"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const result=Math.random()<0.5?'HEADS':'TAILS';
    return reply("Coin Toss!\n\n"+result+"\n\n"+(result==='HEADS'?"The decision is YES!":"The decision is NO!")+"\n\n/cointoss to flip again");
  }
};
