"use strict";
const fs=require("fs"),path=require("path");
const DB=path.join(__dirname,"../../..","database","flashcards.json");
const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
const active={};
module.exports={name:"Flashcards",category:"education",desc:"Create and study flashcard decks for any subject",
  command:["flashcard","fc","addcard","studydeck","decks","deletedeck"],
  run:async({args,command,chatId,userId,reply,prefix,m})=>{
    const pfx=prefix||"/",all=load(),chat=chatId;
    if(!all[chat])all[chat]={decks:{}};
    const d=all[chat];
    if(command==="addcard"){
      const sep=args.indexOf("|");
      if(sep<0) return reply("Usage: "+pfx+"addcard <deck> | <question> | <answer>\nExample: "+pfx+"addcard Science | What is photosynthesis? | Process plants use to make food from sunlight");
      const deck=args.slice(0,sep).join(" ").trim();
      const rest=args.slice(sep+1).join(" ").trim();
      const sep2=rest.indexOf("|");
      if(sep2<0) return reply("Format: "+pfx+"addcard <deck> | <question> | <answer>");
      const q=rest.slice(0,sep2).trim(),a=rest.slice(sep2+1).trim();
      if(!d.decks[deck])d.decks[deck]=[];
      d.decks[deck].push({q,a,created:new Date().toLocaleDateString()});
      save(all);
      return reply("✅ Card added to *"+deck+"* deck!\n\n❓ Q: "+q+"\n✅ A: "+a+"\n\nDeck size: "+d.decks[deck].length+" cards\n\nStudy: "+pfx+"studydeck "+deck);
    }
    if(command==="studydeck"||command==="fc"){
      const deckName=args.join(" ").trim();
      if(!deckName) return reply("Usage: "+pfx+"studydeck <deck name>\nSee decks: "+pfx+"decks");
      const deck=d.decks[deckName];
      if(!deck||!deck.length) return reply("Deck not found or empty.\n"+pfx+"decks to see all decks.");
      const card=deck[Math.floor(Math.random()*deck.length)];
      active[chat+"_"+userId]={card,deckName,revealed:false};
      return reply("🃏 *Flashcard — "+deckName+"*\n\n❓ *Question:*\n"+card.q+"\n\n_Type your answer or reply /reveal to see the answer_");
    }
    if(command==="decks"){
      const decks=Object.entries(d.decks);
      if(!decks.length) return reply("No flashcard decks yet.\nCreate cards: "+pfx+"addcard <deck> | <question> | <answer>");
      const lines=["🃏 *Flashcard Decks*\n"];
      decks.forEach(([name,cards])=>lines.push("📚 *"+name+"* — "+cards.length+" cards\n   "+pfx+"studydeck "+name));
      return reply(lines.join("\n"));
    }
    if(command==="deletedeck"){
      const name=args.join(" ").trim();
      if(d.decks[name]){delete d.decks[name];save(all);return reply("🗑️ Deck *"+name+"* deleted.");}
      return reply("Deck not found.");
    }
    if(command==="flashcard"){
      const sess=active[chat+"_"+userId];
      if(sess&&!sess.revealed){
        sess.revealed=true;
        return reply("✅ *Answer:*\n"+sess.card.a+"\n\n_"+pfx+"studydeck "+sess.deckName+" for next card_");
      }
      return reply("📚 *Flashcards*\n\n"+pfx+"addcard <deck> | <Q> | <A>  — Add a card\n"+pfx+"studydeck <deck> — Start studying\n"+pfx+"decks — See all decks\n"+pfx+"flashcard — Reveal current answer");
    }
  }
};
