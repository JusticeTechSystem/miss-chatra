// @marketplace journal v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "DigitalJournal", category: "lifestyle",
  desc: "Personal digital journal — write and reflect",
  command: ["journal", "diary", "writeinjournal", "myjournals", "journalentries"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","journal.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    const PROMPTS=["What made you smile today?","What\'s one thing you\'re grateful for?","What\'s been on your mind lately?","What challenge are you currently navigating?","What do you want to remember about today?","What would you tell your past self?","What\'s one thing you want to do tomorrow?","How are you really feeling right now?"];
    if(command==="writeinjournal"||command==="journal"&&args.length>0){
      const mood=args[0].match(/^[1-5]$/)?args[0]:null;
      const text=(mood?args.slice(1):args).join(" ").trim();
      if(!text) return reply("Usage: "+pfx+"writeinjournal [mood 1-5] <your thoughts>\nExample: "+pfx+"writeinjournal 4 Today was a great day. I finished the project!");
      all[userId].push({text,mood:mood||null,date:new Date().toLocaleDateString(),time:new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})});
      save(all);
      return reply("📔 *Journal Entry Saved*\n\n📅 "+new Date().toLocaleDateString()+(mood?"\n😊 Mood: "+mood+"/5":"")+("\n\n"+text.slice(0,200))+"\n\n_"+all[userId].length+" entries total._\n_"+pfx+"myjournals to view entries_");
    }
    if(command==="myjournals"||command==="journalentries"){
      const entries=all[userId].slice(-5).reverse();
      if(!entries.length) return reply("No journal entries.\n\n"+pfx+"writeinjournal <your thoughts>\n\n💭 Today\'s prompt: "+PROMPTS[Math.floor(Math.random()*PROMPTS.length)]);
      const lines=["📔 *Recent Journal Entries*\n"];
      entries.forEach((e,i)=>{
        lines.push("📅 *"+e.date+"* "+(e.mood?"(Mood: "+e.mood+"/5)":""));
        lines.push(e.text.slice(0,100)+(e.text.length>100?"...":""));
        lines.push("");
      });
      return reply(lines.join("\n"));
    }
    const prompt=PROMPTS[Math.floor(Math.random()*PROMPTS.length)];
    return reply("📔 *Digital Journal*\n\n💭 Today\'s prompt:\n\""+prompt+"\"\n\n"+pfx+"writeinjournal <your thoughts>\n"+pfx+"myjournals — view past entries");
  }
};
