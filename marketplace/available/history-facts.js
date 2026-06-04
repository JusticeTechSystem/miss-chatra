// @marketplace history-facts v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "HistoryFacts", category: "education",
  desc: "Historical facts and events",
  command: ["history", "historyfact", "onthisday", "historical"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const FACTS=["The Great Wall of China took over 1,000 years to build, completed during the Ming Dynasty in 1644.","Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.","The shortest war in history lasted just 38 minutes — Britain vs Zanzibar in 1896.","The first computer bug was an actual insect — a moth found in Harvard\'s Mark II computer in 1947.","Nigeria gained independence from Britain on October 1, 1960.","The Berlin Wall fell on November 9, 1989, after 28 years of division.","The oldest university in the world is the University of Bologna, founded in 1088.","Ancient Egyptians used moldy bread as an antibiotic thousands of years before penicillin.","The printing press, invented in 1440 by Gutenberg, democratized knowledge access.","The first transatlantic telephone cable was laid in 1956.","Nelson Mandela spent 27 years in prison before becoming South Africa\'s first Black president.","The word \'salary\' comes from salt — Roman soldiers were sometimes paid in salt.","Oxford University is older than the Aztec civilization by about 200 years.","The Eiffel Tower was originally built as a temporary structure for the 1889 World\'s Fair.","Martin Luther King Jr and Anne Frank were born in the same year — 1929."];
    return reply("📜 *History Fact*\n\n"+FACTS[Math.floor(Math.random()*FACTS.length)]+"\n\n_/history for another fact!_");
  }
};
