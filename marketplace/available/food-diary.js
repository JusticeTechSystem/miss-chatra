// @marketplace food-diary v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_food_diary.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"FoodDiary",category:"health",desc:"Daily food and nutrition diary",
  command:["fooddiary","eatlog","meallog"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const today=new Date().toDateString();const all2=_ld();
    if(!all2[uid])all2[uid]={};if(!all2[uid][today])all2[uid][today]=[];
    if(args.length){
      const food=args.join(' ');
      all2[uid][today].push({food,time:new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})});_sv(all2);
      return reply("Logged: "+food+"\n\nToday's meals ("+all2[uid][today].length+"):\n"+all2[uid][today].map(x=>x.time+": "+x.food).join("\n"));
    }
    const meals=all2[uid][today]||[];
    if(!meals.length)return reply("No meals logged today.\n"+pfx+"fooddiary Jollof rice and chicken");
    return reply("Food Diary — Today\n\n"+meals.map(x=>x.time+": "+x.food).join("\n"));
  }
};
