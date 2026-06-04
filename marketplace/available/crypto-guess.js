// @marketplace crypto-guess v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_crypto_guess.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"CryptoGuess",category:"games",desc:"Guess the cryptocurrency price game",
  command:["cryptoguess","priceguess","coinbet"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const G=global.__cg=global.__cg||{};const key=chat+'_cg_'+uid;
    const PRICES={BTC:"~$95,000",ETH:"~$3,500",BNB:"~$600",SOL:"~$180",DOGE:"~$0.38"};
    const coins=Object.entries(PRICES);const[coin,price]=coins[Math.floor(Math.random()*coins.length)];
    G[key]={coin,answer:price};
    return reply("Crypto Price Guess!\n\nWhat is the approximate price of *"+coin+"* today?\n\nGuess: $XXX or $X,XXX\n\n_Closest answer wins!_");
  }
};
