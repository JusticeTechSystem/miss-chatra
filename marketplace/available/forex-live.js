// @marketplace forex-live v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_forex_live.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"ForexLive",category:"finance",desc:"Live forex rates for major pairs",
  command:["forex2","xrate","currencyrate"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const axios=require("axios");
    const pair=(args.join("")||"USDNGN").toUpperCase();
    try{
      const r=await axios.get("https://api.exchangerate-api.com/v4/latest/USD",{timeout:8000});
      const rates=r.data?.rates||{};
      const pairs={USDNGN:rates.NGN,GBPNGN:(rates.NGN/rates.GBP),EURNGN:(rates.NGN/rates.EUR),USDGHC:rates.GHS,USDKES:rates.KES};
      const val=pairs[pair];
      if(val) return reply(pair.slice(0,3)+"/"+pair.slice(3)+": "+val.toFixed(2)+"\n\nAll major pairs:\n"+Object.entries(pairs).map(([p,v])=>"  "+p+": "+v?.toFixed(2)).join("\n"));
    }catch{}
    return reply("Could not fetch rate. Try: "+pfx+"forex2 USDNGN");
  }
};
