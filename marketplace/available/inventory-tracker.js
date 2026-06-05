// @marketplace inventory-tracker v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_inventory_tracker.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"InventoryTracker",category:"business",desc:"Track product inventory and reorder alerts",
  command:["inventory","additem","stocklevel","reorder"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[chat])all2[chat]={items:{}};const d=all2[chat];
    if(command==='additem'){const name=args[0];const qty=parseInt(args[1])||0;const min=parseInt(args[2])||10;const price=parseFloat(args[3])||0;if(!name)return reply("Usage: "+pfx+"additem <name> <qty> [min-stock] [cost]\nExample: "+pfx+"additem Rice 50 10 18000");d.items[name]={qty,min,price,unit:args[4]||'bags'};_sv(all2);return reply("Inventory: "+name+"\nQty: "+qty+"\nReorder at: "+min);}
    if(command==='stocklevel'){const items=Object.entries(d.items||{});if(!items.length)return reply("No inventory.\n"+pfx+"additem Rice 50 10");return reply("Stock Levels\n\n"+items.map(([n,v])=>(v.qty<=v.min?"⚠️ LOW":"✅")+" "+n+": "+v.qty+" "+v.unit).join("\n"));}
    if(command==='reorder'){const low=Object.entries(d.items||{}).filter(([,v])=>v.qty<=v.min);if(!low.length)return reply("All stock levels are adequate.");return reply("🔴 Reorder Required!\n\n"+low.map(([n,v])=>"  "+n+": "+v.qty+" left (min: "+v.min+")").join("\n"));}
    return reply(pfx+"additem <name> <qty> [min] [cost]\n"+pfx+"stocklevel\n"+pfx+"reorder");
  }
};
