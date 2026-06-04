// @marketplace meditation-timer v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MeditationTimer", category: "health",
  desc: "Guided meditation timer with breathing exercises",
  command: ["meditate", "meditation", "breathe", "mindful"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const sessions={};const key=chatId+"_med_"+userId;
    if(command==="meditate"||command==="meditation"){
      const mins=parseInt(args[0])||5;
      const type=(args[1]||"silent").toLowerCase();
      if(sessions[key]) return reply("⏸ Meditation already active.\n"+pfx+"mindful to stop.");
      const name=m?.pushName||"friend";
      sessions[key]={mins,type,start:Date.now()};
      const guides={silent:"Close your eyes, breathe naturally, observe your thoughts.",breathing:"4 counts in → hold 4 → 4 counts out → hold 4. Repeat.",body:"Start from your feet, slowly scan upward through your body.",visualization:"Picture a peaceful place. Feel the calm wash over you."};
      const guide=guides[type]||guides.silent;
      setTimeout(async()=>{
        delete sessions[key];
        try{await sock.sendMessage(chatId,{text:"🔔 *Meditation Complete!*\n\n"+name+", your "+mins+" minute session is done.\n\n✨ Take a moment to transition back slowly.\n💚 You did great!"});}catch{}
      },mins*60000);
      return reply("🧘 *Meditation Started*\n\n⏱️ Duration: "+mins+" minutes\n🌿 Type: "+type+"\n\n💭 "+guide+"\n\nRelax... You will be notified when done.");
    }
    if(sessions[key]){delete sessions[key];}
    return reply("🧘 *Meditation Timer*\n\n"+pfx+"meditate 10 — 10min silent\n"+pfx+"meditate 5 breathing — breathing exercise\n"+pfx+"meditate 15 body — body scan\n"+pfx+"meditate 10 visualization");
  }
};
