// @marketplace neighbor-help v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "NeighborHelp", category: "community",
  desc: "Neighborhood help requests and offers",
  command: ["help2", "needhelp", "offerhelp", "neighborhelp", "helpboard"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","neighbor_help.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={posts:[],counter:0};
    const d=all[chatId];
    if(command==="needhelp"){
      const text=args.join(" ");
      if(!text) return reply("Usage: "+pfx+"needhelp <what you need>\nExample: "+pfx+"needhelp Looking for someone with a car jack — flat tyre");
      d.counter=(d.counter||0)+1;
      const id="H-"+String(d.counter).padStart(3,"0");
      d.posts.push({id,type:"need",text,name:m?.pushName||"Neighbor",userId,date:new Date().toLocaleDateString()});
      save(all);
      return reply("🆘 *Help Request Posted*\n\nID: "+id+"\n📝 "+text+"\n\n_Group members can reply if they can help_");
    }
    if(command==="offerhelp"){
      const text=args.join(" ");
      if(!text) return reply("Usage: "+pfx+"offerhelp <what you can offer>\nExample: "+pfx+"offerhelp I have a generator if anyone needs power");
      d.counter=(d.counter||0)+1;
      const id="O-"+String(d.counter).padStart(3,"0");
      d.posts.push({id,type:"offer",text,name:m?.pushName||"Neighbor",userId,date:new Date().toLocaleDateString()});
      save(all);
      return reply("🤲 *Help Offer Posted*\n\nID: "+id+"\n📝 "+text+"\n\n_Others can DM you if they need this_");
    }
    const posts=d.posts.slice(-8);
    if(!posts.length) return reply("No posts yet.\n"+pfx+"needhelp <request>\n"+pfx+"offerhelp <offer>");
    const lines=["🤝 *Neighbor Help Board*\n"];
    posts.forEach(p=>lines.push((p.type==="need"?"🆘 NEED":"🤲 OFFER")+" "+p.name+":\n  "+p.text+"\n  _"+p.date+"_\n"));
    return reply(lines.join("\n"));
  }
};
