// @marketplace stock-portfolio v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_stock_portfolio.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"StockPortfolio",category:"finance",desc:"Track your stock portfolio holdings",
  command:["stockport","myshares","stockholding"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const gs2=_ld()[uid]||{};
    if(command==='myshares'&&args.length>=2){
      const ticker=args[0].toUpperCase(),qty=parseFloat(args[1]),price=parseFloat(args[2])||0;
      if(!gs2.stocks)gs2.stocks={};
      gs2.stocks[ticker]={qty,avgPrice:price,date:new Date().toLocaleDateString()};
      const a=_ld();a[uid]=gs2;_sv(a);
      return reply("Added "+qty+" shares of "+ticker+" @ N"+price.toLocaleString());
    }
    const stocks=gs2.stocks||{};
    if(!Object.keys(stocks).length) return reply("No stocks.\n"+pfx+"myshares DANGOTE 100 280");
    return reply("My Stock Portfolio\n\n"+Object.entries(stocks).map(([t,d])=>"  "+t+": "+d.qty+" shares @ N"+d.avgPrice).join("\n"));
  }
};
