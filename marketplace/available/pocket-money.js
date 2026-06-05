// @marketplace pocket-money v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "PocketMoneyTracker", category: "finance", desc: "Track pocket money and allowances",
  command: ["pocketmoney","allowance","spendinglog"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','pocket.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]={balance:0,log:[]};
    const d=all[userId];
    if(args[0]==='add'){const amt=parseFloat(args[1]);if(!isNaN(amt)){d.balance+=amt;d.log.push({type:'add',amt,date:new Date().toLocaleDateString()});save(all);return reply("Added N"+amt.toLocaleString()+"\nBalance: N"+d.balance.toLocaleString());}}
    if(args[0]==='spend'){const amt=parseFloat(args[1]),note=args.slice(2).join(' ')||'Spent';if(!isNaN(amt)){d.balance-=amt;d.log.push({type:'spend',amt,note,date:new Date().toLocaleDateString()});save(all);return reply("Spent N"+amt.toLocaleString()+" on "+note+"\nRemaining: N"+d.balance.toLocaleString());}}
    return reply("Pocket Money\n\nBalance: N"+d.balance.toLocaleString()+"\n\nAdd: "+pfx+"pocketmoney add 5000\nSpend: "+pfx+"pocketmoney spend 1000 lunch\n\nLast 5 transactions:\n"+d.log.slice(-5).map(l=>(l.type==='add'?'+':'-')+'N'+l.amt+' '+( l.note||'')+' '+l.date).join('\n'));
  }
};
