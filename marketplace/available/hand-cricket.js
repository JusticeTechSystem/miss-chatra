// @marketplace hand-cricket v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "HandCricket", category: "games", desc: "Virtual hand cricket game",
  command: ["handcricket","cricket2","batorcricket"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const G=global.__hc=global.__hc||{};const key=chatId+'_hc_'+userId;
    if(!G[key]){G[key]={runs:0,balls:0,batting:true};return reply("Hand Cricket!\n\nYou are batting. Choose a number 1-6.\nIf your number matches mine, you are OUT!\n\nType a number 1-6 to play!");}
    const hc=G[key];
    const userNum=parseInt(args[0]);
    if(isNaN(userNum)||userNum<1||userNum>6) return reply("Choose 1-6!");
    const botNum=Math.floor(Math.random()*6)+1;
    if(userNum===botNum){
      const runs=hc.runs;delete G[key];
      return reply("CAUGHT OUT!\n\nBoth chose: "+userNum+"\n\nYour score: "+runs+" runs off "+hc.balls+" balls\n\n"+pfx+"handcricket to play again");
    }
    hc.runs+=userNum;hc.balls++;
    return reply("You played: "+userNum+"\nBot played: "+botNum+"\n\nRun! +"+userNum+"\nTotal: "+hc.runs+" runs ("+hc.balls+" balls)\n\nChoose next number 1-6!");
  }
};
