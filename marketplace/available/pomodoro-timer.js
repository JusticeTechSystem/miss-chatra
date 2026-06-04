// @marketplace pomodoro-timer v1.0.0 by JusticeTech
"use strict";
const sessions={};
module.exports={name:"PomodoroTimer",category:"productivity",desc:"Pomodoro focus timer — 25 min work, 5 min break",
  command:["pomodoro","pom","focusstart","focusstop","focusstatus"],
  run:async({command,args,chatId,userId,reply,prefix,sock})=>{
    const pfx=prefix||"/";
    const key=chatId+"_"+userId;
    if(command==="pomodoro"||command==="pom"||command==="focusstart"){
      if(sessions[key]) return reply("⏱️ You already have an active session!\n\n"+pfx+"focusstatus — check status\n"+pfx+"focusstop — stop session");
      const workMins=parseInt(args[0])||25;
      const breakMins=parseInt(args[1])||5;
      const task=args.slice(2).join(" ")||"Focus session";
      sessions[key]={task,workMins,breakMins,phase:"work",startTime:Date.now(),rounds:0};
      setTimeout(async()=>{
        if(!sessions[key]) return;
        sessions[key].phase="break";sessions[key].breakStart=Date.now();
        try{await sock.sendMessage(chatId,{text:"⏰ *Pomodoro Complete!*\n\n✅ Work session done!\n📝 Task: "+task+"\n\n☕ Take a "+breakMins+" minute break.\nBreak ends in "+breakMins+" mins."});}catch{}
        setTimeout(async()=>{
          if(!sessions[key]) return;
          sessions[key].rounds++;sessions[key].phase="work";sessions[key].startTime=Date.now();
          try{await sock.sendMessage(chatId,{text:"🎯 *Break Over!*\n\nRound "+(sessions[key].rounds+1)+" starting.\n💪 Back to work!\n\nTask: "+task});}catch{}
          setTimeout(()=>{if(sessions[key]){delete sessions[key];}},workMins*60000);
        },breakMins*60000);
      },workMins*60000);
      return reply("🍅 *Pomodoro Started!*\n\n📝 Task: "+task+"\n⏱️ Work: "+workMins+" minutes\n☕ Break: "+breakMins+" minutes\n\n🎯 Focus! You will be notified when time is up.");
    }
    if(command==="focusstatus"){
      if(!sessions[key]) return reply("No active Pomodoro session.\n"+pfx+"pomodoro to start.");
      const s=sessions[key];
      const elapsed=Math.floor((Date.now()-(s.phase==="work"?s.startTime:s.breakStart||s.startTime))/60000);
      const total=s.phase==="work"?s.workMins:s.breakMins;
      const remaining=Math.max(0,total-elapsed);
      return reply("🍅 *Pomodoro Status*\n\n📝 Task: "+s.task+"\n⏱️ Phase: "+(s.phase==="work"?"🎯 Working":"☕ Break")+"\n🕐 Remaining: "+remaining+" minutes\n🔄 Rounds completed: "+s.rounds);
    }
    if(command==="focusstop"){
      if(!sessions[key]) return reply("No active session.");
      const s=sessions[key];delete sessions[key];
      return reply("⏹️ Pomodoro stopped.\n\n📝 Task: "+s.task+"\n🔄 Rounds completed: "+s.rounds);
    }
  }
};
