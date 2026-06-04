// @marketplace minimalism-challenge v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_minimalism_challenge.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"MinimalismChallenge",category:"lifestyle",desc:"30-day minimalism challenge",
  command:["minimalism","declutter","minimalist"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const DAYS=["Day 1: Throw away 3 items you haven't used in 6 months","Day 2: Delete 50 photos from your phone you don't need","Day 3: Unsubscribe from 5 email lists today","Day 4: Clear your WhatsApp chats and groups you don't use","Day 5: Donate one bag of clothes you haven't worn this year","Day 6: Clear your phone home screen to only 6 apps","Day 7: Eat only what you have — no new groceries today","Day 8: Go 24 hours without social media","Day 9: Clear your email to zero unread","Day 10: Say no to one unnecessary expense today"];
    const day=Math.floor((Date.now()%(10*86400000))/86400000);
    return reply("Minimalism Challenge\n\n📅 "+DAYS[day]+"\n\n_Small steps lead to a lighter, clearer life._\n/minimalist to see tomorrow's challenge");
  }
};
