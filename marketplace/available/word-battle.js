// @marketplace word-battle v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "WordBattle", category: "games",
  desc: "Competitive word game for groups",
  command: ["wordbattle", "wordchain", "lastletter", "wordgame"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","wordbattle.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={active:false,chain:[],scores:{},lastWord:null,lastPlayer:null};
    const d=all[chatId];
    if(command==="wordchain"||command==="wordbattle"){
      if(d.active) return reply("Word chain already active!\n\nCurrent word: *"+d.lastWord+"*\nNext word must start with: *"+(d.lastWord||"any").slice(-1).toUpperCase()+"*");
      d.active=true;d.chain=[];d.lastWord=null;d.lastPlayer=null;d.scores={};save(all);
      return reply("🔤 *Word Chain Game Started!*\n\nRules:\n• Each word must start with the last letter of the previous word\n• No repeating words\n• English words only\n• First player starts with any word\n\nReady? Go! Type any word to start!");
    }
    if(command==="lastletter"&&args.length){
      if(!d.active) return reply("Start a game first: "+pfx+"wordchain");
      const word=args[0].toLowerCase().replace(/[^a-z]/g,"");
      if(!word) return reply("Letters only please!");
      if(d.chain.includes(word)) return reply("❌ *"+word+"* already used! Try another word.");
      if(d.lastWord&&word[0]!==d.lastWord.slice(-1)) return reply("❌ Word must start with *"+d.lastWord.slice(-1).toUpperCase()+"*\nYour word: "+word+" — starts with "+word[0].toUpperCase());
      d.chain.push(word);d.lastWord=word;d.lastPlayer=userId;
      d.scores[userId]=(d.scores[userId]||0)+word.length;save(all);
      const name=m?.pushName||"Player";
      return reply("✅ *"+word.toUpperCase()+"* — "+name+" (+"+word.length+" pts)\n\nNext word must start with: *"+word.slice(-1).toUpperCase()+"*\n🔗 Chain length: "+d.chain.length);
    }
    return reply("🔤 *Word Chain*\n\n"+pfx+"wordchain — Start new game\n"+pfx+"lastletter <word> — Play a word");
  }
};
