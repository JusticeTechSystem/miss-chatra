// @marketplace allergy-tracker v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_allergy_tracker.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"AllergyTracker",category:"health",desc:"Track food and environmental allergies",
  command:["allergy","allergylog","allergytrack"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[uid])all2[uid]={allergens:[],reactions:[]};
    if(args[0]==='add'){
      const allergen=args.slice(1).join(' ');
      all2[uid].allergens.push({allergen,severity:args[1]||'mild',added:new Date().toLocaleDateString()});_sv(all2);
      return reply("Allergen added: "+allergen);
    }
    if(args[0]==='reaction'){
      const text=args.slice(1).join(' ');
      all2[uid].reactions.push({text,date:new Date().toLocaleDateString()});_sv(all2);
      return reply("Reaction logged. Stay safe!");
    }
    if(!all2[uid].allergens.length)return reply("No allergens logged.\n"+pfx+"allergy add Peanuts severe");
    return reply("My Allergies\n\n"+all2[uid].allergens.map(a=>"  ⚠️ "+a.allergen+" ("+a.severity+")").join("\n")+"\n\nReactions logged: "+all2[uid].reactions.length);
  }
};
