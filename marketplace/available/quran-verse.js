"use strict";
const axios=require("axios");
const VERSES=[{surah:"Al-Baqarah",ayah:286,text:"Allah does not burden a soul beyond that it can bear.",ref:"2:286"},{surah:"Al-Imran",ayah:160,text:"If Allah helps you, none can overcome you.",ref:"3:160"},{surah:"Al-Inshirah",ayah:"5-6",text:"For indeed, with hardship will be ease. Indeed, with hardship will be ease.",ref:"94:5-6"},{surah:"Az-Zumar",ayah:53,text:"Do not despair of the mercy of Allah. Indeed, Allah forgives all sins.",ref:"39:53"},{surah:"Al-Baqarah",ayah:153,text:"O you who believe, seek help through patience and prayer. Indeed, Allah is with the patient.",ref:"2:153"},{surah:"Ibrahim",ayah:7,text:"If you are grateful, I will surely increase you in favor.",ref:"14:7"},{surah:"At-Talaq",ayah:3,text:"And whoever relies upon Allah — then He is sufficient for him.",ref:"65:3"},{surah:"Al-Hadid",ayah:22,text:"No disaster strikes except by permission of Allah. And whoever believes in Allah — He will guide his heart.",ref:"57:22"}];
module.exports={name:"QuranVerse",category:"spiritual",desc:"Daily Quran verses with translation and reflection",
  command:["quran","verse","ayah","quranic","islamicquote"],
  run:async({args,reply,command})=>{
    if(command==="ayah"&&args[0]){
      try{
        const[s,a]=args[0].split(":");
        const r=await axios.get("https://api.alquran.cloud/v1/ayah/"+s+":"+a+"/en.asad",{timeout:10000});
        if(r.data?.data){
          const d=r.data.data;
          return reply("📖 *Quran — "+d.surah?.name+" ("+args[0]+")*\n\n\""+d.text+"\"\n\n_"+pfx+"ayah 2:286 for specific verse_");
        }
      }catch{}
    }
    const v=VERSES[Math.floor(Math.random()*VERSES.length)];
    return reply("📖 *Quran — Surah "+v.surah+" ("+v.ref+")*\n\n_\""+v.text+"\"_\n\n🌙 May this verse bring peace and guidance.\n\n_/quran for another verse_");
  }
};
