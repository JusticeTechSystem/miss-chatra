// @marketplace medicine-reminder v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MedicineReminder", category: "health",
  desc: "Set medication reminders",
  command: ["medicine", "meds", "pillreminder", "medication"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","medicine.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    if(command==="medicine"&&args.length>=2){
      const name=args[0],time=args[1],dose=args.slice(2).join(" ")||"1 tablet";
      all[userId].push({name,time,dose,active:true,addedAt:new Date().toLocaleDateString()});save(all);
      return reply("💊 *Medicine Reminder Added*\n\n💊 Medicine: "+name+"\n🕐 Time: "+time+"\n💊 Dose: "+dose+"\n\n⚠️ Set a phone alarm for "+time+" as backup.\n✅ Reminder saved!");
    }
    if(!all[userId].length) return reply("No medicine reminders.\n"+pfx+"medicine Amoxicillin 8am '2 tablets'");
    const lines=["💊 *Medicine Schedule*\n"];
    all[userId].forEach((m,i)=>lines.push((i+1)+". *"+m.name+"* — "+m.time+" | "+m.dose));
    return reply(lines.join("\n"));
  }
};
