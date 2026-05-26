// @marketplace community-board v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CommunityBoard", category: "community",
  desc: "Community announcement board for neighborhoods and estates",
  command: ["notice", "boardpost", "communityboard", "notices", "postnotice"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","community_board.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={posts:[],counter:0};
    const d=all[chatId];
    if(command==="postnotice"||command==="boardpost"){
      if(!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
      const category=(args[0]||"general").toLowerCase();
      const text=args.slice(1).join(" ");
      if(!text) return reply("Usage: "+pfx+"postnotice <category> <message>\nCategories: general, urgent, maintenance, event, lost, found\nExample: "+pfx+"postnotice urgent Water supply cut off this Saturday");
      d.counter=(d.counter||0)+1;
      const id="N-"+String(d.counter).padStart(3,"0");
      const ICONS={urgent:"🚨",general:"📢",maintenance:"🔧",event:"🎉",lost:"🔍",found:"✅"};
      d.posts.unshift({id,category,text,icon:ICONS[category]||"📢",postedBy:m?.pushName||"Admin",date:new Date().toLocaleDateString(),pinned:category==="urgent"});
      if(d.posts.length>50) d.posts=d.posts.slice(0,50);
      save(all);
      return reply((ICONS[category]||"📢")+" *COMMUNITY NOTICE posted*\n\nID: "+id+"\n📌 Category: "+category+"\n\n"+text);
    }
    const posts=d.posts.slice(0,8);
    if(!posts.length) return reply("No notices posted.\n"+pfx+"postnotice general <message> (Admin only)");
    const lines=["📋 *Community Board*\n"];
    posts.forEach(p=>lines.push((p.icon||"📢")+" *"+p.category.toUpperCase()+"* — "+p.date+"\n   "+p.text.slice(0,80)+(p.text.length>80?"...":"")));
    return reply(lines.join("\n"));
  }
};
