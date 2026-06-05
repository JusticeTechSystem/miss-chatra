// @marketplace broadcast-manager v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "BroadcastManager", category: "admin",
  desc: "Manage group broadcast categories and targeting",
  command: ["bcast2", "broadcastcat", "targetbroadcast", "groupbroadcast2"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","broadcast_cats.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all.categories)all.categories={};
    if(!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
    if(command==="broadcastcat"){
      const catName=args[0],groupIds=args.slice(1);
      if(!catName) return reply("Usage: "+pfx+"broadcastcat <category> <group1> <group2>...\nExample: "+pfx+"broadcastcat VIP 1234567890 9876543210");
      all.categories[catName]=groupIds;save(all);
      return reply("✅ Category *"+catName+"* saved with "+groupIds.length+" groups.\n\nBroadcast: "+pfx+"targetbroadcast "+catName+" Your message");
    }
    if(command==="targetbroadcast"){
      const cat=args[0],message=args.slice(1).join(" ");
      const groups=all.categories[cat];
      if(!groups?.length) return reply("Category not found: "+cat+"\nCreate: "+pfx+"broadcastcat <n> <groups..>");
      if(!message) return reply("Usage: "+pfx+"targetbroadcast "+cat+" <message>");
      let sent=0;
      for(const groupId of groups){
        try{await sock.sendMessage(groupId+"@g.us",{text:"📢 "+message});sent++;await new Promise(r=>setTimeout(r,500));}catch{}
      }
      return reply("📢 Broadcast sent to "+sent+"/"+groups.length+" groups in *"+cat+"* category.");
    }
    const cats=Object.entries(all.categories||{});
    if(!cats.length) return reply("No broadcast categories.\n"+pfx+"broadcastcat VIP <group IDs>");
    return reply("📢 *Broadcast Categories*\n\n"+cats.map(([n,g])=>"  📋 *"+n+"* — "+g.length+" groups").join("\n")+"\n\n"+pfx+"targetbroadcast <category> <message>");
  }
};
