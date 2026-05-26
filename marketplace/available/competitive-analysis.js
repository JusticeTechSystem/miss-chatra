// @marketplace competitive-analysis v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CompetitiveAnalysis", category: "business", desc: "Analyze your competition",
  command: ["competitors","competitive","swot","competitorcheck"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const SWOT={Strengths:['What do you do better than competitors?','What unique resources do you have?','What advantages do customers appreciate?'],Weaknesses:['What could you improve?','What do competitors do better?','Where are you losing customers?'],Opportunities:['What market trends favor you?','What needs are underserved?','What new customers can you reach?'],Threats:['What are competitors doing differently?','What regulations could affect you?','What technology could replace you?']};
    const section=(args[0]||'').toUpperCase();
    if(SWOT[section]){return reply("SWOT Analysis: "+section+"\n\nAnswer these questions:\n\n"+SWOT[section].map((q,i)=>(i+1)+". "+q).join("\n"));}
    return reply("Competitive Analysis - SWOT Framework\n\n"+Object.entries(SWOT).map(([k,v])=>k+":\n"+v[0]).join("\n\n")+"\n\nDeep dive: "+pfx+"competitive Strengths\n"+pfx+"competitive Threats");
  }
};
