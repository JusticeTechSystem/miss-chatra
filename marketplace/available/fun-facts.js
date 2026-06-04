"use strict";
const axios=require("axios");
const FACTS=["Honey never spoils. Archaeologists have found 3000-year-old honey in Egyptian tombs that was still edible.","A group of flamingos is called a flamboyance.","The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.","Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.","Oxford University is older than the Aztec Empire.","The unicorn is the national animal of Scotland.","A day on Venus is longer than a year on Venus.","Nigeria has more English speakers than the United Kingdom.","Lagos is the largest city in Africa by population.","Bananas are slightly radioactive due to containing potassium-40.","Octopuses have three hearts and blue blood.","The Eiffel Tower can grow by 6 inches in summer due to heat expansion.","A group of owls is called a parliament.","The average person walks about 100,000 miles in their lifetime — about 4 times around the Earth.","Sharks are older than trees — they've existed for 450 million years."];
module.exports={name:"FunFacts",category:"entertainment",desc:"Interesting and surprising facts about the world",
  command:["fact","funfact","didyouknow","amazingfact"],
  run:async({reply})=>{
    try{
      const r=await axios.get("https://uselessfacts.jsph.pl/random.json?language=en",{timeout:8000});
      if(r.data?.text) return reply("🤯 *Fun Fact*\n\n"+r.data.text+"\n\n_Mind blown? Type /fact for another one!_");
    }catch{}
    return reply("🤯 *Fun Fact*\n\n"+FACTS[Math.floor(Math.random()*FACTS.length)]+"\n\n_Type /fact for another one!_");
  }
};
