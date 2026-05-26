// @marketplace science-experiment v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_science_experiment.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"ScienceExperiment",category:"education",desc:"Simple science experiments for students",
  command:["scienceexp","experiment","scilab"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const EXPERIMENTS=[{name:"Volcano",materials:"Baking soda, vinegar, food coloring",steps:"1. Make cone from paper. 2. Put baking soda inside. 3. Add food coloring. 4. Pour vinegar. 5. Watch the eruption!",concept:"Acid-base reaction produces CO2 gas"},{ name:"Rainbow in a Glass",materials:"Water, sugar, food coloring (4 colors), clear glass",steps:"1. Make sugar solutions of different concentrations. 2. Add food coloring to each. 3. Slowly layer from most to least sugar. 4. See rainbow layers!",concept:"Density — denser liquids sink"},{ name:"Magnetic Compass",materials:"Needle, magnet, cork, water bowl",steps:"1. Stroke needle 50 times in one direction with magnet. 2. Push needle through cork. 3. Float in bowl of water. 4. Needle points North!",concept:"Magnetism and Earth's magnetic field"},{name:"Egg in Bottle",materials:"Peeled hard boiled egg, wide neck bottle, paper, matches",steps:"1. Light paper, drop in bottle. 2. Quickly place egg on top. 3. Egg gets pushed in!",concept:"Air pressure — hot air creates low pressure"}];
    const exp=EXPERIMENTS[Math.floor(Math.random()*EXPERIMENTS.length)];
    return reply("Science Experiment: "+exp.name+"\n\nMaterials: "+exp.materials+"\n\nSteps:\n"+exp.steps+"\n\nConcept: "+exp.concept);
  }
};
