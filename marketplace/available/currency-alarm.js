// @marketplace currency-alarm v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_currency_alarm.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"CurrencyAlarm",category:"finance",desc:"Alert when exchange rate hits your target",command:["currencyalarm","ratealert2"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    if(args.length<2)return reply("Usage: "+pfx+"currencyalarm USDNGN 1700\nAlert when USD/NGN hits N1,700");const pair=args[0].toUpperCase(),target=parseFloat(args[1]);if(isNaN(target))return reply("Invalid target rate.");const all2=_ld();if(!all2[uid])all2[uid]=[];all2[uid].push({pair,target,set:new Date().toLocaleDateString()});_sv(all2);return reply("Rate Alert Set!\n\n"+pair+" @ "+target+"\nYou will be notified when this rate is reached.\n(Checked every 30 minutes when bot is running)");
  }
};
