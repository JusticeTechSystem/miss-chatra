// @marketplace first-aid v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "FirstAidGuide", category: "health",
  desc: "Emergency first aid guides",
  command: ["firstaid", "cpr", "choking", "burn", "firstaidguide"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const GUIDES={cpr:["*CPR Steps (Adult)*","1. Call emergency: 112","2. Place person on flat surface","3. Kneel beside them","4. Place heel of hand on center of chest","5. Press down 5-6cm at 100-120 compressions/min","6. After 30 compressions, give 2 rescue breaths","7. Continue until help arrives or person recovers"],choking:["*Choking (Heimlich Maneuver)*","If person can cough: encourage them to keep coughing","If they cannot cough/breathe:","1. Stand behind them","2. Give 5 firm back blows between shoulder blades","3. Make fist below sternum, grip with other hand","4. Give 5 sharp upward thrusts","5. Alternate back blows and abdominal thrusts","6. Call 112 if not resolved"],burn:["*Burn Treatment*","Minor burns (redness/pain):","1. Cool under running water 20 minutes","2. Do NOT use ice, butter, or toothpaste","3. Cover loosely with clean bandage","4. Take pain relief if needed","","Severe burns (blistering/charring):","1. Call 112 immediately","2. Do not remove stuck clothing","3. Cover with clean damp cloth","4. Do not burst blisters"],bleeding:["*Bleeding Control*","1. Apply direct pressure with clean cloth","2. Keep pressure for 10-15 minutes","3. Do not remove cloth — add more on top","4. Elevate injury above heart level","5. For severe bleeding: call 112","6. Signs of shock: pale skin, rapid breathing — lay person down"]};
    const topic=(args[0]||"").toLowerCase();
    if(!topic||!GUIDES[topic]) return reply("🏥 *First Aid Guide*\n\nTopics: cpr, choking, burn, bleeding\n\n"+pfx+"firstaid cpr\n"+pfx+"firstaid choking\n"+pfx+"firstaid burn\n"+pfx+"firstaid bleeding\n\n⚠️ Always call 112 for emergencies!");
    return reply("🏥 "+GUIDES[topic].join("\n"));
  }
};
