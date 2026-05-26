// @marketplace food-recipe-generator v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_food_recipe_generator.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"FoodRecipeGenerator",category:"lifestyle",desc:"Generate random recipe ideas",command:["randomrecipe","recipeidea","makethis"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const RECIPES=[{name:"Quick Stir Fry",time:"15 mins",ingredients:"Any vegetables + protein + soy sauce + garlic",steps:"Heat oil. Fry garlic. Add protein. Add vegetables. Season. Serve with rice."},{ name:"Egg Fried Rice",time:"10 mins",ingredients:"Day-old rice, 2 eggs, vegetables, soy sauce, oil",steps:"Scramble eggs. Set aside. Fry vegetables. Add rice. Add eggs. Season."},{ name:"Pepper Soup Noodles",time:"15 mins",ingredients:"Instant noodles, pepper soup spice, meat/fish, crayfish",steps:"Boil noodles with spices. Add meat/fish. Adjust seasoning. Serve hot."}];const r=RECIPES[Math.floor(Math.random()*RECIPES.length)];return reply("🍳 Recipe Idea: "+r.name+" ("+r.time+")\n\n📦 You need:\n"+r.ingredients+"\n\n👨‍🍳 Method:\n"+r.steps+"\n\n/randomrecipe for another idea");
  }
};
