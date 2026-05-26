// @marketplace auto-responder v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "AutoResponder", category: "admin",
  desc: "Set custom auto-responses for keywords",
  command: ["autorespond", "autoresponse", "setreply", "keywordreply"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","autorespond.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={rules:[]};
    if(!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
    if(command==="setreply"||command==="autorespond"){
      const sep=args.indexOf("=>");
      if(sep<0) return reply("Usage: "+pfx+"setreply <keyword> => <response>\nExample: "+pfx+"setreply price => Our prices start from ₦5000");
      const keyword=args.slice(0,sep).join(" ").toLowerCase().trim();
      const response=args.slice(sep+1).join(" ").trim();
      all[chatId].rules=all[chatId].rules.filter(r=>r.keyword!==keyword);
      all[chatId].rules.push({keyword,response,createdAt:new Date().toLocaleDateString()});
      save(all);
      return reply("✅ Auto-response set:\n\nTrigger: *"+keyword+"*\nReply: "+response);
    }
    if(command==="autoresponse"){
      const rules=all[chatId].rules;
      if(!rules.length) return reply("No auto-responses set.\n"+pfx+"setreply price => Our prices start from ₦5000");
      const lines=["🤖 *Auto-Responses ("+rules.length+")*\n"];
      rules.forEach((r,i)=>lines.push((i+1)+". Trigger: *"+r.keyword+"*\n   Reply: "+r.response.slice(0,50)+(r.response.length>50?"...":"")));
      return reply(lines.join("\n"));
    }
    return reply(pfx+"setreply <keyword> => <response>\n"+pfx+"autoresponse — see all rules");
  }
};
