"use strict";
const axios=require("axios");
const WORDS=[{word:"Ephemeral",def:"Lasting for a very short time",example:"The ephemeral beauty of a sunset lasts only minutes.",type:"adjective"},{word:"Serendipity",def:"The occurrence of events by chance in a happy way",example:"Finding that ₦500 note was pure serendipity!",type:"noun"},{word:"Loquacious",def:"Tending to talk a great deal; talkative",example:"My loquacious neighbor told me his entire life story.",type:"adjective"},{word:"Perspicacious",def:"Having a ready insight into things; shrewd",example:"The perspicacious investor spotted the opportunity early.",type:"adjective"},{word:"Mellifluous",def:"Sweet or musical; pleasant to hear",example:"Her mellifluous voice captivated the entire audience.",type:"adjective"},{word:"Ubiquitous",def:"Present, appearing, or found everywhere",example:"Smartphones have become ubiquitous in modern life.",type:"adjective"},{word:"Exacerbate",def:"Make a problem worse",example:"The rain only exacerbated an already bad situation.",type:"verb"},{word:"Pragmatic",def:"Dealing with things sensibly and realistically",example:"We need a pragmatic solution, not an ideal one.",type:"adjective"},{word:"Tenacious",def:"Holding firmly to something; not giving up easily",example:"Her tenacious spirit helped her overcome every obstacle.",type:"adjective"},{word:"Discombobulate",def:"Disconcert or confuse",example:"The sudden question discombobulated the speaker.",type:"verb"}];
module.exports={name:"WordOfDay",category:"education",desc:"Daily vocabulary builder with word meanings and examples",
  command:["word","wotd","vocabulary","vocab","learnword"],
  run:async({reply})=>{
    try{
      const r=await axios.get("https://api.wordnik.com/v4/words.json/wordOfTheDay",{timeout:8000});
      if(r.data?.word){
        const w=r.data;
        const def=w.definitions?.[0]?.text||"See dictionary for definition";
        return reply("📚 *Word of the Day*\n\n🔤 *"+w.word.toUpperCase()+"*\n📖 "+def+"\n\n_Keep learning, keep growing!_");
      }
    }catch{}
    const w=WORDS[Math.floor(Math.random()*WORDS.length)];
    return reply("📚 *Word of the Day*\n\n🔤 *"+w.word.toUpperCase()+"*\n📂 Type: "+w.type+"\n📖 Meaning: "+w.def+"\n💬 Example: \""+w.example+"\"\n\n_Type /word for another word!_");
  }
};
