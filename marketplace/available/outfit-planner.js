// @marketplace outfit-planner v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "OutfitPlanner", category: "lifestyle",
  desc: "Daily outfit suggestions based on weather and occasion",
  command: ["outfit", "dresscode", "whatwear", "outfitidea", "fashion"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const OCCASIONS={casual:["Jeans + plain t-shirt + clean sneakers","Shorts + polo shirt + loafers","Chinos + linen shirt + sandals","Joggers + hoodie + trainers","Palazzo pants + crop top + flats"],formal:["Dark suit + white shirt + tie","Navy blazer + grey trousers + oxford shoes","Ankara suit well tailored","Black trouser suit for women","Pencil skirt + blazer + heels"],church:["Flowy dress/skirt + modest top + block heels","Iro and Buba (traditional)","Suit + tie (men)","Agbada for special occasions","Coordinated lace set"],wedding:["Aso Ebi as specified by couple","Traditional attire if no aso ebi","Smart casual if outdoor wedding","Ankara short dress for reception","Classic black dress + accessories"],party:["Sparkly mini dress + heels","Fitted jumpsuit + statement earrings","Kaftan for owambe","Senator + cap (men)","Sequin top + jeans + heels"],gym:["Moisture-wicking t-shirt + gym shorts","Sports leggings + sports bra","Track suit","Compression shorts + vest","Athletic wear + trainers"]};
    const occ=(args[0]||"casual").toLowerCase();
    const list=OCCASIONS[occ]||OCCASIONS.casual;
    const pick=list[Math.floor(Math.random()*list.length)];
    const tips=["👟 Accessories can elevate any outfit","🧺 When in doubt, go classic and clean","💆 Confidence is the best outfit","🎨 Limit patterns — max 2 at a time","👘 Fit matters more than brand"];
    return reply("👗 *Outfit Idea — "+occ.toUpperCase()+"*\n\n✨ "+pick+"\n\n💡 Style Tip: "+tips[Math.floor(Math.random()*tips.length)]+"\n\n_Occasions: casual, formal, church, wedding, party, gym_");
  }
};
