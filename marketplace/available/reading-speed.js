// @marketplace reading-speed v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ReadingSpeed", category: "education", desc: "Test and improve reading speed",
  command: ["readingspeed","readtest","howfastreadi"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const TEXT="The ability to read quickly and comprehend information efficiently is one of the most valuable skills anyone can develop. Reading speed varies among individuals, with the average adult reading about 200 to 300 words per minute. Speed readers can achieve 1000 words per minute while maintaining good comprehension.";
    const G=global.__read=global.__read||{};const key=chatId+'_'+userId;
    if(!G[key]){G[key]={start:Date.now(),text:TEXT};return reply("Reading Speed Test\n\nRead the following text, then type DONE when finished:\n\n'"+TEXT+"'");}
    if(args[0]==='done'||command==='readtest'){
      const secs=(Date.now()-G[key].start)/1000;
      const words=G[key].text.split(' ').length;
      const wpm=Math.round(words/(secs/60));
      delete G[key];
      const grade=wpm>400?'Speed reader!':wpm>250?'Above average':wpm>200?'Average':'Below average - practice daily';
      return reply("Reading Speed Result\n\nTime: "+secs.toFixed(1)+"s\nWords: "+words+"\nSpeed: "+wpm+" WPM\n\nGrade: "+grade+"\n\nAverage adult: 200-300 WPM");
    }
    return reply(""+pfx+"readingspeed to start\nType DONE when you finish reading");
  }
};
