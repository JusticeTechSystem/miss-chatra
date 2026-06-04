// @marketplace group-rules v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "GroupRules", category: "admin",
  desc: "Set and display group rules",
  command: ["rules", "setrules", "addrule", "grouprules", "listrules"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","group_rules_list.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={rules:[]};
    if(command==="addrule"){
      if(!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
      const rule=args.join(" ").trim();
      if(!rule) return reply("Usage: "+pfx+"addrule <rule text>\nExample: "+pfx+"addrule No spamming or advertising");
      all[chatId].rules.push({text:rule,addedAt:new Date().toLocaleDateString(),addedBy:m?.pushName||"Admin"});
      save(all);
      return reply("✅ Rule added:\n"+(all[chatId].rules.length)+". "+rule);
    }
    if(command==="setrules"){
      if(!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
      all[chatId].rules=[];
      const rulesList=args.join(" ").split("|");
      rulesList.forEach(r=>{if(r.trim())all[chatId].rules.push({text:r.trim(),addedAt:new Date().toLocaleDateString()});});
      save(all);
      return reply("✅ "+all[chatId].rules.length+" rules set. Type /rules to view.");
    }
    const rules=all[chatId].rules;
    if(!rules.length) return reply("No rules set.\n"+pfx+"addrule No spam\n"+pfx+"addrule Be respectful");
    const lines=["📜 *Group Rules*\n"];
    rules.forEach((r,i)=>lines.push((i+1)+". "+r.text));
    lines.push("\n_Breaking rules may result in warnings or removal._");
    return reply(lines.join("\n"));
  }
};
