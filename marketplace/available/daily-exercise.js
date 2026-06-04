// @marketplace daily-exercise v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_daily_exercise.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"DailyExercise",category:"lifestyle",desc:"Daily exercise routine generator",command:["dailyexercise","workoutroutine","exerciseroutine"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const ROUTINES={morning:["20 jumping jacks","15 push-ups","20 squats","30-second plank","20 crunches","10 burpees — rest 2 minutes, repeat"],lunch:["10-minute brisk walk","20 calf raises at your desk","10 wall push-ups","20 desk squats","Neck and shoulder rolls"],evening:["30-minute walk or jog","20 push-ups","30 squats","3 x 60-second plank","10 pull-ups if available","Cool down stretch 5 minutes"]};const time=(args[0]||'morning').toLowerCase();const routine=ROUTINES[time]||ROUTINES.morning;return reply("💪 "+time.toUpperCase()+" Workout\n\n"+routine.map((e,i)=>(i+1)+". "+e).join("\n")+"\n\nTypes: morning, lunch, evening");
  }
};
