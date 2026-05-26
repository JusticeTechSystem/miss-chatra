// @marketplace reading-comprehension v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_reading_comprehension.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"ReadingComp",category:"education",desc:"Reading comprehension exercises",
  command:["readingcomp","comprehension","readtest2"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const PASSAGES=[{title:"The Importance of Trees",text:"Trees are the lungs of the Earth. They absorb carbon dioxide and release oxygen that all living things need to survive. A single mature tree can absorb 48 pounds of carbon dioxide per year. Trees also provide food, shelter, and medicine. In Nigeria, the forest cover is decreasing rapidly due to deforestation for farming and charcoal production.",q:"What gas do trees absorb?",a:"carbon dioxide"},{title:"Water Cycle",text:"The water cycle describes how water moves continuously through the Earth's systems. Water evaporates from oceans and lakes, rises as vapor, cools to form clouds, then falls as rain or snow. This water flows into rivers and eventually back to the ocean.",q:"What happens to water vapor when it cools?",a:"forms clouds"}];
    const G=global.__rc=global.__rc||{};const key=chat+'_rc_'+uid;
    const p=PASSAGES[Math.floor(Math.random()*PASSAGES.length)];G[key]={answer:p.a};
    return reply("Reading Comprehension\n\n*"+p.title+"*\n\n"+p.text+"\n\n❓ Question: "+p.q+"\n\nType your answer!");
  }
};
