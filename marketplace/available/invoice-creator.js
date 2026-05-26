// @marketplace invoice-creator v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "InvoiceCreator", category: "business",
  desc: "Create detailed invoices with itemized billing",
  command: ["invoice2", "createinvoice", "sendinvoice", "billinvoice"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","invoices.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={invoices:[],draft:null,counter:0};
    const d=all[chatId];
    if(command==="invoice2"||command==="createinvoice"){
      const client=args.join(" ")||"Client";
      d.counter=(d.counter||0)+1;
      const id="INV-"+String(d.counter).padStart(4,"0");
      d.draft={id,client,items:[],date:new Date().toLocaleDateString(),due:"30 days",paid:false};
      save(all);
      return reply("🧾 *Invoice "+id+" Created*\n\n👤 Client: "+client+"\n\nNow add items:\n"+pfx+"sendinvoice 1 \"Web Design\" 150000\n"+pfx+"sendinvoice 5 \"Articles\" 10000\n\nFinalize: "+pfx+"billinvoice");
    }
    if(command==="sendinvoice"){
      if(!d.draft) return reply("Start invoice first: "+pfx+"createinvoice <client name>");
      const qty=parseInt(args[0])||1;
      const desc=args.slice(1,-1).join(" ")||args.slice(1).join(" ");
      const price=parseFloat(args[args.length-1]);
      if(isNaN(price)) return reply("Usage: "+pfx+"sendinvoice <qty> <description> <unit price>\nExample: "+pfx+"sendinvoice 1 \"Website Design\" 150000");
      d.draft.items.push({qty,desc,price,total:qty*price});
      save(all);
      const subtotal=d.draft.items.reduce((s,x)=>s+x.total,0);
      return reply("✅ Added: "+qty+"x "+desc+" @ ₦"+price.toLocaleString()+" = ₦"+(qty*price).toLocaleString()+"\n\n📊 Running total: ₦"+subtotal.toLocaleString()+"\n\nFinalize: "+pfx+"billinvoice");
    }
    if(command==="billinvoice"){
      if(!d.draft||!d.draft.items.length) return reply("No draft invoice. Start with: "+pfx+"createinvoice <client>");
      const inv=d.draft;d.invoices.push(inv);d.draft=null;save(all);
      const subtotal=inv.items.reduce((s,x)=>s+x.total,0);
      const vat=subtotal*0.075;const total=subtotal+vat;
      const lines=["═══════════════════","🧾 *INVOICE "+inv.id+"*","═══════════════════","📅 Date: "+inv.date,"👤 Client: "+inv.client,"","*ITEMS:*"];
      inv.items.forEach(x=>lines.push("  "+x.qty+"x "+x.desc+"\n  ₦"+x.price.toLocaleString()+" each = ₦"+x.total.toLocaleString()));
      lines.push("","💰 Subtotal: ₦"+subtotal.toLocaleString(),"📊 VAT (7.5%): ₦"+vat.toLocaleString(undefined,{maximumFractionDigits:2}),"","*TOTAL: ₦"+total.toLocaleString(undefined,{maximumFractionDigits:2})+"*","═══════════════════","💳 Due: "+inv.due);
      return reply(lines.join("\n"));
    }
  }
};
