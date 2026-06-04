// @marketplace bible-plan v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "BibleReadingPlan", category: "spiritual",
  desc: "Structured Bible reading plans",
  command: ["bibleplan", "readingplan2", "dailyreading", "biblechallenge"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const PLANS={genesis:["Genesis 1-2","Genesis 3-5","Genesis 6-9","Genesis 10-11","Genesis 12-15","Genesis 16-18","Genesis 19-21"],psalms:["Psalm 1-10","Psalm 11-20","Psalm 21-30","Psalm 31-40","Psalm 41-50","Psalm 51-60","Psalm 61-70"],proverbs:["Proverbs 1-3","Proverbs 4-6","Proverbs 7-9","Proverbs 10-12","Proverbs 13-15","Proverbs 16-18","Proverbs 19-21"],newtest:["Matthew 1-4","Matthew 5-7","Matthew 8-11","Matthew 12-15","Matthew 16-19","Matthew 20-22","Matthew 23-25"],gospels:["Mark 1-4","Mark 5-8","Mark 9-12","Mark 13-16","Luke 1-3","Luke 4-6","Luke 7-9"]};
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","bible_plans.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();
    if(command==="bibleplan"&&args[0]){
      const plan=(args[0]||"genesis").toLowerCase();
      if(!PLANS[plan]) return reply("Plans: "+Object.keys(PLANS).join(", ")+"\n"+pfx+"bibleplan genesis");
      all[userId]={plan,day:0,started:new Date().toLocaleDateString()};save(all);
      return reply("📖 *Bible Reading Plan Started!*\n\nPlan: *"+plan+"*\n\nDay 1: "+PLANS[plan][0]+"\n\nType /dailyreading to get today\'s reading.");
    }
    if(command==="dailyreading"||command==="readingplan2"){
      const data=all[userId];
      if(!data) return reply("Start a plan first: "+pfx+"bibleplan genesis");
      const plan=PLANS[data.plan];
      const today=data.day%plan.length;
      return reply("📖 *Day "+(data.day+1)+" — "+data.plan.toUpperCase()+"*\n\n📚 Today\'s reading: *"+plan[today]+"*\n\n🙏 Take time to reflect on what you read.\n\n_"+pfx+"biblechallenge to mark complete_");
    }
    if(command==="biblechallenge"){
      if(!all[userId]) return reply("Start a plan: "+pfx+"bibleplan genesis");
      all[userId].day=(all[userId].day||0)+1;save(all);
      const streak=all[userId].day;
      return reply("✅ *Day "+streak+" complete!*\n\n🔥 Reading streak: "+streak+" days\n"+(streak%7===0?"🏆 *One week milestone!*":streak%30===0?"🎉 *One month milestone!*":"💪 Keep going!"));
    }
    return reply("📖 *Bible Reading Plans*\n\n"+pfx+"bibleplan genesis — Start Genesis plan\n"+pfx+"bibleplan psalms — Start Psalms plan\n"+pfx+"bibleplan proverbs — Start Proverbs plan\n"+pfx+"bibleplan newtest — New Testament\n\n"+pfx+"dailyreading — Get today\'s reading");
  }
};
