// @marketplace heart-rate v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "HeartRateZone", category: "health", desc: "Calculate target heart rate zones for exercise",
  command: ["heartrate","hrzone","targethr"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const age=parseInt(args[0]),resting=parseInt(args[1])||60;
    if(isNaN(age)) return reply("Usage: "+pfx+"heartrate <age> [resting hr]\nExample: "+pfx+"heartrate 30 65");
    const max=220-age;
    const reserve=max-resting;
    const zones=[['Warm-up',0.5,0.6],['Fat burn',0.6,0.7],['Aerobic',0.7,0.8],['Anaerobic',0.8,0.9],['Max',0.9,1.0]];
    const lines=["Heart Rate Zones (Age "+age+")\n","Max HR: "+max+" bpm\n"];
    zones.forEach(([name,lo,hi])=>lines.push(name+": "+(Math.round(resting+reserve*lo))+"-"+(Math.round(resting+reserve*hi))+" bpm"));
    return reply(lines.join("\n"));
  }
};
