// @marketplace crypto-portfolio v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CryptoPortfolio", category: "finance", desc: "Track crypto portfolio value",
  command: ["cryptohold","myportfolio","portfoliovalue"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','crypto_port.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]={holdings:{}};
    if(command==='cryptohold'&&args.length>=2){
      const coin=args[0].toUpperCase(),amount=parseFloat(args[1]);
      if(isNaN(amount)) return reply("Usage: "+pfx+"cryptohold BTC 0.5");
      all[userId].holdings[coin]=amount;save(all);
      return reply("Holding saved: "+amount+" "+coin);
    }
    const h=all[userId].holdings;
    if(!Object.keys(h).length) return reply("No holdings.\n"+pfx+"cryptohold BTC 0.5\n"+pfx+"cryptohold ETH 2");
    return reply("My Crypto Portfolio\n\n"+Object.entries(h).map(([c,a])=>a+" "+c).join("\n")+"\n\nUse /crypto <coin> to check live prices.");
  }
};
