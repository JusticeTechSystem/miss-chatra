// @marketplace business-plan v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "BusinessPlanHelper", category: "business", desc: "Generate business plan sections",
  command: ["bizplan","businessplan","startbusiness","planmy"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const SECTIONS={executive:['What problem does your business solve?','Who are your target customers?','What makes you different from competitors?','What is your revenue model?','What are your financial projections?'],market:['Market size: how many potential customers exist?','Who are your main competitors?','What percentage of the market can you capture?','How will you reach your customers?','What is the current trend in this market?'],financial:['Startup costs needed','Monthly fixed expenses','Revenue per unit/sale','Break-even point','Funding sources (personal, loan, investors)']};
    const section=(args[0]||'executive').toLowerCase();
    const qs=SECTIONS[section]||SECTIONS.executive;
    return reply("Business Plan: "+section.toUpperCase()+"\n\nAnswer these questions:\n\n"+qs.map((q,i)=>(i+1)+". "+q).join("\n")+"\n\nSections: executive, market, financial\n"+pfx+"bizplan market");
  }
};
