// @marketplace vitamin-guide v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "VitaminGuide", category: "health", desc: "Guide to vitamins and their food sources",
  command: ["vitamin","vitamins","nutrient"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const VITS={A:{food:'Carrots, sweet potato, liver',benefits:'Eyesight, immune system, skin'},B12:{food:'Meat, fish, eggs, dairy',benefits:'Nerve function, red blood cells, energy'},C:{food:'Oranges, lemon, guava, tomatoes',benefits:'Immune boost, skin, wound healing'},D:{food:'Sunlight, fish, eggs, fortified milk',benefits:'Bone health, immune system, mood'},E:{food:'Nuts, seeds, vegetable oils, avocado',benefits:'Antioxidant, skin, immune system'},Iron:{food:'Red meat, beans, spinach, liver',benefits:'Oxygen transport, energy, immune system'},Zinc:{food:'Meat, shellfish, legumes, seeds',benefits:'Immune function, wound healing, growth'},Calcium:{food:'Milk, cheese, sardines, leafy greens',benefits:'Bone and teeth strength, muscle function'}};
    const v=(args[0]||'C').replace(/vitamins*/i,'').toUpperCase();
    const info=VITS[v];
    if(!info) return reply("Vitamins: "+Object.keys(VITS).join(', ')+"\nUsage: "+pfx+"vitamin D");
    return reply("Vitamin "+v+"\n\nFood Sources: "+info.food+"\nBenefits: "+info.benefits+"\n\nEat a varied diet to get all your nutrients naturally.");
  }
};
