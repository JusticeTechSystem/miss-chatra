// @marketplace debate-timer v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "DebateTimer", category: "entertainment", desc: "Timer for structured debates",
  command: ["debatetimer","speakingtimer","talktime"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const T=global.__dt=global.__dt||{};const key=chatId+'_debate';
    const mins=parseInt(args[0])||2;
    if(T[key]) return reply("Debate timer already running!\nIt will alert when time is up.");
    T[key]=true;
    setTimeout(async()=>{
      delete T[key];
      try{await sock.sendMessage(chatId,{text:"TIME IS UP!\n\nSpeaking time ("+mins+" min) is over!\nNext speaker please!"});}catch{}
    },mins*60000);
    return reply("Debate Timer Started!\n\nSpeaker has "+mins+" minute(s).\nGroup will be notified when time is up.");
  }
};
