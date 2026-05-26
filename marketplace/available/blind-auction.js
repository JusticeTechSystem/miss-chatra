// @marketplace blind-auction v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_blind_auction.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"BlindAuction",category:"games",desc:"Anonymous bidding game",command:["blindauction","placebid","auctionstart"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const G=global.__ba=global.__ba||{};const key=chat+'_ba';if(canUse&&args[0]==='start'){const item=args.slice(1).join(' ')||'Mystery Item';G[key]={item,bids:{},active:true,end:Date.now()+120000};return reply("🔨 Blind Auction Started!\n\nItem: *"+item+"*\n\nPlace your secret bid: /placebid <amount>\nBidding closes in 2 minutes!");}if(G[key]?.active){const bid=parseFloat(args[0]);if(isNaN(bid))return reply("Usage: "+pfx+"placebid <amount>\nExample: "+pfx+"placebid 5000");G[key].bids[norm(uid)]=bid;return reply("Bid placed! Your bid is secret until the auction closes.\nBids placed: "+Object.keys(G[key].bids).length);}if(!G[key])return reply("No auction active.\nAdmins: "+pfx+"auctionstart <item name>");return reply("Auction closed. No winner announced yet.");
  }
};
