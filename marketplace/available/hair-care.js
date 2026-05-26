// @marketplace hair-care v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "HairCare", category: "lifestyle", desc: "Hair care tips and routines",
  command: ["haircare","hairhelp","hairroutine"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const TIPS={natural:['Co-wash or shampoo 1-2x per week','Deep condition with heat monthly','LOC method: Liquid, Oil, Cream for moisture retention','Protective styles reduce breakage','Satin bonnet or pillowcase at night','Trim every 3-4 months for healthy ends'],relaxed:['Wash every 7-10 days','Protein treatment monthly','Touch-up every 6-8 weeks only','Deep condition always after relaxing','Avoid heat styling too frequently'],dreadlocs:['Wash every 2 weeks minimum','Interlock or twist method for maintenance','Oil the scalp regularly','Palm roll loose locs weekly','Professional maintenance every 4-6 weeks']};
    const type=(args[0]||'natural').toLowerCase();
    const tips=TIPS[type]||TIPS.natural;
    return reply("Hair Care ("+type+")\n\n"+tips.map((t,i)=>(i+1)+". "+t).join("\n")+"\n\nTypes: natural, relaxed, dreadlocs\n"+pfx+"haircare natural");
  }
};
