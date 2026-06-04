"use strict";
const timers={};
module.exports={name:"WaterReminder",category:"health",desc:"Hourly water drinking reminders with daily tracking",
  command:["water","waterreminder","drinkwater","waterstop","waterlog"],
  run:async({command,args,chatId,userId,reply,prefix,sock,m})=>{
    const pfx=prefix||"/",key=chatId+"_water_"+userId;
    if(command==="waterreminder"||command==="water"){
      if(timers[key]) return reply("💧 Water reminders already active!\n"+pfx+"waterstop to stop.");
      const interval=(parseInt(args[0])||60)*60000;
      const name=m?.pushName||"there";
      let count=0;
      const remind=async()=>{
        count++;
        try{await sock.sendMessage(chatId,{text:"💧 *Water Reminder!*\n\nHey "+name+"! Time to drink water!\n\n🥛 Drink a full glass now.\n📊 Reminder #"+count+" today\n\n_Stay hydrated, stay healthy!_"});}catch{}
      };
      timers[key]={t:setInterval(remind,interval),count};
      return reply("💧 *Water Reminders ON!*\n\n⏰ Reminder every "+(interval/60000)+" minutes\n\n_"+pfx+"waterstop to turn off_");
    }
    if(command==="waterstop"){
      if(timers[key]){clearInterval(timers[key].t);const c=timers[key].count;delete timers[key];return reply("✅ Water reminders stopped.\n\n💧 You were reminded "+c+" times. Great job staying hydrated!");}
      return reply("No active water reminders.");
    }
    if(command==="drinkwater") return reply("💧 *Drink Water Now!*\n\n✅ Great job! Staying hydrated:\n• Improves energy\n• Clears skin\n• Aids digestion\n• Boosts mood\n\n🥛 Aim for 8 glasses (2 litres) per day!\n\nSet reminders: "+pfx+"waterreminder 60");
  }
};
