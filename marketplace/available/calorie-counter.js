// @marketplace calorie-counter v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CalorieCounter", category: "health",
  desc: "Track daily calorie intake",
  command: ["calories", "calorie", "kcal", "caloriecount"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","calories.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const FOODS={"rice":130,"bread":80,"egg":78,"chicken":165,"fish":136,"beans":127,"yam":118,"plantain":122,"milk":42,"apple":52,"banana":89,"orange":47,"potato":77,"pasta":131,"burger":295,"pizza":266,"suya":200,"puff":150,"akara":120,"eba":180};
    const all=load();const today=new Date().toDateString();
    if(!all[userId])all[userId]={};if(!all[userId][today])all[userId][today]=[];
    if(command==="calories"&&args.length){
      const food=args[0].toLowerCase(),qty=parseInt(args[1])||1;
      const kcal=FOODS[food];
      if(!kcal) return reply("Food not in database. Known foods:\n"+Object.keys(FOODS).join(", "));
      all[userId][today].push({food,qty,kcal:kcal*qty});save(all);
      const total=all[userId][today].reduce((s,e)=>s+e.kcal,0);
      return reply("🍽️ Logged: *"+qty+"x "+food+"* = "+kcal*qty+" kcal\n\n📊 Today's total: *"+total+" kcal*\n🎯 Recommended: 2000-2500 kcal/day");
    }
    const entries=all[userId][today]||[];
    const total=entries.reduce((s,e)=>s+e.kcal,0);
    if(!entries.length) return reply("No calories logged today.\n\nUsage: "+pfx+"calories rice 2\nKnown foods: rice, bread, egg, chicken, fish, beans, yam, plantain");
    const lines=["🍽️ *Today\'s Calories*\n"];
    entries.forEach(e=>lines.push("  "+e.food+" x"+e.qty+" = "+e.kcal+" kcal"));
    lines.push("\n*Total: "+total+" kcal*");
    lines.push(total>2500?"⚠️ Over daily limit!":total>1800?"✅ On track":"💪 Keep eating!");
    return reply(lines.join("\n"));
  }
};
