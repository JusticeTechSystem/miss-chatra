// @marketplace typing-speed v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "TypingSpeedTest", category: "education",
  desc: "Test typing speed with WPM calculation",
  command: ["typingtest", "typetest", "wpm", "typingspeed"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const tests={};const key=chatId+"_type_"+userId;
    const TEXTS=["The quick brown fox jumps over the lazy dog near the bank","Success is not final failure is not fatal it is the courage to continue","The secret of getting ahead is getting started with small consistent steps","Every expert was once a beginner who refused to give up on their dreams","Hard work beats talent when talent does not work hard enough to succeed"];
    if(command==="typingtest"||command==="typetest"||command==="wpm"){
      const text=TEXTS[Math.floor(Math.random()*TEXTS.length)];
      tests[key]={text,start:Date.now(),wordCount:text.split(" ").length};
      return reply("⌨️ *Typing Speed Test*\n\nType the following text EXACTLY:\n\n\""+text+"\"\n\nTimer starts NOW! Type it and send.");
    }
    if(tests[key]){
      const{text,start,wordCount}=tests[key];
      const typed=args.join(" ").toLowerCase().trim();
      const original=text.toLowerCase();
      const elapsed=(Date.now()-start)/60000;
      const wpm=Math.round(wordCount/elapsed);
      const accuracy=Math.round((typed.length/original.length)*100);
      delete tests[key];
      const grade=wpm>80?"🏆 Expert":wpm>60?"⭐ Advanced":wpm>40?"✅ Intermediate":"📚 Beginner";
      return reply("⌨️ *Typing Results*\n\n⚡ Speed: *"+wpm+" WPM*\n🎯 Accuracy: ~"+Math.min(100,accuracy)+"%\n📊 Grade: "+grade+"\n\n_Average typist: 40 WPM | Fast typist: 70+ WPM_\n\n"+pfx+"typingtest for another test");
    }
    return reply("⌨️ "+pfx+"typingtest to start a typing speed test");
  }
};
