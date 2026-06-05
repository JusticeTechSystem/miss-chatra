// @marketplace order-manager v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_order_manager.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"OrderManager",category:"business",desc:"Manage customer orders",
  command:["order","addorder","myorders","orderlist","completeorder"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[chat])all2[chat]={orders:[],counter:0};const d=all2[chat];
    if(command==='addorder'){
      const customer=args[0]||m?.pushName||'Customer';const item=args.slice(1,-1).join(' ')||'Order';const price=parseFloat(args[args.length-1])||0;
      d.counter=(d.counter||0)+1;const id='ORD-'+String(d.counter).padStart(4,'0');
      d.orders.push({id,customer,item,price,status:'pending',date:new Date().toLocaleDateString()});_sv(all2);
      return reply("Order Created: "+id+"\n\nCustomer: "+customer+"\nItem: "+item+"\nAmount: N"+price.toLocaleString()+"\n\nComplete: "+pfx+"completeorder "+id);
    }
    if(command==='completeorder'){const id=(args[0]||'').toUpperCase();const order=d.orders.find(o=>o.id===id);if(order){order.status='completed';_sv(all2);return reply("Order "+id+" marked complete!");}return reply("Order not found.");}
    if(command==='orderlist'){const pending=d.orders.filter(o=>o.status==='pending');return reply("Pending Orders ("+pending.length+")\n\n"+pending.map(o=>o.id+": "+o.customer+" — "+o.item+" (N"+o.price.toLocaleString()+")").join("\n"));}
    return reply(pfx+"addorder <customer> <item> <price>\n"+pfx+"orderlist\n"+pfx+"completeorder <id>");
  }
};
