// @marketplace meal-planner v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MealPlanner", category: "lifestyle",
  desc: "Plan weekly meals and get recipe suggestions",
  command: ["mealplan", "weekmenu", "mealplanner", "dinneridea", "lunchdea"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const MEALS={monday:{breakfast:"Akara and pap",lunch:"Jollof rice and chicken",dinner:"Egusi soup with eba"},tuesday:{breakfast:"Bread and eggs",lunch:"Fried rice with coleslaw",dinner:"Ofe onugbu with fufu"},wednesday:{breakfast:"Oatmeal with fruit",lunch:"Beans and plantain",dinner:"Vegetable soup with semolina"},thursday:{breakfast:"Yam and egg sauce",lunch:"Chicken stew with white rice",dinner:"Okra soup with wheat"},friday:{breakfast:"Indomie noodles with egg",lunch:"Suya and salad",dinner:"Banga soup with starch"},saturday:{breakfast:"Moi moi and custard",lunch:"Catfish pepper soup",dinner:"Asun and fried plantain"},sunday:{breakfast:"Puff puff and tea",lunch:"Native soup with pounded yam",dinner:"Jollof rice and assorted meat"}};
    const day=(args[0]||new Date().toLocaleDateString("en-US",{weekday:"long"})).toLowerCase();
    const plan=MEALS[day]||MEALS[Object.keys(MEALS)[new Date().getDay()]];
    if(!plan) return reply("📅 Days: monday through sunday\n"+pfx+"mealplan monday");
    return reply("🍽️ *Meal Plan — "+day.toUpperCase()+"*\n\n🌅 Breakfast: "+plan.breakfast+"\n☀️ Lunch: "+plan.lunch+"\n🌙 Dinner: "+plan.dinner+"\n\n_"+pfx+"mealplan <day> for other days_\n_"+pfx+"recipe jollof for cooking guide_");
  }
};
