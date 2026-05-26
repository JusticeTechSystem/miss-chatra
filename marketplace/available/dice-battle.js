// @marketplace dice-battle v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "DiceBattle", category: "games", desc: "Battle against bot in a dice game",
  command: ["dicebattle","dicewar","rollagainst"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const userRoll=Math.floor(Math.random()*6)+1;
    const botRoll=Math.floor(Math.random()*6)+1;
    const dice=['⚀','⚁','⚂','⚃','⚄','⚅'];
    const result=userRoll>botRoll?'You win!':userRoll<botRoll?'Bot wins!':'It is a tie!';
    return reply("Dice Battle!\n\nYour roll: "+dice[userRoll-1]+" ("+userRoll+")\nBot roll: "+dice[botRoll-1]+" ("+botRoll+")\n\n"+result+"\n/dicebattle to play again");
  }
};
