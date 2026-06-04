// @marketplace bmi-journey v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_bmi_journey.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"BMIJourney",category:"health",desc:"Track BMI over time with milestones",
  command:["bmijourney","bmitrack","weightjourney"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[uid])all2[uid]=[];
    const weight=parseFloat(args[0]),height=parseFloat(args[1])||170;
    if(!isNaN(weight)){
      const bmi=weight/Math.pow(height/100,2);
      const cat2=bmi<18.5?"Underweight":bmi<25?"Normal":bmi<30?"Overweight":"Obese";
      all2[uid].push({weight,height,bmi:parseFloat(bmi.toFixed(1)),cat:cat2,date:new Date().toLocaleDateString()});_sv(all2);
      const prev=all2[uid][all2[uid].length-2];
      return reply("BMI Logged\n\nWeight: "+weight+"kg | Height: "+height+"cm\nBMI: "+bmi.toFixed(1)+" ("+cat2+")"+(prev?"\nChange: "+(bmi-prev.bmi).toFixed(1)+" from last entry":""));
    }
    const entries=all2[uid];if(!entries?.length)return reply("No BMI logs.\n"+pfx+"bmijourney 72 175");
    return reply("BMI History\n\n"+entries.slice(-5).map((e,i)=>(i+1)+". "+e.bmi+" ("+e.cat+") — "+e.date).join("\n"));
  }
};
