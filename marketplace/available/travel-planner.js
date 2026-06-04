// @marketplace travel-planner v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "TravelPlanner", category: "lifestyle",
  desc: "Plan trips and get travel tips",
  command: ["travel", "tripplan", "travelguide", "destination", "packinglist"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const DESTINATIONS={lagos:{desc:"Nigeria\'s commercial capital",must:["Lekki Conservation Centre","Nike Art Gallery","Elegushi Beach","Victoria Island","National Museum Lagos"],food:["Suya at night markets","Fresh fish at Bar Beach","Buka restaurants in Surulere"],tips:["Use Bolt/Uber — avoid unlicensed taxis","Book hotels in VI, Lekki or Ikoyi for safety","Visit markets early morning"]},abuja:{desc:"Nigeria\'s capital city",must:["Aso Rock","Millennium Park","National Mosque","Arts and Crafts Village","Jabi Lake"],food:["Area 11 food court","Restaurants along Aminu Kano Crescent","Garki Market local food"],tips:["Traffic is manageable compared to Lagos","FCT roads are generally better maintained","Cooler weather especially December-February"]},accra:{desc:"Ghana\'s vibrant capital",must:["Kwame Nkrumah Memorial","Labadi Beach","National Museum","Oxford Street","Cape Coast day trip"],food:["Waakye in the morning","Jollof rice rivalry with Nigeria","Fresh seafood at the coast"],tips:["Nigerians don\'t need visa for Ghana","Cedis to Naira rate always worth checking","Very friendly locals"]},dubai:{desc:"UAE luxury destination",must:["Burj Khalifa","Dubai Mall","Palm Jumeirah","Gold & Spice Souk","Desert Safari"],food:["Al Dhiyafa Road restaurants","Shawarma everywhere","Nigerian restaurants in Deira"],tips:["Get UAE visa 2-3 weeks before","Emirates, Air Peace fly direct from Lagos","Ramadan: respect no eating in public"]}};
    const PACKING=["✅ Passport + copies","✅ Travel insurance","✅ Foreign currency + card","✅ Phone charger + adapter","✅ Medications","✅ Comfortable walking shoes","✅ Lightweight clothing","✅ First aid kit","✅ Downloaded offline maps","✅ Hotel confirmation prints"];
    const dest=(args[0]||"").toLowerCase();
    if(command==="packinglist") return reply("🧳 *Packing List*\n\n"+PACKING.join("\n")+"\n\n_Customize based on your destination!_");
    const info=DESTINATIONS[dest];
    if(!info) return reply("🌍 *Travel Planner*\n\nDestinations: "+Object.keys(DESTINATIONS).join(", ")+"\n\n"+pfx+"travel lagos\n"+pfx+"travel dubai\n"+pfx+"packinglist — generate packing list");
    const lines=["✈️ *"+dest.toUpperCase()+"* — "+info.desc,"","🏛️ *Must Visit:*"];
    info.must.slice(0,4).forEach(m=>lines.push("  • "+m));
    lines.push("\n🍽️ *Local Food:*");
    info.food.slice(0,3).forEach(f=>lines.push("  • "+f));
    lines.push("\n💡 *Travel Tips:*");
    info.tips.forEach(t=>lines.push("  ✓ "+t));
    return reply(lines.join("\n"));
  }
};
