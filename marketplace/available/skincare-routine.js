// @marketplace skincare-routine v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "SkincareRoutine", category: "lifestyle", desc: "Build a skincare routine",
  command: ["skincare","skincarehelp","faceroutine"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const ROUTINES={oily:['Foaming/gel cleanser morning and night','Alcohol-free toner','Lightweight oil-free moisturizer','SPF 30+ sunscreen (morning)','Niacinamide serum for pores','Clay mask 2x per week'],dry:['Creamy gentle cleanser','Hydrating toner or essence','Rich moisturizer with hyaluronic acid','Facial oil (rosehip or argan) at night','SPF 50+ sunscreen (morning)','Gentle exfoliant 1x per week'],normal:['Gentle foaming cleanser','Lightweight moisturizer','Vitamin C serum (morning)','SPF 30+ sunscreen','Retinol (night, 2-3x per week)']};
    const type=(args[0]||'normal').toLowerCase();
    const routine=ROUTINES[type]||ROUTINES.normal;
    return reply("Skincare Routine ("+type+" skin)\n\n"+routine.map((s,i)=>(i+1)+". "+s).join("\n")+"\n\nSkin types: oily, dry, normal\nConsistency is key - give products 4-6 weeks to work!");
  }
};
