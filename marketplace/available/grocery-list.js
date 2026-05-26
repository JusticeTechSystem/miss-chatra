// @marketplace grocery-list v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "GroceryList", category: "lifestyle", desc: "Manage a shared grocery shopping list",
  command: ["grocery","shoppinglist","grocerylist","addgrocery"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','grocery.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]=[];
    if(command==='addgrocery'&&args.length){
      const item=args.join(' ');all[chatId].push({item,done:false,added:m?.pushName||'Member'});save(all);
      return reply("Added to grocery list: "+item+"\nList has "+all[chatId].length+" items");
    }
    if(command==='shoppinglist'&&args[0]==='done'){
      const item=args.slice(1).join(' ').toLowerCase();
      const g=all[chatId].find(x=>x.item.toLowerCase().includes(item));
      if(g){g.done=true;save(all);return reply("Marked as bought: "+g.item);}
      return reply("Item not found.");
    }
    const pending=all[chatId].filter(x=>!x.done);
    const bought=all[chatId].filter(x=>x.done);
    if(!all[chatId].length) return reply("Empty grocery list.\n"+pfx+"addgrocery Rice 5kg\n"+pfx+"addgrocery Tomatoes");
    return reply("Grocery List\n\nNeed to buy ("+pending.length+"):\n"+pending.map(x=>"[ ] "+x.item).join("\n")+"\n\nBought ("+bought.length+"):\n"+bought.slice(-3).map(x=>"[x] "+x.item).join("\n")+"\n\n"+pfx+"addgrocery <item>\n"+pfx+"shoppinglist done <item>");
  }
};
