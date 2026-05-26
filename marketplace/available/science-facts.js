// @marketplace science-facts v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ScienceFacts", category: "education",
  desc: "Random science facts and discoveries",
  command: ["science", "sciencefact", "scifact", "discovery"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const FACTS=["The human body contains about 37 trillion cells.","Light from the Sun takes about 8 minutes to reach Earth.","DNA from a single human cell stretched out would be about 2 meters long.","The brain uses about 20% of the body total oxygen and energy.","There are more bacteria in the human gut than cells in the entire body.","Sound travels 4 times faster in water than in air.","A bolt of lightning is 5 times hotter than the surface of the Sun.","The average human brain has about 86 billion neurons.","Quantum entanglement allows particles to affect each other instantly regardless of distance.","The universe is approximately 13.8 billion years old.","Water is the only substance that naturally exists in all three states near Earth temperatures.","The Great Barrier Reef is the largest living structure on Earth, visible from space.","A teaspoon of neutron star material would weigh about 10 million tons.","Humans share about 60% of their DNA with bananas.","The electric eel can generate up to 600 volts of electricity."];
    const axios=require("axios");
    try{const r=await axios.get("https://uselessfacts.jsph.pl/random.json?language=en",{timeout:5000});
    if(r.data?.text) return reply("🔬 *Science Fact*\n\n"+r.data.text+"\n\n_Type /science for another fact!_");}catch{}
    return reply("🔬 *Science Fact*\n\n"+FACTS[Math.floor(Math.random()*FACTS.length)]+"\n\n_Type /science for another!_");
  }
};
