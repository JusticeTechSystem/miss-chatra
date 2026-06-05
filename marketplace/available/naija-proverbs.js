// @marketplace naija-proverbs v1.0.0 by JusticeTech
"use strict";
module.exports={
  name:"NaijaProverbs",category:"nigerian",desc:"Nigerian proverbs and meanings",
  command:["proverb","naijasay","naijaproverb"],
  run:async({reply})=>{
    const P=[
      ["Eniyan l'aso mi (Yoruba)","People are my cloth - we need each other."],
      ["Onye wetara oji wetara ndu (Igbo)","He who brings kola brings life - hospitality is highest virtue."],
      ["No matter how long a log stays in water it does not become a crocodile","You cannot change your nature by association."],
      ["Rain does not fall on one roof alone","Nobody faces challenges alone."],
      ["If you want to go fast go alone, if you want to go far go together","Collaboration is key."],
      ["A child not embraced by the village will burn it down","Communities must nurture their members."],
      ["The forest would be silent if no bird sang except the one that sang best","Everyone has a role to play."],
      ["When the music changes, so does the dance","Adapt to changing circumstances."]
    ];
    const [prov,meaning]=P[Math.floor(Math.random()*P.length)];
    return reply("Nigerian Proverb\n\n\""+prov+"\"\n\nMeaning: "+meaning+"\n\n/proverb for another");
  }
};
