"use strict";
const timers={};
module.exports={name:"CountdownTimer",category:"tools",desc:"Set countdown timers with group notifications",
  command:["countdown","timer2","settimer","canceltimer"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m})=>{
    const pfx=prefix||"/",key=chatId+"_"+userId;
    if(command==="canceltimer"){
      if(timers[key]){clearTimeout(timers[key].t);delete timers[key];return reply("⏹️ Timer cancelled.");}
      return reply("No active timer.");
    }
    const input=args.join(" ").trim();
    if(!input) return reply("Usage: "+pfx+"countdown <duration> [message]\nExamples:\n"+pfx+"countdown 5m Meeting starts\n"+pfx+"countdown 1h Lunch break ends\n"+pfx+"countdown 30s Ready?");
    const match=input.match(/^(\d+)(s|m|h|d)/i);
    if(!match) return reply("❌ Format: "+pfx+"countdown <time><unit> [message]\nUnits: s=seconds, m=minutes, h=hours, d=days");
    const num=parseInt(match[1]);
    const unit=match[2].toLowerCase();
    const ms={s:1000,m:60000,h:3600000,d:86400000}[unit];
    const totalMs=num*ms;
    const label=input.replace(match[0],"").trim()||"Time's up!";
    const units={s:"second",m:"minute",h:"hour",d:"day"};
    if(timers[key]){clearTimeout(timers[key].t);}
    timers[key]={t:setTimeout(async()=>{
      delete timers[key];
      try{await sock.sendMessage(chatId,{text:"⏰ *TIMER DONE!*\n\n🔔 "+label+"\n⏱️ "+num+" "+units[unit]+(num>1?"s":"")+" elapsed!",mentions:[userId]});}catch{}
    },totalMs)};
    return reply("✅ *Timer Set!*\n\n⏱️ Duration: "+num+" "+units[unit]+(num>1?"s":"")+"\n🔔 Alert: "+label+"\n\n_You will be notified when time's up_\n_"+pfx+"canceltimer to cancel_");
  }
};
