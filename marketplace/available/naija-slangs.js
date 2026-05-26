// @marketplace naija-slangs v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "NaijaSlangs", category: "nigerian", desc: "Learn and use Nigerian slangs",
  command: ["slang","naijaslangs","naijaspeak","pidginslang"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const SLANGS={'Sapa':['Extreme poverty or being broke','Example: I no fit come out, sapa don catch me'],'Ginger':['To motivate or excite someone','Example: The music dey ginger me'],'Pepper them':['To make others jealous with your success','Example: Buy the car, go pepper them!'],'Shakara':['Showing off or being unnecessarily dramatic','Example: Stop doing shakara and just come chop'],'Omo':['Wow or exclamation of surprise','Example: Omo! See this house!'],'Odogwu':['A powerful or great person, a boss','Example: You don become odogwu now o'],'Gbas Gbos':['A heated exchange or argument','Example: The two of them do gbas gbos for the meeting'],'Japa':['To run away or escape, especially emigrating','Example: My brother don japa go Canada']};
    const keys=Object.keys(SLANGS);
    const word=keys[Math.floor(Math.random()*keys.length)];
    const[meaning,example]=SLANGS[word];
    return reply("Nigerian Slang!\n\nSlang: "+word+"\nMeaning: "+meaning+"\n"+example+"\n\n/naijaslangs for another slang!");
  }
};
