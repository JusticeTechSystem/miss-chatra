// @marketplace group-vote v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "GroupVote", category: "social",
  desc: "Create and manage group votes",
  command: ["vote2", "createvote", "castvote", "voteresult", "endvote"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","groupvotes.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={votes:[],counter:0,active:null};
    const d=all[chatId];
    if(command==="createvote"){
      if(!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
      const sep=args.indexOf("|");
      const question=sep>0?args.slice(0,sep).join(" "):args.join(" ");
      const options=sep>0?args.slice(sep+1).join(" ").split(",").map(o=>o.trim()):["Yes","No","Maybe"];
      d.counter=(d.counter||0)+1;
      const id="VOTE-"+d.counter;
      d.active={id,question,options,votes:{},startedAt:new Date().toISOString()};save(all);
      const optList=options.map((o,i)=>String.fromCharCode(65+i)+". "+o).join("\n");
      return reply("🗳️ *VOTE STARTED!*\n\n❓ "+question+"\n\n"+optList+"\n\nCast vote: "+pfx+"castvote A/B/C/...\nEnd: "+pfx+"endvote (admin)");
    }
    if(command==="castvote"){
      if(!d.active) return reply("No active vote.\n"+pfx+"createvote <question> | <opt1>, <opt2> (Admin)");
      const choice=(args[0]||"").toUpperCase().charCodeAt(0)-65;
      if(choice<0||choice>=d.active.options.length) return reply("Vote A, B, C... for the available options.");
      d.active.votes[userId]={choice,name:m?.pushName||"Member"};save(all);
      const counts=d.active.options.map((_,i)=>Object.values(d.active.votes).filter(v=>v.choice===i).length);
      const total=Object.keys(d.active.votes).length;
      return reply("✅ Vote cast for: *"+d.active.options[choice]+"*\n\n👥 Total votes: "+total);
    }
    if(command==="voteresult"||command==="endvote"){
      if(!d.active) return reply("No active vote.");
      if(command==="endvote"&&!isAdmin&&!isOwner&&!isDev) return reply("🔒 Admin only.");
      const counts=d.active.options.map((o,i)=>({option:o,count:Object.values(d.active.votes).filter(v=>v.choice===i).length}));
      counts.sort((a,b)=>b.count-a.count);
      const total=Object.keys(d.active.votes).length;
      const lines=["🗳️ *Vote Results*\n\n❓ "+d.active.question+"\n\n"];
      counts.forEach((c,i)=>{
        const pct=total>0?Math.round(c.count/total*100):0;
        const bar="█".repeat(Math.floor(pct/10))+"░".repeat(10-Math.floor(pct/10));
        lines.push((i===0?"🏆":"  ")+" *"+c.option+"*\n["+bar+"] "+pct+"% ("+c.count+" votes)");
      });
      if(command==="endvote"){d.active=null;save(all);}
      return reply(lines.join("\n")+"\n\n👥 Total votes: "+total);
    }
  }
};
