// @marketplace name-generator v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "NameGenerator", category: "tools",
  desc: "Generate random names for babies, characters, businesses",
  command: ["namegen", "babyname", "businessname", "randomname", "charactername"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const NAMES={male:["Adewale","Emeka","Chukwuemeka","Babatunde","Olumide","Abiodun","Gbenga","Rotimi","Segun","Dayo","Tunde","Biodun","Femi","Kemi","Ade"],female:["Adaeze","Chiamaka","Ngozi","Funmilayo","Yetunde","Aisha","Fatima","Khadija","Amaka","Chisom","Nneka","Folake","Shade","Iyabo","Bimpe"],yoruba:["Adeola","Adewumi","Olamide","Oluwafemi","Adebisi","Oluwaseun","Adebayo","Oluwakemi","Adeyemi","Oluwaseyi"],igbo:["Chibuike","Chinedu","Adaora","Ugomma","Ifunanya","Chukwuka","Obiajulu","Chinonso","Adannaya","Chidimma"],hausa:["Abdullahi","Aliyu","Fatima","Hauwa","Ibrahim","Maryam","Muhammad","Sadiya","Usman","Zainab"],business:["TechNova","SwiftServe","PeakEdge","ClearPath","BoldMind","NextGen","TrueVision","CoreBase","PrimeTech","ApexPro"]};
    const type=(args[0]||"mixed").toLowerCase();
    const count=Math.min(parseInt(args[1])||5,10);
    let list;
    if(type==="male") list=NAMES.male;
    else if(type==="female") list=NAMES.female;
    else if(type==="business") list=NAMES.business;
    else if(type==="yoruba") list=NAMES.yoruba;
    else if(type==="igbo") list=NAMES.igbo;
    else if(type==="hausa") list=NAMES.hausa;
    else list=[...NAMES.male,...NAMES.female];
    const picks=[...list].sort(()=>Math.random()-0.5).slice(0,count);
    return reply("✨ *Generated Names ("+type+")*\n\n"+picks.map((n,i)=>(i+1)+". *"+n+"*").join("\n")+"\n\n_"+pfx+"namegen male|female|yoruba|igbo|hausa|business_");
  }
};
