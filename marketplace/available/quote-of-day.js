"use strict";
const axios=require("axios");
const FALLBACK=["The secret of getting ahead is getting started. — Mark Twain","Believe you can and you're halfway there. — Theodore Roosevelt","It does not matter how slowly you go as long as you do not stop. — Confucius","Everything you've ever wanted is on the other side of fear. — George Addair","Success is not final, failure is not fatal. — Winston Churchill","Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis","Believe in yourself, take on your challenges, dig deep within yourself. — Chantal Sutherland","You are never too old to set another goal or to dream a new dream. — C.S. Lewis","The only way to do great work is to love what you do. — Steve Jobs","In the middle of every difficulty lies opportunity. — Albert Einstein"];
module.exports={name:"QuoteOfDay",category:"entertainment",desc:"Inspiring quotes — motivational, wisdom, success",
  command:["quote","inspire","motivation","qotd"],
  run:async({args,reply,command})=>{
    const topic=(args[0]||"").toLowerCase();
    try{
      const r=await axios.get("https://api.quotable.io/random"+(topic?("?tags="+topic):""),{timeout:8000});
      if(r.data?.content) return reply("💬 *Quote*\n\n_\""+r.data.content+"\"_\n\n— *"+r.data.author+"*");
    }catch{}
    const q=FALLBACK[Math.floor(Math.random()*FALLBACK.length)];
    const[text,author]=q.split(" — ");
    return reply("💬 *Inspirational Quote*\n\n_\""+text+"\"_\n\n— *"+(author||"Unknown")+"*");
  }
};
