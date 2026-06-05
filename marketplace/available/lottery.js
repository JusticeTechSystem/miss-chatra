// @marketplace lottery v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "LotteryGame", category: "games",
  desc: "Group lottery and raffle system",
  command: ["lottery", "raffle", "pickwinner", "lottodraw"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","lottery.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={active:false,entries:[],prize:""};
    const d=all[chatId];
    if(command==="lottery"&&(isAdmin||isOwner||isDev)){
      const prize=args.join(" ")||"Mystery Prize";
      d.active=true;d.entries=[];d.prize=prize;d.startedBy=m?.pushName;save(all);
      return reply("🎟️ *LOTTERY STARTED!*\n\n🏆 Prize: *"+prize+"*\n\nType /raffle to enter!\n\nDraw: /lottodraw (admin only)");
    }
    if(command==="raffle"){
      if(!d.active) return reply("No active lottery.\n"+(isAdmin?pfx+"lottery <prize> to start":"Wait for admin to start."));
      if(d.entries.find(e=>e.id===userId)) return reply("✅ You\'re already entered!\n\n🎟️ Entries so far: "+d.entries.length);
      d.entries.push({id:userId,name:m?.pushName||"Member",enteredAt:new Date().toISOString()});save(all);
      return reply("✅ *You\'re in!*\n\n🎟️ Your ticket: #"+d.entries.length+"\n👥 Total entries: "+d.entries.length+"\n🏆 Prize: "+d.prize+"\n\nGood luck! 🍀");
    }
    if(command==="lottodraw"){
      if(!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
      if(!d.active||!d.entries.length) return reply("No active lottery or no entries.");
      const winner=d.entries[Math.floor(Math.random()*d.entries.length)];
      d.active=false;save(all);
      return reply("🎉 *LOTTERY DRAW!*\n\n🎲 Shuffling "+d.entries.length+" tickets...\n\n🏆 *WINNER: "+winner.name+"!*\n\nPrize: *"+d.prize+"*\n\nCongratulations! 🥳",{mentions:[winner.id]});
    }
    if(!d.active) return reply("No lottery active.");
    return reply("🎟️ *Lottery Active*\n\n🏆 Prize: "+d.prize+"\n👥 Entries: "+d.entries.length+"\n\n"+pfx+"raffle — enter now!");
  }
};
