// @marketplace price-history v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_price_history.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"PriceHistory",category:"finance",desc:"Log price history for items you track",
  command:["pricehistory","traceprice","pricelog"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const all2=_ld();if(!all2[uid])all2[uid]={};
    if(args.length>=2){
      const item=args[0],price=parseFloat(args[1]);
      if(!all2[uid][item])all2[uid][item]=[];
      all2[uid][item].push({price,date:new Date().toLocaleDateString()});_sv(all2);
      const history=all2[uid][item];
      const prev=history[history.length-2];
      const change=prev?((price-prev.price)/prev.price*100).toFixed(1):"—";
      return reply("Price logged: "+item+"\nPrice: N"+price.toLocaleString()+"\nChange: "+(prev?(change>0?"+":"")+change+"%":"First entry"));
    }
    const items=Object.entries(all2[uid]||{});
    if(!items.length) return reply("No price history.\n"+pfx+"pricelog Rice 22000");
    return reply("Price History\n\n"+items.map(([item,h])=>"  "+item+": N"+h[h.length-1].price.toLocaleString()+" ("+h.length+" entries)").join("\n"));
  }
};
