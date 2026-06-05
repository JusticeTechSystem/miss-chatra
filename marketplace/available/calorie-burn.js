// @marketplace calorie-burn v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CalorieBurn", category: "health", desc: "Calculate calories burned by activity",
  command: ["calorieburn","activitycalories","burnrate"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const activities={'running':9.8,'cycling':7.5,'swimming':8,'walking':3.5,'yoga':2.5,'football':7,'basketball':6,'jumping jacks':8,'push ups':5,'sit ups':4,'dancing':5.5,'hiit':9.5};
    const activity=(args[0]||'').toLowerCase(),weight=parseFloat(args[1])||70,mins=parseFloat(args[2])||30;
    const met=activities[activity];
    if(!met) return reply("Activities: "+Object.keys(activities).join(', ')+"\nUsage: "+pfx+"calorieburn running 70 30");
    const calories=(met*weight*mins/60).toFixed(0);
    return reply("Calories Burned\n\nActivity: "+activity+"\nWeight: "+weight+"kg\nDuration: "+mins+" mins\n\nCalories Burned: "+calories+" kcal");
  }
};
