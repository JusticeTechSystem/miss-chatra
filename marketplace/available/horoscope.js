"use strict";
const axios=require("axios");
const SIGNS=["aries","taurus","gemini","cancer","leo","virgo","libra","scorpio","sagittarius","capricorn","aquarius","pisces"];
const EMOJIS={aries:"♈",taurus:"♉",gemini:"♊",cancer:"♋",leo:"♌",virgo:"♍",libra:"♎",scorpio:"♏",sagittarius:"♐",capricorn:"♑",aquarius:"♒",pisces:"♓"};
const READINGS={aries:"Today brings exciting opportunities. Your energy is high — channel it into your biggest goals.",taurus:"Stability is your strength today. Financial decisions made now will pay off.",gemini:"Communication flows beautifully today. Reach out to someone you've been meaning to contact.",cancer:"Your intuition is strong today. Trust your feelings, especially in relationships.",leo:"You shine brightest today. A leadership opportunity presents itself — take it.",virgo:"Details matter today. Your analytical mind solves a problem others have overlooked.",libra:"Balance is key. A compromise you make today creates long-lasting harmony.",scorpio:"Transformation is in the air. Let go of what no longer serves you.",sagittarius:"Adventure awaits. An unexpected opportunity to expand your horizons appears.",capricorn:"Hard work pays off today. Your discipline brings recognition from unexpected sources.",aquarius:"Innovation is your superpower today. Your unique perspective solves an old problem.",pisces:"Your creativity is at its peak. Artistic and spiritual pursuits bring deep fulfillment."};
module.exports={name:"Horoscope",category:"entertainment",desc:"Daily horoscope readings for all 12 zodiac signs",
  command:["horoscope","zodiac","starsign","daily"],
  run:async({args,reply})=>{
    const sign=(args[0]||"").toLowerCase().trim();
    if(!sign||!SIGNS.includes(sign)) return reply("♈ *Daily Horoscope*\n\nUsage: /horoscope <sign>\n\nSigns: "+SIGNS.join(", ")+"\n\nExample: /horoscope leo");
    const emoji=EMOJIS[sign]||"⭐";
    const reading=READINGS[sign];
    const lucky=["1","7","12","21","33","44","55"][Math.floor(Math.random()*7)];
    const colors=["Red","Blue","Gold","Green","Purple","White","Orange"];
    const color=colors[Math.floor(Math.random()*colors.length)];
    return reply(emoji+" *"+sign.charAt(0).toUpperCase()+sign.slice(1)+" — Today's Horoscope*\n\n"+reading+"\n\n🍀 Lucky Number: "+lucky+"\n🎨 Lucky Color: "+color+"\n\n_Remember: You shape your own destiny!_");
  }
};
