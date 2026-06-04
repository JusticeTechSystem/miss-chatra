// @marketplace blood-pressure v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "BloodPressure", category: "health", desc: "Log and interpret blood pressure readings",
  command: ["bp","bloodpressure","bplog"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const sys=parseInt(args[0]),dia=parseInt(args[1]);
    if([sys,dia].some(isNaN)) return reply("Usage: "+pfx+"bp <systolic> <diastolic>\nExample: "+pfx+"bp 120 80");
    let cat,advice;
    if(sys<120&&dia<80){cat='Normal';advice='Maintain healthy lifestyle.';}
    else if(sys<130&&dia<80){cat='Elevated';advice='Adopt healthier diet and exercise.';}
    else if(sys<140||dia<90){cat='High Stage 1';advice='Consult your doctor soon.';}
    else if(sys>=140||dia>=90){cat='High Stage 2';advice='See a doctor immediately!';}
    else{cat='Crisis';advice='Seek emergency care NOW!';}
    return reply("Blood Pressure Reading\n\n"+sys+"/"+dia+" mmHg\nCategory: "+cat+"\n\nAdvice: "+advice+"\n\nNote: Single readings can vary. Measure consistently at the same time daily.");
  }
};
